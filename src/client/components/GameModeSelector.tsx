import { useState } from 'react';
import { Theme, GameDifficulty } from '../../shared/types/api';
import { DailyChallenge } from './DailyChallenge';
import { FunFeatures } from './FunFeatures';

type GameModeSelectorProps = {
  themes: Record<Theme, any>;
  username: string;
  onStartGame: (theme: Theme, difficulty: GameDifficulty, mode?: string) => void;
  onMultiplayer: () => void;
  previousScore?: number;
};

export const GameModeSelector = ({
  themes,
  username,
  onStartGame,
  onMultiplayer,
  previousScore,
}: GameModeSelectorProps) => {
  const [selectedMode, setSelectedMode] = useState<'daily' | 'freeplay' | 'multiplayer'>('daily');
  const [selectedTheme, setSelectedTheme] = useState<Theme>('zombie');
  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty>('medium');

  const handleDailyChallenge = (
    theme: Theme,
    difficulty: GameDifficulty,
    challengeType: string
  ) => {
    onStartGame(theme, difficulty, challengeType);
  };

  return (
    <div className="min-h-screen bg-gray-700 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 bg-red-800 p-6 rounded border-4 border-red-900">
          <div className="text-4xl mb-2">CHECKPOINT</div>
          <h1 className="text-4xl font-bold text-white mb-2">PAPERS, PLEASE</h1>
          <p className="text-red-200">Advanced Border Control Simulation</p>
          <p className="text-yellow-300 mt-2">Welcome back, Inspector {username}</p>
          {previousScore && previousScore > 0 && (
            <div className="text-xl font-bold text-green-400 mt-2">
              Last Session: {previousScore} Credits
            </div>
          )}
        </div>

        {/* Mode Selection Tabs */}
        <div className="flex mb-6 bg-gray-600 border-4 border-gray-800 rounded">
          <button
            onClick={() => setSelectedMode('daily')}
            className={`flex-1 p-4 font-bold transition-all ${
              selectedMode === 'daily'
                ? 'bg-yellow-600 text-black'
                : 'bg-gray-500 text-white hover:bg-gray-400'
            }`}
          >
            [DAILY] CHALLENGES
          </button>
          <button
            onClick={() => setSelectedMode('freeplay')}
            className={`flex-1 p-4 font-bold transition-all ${
              selectedMode === 'freeplay'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-500 text-white hover:bg-gray-400'
            }`}
          >
            [FREE] PLAY
          </button>
          <button
            onClick={() => setSelectedMode('multiplayer')}
            className={`flex-1 p-4 font-bold transition-all ${
              selectedMode === 'multiplayer'
                ? 'bg-green-600 text-white'
                : 'bg-gray-500 text-white hover:bg-gray-400'
            }`}
          >
            [MULTI] PLAYER
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Mode Content */}
          <div className="lg:col-span-2">
            {selectedMode === 'daily' && (
              <DailyChallenge onStartChallenge={handleDailyChallenge} username={username} />
            )}

            {selectedMode === 'freeplay' && (
              <div className="space-y-6">
                {/* Free Play Options */}
                <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
                  <div className="text-center mb-4">
                    <div className="bg-blue-600 border-2 border-blue-800 p-2 text-white font-bold">
                      FREE PLAY MODE
                    </div>
                  </div>

                  <div className="text-white text-center mb-6">
                    <p>Play at your own pace with any theme and difficulty.</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Perfect for practicing investigation skills and learning the game.
                    </p>
                  </div>

                  {/* Theme Selection */}
                  <div className="mb-6">
                    <h3 className="text-white font-bold mb-3 text-center">SELECT ASSIGNMENT</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {themes &&
                        Object.entries(themes).map(([themeKey, themeData]: [string, any]) => (
                          <button
                            key={themeKey}
                            onClick={() => setSelectedTheme(themeKey as Theme)}
                            className={`p-4 border-2 text-left transition-all ${
                              selectedTheme === themeKey
                                ? 'bg-blue-700 border-blue-500 text-white'
                                : 'bg-gray-500 border-gray-700 text-gray-200 hover:bg-gray-400'
                            }`}
                          >
                            <div className="text-2xl mb-2">[{themeData.name.charAt(0)}]</div>
                            <div className="text-lg font-bold">{themeData.name}</div>
                            <div className="text-sm opacity-90">{themeData.description}</div>
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Start Button */}
                  <button
                    onClick={() => onStartGame(selectedTheme, 'medium', 'freeplay')}
                    className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl py-4 border-2 border-blue-800 transition-all"
                  >
                    START FREE PLAY
                  </button>
                </div>

                {/* Practice Modes */}
                <div className="bg-green-700 border-4 border-green-900 rounded p-6">
                  <div className="text-center mb-4">
                    <div className="bg-green-600 border-2 border-green-800 p-2 text-white font-bold">
                      PRACTICE MODES
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => onStartGame('zombie', 'easy', 'tutorial')}
                      className="w-full bg-green-600 hover:bg-green-500 text-white p-3 border-2 border-green-800 text-left"
                    >
                      <div className="font-bold">[TUTORIAL] Basic Training</div>
                      <div className="text-sm opacity-75">
                        Learn the basics with guided instructions
                      </div>
                    </button>

                    <button
                      onClick={() => onStartGame('pandemic', 'medium', 'investigation')}
                      className="w-full bg-green-600 hover:bg-green-500 text-white p-3 border-2 border-green-800 text-left"
                    >
                      <div className="font-bold">[PRACTICE] Investigation Skills</div>
                      <div className="text-sm opacity-75">
                        Focus on using tools and asking questions
                      </div>
                    </button>

                    <button
                      onClick={() => onStartGame('alien', 'hard', 'expert')}
                      className="w-full bg-green-600 hover:bg-green-500 text-white p-3 border-2 border-green-800 text-left"
                    >
                      <div className="font-bold">[EXPERT] Advanced Scenarios</div>
                      <div className="text-sm opacity-75">
                        Complex cases for experienced inspectors
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedMode === 'multiplayer' && (
              <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
                <div className="text-center mb-6">
                  <div className="bg-green-600 border-2 border-green-800 p-2 text-white font-bold">
                    MULTIPLAYER MODE
                  </div>
                </div>

                <div className="text-white text-center mb-6">
                  <p className="text-lg mb-4">Play with friends in real-time!</p>
                  <p className="text-sm text-gray-300">
                    One player acts as the inspector while others play as immigrants trying to cross
                    the border.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-800 p-4 rounded border-2 border-blue-600">
                    <div className="text-white font-bold mb-2">INSPECTOR ROLE</div>
                    <ul className="text-sm text-blue-200 space-y-1">
                      <li>• Use investigation tools on other players</li>
                      <li>• Ask questions in real-time chat</li>
                      <li>• Try to catch players with fake documents</li>
                      <li>• Score points for correct decisions</li>
                    </ul>
                  </div>

                  <div className="bg-red-800 p-4 rounded border-2 border-red-600">
                    <div className="text-white font-bold mb-2">IMMIGRANT ROLE</div>
                    <ul className="text-sm text-red-200 space-y-1">
                      <li>• Get assigned fake or problematic documents</li>
                      <li>• Try to convince inspector you're legitimate</li>
                      <li>• Answer questions cleverly to avoid detection</li>
                      <li>• Win by successfully entering the country</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onMultiplayer}
                  className="w-full mt-6 bg-green-700 hover:bg-green-600 text-white font-bold text-xl py-4 border-2 border-green-800 transition-all"
                >
                  JOIN MULTIPLAYER LOBBY
                </button>
              </div>
            )}
          </div>

          {/* Right Panel - Fun Features & Stats */}
          <div>
            <FunFeatures username={username} score={previousScore || 0} />

            {/* Quick Tips */}
            <div className="bg-yellow-200 border-4 border-yellow-400 rounded p-4 text-black">
              <div className="font-bold mb-2">INSPECTOR TIPS:</div>
              <ul className="text-sm space-y-1">
                <li>• Always use investigation tools before deciding</li>
                <li>• Ask questions to catch inconsistencies</li>
                <li>• Check document expiry dates carefully</li>
                <li>• Look for health violations and symptoms</li>
                <li>• Compare names across all documents</li>
                <li>• Daily challenges give bonus rewards</li>
              </ul>
            </div>

            {/* Current Events */}
            <div className="bg-red-800 border-4 border-red-600 rounded p-4">
              <div className="text-center mb-3">
                <div className="bg-red-600 border-2 border-red-400 p-2 text-white font-bold">
                  SECURITY ALERTS
                </div>
              </div>

              <div className="text-red-200 text-sm space-y-2">
                <div className="bg-red-900 p-2 rounded">
                  <div className="font-bold">HIGH ALERT:</div>
                  <div>Increased document forgeries detected</div>
                </div>
                <div className="bg-red-900 p-2 rounded">
                  <div className="font-bold">HEALTH WARNING:</div>
                  <div>Monitor for fever symptoms</div>
                </div>
                <div className="bg-red-900 p-2 rounded">
                  <div className="font-bold">NOTICE:</div>
                  <div>New investigation tools available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
