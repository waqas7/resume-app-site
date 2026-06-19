# Resume Builder & CV Maker App — Marketing Website

SEO-optimized marketing site for the **Resume Builder & CV Maker App**, built with Next.js and deployed to **Cloudflare Pages**.

**Live domain:** [muhammadwaqaskhan.com](https://muhammadwaqaskhan.com)

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
| `NEXT_PUBLIC_SITE_URL` | `https://muhammadwaqaskhan.com` |
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
| **Deploy command (production)** | `npm run deploy` |
| **Deploy command (non-production / preview)** | `npm run deploy:preview` |
| Node version | 20+ |

**Do not use** `npx wrangler deploy` — that is for Workers/OpenNext and will fail on this static site.

The deploy command must be **`wrangler pages deploy`** (uploads the `out/` folder), not `wrangler deploy`.

### Cloudflare dashboard — copy/paste settings

**Production branch:** `main` (or your default branch)

```
Build command:              npm run build
Deploy command:             npm run deploy
Non-production deploy cmd:  npm run deploy:preview
Output directory:           out
```

Or paste deploy commands directly:

```bash
# Production
npx wrangler pages deploy out --project-name=resume-app-site --branch=main

# Non-production / preview branches
npx wrangler pages deploy out --project-name=resume-app-site --branch=$CF_PAGES_BRANCH
```

`$CF_PAGES_BRANCH` is set automatically by Cloudflare CI on preview builds. Change `resume-app-site` if your Pages project name differs.

### If deploy fails with `Authentication error [code: 10000]`

Your build **succeeds** — only `wrangler pages deploy` fails because `CLOUDFLARE_API_TOKEN` lacks **Pages → Edit** permission (or should be removed entirely).

**Fastest fix — switch deploy command (try this first):**

If **Build output directory** is set to `out`, Cloudflare may already publish static files after the build. Change deploy commands to a no-op:

| Field | Command |
|---|---|
| Production deploy | `npm run deploy:ci` |
| Non-production deploy | `npm run deploy:ci` |

Push and redeploy. If the site goes live, you do not need Wrangler in CI.

**If the site is still blank after that**, use one of these:

**Option A — Remove custom token**  
Delete **`CLOUDFLARE_API_TOKEN`** from project environment variables (Cloudflare CI provides its own credentials).

**Option B — Create a token with Pages permission**  
1. [Create API Token](https://dash.cloudflare.com/profile/api-tokens)  
2. **Custom token** → Account resources → your account  
3. Permissions: **Cloudflare Pages → Edit**, **Account Settings → Read**  
4. Save as encrypted **`CLOUDFLARE_API_TOKEN`**  
5. Also add **`CLOUDFLARE_ACCOUNT_ID`** = `4cb0323eece0ce3f1692d38e06529d28`  
6. Deploy command back to: `npm run deploy`

**Option C — Use Cloudflare Pages (not Workers Builds)**  
Create project via **Workers & Pages → Create → Pages → Connect to Git** (not a Worker). Set build + output `out` only — no deploy command needed.

**Also:** A Pages project named **`resume-app-site`** must exist before `npm run deploy` can work.

### Steps

1. Push this repo to GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your repo and use the build/deploy settings above
4. Add environment variables (see below) — **do not add `CLOUDFLARE_API_TOKEN` unless Option B above**
5. Deploy
6. **Custom domains** → add **muhammadwaqaskhan.com**

### Environment variables (Cloudflare Pages → Settings → Environment variables)

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://muhammadwaqaskhan.com` |
| `NEXT_PUBLIC_PLAY_STORE_URL` | `https://play.google.com/store/apps/details?id=europasscvmake.app.dev` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | `support@muhammadwaqaskhan.com` |
| `NEXT_PUBLIC_GA_ID` | *(optional)* |

### Manual deploy (optional)

```bash
npm run build
npx wrangler pages deploy out --project-name=resume-app-site
```

Note: `wrangler pages deploy` uploads static files — different from `wrangler deploy` (Workers).

## app-ads.txt (AdMob)

Served at **`/app-ads.txt`** from [`public/app-ads.txt`](public/app-ads.txt).

Replace `pub-XXXXXXXXXXXXXXXX` with your **AdMob publisher ID** (AdMob → Apps → App settings → app-ads.txt). Link this URL in Google Play Console under **App content → Advertising ID → app-ads.txt URL**:

```
https://muhammadwaqaskhan.com/app-ads.txt
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
