# Diginathi React Website

Modern, responsive React website for Diginathi Private Limited with improved design, better contrast, and working contact form.

## Features

- ✨ Modern, interactive UI with smooth animations
- 🎨 Improved color contrast for better readability
- 📱 Fully responsive design
- 📧 Working contact form with validation
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🚀 Ready for Vercel deployment

## Tech Stack

- React 18
- React Router DOM
- Framer Motion (animations)
- React Hook Form (form handling)
- Lucide React (icons)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Contact Form Setup

The contact form uses Web3Forms API. To enable it:

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/Contact.jsx` with your actual key

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Build Settings (Auto-configured)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── WhatsAppFloat.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── DigiDocSmart.jsx
│   └── Contact.jsx
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles

public/
├── assets/          # Images and assets
└── brochures/       # PDF brochures
```

## Key Improvements

### Design Enhancements
- Modern gradient backgrounds
- Smooth animations and transitions
- Interactive hover effects
- Better spacing and typography
- Card-based layouts

### Contrast Improvements
- Darker text colors for better readability
- Improved color combinations
- Better contrast ratios (WCAG AA compliant)
- Enhanced visibility on all backgrounds

### Interactive Features
- Smooth scroll animations
- Hover effects on cards and buttons
- Mobile-friendly navigation
- Animated page transitions

### Contact Form
- Real-time validation
- Error messages
- Success feedback
- Integration with Web3Forms API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Diginathi Private Limited. All rights reserved.
