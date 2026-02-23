# Blueish Agent - Deployment Index

This document provides a quick reference to all deployment-related files and documentation.

## Quick Links

### Deploy Now
**Status: Ready to Deploy** ✓

1. [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) - Start here for complete instructions

### Documentation
- [DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md) - Pre-deployment checklist
- [DEPLOY.md](./DEPLOY.md) - Detailed deployment guide
- [.env.example](./.env.example) - Environment variables template
- [README.md](./README.md) - Project overview
- [deploy.sh](./deploy.sh) - Helper script

### Configuration
- [vercel.json](./vercel.json) - Vercel deployment config
- [src/middleware.ts](./src/middleware.ts) - Authentication middleware
- [package.json](./package.json) - Dependencies and build scripts

---

## 30-Second Deployment

1. **Push to GitHub** (if not already done)
   ```bash
   git push origin main
   ```

2. **Deploy via Vercel** 
   - Visit: https://vercel.com/new
   - Select your GitHub repository
   - Add environment variables:
     - `BASIC_AUTH_USER=admin`
     - `BASIC_AUTH_PASSWORD=blueish2024`
   - Click "Deploy"

3. **Wait 2-3 minutes** for deployment to complete

4. **Access your app** at the provided Vercel URL with credentials above

---

## Documentation Guide

### For Quick Start
→ Read **VERCEL_DEPLOYMENT_GUIDE.md** (Top of file has 5-minute quick start)

### For Detailed Instructions
→ Read **DEPLOY.md** (Step-by-step guide)

### For Verification Before Deploy
→ Use **DEPLOYMENT_READY.md** (Checklist to verify readiness)

### For Environment Setup
→ Copy from **.env.example** (All variables explained)

### For Configuration Reference
→ Check **vercel.json** (Build and deployment settings)

### For Authentication Details
→ Review **src/middleware.ts** (How auth works)

---

## What Gets Deployed

```
Your Vercel Deployment
├── Landing Page (/)
│   └── Links to Dashboard and Storybook
├── Dashboard (/dashboard)
│   └── Full agent monitoring interface
├── Storybook (/storybook/)
│   └── Interactive component library
└── API (/api/chat)
    └── Chat endpoint (no auth required)
```

All routes except `/api/*` require basic authentication.

---

## Key Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build && npm run build-storybook",
  "outputDirectory": ".next",
  "installCommand": "npm install --legacy-peer-deps",
  "nodeVersion": "20.x"
}
```

### .env.example
```
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=blueish2024
ANTHROPIC_API_KEY=optional
```

### src/middleware.ts
Implements basic authentication for all UI routes.

---

## File Structure

```
blueish-agent/
├── DEPLOYMENT_INDEX.md                 ← You are here
├── VERCEL_DEPLOYMENT_GUIDE.md          ← Start here!
├── DEPLOY.md                           ← Detailed guide
├── DEPLOYMENT_READY.md                 ← Checklist
├── README.md                           ← Project overview
├── .env.example                        ← Env template
├── deploy.sh                           ← Helper script
├── vercel.json                         ← Deployment config
├── package.json                        ← Dependencies
├── src/
│   ├── middleware.ts                   ← Authentication
│   ├── app/
│   │   ├── page.tsx                    ← Landing page
│   │   ├── dashboard/page.tsx          ← Dashboard
│   │   ├── api/chat/route.ts           ← Chat API
│   │   └── layout.tsx
│   ├── components/
│   │   ├── screens/                    ← Page components
│   │   └── ui/                         ← UI components
│   └── lib/                            ← Utilities
└── public/
    └── storybook/                      ← Built component library
```

---

## Deployment Methods

### Method 1: Web Dashboard (Easiest)
- Visit https://vercel.com/new
- Import from GitHub
- Configure variables
- Deploy
- **Time**: 2-3 minutes

### Method 2: CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```
**Time**: 5-10 minutes

