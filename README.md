# PrivPay Website

Standalone landing site for **PrivPay** — the B2B payment platform in the
[Priv](https://www.sansmercantile.com/priv/) product family (web app, payments
APIs, white-label branding, team logins, native apps per platform; consumers
use the mobile apps only).

Live at [privpay.sansmercantile.com](https://privpay.sansmercantile.com).

## Why it's a separate repo

PrivPay gets its own product domain under `*.sansmercantile.com`, the same way
Ptah has ptahcore/ptahrealty and Priv has priv/core and privphil. The marketing
page used to live at `sansmercantile.com/priv/pay`; that URL now permanently
redirects here.

## Stack

- **Next.js (Pages Router)** + React 18 + Tailwind CSS 3 + framer-motion —
  built the same way the landing pages on sansmercantile-nexus are built
  (Head/JSON-LD/keywords, `trailingSlash` canonicals, robots + sitemap,
  nexus-gold design tokens).
- Deployed on **Vercel** as its own project (`privpay-website`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Gates

```bash
npm run lint     # tsc --noEmit
npm run build    # next build
```

## SEO conventions

- Canonical host: `https://privpay.sansmercantile.com` (trailing slash).
- `public/robots.txt` + `public/sitemap.xml` ship with the site.
- OG image is the shared `media/social-cover-hero.png` from the main site.
  `press/priv-core-iphone-duo.png` is exclusive to Priv Core and must never be
  used on this site.

## Contact CTAs

Business and consumer CTAs deep-link into the main site's contact form with
prefilled subjects (`PrivPay for Business`, `Priv Pay Early Access`) — see
`lib/site.ts`.
