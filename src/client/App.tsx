import { useGame } from './hooks/useGame';
import { Theme } from '../shared/types/api';
import { CharacterPortrait } from './components/CharacterPortrait';
import { InvestigationTools } from './components/InvestigationTools';
import { MultiplayerLobby } from './components/MultiplayerLobby';
import { useState, useEffect } from 'react';

export const App = () => {
  const {
    gameState,
    currentImmigrant,
    username,
    themes,
    loading,
    feedback,
    earnedPoints,
    startGame,
    processImmigrant,
  } = useGame();

  const [selectedTheme, setSelectedTheme] = useState<Theme>('zombie');
  const [showInstructions, setShowInstructions] = useState(false);
  const [inspectionTime, setInspectionTime] = useState(0);
  const [investigationLog, setInvestigationLog] = useState<string[]>([]);
  const [gameMode, setGameMode] = useState<'menu' | 'multiplayer' | 'singleplayer'>('menu');
  const [canMakeDecision, setCanMakeDecision] = useState(false);
  const [toolsUsed, setToolsUsed] = useState(0);
  const [dailyBonus] = useState(0);

  // Timer for inspection
  useEffect(() => {
    if (currentImmigrant && !feedback) {
      const timer = setInterval(() => setInspectionTime((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [currentImmigrant, feedback]);

  useEffect(() => {
    if (currentImmigrant) {
      setInspectionTime(0);
      setInvestigationLog([]);
      setCanMakeDecision(false);
      setToolsUsed(0);
    }
  }, [currentImmigrant]);

  const handleToolUse = (tool: string, result: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setInvestigationLog((prev) => [...prev, `${timestamp} - ${tool.toUpperCase()}: ${result}`]);
    setToolsUsed((prev) => prev + 1);

    // Allow decision after using at least 2 tools or asking questions
    if (toolsUsed >= 1) {
      setCanMakeDecision(true);
    }
  };

  const handleQuestionAsk = (question: string, answer: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setInvestigationLog((prev) => [
      ...prev,
      `${timestamp} - QUESTION: ${question}`,
      `${timestamp} - ANSWER: ${answer}`,
    ]);
    setCanMakeDecision(true);
  };

  // Loading screen
  if (loading && !gameState) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">LOADING</div>
          <h1 className="text-2xl font-bold text-white mb-4">Border Control System</h1>
          <div className="w-48 h-2 bg-gray-600 rounded-full mx-auto">
            <div
              className="h-2 bg-red-600 rounded-full animate-pulse"
              style={{ width: '60%' }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Main menu
  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gray-500 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-500 rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className="relative mb-12">
              <div className="bg-gradient-to-r from-gray-800 via-slate-700 to-gray-800 p-12 rounded-3xl border border-gray-600 shadow-2xl backdrop-blur-sm">
                <div className="text-sm font-mono text-gray-400 mb-2 tracking-widest">
                  CLASSIFIED • BORDER CONTROL DIVISION
                </div>
                <div className="text-6xl font-bold mb-4 text-red-400 tracking-wider">
                  CHECKPOINT ALPHA
                </div>
                <h1 className="text-8xl font-black text-white mb-6 tracking-widest">
                  PAPERS, PLEASE
                </h1>
                <div className="text-2xl text-gray-300 font-semibold mb-4">
                  Advanced Border Control Simulation
                </div>
                <div className="text-xl text-amber-400 font-medium">
                  Welcome back, Inspector {username.toUpperCase()}
                </div>

                <div className="mt-8 inline-block bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-3 rounded-lg font-bold text-lg border border-amber-400">
                  SECURITY CLEARANCE: MAXIMUM
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            {gameState?.score && gameState.score > 0 && (
              <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-8 rounded-2xl border border-emerald-600 mb-12 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-3">
                  Previous Session: {gameState.score.toLocaleString()} Credits
                </div>
                <div className="text-lg text-emerald-200">
                  Accuracy:{' '}
                  {gameState.immigrantsProcessed > 0
                    ? Math.round((gameState.correctDecisions / gameState.immigrantsProcessed) * 100)
                    : 100}
                  % • Best Streak: {gameState.currentStreak}
                </div>
              </div>
            )}
          </div>

          {/* Game Mode Selection */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Single Player */}
            <button
              onClick={() => setGameMode('singleplayer')}
              className="group relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 border border-blue-600 p-12 text-white transition-all duration-500 transform hover:scale-105 rounded-3xl shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-mono text-blue-300 mb-6">[SOLO]</div>
                <div className="text-4xl font-bold mb-6">SINGLE PLAYER</div>
                <div className="text-xl mb-8 text-blue-200 leading-relaxed">
                  Face AI-controlled immigrants with advanced investigation tools and interrogation
                  systems
                </div>
                <div className="text-left space-y-3 text-blue-300 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Advanced investigation equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Strategic interrogation system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Progressive difficulty scaling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Performance tracking</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-black px-8 py-4 rounded-xl font-bold text-lg">
                  START MISSION
                </div>
              </div>
            </button>

            {/* Multiplayer */}
            <button
              onClick={() => setGameMode('multiplayer')}
              className="group relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:via-emerald-700 hover:to-emerald-800 border border-emerald-600 p-12 text-white transition-all duration-500 transform hover:scale-105 rounded-3xl shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-mono text-emerald-300 mb-6">[MULTI]</div>
                <div className="text-4xl font-bold mb-6">MULTIPLAYER</div>
                <div className="text-xl mb-8 text-emerald-200 leading-relaxed">
                  Compete against real players in dynamic inspector vs immigrant scenarios
                </div>
                <div className="text-left space-y-3 text-emerald-300 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Real-time player interaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Dynamic role assignment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Competitive ranking system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Team-based challenges</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-black px-8 py-4 rounded-xl font-bold text-lg">
                  JOIN LOBBY
                </div>
              </div>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-4">INVESTIGATION</div>
              <div className="text-lg text-slate-300 leading-relaxed">
                Use professional-grade tools including thermal scanners, UV lights, magnifiers, and
                database verification systems
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-4">INTERROGATION</div>
              <div className="text-lg text-slate-300 leading-relaxed">
                Deploy strategic questioning techniques to uncover inconsistencies in travel
                documents and personal histories
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-4">ANALYSIS</div>
              <div className="text-lg text-slate-300 leading-relaxed">
                Analyze realistic character profiles with detailed symptoms, backgrounds, and visual
                cues for comprehensive assessment
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-2xl border border-red-600 mb-12 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-200 mb-2">
                SECURITY STATUS: HIGH ALERT
              </div>
              <div className="text-lg text-red-300">
                Enhanced screening protocols active • Document verification mandatory • All
                personnel maintain vigilance
              </div>
            </div>
          </div>

          {/* System Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400 mb-2">99.7%</div>
              <div className="text-slate-300 font-medium">System Uptime</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
              <div className="text-slate-300 font-medium">Active Inspectors</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-300 font-medium">Operations</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">ALPHA</div>
              <div className="text-slate-300 font-medium">Security Level</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Multiplayer lobby
  if (gameMode === 'multiplayer') {
    return (
      <MultiplayerLobby
        onStartGame={() => {
          // In real implementation, this would start multiplayer game
          setGameMode('singleplayer'); // For now, fallback to singleplayer
        }}
        onJoinAsBot={() => {
          setGameMode('singleplayer');
        }}
      />
    );
  }

  // Game setup screen
  if (!currentImmigrant) {
    return (
      <div className="min-h-screen bg-gray-700 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => setGameMode('menu')}
            className="mb-4 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 border-2 border-gray-800"
          >
            Back to Menu
          </button>

          {/* Header */}
          <div className="text-center mb-8 bg-red-800 p-6 rounded border-4 border-red-900">
            <div className="text-4xl mb-2">CHECKPOINT</div>
            <h1 className="text-4xl font-bold text-white mb-2">PAPERS, PLEASE</h1>
            <p className="text-red-200">Inspector {username} - Report for Duty</p>
            {gameState?.score && gameState.score > 0 && (
              <div className="text-xl font-bold text-yellow-300 mt-2">
                Previous Shift Score: {gameState.score}
              </div>
            )}
          </div>

          {/* Game setup */}
          <div className="bg-gray-600 border-4 border-gray-800 rounded p-6">
            {/* Theme selection */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">SELECT ASSIGNMENT</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {themes &&
                  Object.entries(themes).map(([themeKey, themeData]: [string, any]) => (
                    <button
                      key={themeKey}
                      onClick={() => setSelectedTheme(themeKey as Theme)}
                      className={`p-4 border-2 text-left transition-all ${
                        selectedTheme === themeKey
                          ? 'bg-red-700 border-red-500 text-white'
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

            {/* Instructions */}
            <div className="mb-6">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="w-full bg-gray-500 hover:bg-gray-400 text-white font-bold p-3 border-2 border-gray-700"
              >
                INSTRUCTIONS {showInstructions ? 'HIDE' : 'SHOW'}
              </button>

              {showInstructions && (
                <div className="mt-3 bg-gray-800 border-2 border-gray-700 p-4 text-white">
                  <div className="space-y-3">
                    <p>
                      <strong>Investigation Required:</strong> You must use investigation tools and
                      ask questions before making decisions.
                    </p>
                    <p>
                      <strong>Tools Available:</strong> Thermometer, UV light, magnifier,
                      stethoscope, database check, and baggage search.
                    </p>
                    <p>
                      <strong>Question System:</strong> Ask about purpose, duration, health,
                      vaccination, and travel history.
                    </p>
                    <p>
                      <strong>Document Analysis:</strong> Compare information across passport, entry
                      permit, and health certificate.
                    </p>
                    <p>
                      <strong>Decision Making:</strong> Only approve/deny after thorough
                      investigation. Wrong decisions affect your rating!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Start button */}
            <button
              onClick={() => startGame(selectedTheme, 'medium')}
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-600 text-white font-bold text-xl py-4 border-2 border-green-800 transition-all disabled:opacity-50"
            >
              {loading ? 'PREPARING CHECKPOINT...' : 'BEGIN SHIFT'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main game screen
  const theme = themes?.[gameState?.theme || 'zombie'];
  if (!theme) return null;

  return (
    <div className="min-h-screen bg-gray-600 p-2">
      {/* Top status bar */}
      <div className="bg-red-800 border-4 border-red-900 p-3 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl">[{theme.name.charAt(0)}]</div>
          <div className="text-white">
            <div className="font-bold">CHECKPOINT - {theme.name.toUpperCase()}</div>
            <div className="text-sm">Inspector {username}</div>
          </div>
        </div>

        <div className="text-white text-right">
          <div className="font-bold text-lg">{gameState?.score || 0} Credits</div>
          <div className="text-sm">Processed: {gameState?.immigrantsProcessed || 0}</div>
          {dailyBonus > 0 && (
            <div className="text-xs text-yellow-300">Daily Bonus: +{dailyBonus}</div>
          )}
        </div>

        <div className="text-white text-center">
          <div className="font-bold">
            {Math.floor(inspectionTime / 60)}:{(inspectionTime % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-sm">Inspection Time</div>
        </div>
      </div>

      {/* Enhanced Feedback popup */}
      {feedback && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            className={`p-8 border-4 text-center rounded-xl transform animate-bounce ${
              feedback.startsWith('CORRECT')
                ? 'bg-green-700 border-green-500'
                : 'bg-red-700 border-red-500'
            }`}
          >
            <div className="text-6xl mb-4">
              {feedback.startsWith('CORRECT') ? '[GREAT JOB]' : '[TRY AGAIN]'}
            </div>
            <div className="text-2xl font-bold text-white mb-3">{feedback}</div>
            {earnedPoints > 0 && (
              <div className="text-2xl font-bold text-yellow-300 animate-pulse">
                +{earnedPoints} Credits Earned!
              </div>
            )}
            {feedback.startsWith('CORRECT') && gameState && gameState.currentStreak > 1 && (
              <div className="text-lg text-green-300 mt-2">
                Amazing! {gameState.currentStreak} in a row!
              </div>
            )}
            {!feedback.startsWith('CORRECT') && (
              <div className="text-sm text-red-300 mt-2">Don't worry, you'll get the next one!</div>
            )}
          </div>
        </div>
      )}

      {/* Main game area */}
      <div className="grid lg:grid-cols-5 gap-2 h-[calc(100vh-120px)]">
        {/* Left - Character booth */}
        <div className="bg-gray-500 border-4 border-gray-700 p-4">
          <div className="text-center mb-4">
            <div className="bg-gray-400 border-2 border-gray-600 p-2 text-black font-bold">
              NEXT ENTRANT
            </div>
          </div>

          {/* Character portrait */}
          <div className="mb-4">
            <CharacterPortrait immigrant={currentImmigrant} className="h-48" />
          </div>

          {/* Basic info */}
          <div className="bg-gray-400 border-2 border-gray-600 p-3 text-black">
            <div className="text-sm space-y-1">
              <div>
                <strong>Claims to be:</strong>
              </div>
              <div className="font-bold">{currentImmigrant.name}</div>
              <div className="mt-2">
                <strong>Physical appearance:</strong>
              </div>
              <div className="text-xs">{currentImmigrant.appearance}</div>
            </div>
          </div>
        </div>

        {/* Center - Documents */}
        <div className="lg:col-span-2 bg-brown-200 border-4 border-brown-400 p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Passport */}
            <div className="bg-blue-900 border-2 border-blue-700 p-4 text-white">
              <div className="text-center font-bold mb-3 text-yellow-300">
                PASSPORT - REPUBLIC OF {currentImmigrant.document.origin.toUpperCase()}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <strong>Name:</strong> {currentImmigrant.document.name}
                </div>
                <div>
                  <strong>ID Number:</strong> {currentImmigrant.document.id}
                </div>
                <div>
                  <strong>Age:</strong> {currentImmigrant.document.age}
                </div>
                <div>
                  <strong>Blood Type:</strong> {currentImmigrant.document.bloodType || 'O+'}
                </div>
                <div>
                  <strong>Issued:</strong> {currentImmigrant.document.issueDate}
                </div>
                <div>
                  <strong>Expires:</strong> {currentImmigrant.document.expiryDate}
                </div>
              </div>
            </div>

            {/* Entry Permit */}
            <div className="bg-green-800 border-2 border-green-600 p-4 text-white">
              <div className="text-center font-bold mb-3 text-yellow-300">ENTRY PERMIT</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <strong>From:</strong> {currentImmigrant.document.origin}
                </div>
                <div>
                  <strong>To:</strong> {currentImmigrant.document.destination}
                </div>
                <div>
                  <strong>Purpose:</strong> {currentImmigrant.document.reason}
                </div>
                <div>
                  <strong>Duration:</strong> 30 Days
                </div>
                <div>
                  <strong>Profession:</strong>{' '}
                  {currentImmigrant.document.profession || 'Not Listed'}
                </div>
                <div>
                  <strong>Sponsor:</strong> Self
                </div>
              </div>
            </div>

            {/* Medical Certificate */}
            {(currentImmigrant.document.temperature ||
              currentImmigrant.document.vaccinationStatus !== undefined) && (
              <div className="bg-red-800 border-2 border-red-600 p-4 text-white">
                <div className="text-center font-bold mb-3 text-yellow-300">HEALTH CERTIFICATE</div>
                <div className="space-y-2 text-sm">
                  {currentImmigrant.document.temperature && (
                    <div className="flex justify-between">
                      <span>Body Temperature:</span>
                      <span
                        className={
                          currentImmigrant.document.temperature > 38 ? 'text-red-300 font-bold' : ''
                        }
                      >
                        {currentImmigrant.document.temperature.toFixed(1)}°C
                      </span>
                    </div>
                  )}
                  {currentImmigrant.document.vaccinationStatus !== undefined && (
                    <div className="flex justify-between">
                      <span>Vaccination Status:</span>
                      <span
                        className={
                          !currentImmigrant.document.vaccinationStatus
                            ? 'text-red-300 font-bold'
                            : ''
                        }
                      >
                        {currentImmigrant.document.vaccinationStatus ? 'COMPLETE' : 'INCOMPLETE'}
                      </span>
                    </div>
                  )}
                  {currentImmigrant.document.symptoms &&
                    currentImmigrant.document.symptoms.length > 0 && (
                      <div>
                        <div className="text-red-300 font-bold">REPORTED SYMPTOMS:</div>
                        <div className="text-red-200">
                          {currentImmigrant.document.symptoms.join(', ')}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            )}

            {/* Personal Statement */}
            <div className="bg-gray-700 border-2 border-gray-500 p-4 text-white">
              <div className="text-center font-bold mb-3 text-yellow-300">PERSONAL STATEMENT</div>
              <div className="text-sm italic">"{currentImmigrant.story}"</div>
            </div>

            {/* Scan Results */}
            {currentImmigrant.document.scanResult && (
              <div className="bg-purple-800 border-2 border-purple-600 p-4 text-white">
                <div className="text-center font-bold mb-3 text-yellow-300">SCAN RESULTS</div>
                <div className="text-sm font-mono">{currentImmigrant.document.scanResult}</div>
              </div>
            )}
          </div>
        </div>

        {/* Investigation Tools */}
        <div>
          <InvestigationTools
            immigrant={currentImmigrant}
            onToolUse={handleToolUse}
            onQuestionAsk={handleQuestionAsk}
          />
        </div>

        {/* Right - Decision panel */}
        <div className="bg-gray-500 border-4 border-gray-700 p-4">
          <div className="text-center mb-4">
            <div className="bg-gray-400 border-2 border-gray-600 p-2 text-black font-bold">
              INSPECTOR DECISION
            </div>
          </div>

          {/* Investigation Log */}
          <div className="bg-black border-2 border-gray-600 p-3 mb-4 h-32 overflow-y-auto">
            <div className="text-green-400 font-mono text-xs">
              <div className="text-yellow-400 mb-2">INVESTIGATION LOG:</div>
              {investigationLog.length === 0 ? (
                <div className="text-gray-500">Use tools and ask questions to investigate...</div>
              ) : (
                investigationLog.map((log, i) => (
                  <div key={i} className="mb-1">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Current rules */}
          <div className="bg-yellow-200 border-2 border-yellow-400 p-3 mb-4 text-black text-xs">
            <div className="font-bold mb-2">CURRENT REGULATIONS:</div>
            <ul className="space-y-1">
              {theme.checkpoints.slice(0, 3).map((rule, i) => (
                <li key={i}>• {rule}</li>
              ))}
            </ul>
          </div>

          {/* Decision buttons */}
          <div className="space-y-3">
            <button
              onClick={() => processImmigrant('approve')}
              disabled={loading || !!feedback || !canMakeDecision}
              className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 border-2 border-green-800 transition-all disabled:opacity-50"
            >
              <div className="text-lg">[APPROVE]</div>
              <div className="text-sm">Entry Granted</div>
              {!canMakeDecision && <div className="text-xs text-red-200">Investigate first!</div>}
            </button>

            <button
              onClick={() => processImmigrant('reject')}
              disabled={loading || !!feedback || !canMakeDecision}
              className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 border-2 border-red-800 transition-all disabled:opacity-50"
            >
              <div className="text-lg">[DENY]</div>
              <div className="text-sm">Entry Refused</div>
              {!canMakeDecision && <div className="text-xs text-red-200">Investigate first!</div>}
            </button>
          </div>

          {/* Performance */}
          <div className="mt-4 bg-gray-400 border-2 border-gray-600 p-3 text-black text-sm">
            <div className="font-bold mb-2">PERFORMANCE:</div>
            <div>
              Accuracy:{' '}
              {gameState && gameState.immigrantsProcessed > 0
                ? Math.round((gameState.correctDecisions / gameState.immigrantsProcessed) * 100)
                : 100}
              %
            </div>
            <div>Streak: {gameState?.currentStreak || 0}</div>
            <div>Tools Used: {toolsUsed}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
