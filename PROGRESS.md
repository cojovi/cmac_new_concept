# CMAC Roofing — Rebuild Progress

> **Living document.** Updated at the end of every phase and after every significant sub-step so work can
> resume cleanly after any interruption. Full approved plan lives at
> `~/.claude/plans/volumes-fastssd-github-my-repos-cmac-ne-vast-falcon.md`.

**Last updated:** 2026-08-25 (agent-readiness hardening verified locally; production deployment pending)
**Current phase:** ✅ Rebuild, imagery, 65-route content system, and agent/developer interfaces complete
**Resume here:** Add `RESEND_API_KEY` and `LEAD_FROM_EMAIL` to the Vercel Preview environment when ready,
then confirm one real lead delivery. Resend credentials remain intentionally deferred by the owner.

### Agent-readiness correction (2026-08-25)

- The reported **39/100** scan targeted the old protected preview at
  `cmac-new-concept-k1j5utyfc-cojovis-projects.vercel.app`. Direct probes confirmed every route returned
  a `302` to Vercel SSO, so its soft-404, 239-character HTML, missing JSON-LD, missing trust pages, and
  failed Markdown findings describe the login shell rather than the rebuilt site.
- A fresh scan of the public production alias, `cmac-new-concept.vercel.app`, scored **95/100** before
  this hardening pass. It verified the real 404, SSR content, JSON-LD, sitemap, trust pages, llms.txt,
  Markdown negotiation, and other existing surfaces.
- Added a real `/developers` portal, `/developers/llms.txt`, OpenAPI 3.1.1 at `/openapi.json`, and an
  RFC 9727 Linkset API catalog at `/.well-known/api-catalog`. The OpenAPI contract explicitly declares
  the retrieval operations public and read-only; it does not invent OAuth, credentials, or write scopes.
- REST-facing errors now use RFC 9457 `application/problem+json` with stable codes and resolution hints,
  including an `/api/*` recovery route. NLWeb and MCP retain their own required failure envelopes.
- Fixed MCP discovery cards to advertise the origin serving the card. The earlier Vercel card pointed to
  the still-live Wix domain, where `/mcp` returns 403. The server now supports both the current stateless
  MCP `2026-07-28` `server/discover` flow and the established `2025-11-25` initialize handshake.
- Markdown negotiation now honors `Accept` q-values, treats `q=0` as rejection, returns 406 when neither
  HTML nor Markdown is acceptable, and advertises page-level Markdown alternates with metadata frontmatter.
- Local verification passes: lint, typecheck, production build, OpenAPI validation, 584 checks across 65
  public routes, all 261 legacy records, both MCP eras, and 32 responsive/axe screenshots with no overflow
  or serious/critical accessibility findings.
- Remaining scan limitations are external: the Vercel alias causes the scanner to search for “Vercel”
  developer resources, and CMAC brand discoverability depends on the eventual custom-domain cutover,
  indexing, consistent NAP listings, and third-party links.

### Git note (2026-08-25)

- Commit `214a7e7` on `experimental` was only the Vite → Next.js homepage migration. The 64-route rebuild
  (service pillars and detail pages, locations, trust/company pages, and the full footer taxonomy) lived in
  the working tree and was never committed.
- Pushing that commit made the git-connected Vercel preview for `experimental` replace the earlier complete
  preview with the incomplete homepage.
- This update commits the full working tree onto `experimental` so GitHub and Vercel match the rebuilt site,
  including footer Services (Gutters, Commercial Roofing, Multi-Family, …) and Company (Insurance Claims, …).

### Active visual enhancement

- Compared the owner-supplied full-page Homepage and Restoration captures. The generated trade art was
  strong, but the shared narrative renderer still produced one oversized prose slab beneath every hero.
- Replaced that prose slab across all 49 service/trust documents that use it with a reusable CMAC field
  brief: command-style overview, functional on-page chapter index, numbered scope modules, wide/pair bento
  rhythm, styled scope rows, technical corner marks, and intrinsic mobile stacking. Existing source-backed
  paragraphs and heading order remain intact in raw HTML and the markdown/agent surfaces.
