# SEO audit: trichonexfree.pl

Audit date: 2026-10-29
Method: manual audit (curl, HTML parsing, in-browser timing). The full 19-subagent pipeline of the `/seo` skill was not run. No Google API data (GSC, CrUX, GA4) was available.

## Score estimate: ~47 / 100 (before fixes)

| Category | Weight | Estimate | Note |
|---|---|---|---|
| Technical SEO | 22% | 35 | Canonical and sitemap pointed to localhost |
| Content quality | 23% | 50 | Unsourced health claims, testimonials |
| On-page SEO | 20% | 65 | Title too short, H1 without keyword |
| Schema / structured data | 10% | 40 | JSON-LD IDs and URLs pointed to localhost |
| Performance (CWV) | 10% | 35 | About 3.6 MB of PNG images on load |
| AI search readiness | 10% | 60 | Server-rendered HTML; no llms.txt (optional) |
| Images | 5% | 30 | Oversized PNGs; 5 images without dimensions |

## Findings and status

### Critical
1. **Canonical, og:url, og:image, JSON-LD, robots Host and sitemap all pointed to `http://localhost:3000`.** Cause: `NEXT_PUBLIC_SITE_URL` was not set at build time.
   - Status: fixed in code (default is now `https://trichonexfree.pl`, commit `f0787ec`). **Still needs a production redeploy**, then verify with `curl` that no `localhost` string remains.

### High
2. **Heavy images.** Hair and decor images were PNGs of 150 KB to 885 KB; about 3.6 MB on load.
   - Status: fixed. Converted to WebP and resized to display size; about 340 KB of images on load. `product.png` kept for Open Graph.
3. **Unsourced health claims and testimonials (YMYL, policy risk).** Phrases such as "badania kliniczne wykazały", "100% naturalne", "Produkt roku 2024", a named "Profesor trycholog" quote, and named before/after photos.
   - Status: partly fixed. Efficacy claims are attributed to the manufacturer, and a disclaimer is shown under the reviews. **Open:** the named testimonials and before/after photos need consent or verification. Decision for the owner.

### Medium
4. **Title and H1 lacked the target keyword.** Title was 28 characters; H1 was only "TRICHONEX".
   - Status: fixed. Title is 48 characters, and the H1 is "TRICHONEX na wypadanie włosów".
5. **Five images without width/height** (cause icons), which risks layout shift.
   - Status: fixed.
6. **Google Fonts request loaded unused families and weights** (italics, cyrillic subset).
   - Status: fixed. Trimmed to the weights and subsets in use.

### Info
7. **FAQPage schema.** Google stopped showing FAQ rich results on 7 May 2026. Informational only; no action required.
8. **No `llms.txt`.** Optional, and Google does not use it. Not added.
9. **Product schema has no `offers`.** No price is shown on the page, so this is consistent with the content.

### Working correctly
- `lang="pl"`, viewport meta, single H1, meta description (about 150 characters), Open Graph and Twitter card tags.
- All 19 images have alt text.
- JSON-LD parses (WebSite, WebPage, Product, FAQPage).
- `/thanks` has `noindex, nofollow`.
- HTML is Brotli-compressed and cached by Cloudflare.
- No HTTP errors on the homepage, robots.txt or sitemap.xml.

## Remaining actions
1. Redeploy production so the fixes go live (the GitHub push alone does not update `trichonexfree.pl`, unless the host auto-builds from `main`).
2. After deploy, verify: no `localhost` in the HTML, canonical equals `https://trichonexfree.pl`, and the homepage weight is about 340 KB of images.
3. Decide on the named testimonials and before/after photos (obtain consent or verification, or remove them).
4. Re-run the audit after deploy, ideally with the full `/seo audit` pipeline and Google Search Console data.

## Source code audit (repository)

Scope: `app/`, `lib/`, `public/`, `.env.example` at commit `f0787ec`.

| # | Severity | Finding | Status |
|---|---|---|---|
| S1 | Critical | `NEXT_PUBLIC_SITE_URL` was blank in `.env.example`, which is how production ended up with localhost URLs. | Fixed: `.env.example` now shows `https://trichonexfree.pl`; the code default is the production domain. |
| S2 | High (trust) | The `/thanks` footer shows a template company: "Lazard inc., Grenzacherstrasse 124, Basel, Switzerland", phone "+62 21 5727585", and `lazardhealthcare.com`. These do not match the Polish brand. The thanks page is also in English. | Open. Needs the real seller details from the owner. |
| S3 | Low | 21 image files in `public/assets/img` are not referenced by any source file (about 361 KB). They are not served on the page, but they add clutter. Examples: `ch1–4.png`, `wh1–3.png`, `wk4–5.png`, `prize.png`, `diet-image.png`, `rev1–3.jpg`, `avatar1.jpg`, `avatar3.jpg`, `ava2.png`, `inst_*.png`. | Open. Delete after the owner confirms. |
| S4 | Low | The hero, causes and review images are the new WebP files. `product.png` is still used by Open Graph (`lib/site.ts`). | Expected. |
| S5 | Info | `app/robots.ts` sets `host`, which only Yandex reads. Harmless. | No action. |
| S6 | Info | `app/sitemap.ts` lists only the homepage and sets `lastModified` to the build time. Correct for a one-page site. | No action. |
| S7 | Info | `app/layout.tsx` sets `lang="pl"`, `category: "health"`, and `metadataBase`. Correct. | No action. |
| S8 | Info | `app/api/order/route.ts` is disallowed in robots.txt. Correct. | No action. |

Open items from the source audit:
1. Replace the template company details on `/thanks` with the real seller information (S2).
2. Confirm whether the unused images in S3 can be deleted.
