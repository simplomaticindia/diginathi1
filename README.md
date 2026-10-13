# Diginathi website

React + Vite. Static build, deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/ (client build, SSR build, prerender every route)
npm run preview    # serve the built output
```

## Before it goes live

**Set the contact form key.** In Vercel → Settings → Environment Variables, add
`VITE_FORMSPREE_ID` (the part after `/f/` in your Formspree endpoint) for all
environments, then redeploy. Without it the form shows an "email us directly"
fallback rather than pretending to send. See `.env.example`.

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Needed for | Example |
|---|---|---|
| `VITE_FORMSPREE_ID` | Contact form delivery | `xyzabcde` |
| `VITE_GA_ID` | Google Analytics 4, loaded only after analytics consent | `G-ABC123XYZ` |
| `GSC_VERIFICATION` | Optional: Search Console HTML-tag verification (DNS verification needs nothing) | `abc123…` |

## SEO

- Every route is prerendered to static HTML at build time (`src/entry-server.jsx`
  + `scripts/prerender.mjs`), with its own title, description, canonical URL,
  Open Graph/Twitter tags and JSON-LD. The browser then renders the app over it.
- Page SEO lives with each page in `useSeo({...})`; the tag and JSON-LD builders
  are in `src/lib/seo.js` (organisation, area served, breadcrumbs, Service,
  SoftwareApplication, FAQPage).
- `dist/sitemap.xml` is generated from the route list on every build;
  `public/robots.txt` points to it. Add a new page's path to `routes` in
  `src/entry-server.jsx`.
- Share images are in `public/og/` (1200×630); icons and the web manifest in
  `public/icons/` and `public/site.webmanifest`.
- Cities served are listed once in `CITIES` (`src/lib/seo.js`), used by the home
  page section and `areaServed`. Deliberately no per-city pages: Google treats
  near-duplicate city pages as doorway pages.
- Old URLs are permanent (301) redirects in `vercel.json`; unknown URLs get a
  real 404 with `noindex`.

## Privacy and cookies

- Consent manager: `src/lib/consent.jsx` + `src/components/CookieConsent.jsx`.
  Nothing optional runs before consent; Accept and Reject are equal; choices are
  granular and can be changed under "Cookie settings" in the footer; Global
  Privacy Control is honoured. Bump `POLICY_VERSION` to ask everyone again.
- Google Analytics (`src/lib/analytics.js`) loads only after analytics consent,
  with Consent Mode v2 and advertising signals off.
- The Google Map on Contact loads only after functional consent.
- Fonts are self-hosted (`@fontsource`), so no request goes to Google Fonts.
- Policies: `/privacy`, `/cookies`, `/terms` (`src/pages/Legal.jsx`). Have them
  reviewed by counsel, and confirm the Grievance Officer contact.

## Where the content lives

Almost all copy is in one file: **`src/data/site.js`**.

| What | Where |
|---|---|
| Services (titles, copy, process, deliverables, facts) | `services` array |
| Products | `products` array |
| Company details, phones, address, hours | `company` object |
| Industries, working principles | `industries`, `principles` |
| Old URL → new URL mapping | `legacyServiceSlugs` |

Edit that file and the nav, footer, cards, detail pages and sitemap copy all
follow. Page-specific copy that appears exactly once (the DigiDocSmart screen
tour, the in-development product detail) sits in its own page file.

## Structure

```
src/
  data/site.js          all shared content
  lib/useSeo.js         per-page <title> and meta tags
  components/
    Header, Footer, PageHead, CtaBand, Reveal, ScrollToTop, WhatsAppFloat
    Diagrams.jsx        hand-built SVG schematics (agent flow, timezone, etc.)
  pages/
    Home, About, Services, ServiceDetail,
    DigiDocSmart, ProductSoon, Contact, NotFound
  index.css             design tokens + shared primitives
```

## Design system

Tokens are at the top of `src/index.css`. The palette comes from the logo:
teal `#0E7C8B`, amber `#E9A116`, on warm paper `#FBF9F5`.

Type: **Fraunces** for display, **IBM Plex Sans** for body, **IBM Plex Mono**
for labels and figures. Loaded from Google Fonts in `index.html`.

Conventions worth keeping:
- `.wrap` for width, `.band` for vertical section padding, `.band--sunk` /
  `.band--slab` for alternating backgrounds (`.on-slab` flips text colours).
- `.eyebrow` mono label, `.lede` intro paragraph, `.numtag` section numbers.
- Scroll reveals use `<Reveal>` (IntersectionObserver + one CSS class), not an
  animation library.
- Diagrams live in `Diagrams.jsx` and scroll horizontally inside
  `.dgm-scroll` on narrow screens rather than shrinking to illegibility.

## Routes

`/` · `/about` · `/services` · `/services/:slug` · `/products/digidocsmart` ·
`/products/digiassettrack` · `/privacy` · `/cookies` · `/terms` · `/products/digidocuiq` · `/products/digicta` · `/contact` · `*` → 404

Old URLs from the previous site redirect: `it-services` →
`software-development`, `ai-service` → `ai-automation`,
`digitization-of-records` → `digitization`, `data-entry-solution` →
`data-capture`, `manpower-outsourcing` → `/services` (service retired),
`/digidocsmart` → `/products/digidocsmart`.

## Assets

- `public/assets/Logo.png` — the only carried-over brand asset.
- `public/assets/dms/*.jpg` — DigiDocSmart screenshots from demo.digidocsmart.com,
  filled with sample documents for the fictional Demo Healthcare Pvt. Ltd.
  Captured at 2x and resized to 1600px. Two dashboard cards (document
  intelligence counts, active workflows) were adjusted before capture because the
  demo's extraction worker was failing; IP addresses in the audit shot are masked.
- `public/assets/dat/*.jpg` — DigiAssetTrack screenshots from the demo database
  (`Demo Healthcare Pvt. Ltd.`, not a customer). Desktop shots are resized to
  1600px wide from the product repo's `website/img/`.
- `public/brochures/*.pdf` — linked from service detail pages.