- Added the homepage's five-stage process rhythm to every service category and to detail pages without an
  existing trade-specific process. Added consistent service-system/scope/explore labels and converted the
  FAQ module to the homepage's split editorial composition on wide screens.
- Compared the homepage aesthetic with the supplied Doors and Gutters page captures. The service pages
  lost the homepage hierarchy through a flat hero, long narrow copy rail, and image-free service cards.
- Added a central art-direction manifest covering all 34 public service routes, including a unique,
  trade-accurate scene, descriptive alt text, and focal position for every category and detail page.
- Rebuilt the shared service hero and service cards around responsive Next Image media, graphite/glass
  layering, crimson system lighting, mobile-safe crops, and reduced-motion behavior.
- Generated 34 unique Higgsfield scenes using the homepage hero as the exact style reference: service
  hub, five categories, and all 28 detail pages. Every route has dedicated alt text and focal position.
- Optimized the image family to 1440px AVIF masters; Next.js negotiates AVIF/WebP delivery. The full
  `public/` directory is 1.8 MB and the service visual set is 1.3 MB.
- Rebuilt the service hero/cards, added focused card-to-detail scroll reset and field-brief index tests,
  and expanded visual QA to 31 screenshots across 320, 390, 768, 974, 1280, and 2048px plus 200% zoom.
- Verification passes: lint, typecheck, 145-output production build, 551 checks across 64 public routes,
  261-record redirect validation, no serious/critical axe findings, no overflow or broken images, and
  working card-to-detail navigation at `scrollY: 0`.
- Lighthouse on the redesigned Restoration route: Performance 90, Accessibility 100, Best Practices 100,
  SEO 100. (The previous image-heavy Doors route remains 95/100/100/100.)
- The in-app browser's admin security check blocked localhost access, so responsive/interaction QA used the
  checked-in Playwright suite. It passed with no horizontal overflow, broken images, console errors, or
  serious/critical axe findings.
- **Updated authenticated preview:** https://cmac-new-concept-k1j5utyfc-cojovis-projects.vercel.app
  (deployment `dpl_DMmpe1ZwswWTRQ7ZNJXNyMvB6xYX`, status Ready; `vercel curl` returned HTTP 200 and the
  rendered field-brief/process markup on `/services/restoration`).

### Completion record

- **Authenticated preview:** https://cmac-new-concept-k1j5utyfc-cojovis-projects.vercel.app
- **is-agentic:** **95/100**, “Strong technical baseline” —
  https://is-agentic.com/scan/cmac-new-concept-eoqjsteiv-cojovis-projects.vercel.app
- **Inventory:** 65 public documents = 2 bespoke marketing pages + 34 services + 12 locations +
  17 trust/company/developer pages. All 65 also have markdown twins.
- **Verification:** lint, typecheck, production build, content validation, 549-route acceptance checks,
  redirect validation, keyboard/axe/responsive screenshots, Lighthouse, mocked Resend delivery, NLWeb,
  MCP, Markdown negotiation, and protected-preview smoke tests pass.
- **Lighthouse mobile:** Performance 92, Accessibility 100, Best Practices 100, SEO 100.
- **Legacy migration:** 261 checked-in records (260 unique sources); 249 changed URLs return 301, while
  11 already-canonical URLs remain direct 200s to avoid redirect loops. All 47 destinations resolve 200.
- **Assets:** `public/` reduced from 22 MB to 472 KB; active backgrounds ship as AVIF/WebP. Removed binary
  originals were moved to the system Trash and remain recoverable.
- **Forms:** Resend success and non-JS redirect passed against a mock provider; invalid input, honeypot,
  missing credentials (503), and provider failure (502) were verified. The protected preview degrades
  honestly until the two required Resend variables are configured.
- **Protection:** Preview SSO protection was restored after the external scan. No DNS, production-domain,
  Search Console, or off-site listing changes were made.
- **Remaining limitations:** brand-search/NAP consistency depends on external indexing and listings. The
  external scan also reports a false-positive developer-resource search for “Vercel” and does not award
  full MCP discovery credit despite successful Streamable HTTP handshakes at both `/mcp` and
  `/.well-known/mcp`.

