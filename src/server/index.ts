import express from 'express';
import {
  InitResponse,
  StartGameResponse,
  ProcessImmigrantResponse,
  ChangeThemeResponse,
  LeaderboardResponse,
  LeaderboardEntry,
  Theme,
  GameDifficulty,
} from '../shared/types/api';
import { redis, reddit, createServer, context, getServerPort } from '@devvit/web/server';
import { createPost } from './core/post';
import { THEMES, generateImmigrant, calculateScore, getFeedbackMessage } from './core/gameLogic';

const app = express();

// Middleware for JSON body parsing
app.use(express.json());
// Middleware for URL-encoded body parsing
app.use(express.urlencoded({ extended: true }));
// Middleware for plain text body parsing
app.use(express.text());

const router = express.Router();

router.get<{ postId: string }, InitResponse | { status: string; message: string }>(
  '/api/init',
  async (_req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      console.error('API Init Error: postId not found in devvit context');
      res.status(400).json({
        status: 'error',
        message: 'postId is required but missing from context',
      });
      return;
    }

    try {
      const username = await reddit.getCurrentUsername();

      // Get or initialize game state
      const gameStateKey = `game:${postId}`;
      const gameStateStr = await redis.get(gameStateKey);

      const gameState = gameStateStr
        ? JSON.parse(gameStateStr)
        : {
            theme: 'zombie' as Theme,
            difficulty: 'medium' as GameDifficulty,
            score: 0,
            immigrantsProcessed: 0,
            correctDecisions: 0,
            incorrectDecisions: 0,
            currentStreak: 0,
            highestStreak: 0,
            gameOver: false,
          };

      res.json({
        type: 'init',
        postId: postId,
        gameState,
        username: username ?? 'anonymous',
        themes: THEMES,
      });
    } catch (error) {
      console.error(`API Init Error for post ${postId}:`, error);
      let errorMessage = 'Unknown error during initialization';
      if (error instanceof Error) {
        errorMessage = `Initialization failed: ${error.message}`;
      }
      res.status(400).json({ status: 'error', message: errorMessage });
    }
  }
);

router.post<{ postId: string }, StartGameResponse | { status: string; message: string }>(
  '/api/start',
  async (req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    try {
      const { theme, difficulty } = req.body as { theme: Theme; difficulty: GameDifficulty };

      const gameState = {
        theme: theme || 'zombie',
        difficulty: difficulty || 'medium',
        score: 0,
        immigrantsProcessed: 0,
        correctDecisions: 0,
        incorrectDecisions: 0,
        currentStreak: 0,
        highestStreak: 0,
        gameOver: false,
      };

      // Save game state
      await redis.set(`game:${postId}`, JSON.stringify(gameState));

      // Generate first immigrant
      const immigrant = generateImmigrant(gameState.theme, gameState.difficulty, '1');
      await redis.set(`immigrant:${postId}`, JSON.stringify(immigrant));

      res.json({
        type: 'start',
        postId,
        gameState,
        currentImmigrant: immigrant,
      });
    } catch (error) {
      console.error(`Error starting game:`, error);
      res.status(400).json({ status: 'error', message: 'Failed to start game' });
    }
  }
);

router.post<{ postId: string }, ProcessImmigrantResponse | { status: string; message: string }>(
  '/api/process',
  async (req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    try {
      const { decision } = req.body as { decision: 'approve' | 'reject' };

      // Get current game state and immigrant
      const gameStateStr = await redis.get(`game:${postId}`);
      const immigrantStr = await redis.get(`immigrant:${postId}`);

      if (!gameStateStr || !immigrantStr) {
        res.status(400).json({ status: 'error', message: 'Game not started' });
        return;
      }

      const gameState = JSON.parse(gameStateStr);
      const immigrant = JSON.parse(immigrantStr);

      // Check if decision is correct
      const correct =
        (decision === 'approve' && immigrant.isValid) ||
        (decision === 'reject' && !immigrant.isValid);

      // Update game state
      gameState.immigrantsProcessed += 1;

      if (correct) {
        gameState.correctDecisions += 1;
        gameState.currentStreak += 1;
        gameState.highestStreak = Math.max(gameState.highestStreak, gameState.currentStreak);
      } else {
        gameState.incorrectDecisions += 1;
        gameState.currentStreak = 0;
      }

      const earnedPoints = calculateScore(correct, immigrant.riskLevel, gameState.currentStreak);
      gameState.score += earnedPoints;

      // Generate feedback
      const feedback = getFeedbackMessage(correct, immigrant, decision);

      // Generate next immigrant
      const nextImmigrant = generateImmigrant(
        gameState.theme,
        gameState.difficulty,
        String(gameState.immigrantsProcessed + 1)
      );

      // Save updated state
      await redis.set(`game:${postId}`, JSON.stringify(gameState));
      await redis.set(`immigrant:${postId}`, JSON.stringify(nextImmigrant));

      res.json({
        type: 'process',
        postId,
        correct,
        gameState,
        nextImmigrant,
        feedback,
        earnedPoints,
      });
    } catch (error) {
      console.error(`Error processing immigrant:`, error);
      res.status(400).json({ status: 'error', message: 'Failed to process immigrant' });
    }
  }
);

router.post<{ postId: string }, ChangeThemeResponse | { status: string; message: string }>(
  '/api/change-theme',
  async (req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    try {
      const { theme } = req.body as { theme: Theme };

      const gameStateStr = await redis.get(`game:${postId}`);
      if (!gameStateStr) {
        res.status(400).json({ status: 'error', message: 'Game not started' });
        return;
      }

      const gameState = JSON.parse(gameStateStr);
      gameState.theme = theme;

      await redis.set(`game:${postId}`, JSON.stringify(gameState));

      res.json({
        type: 'theme-change',
        postId,
        gameState,
      });
    } catch (error) {
      console.error(`Error changing theme:`, error);
      res.status(400).json({ status: 'error', message: 'Failed to change theme' });
    }
  }
);

router.get<{ postId: string }, LeaderboardResponse | { status: string; message: string }>(
  '/api/leaderboard',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({ status: 'error', message: 'postId is required' });
      return;
    }

    try {
      // Get all scores (simplified version - in production, use sorted sets)
      const entries: LeaderboardEntry[] = []; // In real implementation, fetch from Redis sorted set

      res.json({
        type: 'leaderboard',
        postId,
        entries,
      });
    } catch (error) {
      console.error(`Error fetching leaderboard:`, error);
      res.status(400).json({ status: 'error', message: 'Failed to fetch leaderboard' });
    }
  }
);

router.post('/internal/on-app-install', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      status: 'success',
      message: `Post created in subreddit ${context.subredditName} with id ${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

router.post('/internal/menu/post-create', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      navigateTo: `https://reddit.com/r/${context.subredditName}/comments/${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

// Use router middleware
app.use(router);

// Get port from environment variable with fallback
const port = getServerPort();

const server = createServer(app);
server.on('error', (err) => console.error(`server error; ${err.stack}`));
server.listen(port);
