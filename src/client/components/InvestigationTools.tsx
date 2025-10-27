import { Immigrant } from '../../shared/types/api';

interface InvestigationToolsProps {
  immigrant: Immigrant | null;
  onToolUse: (tool: string, result: string) => void;
  disabled?: boolean;
}

export const InvestigationTools = ({ immigrant, onToolUse, disabled }: InvestigationToolsProps) => {
  if (!immigrant) return null;

  const tools = [
    { name: 'Thermometer', icon: '🌡️', action: () => {
      const temp = immigrant.document.temperature || 36.8;
      onToolUse('Thermometer', `Temperature: ${temp.toFixed(1)}°C`);
    }},
    { name: 'Scanner', icon: '🔍', action: () => {
      const result = immigrant.document.scanResult || 'Normal scan';
      onToolUse('Scanner', result);
    }},
    { name: 'ID Check', icon: '🆔', action: () => {
      onToolUse('ID Check', `Document ID: ${immigrant.document.id}`);
    }},
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {tools.map((tool) => (
        <button
          key={tool.name}
          onClick={tool.action}
          disabled={disabled}
          className="flex flex-col items-center justify-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="text-2xl mb-1">{tool.icon}</span>
          <span className="text-xs text-white">{tool.name}</span>
        </button>
      ))}
    </div>
  );
};
