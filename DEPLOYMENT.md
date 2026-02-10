# Deployment Guide for Diginathi React Website

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Contact Form

Edit `src/pages/Contact.jsx` and replace the placeholder with your Web3Forms access key:

```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
```

Get your free access key at: https://web3forms.com/

### 3. Test Locally
```bash
npm run dev
```

Visit http://localhost:5173 to see your site.

### 4. Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Your site will be live at:**
   - `https://your-project-name.vercel.app`
   - You can add a custom domain in Vercel settings

## Deploy to Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Method 2: Netlify Dashboard

1. Build your project:
```bash
npm run build
```

2. Go to https://app.netlify.com/
3. Drag and drop the `dist` folder
4. Your site is live!

### Method 3: GitHub + Netlify

1. Push to GitHub (same as Vercel method)
2. Go to https://app.netlify.com/
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Environment Variables

If you need environment variables:

### For Vercel:
```bash
vercel env add WEB3FORMS_KEY
```

Or add in Vercel Dashboard → Settings → Environment Variables

### For Netlify:
Add in Netlify Dashboard → Site settings → Environment variables

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minified assets
- ✅ Optimized images
- ✅ Fast CDN delivery

## Troubleshooting

### Build fails on Vercel/Netlify
- Ensure Node.js version is 16+
- Check that all dependencies are in `package.json`
- Run `npm run build` locally first

### Contact form not working
- Verify Web3Forms access key is correct
- Check browser console for errors
- Ensure CORS is not blocking requests

### Images not loading
- Verify all images are in the `public/assets` folder
- Check image paths start with `/assets/`
- Ensure images are committed to Git

## Support

For issues or questions:
- Email: info@diginathi.in
- Phone: +91 91477 43251

## Post-Deployment Checklist

- [ ] Test all pages
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test WhatsApp button
- [ ] Check PDF brochure downloads
- [ ] Test navigation menu
- [ ] Verify SEO meta tags
- [ ] Test on different browsers

## Monitoring

### Vercel Analytics
Enable in Project Settings → Analytics

### Google Analytics
Add tracking code to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Deploy preview URLs

## Backup

Always keep backups:
```bash
# Backup your code
git push origin main

# Backup your assets
# Store original files separately
```
