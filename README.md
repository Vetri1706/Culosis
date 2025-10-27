# 🛂 Border Control - Interactive Reddit Game

**Border Control** is an immersive border checkpoint simulation game built for Reddit inspired by the classic "Papers, Please" gameplay. Play as a security agent screening immigrants across four apocalyptic scenarios, making critical approve/reject decisions based on document verification, visual inspection, and mandatory investigation tools while building accuracy streaks in this engaging Reddit gaming experience.

## 🎮 What This Game Is

Border Control is a strategic document verification game that combines detailed inspection gameplay with compelling storytelling. Built with React and TypeScript, running natively within Reddit posts, the game features:

- **Papers, Please Style Gameplay**: Classic border control simulation with document verification, visual inspection, and critical decision-making in a retro terminal aesthetic with authentic "CHECKPOINT ALPHA" branding and epic animated interface
- **Mandatory Investigation System**: Must use specialized tools (thermometer, UV light, magnifying glass, stethoscope, baggage search, database check) and ask targeted questions before making any decisions - buttons remain disabled until investigation is complete
- **Realistic Character Portraits**: Custom-generated passport-style character photos with consistent appearance based on name hash, age-appropriate features, health status indicators, and comical variations including official stamps and theme-specific visual effects
- **Multi-Document Analysis**: Examine passports, medical certificates, and entry permits with detailed cross-referencing, automatic violation detection, and color-coded risk indicators with interactive document viewer
- **Interactive Questioning System**: Ask immigrants about their purpose, health, vaccination status, and travel history with contextual responses that may reveal inconsistencies or lies - each question can only be asked once per immigrant
- **Real-Time Investigation Logging**: Complete timestamped terminal-style log of all tool usage and question responses in green text, building comprehensive evidence before decision-making
- **Enhanced Decision Feedback**: Detailed explanations showing exactly what violations were present or missed, with animated 2.5-second feedback overlays including streak celebrations and encouragement messages
- **Progressive Scoring System**: Build consecutive decision streaks for bonus points (up to +100) while managing accuracy across four unique apocalyptic themes with risk-based point values (Low: 20pts, Medium: 30pts, High: 50pts)
- **Daily Challenge System**: Complete daily challenges with streak tracking, weekly goals, inspector ranking progression, and login streak rewards with four challenge types
- **Persistent Reddit Integration**: All progress and statistics automatically saved to your Reddit account via secure Redis backend with cross-session continuity
- **Professional Security Interface**: Authentic border control desk layout with character booth, document analysis area, investigation tools panel, decision interface, and performance tracking with epic animated main menu

## 🌟 What Makes This Game Innovative

### First Advanced Border Control Simulation on Reddit

This is the first Reddit game to feature a comprehensive border control simulation with mandatory investigation mechanics and epic presentation:

- **Epic Animated Interface**: Stunning main menu with "CHECKPOINT ALPHA" branding, animated background elements, glow effects, hover animations, and professional security clearance badges that create an immersive experience
- **Mandatory Investigation Requirement**: Unlike simple decision games, you CANNOT make decisions until you've used investigation tools or asked questions - decision buttons remain disabled with "Investigate first!" warning until evidence is gathered
- **Realistic Character Generation**: Custom passport-style portraits generated consistently using name hash algorithms, with realistic facial features, age-appropriate appearance, health indicators, comical variations (round/square/oval faces, happy/goofy/surprised expressions), and official document stamps
- **Advanced Document Cross-Referencing**: Multi-document system with interactive three-tab viewer (Passport, Medical, Permit) comparing documents with automatic violation highlighting, suspicious field detection, and color-coded risk assessment
- **Strategic Investigation Tools**: Six different tools (thermometer, UV light, magnifying glass, stethoscope, baggage search, database check) that can only be used once per immigrant for strategic evidence gathering and preventing tool spam
- **Dynamic Questioning System**: Ask targeted questions about purpose, health, vaccination status, and travel history - immigrants provide contextual answers based on their actual data and theme that may reveal inconsistencies or lies
- **Real-Time Investigation Logging**: Complete timestamped log in terminal-style green text of all tool usage and question responses, building a comprehensive evidence trail before decision-making
- **Enhanced Daily Challenge System**: Four daily challenge types (Quick Inspector, Careful Work, Investigation Pro, Question Master) with unique rewards, streak tracking, inspector ranking progression, and login streak bonuses
- **Authentic Security Interface**: Professional border control desk layout with retro terminal styling, character booth, document analysis area, investigation tools panel, and decision interface mimicking real checkpoint operations

