# Quick Start Guide

## 🚀 Get Your Website Live in 10 Minutes

### Step 1: Install Dependencies (2 minutes)
```bash
npm install
```

### Step 2: Configure Contact Form (1 minute)

1. Go to https://web3forms.com/
2. Sign up for free
3. Get your access key
4. Open `src/pages/Contact.jsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

### Step 3: Test Locally (1 minute)
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Step 4: Deploy to Vercel (5 minutes)

#### Option A: Using Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

#### Option B: Using GitHub + Vercel Dashboard
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to https://vercel.com/dashboard
# 3. Click "New Project"
# 4. Import your repository
# 5. Click "Deploy"
```

### Step 5: Done! 🎉

Your website is now live at `https://your-project.vercel.app`

## 📝 What You Get

✅ Modern, responsive website
✅ Working contact form
✅ Smooth animations
✅ Perfect color contrast
✅ Mobile-friendly
✅ SEO optimized
✅ Fast loading
✅ Easy to update

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: #0F2C59;      /* Your brand color */
  --secondary: #D4AF37;    /* Accent color */
  --accent: #06B6D4;       /* Highlight color */
}
```

### Update Content
- **Home Page**: `src/pages/Home.jsx`
- **Services**: `src/pages/Services.jsx`
- **Contact Info**: `src/components/Footer.jsx`

### Add Images
Place images in `public/assets/` folder and reference as:
```jsx
<img src="/assets/your-image.png" alt="Description" />
```

## 🔧 Common Tasks

### Update Contact Information
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Add a New Service
1. Add service data in `src/pages/Services.jsx`
2. Add detail page in `src/pages/ServiceDetail.jsx`
3. Add brochure PDF in `public/brochures/`

### Change Logo
Replace `public/assets/Logo.png` with your logo

### Update WhatsApp Number
Edit `src/components/WhatsAppFloat.jsx`:
```jsx
href="https://wa.me/YOUR_NUMBER"
```

## 📱 Test Your Website

### Desktop
- Chrome: http://localhost:5173
- Firefox: http://localhost:5173
- Safari: http://localhost:5173

### Mobile
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Open `http://YOUR_IP:5173` on your phone

### Test Contact Form
1. Fill out the form
2. Submit
3. Check your email (configured in Web3Forms)

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Contact Form Not Working
- Check Web3Forms access key
- Check browser console for errors
- Verify email in Web3Forms dashboard

### Images Not Loading
- Ensure images are in `public/assets/`
- Check file names match exactly
- Use forward slashes: `/assets/image.png`

## 📚 Learn More

- [Full Documentation](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Improvements List](IMPROVEMENTS.md)

## 🆘 Need Help?

Contact: info@diginathi.in
Phone: +91 91477 43251

## ✨ Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain
3. ✅ Set up Google Analytics
4. ✅ Test on all devices
5. ✅ Share with the world!

---

**Congratulations! Your modern website is ready to go! 🎉**
