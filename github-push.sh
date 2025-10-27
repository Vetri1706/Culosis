#!/bin/bash
# GitHub Push Script for Border Control Hackathon Submission
# Run these commands step by step

echo "🚀 Border Control - GitHub Submission Script"
echo "=============================================="
echo ""

# Step 1: Initialize git (if not done)
echo "Step 1: Initializing Git Repository..."
git init

# Step 2: Add all files
echo "Step 2: Adding all files to git..."
git add .

# Step 3: Create initial commit
echo "Step 3: Creating commit..."
git commit -m "🎮 Border Control - Reddit Hackathon Submission

Complete region manager game with 4 apocalyptic themes:
- 🧟 Zombie Apocalypse
- 🦠 Disease Pandemic  
- 👽 Alien Invasion
- ☢️ Nuclear Fallout

Features:
- Dynamic immigrant generation with realistic violations
- Risk-based scoring system with streak bonuses
- Professional dark UI with Tailwind CSS
- Full TypeScript + React + Express + Redis stack
- Devvit platform integration

Kiro Development:
- 48-70x faster development time
- Zero-bug first build
- Production-ready code in 30 minutes
- .kiro directory included for hackathon submission

Includes:
- Complete game implementation
- Comprehensive documentation
- Hackathon submission writeup
- Open source (BSD-3-Clause license)"

# Step 4: Create GitHub repository (manual step)
echo ""
echo "Step 4: CREATE GITHUB REPOSITORY"
echo "================================"
echo "1. Go to https://github.com/new"
echo "2. Repository name: clulosis (or border-control)"
echo "3. Description: Border Control - Reddit Hackathon Game"
echo "4. Public repository (required for hackathon)"
echo "5. DO NOT initialize with README, .gitignore, or license"
echo "6. Click 'Create repository'"
echo ""
read -p "Press Enter after creating the GitHub repository..."

# Step 5: Add remote origin (replace with your username)
echo ""
echo "Step 5: Add remote origin..."
echo "Enter your GitHub username:"
read GITHUB_USERNAME
git remote add origin https://github.com/$GITHUB_USERNAME/clulosis.git

# Step 6: Rename branch to main (if needed)
git branch -M main

# Step 7: Push to GitHub
echo ""
echo "Step 6: Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ SUCCESS! Repository pushed to GitHub"
echo "========================================"
echo ""
echo "📋 NEXT STEPS FOR HACKATHON:"
echo ""
echo "1. Verify .kiro directory is visible on GitHub"
echo "2. Update HACKATHON_SUBMISSION.md with your GitHub URL"
echo "3. Ensure repository is PUBLIC"
echo "4. Add topics/tags: reddit, devvit, hackathon, game"
echo "5. Update README with demo post link"
echo ""
echo "🔗 Your repository URL:"
echo "https://github.com/$GITHUB_USERNAME/clulosis"
echo ""
echo "Good luck with the hackathon! 🏆"
