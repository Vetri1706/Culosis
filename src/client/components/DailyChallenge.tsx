import { useState, useEffect } from 'react';
import { Theme, GameDifficulty } from '../../shared/types/api';

type DailyChallengeProps = {
  onStartChallenge: (theme: Theme, difficulty: GameDifficulty, challengeType: string) => void;
  username: string;
};

type Challenge = {
  id: string;
  name: string;
  description: string;
  theme: Theme;
  difficulty: GameDifficulty;
  type: 'speed' | 'accuracy' | 'streak' | 'survival';
  target: number;
  reward: number;
  completed: boolean;
};

export const DailyChallenge = ({ onStartChallenge, username }: DailyChallengeProps) => {
  const [dailyStreak, setDailyStreak] = useState(0);

  const [todaysChallenges, setTodaysChallenges] = useState<Challenge[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  useEffect(() => {
    // Load daily streak and challenges from localStorage
    const savedStreak = localStorage.getItem('dailyStreak') || '0';
    const savedLastLogin = localStorage.getItem('lastLogin') || '';
    const savedCompleted = JSON.parse(localStorage.getItem('completedChallenges') || '[]');

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    // Check if user logged in today
    if (savedLastLogin === today) {
      setDailyStreak(parseInt(savedStreak));
    } else if (savedLastLogin === yesterday) {
      // Consecutive day - increment streak
      const newStreak = parseInt(savedStreak) + 1;
      setDailyStreak(newStreak);
      localStorage.setItem('dailyStreak', newStreak.toString());
      localStorage.setItem('lastLogin', today);
      localStorage.setItem('completedChallenges', '[]'); // Reset daily challenges
      setCompletedChallenges([]);
    } else {
      // Streak broken or first time
      setDailyStreak(1);
      localStorage.setItem('dailyStreak', '1');
      localStorage.setItem('lastLogin', today);
      localStorage.setItem('completedChallenges', '[]');
      setCompletedChallenges([]);
    }

    setCompletedChallenges(savedCompleted);

    // Generate today's challenges
    generateDailyChallenges();
  }, []);

  const generateDailyChallenges = () => {
    const today = new Date();
    const seed = today.getDate() + today.getMonth() * 31 + today.getFullYear() * 365;

    const challengeTypes = [
      {
        id: 'quick_check',
        name: 'Quick Inspector',
        description: 'Process 2 immigrants correctly',
        type: 'speed' as const,
        target: 2,
        reward: 200,
      },
      {
        id: 'careful_work',
        name: 'Careful Work',
        description: 'Get 2 decisions right in a row',
        type: 'accuracy' as const,
        target: 2,
        reward: 250,
      },
      {
        id: 'investigation_pro',
        name: 'Investigation Pro',
        description: 'Use 2 different investigation tools',
        type: 'accuracy' as const,
        target: 2,
        reward: 300,
      },
      {
        id: 'question_master',
        name: 'Question Master',
        description: 'Ask 2 questions before making a decision',
        type: 'streak' as const,
        target: 2,
        reward: 200,
      },
    ];

    const themes: Theme[] = ['zombie', 'pandemic', 'alien', 'nuclear'];
    const difficulties: GameDifficulty[] = ['easy', 'medium', 'hard'];

    // Generate 3 daily challenges based on date seed
    const challenges: Challenge[] = [];
    for (let i = 0; i < 3; i++) {
      const challengeIndex = (seed + i) % challengeTypes.length;
      const themeIndex = (seed + i * 2) % themes.length;
      const difficultyIndex = (seed + i * 3) % difficulties.length;

      const baseChallenge = challengeTypes[challengeIndex];
      if (baseChallenge) {
        challenges.push({
          ...baseChallenge,
          id: `${baseChallenge.id}_${i}`,
          theme: themes[themeIndex] || 'zombie',
          difficulty: difficulties[difficultyIndex] || 'medium',
          completed: completedChallenges.includes(`${baseChallenge.id}_${i}`),
        });
      }
    }

    setTodaysChallenges(challenges);
  };

  const getStreakReward = () => {
    if (dailyStreak >= 30) return 'LEGENDARY INSPECTOR';
    if (dailyStreak >= 14) return 'VETERAN GUARD';
    if (dailyStreak >= 7) return 'EXPERIENCED OFFICER';
    if (dailyStreak >= 3) return 'DEDICATED WORKER';
    return 'NEW RECRUIT';
  };

  const getStreakBonus = () => {
    return Math.min(dailyStreak * 10, 500); // Max 500 bonus
  };

  return (
    <div className="space-y-6">
      {/* Daily Login Streak */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 border-4 border-yellow-800 rounded p-6">
        <div className="text-center">
          <div className="text-4xl mb-2">[STREAK]</div>
          <div className="text-3xl font-bold text-white mb-2">
            {dailyStreak} DAY{dailyStreak !== 1 ? 'S' : ''}
          </div>
          <div className="text-xl text-yellow-200 mb-2">{getStreakReward()}</div>
          <div className="text-sm text-yellow-300">
            Daily Bonus: +{getStreakBonus()} Credits per game
          </div>
          <div className="text-xs text-yellow-400 mt-2">
            Keep logging in daily to maintain your streak!
          </div>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
        <div className="text-center mb-4">
          <div className="bg-blue-600 border-2 border-blue-800 p-2 text-white font-bold">
            TODAY'S CHALLENGES
          </div>
        </div>

        <div className="space-y-4">
          {todaysChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`border-2 p-4 rounded transition-all ${
                challenge.completed
                  ? 'bg-green-700 border-green-500 opacity-75'
                  : 'bg-gray-700 border-gray-500 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-bold text-lg">
                  {challenge.completed ? '[COMPLETED]' : '[ACTIVE]'} {challenge.name}
                </div>
                <div className="text-yellow-300 font-bold">+{challenge.reward} Credits</div>
              </div>

              <div className="text-gray-300 text-sm mb-3">{challenge.description}</div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  Theme: {challenge.theme.toUpperCase()} | Difficulty:{' '}
                  {challenge.difficulty.toUpperCase()} | Type: {challenge.type.toUpperCase()}
                </div>

                {!challenge.completed && (
                  <button
                    onClick={() =>
                      onStartChallenge(challenge.theme, challenge.difficulty, challenge.type)
                    }
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 border-2 border-blue-800 text-sm font-bold"
                  >
                    START CHALLENGE
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Progress */}
        <div className="mt-6 bg-gray-800 border-2 border-gray-600 p-4 rounded">
          <div className="text-white font-bold mb-2">TODAY'S PROGRESS</div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Completed: {completedChallenges.length}/3</span>
            <span className="text-yellow-300">
              Bonus Credits: +{completedChallenges.length * 250}
            </span>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(completedChallenges.length / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Weekly Goals */}
      <div className="bg-purple-700 border-4 border-purple-900 rounded p-6">
        <div className="text-center mb-4">
          <div className="bg-purple-600 border-2 border-purple-800 p-2 text-white font-bold">
            WEEKLY GOALS
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-white">
            <span>Login 7 days in a row</span>
            <span className={dailyStreak >= 7 ? 'text-green-400' : 'text-gray-400'}>
              {Math.min(dailyStreak, 7)}/7
            </span>
          </div>

          <div className="flex items-center justify-between text-white">
            <span>Complete 15 daily challenges</span>
            <span className="text-gray-400">0/15</span>
          </div>

          <div className="flex items-center justify-between text-white">
            <span>Process 500 immigrants</span>
            <span className="text-gray-400">0/500</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="text-yellow-300 font-bold">Weekly Reward: +2000 Credits</div>
          <div className="text-xs text-purple-200">Resets every Monday</div>
        </div>
      </div>

      {/* Inspector Rank */}
      <div className="bg-red-700 border-4 border-red-900 rounded p-6">
        <div className="text-center">
          <div className="text-2xl mb-2">[RANK]</div>
          <div className="text-xl font-bold text-white mb-2">
            INSPECTOR {username.toUpperCase()}
          </div>
          <div className="text-lg text-red-200 mb-2">{getStreakReward()}</div>

          <div className="text-sm text-red-300">
            Next Rank:{' '}
            {dailyStreak < 7
              ? 'EXPERIENCED OFFICER (7 days)'
              : dailyStreak < 14
                ? 'VETERAN GUARD (14 days)'
                : dailyStreak < 30
                  ? 'LEGENDARY INSPECTOR (30 days)'
                  : 'MAX RANK ACHIEVED'}
          </div>
        </div>
      </div>
    </div>
  );
};
