import { useState, useEffect, useCallback } from 'react';
import {
  GameState,
  Immigrant,
  Theme,
  GameDifficulty,
  ThemeConfig,
  InitResponse,
  StartGameResponse,
  ProcessImmigrantResponse,
} from '../../shared/types/api';

interface UseGameReturn {
  gameState: GameState | null;
  currentImmigrant: Immigrant | null;
  username: string;
  themes: Record<Theme, ThemeConfig> | null;
  loading: boolean;
  feedback: string | null;
  earnedPoints: number;
  startGame: (theme: Theme, difficulty: GameDifficulty) => Promise<void>;
  processImmigrant: (decision: 'approve' | 'reject') => Promise<void>;
  changeTheme: (theme: Theme) => Promise<void>;
}

export const useGame = (): UseGameReturn => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentImmigrant, setCurrentImmigrant] = useState<Immigrant | null>(null);
  const [username, setUsername] = useState<string>('');
  const [themes, setThemes] = useState<Record<Theme, ThemeConfig> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [earnedPoints, setEarnedPoints] = useState<number>(0);

  // Initialize game
  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch('/api/init');
        const data: InitResponse = await response.json();

        setGameState(data.gameState);
        setUsername(data.username);
        setThemes(data.themes);
        setLoading(false);
      } catch (error) {
        console.error('Failed to initialize game:', error);
        setLoading(false);
      }
    };

    init();
  }, []);

  // Start new game
  const startGame = useCallback(async (theme: Theme, difficulty: GameDifficulty) => {
    setLoading(true);
    setFeedback(null);
    setEarnedPoints(0);

    try {
      const response = await fetch('/api/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme, difficulty }),
      });

      const data: StartGameResponse = await response.json();
      setGameState(data.gameState);
      setCurrentImmigrant(data.currentImmigrant);
    } catch (error) {
      console.error('Failed to start game:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Process immigrant decision
  const processImmigrant = useCallback(
    async (decision: 'approve' | 'reject') => {
      if (!currentImmigrant) return;

      setLoading(true);

      try {
        const response = await fetch('/api/process', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ decision }),
        });

        const data: ProcessImmigrantResponse = await response.json();

        setGameState(data.gameState);
        setFeedback(data.feedback);
        setEarnedPoints(data.earnedPoints);

        // Show feedback briefly, then show next immigrant
        setTimeout(() => {
          setCurrentImmigrant(data.nextImmigrant);
          setFeedback(null);
          setEarnedPoints(0);
          setLoading(false);
        }, 2500);
      } catch (error) {
        console.error('Failed to process immigrant:', error);
        setLoading(false);
      }
    },
    [currentImmigrant]
  );

  // Change theme
  const changeTheme = useCallback(async (theme: Theme) => {
    setLoading(true);

    try {
      const response = await fetch('/api/change-theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme }),
      });

      const data = await response.json();
      setGameState(data.gameState);
    } catch (error) {
      console.error('Failed to change theme:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    gameState,
    currentImmigrant,
    username,
    themes,
    loading,
    feedback,
    earnedPoints,
    startGame,
    processImmigrant,
    changeTheme,
  };
};