### Four Unique Apocalyptic Scenarios

Each theme features completely distinct gameplay mechanics, document requirements, and specialized screening protocols with dynamic immigrant generation:

- **🧟 Zombie Apocalypse**: Screen survivors for infection signs with temperature monitoring (must be <39°C), visual bite mark detection, cognitive assessment, and blood type verification. Look for pale complexion, glazed eyes, and abnormal behavior patterns. Violations include high fever (>39°C), visible bite marks, and abnormal cognitive responses. Characters show realistic infection symptoms and backstories.

- **🦠 Disease Pandemic**: Verify vaccination status with comprehensive symptom screening, temperature checks (<37.5°C), health certificate validation, and symptom tracking. Watch for coughing, fever symptoms, and missing vaccination documentation. Violations include missing vaccination certificates, persistent cough symptoms, and elevated temperature (>37.5°C). Dynamic symptom generation affects character appearance.

- **👽 Alien Invasion**: Identify alien imposters using advanced DNA scanners, biometric verification, anomaly detection systems, and biological marker analysis. Detect "too perfect" appearances and failed biometric scans. Violations include anomalous DNA structure, non-human signatures, and biometric mismatches. Subtle visual cues indicate non-human entities.

- **☢️ Nuclear Fallout**: Monitor radiation levels (<0.5 Sv) with contamination screening, decontamination certificates, origin verification, and exposure assessment. Check for radiation burns, hair loss, and high exposure readings. Violations include excessive radiation levels (>0.5 Sv), missing decontamination certificates, and origin from restricted red zones. Visual radiation effects on character portraits.

### Advanced Character Intelligence System

- **Realistic Character Portraits**: Passport-style character photos with consistent appearance generation based on name hash algorithms, age-appropriate features, health status indicators, and comical variations including different face types (round, square, oval, triangle, diamond) and expressions (happy, goofy, surprised, sleepy, confused) with official document stamps
- **Theme-Responsive Appearances**: Character descriptions and visual indicators dynamically change based on theme and risk level with realistic health status markers, contamination effects, and visual health warnings (fever effects, radiation burns, bite marks, alien features)
- **Multi-Layer Document Analysis**: Color-coded risk indicators, suspicious field highlighting, and violation warnings integrated throughout the interactive document review process with click-to-inspect functionality
- **Interactive Document System**: Three-tab document viewer (Passport, Medical, Permit) with smooth transitions, click-to-inspect functionality, and automatic violation detection with visual warning indicators
- **Real-Time Decision Feedback**: Immediate validation with detailed explanations showing exactly which violations were present or missed, animated feedback overlays, streak celebrations, and encouragement messages to help players learn and improve
- **Dynamic Story Generation**: Each immigrant has a unique backstory that changes based on their validity status and theme, providing context clues for investigation with realistic evacuation stories, medical histories, and travel reasons

### Revolutionary Reddit Gaming Experience

- **Zero Installation Required**: Full experience runs directly within Reddit posts using modern web technologies with instant "Launch App" access
- **Seamless Reddit Integration**: Game state automatically tied to Reddit account with persistent progress via secure Redis backend and cross-session continuity
- **Cross-Platform Optimization**: Responsive design optimized for desktop and mobile Reddit users with adaptive interface scaling
- **Community-First Design**: Built specifically for Reddit's social platform with native user authentication, community engagement, and social features
- **Daily Engagement Features**: Daily login streaks with rank progression (New Recruit → Legendary Inspector), challenge systems, weekly goals, and inspector ranking progression to encourage regular play
- **Multiple Game Modes**: Epic animated single-player mode with AI immigrants, daily challenges with unique objectives and rewards, and multiplayer lobby system with role selection (framework for future multiplayer gameplay)
- **Professional Presentation**: Epic main menu with "CHECKPOINT ALPHA" branding, animated backgrounds, glow effects, security clearance badges, and immersive checkpoint atmosphere

## 📋 How to Play - Complete Step-by-Step Guide

### 1. Launch the Game

- Find the Border Control post in your Reddit feed
- Click the "Launch App" button to open the full-screen game interface
- Experience the epic animated interface with "CHECKPOINT ALPHA" branding, glow effects, and security clearance badges
- View your agent credentials, previous shift scores, and animated background elements

