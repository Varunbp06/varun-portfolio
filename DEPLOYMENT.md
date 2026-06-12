# Deployment Guide — Varun B P Portfolio

## Option 1: Vercel (Recommended — ~1 minute)

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel auto-detects Vite — **no config needed**
5. Click **Deploy**
6. Your site is live at `https://yourproject.vercel.app`

## Option 2: Netlify

1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag & drop the `dist/` folder
4. Your site is live instantly

Or connect GitHub repo for auto-deploy:
1. Push to GitHub
2. Netlify → New site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

## Option 3: GitHub Pages

1. In `vite.config.js`, add: `base: '/your-repo-name/'`
2. Push to GitHub
3. Go to repo Settings → Pages
4. Source: GitHub Actions
5. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Option 4: Local Preview with Tunnel

```bash
npm run dev          # → localhost:5173
npx ngrok http 5173  # → public URL (requires ngrok auth token)
```

## Build Instructions

```bash
npm install
npm run build        # outputs to dist/
npm run dev          # dev server with HMR
```
