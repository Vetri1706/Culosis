import { Immigrant } from '../../shared/types/api';

type CharacterPortraitProps = {
  immigrant: Immigrant;
  className?: string;
};

export const CharacterPortrait = ({ immigrant, className = '' }: CharacterPortraitProps) => {
  // Generate consistent character based on name and symptoms
  const getCharacterDetails = () => {
    const nameHash = immigrant.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const appearance = immigrant.appearance.toLowerCase();
    const age = immigrant.document.age;

    // Determine gender consistently
    const femaleNames = [
      'anna',
      'maria',
      'elena',
      'sofia',
      'katya',
      'olga',
      'nina',
      'vera',
      'sarah',
      'emma',
      'lisa',
    ];
    const isFemale =
      femaleNames.some((name) => immigrant.name.toLowerCase().includes(name)) || nameHash % 2 === 0;

    // Age group
    let ageGroup = 'adult';
    if (age < 25) ageGroup = 'young';
    else if (age > 50) ageGroup = 'older';

    // Comical face variations
    const faceTypes = ['round', 'square', 'oval', 'triangle', 'diamond'];
    const faceType = faceTypes[nameHash % faceTypes.length];

    // Silly expressions
    const expressions = ['happy', 'goofy', 'surprised', 'sleepy', 'confused'];
    const expression = expressions[(nameHash + 2) % expressions.length];

    // Base colors - more vibrant for comedy
    const skinTones = ['#fdbcb4', '#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#ffb3ba', '#bae1ff'];
    const hairColors = [
      '#2c1b18',
      '#8b4513',
      '#daa520',
      '#cd853f',
      '#a0522d',
      '#ff6b6b',
      '#4ecdc4',
      '#45b7d1',
    ];

    let skinTone = skinTones[nameHash % skinTones.length];
    const hairColor = hairColors[(nameHash + 1) % hairColors.length];

    // Health status affects appearance
    const hasSymptoms = immigrant.document.symptoms && immigrant.document.symptoms.length > 0;
    const hasFever = immigrant.document.temperature && immigrant.document.temperature > 38;
    const isUnwell =
      appearance.includes('pale') ||
      appearance.includes('sick') ||
      appearance.includes('fever') ||
      appearance.includes('sweating') ||
      appearance.includes('coughing') ||
      appearance.includes('tired') ||
      appearance.includes('weak') ||
      hasFever ||
      hasSymptoms;

    // Modify skin tone based on condition
    if (appearance.includes('pale') || appearance.includes('zombie')) {
      skinTone = '#d4d4d4'; // Very pale
    } else if (hasFever || appearance.includes('fever')) {
      skinTone = '#f5c6c6'; // Flushed/red
    } else if (isUnwell) {
      skinTone = '#e8d5d5'; // Sickly pale
    }

    return {
      isFemale,
      ageGroup,
      skinTone,
      hairColor,
      isUnwell,
      hasFever,
      hasSymptoms,
      faceType,
      expression,
    };
  };

  const {
    isFemale,
    ageGroup,
    skinTone,
    hairColor,
    isUnwell,
    hasFever,
    hasSymptoms,
    faceType,
    expression,
  } = getCharacterDetails();
  const appearance = immigrant.appearance.toLowerCase();

  return (
    <div className={`${className} relative`}>
      {/* Realistic Character Portrait */}
      <div className="w-full h-full bg-gray-200 border-4 border-gray-600 rounded-lg shadow-lg overflow-hidden relative">
        <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center relative">
          {/* Character representation */}
          <div className="relative w-24 h-32 flex flex-col items-center">
            {/* Comical Head with exaggerated features */}
            <div
              className={`border-2 border-gray-400 relative ${isUnwell ? 'opacity-85' : ''} ${
                faceType === 'round'
                  ? 'w-16 h-16 rounded-full'
                  : faceType === 'square'
                    ? 'w-16 h-16 rounded-lg'
                    : faceType === 'oval'
                      ? 'w-14 h-20 rounded-full'
                      : faceType === 'triangle'
                        ? 'w-16 h-18 rounded-t-full'
                        : 'w-18 h-16 rounded-full' // diamond
              }`}
              style={{ backgroundColor: skinTone }}
            >
              {/* Silly Hair Styles */}
              <div
                className={`absolute -top-2 -left-2 ${
                  ageGroup === 'older' ? 'opacity-70' : ''
                } ${isUnwell || appearance.includes('messy') ? 'transform rotate-12' : ''} ${
                  expression === 'surprised' ? 'transform scale-110' : ''
                } ${
                  faceType === 'triangle'
                    ? 'w-20 h-12 rounded-t-full'
                    : faceType === 'square'
                      ? 'w-20 h-8 rounded-lg'
                      : 'w-20 h-16 rounded-full'
                }`}
                style={{ backgroundColor: ageGroup === 'older' ? '#c0c0c0' : hairColor }}
              />

              {/* Comical Eyes based on expression */}
              {expression === 'surprised' ? (
                <>
                  <div
                    className={`absolute top-4 left-2 w-4 h-4 rounded-full bg-white border-2 ${isUnwell ? 'border-red-700' : 'border-black'}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'} absolute top-1 left-1`}
                    ></div>
                  </div>
                  <div
                    className={`absolute top-4 right-2 w-4 h-4 rounded-full bg-white border-2 ${isUnwell ? 'border-red-700' : 'border-black'}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'} absolute top-1 left-1`}
                    ></div>
                  </div>
                </>
              ) : expression === 'sleepy' ? (
                <>
                  <div className="absolute top-6 left-3 w-3 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-6 right-3 w-3 h-1 bg-black rounded-full"></div>
                </>
              ) : expression === 'goofy' ? (
                <>
                  <div
                    className={`absolute top-5 left-2 w-3 h-3 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'} transform rotate-12`}
                  ></div>
                  <div
                    className={`absolute top-6 right-3 w-2 h-2 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'}`}
                  ></div>
                </>
              ) : (
                <>
                  <div
                    className={`absolute top-6 left-3 w-2 h-2 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'}`}
                  ></div>
                  <div
                    className={`absolute top-6 right-3 w-2 h-2 rounded-full ${isUnwell ? 'bg-red-700' : 'bg-black'}`}
                  ></div>
                </>
              )}

              {/* Dark circles under eyes if sick */}
              {isUnwell && (
                <>
                  <div className="absolute top-7 left-2 w-3 h-1 bg-purple-600 rounded-full opacity-30"></div>
                  <div className="absolute top-7 right-2 w-3 h-1 bg-purple-600 rounded-full opacity-30"></div>
                </>
              )}

              {/* Exaggerated Nose */}
              <div
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 ${
                  hasSymptoms && immigrant.document.symptoms?.includes('runny nose')
                    ? 'bg-red-500 w-2 h-3'
                    : 'bg-gray-400 w-1 h-2'
                } rounded ${expression === 'surprised' ? 'transform scale-125' : ''}`}
              ></div>

              {/* Comical Mouth expressions */}
              {expression === 'surprised' ? (
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-black rounded-full"></div>
              ) : expression === 'goofy' ? (
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-400 rounded-full transform rotate-12"></div>
              ) : expression === 'happy' ? (
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-400 rounded-full"></div>
              ) : expression === 'confused' ? (
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-600 rounded transform -rotate-12"></div>
              ) : (
                <div
                  className={`absolute top-11 left-1/2 transform -translate-x-1/2 w-3 h-1 rounded ${
                    isUnwell ? 'bg-gray-600' : 'bg-red-400'
                  } ${appearance.includes('coughing') ? 'transform scale-110' : ''}`}
                ></div>
              )}

              {/* Sweat drops if fever */}
              {hasFever && (
                <>
                  <div className="absolute top-4 left-1 w-1 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute top-5 right-2 w-1 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute top-6 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-50"></div>
                </>
              )}

              {/* Facial hair for males */}
              {!isFemale && ageGroup !== 'young' && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-3 rounded-b-full opacity-60 ${
                    isUnwell ? 'opacity-40' : ''
                  }`}
                  style={{ backgroundColor: hairColor }}
                />
              )}

              {/* Bandages if injured */}
              {appearance.includes('bandage') ||
                (appearance.includes('injured') && (
                  <div className="absolute top-3 right-1 w-3 h-4 bg-white border border-gray-400 rounded opacity-90"></div>
                ))}

              {/* Scars or marks */}
              {appearance.includes('scar') && (
                <div className="absolute top-7 right-4 w-1 h-3 bg-red-800 opacity-60"></div>
              )}
            </div>

            {/* Body with clothing condition */}
            <div
              className={`w-20 h-12 rounded-t-3xl border-2 border-gray-400 mt-1 ${
                appearance.includes('dirty') || appearance.includes('torn') ? 'opacity-70' : ''
              }`}
              style={{ backgroundColor: isUnwell ? '#6b7280' : '#4a5568' }}
            >
              {/* Collar - dirty if mentioned */}
              <div
                className={`w-full h-2 rounded-t-3xl ${
                  appearance.includes('dirty') ? 'bg-gray-400 opacity-60' : 'bg-white opacity-80'
                }`}
              ></div>

              {/* Stains on clothes */}
              {appearance.includes('dirty') && (
                <>
                  <div className="absolute top-20 left-12 w-2 h-1 bg-brown-600 rounded-full opacity-50"></div>
                  <div className="absolute top-22 right-14 w-1 h-1 bg-brown-600 rounded-full opacity-40"></div>
                </>
              )}

              {/* Torn clothing */}
              {appearance.includes('torn') && (
                <div className="absolute top-21 left-10 w-3 h-1 bg-gray-800 opacity-60 transform rotate-12"></div>
              )}
            </div>
          </div>

          {/* Photo corner fold */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-gray-400 transform rotate-45 translate-x-2 -translate-y-2"></div>
        </div>

        {/* Official stamp */}
        <div className="absolute bottom-2 right-2 w-6 h-6 border-2 border-red-600 rounded-full flex items-center justify-center bg-white/80">
          <div className="text-xs text-red-600 font-bold">✓</div>
        </div>

        {/* Health warning overlay */}
        {isUnwell && (
          <div className="absolute inset-0 bg-red-500 opacity-5 pointer-events-none"></div>
        )}
      </div>

      {/* Name plate with health status */}
      <div
        className={`absolute -bottom-4 left-0 right-0 text-white text-center py-1 text-xs font-bold border-2 ${
          isUnwell ? 'bg-red-800 border-red-900' : 'bg-gray-800 border-gray-900'
        }`}
      >
        {immigrant.name.toUpperCase()}
        {isUnwell && <div className="text-xs text-red-300">HEALTH CONCERN</div>}
      </div>

      {/* Floating symptom tags */}
      {hasSymptoms && immigrant.document.symptoms && (
        <div className="absolute -top-2 -right-2 space-y-1">
          {immigrant.document.symptoms.includes('fever') && (
            <div className="bg-red-600 text-white text-xs px-1 rounded animate-pulse">FEVER</div>
          )}
          {immigrant.document.symptoms.includes('cough') && (
            <div className="bg-orange-600 text-white text-xs px-1 rounded animate-pulse">COUGH</div>
          )}
          {immigrant.document.symptoms.includes('fatigue') && (
            <div className="bg-yellow-600 text-black text-xs px-1 rounded animate-pulse">TIRED</div>
          )}
        </div>
      )}
    </div>
  );
};
