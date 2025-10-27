#!/bin/bash

# 🏆 Hackathon Submission Helper Script

echo "🚀 Preparing Border Control Game for Hackathon Submission..."

# Check if we're in the right directory
if [ ! -f "devvit.json" ]; then
    echo "❌ Error: devvit.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before submitting."
    exit 1
fi

echo "✅ Build successful!"

# Check for required files
echo "📋 Checking submission requirements..."

required_files=(
    "HACKATHON_SUBMISSION.md"
    "KIRO_DEVELOPMENT_STORY.md" 
    "SUBMISSION_SUMMARY.md"
    "DEPLOYMENT_GUIDE.md"
    "README.md"
    ".kiro"
)

for file in "${required_files[@]}"; do
    if [ -e "$file" ]; then
        echo "✅ $file - Found"
    else
        echo "❌ $file - Missing"
        exit 1
    fi
done

# Check .kiro directory is not in .gitignore
if grep -q "\.kiro" .gitignore 2>/dev/null; then
    echo "⚠️  Warning: .kiro directory is in .gitignore - judges won't be able to see it!"
    echo "   Remove .kiro from .gitignore for Kiro award eligibility"
fi

echo ""
echo "🎯 Ready for submission! Next steps:"
echo ""
echo "1. Deploy to Reddit:"
echo "   npm run deploy"
echo ""
echo "2. Create demo post:"
echo "   npm run launch"
echo ""
echo "3. Get your URLs:"
echo "   - Repository: https://github.com/[username]/[repo-name]"
echo "   - App Listing: https://developers.reddit.com/apps/[app-id]"
echo "   - Demo Post: https://reddit.com/r/[subreddit]/comments/[post-id]"
echo ""
echo "4. Submit to hackathon with both award categories:"
echo "   ✅ Reddit Best App: Community Play"
echo "   ✅ Best Kiro Developer Experience"
echo ""
echo "🏆 Good luck! Your game is ready to win! 🚀"