---

## 1. The goal

Replace `cmacroofing.com` (Wix, scored **66/100** on Vercel's is-agentic.com audit) with a Next.js 16
static-first site that keeps this repo's dark "cinematic glass + red" design language, carries the full
CMAC service + location taxonomy across ~62 pages built from real harvested content, and scores in the
90s for SEO, agentic retrieval, and LLM answer engines.

### Why Next.js and not the current Vite SPA

The audit's one **critical** failure is *"Content without JavaScript — very little text content (41
chars)."* A client-rendered Vite SPA fails that check identically to Wix. So do the other failures: real
404s, `Accept: text/markdown` negotiation, `llms.txt` route handlers, complete Organization schema, and
trust-anchor pages all need a server. Building 60 subpages on the current stack would ship a prettier
site with the same score.

### Decisions locked in by the owner

| Decision | Choice |
|---|---|
| Framework | **Migrate to Next.js 16 App Router**, static-first, on Vercel |
| URLs | **Hierarchical** (`/services/roofing/roof-repairs`) + 301 from every legacy Wix path |
| Pricing | **No online pricing.** `/pricing` explains *how* pricing works, publishes zero dollar figures |
| Blog | **Out of scope.** Legacy `/blog/*` paths still get redirects so they don't dead-end |

---

## 2. Audit checks → what fixes them

| is-agentic check | Status | Fix | Phase |
|---|---|---|---|
| Content without JavaScript | ❌ Critical | SSG every page; real text in raw HTML | 1–2 |
| Agent-friendly 404s | ⚠️ Partial | `app/not-found.tsx` + `dynamicParams = false`, no catch-all | 3 |
| Markdown content negotiation | ❌ Failed | `middleware.ts` rewrite → `/_md/*`, `Vary: Accept` | 3 |
| Pricing info accessible | ❌ Failed | `/pricing` + `Offer` schema on the free inspection (partial credit — no figures) | 2–3 |
| Agent instruction / when-to-use | ❌ Failed | `/llms.txt` with a real "When to use this site" section | 3 |
| JSON-LD structured data | ⚠️ Partial | `@graph` with name + description on every page | 3 |
| Organization schema completeness | ⚠️ Partial | `contactPoint` per market + `PostalAddress` | 3 |
| Trust anchor pages | ⚠️ Partial | `/about`, `/contact`, `/privacy-policy`, each ≥500 chars | 2 |
| Schema type breadth | ⚠️ Partial | `FAQPage`, `Service`, `BreadcrumbList`, `Offer` (review schema intentionally omitted) | 3 |
| llms.txt links resolve | ⚠️ Partial | links emitted from `allDocs()` — true by construction | 3 |
| Brand name discoverability | ❌ Failed | consistent NAP + Organization schema (off-site work too) | 3/5 |
| Bonus: llms-full, per-section llms, `?mode=agent`, MCP card, NLWeb `/ask` | ✅ keep/earn | route handlers; no UCP claim | 3 |

---

## 3. Content accuracy — MUST FIX before launch

The concept homepage contains placeholder content that reads as real. All of it would end up in JSON-LD.

| Item | In concept now | Verified reality |
|---|---|---|
| Phone | `(833) 262-3222` | `1-888-389-CMAC` / `1-888-389-2622` |
| Service area | "Proudly Serving **6** States" | **5** states: TX, OK, AR, TN, GA |
| Press row | Forbes, Entrepreneur, Inc., Yahoo | ABC News, Fox News, NBC News, CBS News |
| Credentials | GAF, CertainTeed, IKO, Malarkey, Owens Corning, BBB | Verified: GAF Master Elite®, GAF President's Club, BBB A+, NRCA. Partners on /roofing: CertainTeed, Atlas, TAMKO |
| Reviews | "Jason M." / "Sarah T." / "Robert K." + Unsplash avatars | Real Google reviewers exist — fabricated ones must go |
| "1,000+ Reviews", "5 Star Rated" | asserted | unverified — must not feed `AggregateRating` |
| Copyright | © 2025 | 2026 |
| Mini-Homes nav | hardcoded Vercel preview URL | `/mini-homes` |

