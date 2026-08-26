# Service content authoring spec

Read `content/types.ts` first — `ServiceCategory` and `ServiceDoc` are the contract.

## File shape

Each file exports exactly two things:

```ts
import type { ServiceCategory, ServiceDoc } from '../types'

export const <cat>Category: ServiceCategory = { ... }
export const <cat>Services: ServiceDoc[] = [ ... ]
```

## Hard rules

1. **Never invent a CMAC-specific claim.** No prices, no dollar figures, no "starting at", no invented
   warranty durations, no made-up stats, no awards, no certifications, no response-time SLAs, no crew
   counts, no years-in-business figures beyond what you are given. CMAC publishes no pricing anywhere and
   the site must not imply otherwise.
2. **Generic roofing/construction expertise is welcome and wanted.** Explaining how a torsion spring
   fails, what a Class 4 impact rating means, why K-style outperforms half-round on volume, or what
   "positive drainage" means on a low-slope roof is real information that helps buyers and AI answer
   engines. That is the substance these pages need. Just attribute craft knowledge to the trade, not to
   CMAC's internal practices.
3. Only name manufacturers that appear in `content/brands.ts`.
4. Service area is exactly five states: Texas, Oklahoma, Arkansas, Tennessee, Georgia. Seven markets:
   Dallas–Fort Worth, Houston, Austin, Oklahoma City, Nashville, Arkansas, Georgia. Main phone
   `1-888-389-CMAC`. Never write "6 states".
5. `summary` is at most 160 characters — it becomes the meta description and the llms.txt line.
6. `body` must total **at least 900 characters** of real prose per page; 1,500–2,800 is the target. This
   is what fixes the audit's "content without JavaScript" failure, so thin pages defeat the purpose.
7. `updated: '2026-08-24'` on everything.
8. Write in second person to the property owner. Direct, concrete, specific. No superlative stacking, no
   "we pride ourselves", no "in today's world", no exclamation marks. Short paragraphs.
9. Every `id` is kebab-case and must match the slug list you are given exactly.

## Block prose

`body` is `Block[]`:
- `{ t: 'p', text: '...' }` — a paragraph
- `{ t: 'h2', text: '...' }` — a section heading
- `{ t: 'h3', text: '...' }` — a subheading
- `{ t: 'ul', items: ['...', '...'] }` — a bulleted list
- `{ t: 'note', text: '...' }` — a callout, used sparingly

Use apostrophes and quotes as Unicode (’ “ ”) inside strings, or escape them. The file must be valid
TypeScript that passes `npx tsc --noEmit`.

## Optional fields worth using

- `bullets` — 3 to 6 `{ title, detail }` feature cards. `detail` is one sentence.
- `steps` — a numbered process, 3 to 6 `{ title, detail }`. Only where a real process exists.
- `brandIds` — ids from `content/brands.ts`.
- `faqIds` — optional IDs that must already exist in `content/faqs.ts`; build validation rejects dangling IDs.
- `image` — only from this list, or omit:
  `/svc-roofing-clean.jpg`, `/svc-gutters-clean.jpg`, `/svc-doors-clean.jpg`, `/svc-restoration-clean.jpg`
