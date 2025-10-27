interface MultiplayerLobbyProps {
  onBack: () => void;
}

export const MultiplayerLobby = ({ onBack }: MultiplayerLobbyProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-4">Multiplayer Mode</h1>
        <p className="text-gray-300 mb-6">
          Multiplayer features are coming soon! Compete with other security guards in real-time.
        </p>
        <button
          onClick={onBack}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Back to Main Menu
        </button>
      </div>
    </div>
  );
};
