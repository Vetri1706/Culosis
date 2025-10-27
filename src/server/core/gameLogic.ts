import { Theme, ThemeConfig, Immigrant, Document, GameDifficulty } from '../../shared/types/api';

// Theme Configurations
export const THEMES: Record<Theme, ThemeConfig> = {
  zombie: {
    name: 'Zombie Apocalypse',
    description: 'Screen survivors for zombie infection. Check vital signs and behavior patterns.',
    icon: '🧟',
    rules: [
      'Temperature must be below 39°C',
      'No visible bite marks or wounds',
      'Must respond coherently to questions',
      'Pupils must be reactive',
      'Skin tone must be normal (not gray or green)',
    ],
    checkpoints: ['Temperature Check', 'Physical Examination', 'Cognitive Test', 'Blood Sample'],
  },
  pandemic: {
    name: 'Disease Pandemic',
    description: 'Prevent disease spread. Verify vaccination status and health clearances.',
    icon: '🦠',
    rules: [
      'Must have valid vaccination certificate',
      'Temperature must be below 37.5°C',
      'No symptoms (cough, fever, fatigue)',
      'Recent negative test result required',
      'Quarantine documentation if from high-risk zones',
    ],
    checkpoints: ['Temperature', 'Vaccination Status', 'Symptom Check', 'Test Results'],
  },
  alien: {
    name: 'Alien Invasion',
    description: 'Identify alien imposters disguised as humans using advanced scanners.',
    icon: '👽',
    rules: [
      'DNA scan must match human baseline',
      'Biometric data must be consistent',
      'No anomalies in body temperature range',
      'Fingerprints must have unique human patterns',
      'Eye scan must show human retinal structure',
    ],
    checkpoints: ['DNA Scanner', 'Biometric Verification', 'Retinal Scan', 'Fingerprint Analysis'],
  },
  nuclear: {
    name: 'Nuclear Fallout',
    description: 'Check for radiation exposure and contamination levels.',
    icon: '☢️',
    rules: [
      'Radiation levels must be below 0.5 Sv',
      'No visible radiation burns',
      'Geiger counter reading normal',
      'Decontamination certificate required',
      'Origin must not be from red zones',
    ],
    checkpoints: ['Radiation Scan', 'Decontamination', 'Origin Verification', 'Health Check'],
  },
};

// Name pools for generating immigrants
const FIRST_NAMES = [
  'Alex',
  'Jordan',
  'Sam',
  'Taylor',
  'Morgan',
  'Casey',
  'Riley',
  'Avery',
  'Quinn',
  'Blake',
  'Dakota',
  'Skyler',
  'Harper',
  'Reese',
  'Emerson',
  'Charlie',
  'Drew',
  'Rowan',
  'Sage',
  'Phoenix',
  'River',
  'Kai',
];

const LAST_NAMES = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
  'Lee',
];

const ORIGINS = [
  'New Haven',
  'Sanctuary City',
  'Safe Zone Alpha',
  'District 9',
  'Quarantine Camp 7',
  'Shelter 42',
  'Fort Liberty',
  'Haven Hills',
  'Refuge Point',
  'Settlement Beta',
  'Green Zone',
  'Outpost Delta',
];

const DESTINATIONS = [
  'Central Hub',
  'Safe Haven',
  'Protected Zone',
  'Medical Facility',
  'Research Station',
  'Supply Depot',
  'Evacuation Center',
  'Bunker Complex',
];

const PROFESSIONS = [
  'Doctor',
  'Engineer',
  'Scientist',
  'Teacher',
  'Farmer',
  'Mechanic',
  'Nurse',
  'Soldier',
  'Cook',
  'Builder',
  'Electrician',
  'Chemist',
];

const REASONS = [
  'Seeking refuge',
  'Medical treatment',
  'Family reunion',
  'Supply run',
  'Research mission',
  'Evacuation',
  'Work assignment',
  'Resource gathering',
];

// Appearance descriptors
const APPEARANCE_FEATURES = {
  normal: [
    'Healthy complexion, alert eyes',
    'Clean appearance, well-groomed',
    'Calm demeanor, steady breathing',
    'Clear eyes, normal skin tone',
    'Composed and coherent',
  ],
  suspicious: [
    'Pale complexion, sweating profusely',
    'Bloodshot eyes, trembling hands',
    'Nervous behavior, avoiding eye contact',
    'Unusual skin discoloration',
    'Disoriented, slurred speech',
    'Strange odor, disheveled appearance',
    'Glazed eyes, unsteady movement',
  ],
};