### 2. Choose Game Mode

Select between multiple gameplay options from the epic main menu with animated hover effects:

- **🎯 [SOLO MISSION] Single Player**: Play against AI-generated immigrants with advanced investigation tools and smart interrogation - features animated mission briefing and detective skill challenges
- **👥 [TEAM OPS] Multiplayer**: Battle friends in real-time border control with role selection (inspector vs immigrant players) - currently shows professional lobby interface but redirects to single player for gameplay
- **📅 Daily Challenges**: Complete special daily objectives with unique rewards and streak tracking including Quick Inspector, Careful Work, Investigation Pro, and Question Master challenges with rank progression system

### 3. Select Your Mission Theme

Choose from four distinct apocalyptic scenarios with epic theme selection interface, each with unique mechanics and visual environments:

**🧟 Zombie Apocalypse**

- **Objective**: Screen survivors for zombie infection signs and prevent outbreak spread in post-apocalyptic checkpoints
- **Key Indicators**: Monitor temperature (must be <39°C), check for bite marks, assess cognitive responses, and blood type verification
- **Visual Cues**: Look for gray/pale skin tones, glazed eyes, suspicious behavior, contamination effects, and infection symptoms on character portraits
- **Security Protocols**: Temperature Check, Physical Examination, Cognitive Test, Blood Sample Analysis
- **Dynamic Elements**: Characters show realistic infection progression, evacuation stories, and survival backgrounds

**🦠 Disease Pandemic**

- **Objective**: Verify vaccination status and health clearances to prevent disease transmission through secure medical checkpoints
- **Key Indicators**: Check temperature (<37.5°C), symptoms, test results, vaccination certificates, and health documentation
- **Visual Cues**: Watch for fever effects, breathing patterns, coughing symptoms, and missing documentation with health status indicators
- **Security Protocols**: Temperature Monitoring, Vaccination Status, Symptom Check, Test Results Verification
- **Dynamic Elements**: Real symptom tracking affects character appearance and behavior patterns

**👽 Alien Invasion**

- **Objective**: Identify alien imposters disguised as humans to protect humanity from infiltration using advanced scanning technology
- **Key Indicators**: Use DNA scanners, biometric verification, advanced anomaly detection systems, and biological marker analysis
- **Visual Cues**: Spot unusual skin tones, unnaturally perfect appearances, failed scan results with alien energy effects, and subtle non-human features
- **Security Protocols**: DNA Scanner, Biometric Verification, Retinal Scan, Fingerprint Analysis
- **Dynamic Elements**: Sophisticated alien disguises with subtle visual tells and advanced scanner technology

**☢️ Nuclear Fallout**

- **Objective**: Check radiation exposure and contamination levels from nuclear disaster zones with specialized detection equipment
- **Key Indicators**: Monitor radiation readings (<0.5 Sv), verify decontamination certificates, check origin zones, and exposure assessment
- **Visual Cues**: Look for radiation warning effects, contamination auras, visible radiation burns, hair loss, and exposure symptoms
- **Security Protocols**: Radiation Scan, Decontamination Verification, Origin Zone Check, Health Assessment
- **Dynamic Elements**: Realistic radiation effects on character portraits and contamination zone tracking

### 4. Set Your Difficulty Level

- **👶 Easy (Training Mode)**: 60% violation chance - obvious violations with clear visual cues, straightforward document issues, and helpful learning indicators
- **🎯 Medium (Standard Operation)**: 50% violation chance - balanced challenge requiring careful analysis, attention to detail, and strategic investigation
- **💀 Hard (Elite Agent)**: 40% violation chance - expert mode with subtle threat detection, complex violation patterns, and advanced deception techniques

### 5. Master the Game Interface

**🎮 Main Game Display:**

- **Character Portrait Panel**: Passport-style character photos with official stamps, name plates, and health status indicators showing the current immigrant with their claimed identity, physical appearance description, and theme-specific visual effects
- **Document Analysis Panel**: Interactive three-tab document viewer (Passport, Medical, Permit) showing detailed information with automatic violation highlighting, color-coded risk indicators, and click-to-inspect functionality
- **Investigation Tools Panel**: Strategic single-use tools including thermometer, UV light, magnifying glass, stethoscope, baggage search, and database check with visual feedback
- **Decision Interface**: Large [APPROVE]/[DENY] buttons that remain disabled with "Investigate first!" warning until you complete your mandatory investigation
- **Game Statistics**: Real-time display of current score, streak counter, accuracy percentage, total immigrants processed, and inspection time

