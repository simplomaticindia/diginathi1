# Vercel Deployment Guide

## ✅ Images Fixed!

All assets have been moved to the `public/` folder, which is the correct location for Vite/Vercel deployments.

## 📁 Correct Structure

```
public/
├── assets/
│   ├── Logo.png
│   ├── generated/
│   │   ├── company_motto_innovation.png
│   │   ├── data_entry_service_1770700601105.png
│   │   ├── digitization_service_1770700574246.png
│   │   ├── dms_dashboard_hero.png
│   │   └── manpower_service_1770700616652.png
│   ├── icons/
│   └── illustrations/
└── brochures/
    ├── data-entry-solution-brochure.pdf
    ├── digidocsmart-brochure.pdf
    ├── digitization-of-records-brochure.pdf
    ├── it-services-brochure.pdf
    └── manpower-outsourcing-brochure.pdf
```

## 🚀 Deploy to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import from GitHub: `simplomaticindia/diginathi1`
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. Your site will be live!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 Vercel Configuration

The project includes `vercel.json` with the correct settings:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures React Router works correctly on Vercel.

## 📝 After Deployment

### 1. Configure Contact Form

The contact form needs a Web3Forms API key:

1. Go to https://web3forms.com/ (free)
2. Sign up and get your access key
3. In GitHub, edit `src/pages/Contact.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
5. Commit and push - Vercel will auto-deploy

### 2. Add Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

### 3. Environment Variables (If Needed)

If you want to use environment variables:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., `VITE_WEB3FORMS_KEY`)
3. Redeploy

## ✅ Verification Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All images display (Logo, service images, etc.)
- [ ] Navigation works (all links)
- [ ] Services page shows images
- [ ] Individual service pages display images
- [ ] DigiDocSmart page loads with dashboard image
- [ ] Contact form displays correctly
- [ ] Footer displays correctly
- [ ] WhatsApp button appears
- [ ] Mobile responsive design works
- [ ] PDF brochures download correctly

## 🐛 Troubleshooting

### Images Still Not Showing?

1. Check browser console for 404 errors
2. Verify image paths start with `/assets/` or `/brochures/`
3. Clear Vercel cache: Settings → Data Cache → Purge Everything
4. Redeploy: Deployments → Click ⋯ → Redeploy

### Contact Form Not Working?

1. Verify Web3Forms access key is added
2. Check browser console for errors
3. Test with a real email address

### Routing Issues?

1. Verify `vercel.json` exists in root
2. Check that all routes use React Router `<Link>` components
3. Redeploy if needed

## 📊 Performance

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## 📞 Support

If you encounter issues:
- Check Vercel deployment logs
- Review browser console errors
- Contact: info@diginathi.in

---

**Your website is now ready for production! 🎉**
