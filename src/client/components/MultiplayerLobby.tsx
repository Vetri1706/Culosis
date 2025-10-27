import { useState, useEffect } from 'react';

type Player = {
  id: string;
  name: string;
  role: 'inspector' | 'immigrant';
  ready: boolean;
};

type MultiplayerLobbyProps = {
  onStartGame: (role: 'inspector' | 'immigrant') => void;
  onJoinAsBot: () => void;
};

export const MultiplayerLobby = ({ onStartGame, onJoinAsBot }: MultiplayerLobbyProps) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedRole, setSelectedRole] = useState<'inspector' | 'immigrant'>('inspector');
  const [_playerName, _setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState<'multiplayer' | 'vs_bot'>('vs_bot');

  // Simulate multiplayer lobby (in real implementation, this would connect to server)
  useEffect(() => {
    // Simulate some online players
    const mockPlayers: Player[] = [
      { id: '1', name: 'Agent_Smith', role: 'inspector', ready: true },
      { id: '2', name: 'SneakyTraveler', role: 'immigrant', ready: false },
      { id: '3', name: 'BorderGuard99', role: 'inspector', ready: true },
    ];
    setPlayers(mockPlayers);
  }, []);

  const handleJoinGame = () => {
    if (gameMode === 'vs_bot') {
      onJoinAsBot();
    } else {
      onStartGame(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 bg-red-800 p-6 rounded border-4 border-red-900">
          <div className="text-4xl mb-2">🌐</div>
          <h1 className="text-4xl font-bold text-white mb-2">MULTIPLAYER CHECKPOINT</h1>
          <p className="text-red-200">Choose Your Role in the Border Control Game</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Game Mode Selection */}
          <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">GAME MODE</h2>

            <div className="space-y-4">
              <button
                onClick={() => setGameMode('vs_bot')}
                className={`w-full p-4 border-2 text-left transition-all ${
                  gameMode === 'vs_bot'
                    ? 'bg-blue-700 border-blue-500 text-white'
                    : 'bg-gray-500 border-gray-700 text-gray-200 hover:bg-gray-400'
                }`}
              >
                <div className="text-xl font-bold mb-2">🤖 VS AI IMMIGRANTS</div>
                <div className="text-sm">
                  Play against computer-controlled immigrants trying to sneak past
                </div>
              </button>

              <button
                onClick={() => setGameMode('multiplayer')}
                className={`w-full p-4 border-2 text-left transition-all ${
                  gameMode === 'multiplayer'
                    ? 'bg-blue-700 border-blue-500 text-white'
                    : 'bg-gray-500 border-gray-700 text-gray-200 hover:bg-gray-400'
                }`}
              >
                <div className="text-xl font-bold mb-2">👥 MULTIPLAYER</div>
                <div className="text-sm">
                  Play with real players - one as inspector, others as immigrants
                </div>
              </button>
            </div>

            {gameMode === 'multiplayer' && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-3">SELECT ROLE:</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedRole('inspector')}
                    className={`w-full p-3 border-2 transition-all ${
                      selectedRole === 'inspector'
                        ? 'bg-green-700 border-green-500 text-white'
                        : 'bg-gray-500 border-gray-700 text-gray-200 hover:bg-gray-400'
                    }`}
                  >
                    <div className="font-bold">🛂 INSPECTOR</div>
                    <div className="text-sm">Check documents and catch illegal immigrants</div>
                  </button>

                  <button
                    onClick={() => setSelectedRole('immigrant')}
                    className={`w-full p-3 border-2 transition-all ${
                      selectedRole === 'immigrant'
                        ? 'bg-red-700 border-red-500 text-white'
                        : 'bg-gray-500 border-gray-700 text-gray-200 hover:bg-gray-400'
                    }`}
                  >
                    <div className="font-bold">🥸 IMMIGRANT</div>
                    <div className="text-sm">
                      Try to sneak past with fake or problematic documents
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Role Explanations */}
          <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">HOW IT WORKS</h2>

            {gameMode === 'vs_bot' ? (
              <div className="space-y-4 text-white">
                <div className="bg-blue-800 p-4 rounded border-2 border-blue-600">
                  <div className="font-bold text-lg mb-2">🛂 YOU ARE THE INSPECTOR</div>
                  <ul className="text-sm space-y-1">
                    <li>• Use investigation tools to check immigrants</li>
                    <li>• Ask questions to catch lies</li>
                    <li>• Look for document forgeries and health violations</li>
                    <li>• AI immigrants will try to trick you with fake papers</li>
                    <li>• Some AI immigrants are legitimate, some are not</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded border-2 border-gray-600">
                  <div className="font-bold text-lg mb-2">🤖 AI IMMIGRANTS</div>
                  <ul className="text-sm space-y-1">
                    <li>• Smart AI that creates believable fake documents</li>
                    <li>• Will answer your questions (sometimes lying)</li>
                    <li>• Different difficulty levels = smarter AI</li>
                    <li>• Each AI has unique backstory and motives</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-white">
                <div className="bg-green-800 p-4 rounded border-2 border-green-600">
                  <div className="font-bold text-lg mb-2">🛂 INSPECTOR ROLE</div>
                  <ul className="text-sm space-y-1">
                    <li>• Use tools to investigate other players</li>
                    <li>• Ask questions in real-time chat</li>
                    <li>• Try to catch players with fake documents</li>
                    <li>• Score points for correct decisions</li>
                  </ul>
                </div>

                <div className="bg-red-800 p-4 rounded border-2 border-red-600">
                  <div className="font-bold text-lg mb-2">🥸 IMMIGRANT ROLE</div>
                  <ul className="text-sm space-y-1">
                    <li>• Get assigned fake or problematic documents</li>
                    <li>• Try to convince inspector you're legitimate</li>
                    <li>• Answer questions cleverly to avoid detection</li>
                    <li>• Win by successfully entering the country</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Online Players (for multiplayer mode) */}
        {gameMode === 'multiplayer' && (
          <div className="mt-6 bg-gray-600 border-4 border-gray-800 rounded p-6">
            <h2 className="text-xl font-bold text-white mb-4">ONLINE PLAYERS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {players.map((player) => (
                <div
                  key={player.id}
                  className={`p-3 border-2 rounded ${
                    player.role === 'inspector'
                      ? 'bg-green-700 border-green-500'
                      : 'bg-red-700 border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="font-bold">
                        {player.role === 'inspector' ? '🛂' : '🥸'} {player.name}
                      </div>
                      <div className="text-sm opacity-75">
                        {player.role === 'inspector' ? 'Inspector' : 'Immigrant'}
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        player.ready ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                    >
                      {player.ready ? 'READY' : 'WAITING'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start Game Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleJoinGame}
            className="bg-green-700 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 border-2 border-green-800 transition-all"
          >
            {gameMode === 'vs_bot' ? '🚀 START VS AI' : `🚀 JOIN AS ${selectedRole.toUpperCase()}`}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-yellow-200 border-4 border-yellow-400 p-4 text-black">
          <div className="font-bold mb-2">💡 MULTIPLAYER TIPS:</div>
          <ul className="text-sm space-y-1">
            <li>
              • <strong>Inspectors:</strong> Use all investigation tools before making decisions
            </li>
            <li>
              • <strong>Immigrants:</strong> Stay consistent with your story and documents
            </li>
            <li>
              • <strong>Communication:</strong> Real-time chat makes the game more realistic
            </li>
            <li>
              • <strong>Strategy:</strong> Immigrants can work together to create believable stories
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