**📊 Game Information Display:**

- **Top Status Bar**: Shows theme identifier with icon, agent name with security clearance, current score with credit formatting, streak counter, and real-time inspection timer
- **Character Information**: Claims vs. reality comparison with color-coded risk level assessment (Low=Green, Medium=Orange, High=Red) and theme-specific health indicators
- **Investigation Log**: Real-time timestamped log of all tool usage and question responses in terminal-style green text with comprehensive evidence tracking
- **Current Regulations**: Theme-specific rules and checkpoints you must enforce with visual protocol indicators
- **Performance Metrics**: Accuracy percentage, current streak with celebration effects, tools used counter, and decision-making progress

### 6. Conduct Mandatory Investigation

**🔍 Visual Character Inspection:**

- **Character Portrait**: Examine the passport-style photo showing the immigrant with consistent facial features, health indicators, comical variations (different face types and expressions), and official stamps
- **Physical Description**: Read detailed text describing their appearance, behavior, and any concerning symptoms or anomalies
- **Claims vs. Reality**: Compare what they claim to be with their actual appearance and documentation for inconsistencies
- **Theme-Specific Visual Cues**: Look for pale skin (zombie), fever symptoms (pandemic), unusual features (alien), or radiation effects (nuclear)

**📋 Document Analysis:**

- **Passport Information**: Check name, age, origin, destination, ID number, issue/expiry dates, blood type, and profession for accuracy and consistency
- **Entry Permit**: Verify travel purpose, duration, sponsor information, and destination consistency across all documents
- **Health Certificate**: Review temperature readings, vaccination status, symptoms, and medical scan results for violations
- **Personal Statement**: Read their story about why they're traveling and look for inconsistencies with other documentation
- **Scan Results**: Check theme-specific scan data (DNA results, radiation levels, biometric data, etc.) for anomalies

**🔧 Investigation Tools (Single Use Per Immigrant):**

- **[TEMP] Temperature Check**: Verify body temperature readings - critical for zombie (>39°C dangerous) and pandemic (>37.5°C concerning) themes
- **[UV] UV Document Scanner**: Check for document forgeries and suspicious markings under UV light - detects fake documents
- **[MAG] Magnifying Glass**: Examine document details for tampering, altered dates, or authenticity issues - catches expired documents
- **[MED] Stethoscope**: Listen to heartbeat and breathing patterns to detect health issues and symptoms
- **[BAG] Belongings Search**: Search personal items for contraband or suspicious materials
- **[DB] Database Check**: Cross-reference identity against records and watch lists for criminal history

**❓ Questioning System (Single Use Per Question):**

- **Purpose of Visit**: Ask about exact travel reasons and listen for story inconsistencies with documentation
- **Duration of Stay**: Verify planned stay length and cross-check with documentation and permits
- **Health Symptoms**: Inquire about symptoms and compare responses with medical certificates and appearance
- **Vaccination Status**: Ask about vaccination proof and verify against documentation - may reveal lies
- **Travel History**: Question their journey route to detect suspicious travel patterns or restricted zone origins

**📝 Investigation Requirements:**

- **Mandatory Investigation**: Decision buttons remain disabled with "Investigate first!" warning until you use tools or ask questions
- **Real-Time Logging**: All actions logged with timestamps in terminal-style green text showing evidence gathering progress
- **Evidence Building**: Must gather sufficient evidence through tools and questioning before making final approve/deny decision
- **Strategic Tool Use**: Each tool can only be used once per immigrant, so choose based on suspected violations and theme requirements

### 7. Identify Red Flags

**🚨 Visual Warning Signs by Theme:**

- **Zombie**: Pale/gray skin descriptions, high temperature (>39°C), bite marks, glazed eyes, abnormal cognitive responses
- **Pandemic**: Fever symptoms, missing vaccination status, high temperature (>37.5°C), persistent cough or other symptoms
- **Alien**: "Too perfect" appearance, failed DNA scans showing "anomalous structure" or "non-human signature", biometric inconsistencies
- **Nuclear**: Radiation burns, hair loss, high radiation readings (>0.5 Sv), origin from restricted red zones

