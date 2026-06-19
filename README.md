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

> **Important:** This site uses **static export** (`out/` folder). Use **Cloudflare Pages**, NOT Cloudflare Workers + `wrangler deploy`.

### If your deploy failed with OpenNext / `pages-manifest.json`

You likely created a **Workers** project with deploy command `npx wrangler deploy`. That path expects OpenNext/SSR — this site is pure static HTML.

**Fix:** Create a **Pages** project instead (or change build settings):

| Setting | Value |
|---|---|
| Product | **Workers & Pages → Pages** (not Workers) |
| Build command | `npm run build` |
| Build output directory | `out` |
| **Deploy command** | `npm run deploy` |
| Node version | 20+ |

**Do not use** `npx wrangler deploy` — that is for Workers/OpenNext and will fail on this static site.

The deploy command must be **`wrangler pages deploy`** (uploads the `out/` folder), not `wrangler deploy`.

### Cloudflare dashboard — copy/paste settings

```
Build command:    npm run build
Deploy command:   npm run deploy
Output directory: out
```

Or paste the deploy command directly:

```
npx wrangler pages deploy out --project-name=resume-app-site
```

Change `resume-app-site` if your Cloudflare Pages project has a different name.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your repo and use the settings above
4. Add environment variables (see below)
5. Deploy
6. **Custom domains** → add **waqaskay.com**

### Environment variables (Cloudflare Pages → Settings → Environment variables)

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://waqaskay.com` |
| `NEXT_PUBLIC_PLAY_STORE_URL` | `https://play.google.com/store/apps/details?id=europasscvmake.app.dev` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | `support@waqaskay.com` |
| `NEXT_PUBLIC_GA_ID` | *(optional)* |

### Manual deploy (optional)

```bash
npm run build
npx wrangler pages deploy out --project-name=resume-app-site
```

Note: `wrangler pages deploy` uploads static files — different from `wrangler deploy` (Workers).

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
