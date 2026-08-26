import type { ServiceCategory, ServiceDoc } from '../types'

/**
 * Roofing — the pillar category and its eight service pages.
 *
 * Sourced from cmacroofing.com: /roofing, /roof-repairs, /tract-homes, /custom-homes,
 * /specialty-systems, /commercial-roofing, /multi-family, /remodeling-additions, and
 * /register-my-roof. `roof-replacement` is new — CMAC has no dedicated replacement page today,
 * which is the single largest content gap in the trade's highest-intent search term.
 *
 * Craft detail is attributed to the trade, never to CMAC's internal practices. No pricing appears
 * anywhere, because CMAC publishes none.
 */

export const roofingCategory: ServiceCategory = {
  id: 'roofing',
  name: 'Roofing',
  navLabel: 'Roofing',
  headline:
    'Repair, replacement, specialty materials, commercial systems, and multi-family programs — from a veteran-owned, GAF Master Elite® certified contractor.',
  summary:
    'Roof repair, replacement, specialty tile and slate, commercial systems, and multi-family programs across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
  image: '/svc-roofing-clean.jpg',
  body: [
    {
      t: 'p',
      text: 'CMAC Roofing is a veteran-owned roofing contractor founded and led by Christian Viveiros. The roofing division is the core of the company: repairs and replacements for homeowners, production work for tract builders, architectural roofs for custom builders, tile and slate specialty systems, single-ply and coating systems for commercial buildings, and maintenance programs for multi-family portfolios.',
    },
    {
      t: 'p',
      text: 'Those are eight different problems belonging to eight different buyers, so the work is organized that way. Start with the line that matches your situation.',
    },
    { t: 'h2', text: 'Where your project fits' },
    {
      t: 'ul',
      items: [
        'Roof repair — a leak, wind-lifted shingles, or hail damage that has not yet compromised the whole roof.',
        'Roof replacement — a full tear-off to the deck and a complete new system when the field of the roof is past repairing.',
        'New construction — production roofing for tract and subdivision builders, on dry-in dates that hold.',
        'Custom homes — architectural roofs with complex geometry, built from the drawings alongside the architect and builder.',
        'Specialty systems — clay tile, concrete tile, natural slate, synthetic slate, metal slate, and copper.',
        'Commercial roofing — EPDM, TPO, Duro-Last, PVC, modified bitumen, built-up, and elastomeric coating restorations.',
        'Multi-family — quarterly maintenance, phased replacements, restoration, and CapEx planning for owners and managers.',
        'Home additions — remodeling and exterior work, including tying a new addition’s roof into the existing one.',
      ],
    },
    { t: 'h2', text: 'Repair or replace' },
    {
      t: 'p',
      text: 'Nearly every roofing call starts with that question, and the honest answer depends entirely on what an inspection finds. A roof shedding granules across the whole field, showing exposed fiberglass mat, or nearing the end of its material life is not a repair candidate — a patch on a worn roof fails at the edge of the patch, because you are fastening new material into shingles that have gone brittle. A roof with one cracked pipe boot at year eight is a repair, and quoting a replacement for it is not an upgrade, it is a bad recommendation.',
    },
    {
      t: 'p',
      text: 'Hail changes the math again. Insurers evaluate a storm-damaged roof by test squares — a marked-off area on each slope, counted for impact hits — and the result decides whether the carrier is paying for a slope, a full roof, or nothing. That is why the documentation from the inspection matters as much as the inspection itself.',
    },
    { t: 'h2', text: 'The systems CMAC installs' },
    {
      t: 'p',
      text: 'Asphalt shingles still cover most of the homes in the five states CMAC serves, and they remain the best value per year of service life. But a roof is a system, not a product: the underlayment, the ice-and-water membrane at the eaves and valleys, the drip edge, the flashings at every wall and penetration, and the intake and exhaust ventilation all have to work together, and a failure in any one of them ends the same way. Beyond asphalt, CMAC installs standing-seam and exposed-fastener metal, clay and concrete tile, natural and synthetic slate, copper specialties, and the full range of low-slope commercial membranes.',
    },
    { t: 'h2', text: 'Why certification is not decoration' },
    {
      t: 'p',
      text: 'Manufacturers reserve their strongest system warranties for contractors they have certified, because the warranty is only as good as the installation behind it. CMAC is a GAF Master Elite® certified contractor and a GAF President’s Club award winner, carries an A+ rating with the Better Business Bureau, and is a member of the National Roofing Contractors Association.',
    },
    { t: 'h2', text: 'What a free inspection covers' },
    {
      t: 'p',
      text: 'Inspections are free and carry no obligation. A full inspection covers the field of every slope, the flashings, the penetrations, the ventilation, and the gutters, and damage is documented with photographs — including drone photography, which captures steep and fragile roofs without anyone walking them. You get the findings whether or not there is work to sell.',
    },
    { t: 'h2', text: 'Where CMAC works' },
    {
      t: 'p',
      text: 'CMAC serves Texas, Oklahoma, Arkansas, Tennessee, and Georgia, out of seven markets: Dallas–Fort Worth, Houston, Austin, Oklahoma City, Nashville, Arkansas, and Georgia. One number reaches all of them — 1-888-389-CMAC.',
    },
    {
      t: 'note',
      text: 'The company tagline is “Integrity Truly Matters.” On a roof that mostly means one thing: you get told what the roof actually needs, including when the answer is that it needs nothing yet.',
    },
  ],
  updated: '2026-08-24',
}

