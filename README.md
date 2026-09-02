# Diginathi website

React + Vite. Static build, deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # serve the built output
```

## Before it goes live

**Set the contact form key.** In Vercel → Settings → Environment Variables, add
`VITE_FORMSPREE_ID` (the part after `/f/` in your Formspree endpoint) for all
environments, then redeploy. Without it the form shows an "email us directly"
fallback rather than pretending to send. See `.env.example`.

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
`/products/digidocuiq` · `/products/digicta` · `/contact` · `*` → 404

Old URLs from the previous site redirect: `it-services` →
`software-development`, `ai-service` → `ai-automation`,
`digitization-of-records` → `digitization`, `data-entry-solution` →
`data-capture`, `manpower-outsourcing` → `/services` (service retired),
`/digidocsmart` → `/products/digidocsmart`.

## Assets

- `public/assets/Logo.png` — the only carried-over brand asset.
- `public/assets/dms/*.png` — real DigiDocSmart screenshots. Re-download from
  digidocsmart.com when the product UI changes; the previous site hot-linked
  them and the link had already broken.
- `public/brochures/*.pdf` — linked from service detail pages.
