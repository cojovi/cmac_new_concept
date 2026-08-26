import type { ServiceCategory, ServiceDoc } from '../types'

/**
 * Exteriors pillar.
 *
 * Groups the non-roof exterior work CMAC performs: siding, replacement windows and sliding doors,
 * decks, and exterior painting. The through-line is the building envelope — roof, walls, openings,
 * and drainage are one system, and the failures cross between them.
 *
 * No brand is named on any of these pages, because CMAC names none on the live site and
 * `content/brands.ts` carries no siding, window, decking, or paint manufacturer.
 */

export const exteriorsCategory: ServiceCategory = {
  id: 'exteriors',
  name: 'Exteriors',
  navLabel: 'Exteriors',
  headline: 'The whole envelope, not just the roof.',
  summary:
    'Siding, replacement windows and sliding doors, custom decks, and exterior painting from a veteran-owned contractor across five states.',
  body: [
    {
      t: 'p',
      text: 'Your house keeps water out as a system, not as a collection of parts. The roof sheds it, the walls drain it, the openings interrupt both and have to be flashed back together, and the gutters carry it away from the foundation. Water finds whichever of those is weakest. That is why a leak over a window is so often a flashing detail at the roof, and why a soft spot in the siding usually traces back to a gutter that has been overflowing at one corner for three years.',
    },
    {
      t: 'h2',
      text: 'What the exteriors pillar covers',
    },
    {
      t: 'ul',
      items: [
        'Siding — full replacement and targeted repair in vinyl, fiber cement, and high-end composite.',
        'Windows — energy-efficient replacement windows and sliding doors.',
        'Decks — custom deck design, new construction, and structural repair.',
        'Exterior painting — full-service prep, surface cleaning, minor repairs, priming, and finish.',
      ],
    },
    {
      t: 'h2',
      text: 'Why one contractor for all of it',
    },
    {
      t: 'p',
      text: 'The seams between trades are where envelope failures live. A siding crew that does not own the roof-to-wall flashing, a window installer who does not own the housewrap lap above the head flange, a painter who caulks a joint that was supposed to stay open as a drainage path — none of them are doing bad work in isolation, and the wall still leaks.',
    },
    {
      t: 'p',
      text: 'CMAC works on the roof, the walls, the openings, and the drainage, which means the transitions belong to somebody. Kickout flashing where a roof edge meets a wall, gutter apron behind the trough, step flashing woven into the siding, head flashing over a window — those details get resolved rather than deferred to whoever shows up next.',
    },
    {
      t: 'h2',
      text: 'What Texas weather does to an exterior',
    },
    {
      t: 'p',
      text: 'The southern plains and the Gulf states hand an exterior a specific set of problems. Hail is the obvious one, and it does not only hit roofs — it cracks siding, dents metal trim, breaks window glass, and strips paint on the elevation it drove into. Ultraviolet load is relentless, and it fades finishes and chalks paint on south and west walls years before the shaded elevations show anything. Heat cycling moves every joint in the building daily. Expansive clay soil moves foundations seasonally, which racks door and window openings. Wind-driven rain pushes water uphill under laps that would drain fine in a vertical rain.',
    },
    {
      t: 'note',
      text: 'CMAC Roofing is veteran-owned and operated, founded and led by Christian Viveiros, GAF Master Elite® certified, a GAF President’s Club award winner, an NRCA member, and BBB A+ rated. Integrity Truly Matters. Every inspection is free and carries no obligation.',
    },
  ],
  updated: '2026-08-24',
}