// Generate random immigrant based on theme and difficulty
export function generateImmigrant(theme: Theme, difficulty: GameDifficulty, id: string): Immigrant {
  const random = Math.random();

  // Difficulty affects violation chance
  const violationChance = difficulty === 'easy' ? 0.6 : difficulty === 'medium' ? 0.5 : 0.4;
  const isValid = random > violationChance;

  const name = `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;
  const age = Math.floor(Math.random() * 50) + 18;
  const origin = randomChoice(ORIGINS);
  const destination = randomChoice(DESTINATIONS);
  const reason = randomChoice(REASONS);
  const profession = randomChoice(PROFESSIONS);

  const issueDate = getRandomDate(-60, -7); // 7-60 days ago
  const expiryDate = getRandomDate(1, 180); // 1-180 days from now

  const document: Document = {
    id: `DOC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    name,
    age,
    origin,
    destination,
    reason,
    profession,
    issueDate,
    expiryDate,
  };

  const violations: string[] = [];
  let riskLevel: 'low' | 'medium' | 'high' = 'low';
  let appearance = randomChoice(APPEARANCE_FEATURES.normal);

  // Theme-specific attributes and violations
  switch (theme) {
    case 'zombie':
      document.temperature = isValid
        ? 36.5 + Math.random() * 1.5 // 36.5-38°C
        : 39 + Math.random() * 3; // 39-42°C
      document.bloodType = randomChoice(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);

      if (!isValid) {
        if (Math.random() > 0.5) {
          violations.push('Temperature exceeds safe threshold (>39°C)');
          riskLevel = 'high';
        }
        if (Math.random() > 0.5) {
          violations.push('Visible bite marks detected');
          appearance = 'Pale complexion with visible wounds on arms';
          riskLevel = 'high';
        }
        if (Math.random() > 0.7) {
          violations.push('Abnormal cognitive responses');
          appearance = 'Glazed eyes, slow and confused responses';
          riskLevel = 'medium';
        }
      }
      break;

    case 'pandemic':
      document.temperature = isValid
        ? 36.3 + Math.random() * 0.8 // 36.3-37.1°C
        : 37.5 + Math.random() * 2; // 37.5-39.5°C
      document.vaccinationStatus = isValid ? true : Math.random() > 0.5;
      document.symptoms = [];

      if (!isValid) {
        if (Math.random() > 0.5) {
          document.symptoms.push('Persistent cough');
          violations.push('Exhibits disease symptoms');
          riskLevel = 'high';
        }
        if (Math.random() > 0.5) {
          violations.push('No valid vaccination certificate');
          document.vaccinationStatus = false;
          riskLevel = 'medium';
        }
        if (Math.random() > 0.6) {
          violations.push('Temperature above safe threshold');
          riskLevel = 'high';
        }
        if (document.symptoms.length > 0 || !document.vaccinationStatus) {
          appearance = randomChoice(APPEARANCE_FEATURES.suspicious);
        }
      }
      break;

    case 'alien':
      document.scanResult = isValid
        ? 'Human DNA confirmed'
        : randomChoice([
            'Anomalous DNA structure',
            'Non-human signature detected',
            'Biometric mismatch',
          ]);

      if (!isValid) {
        violations.push('Scanner detected non-human biological markers');
        riskLevel = 'high';
        appearance =
          Math.random() > 0.5
            ? 'Slightly unusual eye movement patterns, skin appears too perfect'
            : 'Normal appearance but biometric data inconsistent';
      }
      break;

    case 'nuclear':
      const radiationLevel = isValid
        ? (Math.random() * 0.3).toFixed(2) // 0-0.3 Sv
        : (0.5 + Math.random() * 2).toFixed(2); // 0.5-2.5 Sv

      document.scanResult = `Radiation: ${radiationLevel} Sv`;

      if (!isValid) {
        if (parseFloat(radiationLevel) > 0.5) {
          violations.push('Radiation levels exceed safe threshold');
          riskLevel = 'high';
        }
        if (Math.random() > 0.6) {
          violations.push('Origin from restricted red zone');
          riskLevel = 'high';
        }
        if (Math.random() > 0.7) {
          violations.push('Missing decontamination certificate');
          riskLevel = 'medium';
        }
        appearance = randomChoice([
          'Visible radiation burns on exposed skin',
          'Hair loss, pale and sickly appearance',
          'Appears healthy but readings show high exposure',
        ]);
      }
      break;
  }

  // Add document expiry violations randomly
  if (!isValid && Math.random() > 0.7) {
    const expiredDate = getRandomDate(-30, -1);
    document.expiryDate = expiredDate;
    violations.push('Documentation has expired');
    riskLevel = riskLevel === 'low' ? 'medium' : riskLevel;
  }

  // Name mismatch violation
  if (!isValid && Math.random() > 0.8 && difficulty !== 'easy') {
    const fakeName = `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;
    document.name = fakeName;
    violations.push('Name on document does not match appearance');
    riskLevel = 'medium';
  }

  const story = generateStory(theme, name, origin, destination, reason, isValid);

  return {
    id,
    name,
    appearance,
    document,
    isValid,
    violations,
    riskLevel,
    story,
  };
}

function generateStory(
  theme: Theme,
  name: string,
  origin: string,
  destination: string,
  _reason: string,
  isValid: boolean
): string {
  const stories: Record<Theme, { valid: string[]; invalid: string[] }> = {
    zombie: {
      valid: [
        `${name} evacuated from ${origin} before the outbreak spread. Medical clearance obtained.`,
        `Survived the initial outbreak in ${origin}. Seeking safe passage to ${destination}.`,
        `Part of rescue convoy from ${origin}. All members cleared and vaccinated.`,
      ],
      invalid: [
        `${name} claims to be from ${origin}, but shows signs of recent infection exposure.`,
        `Was found wandering near infected zones. Story about ${origin} seems rehearsed.`,
        `Escaped from quarantine facility. Medical history incomplete.`,
      ],
    },
    pandemic: {
      valid: [
        `${name} has been in isolation for 14 days. All tests negative, fully vaccinated.`,
        `Essential worker traveling from ${origin} to ${destination}. Medical clearance up to date.`,
        `Quarantined properly and obtained health certificate from authorized facility.`,
      ],
      invalid: [
        `Traveled through high-risk zones without proper protection. Symptoms appeared recently.`,
        `Claims to be vaccinated but documentation appears forged or outdated.`,
        `Left ${origin} hastily when outbreak intensified. No time for proper screening.`,
      ],
    },
    alien: {
      valid: [
        `${name}, born in ${origin}. Biometric records consistent with long-term residence.`,
        `Traveling for work purposes. All identification checks out with database.`,
        `Family records verified. DNA matches human baseline standards.`,
      ],
      invalid: [
        `${name} appeared in ${origin} only recently. No prior records found.`,
        `Biometric data shows subtle inconsistencies. Origin story has gaps.`,
        `Scanner detected anomalies. Claims to be human but readings are unusual.`,
      ],
    },
    nuclear: {
      valid: [
        `${name} evacuated early from ${origin}. Passed through decontamination successfully.`,
        `Lived in protected zone. Radiation exposure minimal and within safe limits.`,
        `Worked in safe facility with proper protective equipment. Clearance verified.`,
      ],
      invalid: [
        `Came from fallout zone. Radiation levels concerning despite decontamination attempt.`,
        `No proper decontamination records. Origin is within contaminated area.`,
        `Exposure readings high. May have been scavenging in restricted zones.`,
      ],
    },
  };

  const storyList = isValid ? stories[theme].valid : stories[theme].invalid;
  return randomChoice(storyList);
}

function randomChoice<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index]!;
}

function getRandomDate(minDays: number, maxDays: number): string {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
  const date = new Date(today);
  date.setDate(date.getDate() + randomDays);
  return date.toISOString().split('T')[0] || '';
}

// Calculate score based on decision
export function calculateScore(
  correct: boolean,
  riskLevel: 'low' | 'medium' | 'high',
  currentStreak: number
): number {
  if (!correct) return 0;

  const basePoints = riskLevel === 'high' ? 50 : riskLevel === 'medium' ? 30 : 20;
  const streakBonus = Math.min(currentStreak * 5, 100); // Max 100 bonus points

  return basePoints + streakBonus;
}

// Get feedback message
export function getFeedbackMessage(
  correct: boolean,
  immigrant: Immigrant,
  decision: 'approve' | 'reject'
): string {
  if (correct) {
    if (decision === 'approve') {
      return `✅ Correct! ${immigrant.name} was cleared. Safe passage granted.`;
    } else {
      return `✅ Correct! ${immigrant.name} was a threat. Entry denied. Violations: ${immigrant.violations.join(', ')}`;
    }
  } else {
    if (decision === 'approve') {
      return `❌ Wrong! ${immigrant.name} had violations: ${immigrant.violations.join(', ')}. Security breach!`;
    } else {
      return `❌ Wrong! ${immigrant.name} was legitimate. Innocent person turned away.`;
    }
  }
}
