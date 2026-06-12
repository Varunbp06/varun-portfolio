# Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (free)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `varun-portfolio`
3. Visibility: Public
4. Do NOT initialize with README (already exists)
5. Click "Create repository"

## Step 2: Push to GitHub

```bash
# From project directory
git remote add origin https://github.com/varunbp06/varun-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (if installed)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B: Vercel Dashboard (recommended)

1. Go to https://vercel.com/new
2. Import the `varunbp06/varun-portfolio` repository
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build` (auto-detected)
5. Output directory: `dist` (auto-detected)
6. Add environment variable:
   - Name: `VITE_WEB3FORMS_KEY`
   - Value: `6b6c02b5-52cc-47a3-b5d6-484ecfaa86d1`
7. Click "Deploy"

## Step 4: Verify Deployment

Visit the deployed URL. Verify:

1. All sections render (Hero, About, Skills, Projects, Education, Certifications, Achievements, Contact)
2. All social links work:
   - LinkedIn: https://www.linkedin.com/in/varun-b-p-209756214/
   - GitHub: https://github.com/varunbp06
   - WhatsApp: https://wa.me/919902354121
   - Email: mailto:varunbpvarunbp@gmail.com
3. Contact form submits successfully
4. Command Palette opens with Ctrl+K
5. Scroll to Top button appears on scroll
6. Reading Progress Bar tracks scroll
7. "Open To Work" badge visible in navbar
8. Mobile responsive

## Post-Deployment

Update the canonical URL in `index.html` from `https://varunbp.dev` to your actual Vercel domain or custom domain.