export const exteriorsServices: ServiceDoc[] = [
  /* -------------------------------------------------------------------- siding */
  {
    id: 'siding',
    category: 'exteriors',
    name: 'Siding',
    headline: 'Expert siding installation and repair specialists.',
    summary:
      'Vinyl, fiber cement, and high-end composite siding installed and repaired to restore weather resistance and curb appeal.',
    body: [
      {
        t: 'p',
        text: 'CMAC specializes in delivering trustworthy, affordable, and high-quality siding solutions — full siding replacement when the wall has aged out, and targeted siding repair to restore function, weather resistance, and aesthetic appeal.',
      },
      {
        t: 'h2',
        text: 'Siding is a drainage plane, not a seal',
      },
      {
        t: 'p',
        text: 'This is the single most misunderstood thing about a wall, and it explains most bad siding work. Siding is not waterproof and was never meant to be. It is a rain screen: it takes the direct hit of wind-driven rain, sheds the overwhelming majority of it, and accepts that some water will get behind it. What keeps the wall dry is the layer underneath — the water-resistive barrier — plus a path for the water that gets past the siding to drain back out at the bottom.',
      },
      {
        t: 'p',
        text: 'That is why sealing every lap and every gap with caulk makes a wall worse rather than better. A caulked-shut wall still admits water at the top and around openings, and now that water has nowhere to leave. It sits against sheathing and framing. Vinyl siding is deliberately hung loose on its nails and deliberately left open at the bottom of each course for exactly this reason. Understanding what is supposed to be sealed and what is supposed to drain is most of the craft.',
      },
      {
        t: 'h2',
        text: 'Housewrap and flashing at the openings',
      },
      {
        t: 'p',
        text: 'Behind the siding sits the water-resistive barrier — housewrap, felt, or a coated sheathing. Its job is to shed anything that gets past the cladding, and it does that only if it is lapped shingle-style, upper sheet over lower sheet, all the way down the wall. One reversed lap is a funnel pointed into the wall cavity.',
      },
      {
        t: 'p',
        text: 'Openings are where it gets decided. A window or door interrupts the drainage plane, so the barrier has to be cut, folded, and integrated back together in a specific order: sill pan flashing first so anything reaching the rough sill drains outward, then jamb flashing lapped over the sill flange, then head flashing over the top flange with the housewrap lapped over the head flashing rather than under it. Get the order wrong and the flashing directs water into the framing with great efficiency. The other critical detail is kickout flashing where a roof edge terminates against a wall — without it, a whole roof plane worth of water is delivered straight behind the siding at that corner, which is why that spot rots so reliably.',
      },
      {
        t: 'h2',
        text: 'Vinyl, fiber cement, and composite',
      },
      {
        t: 'h3',
        text: 'Vinyl',
      },
      {
        t: 'p',
        text: 'Vinyl is the most installed cladding in the country because it is economical, it never needs painting, and it goes up fast. It handles moisture indifferently — it does not rot and it does not absorb water. The tradeoffs are thermal and impact related. Vinyl expands and contracts substantially with temperature, which is why it must be hung loose rather than nailed tight, and why installation error shows up as waviness in August. Under Texas ultraviolet load, color holds better than it used to but darker colors still fade on south and west walls. It is the material most vulnerable to hail.',
      },
      {
        t: 'h3',
        text: 'Fiber cement',
      },
      {
        t: 'p',
        text: 'Fiber cement is a cement, sand, and cellulose composite. It is dimensionally stable across temperature swings, so it does not oil-can or wave in the heat. It is non-combustible, which matters more every year. It holds paint exceptionally well because the surface is porous and stable, and factory-finished products carry long finish warranties. Against hail, it behaves differently from vinyl: instead of cracking through and shattering, it tends to chip, crack locally, or take a dent at the impact point, and single damaged boards can usually be cut out and replaced. It is heavy, it requires specific cutting and fastening practice, and its butt joints and cut edges must be primed and detailed or the board wicks water.',
      },
      {
        t: 'h3',
        text: 'High-end composite',
      },
      {
        t: 'p',
        text: 'Engineered wood and polymer composites aim at the appearance and workability of wood with better moisture behavior. They cut and fasten like lumber, take deep wood-grain texture, come in long lengths that reduce joints, and weigh far less than fiber cement. They are the usual pick where an owner wants a real wood look without the maintenance cycle of real wood.',
      },
      {
        t: 'h2',
        text: 'Profiles',
      },
      {
        t: 'ul',
        items: [
          'Lap — horizontal courses, each overlapping the one below. The default, available in every material, and the most forgiving of the three at shedding water.',
          'Shake and shingle — staggered or straight-coursed panels used on gables, dormers, and accent walls. More joints per square foot, so flashing and course alignment matter more.',
          'Board-and-batten — vertical boards with narrow battens over the joints. Strong architectural look, but the vertical orientation means water runs along seams rather than across them, which puts more weight on the barrier behind and on the base detail.',
        ],
      },
      {
        t: 'h2',
        text: 'What hail does to each material',
      },
      {
        t: 'p',
        text: 'Hail damage on walls is real and frequently missed, because adjusters and owners both look up. It concentrates on the elevation the storm drove into, so a house can have one badly damaged wall and three untouched ones.',
      },
      {
        t: 'ul',
        items: [
          'Vinyl cracks and punches through, especially when it is cold and especially on aged material that has lost plasticizer. Look for holes, star-pattern cracks, and chipped bottom edges on the impacted elevation.',
          'Fiber cement chips and cracks at the point of impact rather than shattering, and the damage often shows as removed paint and a small crater rather than a hole.',
          'Composite dents and bruises, sometimes with the finish broken at the impact point while the board stays intact.',
          'Aluminum and steel trim, fascia wrap, and window wrap dent visibly and are often the clearest evidence anywhere on the house that hail of a given size actually fell.',
        ],
      },
      {
        t: 'p',
        text: 'If a storm damaged your siding, it very likely damaged the roof, the gutters, and the window wraps as well. CMAC documents all of it in one inspection and handles the claim conversation with your carrier.',
      },
      {
        t: 'note',
        text: 'Siding and gutters get replaced together more often than owners expect. The gutter is fastened to the fascia the siding terminates against, and correcting an overflowing gutter is pointless if the wall behind it has already taken on water.',
      },
    ],
    bullets: [
      {
        title: 'Replacement and repair',
        detail: 'Full siding replacement, or targeted repair where damage is confined to identifiable areas.',
      },
      {
        title: 'Three material families',
        detail: 'Vinyl, fiber cement, and high-end composite, specified to your exposure and budget.',
      },
      {
        title: 'The barrier gets done right',
        detail: 'Housewrap lapped shingle-style and integrated with sill, jamb, and head flashing at every opening.',
      },
      {
        title: 'Roof-to-wall details owned',
        detail: 'Kickout and step flashing handled by the same contractor that works on your roof.',
      },
      {
        title: 'Hail damage documented',
        detail: 'Wall damage is inspected and photographed alongside the roof, not overlooked.',
      },
    ],
    related: [
      '/services/exteriors',
      '/services/exteriors/exterior-painting',
      '/services/exteriors/windows',
      '/services/gutters/installation',
      '/services/gutters/repairs',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------------- windows */
  {
    id: 'windows',
    category: 'exteriors',
    name: 'Replacement Windows',
    headline: 'Expert replacement window installation.',
    summary:
      'Energy-efficient replacement windows and sliding doors, installed with transparent pricing and the glass specs that matter in Texas.',
    body: [
      {
        t: 'p',
        text: 'CMAC makes your house warmer and more comfortable with energy-efficient replacement windows and sliding doors, with affordable and transparent pricing.',
      },
      {
        t: 'p',
        text: 'Windows are the weakest thermal point in any wall and one of the two places water most reliably gets in. Replacing them well is partly a product decision and largely an installation decision, and the two questions that decide the job are how the window is set into the opening and what the glass package is.',
      },
      {
        t: 'h2',
        text: 'Insert replacement or full-frame replacement',
      },
      {
        t: 'p',
        text: 'An insert — also called a pocket or retrofit replacement — removes the old sash and hardware and fits a new complete window inside the existing frame, which stays in the wall. The exterior trim, siding, and interior casing are left undisturbed. It is faster, cleaner, and less expensive, and it is the right choice when the existing frame and the sill beneath it are structurally sound and dry. The cost is glass area: the new frame sits inside the old one, so the visible glass shrinks by an inch or more per side.',
      },
      {
        t: 'p',
        text: 'A full-frame replacement takes everything out down to the rough opening — frame, sill, and all — and installs a new window with a nailing flange that gets integrated into the wall’s water barrier. It is required, not optional, when the existing frame is rotted or corroded, when the sill or the framing below shows water damage, when the original installation was never flashed correctly, when the opening is being resized, or when the existing frame is out of square enough that an insert would never seal. It is the only version that lets the installer actually flash the opening, which is why it is the honest answer on a house with a history of leaks at the windows.',
      },
      {
        t: 'h2',
        text: 'Frame materials',
      },
      {
        t: 'ul',
        items: [
          'Vinyl — the volume choice. It insulates well because the frame is hollow and chambered, it never needs finishing, and it costs the least. It expands and contracts more than the other materials, and dark exterior colors on a large west-facing window are where that shows.',
          'Fiberglass — dimensionally stable, strong enough to support narrow sightlines and large units, and its expansion rate is close to that of glass, which reduces stress on the seal over decades. It costs more than vinyl and less than wood-clad.',
          'Aluminum — strong, thin-profiled, and durable, but a conductor. Older aluminum windows without a thermal break are the reason so many Texas houses have sweating window frames in winter. Modern thermally broken aluminum performs far better and remains common on commercial and contemporary residential work.',
          'Wood-clad — a wood interior for appearance with an aluminum, fiberglass, or vinyl exterior skin for weather. The premium option, and the usual choice where interior millwork matters.',
        ],
      },
      {
        t: 'h2',
        text: 'What is actually in the glass',
      },
      {
        t: 'p',
        text: 'An insulated glass unit is two or three panes separated by a spacer, sealed at the perimeter, with the cavity filled with an inert gas — usually argon, sometimes krypton in thinner cavities. The gas is denser than air, so it slows heat transfer across the gap. Triple glazing adds a third pane and a second cavity. In northern climates the gain is substantial; across Texas and the Southeast the return over a good double-glazed unit is much smaller, and the weight and cost increase is real, so double glazing with a strong coating is usually the better value here.',
      },
      {
        t: 'p',
        text: 'Low-emissivity coatings are the part that matters most. Low-E is a microscopically thin metallic layer on one of the glass surfaces that reflects long-wave infrared while passing visible light. Which surface it goes on changes what it does — a coating tuned for a heating climate keeps interior heat in, while a coating tuned for a cooling climate rejects solar heat before it enters. For most of CMAC’s service area you want the cooling-climate version.',
      },
      {
        t: 'h2',
        text: 'U-factor and SHGC, and which one matters here',
      },
      {
        t: 'p',
        text: 'Two numbers appear on every window label. U-factor measures how readily heat conducts through the whole window assembly, frame included; lower is better, and it is the number that governs performance when there is a temperature difference across the glass — which is to say, in winter, at night, and in heating climates.',
      },
      {
        t: 'p',
        text: 'Solar Heat Gain Coefficient measures the fraction of solar energy striking the window that ends up as heat inside. It runs from zero to one, and lower is better in a cooling climate. This is the number that matters most across Texas, Oklahoma, Arkansas, the Southeast, and anywhere else with long, hot, sunny cooling seasons. The reason is simply where the energy comes from: in a hot climate the dominant load on your air conditioner is sunlight coming through glass, not conduction through it. A window with an excellent U-factor and a high SHGC will still cook a west-facing room all afternoon. Orientation compounds it — south and especially west glass takes the most direct load, and that is where a low SHGC pays for itself fastest.',
      },
      {
        t: 'p',
        text: 'Visible transmittance is worth checking alongside SHGC, because it tells you how much daylight you keep. Modern spectrally selective coatings hold visible light reasonably high while pushing SHGC low, which is what lets you cut solar gain without living in a dim room.',
      },
      {
        t: 'h2',
        text: 'Foggy glass and failed seals',
      },
      {
        t: 'p',
        text: 'Haze or moisture between the panes that you cannot wipe off from either side means the perimeter seal on the insulated glass unit has failed. Once the seal opens, the inert gas fill escapes and humid outside air moves in and out with daily pressure and temperature cycling. The desiccant in the spacer absorbs moisture until it is saturated, and after that the unit fogs on cool mornings and clears in the afternoon, gradually progressing to permanent haze and mineral staining etched into the interior glass surface.',
      },
      {
        t: 'p',
        text: 'Two things follow. First, the insulating performance you paid for is gone — the cavity is air, not argon. Second, it does not heal, and no cleaning reaches it. Seal failure is accelerated by heat cycling, by standing water in a sill that does not drain, and by south and west exposure, which is why fogged units on a Texas house so often appear on one elevation first.',
      },
      {
        t: 'h2',
        text: 'Sliding doors',
      },
      {
        t: 'p',
        text: 'Sliding patio doors are large horizontal openings low on the wall, which is a demanding condition. The sill sits where wind-driven rain collects, so the pan flashing and the weep path under the track carry most of the burden. Operation problems are usually rollers or track, not the panel, and doors that need shoulder pressure to move are running on flat-spotted rollers or in a track packed with grit. Foggy glass in a slider is the same insulated-unit failure as any window, on a much larger and more visible pane.',
      },
      {
        t: 'note',
        text: 'Window replacement is the natural time to correct flashing at the openings. If the siding is coming off anyway, or the wall has a leak history, full-frame replacement lets the opening be flashed and integrated with the water barrier properly for the first time.',
      },
    ],
    bullets: [
      {
        title: 'Insert or full-frame',
        detail: 'We tell you which the opening actually requires, and why, before anything is ordered.',
      },
      {
        title: 'Glass specified for heat',
        detail: 'Low-E packages chosen for a cooling climate, where SHGC matters more than U-factor.',
      },
      {
        title: 'Sliding doors included',
        detail: 'Replacement sliding patio doors installed with proper sill pan and weep detailing.',
      },
      {
        title: 'Failed seals diagnosed',
        detail: 'Fogged units are identified as seal failures, not written off as dirty glass.',
      },
      {
        title: 'Transparent pricing',
        detail: 'A written, itemized estimate covering unit, installation, and finish work.',
      },
    ],
    related: [
      '/services/exteriors',
      '/services/exteriors/siding',
      '/services/exteriors/exterior-painting',
      '/services/gutters',
    ],
    updated: '2026-08-24',
  },

  /* --------------------------------------------------------------------- decks */
  {
    id: 'decks',
    category: 'exteriors',
    name: 'Decks',
    headline: 'Custom deck construction and outdoor living.',
    summary:
      'Custom deck design, new deck construction, and structural repair in cedar, pressure-treated wood, composite, and aluminum.',
    body: [
      {
        t: 'p',
        text: 'Add beauty and safety to your property with a quality deck installation by CMAC Roofing. CMAC handles deck installation, deck repairs, and custom deck design with material options suited to the approved scope.',
      },
      {
        t: 'h2',
        text: 'The ledger is where decks fail',
      },
      {
        t: 'p',
        text: 'Almost every catastrophic deck failure is a ledger failure. The ledger is the board bolted to the house that carries one entire side of the deck, and when it lets go the deck does not sag — it drops, usually while loaded with people. Two things cause it, and both are avoidable.',
      },
      {
        t: 'p',
        text: 'The first is attachment. A ledger nailed on, or fastened with deck screws, or lag-bolted into siding rather than into the house’s rim joist, is relying on fasteners loaded in withdrawal. Correct attachment uses through-bolts or structural lag screws in a staggered pattern into solid framing, with the siding removed so the ledger bears on sheathing or rim rather than standing off on a compressible surface.',
      },
      {
        t: 'p',
        text: 'The second is water. A ledger bolted flat to the wall creates a horizontal shelf that traps water at the exact point where the deck framing meets the house framing, and the bolt holes give that water a path straight into both. Ledger flashing — a Z-flashing or membrane detail that runs up behind the water barrier and out over the top of the ledger — is what keeps that joint dry. Without it, the rim joist rots quietly behind the deck boards for a decade and then the connection fails without warning. Free-standing decks on their own posts avoid the problem entirely, and are worth considering on additions and on walls with a leak history.',
      },
      {
        t: 'h2',
        text: 'Footings and framing',
      },
      {
        t: 'p',
        text: 'Footings carry everything to the ground and have to reach undisturbed soil below the local frost depth. Frost depth is shallow across most of Texas and deeper in Oklahoma, Arkansas, and Tennessee, and it is set by local code, not by rule of thumb. Two soil problems matter more here than frost anyway: fill dirt around a newer house has not consolidated and will settle under a footing bearing on it, and expansive clay heaves and shrinks seasonally, which is what causes a deck to move relative to the house year over year. Footings sized to the load and taken to competent bearing solve both.',
      },
      {
        t: 'p',
        text: 'Joist spacing depends on what goes on top. Wood decking is typically framed at sixteen inches on center. Composite decking is not structural — it spans between joists rather than contributing stiffness — and most composite products want sixteen inches on center for perpendicular installation and twelve inches on center when boards run diagonally, with some products requiring twelve throughout. Framing a deck at twenty-four inches and then installing composite over it produces a floor that feels soft underfoot and boards that sag visibly between joists in summer heat. Check the decking requirement before the framing goes up, not after.',
      },
      {
        t: 'h2',
        text: 'Decking materials',
      },
      {
        t: 'ul',
        items: [
          'Pressure-treated pine — the economical structural standard and a common decking surface. Treated for rot and insects, but it moves, checks, and cups as it dries, and it needs cleaning and sealing on a cycle to stay presentable.',
          'Cedar — naturally rot and insect resistant, dimensionally calmer than treated pine, cooler underfoot, and better looking with age. It is softer, so it dents, and left unfinished it weathers to gray.',
          'Composite — a wood-flour and polymer board that does not rot, splinter, or need sealing, and holds color for a long time. It costs more up front, it gets hot in direct Texas sun in darker colors, and it has stricter joist spacing requirements than wood.',
          'Aluminum decking — the longest-lasting surface. It does not rot, burn, warp, or attract insects, many systems are watertight enough to create dry storage below, and it stays cooler than dark composite. It is the highest initial cost and a specific look.',
        ],
      },
      {
        t: 'h2',
        text: 'Fasteners and railings',
      },
      {
        t: 'p',
        text: 'Hidden fasteners clip into a groove milled in the edge of the board or screw through the side into the joist, leaving a surface with no visible screw heads. Beyond appearance, they eliminate the face penetrations where water sits and where wood boards check around the screw, and most composite systems are designed around them. The tradeoff is installation time and a board that is slightly harder to remove individually later. Where face screws are used, they should be coated or stainless — modern pressure-treatment chemistry is corrosive to plain steel, and a deck fastened with the wrong screws loses its connections from the inside.',
      },
      {
        t: 'p',
        text: 'Railings are a life-safety item and are governed by code rather than preference. Residential guards are generally required at thirty-six inches minimum above the walking surface where the deck is more than thirty inches above grade, with balusters spaced so a four-inch sphere cannot pass between them, and the assembly has to resist a specified lateral load at the top rail. Stairs have their own handrail height range and their own graspability requirements. Local amendments vary, so the governing number is whatever your jurisdiction has adopted — but a wobbly guard that moves when you lean on it fails the load requirement regardless of how tall it is.',
      },
      {
        t: 'h2',
        text: 'Deck repair',
      },
      {
        t: 'ul',
        items: [
          'Ledger attachment and flashing corrected where the original was nailed, unflashed, or bolted through siding.',
          'Rotted rim joist, joist ends, and posts at grade replaced.',
          'Footings underpinned or replaced where settlement or heave has moved the frame.',
          'Guard and handrail assemblies rebuilt to current height and load requirements.',
          'Decking surface replaced over sound framing, including conversion from wood to composite where spacing allows.',
          'Corroded fasteners and undersized hangers replaced with properly rated hardware.',
        ],
      },
      {
        t: 'note',
        text: 'If a deck is more than fifteen years old and you have never looked behind the ledger board, that is the inspection to ask for. It is the connection that matters most and the one nobody can see.',
      },
    ],
    bullets: [
      {
        title: 'Custom design',
        detail: 'Layout, elevation, and railing worked out for your yard and how you actually use it.',
      },
      {
        title: 'Four decking materials',
        detail: 'Cedar, pressure-treated wood, composite, and aluminum, with options for every price point.',
      },
      {
        title: 'Ledger done correctly',
        detail: 'Through-bolted to solid framing and flashed so the connection stays dry.',
      },
      {
        title: 'Framed for the surface',
        detail: 'Joist spacing set by what goes on top, so composite does not sag between joists.',
      },
      {
        title: 'Code-compliant railings',
        detail: 'Guards and handrails built to the height, spacing, and load requirements in your jurisdiction.',
      },
      {
        title: 'Documented structural scope',
        detail: 'Connections, framing, guards, and finishes are defined for the property and governing jurisdiction.',
      },
    ],
    steps: [
      {
        title: 'Design consultation',
        detail: 'We walk the site, take measurements, and work out layout, access, and materials with you.',
      },
      {
        title: 'Footings and posts',
        detail: 'Footings sized to the load and taken below frost depth to competent bearing soil.',
      },
      {
        title: 'Ledger and framing',
        detail: 'Ledger through-bolted and flashed, then beams and joists set to the spacing the decking requires.',
      },
      {
        title: 'Decking and fasteners',
        detail: 'Surface installed with hidden or properly rated fasteners and correct gapping.',
      },
      {
        title: 'Railings and stairs',
        detail: 'Guards, handrails, and stair geometry built to the applicable code requirements.',
      },
      {
        title: 'Final walkthrough',
        detail: 'The finished deck is reviewed with you, including how to maintain the surface you chose.',
      },
    ],
    related: [
      '/services/exteriors',
      '/services/exteriors/exterior-painting',
      '/services/exteriors/siding',
      '/services/gutters/installation',
    ],
    updated: '2026-08-24',
  },

  /* --------------------------------------------------------- exterior painting */
  {
    id: 'exterior-painting',
    category: 'exteriors',
    name: 'Exterior Painting',
    headline: 'The finishing touch.',
    summary:
      'Full-service exterior painting — surface cleaning, minor repairs, caulking, priming, and premium weather-resistant finishes.',
    body: [
      {
        t: 'p',
        text: 'CMAC specializes in delivering trustworthy, affordable, and high-quality exterior painting solutions. The scope is full-service: prep work, surface cleaning, minor repairs, and priming, finished with premium, weather-resistant paints.',
      },
      {
        t: 'h2',
        text: 'Prep is the job',
      },
      {
        t: 'p',
        text: 'Paint does not fail because the paint was bad. It fails because it was applied to a surface it could not bond to. Chalk, dirt, mildew, loose edges of the previous coat, bare wood that was never primed — every one of those is a bond failure waiting to happen, and no product overcomes any of them. On a typical repaint the preparation takes most of the labor, and that ratio is the honest signal of whether a bid is real. A quote that is cheap because it skips prep is not cheaper; it is a two-year paint job priced as a ten-year one.',
      },
      {
        t: 'h2',
        text: 'Washing and chalk removal',
      },
      {
        t: 'p',
        text: 'Chalking is what an aged coating does under ultraviolet exposure: the binder that holds the pigment breaks down at the surface and releases loose pigment powder. Run a hand down a sun-facing wall and if it comes away colored, the wall is chalking. Paint applied over chalk bonds to the powder, not to the substrate, and it releases in sheets within a couple of seasons.',
      },
      {
        t: 'p',
        text: 'Removing it means washing with detergent and mechanical agitation, then rinsing thoroughly and letting the substrate dry. Mildew is a separate problem that has to be killed rather than rinsed, because live spores painted over will grow through the new coating. High-pressure washing is a tool used carefully — too much pressure drives water behind siding and into window assemblies and erodes soft wood, and a wall that is still wet inside will blister the new coat from underneath.',
      },
      {
        t: 'h2',
        text: 'Scraping, feathering, and repair',
      },
      {
        t: 'p',
        text: 'Loose and peeling coating is scraped back to sound material. The edge that remains is then feathered — sanded so the transition from bare substrate to the intact old coating is a ramp rather than a step. Skipping that step telegraphs every scrape mark through the finish coat, which is why some repaints look worse from ten feet than they did before.',
      },
      {
        t: 'p',
        text: 'Minor repairs happen at this stage because this is when the damage is visible. Rotted trim ends, split fascia, failed siding butt joints, nail pops, and damaged sill wood all get addressed before anything is primed. Painting over rot hides it for exactly one season.',
      },
      {
        t: 'h2',
        text: 'Caulking — and what not to caulk',
      },
      {
        t: 'p',
        text: 'Caulk seals the joints that are meant to be sealed: siding to trim, trim to trim, around window and door casings, and at penetrations. A high-quality elastomeric or siliconized acrylic sealant is used because those joints move with temperature and the bead has to move with them. Cracked, hardened caulk is cut out rather than layered over, because a new bead over a failed one has nothing sound to grip.',
      },
      {
        t: 'p',
        text: 'What matters just as much is leaving alone the joints that are supposed to drain. The bottom edge of a lap siding course, the weep holes at the bottom of a window frame, and the drainage gap at the base of the wall are all deliberate openings that let water that got behind the cladding escape. Sealing them turns a wall that drains into a wall that holds water. This is one of the most common ways a well-intentioned paint job causes damage.',
      },
      {
        t: 'h2',
        text: 'Priming',
      },
      {
        t: 'p',
        text: 'Every area scraped to bare wood gets spot-primed. Bare wood is porous and absorbs binder unevenly, so finish paint applied directly to it starves in the substrate and leaves a flat, weak film exactly where the surface was already vulnerable. Primer also blocks tannin bleed from cedar and redwood, which otherwise stains through a light-colored topcoat as brown discoloration within months. Knots and resinous areas need a stain-blocking primer specifically. Bare metal — flashing, fascia wrap, railings — needs a primer formulated for metal, and bare masonry needs a masonry primer for alkalinity.',
      },
      {
        t: 'h2',
        text: 'Why south and west walls fail first',
      },
      {
        t: 'p',
        text: 'Walk any older house and the paint condition varies dramatically by elevation. The south and west walls take the highest cumulative ultraviolet dose and the highest surface temperatures, because west walls catch direct sun during the hottest part of the afternoon. Ultraviolet radiation breaks down the binder, which produces chalking and fading. Heat drives daily expansion and contraction cycles in the substrate and in the film. The two together age a coating on a west wall roughly twice as fast as on a north wall of the same house.',
      },
      {
        t: 'p',
        text: 'That has practical consequences. It is why fading looks uneven and why a spot repair on a west wall rarely color-matches the adjacent original. It is why the sunny elevations justify better products and more careful prep. And it is why the honest recommendation is sometimes to repaint the whole house rather than the two walls that look bad, because painting only those two guarantees a visible line at the corner.',
      },
      {
        t: 'h2',
        text: 'Acrylic latex or elastomeric',
      },
      {
        t: 'p',
        text: 'One hundred percent acrylic latex is the standard exterior finish for wood, fiber cement, composite, and previously painted surfaces. It stays flexible as the substrate moves, it resists ultraviolet degradation and chalking far better than older formulations, it breathes enough to let residual substrate moisture escape rather than blistering, and it cleans up with water. On siding and trim it is nearly always the right product.',
      },
      {
        t: 'p',
        text: 'Elastomeric coatings are a different animal, built for masonry: stucco, concrete block, poured concrete, and fiber cement in some applications. They go on far thicker than conventional paint and cure to a rubbery film that stretches, which lets them bridge hairline cracks in masonry that ordinary paint would simply crack along. That thickness is also the limitation. An elastomeric film is much less permeable, so applying it to a wall with a moisture source behind it — rising damp, a leak, a wall that cannot dry outward — traps that moisture and the coating blisters and delaminates in sheets. It also does not belong on wood siding, which needs to breathe and moves differently than masonry. Fix the water problem first; elastomeric is a crack-bridging coating, not a waterproofing membrane.',
      },
      {
        t: 'note',
        text: 'Exterior painting is the right time to look at everything the paint is covering. Trim rot, failed caulk at the windows, and a gutter that has been streaking one wall are all cheaper to correct while the crew is already on the ladders.',
      },
    ],
    bullets: [
      {
        title: 'Prep-first scope',
        detail: 'Cleaning, scraping, feathering, minor repairs, caulking, and priming before any finish goes on.',
      },
      {
        title: 'Chalk and mildew handled',
        detail: 'Aged surfaces washed and treated so the new coating bonds to substrate, not to powder.',
      },
      {
        title: 'Repairs before paint',
        detail: 'Rotted trim, split fascia, and failed joints corrected rather than painted over.',
      },
      {
        title: 'Drainage left open',
        detail: 'Weeps and lap edges stay unsealed so the wall can still drain behind the cladding.',
      },
      {
        title: 'Right coating for the substrate',
        detail: 'Acrylic latex on siding and trim, elastomeric where masonry actually calls for it.',
      },
      {
        title: 'Premium weather-resistant paints',
        detail: 'Products chosen for the ultraviolet and heat load your sunny elevations actually see.',
      },
    ],
    steps: [
      {
        title: 'Inspection and color',
        detail: 'We assess every elevation for chalking, peeling, and repair needs, and settle colors with you.',
      },
      {
        title: 'Wash the surfaces',
        detail: 'Detergent washing and rinsing to remove dirt, chalk, and mildew, then time to dry.',
      },
      {
        title: 'Scrape and repair',
        detail: 'Loose coating removed and feathered, and damaged wood and trim repaired or replaced.',
      },
      {
        title: 'Caulk and prime',
        detail: 'Moving joints sealed, drainage paths left open, and bare wood and metal spot-primed.',
      },
      {
        title: 'Apply the finish',
        detail: 'Premium weather-resistant coating applied at the specified film build, cut in at every edge.',
      },
      {
        title: 'Walk it with you',
        detail: 'The job is reviewed elevation by elevation and touched up until you sign off.',
      },
    ],
    related: [
      '/services/exteriors',
      '/services/exteriors/siding',
      '/services/exteriors/decks',
      '/services/exteriors/windows',
    ],
    updated: '2026-08-24',
  },
]
