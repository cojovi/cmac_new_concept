# CMAC Roofing — Rebuild Progress

> **Living document.** Updated at the end of every phase and after every significant sub-step so work can
> resume cleanly after any interruption. Full approved plan lives at
> `~/.claude/plans/volumes-fastssd-github-my-repos-cmac-ne-vast-falcon.md`.

**Last updated:** 2026-08-24
**Current phase:** Phase 2 — content data layer + ~62 pages
**Resume here:** Phase 2, step 1 — write `content/types.ts`, `content/org.ts`, `content/markets.ts`.

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
| Schema type breadth | ⚠️ Partial | `FAQPage`, `Service`, `AggregateRating`, `BreadcrumbList`, `Offer` | 3 |
| llms.txt links resolve | ⚠️ Partial | links emitted from `allDocs()` — true by construction | 3 |
| Brand name discoverability | ❌ Failed | consistent NAP + Organization schema (off-site work too) | 3/5 |
| Bonus: llms-full, per-section llms, `?mode=agent`, MCP card, UCP, NLWeb `/ask` | ✅ keep/earn | route handlers | 3 |

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

## 5. Page inventory (~62)

Legend: ⬜ not started · 🟡 in progress · ✅ done

### Core
- ⬜ `/` Home
- ⬜ `/mini-homes`
- ⬜ `/services` hub
- ⬜ `/locations` hub

### Services — Roofing (9)
- ⬜ `/services/roofing`
- ⬜ `/services/roofing/roof-repairs`
- ⬜ `/services/roofing/roof-replacement` *(new — highest-intent term, missing from their site)*
- ⬜ `/services/roofing/new-construction`
- ⬜ `/services/roofing/custom-homes`
- ⬜ `/services/roofing/specialty-systems`
- ⬜ `/services/roofing/commercial-roofing`
- ⬜ `/services/roofing/multi-family`
- ⬜ `/services/roofing/home-additions`

### Services — Gutters (6)
- ⬜ `/services/gutters`
- ⬜ `/services/gutters/installation`
- ⬜ `/services/gutters/repairs`
- ⬜ `/services/gutters/gutter-guards`
- ⬜ `/services/gutters/maintenance`
- ⬜ `/services/gutters/commercial-gutters`

### Services — Doors (7)
- ⬜ `/services/doors`
- ⬜ `/services/doors/residential-garage-doors`
- ⬜ `/services/doors/commercial-garage-doors`
- ⬜ `/services/doors/openers`
- ⬜ `/services/doors/repair`
- ⬜ `/services/doors/brands`
- ⬜ `/services/doors/gallery`

### Services — Restoration (6)
- ⬜ `/services/restoration`
- ⬜ `/services/restoration/water-mitigation`
- ⬜ `/services/restoration/fire-smoke-damage`
- ⬜ `/services/restoration/resurfacing-refinishing`
- ⬜ `/services/restoration/floor-care-odor-control`
- ⬜ `/services/restoration/biohazard-trauma-cleanup`

### Services — Exteriors (5)
- ⬜ `/services/exteriors`
- ⬜ `/services/exteriors/siding`
- ⬜ `/services/exteriors/windows`
- ⬜ `/services/exteriors/decks`
- ⬜ `/services/exteriors/exterior-painting`

### Services — other
- ⬜ `/services/plumbing` *(pending owner confirmation — see §7 Q7)*

### Locations (13)
- ⬜ `/locations/texas` · `/locations/texas/dallas-fort-worth` · `/locations/texas/houston` · `/locations/texas/austin`
- ⬜ `/locations/oklahoma` · `/locations/oklahoma/oklahoma-city`
- ⬜ `/locations/tennessee` · `/locations/tennessee/nashville`
- ⬜ `/locations/arkansas`
- ⬜ `/locations/georgia` · `/locations/georgia/atlanta`

### Company & trust (14)
- ⬜ `/about` · `/contact` · `/quote` · `/reviews` · `/faqs`
- ⬜ `/warranty` · `/insurance-claims` · `/storm-response` · `/pricing`
- ⬜ `/partners` (Join The Vision — subcontractor recruitment, *not* careers)
- ⬜ `/privacy-policy` · `/terms` · `/accessibility` · `/sitemap-page` · `/ai`

### Machine surfaces
- ⬜ `/llms.txt` · `/llms-full.txt` · `/services/llms.txt` · `/locations/llms.txt`
- ⬜ `/_md/*` markdown twins · `/sitemap.xml` · `/robots.txt`
- ⬜ `/ask` (NLWeb) · `/.well-known/mcp/server-card.json` · `/.well-known/ucp`
- ⬜ `?mode=agent`

---

## 6. Phases

| Phase | Scope | Status |
|---|---|---|
| **0** | PROGRESS.md, decisions log | ✅ done |
| **1** | Next 16 scaffold · `globals.css` · home + Mini-Homes ported · `MobileNavToggle` · `next/font` · router removed | ✅ done |
| **2** | `content/` data layer · section components · `PageShell` · 8 templates · all ~62 pages | 🟡 in progress |
| **3** | middleware · `/_md` · not-found · sitemap/robots · llms.txt family · JSON-LD · `/ask` · `.well-known` · 301s | ⬜ |
| **4** | asset purge · AVIF/WebP · preloads · WOFF2 · focus rings · tablet breakpoint · type floor · form wiring | ⬜ |
| **5** | cutover: DNS, GSC sitemap | ⬜ |

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

## 7. Open questions for the owner (non-blocking — building around them)

1. **Reviews** — real Google review text + names, or wire a live Google Places feed? Without either, the
   reviews section ships without `AggregateRating`.
2. **Certifications** — are IKO ROOFPRO, Malarkey, and Owens Corning Preferred real? If unverified I ship
   GAF Master Elite, GAF President's Club, BBB A+, NRCA + CertainTeed/Atlas/TAMKO.
3. **Warranty terms** — nothing is published anywhere. Durations and coverage?
4. **NAP conflicts** — OKC `3613 S Moulton Dr` vs `3621 Moulton Dr`. DFW contact is joec@ / jason@ /
   brianm@ across three pages with three different phones (817-228-6924, 682-218-7221, 214-683-7663).
   Which is canonical?
5. **Founding year** — "over 15 years" and "over two decades" both appear on the live site.
6. **Form destination** — where do quote submissions go? Email, CRM webhook, both?
7. **Plumbing** — real service or drop it? It's a "Coming soon" stub but advertised on all 7 geo pages.
8. **Pirulen font license** — commercial Typodermic/Larabie face. Confirm webfont embedding is permitted.

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