**📄 Document Violations:**

- **Identity Issues**: Name mismatches between claimed identity and documents, age inconsistencies
- **Expired Documentation**: Check expiry dates carefully - expired documents are common violations
- **Medical Concerns**: Temperature readings above safe thresholds, missing vaccination certificates, dangerous scan results
- **Travel Inconsistencies**: Suspicious origins, unclear travel reasons, missing required certificates

### 8. Make Critical Decisions

After completing your investigation, use the decision buttons:

- **[APPROVE] (Green Button)**: "Entry Granted" - Allow entry for legitimate immigrants who pass all checks
- **[DENY] (Red Button)**: "Entry Refused" - Refuse entry for immigrants with violations or suspicious evidence
- **Investigation Required**: Buttons remain disabled with "Investigate first!" warning until you use tools or ask questions
- **Decision Impact**: Each choice affects your score, streak multiplier, and accuracy rating

### 9. Receive Enhanced Feedback

- **Animated Response**: 2.5-second feedback overlay with bouncing animation showing [GREAT JOB] or [TRY AGAIN] with detailed explanation
- **Violation Details**: If you were wrong, see exactly what violations you missed or why the person was legitimate with specific violation lists
- **Points Earned**: Base points (Low Risk: 20, Medium Risk: 30, High Risk: 50) plus streak bonus up to +100 with pulsing animation
- **Streak Celebrations**: Special messages for consecutive correct decisions like "Amazing! X in a row!" for building streaks
- **Encouragement**: Supportive messages for wrong decisions like "Don't worry, you'll get the next one!" to maintain engagement
- **Performance Update**: Score, streak, and accuracy statistics updated in real-time with visual feedback
- **Next Case**: Automatic transition to next immigrant with completely new character and documents after feedback display

### 10. Build Your Score and Accuracy

**📊 Scoring System:**

- **Low Risk Immigrants**: 20 base points (legitimate travelers with no violations)
- **Medium Risk Immigrants**: 30 base points (minor violations or suspicious elements)
- **High Risk Immigrants**: 50 base points (major violations or dangerous threats)
- **Streak Bonus**: +5 points per consecutive correct decision (maximum +100 bonus at 20+ streak)
- **Wrong Decisions**: 0 points earned and streak resets to 0

**🏆 Performance Tracking:**

- **Current Score**: Total credits earned this shift
- **Accuracy Percentage**: Correct decisions vs total decisions made
- **Current Streak**: Consecutive correct decisions in a row
- **Immigrants Processed**: Total number of cases handled
- **Tools Used**: Number of investigation tools used on current case

### 11. Daily Challenges and Progression

**📅 Daily Challenge System:**

- **Daily Login Streaks**: Maintain consecutive daily logins for bonus credits and rank progression
- **Challenge Types**: Quick Inspector (process 2 immigrants correctly), Careful Work (get 2 decisions right in a row), Investigation Pro (use 2 different investigation tools), Question Master (ask 2 questions before making a decision)
- **Inspector Ranks**: Progress from New Recruit → Dedicated Worker → Experienced Officer → Veteran Guard → Legendary Inspector
- **Weekly Goals**: Complete 15 daily challenges, login 7 days straight, process 500 immigrants for bonus rewards
- **Streak Rewards**: Daily login streaks provide increasing credit bonuses (up to +500 credits per game at high streaks)

## 🎯 Pro Tips for High Scores

### Investigation Strategy

1. **Always Investigate First**: Decision buttons won't activate until you use tools or ask questions - use this time wisely
2. **Use Tools Strategically**: Each tool can only be used once per immigrant, so choose based on theme and suspected violations
3. **Ask Targeted Questions**: Questions can only be asked once, so focus on areas where you suspect inconsistencies
4. **Read Everything Carefully**: Cross-reference names, dates, and information across all documents for inconsistencies
5. **Watch the Investigation Log**: Monitor your evidence-gathering in real-time to build a complete case

### Theme-Specific Tips

6. **Zombie Theme**: Focus on temperature readings (>39°C is dangerous), look for bite mark descriptions, check cognitive responses
7. **Pandemic Theme**: Verify vaccination status, check for symptoms, monitor temperature (>37.5°C is concerning)
8. **Alien Theme**: Look for "too perfect" appearances, check DNA scan results for "anomalous" or "non-human" readings
9. **Nuclear Theme**: Monitor radiation levels (>0.5 Sv is dangerous), check for burn descriptions, verify decontamination certificates

