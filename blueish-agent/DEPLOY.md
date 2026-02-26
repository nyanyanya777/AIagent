# Deployment Guide for Blueish Agent

## Quick Start - Vercel Deployment

The easiest way to deploy Blueish Agent is directly through Vercel's web interface:

1. Push this repository to GitHub
2. Visit https://vercel.com/new
3. Import your repository from GitHub
4. Vercel will automatically detect and configure Next.js settings
5. Add the required environment variables (see below)
6. Click "Deploy"

## Environment Variables Required

Add these to your Vercel Project Settings:

```
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=blueish2024
ANTHROPIC_API_KEY=sk-*** (if using Claude integration)
```

## Deployment Details

### What Gets Built

The build process creates:
1. **Next.js Application** - Main dashboard app (`npm run build`)
2. **Storybook** - Component library (`npm run build-storybook`)

Both are served from the same Vercel deployment.

### Build Configuration

Vercel automatically detects Next.js. The project includes `vercel.json` with:
- Build command: `npm run build && npm run build-storybook`
- Install command: `npm install --legacy-peer-deps`
- Node version: 20.x
- Output directory: `.next`

### Routes After Deployment

- **Home** (`/`) - Landing page with navigation
- **Dashboard** (`/dashboard`) - Main agent monitoring interface
- **Storybook** (`/storybook/index.html`) - Component documentation

### Authentication

All routes are protected with basic authentication using middleware:
- Default username: `admin`
- Default password: `blueish2024`

Change these in Vercel environment variables.

### Storybook Access

Storybook is built into `public/storybook/` and served as static files. Access it at:
```
https://your-deployment.vercel.app/storybook/index.html
```

Or from the landing page link.

## Alternative: Manual CLI Deployment

If you prefer CLI deployment:

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to preview:
   ```bash
   vercel
   ```

4. Deploy to production:
   ```bash
   vercel --prod
   ```

## Project Structure

```
blueish-agent/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard route
│   │   ├── api/
│   │   │   └── chat/route.ts     # Chat API endpoint
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── screens/              # Full-screen components
│   │   └── ui/                   # Reusable UI components
│   ├── lib/                      # Utilities
│   ├── data/                     # Static data
│   └── middleware.ts             # Basic auth middleware
├── public/
│   ├── storybook/               # Built Storybook
│   └── other assets
├── .storybook/                  # Storybook config
├── vercel.json                  # Vercel configuration
├── DEPLOY.md                    # This file
└── package.json
```

## Troubleshooting

### Build Fails
- Check Node.js version (requires 20.x)
- Ensure `package-lock.json` is committed
- Review Vercel build logs in dashboard

### Authentication Not Working
- Verify environment variables are set correctly
- Check that middleware.ts exists in src/
- Clear browser cache and retry

### Storybook Not Displaying
- Verify build includes `npm run build-storybook`
- Check that `public/storybook/index.html` exists after build
- Access via `/storybook/index.html` path

### Deploy from CLI Hangs
- You're in non-interactive environment
- Use Vercel web dashboard instead
- Or set `VERCEL_TOKEN` environment variable

## Performance Optimization

After deployment:

1. **Enable Analytics** - In Vercel dashboard under Analytics
2. **Monitor Performance** - Use Vercel's built-in observability
3. **Cache Strategy** - Vercel automatically optimizes caching for Next.js
4. **CDN** - Deployed globally on Vercel's edge network

## Domain & Custom URLs

To add custom domain:

1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Rolling Back

If you need to revert:

1. Go to Vercel Dashboard
2. Open "Deployments" tab
3. Find the deployment to restore
4. Click menu (•••) → "Promote to Production"

## Local Testing Before Deploy

Test build locally:

```bash
npm install --legacy-peer-deps
npm run build
npm run build-storybook
npm start
```

Then visit `http://localhost:3000` with credentials:
- Username: `admin`
- Password: `blueish2024`

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Next.js Middleware Guide](https://nextjs.org/docs/app/building-your-application/routing/middleware)

## Support

For deployment issues:
- Check Vercel build logs in dashboard
- Review Next.js deployment documentation
- Visit Vercel support: https://vercel.com/help