**Rule for this build: anything I cannot source gets removed, never invented.** Removals are logged in
§8.

---

## 4. Verified company data (harvested from cmacroofing.com)

- **Entity:** CMAC Roofing and Sheet Metal LLC · **Founder & CEO:** Christian Viveiros
- **Main:** 1-888-389-CMAC (1-888-389-2622) · **Mailing:** 199 County Road 4840, Haslet, TX 76052
- **Tagline:** "Integrity Truly Matters." · **Brand line:** "Living Life Unlocked"
- **Certifications:** GAF Master Elite® Contractor, GAF President's Club Award Winner, GAF contractor ID **1131347**, BBB A+, NRCA member
- **Featured on:** ABC, Fox, NBC, CBS News
- **Social:** facebook/instagram/linkedin/youtube — @CMACRoofing

### Markets (NAP)

| Market | Address | Phone | Email |
|---|---|---|---|
| Dallas–Fort Worth | 199 County Road 4840, Haslet, TX 76052 | 817-228-6924 | joec@cmacroofing.com |
| Houston | 2444 Randon Dyer Rd Ste. 120, Rosenberg, TX 77471 | 832-690-7898 | martinm@cmacroofing.com |
| Austin | 1301 Blue Ridge Dr #104, Georgetown, TX 78626 | 512-864-0400 | garretd@cmacroofing.com |
| Oklahoma City | 3613 S Moulton Dr, Oklahoma City, OK 73179 | 405-777-7660 | davidh@cmacroofing.com |
| Nashville | 2172 Nolensville Pk, Nashville, TN 37211 | 629-206-9566 | nickh@cmacroofing.com |
| Arkansas | *no local address* | 214-883-4670 | davidh@cmacroofing.com |
| Georgia | *no local address* | 214-883-4670 | davidh@cmacroofing.com |

### Named brands / systems (real, from their own pages)

- **Specialty roofing (11):** West Lake · Eagle Roofing Products · Crown Roof Tile · Ludowici · MCA Clay Roof Tile · Vermont Slate · Verea Clay Tile · Brava Tile · Sharkskin (underlayment) · DaVinci Roofscapes · Inspire Roofing Products
- **Shingle partners:** CertainTeed · Atlas · TAMKO
- **Commercial systems:** EPDM · TPO · Duro-Last · BUR · PVC membrane · modified bitumen · elastomeric coatings
- **Garage door vendors (5):** Clopay · Wayne Dalton · Amarr · Overhead Door · Northwest Door
- **Gutter profiles:** box · K-style · half-round — galvanized steel, aluminum, copper, zinc
- **Decking:** cedar · pressure-treated · composite · aluminum
- **Siding:** vinyl · fiber cement · composite

---

## 5. Page inventory (65)

Legend: ⬜ not started · 🟡 in progress · ✅ done

### Core
- ✅ `/` Home
- ✅ `/mini-homes`
- ✅ `/services` hub
- ✅ `/locations` hub

### Services — Roofing (9)
- ✅ `/services/roofing`
- ✅ `/services/roofing/roof-repairs`
- ✅ `/services/roofing/roof-replacement` *(new — highest-intent term, missing from their site)*
- ✅ `/services/roofing/new-construction`
- ✅ `/services/roofing/custom-homes`
- ✅ `/services/roofing/specialty-systems`
- ✅ `/services/roofing/commercial-roofing`
- ✅ `/services/roofing/multi-family`
- ✅ `/services/roofing/home-additions`

### Services — Gutters (6)
- ✅ `/services/gutters`
- ✅ `/services/gutters/installation`
- ✅ `/services/gutters/repairs`
- ✅ `/services/gutters/gutter-guards`
- ✅ `/services/gutters/maintenance`
- ✅ `/services/gutters/commercial-gutters`

### Services — Doors (7)
- ✅ `/services/doors`
- ✅ `/services/doors/residential-garage-doors`
- ✅ `/services/doors/commercial-garage-doors`
- ✅ `/services/doors/openers`
- ✅ `/services/doors/repair`
- ✅ `/services/doors/brands`
- ✅ `/services/doors/gallery`

