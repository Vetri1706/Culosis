import { useState, useEffect } from 'react';

type FunFeaturesProps = {
  username: string;
  score: number;
};

export const FunFeatures = ({ username, score }: FunFeaturesProps) => {
  const [showCompliment, setShowCompliment] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [showEncouragement, setShowEncouragement] = useState(false);

  const compliments = [
    'Great detective work, Inspector!',
    "You're getting really good at this!",
    'Nice catch on that fake document!',
    'Your investigation skills are improving!',
    'Excellent attention to detail!',
    "You're becoming a pro inspector!",
    'That was a tough case, well done!',
    'Your instincts are spot on!',
  ];

  const encouragements = [
    "Don't worry, even experienced inspectors make mistakes!",
    'Every mistake is a learning opportunity!',
    "You'll get the next one, keep going!",
    'Practice makes perfect, Inspector!',
    "Stay focused, you've got this!",
    'Trust your investigation tools!',
    'Take your time, accuracy is key!',
    "You're doing better than you think!",
  ];

  const achievements = [
    {
      name: 'First Day',
      description: 'Completed your first shift',
      icon: '[NEW]',
      unlocked: score > 0,
    },
    { name: 'Sharp Eye', description: 'Caught 5 violations', icon: '[EYE]', unlocked: score > 500 },
    {
      name: 'Steady Hand',
      description: 'Built a streak of 5',
      icon: '[STREAK]',
      unlocked: score > 1000,
    },
    {
      name: 'Veteran',
      description: 'Processed 20 immigrants',
      icon: '[VET]',
      unlocked: score > 2000,
    },
    {
      name: 'Master Inspector',
      description: 'Reached 5000 points',
      icon: '[MASTER]',
      unlocked: score > 5000,
    },
  ];

  useEffect(() => {
    // Show random compliments occasionally
    const complimentTimer = setInterval(() => {
      if (Math.random() < 0.3 && score > 100) {
        // 30% chance if player has some score
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        if (randomCompliment) {
          setCurrentCompliment(randomCompliment);
          setShowCompliment(true);
          setTimeout(() => setShowCompliment(false), 3000);
        }
      }
    }, 15000); // Every 15 seconds

    return () => clearInterval(complimentTimer);
  }, [score]);

  const showRandomEncouragement = () => {
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    if (randomEncouragement) {
      setCurrentCompliment(randomEncouragement);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    }
  };

  const getPersonalizedMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return `Good morning, Inspector ${username}!`;
    if (hour < 18) return `Good afternoon, Inspector ${username}!`;
    return `Good evening, Inspector ${username}!`;
  };

  const getScoreMessage = () => {
    if (score === 0) return 'Ready for your first case?';
    if (score < 500) return "You're off to a great start!";
    if (score < 1000) return "You're becoming quite skilled!";
    if (score < 2000) return 'Impressive work, Inspector!';
    if (score < 5000) return "You're a seasoned professional!";
    return 'Legendary Inspector status achieved!';
  };

  return (
    <div className="space-y-4">
      {/* Personalized Welcome */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-blue-800 rounded p-4 text-center">
        <div className="text-white font-bold text-lg">{getPersonalizedMessage()}</div>
        <div className="text-blue-200 text-sm mt-1">{getScoreMessage()}</div>
      </div>

      {/* Compliment/Encouragement Display */}
      {(showCompliment || showEncouragement) && (
        <div
          className={`p-4 rounded border-2 text-center animate-bounce ${
            showEncouragement
              ? 'bg-yellow-600 border-yellow-800 text-white'
              : 'bg-green-600 border-green-800 text-white'
          }`}
        >
          <div className="font-bold">{currentCompliment}</div>
        </div>
      )}

      {/* Quick Achievements */}
      <div className="bg-gray-800 border-4 border-gray-600 rounded p-4">
        <div className="text-center mb-3">
          <div className="bg-yellow-600 border-2 border-yellow-800 p-2 text-black font-bold">
            ACHIEVEMENTS
          </div>
        </div>

        <div className="space-y-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className={`flex items-center justify-between p-2 rounded border ${
                achievement.unlocked
                  ? 'bg-green-700 border-green-500 text-white'
                  : 'bg-gray-700 border-gray-500 text-gray-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{achievement.icon}</span>
                <div>
                  <div className="font-bold text-sm">{achievement.name}</div>
                  <div className="text-xs opacity-75">{achievement.description}</div>
                </div>
              </div>
              {achievement.unlocked && (
                <span className="text-yellow-300 text-sm font-bold">UNLOCKED</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Helpful Tips */}
      <div className="bg-green-700 border-4 border-green-900 rounded p-4">
        <div className="text-center mb-3">
          <div className="bg-green-600 border-2 border-green-800 p-2 text-white font-bold">
            HELPFUL TIPS
          </div>
        </div>

        <div className="text-green-200 text-sm space-y-2">
          <div className="bg-green-800 p-2 rounded">
            <strong>Pro Tip:</strong> Always check if names match across all documents!
          </div>
          <div className="bg-green-800 p-2 rounded">
            <strong>Remember:</strong> Use the thermometer to check for fever symptoms.
          </div>
          <div className="bg-green-800 p-2 rounded">
            <strong>Hint:</strong> Ask questions if something seems suspicious.
          </div>
        </div>
      </div>

      {/* Encouragement Button */}
      <button
        onClick={showRandomEncouragement}
        className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold p-3 border-2 border-yellow-800 rounded transition-all"
      >
        Need Some Encouragement? Click Here!
      </button>

      {/* Fun Stats */}
      <div className="bg-purple-700 border-4 border-purple-900 rounded p-4">
        <div className="text-center mb-3">
          <div className="bg-purple-600 border-2 border-purple-800 p-2 text-white font-bold">
            FUN FACTS
          </div>
        </div>

        <div className="text-purple-200 text-sm space-y-1">
          <div>You've earned enough credits to buy {Math.floor(score / 50)} cups of coffee!</div>
          <div>
            Your investigation skills are{' '}
            {score > 1000 ? 'excellent' : score > 500 ? 'good' : 'developing'}!
          </div>
          <div>Keep up the great work, Inspector {username}!</div>
        </div>
      </div>
    </div>
  );
};