### Document Analysis

10. **Check Expiry Dates**: Expired documents are common violations - always verify dates carefully
11. **Compare Names**: Look for mismatches between claimed identity and document names
12. **Cross-Reference Medical Data**: Temperature, vaccination status, and symptoms should match across documents
13. **Read Personal Statements**: Stories may contain details that contradict other evidence

### Scoring Optimization

14. **Build Streaks**: Focus on accuracy over speed - consecutive correct decisions earn up to +100 bonus points
15. **Understand Risk Levels**: High-risk immigrants (50 pts) are worth more than low-risk (20 pts) but are harder to assess correctly
16. **Learn from Feedback**: Detailed explanations help you recognize similar patterns in future cases
17. **Track Your Performance**: Monitor accuracy percentage and adjust investigation thoroughness accordingly

## 🚀 Getting Started

### For Players

1. Find the Border Control post in your Reddit feed
2. Click "Launch App" to start the game immediately
3. No downloads or installations required - runs directly in your browser!
4. Experience the epic animated interface with "CHECKPOINT ALPHA" branding, glow effects, and immersive checkpoint atmosphere
5. Choose between Solo Mission, Team Ops, or Daily Challenges from the animated main menu

### For Developers

> Requires Node.js 22 or higher

1. Clone repository and install dependencies: `npm install`
2. Set up Reddit developer account at [developers.reddit.com](https://developers.reddit.com/)
3. Configure Devvit app credentials in your developer dashboard
4. Run `npm run dev` to start development with live Reddit integration and hot reloading
5. Test the epic interface and investigation mechanics in the Devvit playtest environment

## 🛠 Development Commands

- `npm run dev`: Start development server with live Reddit integration, hot reloading, and epic interface testing
- `npm run build`: Build client and server projects for production deployment with optimized assets
- `npm run deploy`: Upload new version to Reddit platform with enhanced features
- `npm run launch`: Publish app for review and public access with community engagement
- `npm run check`: Type check, lint, and format code for quality assurance across all components

## 🔧 Technical Stack

### Frontend Technologies

- **React + TypeScript**: Component-based architecture with strict type safety and epic animated interfaces
- **Tailwind CSS**: Utility-first styling with custom animations, glow effects, hover transitions, and checkpoint theming
- **Vite**: Fast build tool optimized for web development with hot reloading

### Backend & Platform

- **Express.js**: RESTful API server with comprehensive game logic endpoints and Redis integration
- **Redis**: Persistent data storage via Devvit platform for cross-session continuity
- **Devvit**: Reddit's developer platform for native app integration and community features

### Game Architecture

```
src/
├── client/                    # React frontend with epic interface
│   ├── main.tsx              # App entry point with React root setup
│   ├── index.html            # HTML template with responsive viewport
│   ├── App.tsx               # Main game interface with epic animated menu and checkpoint styling
│   ├── index.css             # Custom CSS with Papers Please styling, animations, and glow effects
│   ├── hooks/useGame.ts      # Game state management, API calls, and persistent Reddit integration
│   └── components/           # Enhanced game components
│       ├── CharacterPortrait.tsx     # Passport-style character photos with hash-based generation and theme effects
│       ├── InvestigationTools.tsx   # Strategic single-use investigation equipment with visual feedback
│       ├── MultiplayerLobby.tsx     # Professional multiplayer mode selection and role-based lobby
│       ├── DailyChallenge.tsx       # Daily challenges with streak tracking and rank progression
│       ├── GameModeSelector.tsx     # Epic game mode selection with animated features
│       ├── FunFeatures.tsx          # Achievements, tips, encouragement, and personalized messages
│       ├── SecurityDesk.tsx         # Alternative professional interface with holographic styling
│       └── DocumentViewer.tsx       # Interactive three-tab document inspection with violation highlighting
├── server/                   # Express backend with comprehensive game logic
│   ├── index.ts             # API endpoints with enhanced feedback and progression tracking
│   └── core/
│       ├── gameLogic.ts     # Advanced game logic, dynamic immigrant generation, and theme-specific mechanics
│       └── post.ts          # Reddit post creation functionality with community integration
└── shared/types/api.ts      # Comprehensive TypeScript types for client-server communication
```

### API Endpoints

- `GET /api/init` - Initialize game state, load themes with epic configurations, and get Reddit username with persistent cross-session data
- `POST /api/start` - Start new game with selected theme and difficulty, generate first dynamically-created immigrant with theme-specific attributes
- `POST /api/process` - Process immigrant decision with comprehensive validation, calculate score with streak bonuses, provide detailed feedback with violation explanations, and generate next immigrant
- `POST /api/change-theme` - Change game theme mid-session while preserving progress and statistics
- `GET /api/leaderboard` - Fetch community leaderboard data (future feature for competitive play and community engagement)

### Game Architecture

```
src/
├── client/                    # React frontend
│   ├── main.tsx              # App entry point with React root setup
│   ├── App.tsx               # Main game interface with retro terminal styling and enhanced feedback
│   ├── index.css             # Custom CSS with Papers Please styling and animations
│   ├── hooks/useGame.ts      # Game state management and API calls with persistent Reddit integration
│   └── components/           # Game components
│       ├── CharacterPortrait.tsx     # Passport-style character photos with hash-based generation
│       ├── InvestigationTools.tsx   # Interactive investigation equipment with single-use tools
│       ├── MultiplayerLobby.tsx     # Multiplayer mode selection (redirects to single-player)
│       ├── DailyChallenge.tsx       # Daily challenges with streak tracking and rewards
│       ├── GameModeSelector.tsx     # Enhanced game mode selection with practice modes
│       ├── FunFeatures.tsx          # Achievements, tips, and encouragement system
│       ├── SecurityDesk.tsx         # Alternative professional interface with holographic styling
│       └── DocumentViewer.tsx       # Multi-tab document inspection with violation highlighting
├── server/                   # Express backend
│   ├── index.ts             # API endpoints (/api/init, /api/start, /api/process, /api/change-theme)
│   └── core/
│       ├── gameLogic.ts     # Game logic, immigrant generation, and scoring algorithms
│       └── post.ts          # Reddit post creation functionality
└── shared/types/api.ts      # Shared TypeScript types for client-server communication
```

## 🎮 Game Mechanics

### Core Systems

- **Persistent State**: All progress saved to Reddit account via Redis backend with detailed statistics, cross-session continuity, automatic data recovery, and epic progression tracking
- **Enhanced Real-time Feedback**: Instant decision validation with animated overlays, detailed explanations, violation lists, streak celebrations, encouragement messages, and epic visual effects (2.5-second display)
- **Progressive Difficulty**: Each theme/difficulty introduces unique challenge patterns (Easy=60% violations, Medium=50%, Hard=40%) with appropriate complexity scaling and adaptive learning
- **Dynamic Generation**: Immigrants randomly generated with theme-specific attributes, appearances, violations, and backstories using sophisticated algorithms, name hash consistency, and realistic character development
- **Risk Assessment**: Three-tier system (low/medium/high) with color-coded visual indicators, appropriate point values (20/30/50), theme-specific violation patterns, and visual risk warnings
- **Strategic Investigation Tools**: Interactive equipment system with single-use tools per immigrant for strategic evidence gathering, preventing tool spam, encouraging thoughtful investigation, and building comprehensive cases
- **Dynamic Questioning**: Contextual question system with realistic responses based on immigrant data, theme context, potential lies or inconsistencies, and character-specific backstories
- **Advanced Character Generation**: Consistent passport-style portraits generated using name hash algorithms with age-appropriate features, health indicators, theme-specific visual effects, official document stamps, and comical variations

### Scoring & Progression

- **Base Points**: Low Risk (20pts), Medium Risk (30pts), High Risk (50pts) for correct decisions with risk-appropriate rewards and epic point animations
- **Streak Multiplier**: +5 points per consecutive correct decision (max +100 bonus) for building accuracy streaks with visual celebrations and achievement effects
- **Accuracy Tracking**: Detailed statistics on correct vs incorrect decisions with performance metrics, percentage calculations, and progression indicators
- **Theme Performance**: Individual tracking for each apocalyptic scenario with specialized requirements, violation pattern learning, and mastery progression
- **Enhanced Daily Challenge System**: Four challenge types (Quick Inspector, Careful Work, Investigation Pro, Question Master) with unique rewards, streak tracking, inspector ranking progression (New Recruit → Legendary Inspector), and login streak bonuses
- **Epic Progression**: Visual rank advancement with security clearance badges, animated promotions, and achievement celebrationsnges\*\*: Four challenge types (Quick Inspector, Careful Work, Investigation Pro, Question Master) with unique rewards, streak tracking, and progression
- **Inspector Ranking**: Five-tier progression system from New Recruit → Dedicated Worker → Experienced Officer → Veteran Guard → Legendary Inspector based on daily login streaks
- **Daily Login Streaks**: Consecutive daily login tracking with increasing credit bonuses (up to +500 credits per game at high streaks)
- **Weekly Goals**: Complete 15 daily challenges, maintain 7-day login streaks, process 500 immigrants for bonus rewards
- **Difficulty-Based Violation Rates**: Easy (60% violation chance), Medium (50% violation chance), Hard (40% violation chance) for progressive challenge scaling

### Technical Features

- **Mobile Responsive**: Optimized interface for all device types with responsive design and mobile-first approach
- **No External Dependencies**: Runs entirely within Reddit's platform using modern web technologies
- **Serverless Architecture**: Express.js backend with Redis persistence via Devvit platform
- **Real-Time State Management**: React hooks-based state management with persistent Reddit integration
- **Hash-Based Character Generation**: Consistent character appearance generation using name hash algorithms
- **Theme-Specific Game Logic**: Unique violation patterns, scoring systems, and visual indicators for each apocalyptic scenario
- **Professional UI Components**: Modular component architecture with reusable investigation tools, document viewers, and character portraitsrface\*\*: Clean, intuitive design inspired by real border control systems with retro terminal aesthetics
- **Cross-Platform**: Works on desktop and mobile browsers with touch-friendly controls
- **Persistent Data**: Redis-backed storage ensures game state survives across sessions and devices

## 🎯 Game Summary

Border Control is a strategic Reddit game that combines mandatory investigation mechanics with document verification gameplay in a retro "Papers, Please" style interface. As a security agent at a border checkpoint, you'll:

- **Conduct Required Investigations** using six different tools and targeted questioning before making any decisions - buttons remain disabled until you investigate
- **Analyze Character Information** with passport-style photos, detailed appearance descriptions, and cross-referenced documentation
- **Examine Multiple Documents** including passports, entry permits, health certificates, personal statements, and theme-specific scan results
- **Build Investigation Evidence** with real-time timestamped logging of all tool usage and question responses in terminal-style interface
- **Make Critical Decisions** only after thorough investigation, with immediate detailed feedback showing exactly what violations you missed or correctly identified
- **Master Four Unique Themes** each with specialized violation types, temperature thresholds, and investigation priorities (Zombie, Pandemic, Alien, Nuclear)
- **Experience Authentic Interface** with retro terminal styling, professional checkpoint layout, and realistic investigation workflow
- **Track Performance Metrics** through persistent Reddit integration with score, accuracy, streak tracking, and comprehensive statistics

The game's innovative mandatory investigation system prevents rushing through cases, requiring players to gather evidence through tools and questioning before making approve/deny decisions. With realistic character generation, comprehensive document verification, and detailed feedback systems, every case becomes a thorough investigation challenge that teaches proper security protocols.

**Ready to secure the border? Master the art of investigation in this detailed border control simulation built for Reddit! 🛡️**

## 🎖️ What Sets This Game Apart

Border Control represents a new generation of Reddit gaming that combines:

- **Mandatory Investigation Mechanics**: The first Reddit game to require evidence gathering before decision-making with disabled buttons until investigation is complete
- **Sophisticated AI Generation**: Dynamic immigrant creation with theme-specific violations, realistic backstories, and consistent character portraits using hash-based generation
- **Enhanced Daily Engagement Systems**: Login streaks, multiple challenge types, weekly goals, and inspector ranking progression that encourage regular play
- **Professional Interface Design**: Authentic border control simulation with retro terminal aesthetics, animated feedback, and comprehensive investigation logging
- **Cross-Platform Excellence**: Seamless experience on desktop and mobile devices within Reddit's ecosystem with responsive design and touch-friendly controls

This isn't just a game—it's a comprehensive border security training simulation that teaches critical thinking, attention to detail, and systematic investigation techniques while providing hours of engaging gameplay for the Reddit community with persistent progress tracking and social features.