### Method 3: GitHub Actions
Configure automatic deployment on push
**Time**: 10 minutes setup + auto-deploy

For details, see VERCEL_DEPLOYMENT_GUIDE.md

---

## Environment Variables

### Required
- `BASIC_AUTH_USER` - Username for basic auth (default: admin)
- `BASIC_AUTH_PASSWORD` - Password for basic auth (default: blueish2024)

### Optional
- `ANTHROPIC_API_KEY` - For Claude API integration

Set these in Vercel Project Settings.

---

## Routes & Features

| Route | Method | Auth | Purpose |
|-------|--------|------|---------|
| `/` | GET | Yes | Landing page |
| `/dashboard` | GET | Yes | Agent dashboard |
| `/storybook/` | GET | Yes | Component library |
| `/api/chat` | POST | No | Chat endpoint |

---

## Build Configuration

- **Node Version**: 20.x
- **Build Command**: `npm run build && npm run build-storybook`
- **Install Command**: `npm install --legacy-peer-deps`
- **Output Directory**: `.next`
- **Framework**: Next.js (auto-detected)

---

## Troubleshooting Quick Links

### Build Fails
- Check Node version (20.x required)
- Review Vercel build logs
- Test locally: `npm run build`

### Auth Not Working
- Verify env vars in Vercel Settings
- Check middleware.ts exists
- Clear browser cookies

### Storybook Missing
- Verify build includes `build-storybook`
- Check public/storybook/ exists
- Access via `/storybook/index.html`

For detailed troubleshooting, see VERCEL_DEPLOYMENT_GUIDE.md

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] Git repository initialized
- [ ] All changes committed
- [ ] vercel.json present
- [ ] .env.example created
- [ ] middleware.ts has auth logic
- [ ] public/storybook/ exists
- [ ] Local build successful
- [ ] Documentation reviewed

All items above are complete ✓

---

## Post-Deployment Verification

After deployment:

- [ ] Access deployment URL
- [ ] Login with admin / blueish2024
- [ ] Landing page loads
- [ ] Dashboard accessible
- [ ] Storybook loads
- [ ] Check Vercel dashboard
- [ ] Review build logs
- [ ] Test on mobile

---

## Resources

### Official Docs
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Storybook Docs](https://storybook.js.org/docs)

### This Project
- **Quick Start**: See VERCEL_DEPLOYMENT_GUIDE.md (top of file)
- **Detailed Guide**: See DEPLOY.md
- **Checklist**: See DEPLOYMENT_READY.md

### Support
- Vercel Help: https://vercel.com/help
- GitHub Issues: See your repository

---

## Project Summary

**Name**: Blueish Agent  
**Version**: 0.1.0  
**Status**: Production Ready ✓  
**Type**: Next.js Full-Stack Application  

**Features**:
- Agent monitoring dashboard
- 30+ UI components with Storybook
- Chat API integration
- Basic authentication
- Responsive design
- Tailwind CSS

**Technologies**:
- Next.js 16.1.6
- React 19.2.3
- TypeScript
- Tailwind CSS 4
- Radix UI
- Storybook 7.6.20

---

## Next Steps

1. **Read**: VERCEL_DEPLOYMENT_GUIDE.md (5 min)
2. **Verify**: Run local build test (2 min)
3. **Push**: to GitHub (1 min)
4. **Deploy**: via Vercel web (3 min)
5. **Test**: Access and verify (2 min)

**Total Time**: ~13 minutes

---

## Support

For help:
1. Check VERCEL_DEPLOYMENT_GUIDE.md troubleshooting section
2. Review DEPLOY.md for detailed instructions
3. Check DEPLOYMENT_READY.md checklist
4. See Vercel documentation at https://vercel.com/docs

---

**Status**: Fully Prepared for Deployment  
**Last Updated**: February 23, 2026  
**Project**: Blueish Agent  

🚀 Ready to Deploy!
