# 🛂 Border Control 3D - Reddit Game

An immersive 3D border checkpoint simulation game for Reddit where you play as a security agent screening immigrants in a fully realized 3D environment. Make critical decisions using advanced 3D character models, holographic displays, and security cameras across multiple intense apocalyptic themes!

## 🎮 Game Features

### 🌟 3D Immersive Experience

- **Full 3D Environment**: Navigate a realistic border checkpoint with interactive camera controls
- **3D Character Models**: Detailed immigrant models with theme-specific appearances and animations
- **Security Cameras**: Multiple surveillance cameras that track subjects automatically
- **Holographic Displays**: Futuristic data visualization showing real-time immigrant information
- **Particle Effects**: Dynamic visual effects for different risk levels and scanning processes
- **Atmospheric Lighting**: Professional checkpoint lighting with shadows and environmental effects

### Multiple Themes

1. **🧟 Zombie Apocalypse**

   - Screen survivors for zombie infection
   - Check temperature, bite marks, and cognitive responses
   - Prevent infected individuals from entering safe zones

2. **🦠 Disease Pandemic**

   - Verify vaccination status and health clearances
   - Monitor symptoms and test results
   - Prevent disease spread through strict screening

3. **👽 Alien Invasion**

   - Identify alien imposters disguised as humans
   - Use advanced DNA scanners and biometric verification
   - Protect humanity from infiltration

4. **☢️ Nuclear Fallout**
   - Check for radiation exposure and contamination
   - Verify decontamination certificates
   - Screen refugees from contaminated zones

### Difficulty Levels

- **Easy**: More obvious violations, better chance to learn
- **Medium**: Balanced challenge with subtle clues
- **Hard**: Expert mode with difficult-to-spot violations

### Scoring System

- **Low Risk Immigrants**: 20 points
- **Medium Risk Immigrants**: 30 points
- **High Risk Immigrants**: 50 points
- **Streak Bonus**: +5 points per correct decision in a row (max +100)

## 🎯 How to Play

1. **Select Your Mission**: Choose from 4 different apocalyptic theme scenarios in the stunning 3D splash screen
2. **Set Difficulty**: Pick Easy, Medium, or Hard with visual difficulty indicators
3. **3D Inspection**: Use mouse controls to orbit around 3D immigrant models and examine them from all angles
4. **Multi-Source Analysis**: Review holographic displays, security camera feeds, and detailed documentation
5. **Critical Decisions**: Use the 3D interface to APPROVE or REJECT based on your comprehensive analysis
6. **Visual Feedback**: Watch particle effects and lighting changes based on risk levels and decisions
7. **Maintain Accuracy**: Build streaks for bonus points while managing the immersive 3D checkpoint!

## 📋 What to Check

### Documentation

- ID numbers and expiry dates
- Name consistency
- Origin and destination verification
- Reason for travel

### Theme-Specific Checks

- **Zombie**: Temperature, bite marks, cognitive responses
- **Pandemic**: Vaccination status, symptoms, test results
- **Alien**: DNA scans, biometric data, retinal patterns
- **Nuclear**: Radiation levels, decontamination status, origin zones

### Visual Inspection

- Appearance and behavior
- Signs of infection, contamination, or anomalies
- Consistency with documentation

## 🏆 Game Mechanics

- **Correct Decisions**: Earn points and build streaks
- **Wrong Decisions**: Reset your streak
- **Risk Assessment**: Higher risk detections earn more points
- **Progressive Challenge**: Each theme has unique violation patterns

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Run locally:

   ```bash
   npm run dev
   ```

4. Deploy to Reddit:
   ```bash
   npm run deploy
   ```

## 🛠 Technical Stack

### 3D Graphics & Rendering

- **Three.js**: Core 3D graphics engine for WebGL rendering
- **React Three Fiber**: React integration for Three.js with declarative 3D scenes
- **React Three Drei**: Advanced 3D components and utilities for enhanced visuals

### Frontend Technologies

- **React + TypeScript**: Modern component-based architecture with type safety
- **Tailwind CSS**: Utility-first styling with custom 3D-specific animations
- **Custom Shaders**: GLSL shaders for advanced visual effects and particle systems

### Backend & Platform

- **Express.js + Redis**: High-performance server with persistent data storage
- **Reddit Devvit**: Native Reddit platform integration
- **Vite**: Lightning-fast build tool optimized for 3D asset bundling

### Performance Optimizations

- **WebGL Optimization**: Efficient 3D rendering with shadow mapping and LOD systems
- **Asset Management**: Optimized 3D model loading and texture compression
- **Responsive Design**: Adaptive 3D quality based on device capabilities

## 🎨 Game Design

The game features a cutting-edge 3D design that creates an immersive border control experience:

### Visual Design

- **3D Checkpoint Environment**: Realistic border facility with security booths, barriers, and scanning equipment
- **Character Modeling**: Detailed 3D immigrant models with theme-specific appearances and risk-based visual effects
- **Holographic UI**: Futuristic data displays with glowing text and animated borders
- **Professional Lighting**: Dynamic lighting system with shadows, spotlights, and atmospheric effects
- **Particle Systems**: Real-time particle effects for warnings, scanning, and status indicators

### User Experience

- **Intuitive 3D Controls**: Mouse-controlled camera for 360-degree inspection
- **Color-coded Risk System**: Visual indicators (Low=Green, Medium=Orange, High=Red) with glowing effects
- **Immersive Audio-Visual Feedback**: Particle effects and lighting changes for decision outcomes
- **Responsive 3D Interface**: Seamless integration of 2D UI elements with 3D environment
- **Persistent Game State**: Maintains progress across sessions with enhanced visual statistics

## 📝 Credits

Inspired by classic border control simulation games but adapted for Reddit's interactive platform with unique apocalyptic and sci-fi themes.

## 🔧 Development

### Project Structure

```
src/
├── client/          # React frontend
│   ├── App.tsx     # Main game UI
│   └── hooks/
│       └── useGame.ts  # Game state management
├── server/          # Express backend
│   ├── index.ts    # API endpoints
│   └── core/
│       └── gameLogic.ts  # Game logic and immigrant generation
└── shared/
    └── types/
        └── api.ts  # Shared TypeScript types
```

### API Endpoints

- `GET /api/init` - Initialize game state
- `POST /api/start` - Start new game with theme and difficulty
- `POST /api/process` - Process immigrant decision
- `POST /api/change-theme` - Change game theme
- `GET /api/leaderboard` - Fetch leaderboard (future feature)

## 🎲 Future Enhancements

- Global leaderboards
- Time-limited challenge modes
- Multiplayer competitions
- Additional themes (vampire outbreak, robot uprising, etc.)
- Achievement system
- Daily challenges

---

**Have fun protecting the border! Every decision matters! 🛡️**
