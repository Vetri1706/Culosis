// Game Types
export type Theme = 'zombie' | 'pandemic' | 'alien' | 'nuclear';

export type GameDifficulty = 'easy' | 'medium' | 'hard';

export type Document = {
  id: string;
  name: string;
  age: number;
  origin: string;
  destination: string;
  reason: string;
  temperature?: number;
  bloodType?: string;
  vaccinationStatus?: boolean;
  symptoms?: string[];
  scanResult?: string;
  profession?: string;
  issueDate: string;
  expiryDate: string;
};

export type Immigrant = {
  id: string;
  name: string;
  appearance: string;
  document: Document;
  isValid: boolean;
  violations: string[];
  riskLevel: 'low' | 'medium' | 'high';
  story: string;
};

export type GameState = {
  theme: Theme;
  difficulty: GameDifficulty;
  score: number;
  immigrantsProcessed: number;
  correctDecisions: number;
  incorrectDecisions: number;
  currentStreak: number;
  highestStreak: number;
  gameOver: boolean;
  timeRemaining?: number;
};

export type ThemeConfig = {
  name: string;
  description: string;
  icon: string;
  rules: string[];
  checkpoints: string[];
};

// API Response Types
export type InitResponse = {
  type: 'init';
  postId: string;
  gameState: GameState;
  username: string;
  themes: Record<Theme, ThemeConfig>;
};

export type StartGameResponse = {
  type: 'start';
  postId: string;
  gameState: GameState;
  currentImmigrant: Immigrant;
};

export type ProcessImmigrantResponse = {
  type: 'process';
  postId: string;
  correct: boolean;
  gameState: GameState;
  nextImmigrant: Immigrant | null;
  feedback: string;
  earnedPoints: number;
};

export type ChangeThemeResponse = {
  type: 'theme-change';
  postId: string;
  gameState: GameState;
};

export type LeaderboardEntry = {
  username: string;
  score: number;
  immigrantsProcessed: number;
  accuracy: number;
};

export type LeaderboardResponse = {
  type: 'leaderboard';
  postId: string;
  entries: LeaderboardEntry[];
};