export const roofingServices: ServiceDoc[] = [
  /* ------------------------------------------------------------------ 1. repairs */
  {
    id: 'roof-repairs',
    category: 'roofing',
    name: 'Roof Repair',
    headline: 'Need reliable roof repair? CMAC handles everything from asphalt to metal roof repair.',
    summary:
      'Hail damage, roof leaks, and storm damage repaired on asphalt and metal roofs — diagnosed at the source and blended into your existing roof.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Need reliable roof repair? At CMAC Roofing, we handle everything from asphalt to metal roof repair — hail damage repair, roof leak repairs, storm damage repair, and blending the repair back into the existing roof so it does not announce itself from the street.',
      },
      {
        t: 'p',
        text: 'The order matters. A professional inspection finds all of the damage, not just the part you noticed. Then the precise source of the leak gets diagnosed. Then it gets repaired. Then it gets blended. Skipping the first two steps is how a roof gets repaired twice.',
      },
      { t: 'h2', text: 'A leak almost never starts where you see it' },
      {
        t: 'p',
        text: 'Water enters at a penetration or a flashing, runs down the underside of the decking or along a rafter, soaks insulation, and finally shows itself on a ceiling that can be several feet — sometimes a full room — away from the entry point. Wind-driven rain makes it worse: some leaks only appear when rain arrives from one direction, which is why a roof can pass three storms and fail on the fourth.',
      },
      {
        t: 'p',
        text: 'That is why chasing the stain is the wrong method. The inside of the roof deck, the attic insulation pattern, the rafter staining, and the exterior flashing details together tell you where the water actually got in.',
      },
      { t: 'h2', text: 'The usual failure points' },
      {
        t: 'ul',
        items: [
          'Pipe boots. The neoprene collar around a plumbing vent is typically the first thing on a roof to fail. UV splits the rubber at the base of the pipe, often years before the shingles are worn out, and the crack is invisible from the ground.',
          'Step flashing. Where a roof plane runs into a wall, every shingle course needs its own piece of flashing woven in with it. A single continuous strip of metal, or a bead of caulk in place of steps, is a leak on a schedule.',
          'Valleys. A valley carries the water from two slopes, so it sees the highest volume on the roof. Debris damming, fasteners set too close to the centerline, and worn or undersized valley metal all show up here first.',
          'Chimney counterflashing. A chimney needs base flashing on the roof plane and counterflashing let into a mortar joint above it. Counterflashing that was surface-sealed instead of cut in pulls loose as the masonry moves.',
          'Ridge. Cap shingles and ridge vents take the most wind exposure on the whole roof, and a lifted cap or a blown-off section of ridge vent lets water in at the highest point, where it can travel the farthest.',
          'Nail pops and exposed fasteners. A fastener backing out tents the shingle above it and eventually punctures it. On exposed-fastener metal, the neoprene washers dry out, the screws loosen, and each one becomes a hole.',
          'Skylights and curbs. The curb, the head flashing, and the factory seal are three separate things that can fail, and only one of them is fixed by re-sealing the glass.',
        ],
      },
      { t: 'h2', text: 'Hail damage is not always visible from the ground' },
      {
        t: 'p',
        text: 'The damage that matters most from hail is bruising: the impact fractures the fiberglass mat underneath the surface while the granules above it may still be sitting in place. A bruise feels soft underfoot, like a bruise on fruit, and it does not read as damage in a photo taken from the driveway. Granule loss then accelerates outward from the fracture, the mat gets exposed to UV, and the shingle fails years early.',
      },
      {
        t: 'p',
        text: 'Hail is also directional. One or two slopes usually take the storm while the others look untouched, so a roof that looks fine from the front can be finished on the back. Soft metals are the corroborating evidence — dented gutters, downspouts, vent caps, and air conditioner fins date the storm and confirm stone size.',
      },
      {
        t: 'p',
        text: 'On metal roofing, hail dents panels. Denting alone is often cosmetic, and a dented panel can still shed water for decades. What counts as functional damage on metal is a puncture, a split at a seam, damage that compromises the coating and starts corrosion, or fastener and washer damage that opens the penetration.',
      },
      { t: 'h2', text: 'When a repair genuinely beats a replacement' },
      {
        t: 'p',
        text: 'A repair is the right call when the roof is comfortably inside its material life, the damage is localized to one or two areas rather than spread across the field, the surrounding shingles are still pliable and holding granules, and a reasonable material match is available. Under those conditions a repair buys you the remaining life of the roof for a fraction of the disruption.',
      },
      {
        t: 'p',
        text: 'A repair is the wrong call when the shingles crack the moment they are lifted, when leaks keep appearing in unrelated places, or when the field is losing granules everywhere. On a brittle roof, the act of walking it and lifting courses to make one repair creates the next two.',
      },
      { t: 'h2', text: 'Blending the repair into the existing roof' },
      {
        t: 'p',
        text: 'Even the same shingle, same manufacturer, and same color code will not match a roof that has been in the Texas sun for a decade — sunlight shifts the granule blend. The trade’s answer is to work with the roof you have: source the closest current match, and where a repair lands on a highly visible elevation, harvest matching weathered shingles from a rear or garage slope and put the new material there instead.',
      },
      {
        t: 'p',
        text: 'A repair also has to be laced into the existing courses rather than butted against them. A seam that runs straight across a slope is both visible and a water path.',
      },
    ],
    bullets: [
      { title: 'Hail damage repair', detail: 'Slope-by-slope evaluation for bruising, granule loss, and soft-metal collateral damage.' },
      { title: 'Roof leak repairs', detail: 'The entry point gets found and fixed, not the ceiling stain underneath it.' },
      { title: 'Storm damage repair', detail: 'Wind-lifted shingles, blown ridge caps, torn flashings, and impact punctures after a storm.' },
      { title: 'Asphalt and metal', detail: 'Shingle roofs and both standing-seam and exposed-fastener metal systems.' },
      { title: 'Seamless blending', detail: 'Material matched and laced into the existing courses so the repair reads as part of the roof.' },
      { title: 'Free documented inspection', detail: 'No cost, no obligation, and damage documented with photographs including drone imagery.' },
    ],
    steps: [
      {
        title: 'Professional inspection',
        detail: 'The full roof gets inspected — every slope, flashing, penetration, and the ventilation — so all of the damage is found, not just the part you reported.',
      },
      {
        title: 'Diagnose the source',
        detail: 'The precise entry point of the leak is identified from the roof and the attic side, because water rarely surfaces where it got in.',
      },
      {
        title: 'Make the repair',
        detail: 'The failed component is replaced along with any decking and underlayment the water reached, rather than sealed over.',
      },
      {
        title: 'Blend it in',
        detail: 'Material and course layout are matched to the existing roof so the repaired area disappears into the field.',
      },
    ],
    brandIds: ['gaf', 'certainteed', 'atlas', 'tamko'],
    related: ['/services/roofing', '/services/roofing/roof-replacement', '/services/roofing/specialty-systems', '/services/roofing/commercial-roofing'],
    updated: '2026-08-24',
  },

  /* -------------------------------------------------------------- 2. replacement */
  {
    id: 'roof-replacement',
    category: 'roofing',
    name: 'Roof Replacement',
    headline: 'A full tear-off to the deck, every component replaced, and a complete system installed to the manufacturer’s specification.',
    summary:
      'Full tear-off roof replacement — deck inspection, ice-and-water, synthetic underlayment, new flashings, ridge ventilation, and a complete shingle system.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'A roof replacement is not a shingle purchase. It is the one opportunity you get to see the deck, correct what is wrong underneath, and rebuild every layer that keeps water out. What separates a twenty-five-year roof from a twelve-year roof is almost never the shingle — it is the underlayment, the flashings, and the ventilation.',
      },
      { t: 'h2', text: 'How to tell replacement beats repair' },
      {
        t: 'ul',
        items: [
          'Granule loss across the field. Granules are the shingle’s UV shield. Bald patches, and a steady accumulation of granules in the gutters and at the downspout outlets, mean the asphalt underneath is now aging in direct sunlight.',
          'Exposed mat. Once you can see the black fiberglass mat through the surface, that area of shingle is finished. It will curl, crack, and shed.',
          'Multiple leaks in unrelated places. One leak is a failed component. Leaks at the chimney, a valley, and a pipe boot in the same season is a roof telling you its whole generation of flashings and boots has aged out together.',
          'Age against material life. Three-tab shingles generally run about twenty to twenty-five years and architectural laminates about twenty-five to thirty in a mild climate — and hail country plus 100-degree summers shortens both. A roof at the end of that window is spending money, not saving it.',
          'Widespread hail bruising. Bruising scattered across several slopes cannot be spot-repaired, because the fractures are in the mat everywhere the stones landed.',
          'Brittleness. If shingles crack when they are lifted rather than flexing, the roof can no longer be worked on without damaging it further.',
          'Sagging or spongy decking. A deck that gives underfoot means the sheathing has taken on moisture, and that is only fixable with the shingles off.',
        ],
      },
      { t: 'h2', text: 'What a full tear-off actually includes' },
      {
        t: 'ul',
        items: [
          'Tear-off to the deck. Every layer comes off — shingles, underlayment, old flashings, and old drip edge — so nothing failed is left buried.',
          'Deck inspection and sheathing replacement. With the deck exposed, rotted, delaminated, or water-damaged sheathing gets cut out and replaced, and inadequate fastening gets corrected.',
          'Ice-and-water shield at eaves and valleys. A self-adhering membrane that seals around fasteners, placed where water backs up or concentrates — the eaves, the valleys, and around penetrations.',
          'Synthetic underlayment over the field. Synthetic sheets are stronger, lighter, and far more tear-resistant than felt, and they hold up better if weather arrives before the roof is loaded.',
          'Starter course at eaves and rakes. A purpose-made starter strip puts adhesive exactly where the first course needs it and seals the rake edge, which is where wind gets its first grip on a roof.',
          'Drip edge. Metal at the eave and rake that carries water off the deck edge and into the gutter instead of behind the fascia. It is code, and it is routinely omitted on cheap roofs.',
          'New flashings throughout. New pipe boots, new step flashing at every wall, new counterflashing, new valley metal, and kickout flashing where a roof edge dies into a wall above a gutter.',
          'Balanced ridge ventilation. Continuous ridge exhaust matched to adequate soffit intake, so the attic actually moves air.',
          'Ridge cap. Purpose-made hip and ridge cap, not field shingles cut down, so the most wind-exposed line on the roof is covered with material rated for it.',
        ],
      },
      { t: 'h2', text: 'Why a layover is a bad idea' },
      {
        t: 'p',
        text: 'Installing a second layer of shingles over the first is cheaper on the day and expensive for the rest of the roof’s life. It hides the deck, so rot, delamination, and bad fastening go unseen and unfixed. It doubles the dead load on framing that was designed for one layer. The new shingles telegraph the ridges and irregularities of the old ones, so the roof looks lumpy within a season. It traps heat between the layers and cooks the new shingles from below, shortening their life. Flashings frequently get reused instead of replaced, which leaves the actual leak points untouched. And the eventual tear-off costs more because there are two layers to remove.',
      },
      {
        t: 'note',
        text: 'Building codes limit how many roof covering layers are permitted, and manufacturer system warranties generally require a tear-off to a clean deck. A layover can quietly cost you the warranty that made the shingle worth buying.',
      },
      { t: 'h2', text: 'Ventilation is part of the roof' },
      {
        t: 'p',
        text: 'Attic ventilation is not an accessory. It works as a pair: intake low at the soffits and exhaust high at the ridge, roughly balanced so air enters at the bottom and leaves at the top. Install ridge vent without adequate intake and the vent pulls conditioned air out of the house instead. Get it wrong and superheated attic air bakes the shingles from underneath and winter moisture condenses on the deck. Mixing vent types on one attic — ridge vent plus powered fans plus gable vents — can short-circuit the airflow so that the ridge vent becomes an intake.',
      },
      { t: 'h2', text: 'What install day looks like' },
      {
        t: 'p',
        text: 'Material is delivered ahead of or at the start of the day, and driveways, landscaping, HVAC condensers, and pool equipment are protected before anything comes off. Tear-off runs in sections so no part of the deck sits open longer than it needs to. Exposed sheathing is inspected and repaired as it appears, then dried in, then loaded and installed. At the end, the site gets swept and run with rolling magnets for nails — driveway, lawn, and beds — and the job is walked with you.',
      },
      {
        t: 'p',
        text: 'Most single-family replacements are a one-day or two-day job, though complexity, steep pitch, tile or slate, deck damage, and weather all move that. Weather is the honest variable: no reputable crew opens a deck into an incoming storm, so a firm start date sometimes moves by a day.',
      },
    ],
    bullets: [
      { title: 'Tear-off to the deck', detail: 'Every old layer removed so the sheathing can be inspected and repaired before anything new goes down.' },
      { title: 'Deck repair included', detail: 'Rotted or delaminated sheathing is cut out and replaced rather than covered over.' },
      { title: 'Complete water barrier', detail: 'Ice-and-water at eaves and valleys, synthetic underlayment over the field, starter at eaves and rakes.' },
      { title: 'All new flashings', detail: 'Pipe boots, step flashing, counterflashing, valley metal, drip edge, and kickouts replaced, not reused.' },
      { title: 'Balanced ventilation', detail: 'Ridge exhaust matched to soffit intake so the attic moves air instead of cooking the new roof.' },
      { title: 'Certified system install', detail: 'Installed to the manufacturer’s specification by a GAF Master Elite® certified contractor.' },
    ],
    steps: [
      {
        title: 'Free inspection and documentation',
        detail: 'Every slope, flashing, and penetration is inspected and photographed — drone imagery included — so the recommendation is based on evidence.',
      },
      {
        title: 'System selection and written estimate',
        detail: 'You choose the shingle line, color, and ventilation approach, and get an itemized written scope covering materials and workmanship.',
      },
      {
        title: 'Scheduling and staging',
        detail: 'Material is delivered and the site is protected — driveway, landscaping, and rooftop equipment — before tear-off begins.',
      },
      {
        title: 'Tear-off and deck repair',
        detail: 'The roof comes off in sections, the sheathing is inspected as it is exposed, and damaged decking is replaced.',
      },
      {
        title: 'Dry-in and installation',
        detail: 'Ice-and-water, underlayment, starter, drip edge, and flashings go down, then the field, then hip and ridge cap.',
      },
      {
        title: 'Cleanup and walkthrough',
        detail: 'Debris hauled, magnet sweep for nails across drive and lawn, and a final walk of the finished roof with you.',
      },
    ],
    brandIds: ['gaf', 'certainteed', 'atlas', 'tamko'],
    related: ['/services/roofing', '/services/roofing/roof-repairs', '/services/roofing/specialty-systems', '/services/roofing/home-additions'],
    updated: '2026-08-24',
  },

  /* ---------------------------------------------------------- 3. new construction */
  {
    id: 'new-construction',
    category: 'roofing',
    name: 'New Construction & Tract Homes',
    headline: 'Quality tract home building — long-lasting quality combined with modern, efficient designs.',
    summary:
      'Production roofing for tract and subdivision builders — reliable dry-in dates, consistent crews across the community, and fast punch-list turnaround.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC’s builder services division does production roofing for tract and subdivision homebuilders. Our expertly built tract homes combine long-lasting quality with modern, efficient designs — and from the superintendent’s side of it, what that has to translate into is a roof that is dried in on the date you were promised, built the same way on lot 14 as it was on lot 3, and closed out without a punch list that follows you to walkthrough.',
      },
      { t: 'h2', text: 'Schedule is the product' },
      {
        t: 'p',
        text: 'On a production build, the roof is not a standalone trade — it is a gate. Framing and sheathing finish, the roof dries in, and only then can mechanical, electrical, and plumbing rough-in proceed with any protection over their work, insulation follow, and drywall be scheduled. A roofer who misses dry-in by four days does not cost you four days of roofing, they cost you four days on every trade stacked behind it, times however many lots are moving at once.',
      },
      {
        t: 'p',
        text: 'That is why sequencing gets set against your framing calendar rather than against ours: dry-in immediately behind sheathing and cornice, then final roof after the roof penetrations are set. Plumbing vents, range and dryer terminations, bath fan exhausts, and HVAC flues all pass through the deck, and every one of them set after the final roof is a hole cut in a finished system.',
      },
      { t: 'h2', text: 'Consistency across a subdivision' },
      {
        t: 'p',
        text: 'A community is not twenty roofs, it is one roof repeated with three or four plan types and a color palette. Consistency comes from putting the same crews on the same community for its duration, so the details — valley treatment, step flashing at the garage return, ridge vent runs, cap layout at the hip intersections — get built the same way on every lot. It also means fewer plan-specific questions land on your desk after the first few homes.',
      },
      {
        t: 'p',
        text: 'Material staging follows the same logic. Loads are scheduled to the lot and the day rather than dropped early, which keeps drives clear for concrete and framing deliveries and keeps material off unfinished lots where it becomes a weather and theft problem.',
      },
      { t: 'h2', text: 'Punch list and closeout' },
      {
        t: 'p',
        text: 'Punch items on roofing are usually small and always urgent, because they sit between you and a closing date: a scuffed cap, a vent boot to reset after the plumber’s adjustment, a section of ridge vent to re-secure, debris or fasteners missed in a final sweep. Those get turned quickly rather than batched, because a punch list that waits for a convenient trip is a punch list that delays a close.',
      },
      {
        t: 'p',
        text: 'Closeout also includes the handoff to the eventual homeowner: what system went on the house, what the manufacturer coverage is, and who to call. Getting that documented at closing is what keeps a year-two service call from turning into a warranty dispute between you and a homeowner who does not know what is on their roof.',
      },
      { t: 'h2', text: 'After your builder warranty expires' },
      {
        t: 'p',
        text: 'CMAC continues to service the homes it roofs after the builder’s warranty period ends. Homeowners can register their roof directly with CMAC, which means when a storm rolls through the community three years after your last close, they call a contractor who already has the specification for their house — and the call does not come back to your warranty department.',
      },
      { t: 'h2', text: 'What builders get' },
      {
        t: 'p',
        text: 'CMAC is veteran-owned, GAF Master Elite® certified, a GAF President’s Club award winner, an NRCA member, and rated A+ by the Better Business Bureau. Builder work runs across all five states CMAC serves — Texas, Oklahoma, Arkansas, Tennessee, and Georgia — from seven markets, so a builder operating in more than one metro deals with one roofer instead of four.',
      },
    ],
    bullets: [
      { title: 'Dry-in dates that hold', detail: 'Sequenced against your framing calendar so the trades stacked behind the roof are not waiting on it.' },
      { title: 'Consistent crews', detail: 'The same crews stay on a community for its duration, so the details are built the same way on every lot.' },
      { title: 'Penetration coordination', detail: 'Final roof follows the plumbing, exhaust, and HVAC penetrations rather than getting cut open after the fact.' },
      { title: 'Fast punch turnaround', detail: 'Roofing punch items get worked as they come in, not batched until a convenient trip.' },
      { title: 'Documented warranty handoff', detail: 'The system, the coverage, and the contact go to the homeowner at closing.' },
      { title: 'Multi-market coverage', detail: 'One roofing partner across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.' },
    ],
    steps: [
      {
        title: 'Community setup',
        detail: 'Plan types, roof specs, color palette, and lot sequencing are set once so every subsequent lot runs from the same sheet.',
      },
      {
        title: 'Dry-in behind framing',
        detail: 'Underlayment and edge metal go on immediately after sheathing and cornice so the interior trades can start on schedule.',
      },
      {
        title: 'Final roof after penetrations',
        detail: 'The finished roof goes on once plumbing vents, exhaust terminations, and flues are set, so nothing is cut into a completed system.',
      },
      {
        title: 'Punch and closeout',
        detail: 'Roofing punch items are cleared ahead of walkthrough, and the roof is swept and re-swept for fasteners.',
      },
      {
        title: 'Warranty handoff',
        detail: 'The homeowner receives the system documentation and can register the roof with CMAC for service after the builder warranty ends.',
      },
    ],
    brandIds: ['gaf', 'certainteed', 'atlas', 'tamko'],
    related: ['/services/roofing', '/services/roofing/custom-homes', '/services/roofing/multi-family', '/services/roofing/roof-replacement'],
    updated: '2026-08-24',
  },

  /* -------------------------------------------------------------- 4. custom homes */
  {
    id: 'custom-homes',
    category: 'roofing',
    name: 'Custom Homes',
    headline: 'Your vision. Our expertise. Custom built for life.',
    summary:
      'Architectural roofing for custom homes — built from the drawings, with complex geometry, material transitions, and coordination across every trade.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'We believe a truly custom home is a masterpiece born from partnership. On the roof, that partnership is with the architect who drew the details, the builder holding the schedule, and the owner who will look at this roof every day for the next forty years.',
      },
      { t: 'h2', text: 'Building from the drawings' },
      {
        t: 'p',
        text: 'Custom roofing starts in the plan set, not on the deck. The roof plan sets the geometry, the wall sections set the eave and rake conditions, and the detail sheets — if they exist — set what happens at the crickets, the transitions, and the terminations. Reading those before framing goes up is how conflicts get found while they are still cheap: a valley that dies into a wall with nowhere to go, a dormer cheek that lands on a plane change, a chimney chase drawn without a saddle behind it.',
      },
      {
        t: 'p',
        text: 'The single most consequential drawing decision is weight. Concrete tile, clay tile, and natural slate carry several times the dead load of asphalt shingles, and framing sized for shingles will not accept them. If the design intent is tile or slate, the structure has to be engineered for it before a rafter is cut — retrofitting that decision after framing is expensive and sometimes not possible at all.',
      },
      { t: 'h2', text: 'Complex geometry' },
      {
        t: 'ul',
        items: [
          'Dormers. Every dormer adds two roof-to-wall transitions, two valleys or a valley and a hip, and a head condition above the window. The cheek walls need step flashing woven course by course, and the point where the dormer roof dies into the main plane is the detail that decides whether the dormer leaks.',
          'Turrets and conical roofs. A cone has no two identical courses. Slate, shake, and composite can be swept around a radius with tapered courses; tile requires purpose-made radius pieces; metal requires tapered panels cut and seamed on site.',
          'Radius eaves and swept valleys. A rolled eave or a woven-swept valley is a traditional slate and shake detail that has to be built rather than trimmed, and it dictates the framing and sheathing beneath it.',
          'Material transitions. A standing-seam metal bay roof meeting a shingle or tile field needs a proper terminal detail with a transition flashing, room for the metal to move, and a clean visual line — not a bead of sealant where two systems meet.',
          'Crickets and saddles. Any chimney wide enough to dam water needs a cricket behind it; residential code requires a cricket or saddle behind chimneys wider than thirty inches measured along the roof slope. The same logic applies to any wall that interrupts water running down a plane.',
          'Kickout flashing. Where a roof edge terminates against a wall above a gutter, a kickout diverts the water into the gutter instead of behind the siding. It is the most commonly omitted flashing in residential construction and one of the most expensive omissions, because the damage happens inside the wall.',
        ],
      },
      { t: 'h2', text: 'Material selection against the design intent' },
      {
        t: 'p',
        text: 'Material choice on a custom home is an architectural decision with practical consequences on both sides. Natural slate and clay tile give an authenticity that nothing imitates perfectly, last generations, and demand structure and skilled installation to match. Composite slate and shake give the profile and shadow line at a fraction of the weight, install with standard tools, and carry impact ratings that matter in hail country. Concrete tile offers profile and color range with real mass. Copper is chosen as much for how it ages as for how it performs.',
      },
      {
        t: 'p',
        text: 'CMAC installs clay from Ludowici, MCA, Verea, and Crown; concrete tile from Crown and the other tile lines; natural slate; composite slate and shake from DaVinci Roofscapes, Brava Tile, and Inspire Roofing Products; and high-temperature synthetic underlayment from Sharkskin beneath tile and metal, where deck temperatures run far above what standard underlayment tolerates.',
      },
      { t: 'h2', text: 'Coordinating with the other trades' },
      {
        t: 'p',
        text: 'On a custom home the roof touches almost everyone. The framer has to deliver the planes, crickets, and backing the details assume. The mason sets the chimney and has to leave a reglet for counterflashing rather than a smooth face. The sheet metal for gutters, valley pans, chimney caps, and finials has to be specified as one package so profiles and metals match instead of arriving from three sources. Solar mounting and rooftop mechanicals need their penetrations planned into the roof rather than drilled into it later. And galvanic pairing matters: copper fastened with steel, or copper draining onto galvanized, will corrode.',
      },
      {
        t: 'p',
        text: 'CMAC is veteran-owned, GAF Master Elite® certified, and an NRCA member, and works with custom builders and architects across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
      },
    ],
    bullets: [
      { title: 'Built from the drawings', detail: 'Roof plan, wall sections, and details reviewed before framing so conflicts surface while they are still cheap.' },
      { title: 'Complex geometry', detail: 'Dormers, turrets, conical and radius roofs, swept valleys, and multi-plane transitions.' },
      { title: 'Structural weight check', detail: 'Tile and slate loads confirmed against the framing design before the material is committed.' },
      { title: 'Material transitions', detail: 'Metal, tile, slate, and shingle meeting on one roof, detailed as a transition rather than sealed.' },
      { title: 'Sheet metal as one package', detail: 'Valleys, gutters, chimney caps, and copper specialties specified together so metals and profiles match.' },
      { title: 'Trade coordination', detail: 'Framing, masonry, mechanical, and solar penetrations planned into the roof instead of cut into it later.' },
    ],
    steps: [
      {
        title: 'Plan review',
        detail: 'The roof plan, sections, and details are reviewed with the architect and builder, and open conditions are resolved on paper.',
      },
      {
        title: 'Material and structure',
        detail: 'Material is selected against the design intent and the framing is confirmed to carry it — critical for tile and natural slate.',
      },
      {
        title: 'Detail and metal package',
        detail: 'Flashings, valleys, crickets, kickouts, and copper specialties are laid out as a single package before installation.',
      },
      {
        title: 'Sequenced installation',
        detail: 'Dry-in behind framing, penetrations coordinated with the mechanical trades, then the finished roof and metal.',
      },
      {
        title: 'Final walk with the builder',
        detail: 'The roof is walked with the builder and owner, and the system and its coverage are documented for the home’s file.',
      },
    ],
    brandIds: ['ludowici', 'mca', 'verea', 'crown', 'vermont-slate', 'davinci', 'brava', 'inspire', 'sharkskin'],
    related: ['/services/roofing', '/services/roofing/specialty-systems', '/services/roofing/new-construction', '/services/roofing/home-additions'],
    updated: '2026-08-24',
  },

  /* --------------------------------------------------------- 5. specialty systems */
  {
    id: 'specialty-systems',
    category: 'roofing',
    name: 'Specialty Roofing Systems',
    headline: 'Your source for specialty roofing materials — from the modern look of metal to the timeless elegance of slate and clay.',
    summary:
      'Clay and concrete tile, natural and synthetic slate, metal slate, and copper — matched to what your structure can carry and how long you plan to own it.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Specialty roofing covers everything past asphalt: clay tile, concrete tile, real slate, imitation and synthetic slate, metal slate, copper slate, and copper specialties. These are roofs that change the character of a building, and they involve tradeoffs that asphalt does not — weight, service life, cost of skilled installation, and how the material behaves under hail.',
      },
      { t: 'h2', text: 'Start with dead load' },
      {
        t: 'p',
        text: 'The first question on any tile or slate roof is whether the structure can carry it, and it is a question for a structural engineer, not a salesperson. Asphalt shingles run roughly two to four pounds per square foot. Clay tile lands around six to ten. Concrete tile is heavier still, commonly nine to twelve. Natural slate varies enormously with thickness and quarry, from about eight pounds per square foot to well over fifteen for heavy graduated slate.',
      },
      {
        t: 'p',
        text: 'A house framed for shingles may need reinforced rafters, added purlins, or a redesigned framing plan before it can accept tile. That is why a lightweight composite is often the honest answer on a retrofit: it delivers the profile without the structural work.',
      },
      { t: 'h2', text: 'Service life by material' },
      {
        t: 'ul',
        items: [
          'Asphalt shingles — roughly twenty to thirty years, less under intense sun and repeated hail.',
          'Metal — commonly forty to seventy years for a properly detailed standing-seam system, with the coating and the fasteners usually aging before the panel does.',
          'Concrete and clay tile — fifty years and often much longer. In practice the tile outlives the underlayment beneath it, which is the point most owners miss.',
          'Natural slate — the longest-lived roofing material in common use, with hard slates measured in generations rather than decades. The fasteners and flashings, not the stone, typically set the replacement date.',
          'Synthetic and composite slate — engineered products carrying long manufacturer warranties, with impact and fire ratings that natural slate does not offer.',
        ],
      },
      { t: 'h2', text: 'Under tile, the underlayment is the roof' },
      {
        t: 'p',
        text: 'This is the most important thing to understand about a tile roof. Tile sheds the bulk of the water and shields what is beneath it from UV, but tile is not a watertight surface — wind-driven rain gets past it. The membrane on the deck is the actual waterproofing layer, and it is the component that ages out first.',
      },
      {
        t: 'p',
        text: 'That produces a maintenance event most owners are never told about: the relay. Somewhere in a tile roof’s life the tile gets carefully removed and stacked, the underlayment is replaced, and the same tile is reset. Deck temperatures under tile and metal run far hotter than under shingles, which is why high-temperature synthetic underlayment such as Sharkskin is specified there — standard felt cooks and fails early in that environment.',
      },
      { t: 'h2', text: 'Why synthetic composites exist' },
      {
        t: 'p',
        text: 'Natural slate is heavy, brittle underfoot, expensive to install, and requires a trained slater whose skills are increasingly rare. Composite slate and shake were engineered around every one of those constraints: a fraction of the weight, consistent thickness and shape, installation with standard roofing tools, and blended color ranges that read as natural variation from the ground.',
      },
      {
        t: 'p',
        text: 'In hail country the impact rating is the deciding factor for many owners. Class 4 is the top rating under the UL 2218 impact standard — a steel ball dropped on the product from a set height, twice on the same spot, with no cracking or rupture permitted — and many carriers offer a premium credit for a Class 4 roof. CMAC installs composite slate and shake from DaVinci Roofscapes, Brava Tile, and Inspire Roofing Products.',
      },
      { t: 'h2', text: 'Metal, standing seam, and batten seam' },
      {
        t: 'p',
        text: 'Metal roofing splits into exposed-fastener panels, where screws with neoprene washers go through the face of the panel, and concealed-fastener standing seam, where clips hold the panel and the fasteners never penetrate the weather surface. Standing seam costs more and lasts longer, largely because the clips let the panel expand and contract with temperature instead of working against a fixed screw. Snap-lock seams suit steeper slopes; mechanically seamed double-lock panels are what you use as slope decreases.',
      },
      {
        t: 'p',
        text: 'Batten seam is the traditional alternative: the panel edges turn up against a wood batten and a separate cap covers it, producing a heavier, more architectural shadow line. It is the classic copper detail on historic and high-end residential work. On any metal roof, some degree of oil-canning — visible waviness in the flat of the panel — is inherent to flat sheet metal, and it is managed with striations, heavier gauge, and a flat substrate rather than eliminated.',
      },
      { t: 'h2', text: 'Copper' },
      {
        t: 'p',
        text: 'Copper is chosen for how it ages. It starts bright, darkens to russet and then chocolate brown over the first years, and eventually develops the green patina people associate with it — a process that takes decades and runs faster in humid, coastal, and industrial air than in dry inland climates. Two practical notes: copper runoff will stain masonry, stone, and concrete beneath it, so terminations get planned; and copper must never be fastened with steel or paired downstream of galvanized metal, because the galvanic reaction destroys the lesser metal.',
      },
      {
        t: 'p',
        text: 'Copper slate and metal slate are individual pressed shingles with a slate-like profile that interlock on all four sides, available in copper, steel, and aluminum. They give the geometry of a slate roof at a metal roof’s weight, and copper versions patina like any other copper roof.',
      },
      { t: 'h2', text: 'The lines CMAC installs' },
      {
        t: 'p',
        text: 'Concrete tile from West Lake, Eagle Roofing Products, and Crown Roof Tile. Clay tile from Ludowici, MCA Clay Roof Tile, Verea Clay Tile, and Crown Roof Tile. Natural quarried slate including Vermont Slate. Composite slate, shake, and tile from Brava Tile, DaVinci Roofscapes, and Inspire Roofing Products. High-temperature synthetic underlayment from Sharkskin beneath tile and metal systems.',
      },
      {
        t: 'note',
        text: 'Tile and slate roofs break under foot traffic. Any rooftop service work — satellite, solar, HVAC, chimney sweeps — should be routed through someone who knows how to walk that specific material, because the repair usually costs more than the service call did.',
      },
    ],
    bullets: [
      { title: 'Clay and concrete tile', detail: 'Barrel, S-tile, and flat profiles in clay and concrete, over a properly specified high-temperature underlayment.' },
      { title: 'Natural slate', detail: 'Quarried slate installed as a fastened stone roof, with the flashings detailed to match its service life.' },
      { title: 'Synthetic and composite slate', detail: 'The slate and shake profile at a fraction of the weight, with Class 4 impact ratings available.' },
      { title: 'Metal and metal slate', detail: 'Standing seam, batten seam, exposed-fastener panels, and interlocking pressed metal slate shingles.' },
      { title: 'Copper specialties', detail: 'Copper roofs, bay and dormer roofs, chimney caps, finials, and custom sheet metal that patinas as one assembly.' },
      { title: 'Structural evaluation first', detail: 'Weight is confirmed against the framing before a tile or slate roof is specified for an existing building.' },
    ],
    brandIds: ['westlake', 'eagle', 'crown', 'ludowici', 'mca', 'vermont-slate', 'verea', 'brava', 'davinci', 'inspire', 'sharkskin'],
    related: ['/services/roofing', '/services/roofing/custom-homes', '/services/roofing/roof-replacement', '/services/roofing/roof-repairs'],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------ 6. commercial */
  {
    id: 'commercial-roofing',
    category: 'roofing',
    name: 'Commercial Roofing',
    headline: 'CMAC Commercial Roofing: trusted and reliable.',
    summary:
      'EPDM, TPO, Duro-Last, PVC, modified bitumen, built-up, and coating restorations for commercial buildings — installed around your tenants.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Need EPDM, TPO, Duro-Last, or roof coatings? CMAC guides you to the right commercial solution for the building you actually have — its slope, its drainage, its insulation, its rooftop equipment, and whether anyone is working underneath it while the work happens. CMAC also installs composition, metal, tile, and slate commercially, for churches, offices, retail, and mixed-use buildings where the roof is part of the architecture.',
      },
      { t: 'h2', text: 'Single-ply, modified bitumen, and built-up' },
      {
        t: 'p',
        text: 'Built-up roofing is the original low-slope system: alternating plies of felt and bitumen built into a laminated membrane, usually surfaced with gravel. It is redundant by design and repairs well, and it is heavy, slow to install, and hot and odorous to build.',
      },
      {
        t: 'p',
        text: 'Modified bitumen took the same asphalt chemistry and added polymer modifiers — SBS for flexibility in cold, APP for heat resistance — delivered in rolls that are torched, mopped, cold-applied, or self-adhered, typically as a base sheet and a cap sheet. It keeps the multi-ply redundancy of BUR with far less field labor.',
      },
      {
        t: 'p',
        text: 'Single-ply is the modern default. EPDM is a synthetic rubber sheet that has been proven in the toughest climates for over thirty years, and it handles temperature extremes and UV about as well as anything on the market. TPO is a thermoplastic sheet, typically white and highly reflective, and it is the fastest-growing product in commercial roofing. PVC is the other thermoplastic, chosen where the roof sees grease, chemicals, or restaurant exhaust, which degrade other membranes.',
      },
      {
        t: 'p',
        text: 'Duro-Last is prefabricated PVC. The panels and flashings are fabricated in the plant to the building’s measured dimensions and pre-welded there, so a large share of the seam work is done under factory conditions instead of on a windy roof, and rooftop labor drops accordingly.',
      },
      { t: 'h2', text: 'Seams are where roofs fail' },
      {
        t: 'p',
        text: 'The difference between the thermoplastics and EPDM comes down to the seam. TPO and PVC are hot-air welded: the two sheets fuse into a single homogeneous mass, and a properly made weld is generally stronger than the sheet on either side of it. EPDM sheets are joined with primer and seam tape — a bond that works well when the surfaces are clean and correctly primed, and which has historically been the weak point of the system when they are not. Neither is disqualifying; it just means EPDM quality lives in seam prep and thermoplastic quality lives in weld temperature and technique, and both are checked by probing seams after they cool.',
      },
      { t: 'h2', text: 'Attachment method' },
      {
        t: 'ul',
        items: [
          'Mechanically attached. Fasteners and plates through the membrane along the seam lines, covered by the next sheet. Fast and economical, and the membrane flutters under wind uplift, which drives more air movement into the assembly.',
          'Fully adhered. Bonding adhesive across the entire field. Best wind uplift performance, the smoothest finished appearance, and the most sensitive to substrate condition, temperature, and moisture at the time of install.',
          'Ballasted. Loose-laid membrane held down by river rock or pavers. Inexpensive and quiet, and it adds substantial dead load, makes leak location difficult, and performs poorly in high-wind zones.',
        ],
      },
      { t: 'h2', text: 'Drainage, ponding, and tapered insulation' },
      {
        t: 'p',
        text: 'Positive drainage means the roof sheds standing water within about forty-eight hours of rainfall. Water that stays past that adds real dead load — roughly five pounds per square foot for every inch of depth over the ponded area — accelerates membrane weathering, grows biological matter, deposits dirt that defeats a reflective roof, and voids most manufacturer warranties.',
      },
      {
        t: 'p',
        text: 'The fix is rarely the membrane. It is tapered polyiso insulation built into a slope, usually an eighth or a quarter inch per foot, with crickets between and behind drains to move water rather than trap it, plus adequate drains, overflow scuppers, and clear sumps.',
      },
      { t: 'h2', text: 'Insulation and code minimums' },
      {
        t: 'p',
        text: 'Energy code sets a minimum roof insulation R-value by climate zone, and a reroof is usually the moment a building has to meet the current one. Polyisocyanurate is the common choice at roughly five and a half to six R per inch. Two staggered layers outperform a single thick layer, because the offset joints break the thermal bridging that runs straight through aligned seams. A cover board over the insulation protects the membrane from foot traffic and improves hail performance, and it is the cheapest durability upgrade available on a commercial roof.',
      },
      { t: 'h2', text: 'When a coating restoration beats a tear-off' },
      {
        t: 'p',
        text: 'Elastomeric, silicone, and acrylic coating systems can restore a roof that is fundamentally sound: the membrane is watertight or repairable, the seams and flashings can be reinforced, and — this is the part that decides it — the insulation underneath is dry. Core cuts or an infrared scan answer that question. A restoration re-establishes a reflective, monolithic surface, extends service life, carries its own warranty, and avoids the disruption and disposal of a tear-off entirely.',
      },
      {
        t: 'p',
        text: 'When the insulation is saturated, a coating is money spent sealing water inside the assembly, where it keeps destroying the deck and keeps costing you in energy. That roof needs a tear-off, and being told so is more valuable than being sold a coating.',
      },
      { t: 'h2', text: 'Working over an occupied building' },
      {
        t: 'p',
        text: 'On an occupied building the schedule is set by the tenants, not the crew. Tear-off is loud directly below, and torch and hot-asphalt work carries odor into the return air unless intakes are managed. Work gets staged so no section is left open at the end of a shift, sequenced around business hours and around whatever is happening under that specific bay, and coordinated so egress routes, fire lanes, and parking stay usable. Interiors below active work get protected, and crane and material staging gets planned against the tenant’s dock and traffic patterns rather than against ours.',
      },
    ],
    bullets: [
      { title: 'EPDM', detail: 'Synthetic rubber single-ply, proven in the toughest climates for over thirty years.' },
      { title: 'TPO', detail: 'Reflective hot-air-welded thermoplastic — the fastest-growing product in commercial roofing.' },
      { title: 'Duro-Last', detail: 'Prefabricated PVC with panels and flashings welded to the building’s dimensions in the plant.' },
      { title: 'Coating restoration', detail: 'Elastomeric, silicone, and acrylic systems that extend a sound roof without a tear-off.' },
      { title: 'Modified bitumen and BUR', detail: 'Multi-ply asphalt systems where redundancy and repairability matter more than speed.' },
      { title: 'Drainage correction', detail: 'Tapered insulation, crickets, and drain work to get standing water off the roof.' },
    ],
    steps: [
      {
        title: 'Roof survey',
        detail: 'Slope, drainage, existing assembly, insulation condition, penetrations, and rooftop equipment are documented, with core cuts or scanning where moisture is suspected.',
      },
      {
        title: 'System recommendation',
        detail: 'Membrane, attachment method, insulation and R-value, and restoration-versus-replacement are recommended against the building and its use.',
      },
      {
        title: 'Scope and scheduling',
        detail: 'The scope is written out and the phasing is set around tenant hours, dock access, egress, and the areas below each section of work.',
      },
      {
        title: 'Installation',
        detail: 'Work runs in sections that are closed in daily, with seams probed, flashings and terminations detailed, and drainage verified.',
      },
      {
        title: 'Warranty and maintenance',
        detail: 'The manufacturer warranty is registered and a maintenance interval is set, because most commercial warranties require documented upkeep.',
      },
    ],
    brandIds: ['duro-last', 'gaf'],
    related: ['/services/roofing', '/services/roofing/multi-family', '/services/roofing/roof-repairs', '/services/roofing/specialty-systems'],
    updated: '2026-08-24',
  },

  /* ----------------------------------------------------------- 7. multi-family */
  {
    id: 'multi-family',
    category: 'roofing',
    name: 'Multi-Family & Property Management',
    headline: 'A roof on your property is protection for your investment, safety for your residents, and a factor in whether the asset stays profitable.',
    summary:
      'Quarterly maintenance, phased replacements, restoration, and emergency storm response for apartment communities and property management portfolios.',
    image: '/svc-roofing-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'At CMAC Roofing we understand that in the multi-family and property management industry a roof is more than just a structure. It is protection for your investment, safety for your residents, and a key factor in keeping your property profitable.',
      },
      {
        t: 'p',
        text: 'That framing changes what the work looks like. On a single-family home the job is a roof. On a two-hundred-unit community it is a program: quarterly maintenance, routine inspections, large-scale replacements, restoration projects, planned capital improvements, exterior renovations, interior repairs, and emergency storm response — all sequenced against occupancy, turn schedules, and a budget calendar you have to defend.',
      },
      { t: 'h2', text: 'CapEx planning starts with knowing what you own' },
      {
        t: 'p',
        text: 'Roofs are typically the largest single line on an exterior capital plan, and the difference between a funded reserve and an emergency draw is whether you knew the remaining useful life of each building before it failed. A portfolio walk that ranks every building by condition and remaining life turns roofing from an unpredictable event into a schedule: these four buildings this fiscal year, these six next, these eight held with maintenance.',
      },
      {
        t: 'p',
        text: 'That ranking is also what lets you make the restoration-versus-replacement call deliberately. On low-slope buildings, a coating restoration on a sound assembly can move a replacement several years down the calendar for a fraction of the capital, but only when the insulation underneath is dry — which is a question answered with core cuts or a scan, not a guess.',
      },
      { t: 'h2', text: 'Quarterly maintenance is the cheapest money on the property' },
      {
        t: 'p',
        text: 'Most interior water claims in multi-family do not start as roof failures. They start as a clogged valley, a debris-packed gutter, a cracked pipe boot, a loose HVAC curb flashing, or a satellite mount someone screwed through a membrane. A quarterly maintenance plan catches those while they are a service item.',
      },
      {
        t: 'ul',
        items: [
          'Clearing valleys, gutters, downspouts, drains, and scuppers so water leaves the roof where it was designed to.',
          'Checking penetrations, pipe boots, curb flashings, and sealants at every rooftop unit.',
          'Inspecting seams and terminations on low-slope buildings and cap and ridge on pitched buildings.',
          'Documenting each building with dated photographs, so condition is tracked over time rather than remembered.',
          'Flagging third-party rooftop work — satellite dishes, solar, cable, HVAC service — that damaged the roof since the last visit.',
        ],
      },
      { t: 'h2', text: 'Phasing work across occupied buildings' },
      {
        t: 'p',
        text: 'Nobody moves out for a reroof. Work runs one building at a time so the disruption is contained and predictable: material staged off drive lanes and away from resident parking, dumpsters placed where they do not take fire lane or leasing-office frontage, breezeways and stairs kept clear, and magnet sweeps run over parking and walkways at the end of every day.',
      },
      {
        t: 'p',
        text: 'The scheduling constraints that actually matter are local ones — trash pickup days, school bus times, leasing tour traffic, and any building with a high concentration of night-shift residents. Getting those right is the difference between a reroof residents tolerate and a week of calls to the office.',
      },
      { t: 'h2', text: 'Resident notification' },
      {
        t: 'p',
        text: 'Residents need to know three things ahead of time: which days their building is being worked, where they need to move their vehicles, and what hours the noise will run. Door hangers and posted notices with enough lead time, plus a reminder the day before, absorbs most of the complaint volume before it reaches your staff. Pet owners in particular need warning, and so does anyone with attic storage or ceiling-mounted fixtures, since tear-off shakes dust loose.',
      },
      { t: 'h2', text: 'Interior repairs and unit turns' },
      {
        t: 'p',
        text: 'A roof leak that reached a ceiling leaves interior work behind it: drywall, texture, paint, and sometimes flooring or cabinet damage. Aligning that work with the unit-turn schedule means it happens in a vacant unit on a maintenance timeline instead of around a resident on an emergency one. On larger restoration and exterior renovation projects, the same coordination applies to siding, trim, paint, and balcony work.',
      },
      { t: 'h2', text: 'Emergency storm response' },
      {
        t: 'p',
        text: 'After a hail or wind event, the sequence is tarp and secure, then document, then repair. Documentation is what protects the asset: photographs of every affected building and slope, damage tied to the storm date, and a scope your carrier can evaluate. Portfolio claims also carry structure a single-family claim does not — deductibles applied per building, coverage terms that vary by policy, and an adjuster who needs someone on the roof with them.',
      },
      { t: 'h2', text: 'Who CMAC works with' },
      {
        t: 'p',
        text: 'CMAC is a member of the Apartment Association of Greater Dallas and the Fort Worth Apartment Association, and works with owners, asset managers, and property management companies across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. The company is veteran-owned, GAF Master Elite® certified, a GAF President’s Club award winner, an NRCA member, and rated A+ by the Better Business Bureau.',
      },
      {
        t: 'note',
        text: 'For multi-family and property management accounts, reach Charles directly at CharlesM@CMACRoofing.com, or call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Quarterly maintenance plans', detail: 'Scheduled visits that clear drainage and catch failed penetrations before they become interior claims.' },
      { title: 'Routine inspections', detail: 'Every building documented with dated photographs so condition is tracked rather than recalled.' },
      { title: 'Large-scale replacements', detail: 'Full replacements phased building by building across an occupied community.' },
      { title: 'Restoration projects', detail: 'Coating and restoration systems that extend a sound low-slope roof and defer the capital spend.' },
      { title: 'CapEx and exterior renovations', detail: 'Remaining-life ranking that turns roofing into a funded schedule, plus siding, trim, and exterior scope.' },
      { title: 'Emergency storm response', detail: 'Tarping and securing first, then documentation your carrier can act on, then repair.' },
    ],
    steps: [
      {
        title: 'Portfolio walk',
        detail: 'Every building is inspected and photographed — roofs, drainage, penetrations, and rooftop equipment — across the whole property or portfolio.',
      },
      {
        title: 'Condition report and ranking',
        detail: 'Buildings are ranked by condition and remaining useful life, with restoration-versus-replacement called out for each.',
      },
      {
        title: 'Budget and phasing plan',
        detail: 'The ranking becomes a multi-year CapEx schedule with the work grouped into phases that fit your fiscal calendar.',
      },
      {
        title: 'Resident notification and staging',
        detail: 'Notices, parking plans, and work hours are set per building before anything is staged on site.',
      },
      {
        title: 'Execution building by building',
        detail: 'Work is contained to one building at a time, closed in daily, with magnet sweeps over parking and walkways every evening.',
      },
      {
        title: 'Maintenance program',
        detail: 'Completed buildings roll onto a quarterly maintenance and documentation cycle so the new roofs reach their full service life.',
      },
    ],
    brandIds: ['gaf', 'duro-last'],
    related: ['/services/roofing', '/services/roofing/commercial-roofing', '/services/roofing/roof-replacement', '/services/roofing/roof-repairs'],
    updated: '2026-08-24',
  },

  /* --------------------------------------------------------- 8. home additions */
  {
    id: 'home-additions',
    category: 'roofing',
    name: 'Home Additions & Remodeling',
    headline: 'Remodeling and additions — we build your vision. Transform your home with CMAC experts.',
    summary:
      'Additions and remodeling — roofing, siding, gutters, windows, doors, painting, kitchens, baths, and decks, with the roof tie-in detailed properly.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC’s remodeling and additions work covers roof restoration, siding, gutters, windows, exterior and garage doors, exterior painting, kitchen remodeling, bathroom remodeling, and deck construction. The approved project scope and applicable warranty terms should be documented in writing before work begins.',
      },
      {
        t: 'p',
        text: 'The part of an addition that most often goes wrong is not the framing, the finishes, or the permit. It is the roof tie-in — the place where the new structure meets the old one.',
      },
      { t: 'h2', text: 'Why the tie-in is the leak point' },
      {
        t: 'p',
        text: 'Two things are true at a tie-in that are not true anywhere else on the house. First, it concentrates more flashing per linear foot than any other detail — new valleys, a roof-to-wall run, a head condition, and often a cricket, all within a few feet of each other. Second, the addition and the original house sit on different foundations poured decades apart, and they settle at different rates. A rigid, sealant-dependent detail at a moving joint has a predictable ending.',
      },
      { t: 'h2', text: 'Match the plane and the pitch' },
      {
        t: 'p',
        text: 'The cleanest addition roof continues an existing plane at the same pitch, so the new field simply becomes part of the old one. When the pitch changes, the transition has to be built and flashed as a deliberate detail rather than trimmed to fit — a pitch change creates a break where water changes speed and direction, and that break needs metal under it.',
      },
      {
        t: 'p',
        text: 'When the addition runs in as a lower roof against an existing wall, the detail is roof-to-wall: step flashing woven course by course up the wall, counterflashing or the siding’s weather barrier lapped correctly over it, and — critically — a kickout flashing at the bottom where the roof edge dies out above the gutter. Without the kickout, water runs off the end of the roof and straight down inside the wall. That failure is invisible from outside until the sheathing is gone.',
      },
      { t: 'h2', text: 'Check the slope before you choose the material' },
      {
        t: 'p',
        text: 'Additions frequently end up with a shallower roof than the house, because the addition roof has to duck under existing windows or eaves. Asphalt shingles have a minimum slope: standard application is generally limited to 4:12 and steeper, and low-slope application down to 2:12 requires a doubled underlayment. Below 2:12, shingles are the wrong product no matter how well they are installed, and the addition needs a low-slope membrane instead. Building a shallow addition roof out of shingles is one of the most common and most avoidable failures in residential remodeling.',
      },
      { t: 'h2', text: 'Weathering-in the connection' },
      {
        t: 'p',
        text: 'Where new decking meets old, the layers have to shingle correctly — each upslope layer lapping over the one below it, with the new underlayment tucked under the existing course above rather than laid on top of it. Self-adhering ice-and-water membrane belongs across the tie-in itself and up any new valley, because that is where water concentrates and where movement is greatest.',
      },
      {
        t: 'p',
        text: 'The existing shingles also have to be cut back and the new courses laced into them, so the courses continue across the joint. Butting new material against old leaves a seam running across the slope, which is both a visible line and a path for water.',
      },
      { t: 'h2', text: 'Matching an aged roof' },
      {
        t: 'p',
        text: 'Even the identical product, from the same manufacturer, in the same color, will not match a roof that has been weathering for ten years — sunlight shifts the granule blend and no new shingle comes out of the bundle looking aged. You have three honest options: accept a visible difference where the addition ties in, re-roof the entire affected plane so the change lands at a natural break like a ridge or valley, or re-roof the whole house and get a uniform result plus a new system warranty. Which one is right depends on how visible the elevation is and how much life the existing roof has left.',
      },
      { t: 'h2', text: 'Everything the addition touches on the outside' },
      {
        t: 'p',
        text: 'An addition rarely stops at the roof. Gutters and downspouts usually need re-routing so the new roof does not dump water onto the old one or against the foundation. Siding has to be matched and its weather barrier lapped into the new flashings. Windows and doors on the addition should match the house in operation and profile, not just in size. Exterior paint on a new elevation almost always means painting adjacent elevations to avoid a hard color line. And a deck built off an addition needs a properly flashed ledger, because a ledger fastened through siding without flashing is both a rot problem and a safety one.',
      },
      {
        t: 'p',
        text: 'CMAC is veteran-owned, GAF Master Elite® certified, a GAF President’s Club award winner, an NRCA member, and rated A+ by the Better Business Bureau, working across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
      },
    ],
    bullets: [
      { title: 'Roof restoration and tie-ins', detail: 'The addition roof planned against the existing planes, pitches, and valleys before framing is set.' },
      { title: 'Siding and exterior painting', detail: 'New elevations matched into the existing siding, weather barrier, and color.' },
      { title: 'Gutters and downspouts', detail: 'Drainage re-routed so the new roof sheds away from the old roof and away from the foundation.' },
      { title: 'Windows and doors', detail: 'Exterior doors, garage doors, and windows matched to the house in profile and operation.' },
      { title: 'Kitchens, baths, and decks', detail: 'Interior remodeling and deck construction, including properly flashed deck ledgers.' },
      { title: 'Written warranty terms', detail: 'Applicable material and workmanship terms are documented for the approved project.' },
    ],
    brandIds: ['gaf', 'certainteed', 'atlas', 'tamko'],
    related: ['/services/roofing', '/services/roofing/roof-replacement', '/services/roofing/roof-repairs', '/services/roofing/custom-homes'],
    updated: '2026-08-24',
  },
]
