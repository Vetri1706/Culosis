# GitHub Push Script for Border Control Hackathon Submission
# PowerShell version for Windows

Write-Host "🚀 Border Control - GitHub Submission Script" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Initialize git (if not done)
Write-Host "Step 1: Initializing Git Repository..." -ForegroundColor Yellow
git init

# Step 2: Add all files
Write-Host "Step 2: Adding all files to git..." -ForegroundColor Yellow
git add .

# Step 3: Create initial commit
Write-Host "Step 3: Creating commit..." -ForegroundColor Yellow
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

# Step 4: Manual GitHub repository creation
Write-Host ""
Write-Host "Step 4: CREATE GITHUB REPOSITORY" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host "1. Go to https://github.com/new"
Write-Host "2. Repository name: clulosis (or border-control)"
Write-Host "3. Description: Border Control - Reddit Hackathon Game"
Write-Host "4. Public repository (required for hackathon)"
Write-Host "5. DO NOT initialize with README, .gitignore, or license"
Write-Host "6. Click 'Create repository'"
Write-Host ""
Read-Host "Press Enter after creating the GitHub repository"

# Step 5: Add remote origin
Write-Host ""
Write-Host "Step 5: Add remote origin..." -ForegroundColor Yellow
$GITHUB_USERNAME = Read-Host "Enter your GitHub username"
git remote add origin "https://github.com/$GITHUB_USERNAME/clulosis.git"

# Step 6: Rename branch to main
Write-Host "Step 6: Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

# Step 7: Push to GitHub
Write-Host ""
Write-Host "Step 7: Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ SUCCESS! Repository pushed to GitHub" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 NEXT STEPS FOR HACKATHON:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Verify .kiro directory is visible on GitHub"
Write-Host "2. Update HACKATHON_SUBMISSION.md with your GitHub URL"
Write-Host "3. Ensure repository is PUBLIC"
Write-Host "4. Add topics/tags: reddit, devvit, hackathon, game"
Write-Host "5. Update README with demo post link"
Write-Host ""
Write-Host "🔗 Your repository URL:" -ForegroundColor Yellow
Write-Host "https://github.com/$GITHUB_USERNAME/clulosis"
Write-Host ""
Write-Host "Good luck with the hackathon! 🏆" -ForegroundColor Magenta
