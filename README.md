# Resume Builder & CV Maker App — Marketing Website

SEO-optimized marketing site for the **Resume Builder & CV Maker App**, built with Next.js and deployed to **Cloudflare Pages**.

**Live domain:** [waqaskay.com](https://waqaskay.com)

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (optional animations)
- Markdown blog CMS
- Static export for Cloudflare Pages

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, features, social proof, CTAs |
| `/features` | Detailed feature breakdown |
| `/templates` | SEO-heavy template gallery with filters |
| `/pricing` | Free vs Premium comparison |
| `/blog` | Blog index + 4 SEO articles |
| `/contact` | About + mailto support |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://waqaskay.com` |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play store link |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email for mailto |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 ID |

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git
3. Configure build:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20+
4. Add environment variables (see above)
5. Add custom domain **waqaskay.com**
6. Deploy

### Manual deploy with Wrangler

```bash
npm run build
npx wrangler pages deploy out --project-name=resume-app-site
```

## Replace Placeholder Images

Marketing screenshots are SVG placeholders in `public/images/`. Replace with your real PNG/WebP assets using the same filenames (or update paths in `src/lib/constants.ts`):

- `logo.svg` → your app logo
- `hero-feature-graphic.svg` → Play Store feature graphic
- `feature-*.svg` → app screenshots

## SEO Features

- Per-page meta titles & descriptions
- OpenGraph + Twitter cards
- JSON-LD (SoftwareApplication, BlogPosting, FAQPage, BreadcrumbList)
- `/sitemap.xml` and `/robots.txt`
- Internal linking across blog posts

## Scripts

```bash
npm run dev      # Development server
npm run build    # Static export to /out
npm run lint     # ESLint
```

After build, preview locally:

```bash
npx serve out
```
