# Varun B P — Portfolio

Premium software engineering portfolio built with React 19, Vite 8, Tailwind CSS 4, GSAP, Lenis, and AOS.

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview production build
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key for contact form |

## Features

- **Reading Progress Bar** — top-of-page scroll indicator
- **Command Palette** — press `Ctrl+K` (or `Cmd+K`) for quick navigation
- **Scroll to Top** — floating button appears on scroll
- **Copy Email** — one-click email copy in hero
- **Availability Badge** — "Open To Work" indicator in navbar
- **Animated Counters** — metrics animate on scroll in About section
- **Web3Forms Contact** — production-ready contact form with spam protection
- **Keyboard Navigation** — full keyboard support, Escape closes modals/menus
- **GSAP Scroll Animations** — staggered reveals, parallax effects
- **Lenis Smooth Scrolling** — fluid scroll experience
- **AOS Reveals** — additional scroll-triggered animations

## Deployment

### Vercel (Recommended)

1. Push repo to GitHub
2. Import at https://vercel.com/new
3. Add `VITE_WEB3FORMS_KEY` in Vercel project Environment Variables
4. Deploy — zero config (vercel.json included)

### Netlify

1. Push repo to GitHub
2. Import at https://app.netlify.com/start
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `VITE_WEB3FORMS_KEY` in site settings Environment Variables
6. Deploy

## Tech Stack

- **React 19** + **Vite 8** — modern frontend toolchain
- **Tailwind CSS 4** — utility-first styling
- **GSAP** + **ScrollTrigger** — production-grade animations
- **Lenis** — smooth scrolling
- **AOS** — scroll reveal
- **Web3Forms** — serverless contact form
- **react-icons** — icon library

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Fixed nav with "Open To Work" badge
│   ├── Footer.jsx              # Follow (LinkedIn), links, copyright
│   ├── ProgressBar.jsx         # Reading progress indicator
│   ├── ScrollToTop.jsx         # Floating scroll-to-top button
│   ├── CommandPalette.jsx      # Ctrl+K quick navigation
│   └── sections/
│       ├── Hero.jsx            # Animated hero with role rotation
│       ├── About.jsx           # Summary + animated counters
│       ├── Skills.jsx          # Category skill cards
│       ├── Projects.jsx        # Project cards with impact
│       ├── Education.jsx       # Timeline entries
│       ├── Certifications.jsx  # Credential cards
│       ├── Achievements.jsx    # Achievement cards
│       └── Contact.jsx         # Web3Forms contact form
├── data/
│   └── portfolioData.js        # All resume data
├── App.jsx                     # Root component
├── main.jsx                    # Entry point
└── index.css                   # Tailwind + custom styles
```

## Security

- API keys stored in `.env` (never committed)
- CSP, X-Frame-Options, Referrer-Policy headers
- Honeypot spam protection on contact form
- No XSS vectors

## Accessibility

- WCAG AA+ compliant
- Skip navigation link
- ARIA labels on all interactive elements
- Focus-visible outlines
- Keyboard navigable
- Semantic HTML structure

## SEO

- Structured JSON-LD data (Person schema)
- Open Graph + Twitter Cards meta tags
- Canonical URL
- robots.txt + sitemap.xml
- Optimized meta title/description
