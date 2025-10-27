import { useState } from 'react';
import { Immigrant } from '../../shared/types/api';

type InvestigationToolsProps = {
  immigrant: Immigrant;
  onToolUse: (tool: string, result: string) => void;
  onQuestionAsk: (question: string, answer: string) => void;
};

export const InvestigationTools = ({
  immigrant,
  onToolUse,
  onQuestionAsk,
}: InvestigationToolsProps) => {
  const [questionAsked, setQuestionAsked] = useState<string[]>([]);
  const [toolsUsed, setToolsUsed] = useState<string[]>([]);

  const tools = [
    {
      id: 'thermometer',
      name: 'Temperature Check',
      icon: 'TEMP',
      description: 'Check body temperature',
      action: () => {
        if (toolsUsed.includes('thermometer')) return;
        const temp = immigrant.document.temperature || 36.5 + Math.random() * 2;
        const result = `Temperature: ${temp.toFixed(1)}°C ${temp > 38 ? '(FEVER DETECTED)' : '(Normal)'}`;
        onToolUse('thermometer', result);
        setToolsUsed([...toolsUsed, 'thermometer']);
      },
    },
    {
      id: 'uv_light',
      name: 'UV Document Check',
      icon: 'UV',
      description: 'Check for document forgeries',
      action: () => {
        if (toolsUsed.includes('uv_light')) return;
        const isForged = immigrant.violations.some(
          (v) => v.includes('forged') || v.includes('fake')
        );
        const result = isForged
          ? 'UV CHECK: Suspicious markings detected'
          : 'UV CHECK: Document appears authentic';
        onToolUse('uv_light', result);
        setToolsUsed([...toolsUsed, 'uv_light']);
      },
    },
    {
      id: 'magnifier',
      name: 'Magnifying Glass',
      icon: 'MAG',
      description: 'Examine document details',
      action: () => {
        if (toolsUsed.includes('magnifier')) return;
        const hasDateIssue = new Date(immigrant.document.expiryDate) < new Date();
        const result = hasDateIssue
          ? 'MAGNIFIER: Document appears to be expired'
          : 'MAGNIFIER: Dates and stamps look legitimate';
        onToolUse('magnifier', result);
        setToolsUsed([...toolsUsed, 'magnifier']);
      },
    },
    {
      id: 'stethoscope',
      name: 'Health Check',
      icon: 'MED',
      description: 'Listen to heartbeat',
      action: () => {
        if (toolsUsed.includes('stethoscope')) return;
        const hasSymptoms = immigrant.document.symptoms && immigrant.document.symptoms.length > 0;
        const result = hasSymptoms
          ? 'STETHOSCOPE: Irregular breathing detected'
          : 'STETHOSCOPE: Vital signs normal';
        onToolUse('stethoscope', result);
        setToolsUsed([...toolsUsed, 'stethoscope']);
      },
    },
  ];

  const questions = [
    {
      id: 'purpose',
      question: 'What is the exact purpose of your visit?',
      getAnswer: () => {
        const purposes = [
          'I am visiting my family members who live here',
          'Business meeting with a local company',
          'I need medical treatment at the hospital',
          'Just tourism and sightseeing',
          'I will be attending university classes',
        ];
        return purposes[Math.floor(Math.random() * purposes.length)];
      },
    },
    {
      id: 'duration',
      question: 'How long do you plan to stay?',
      getAnswer: () => {
        const durations = [
          'About two weeks',
          'One month maximum',
          'Three months',
          'Six months',
          'I want to stay permanently',
        ];
        return durations[Math.floor(Math.random() * durations.length)];
      },
    },
    {
      id: 'symptoms',
      question: 'Are you experiencing any health symptoms?',
      getAnswer: () => {
        if (immigrant.document.symptoms && immigrant.document.symptoms.length > 0) {
          return `Yes, I have been having ${immigrant.document.symptoms.join(' and ')}`;
        }
        return 'No, I feel perfectly healthy';
      },
    },
    {
      id: 'vaccination',
      question: 'Can you show me proof of vaccination?',
      getAnswer: () => {
        if (immigrant.document.vaccinationStatus === false) {
          return 'I... I forgot my vaccination certificate at home';
        }
        return 'Yes, here is my vaccination record';
      },
    },
    {
      id: 'origin',
      question: 'Tell me about your journey from your home country',
      getAnswer: () => {
        const stories = [
          'I took a direct flight yesterday morning',
          'I traveled by train and bus, it took three days',
          'I came by ship, it was a very long journey',
          'I flew through two connecting cities to get here',
        ];
        return stories[Math.floor(Math.random() * stories.length)];
      },
    },
  ];

  const askQuestion = (question: any) => {
    if (questionAsked.includes(question.id)) return;
    const answer = question.getAnswer();
    onQuestionAsk(question.question, answer);
    setQuestionAsked([...questionAsked, question.id]);
  };

  return (
    <div className="bg-gray-600 border-4 border-gray-800 p-4">
      <div className="text-center mb-4">
        <div className="bg-yellow-400 border-2 border-yellow-600 p-2 text-black font-bold">
          INVESTIGATION TOOLS
        </div>
      </div>

      {/* Tools */}
      <div className="mb-6">
        <div className="text-white font-bold mb-2">EQUIPMENT:</div>
        <div className="grid grid-cols-2 gap-2">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={tool.action}
              disabled={toolsUsed.includes(tool.id)}
              className={`p-2 text-sm border-2 transition-all ${
                toolsUsed.includes(tool.id)
                  ? 'bg-gray-400 border-gray-500 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 border-blue-800 text-white hover:bg-blue-500'
              }`}
            >
              <div className="font-bold text-lg">[{tool.icon}]</div>
              <div className="font-bold text-xs">{tool.name}</div>
              <div className="text-xs opacity-75">{tool.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="mb-4">
        <div className="text-white font-bold mb-2">ASK QUESTIONS:</div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => askQuestion(q)}
              disabled={questionAsked.includes(q.id)}
              className={`w-full p-2 text-sm text-left border-2 transition-all ${
                questionAsked.includes(q.id)
                  ? 'bg-gray-400 border-gray-500 text-gray-600 cursor-not-allowed'
                  : 'bg-green-600 border-green-800 text-white hover:bg-green-500'
              }`}
            >
              {q.question}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Actions */}
      <div>
        <div className="text-white font-bold mb-2">ACTIONS:</div>
        <div className="space-y-2">
          <button
            onClick={() =>
              onToolUse('search', 'Searched belongings - Found: Personal items, no contraband')
            }
            className="w-full p-2 text-sm bg-orange-600 border-2 border-orange-800 text-white hover:bg-orange-500"
          >
            [BAG] Search Belongings
          </button>
          <button
            onClick={() => onToolUse('database', 'Database check - No criminal records found')}
            className="w-full p-2 text-sm bg-purple-600 border-2 border-purple-800 text-white hover:bg-purple-500"
          >
            [DB] Check Database
          </button>
        </div>
      </div>
    </div>
  );
};
