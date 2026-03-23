# Bros and Batter

Modern React + TypeScript + Vite landing page for Bros and Batter.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4

## Local development

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Build for production:

   npm run build

4. Preview production build:

   npm run preview

## Deployment to Vercel

This project is configured for Vercel static hosting.

### Option A: Import from GitHub (recommended)

1. Push this repository to GitHub.
2. In Vercel, click Add New -> Project.
3. Import the GitHub repo.
4. Use these settings:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Click Deploy.

### Option B: Vercel CLI

1. Install CLI:

   npm i -g vercel

2. Deploy:

   vercel

3. For production deployment:

   vercel --prod

## Type and build checks

Run before pushing:

- npm run build
- npx tsc --noEmit

## Notes

- Static assets are in public/images.
- Footer website icon points to / so it resolves to your deployed Vercel domain.
- Footer Facebook icon opens the configured profile URL in a new tab.
