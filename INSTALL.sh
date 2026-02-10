#!/bin/bash

# Diginathi React Website - Installation Script
# This script will set up your development environment

echo "🚀 Diginathi React Website Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure contact form in src/pages/Contact.jsx"
echo "2. Run 'npm run dev' to start development server"
echo "3. Run 'npm run build' to build for production"
echo "4. Run 'vercel' to deploy to Vercel"
echo ""
echo "📚 Read QUICKSTART.md for detailed instructions"
echo ""
