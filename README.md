# Tony's Imported Auto Service

Marketing/brochure website for Tony's Imported Auto Service — an independent European
auto repair shop in Manchester, CT. Built from the approved wireframe set.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- Fonts via `next/font`: **Spectral** (serif headings), **Archivo** (sans body/UI),
  **Spline Sans Mono** (labels/eyebrows)
- Appointment form delivered via **Web3Forms** (no server/backend required)
- Deploy target: **Vercel**

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then add the Web3Forms key (see below)
npm run dev                        # http://localhost:3000
npm run build && npm start         # production build
```

## Pages

| Route | Notes |
| --- | --- |
| `/` | Home |
| `/about` | About + founder tribute (Antonio "Tony" Oliveira) |
| `/services` | Services overview — three category panels |
| `/services/[slug]` | Service detail — one template, 9 pages (oil-change, brakes, tires, diagnostics, inspections, engine, suspension, apr-tune, transmission) |
| `/brands` | Brands overview |
| `/brands/[slug]` | Brand detail — one template, 6 makes (audi, bmw, mercedes-benz, jaguar, porsche, land-rover) |
| `/gallery` | Masonry photo grid |
| `/reviews` | Aggregate rating + testimonials + outbound links |
| `/faqs` | Accordion |
| `/contact` | Appointment form, address/phone/hours, embedded Google Map |

Shared components (built once, reused everywhere): `SiteHeader`, `SiteFooter`,
`CtaBand` (the repeated "Request an Appointment" band), `TrustBar`, `PageHero`,
`NudgeCallout`, and the FAQ accordion — all in `components/`.

## Editing content

All copy lives in plain data files — no need to touch page components:

- `lib/site.ts` — business info: phone, email, address, hours, rating, map embed,
  social + review-platform links.
- `lib/services.ts` — the 9 services and every field on their detail pages.
- `lib/brands.ts` — the 6 makes and their detail pages.
- `lib/faqs.ts` — the site-wide FAQ list.

## The appointment form

The form (`components/appointment-form.tsx`) validates in the browser, submits to
Web3Forms, and shows a confirmation state on success.

**To activate it:**

1. Go to [web3forms.com](https://web3forms.com), enter **Tonysimportedauto@gmail.com**,
   and copy the access key it emails you.
2. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. In Vercel, add the same variable under **Settings → Environment Variables**.

Submissions are emailed to Tonysimportedauto@gmail.com. Until the key is set, the form
still validates but shows a "not connected yet" message on submit.

## Swapping in real assets

Everything marked as a placeholder is easy to replace:

- **Photos** — search for the `<Placeholder …>` component. Each currently shows the
  shop logo (`public/assets/placeholder.jpg`) as a stand-in and has a `label`
  describing the intended shot. Replace each with `next/image`'s `<Image>`
  (`object-cover`, drop files in `public/`). Some heroes/spots already use real photos
  (`front.png`, `interior-1.jpg`).
- **Logo** — `public/assets/tonys-logo.jpg` (used in the header).
- **Founder photo** — `public/assets/antonio-oliveira.png` (About page).
- **Social + review links** — currently `#` placeholders in `lib/site.ts`
  (`social`, `reviewPlatforms`). Add the real Google/Carfax/SureCritic/Facebook/
  Instagram URLs there.
- **Domain** — update `metadataBase` in `app/layout.tsx` and `BASE_URL` in
  `app/sitemap.ts` / `app/robots.ts` once the production domain is known.

## SEO

- **Per-page metadata** via a shared `pageMeta()` helper (`lib/seo.ts`): unique
  title + description, a **canonical URL**, and complete **OpenGraph + Twitter**
  cards (with the `/og.png` share image) on every page.
- **Structured data** (`components/structured-data.tsx`):
  - `AutoRepair` / LocalBusiness site-wide — address, geo, hours, phone, price
    range, payment methods, areas served, aggregate rating, service catalog,
    and `sameAs` (auto-populates from real social/review URLs in `lib/site.ts`).
  - `FAQPage` on `/faqs` and on each service page (FAQ rich results).
  - `BreadcrumbList` + `Service` schema on service/brand detail pages.
- `app/sitemap.ts` (with priorities/change-frequency) and `app/robots.ts`
  generate `/sitemap.xml` and `/robots.txt`.
- **Domain** is set to `https://tonysimportedauto.com` in `lib/site.ts`
  (`site.url`) and flows to canonicals, sitemap, robots, and structured data.
- **Before launch:** replace `site.geo` with the exact lat/lng from the shop's
  Google Business Profile, and add real social/review URLs (they light up
  `sameAs` and the on-page footer/reviews links automatically).

## Responsive

Desktop nav collapses to a hamburger menu below `lg`; every multi-column grid reflows
to one column on mobile; tap targets are ≥44px. Test at 375px, 768px, and 1280px widths.

## Production hardening

- **Security headers** (`next.config.ts`): `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`. `X-Powered-By`
  is disabled; React strict mode is on.
- **Error handling**: `app/error.tsx` (route errors) and `app/global-error.tsx`
  (root-layout errors) show branded fallback UI; `app/not-found.tsx` is the 404.
- **PWA basics**: `app/manifest.ts` (web manifest), `app/icon.svg` (favicon),
  `app/apple-icon.png` (Apple touch icon, regenerate via
  `node scripts/make-apple-icon.mjs`), and a `theme-color`.
- **Accessibility**: skip-to-content link, one `<h1>` per page, visible focus rings,
  labeled form fields, and a mobile menu that closes on Escape and locks body scroll.
- **Privacy Policy** (`/privacy`, linked in the footer) — the appointment form collects
  personal info, so this covers what's collected and how it's used. **Have the shop
  owner / their counsel review the wording before launch.**

## Launch checklist

1. **Web3Forms key** — already configured. The public access key is baked into
   `components/appointment-form.tsx` as the default (and in `.env.local` for dev), so
   the form works in production with no extra Vercel config. Submissions go to
   Tonysimportedauto@gmail.com. To rotate it, set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
2. **Verify `site.geo`** — replace the approximate coordinates in `lib/site.ts` with the
   exact lat/lng from the Google Business Profile.
3. **Add real social + review URLs** in `lib/site.ts` (`social`, `reviewPlatforms`) —
   they auto-populate `sameAs`, the footer links, and the Reviews page buttons.
4. **Google Search Console** — verify the domain and submit `/sitemap.xml`. (Add the
   verification token via `metadata.verification` in `app/layout.tsx` if using the
   HTML-tag method.)
5. **Claim/complete the Google Business Profile** — the single biggest local-SEO factor;
   the name/address/phone/hours now match the site exactly.
6. **Analytics (optional)** — none is installed (no tracking cookies). If you want it,
   `@vercel/analytics` is a one-component drop-in on Vercel; update the Privacy Policy
   if you add any analytics.
7. **Swap remaining placeholders** — any `<Placeholder>` still showing the logo (Gallery
   tiles, brand hero images) for real photos.
