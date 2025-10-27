import { useState, useEffect } from 'react';
import { Immigrant, GameState, ThemeConfig } from '../../shared/types/api';
import { CharacterPortrait } from './CharacterPortrait';
import { DocumentViewer } from './DocumentViewer';

type SecurityDeskProps = {
  immigrant: Immigrant;
  gameState: GameState;
  theme: ThemeConfig;
  username: string;
  onApprove: () => void;
  onReject: () => void;
  loading: boolean;
  feedback: string | null;
  earnedPoints: number;
};

export const SecurityDesk = ({
  immigrant,
  gameState,
  theme,
  username,
  onApprove,
  onReject,
  loading,
  feedback,
  earnedPoints,
}: SecurityDeskProps) => {
  const [inspectionNotes, setInspectionNotes] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stamperReady, setStamperReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addInspectionNote = (note: string) => {
    setInspectionNotes((prev) => [...prev, `${currentTime.toLocaleTimeString()}: ${note}`]);
  };

  const handleDocumentClick = (field: string) => {
    addInspectionNote(
      `Examined ${field} - ${field === 'temperature' && immigrant.document.temperature && immigrant.document.temperature > 38 ? 'FEVER DETECTED' : 'Noted'}`
    );
  };

  const handleStampDecision = (decision: 'approve' | 'reject') => {
    setStamperReady(true);
    setTimeout(() => {
      if (decision === 'approve') {
        onApprove();
      } else {
        onReject();
      }
      setStamperReady(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {/* Top Status Bar */}
      <div className="glass-dark rounded-xl p-4 mb-6 border border-blue-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-3xl">{theme.icon}</div>
            <div>
              <div className="text-blue-400 font-semibold">CHECKPOINT ALPHA-7</div>
              <div className="text-white font-bold">AGENT {username.toUpperCase()}</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 neon-green">
              {gameState.score.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">SECURITY POINTS</div>
          </div>

          <div className="text-right">
            <div className="text-white font-mono">{currentTime.toLocaleTimeString()}</div>
            <div className="text-xs text-gray-400">
              STREAK: {gameState.currentStreak} | PROCESSED: {gameState.immigrantsProcessed}
            </div>
          </div>
        </div>
      </div>

      {/* Main Desk Layout */}
      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Left Panel - Character & Quick Info */}
        <div className="space-y-4">
          {/* Character Portrait */}
          <div className="glass-dark rounded-xl p-4 border border-purple-500/20">
            <div className="text-center mb-4">
              <div className="text-purple-400 font-bold neon-purple">👤 SUBJECT</div>
            </div>
            <CharacterPortrait immigrant={immigrant} className="h-64" />

            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-800/50 rounded p-2 text-center">
                <div className="text-gray-400">AGE</div>
                <div className="text-white font-bold">{immigrant.document.age}</div>
              </div>
              <div className="bg-gray-800/50 rounded p-2 text-center">
                <div className="text-gray-400">ORIGIN</div>
                <div className="text-white font-bold text-xs">{immigrant.document.origin}</div>
              </div>
            </div>
          </div>

          {/* Inspection Tools */}
          <div className="glass-dark rounded-xl p-4 border border-yellow-500/20">
            <div className="text-yellow-400 font-bold mb-3 neon-orange">🔍 INSPECTION TOOLS</div>
            <div className="space-y-2">
              <button
                onClick={() => addInspectionNote('Used thermal scanner')}
                className="w-full p-2 bg-red-900/20 hover:bg-red-900/30 rounded border border-red-500/30 text-red-300 text-sm transition-all"
              >
                🌡️ Thermal Scanner
              </button>
              <button
                onClick={() => addInspectionNote('Checked biometric data')}
                className="w-full p-2 bg-blue-900/20 hover:bg-blue-900/30 rounded border border-blue-500/30 text-blue-300 text-sm transition-all"
              >
                👁️ Biometric Reader
              </button>
              <button
                onClick={() => addInspectionNote('Verified documents')}
                className="w-full p-2 bg-green-900/20 hover:bg-green-900/30 rounded border border-green-500/30 text-green-300 text-sm transition-all"
              >
                📋 Document Verifier
              </button>
            </div>
          </div>

          {/* Inspection Notes */}
          <div className="glass-dark rounded-xl p-4 border border-cyan-500/20 flex-1">
            <div className="text-cyan-400 font-bold mb-3 neon-blue">📝 INSPECTION LOG</div>
            <div className="space-y-1 max-h-32 overflow-y-auto text-xs">
              {inspectionNotes.map((note, index) => (
                <div key={index} className="text-gray-300 font-mono">
                  {note}
                </div>
              ))}
              {inspectionNotes.length === 0 && (
                <div className="text-gray-500 italic">No inspection notes yet...</div>
              )}
            </div>
          </div>
        </div>

        {/* Center Panel - Documents */}
        <div className="glass-dark rounded-xl p-4 border border-green-500/20">
          <div className="text-green-400 font-bold mb-4 neon-green">📄 DOCUMENT REVIEW</div>
          <DocumentViewer immigrant={immigrant} onDocumentClick={handleDocumentClick} />
        </div>

        {/* Right Panel - Decision & Controls */}
        <div className="space-y-4">
          {/* Current Subject Info */}
          <div className="glass-dark rounded-xl p-4 border border-orange-500/20">
            <div className="text-orange-400 font-bold mb-3 neon-orange">📊 ASSESSMENT</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Risk Level:</span>
                <span
                  className={`font-bold px-2 py-1 rounded text-sm ${
                    immigrant.riskLevel === 'high'
                      ? 'bg-red-600 text-white'
                      : immigrant.riskLevel === 'medium'
                        ? 'bg-orange-600 text-white'
                        : 'bg-green-600 text-white'
                  }`}
                >
                  {immigrant.riskLevel.toUpperCase()}
                </span>
              </div>

              <div className="text-sm">
                <div className="text-gray-400 mb-1">Violations Found:</div>
                <div className="text-red-300">
                  {immigrant.violations.length > 0 ? immigrant.violations.length : 'None detected'}
                </div>
              </div>

              <div className="text-sm">
                <div className="text-gray-400 mb-1">Processing Time:</div>
                <div className="text-white font-mono">{Math.floor(Math.random() * 60) + 30}s</div>
              </div>
            </div>
          </div>

          {/* Decision Stamps */}
          <div className="glass-dark rounded-xl p-6 border border-red-500/20">
            <div className="text-red-400 font-bold mb-4 neon-red text-center">⚖️ DECISION</div>

            {!feedback ? (
              <div className="space-y-4">
                <button
                  onClick={() => handleStampDecision('approve')}
                  disabled={loading || stamperReady}
                  className={`w-full p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 ${
                    stamperReady
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-lg'
                  } text-white border-2 border-green-500/50`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl">✅</span>
                    <div>
                      <div>APPROVED</div>
                      <div className="text-sm opacity-75">Grant Entry</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleStampDecision('reject')}
                  disabled={loading || stamperReady}
                  className={`w-full p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 ${
                    stamperReady
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-lg'
                  } text-white border-2 border-red-500/50`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl">❌</span>
                    <div>
                      <div>REJECTED</div>
                      <div className="text-sm opacity-75">Deny Entry</div>
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              <div
                className={`text-center p-6 rounded-xl ${
                  feedback.startsWith('✅')
                    ? 'bg-green-900/30 border border-green-500/50'
                    : 'bg-red-900/30 border border-red-500/50'
                }`}
              >
                <div className="text-6xl mb-3">{feedback.startsWith('✅') ? '✅' : '❌'}</div>
                <div
                  className={`text-xl font-bold mb-2 ${
                    feedback.startsWith('✅')
                      ? 'text-green-400 neon-green'
                      : 'text-red-400 neon-red'
                  }`}
                >
                  {feedback}
                </div>
                {earnedPoints > 0 && (
                  <div className="text-2xl font-bold text-yellow-400 neon-orange animate-bounce">
                    +{earnedPoints.toLocaleString()} POINTS!
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Security Protocols */}
          <div className="glass-dark rounded-xl p-4 border border-purple-500/20">
            <div className="text-purple-400 font-bold mb-3 neon-purple">🛡️ PROTOCOLS</div>
            <div className="space-y-2 text-xs">
              {theme.checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-800/30 rounded">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{checkpoint}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stamper Animation Overlay */}
      {stamperReady && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-8xl animate-bounce">🔨</div>
        </div>
      )}
    </div>
  );
};
