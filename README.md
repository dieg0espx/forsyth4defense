# Forsyth4Defense

Marketing website for the **Law Office of John D. Forsyth**, a San Francisco criminal defense firm.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- Resend for transactional email (contact form)
- Deployed on Vercel

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

The dev server runs at <http://localhost:3000>.

## Environment variables

Required at runtime (see [.env.example](./.env.example)):

| Variable          | Purpose                                                              |
| ----------------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`  | API key from <https://resend.com>                                    |
| `EMAIL_FROM`      | Verified sender identity, e.g. `Forsyth4Defense <noreply@...>`       |
| `EMAIL_TO`        | Comma-separated list of contact-form recipients                      |

If `EMAIL_TO` is missing the contact API returns 500 — there is no silent
fallback. Set these in Vercel's project settings for each deploy environment.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Local dev server with hot reload      |
| `npm run build` | Production build (`next build`)       |
| `npm run start` | Run the production build locally      |
| `npm run lint`  | ESLint over the repo                  |

## Project layout

```
src/
  app/
    (routes)/page.tsx          # one folder per route, App Router
    api/contact/route.ts       # contact-form POST handler (Resend)
    sitemap.ts                 # exposes /sitemap.xml
    robots.ts                  # exposes /robots.txt
    layout.tsx                 # root layout + LegalService JSON-LD
  components/                  # Header, Footer, StickyCTA
  lib/
    site-config.ts             # phone/email/address (single source of truth)
    site-navigation.ts         # nav arrays consumed by Header/Footer/sitemap
    resend.ts                  # thin Resend wrapper
public/                        # static assets (hero images, og-image)
next.config.ts                 # legacy Squarespace 301 redirects
```

## Updating content

- **Phone, email, address** — edit `src/lib/site-config.ts`. All components consume from here.
- **Navigation / practice-area list** — edit `src/lib/site-navigation.ts`. Header, Footer, and the HTML sitemap all read from this file.
- **Page copy** — each route lives in `src/app/<route>/page.tsx`. Per-route SEO `metadata` is colocated.
- **Legacy URL redirects** — append to the `redirects()` array in `next.config.ts`.

## Adding a new practice area

1. Create `src/app/practice-areas/<slug>/page.tsx` (copy an existing one).
2. Add `{ name, href }` to `practiceAreas` in `src/lib/site-navigation.ts`.
3. Add the new route path to `src/app/sitemap.ts`.

## Deploy

The repo deploys to Vercel from `main`. Pushing to `main` ships to production.
Open a PR for preview deploys; CI runs `lint` + `tsc --noEmit` + `next build` on PRs (`.github/workflows/ci.yml`).

## Email rotation

The site sends mail via Resend. To rotate credentials:

1. Generate a new API key at <https://resend.com/api-keys>.
2. Update `RESEND_API_KEY` in Vercel (Production, Preview, Development).
3. Revoke the previous key from Resend.

The old `SMTP_*` keys (Gmail app password) are no longer used after the Resend
migration (commit `ef98bf0`). They should be revoked on the Google account
and removed from any local `.env.local` files.

## Known follow-ups

See `audits/forsyth4defense/summary.md` in the audit dashboard for the full
list. Highlights that aren't done yet:

- Compress `/public/*.JPG` (~40MB) to WebP/AVIF and migrate to `next/image`
- Add rate limiting + Turnstile/honeypot to `/api/contact`
- Add CSP/security headers in `next.config.ts`
- Add a real `/og-image.jpg` (1200x630) and a real Google verification token