### Services — Restoration (6)
- ✅ `/services/restoration`
- ✅ `/services/restoration/water-mitigation`
- ✅ `/services/restoration/fire-smoke-damage`
- ✅ `/services/restoration/resurfacing-refinishing`
- ✅ `/services/restoration/floor-care-odor-control`
- ✅ `/services/restoration/biohazard-trauma-cleanup`

### Services — Exteriors (5)
- ✅ `/services/exteriors`
- ✅ `/services/exteriors/siding`
- ✅ `/services/exteriors/windows`
- ✅ `/services/exteriors/decks`
- ✅ `/services/exteriors/exterior-painting`

### Deliberately omitted
- ➖ `/services/plumbing` — not a verified CMAC service; legacy traffic redirects to `/services`

### Locations (13)
- ✅ `/locations/texas` · `/locations/texas/dallas-fort-worth` · `/locations/texas/houston` · `/locations/texas/austin`
- ✅ `/locations/oklahoma` · `/locations/oklahoma/oklahoma-city`
- ✅ `/locations/tennessee` · `/locations/tennessee/nashville`
- ✅ `/locations/arkansas`
- ✅ `/locations/georgia` · `/locations/georgia/atlanta`

### Company, trust & developer resources (17)
- ✅ `/about` · `/contact` · `/quote` · `/reviews` · `/faqs`
- ✅ `/warranty` · `/register-my-roof` · `/insurance-claims` · `/storm-response` · `/pricing`
- ✅ `/partners` (Join The Vision — subcontractor recruitment, *not* careers)
- ✅ `/privacy-policy` · `/terms` · `/accessibility` · `/sitemap-page` · `/ai` · `/developers`

### Machine surfaces
- ✅ `/llms.txt` · `/llms-full.txt` · `/services/llms.txt` · `/locations/llms.txt`
- ✅ `/_md/*` markdown twins · `/sitemap.xml` · `/robots.txt`
- ✅ `/ask` (NLWeb) · `/.well-known/mcp` · `/.well-known/mcp/server-card.json` · `/mcp`
- ✅ `?mode=agent`

---

## 6. Phases

| Phase | Scope | Status |
|---|---|---|
| **0** | PROGRESS.md, decisions log | ✅ done |
| **1** | Next 16 scaffold · `globals.css` · home + Mini-Homes ported · `MobileNavToggle` · `next/font` · router removed | ✅ done |
| **2** | `content/` data layer · section components · `PageShell` · 8 templates · all 65 pages | ✅ done |
| **3** | proxy · `/_md` · not-found · sitemap/robots · llms.txt family · JSON-LD · `/ask` · `.well-known` · 301s | ✅ done |
| **4** | asset purge · AVIF/WebP · preloads · focus rings · breakpoints · type floor · Resend forms | ✅ done |
| **5** | production cutover: DNS, GSC sitemap | ➖ intentionally out of scope |

### Phase 1 checklist — ✅ complete
- ✅ Installed `next@16.3.2`; removed `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `framer-motion` (was installed and never imported)
- ✅ `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `next-env.d.ts`
- ✅ `src/index.css` → `app/globals.css` — diff against `HEAD:src/index.css` is **exactly and only** the 3 intended edits
- ✅ `app/layout.tsx` with `next/font` (Pirulen local + Outfit); Google Fonts `<link>` removed
- ✅ `SiteHeader` is a Server Component; `MobileNavToggle` is the only header client boundary
- ✅ `ui.tsx` uses `next/link`; hardcoded Vercel preview URL replaced with `/mini-homes`
- ✅ `app/page.tsx`, `app/mini-homes/page.tsx` with `generateMetadata` (no more `document.title` in `useEffect`)
- ✅ Deleted `index.html`, `src/`, `vite.config.ts`, `tsconfig.{app,node}.json`
- ✅ `scripts/screenshot.js` retargeted at :3000 with `document.fonts.ready`; added `scripts/measure.mjs` and `scripts/panel-bounds.mjs`

**Phase 1 verification results**

