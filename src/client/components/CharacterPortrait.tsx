import { Immigrant } from '../../shared/types/api';

interface CharacterPortraitProps {
  immigrant: Immigrant;
  className?: string;
}

export const CharacterPortrait = ({ immigrant, className }: CharacterPortraitProps) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 ${className}`}>
      <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center mb-2">
        <span className="text-6xl">👤</span>
      </div>
      <div className="text-white text-sm font-bold">{immigrant.name}</div>
      <div className="text-gray-400 text-xs mt-1">{immigrant.document.age} years old</div>
    </div>
  );
};
