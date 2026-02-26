#!/bin/bash
# Blueish Agent Deployment Script

set -e

echo "Blueish Agent - Vercel Deployment Script"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add -A
    git commit -m "Initial commit: Blueish Agent"
fi

# Check if there are uncommitted changes
if [ -n "$(git status -s)" ]; then
    echo "Warning: There are uncommitted changes."
    echo "Current status:"
    git status
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add -A
        git commit -m "Update: Deployment changes"
    fi
fi

echo "Building project locally..."
npm run build
npm run build-storybook

echo ""
echo "Build complete!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to https://vercel.com/new"
echo "3. Import your GitHub repository"
echo "4. Add environment variables:"
echo "   - BASIC_AUTH_USER=admin"
echo "   - BASIC_AUTH_PASSWORD=blueish2024"
echo "5. Click 'Deploy'"
echo ""
echo "Or use CLI: npx vercel --prod"
echo ""
echo "For more details, see DEPLOY.md"