| Check | Result |
|---|---|
| Build | ✅ all routes prerendered static (`○`) |
| `<h1>` per page | ✅ exactly 1 on `/` and `/mini-homes` |
| **JS-free text on `/`** | ✅ **3,094 chars** (Wix scored 41 — this was *the* critical failure) |
| JS-free text on `/mini-homes` | ✅ 3,787 chars |
| Nonexistent path | ✅ **HTTP 404** (the SPA returned 200 + redirect) |
| Fonts | ✅ Pirulen + Outfit both `loaded`, self-hosted, no third-party request |
| Visual regression | ✅ lossless — see note below |
| Typecheck | ✅ clean |

**On the visual diff.** `comparison/current-974-final.png` turned out to be a **stale baseline** — it was
committed on 2026-06-11 in the initial commit, and `src/index.css` changed twice afterwards (both
Mini-Homes commits). Measuring panel bands out of both images, every section from the header through the
hero CTAs is pixel-identical, and every panel from `.services-panel` down matches to the pixel
(244/188/180/88/212/268/64). The only two deltas — trust row +25px, states panel +28px — trace to those
two post-baseline CSS commits, not to the migration. Fresh baselines saved as
`comparison/baseline-home-974.png` and `comparison/baseline-minihomes-974.png`.

**Typography bug found and fixed.** `:root` declared `font-family: Inter, Arial, Helvetica` but **Inter
was never loaded** — so all body text rendered in **Arial**, while `index.html` downloaded Outfit from
Google Fonts and no CSS rule ever referenced it. The site was paying for a font it never drew. Body text
now renders in Outfit, which is what the design intended and pairs far better with the Pirulen
headings. Visible effect: text wraps slightly tighter inside the fixed-height panels. **Flagging in case
you want Arial back.**

---

## 7. Owner follow-ups before production

1. **Resend preview configuration** — set `RESEND_API_KEY` and `LEAD_FROM_EMAIL`; optionally set
   `LEAD_TO_EMAIL` (defaults to `info@cmacroofing.com`). Then submit one real lead from each workflow.
2. **Legal and warranty review** — approve the generated privacy, terms, insurance, and warranty copy.
   No unverified warranty duration is published.
3. **NAP arbitration** — `/locations` remains the canonical source, but CMAC should resolve conflicting
   OKC and DFW address/contact records across its own site and external business listings.
4. **Off-site brand discovery** — consistent listings, canonical-domain indexing, and linked press mentions
   are still required for the is-agentic brand-search check; this cannot be completed in the codebase.
5. **Pirulen license** — the owner directed that Pirulen remain and the build assumes CMAC has web-embedding
   rights. Confirm that assumption before production launch.
6. **Production cutover** — DNS, Search Console, sitemap submission, analytics, and production email delivery
   remain deliberately untouched.

---

## 8. Decisions & removals log

| Date | Decision |
|---|---|
| 2026-08-24 | Migrate to Next.js 16 App Router, static-first. Static export rejected — it disables middleware, the only way to negotiate on `Accept`. |
| 2026-08-24 | Hierarchical URLs + 301s from all legacy Wix paths. |
| 2026-08-24 | No dollar figures on `/pricing` per owner. Accepts partial credit on that audit check. |
| 2026-08-24 | Blog out of scope. Legacy `/blog/*` still redirected. |
| 2026-08-24 | Service × metro landing pages deferred to a follow-on pass — high local-SEO value but only with genuinely differentiated copy. |
| 2026-08-24 | `PageDoc` normalization: HTML, markdown twin, JSON-LD, sitemap, and llms.txt all render from one object so they cannot drift. |
| 2026-08-24 | FAQ uses native `<details name="faq">` — answers must be in raw HTML or check #1 re-fails. |
| 2026-08-24 | No LLM behind `/ask` — unauthenticated public POST. Deterministic BM25 retrieval instead. |
| 2026-08-25 | Review excerpts remain visibly attributed and linked, but `Review` and `AggregateRating` JSON-LD are intentionally omitted as self-serving business markup. |
| 2026-08-25 | Plumbing and UCP commerce claims removed; neither is a verified public CMAC offering. |
| 2026-08-25 | Preview deployed with Vercel SSO protection; no production deployment or domain mutation performed. |
