import type { ServiceCategory, ServiceDoc } from '../types'

/**
 * Gutters pillar.
 *
 * CMAC’s live gutter pages carry strong positioning copy and almost no product detail — the
 * installation page names no material, no size, and no gauge at all. The category is real, so the
 * gap is filled with trade knowledge attributed to the trade, never to CMAC’s internal practice.
 * No pricing, no warranty duration, and no service frequency appear anywhere here, because CMAC
 * publishes none of them.
 */

export const guttersCategory: ServiceCategory = {
  id: 'gutters',
  name: 'Gutters',
  navLabel: 'Gutters',
  headline: 'Your trusted gutter experts.',
  summary:
    'Gutter installation, repair, guards, maintenance, and commercial drainage across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
  image: '/svc-gutters-clean.jpg',
  body: [
    {
      t: 'p',
      text: 'Your gutter systems play a key role in keeping your home safe. Correctly operating gutters drive water away from your roof and foundation, protecting you from leaky gutters and basement flooding. When they stop doing that, the damage rarely announces itself as a gutter problem — it shows up as a stained soffit, a rotted fascia board, a cracked slab corner, or a flower bed that never dries out.',
    },
    {
      t: 'h2',
      text: 'Why gutters matter more than most owners think',
    },
    {
      t: 'p',
      text: 'A roof is a collection surface. Every square foot of it delivers water to the eave, and a one-inch rain on a 2,000-square-foot roof footprint produces well over a thousand gallons. All of that arrives in a few minutes during the kind of downpour that is normal across the Gulf and the southern plains. The gutter is the only thing standing between that volume and the soil holding up your foundation.',
    },
    {
      t: 'p',
      text: 'Expansive clay soils across North Texas and much of Oklahoma make this worse than it is in other parts of the country. Clay swells when it takes on water and shrinks when it dries. Water dumped repeatedly at one corner of the house creates a wet zone next to soil that is drying everywhere else, and that differential movement is what cracks slabs and racks door frames. Controlling where roof water lands is cheap. Correcting a foundation that has already moved is not.',
    },
    {
      t: 'h2',
      text: 'What CMAC does on the gutter side',
    },
    {
      t: 'ul',
      items: [
        'New gutter installation, including seamless runs formed on site.',
        'Targeted repairs — resealing, re-hanging, pitch correction, and downspout work.',
        'Gutter guard systems to cut ladder work and keep debris out of the trough.',
        'Scheduled maintenance: clearing, flushing, inspection, resealing, and re-securing.',
        'Commercial drainage systems sized for buildings that shed far more water than a house.',
      ],
    },
    {
      t: 'p',
      text: 'CMAC uses heavy-gauge materials and high-quality accessories from trusted industry brands, and backs the work with comprehensive workmanship warranties. Gutter work is also the natural companion to a roof replacement — new gutters go on cleanly once the drip edge and starter course are set, and the two systems only work as a pair.',
    },
    {
      t: 'h2',
      text: 'Signs your gutters need attention',
    },
    {
      t: 'ul',
      items: [
        'Water sheeting over the front lip of the gutter during rain.',
        'Visible sag, or a gutter that has pulled away from the fascia.',
        'Standing water in the trough hours after the storm has passed.',
        'Rust streaks, pinholes, or drips at the seams and end caps.',
        'Peeling paint, dark staining, or soft wood on the fascia and soffit.',
        'Eroded mulch, splash marks on siding, or settling at the foundation line.',
      ],
    },
    {
      t: 'note',
      text: 'Every CMAC inspection is free and carries no obligation. You get a written assessment of what is failing and why, whether the fix is a repair or a replacement.',
    },
  ],
  updated: '2026-08-24',
}

export const guttersServices: ServiceDoc[] = [
  /* ------------------------------------------------------------- installation */
  {
    id: 'installation',
    category: 'gutters',
    name: 'Gutter Installation',
    headline: 'Leave your gutter installation to CMAC.',
    summary:
      'Seamless aluminum, steel, and copper gutters sized, pitched, and hung to carry real rainfall away from your roof and foundation.',
    image: '/svc-gutters-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC installs gutter systems sized around the roof area, drainage path, selected material, and approved project scope.',
      },
      {
        t: 'p',
        text: 'A gutter system is a piece of engineering, not trim. Four decisions determine whether it works for twenty years or overflows the first time a squall line comes through: the profile and size, the material and gauge, how it is hung, and how it is pitched and drained. Here is how the trade thinks about each one.',
      },
      {
        t: 'h2',
        text: 'Seamless versus sectional',
      },
      {
        t: 'p',
        text: 'Sectional gutter comes in ten-foot lengths that are lapped and sealed together on the wall. Every lap is a joint, every joint is sealed with a bead of compound, and every bead eventually fails as the metal expands and contracts through the season. On a forty-foot run that is three unnecessary places for water to find its way to the fascia.',
      },
      {
        t: 'p',
        text: 'Seamless gutter is formed on site. A roll-forming machine on the truck takes flat coil stock and extrudes one continuous length matched to the run, so the only joints in the entire system are at inside and outside corners and at the downspout outlets. Fewer joints means fewer leaks and a cleaner line along the eave. Seamless is the default on residential work for good reason.',
      },
      {
        t: 'h2',
        text: 'Five-inch or six-inch K-style',
      },
      {
        t: 'p',
        text: 'Five-inch K-style is the residential standard and it is adequate on a simple roof with modest planes. Six-inch K-style carries roughly forty percent more water and pairs with a larger outlet, which is what actually matters — most overflow events are outlet-limited, not trough-limited.',
      },
      {
        t: 'p',
        text: 'Six-inch is the right call, not an upsell, when any of the following is true: the roof is steep, so water arrives at the eave with velocity and wants to overshoot; a long valley dumps two roof planes into one short section of gutter; a second-story roof discharges onto a lower roof that then drains to that gutter; the eave run is long with only one practical downspout location; or the building sits in a high-intensity rainfall area, which describes most of the Gulf coast and East Texas. Half-round is a legitimate profile on historic and tile-roofed homes, but at the same nominal width it holds less water than K-style, so size up when you choose it for looks.',
      },
      {
        t: 'h2',
        text: 'Aluminum, galvanized steel, or copper',
      },
      {
        t: 'ul',
        items: [
          'Aluminum is the volume choice: it does not rust, it comes pre-finished in a baked enamel, it is light enough to hang long seamless runs, and it is the material nearly every roll former on a truck is set up to run.',
          'Galvanized steel is stiffer and takes an impact — a ladder, a falling limb, a hailstone — better than aluminum. The tradeoff is corrosion: the zinc coating is sacrificial, and once it is consumed at a cut edge or a scratch, rust starts. Steel earns its place on commercial work and on homes under heavy tree cover where ladder and limb contact is constant.',
          'Copper is the long-term material. It needs no coating, it work-hardens rather than fatiguing, and it patinas to a stable surface instead of degrading. Copper gutters commonly survive fifty to one hundred years. It costs several times what aluminum does and it is soldered rather than sealed, so it is a craft install, not a production one.',
        ],
      },
      {
        t: 'h2',
        text: 'Gauge is the number nobody quotes you',
      },
      {
        t: 'p',
        text: 'Aluminum gutter coil is sold in thicknesses. Point-zero-two-seven is the common residential gauge and it is genuinely thin — you can dent it with a thumb. Point-zero-three-two is heavier stock, and the difference shows up exactly where you would expect: it resists denting from ladders, it holds its shape when a hanger is torqued down, and it sags less between hangers when the trough fills with water and wet leaves. The same logic runs through the accessories. Heavy-gauge hangers, thicker end caps, and properly formed outlets are what keep a system from loosening over time.',
      },
      {
        t: 'h2',
        text: 'Hangers, not spikes',
      },
      {
        t: 'p',
        text: 'Spike-and-ferrule was the old method: a long nail driven through the front lip, through a spacer tube, and into the fascia. It works until the fascia takes on a little water and softens, or until seasonal expansion works the spike back out. A gutter with spike heads walking out of the fascia is a gutter that is already coming down.',
      },
      {
        t: 'p',
        text: 'Hidden hangers clip inside the trough and fasten with a screw into the fascia and, where possible, into the rafter tail behind it. The load is carried in shear by a screw rather than in withdrawal by a nail, nothing shows from the ground, and a hanger can be re-driven or added without touching the front lip. Typical spacing is twenty-four to thirty-six inches, tightening to twenty-four inches or less on long runs, on six-inch gutter, under valleys where water and debris concentrate, and anywhere ice loading is a factor.',
      },
      {
        t: 'h2',
        text: 'Pitch and downspouts',
      },
      {
        t: 'p',
        text: 'A gutter is not hung level. It needs a fall of roughly a quarter inch per ten feet toward the outlet so the trough drains dry between storms. Too little pitch and you get standing water, which means mosquito breeding, accelerated corrosion at the seams, and dead weight pulling hangers out of the fascia. Too much pitch and the gutter visibly runs downhill against the fascia line, which owners notice immediately. On long runs the fix is to crown the middle and drain to downspouts at both ends rather than forcing one continuous slope across forty feet.',
      },
      {
        t: 'p',
        text: 'Downspout capacity is where systems most often come up short. As a working rule, a two-by-three downspout serves roughly six hundred square feet of roof area and a three-by-four serves roughly twelve hundred, with round leaders sized similarly. Divide the tributary roof area by that figure and you get the number of downspouts the run actually needs — and it is frequently more than the builder installed. A three-by-four outlet also passes shingle grit and small debris that would plug a two-by-three.',
      },
      {
        t: 'p',
        text: 'Where the water lands matters as much as how it gets there. A downspout that discharges at the base of the wall has simply relocated the problem from the roof to the footing. Extensions, splash blocks, or buried drain lines should carry discharge a minimum of four feet from the foundation, and farther on clay soils or where grade falls back toward the house. Grade away from the wall at roughly six inches over the first ten feet, and never let a downspout discharge onto a walking surface that will ice over.',
      },
      {
        t: 'note',
        text: 'New gutters and a new roof belong on the same schedule. Drip edge, starter course, and gutter apron all tie into the back of the trough, and setting them together is the only way to guarantee water leaving the shingle actually enters the gutter instead of running behind it.',
      },
    ],
    bullets: [
      {
        title: 'Seamless, formed on site',
        detail: 'Continuous runs rolled to length at your house, so the only joints are at corners and outlets.',
      },
      {
        title: 'Sized to your roof',
        detail: 'Trough profile, outlet size, and downspout count set by tributary roof area, not by habit.',
      },
      {
        title: 'Heavy-gauge materials',
        detail: 'Thicker coil and heavy hangers hold their shape under water, debris, and ladder contact.',
      },
      {
        title: 'Hidden-hanger mounting',
        detail: 'Screwed hangers into fascia and rafter tails instead of spikes that work loose over time.',
      },
      {
        title: 'Correct pitch and discharge',
        detail: 'Positive fall to the outlets and discharge carried well clear of the foundation.',
      },
      {
        title: 'Written project scope',
        detail: 'Materials, dimensions, and the approved installation scope are documented before work begins.',
      },
    ],
    steps: [
      {
        title: 'Free inspection and measure',
        detail: 'We walk the eaves, check fascia condition, and measure every run and roof plane feeding it.',
      },
      {
        title: 'Size the system',
        detail: 'Profile, gauge, outlet size, and downspout locations are set from tributary area and roof pitch.',
      },
      {
        title: 'Repair the substrate',
        detail: 'Rotted fascia and failed gutter apron get corrected before anything is hung on them.',
      },
      {
        title: 'Form and hang',
        detail: 'Runs are rolled on site, hung on hidden hangers, and pitched to the outlets.',
      },
      {
        title: 'Downspouts and discharge',
        detail: 'Leaders are run, secured, and terminated well away from the foundation.',
      },
      {
        title: 'Water test and walkthrough',
        detail: 'The system is flushed, checked for standing water and leaks, and reviewed with you.',
      },
    ],
    related: [
      '/services/gutters',
      '/services/gutters/repairs',
      '/services/gutters/gutter-guards',
      '/services/gutters/maintenance',
      '/services/exteriors/siding',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------------ repairs */
  {
    id: 'repairs',
    category: 'gutters',
    name: 'Gutter Repairs',
    headline: 'Your master gutter repair pros.',
    summary:
      'Sagging runs, split seams, pinhole leaks, blocked downspouts, and bad pitch — diagnosed and repaired by the CMAC team.',
    image: '/svc-gutters-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'When searching for lasting gutter repairs, start with a documented diagnosis. The CMAC team identifies the failure before recommending a repair.',
      },
      {
        t: 'p',
        text: 'Most gutter failures are local. One hanger lets go, one seam splits, one outlet plugs, and the whole run starts behaving as though it needs replacement. Knowing the difference is the whole job, and it is what a free inspection is for.',
      },
      {
        t: 'h2',
        text: 'How gutters actually fail',
      },
      {
        t: 'h3',
        text: 'Sagging from hanger failure or standing water',
      },
      {
        t: 'p',
        text: 'A gutter full of wet leaves is carrying real weight — water alone runs a bit over eight pounds per gallon, and a plugged trough holds gallons per foot. That load pulls fasteners out of soft fascia, and once one hanger goes the two beside it carry double and follow. The sag then creates a low spot that holds more water, which accelerates everything. Re-hanging with hidden hangers at tighter spacing usually solves it, provided the fascia behind is still sound.',
      },
      {
        t: 'h3',
        text: 'Separated seams, corners, and end caps',
      },
      {
        t: 'p',
        text: 'Every joint in a gutter is sealed, not welded, and sealant is a consumable. Aluminum moves measurably with temperature swings, and across a Texas summer a long run cycles far enough to work a bead loose. Miters at inside corners are the worst offenders because they take concentrated flow from two planes. The repair is to cut out the old bead completely, clean the metal back to bright, and reseal with a gutter-grade sealant — smearing new sealant over failed sealant buys a season at most.',
      },
      {
        t: 'h3',
        text: 'Pinhole corrosion and rust-through',
      },
      {
        t: 'p',
        text: 'On steel gutters, rust starts at cut edges, scratches, and anywhere debris holds moisture against the metal. It appears first as brown streaking on the outside face and then as a line of pinholes along the bottom of the trough. On aluminum, galvanic corrosion shows up where a dissimilar metal is in contact — a steel screw through aluminum, or copper flashing draining onto an aluminum gutter. A few isolated pinholes can be patched. A trough that is perforated along its length is done.',
      },
      {
        t: 'h3',
        text: 'Downspout and outlet blockage',
      },
      {
        t: 'p',
        text: 'Blockages form at the transitions — at the outlet drop, at the upper elbow, and at the lower elbow above the discharge. A gutter that overflows only at one spot while the rest of the run stays dry is telling you the outlet below it is plugged, not that the gutter is undersized. Clearing and flushing confirms it in minutes.',
      },
      {
        t: 'h3',
        text: 'Ice and freeze damage',
      },
      {
        t: 'p',
        text: 'The southern states get fewer freeze events than the north, but they get them, and a hard freeze on a full gutter does real damage. Water expands as it freezes, which splits seams and deforms end caps, and ice held in the trough adds weight in exactly the way that pulls hangers. Damage from a February freeze frequently is not noticed until the first spring rain overflows the run.',
      },
      {
        t: 'h3',
        text: 'Fascia rot behind the gutter',
      },
      {
        t: 'p',
        text: 'This is the failure that turns a small repair into a real one. Water running behind the trough — because the gutter apron is missing, because the back lip sits too low relative to the shingle edge, or because the trough has overflowed for years — soaks the fascia board from behind. The board looks painted and fine from the ground while the back face is soft. Hanging new gutter on rotten fascia guarantees a callback, so the wood gets replaced first.',
      },
      {
        t: 'h3',
        text: 'Improper pitch and standing water',
      },
      {
        t: 'p',
        text: 'If water sits in the trough a day after the rain stops, the run has lost its fall. That is either a settled hanger, a sag between hangers, or a system that was hung level to begin with. Correcting pitch to roughly a quarter inch per ten feet toward the outlet is often a matter of resetting a handful of hangers.',
      },
      {
        t: 'h3',
        text: 'Impact damage',
      },
      {
        t: 'p',
        text: 'Ladders set against the front lip crush the profile and break the pitch. Falling limbs tear runs loose at the hanger line. Hail dents the trough face without necessarily compromising function, though it often accompanies roof damage worth documenting for a claim.',
      },
      {
        t: 'h2',
        text: 'Repair or replace',
      },
      {
        t: 'p',
        text: 'Repair is the right answer when the damage is confined to identifiable spots on an otherwise sound system: a few loose hangers, one or two failed miters, a plugged downspout, a section knocked loose by a limb, a pitch correction on one run. If the trough metal is straight, the finish is intact, and the fascia behind it is solid, repairing is cheaper and faster and will hold.',
      },
      {
        t: 'p',
        text: 'Replacement makes more sense when the problems are systemic rather than local. Watch for these:',
      },
      {
        t: 'ul',
        items: [
          'Pinholes or rust perforation appearing in more than one run.',
          'Sealant failing at most joints at once — a sign the whole system has aged out together.',
          'Sectional gutter where nearly every lap is leaking.',
          'A system that overflows in ordinary rain even when clean, which is a sizing problem no repair fixes.',
          'Widespread hanger pull-out that traces back to fascia rot along the eave.',
          'Cosmetic damage across the front elevation, where a patchwork of repairs will never look right.',
        ],
      },
      {
        t: 'note',
        text: 'If a storm caused the damage, document it before anything is touched. Gutter damage often accompanies roof damage, and CMAC handles the roof, the gutters, and the claim documentation as one visit.',
      },
    ],
    bullets: [
      {
        title: 'Diagnosis first',
        detail: 'We find why the run is failing before quoting a fix, because the symptom is rarely the cause.',
      },
      {
        title: 'Safer ladder work',
        detail: 'The CMAC team handles the elevated inspection and repair work so the property owner does not have to.',
      },
      {
        title: 'Seams done properly',
        detail: 'Old sealant is cut out and the metal cleaned before resealing, not layered over.',
      },
      {
        title: 'Fascia checked every time',
        detail: 'We probe the wood behind the gutter, since rot there defeats any re-hang.',
      },
      {
        title: 'Honest repair-or-replace call',
        detail: 'You get a straight answer on whether the system is worth repairing, in writing.',
      },
    ],
    related: [
      '/services/gutters',
      '/services/gutters/installation',
      '/services/gutters/maintenance',
      '/services/gutters/gutter-guards',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------- gutter guards */
  {
    id: 'gutter-guards',
    category: 'gutters',
    name: 'Gutter Guards',
    headline: 'Get permanent protection with CMAC.',
    summary:
      'Gutter guard systems that keep debris out and let water in — plus an honest look at what each guard type does and does not handle.',
    image: '/svc-gutters-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Eliminate constant gutter cleaning with CMAC durable gutter guards. We ensure water flows freely while keeping all debris out.',
      },
      {
        t: 'p',
        text: 'Three problems push most owners toward guards. The first is the ladder. Cleaning gutters means standing on an extension ladder at the eave line, reaching sideways, with your hands full — a set of conditions that sends a lot of homeowners to the emergency room every year. The second is leaf blockage, which turns a working gutter into a planter and sends overflow down the wall. The third is ice: a trough packed with wet debris cannot drain, and what does not drain freezes.',
      },
      {
        t: 'h2',
        text: 'CMAC’s Gutter Guard systems',
      },
      {
        t: 'p',
        text: 'CMAC installs its own All-Season Gutter Guards, matched to the profile and outlet size of your existing or new gutter. A guard that does not fit the trough it is protecting is worse than no guard at all, which is why the guard conversation and the gutter conversation belong together.',
      },
      {
        t: 'h2',
        text: 'The four guard categories, honestly',
      },
      {
        t: 'p',
        text: 'There is no guard that ends all maintenance. Any manufacturer telling you otherwise is selling. What a good guard does is convert regular ladder work into occasional surface work, and that is a real improvement worth paying for. Here is what each category genuinely does well and where each one struggles.',
      },
      {
        t: 'h3',
        text: 'Micro-mesh',
      },
      {
        t: 'p',
        text: 'A fine stainless or aluminum mesh, often on a rigid frame, laid over the trough. The openings are small enough to stop pine needles, seed pods, and most shingle grit, which is what separates micro-mesh from every cheaper option. It is the only category that reliably handles pine needles, and across East Texas, Arkansas, Georgia, and middle Tennessee that matters a great deal.',
      },
      {
        t: 'p',
        text: 'The tradeoff is surface tension and blinding. Very fine mesh can shed water in a hard downpour if the mesh has gone dirty, and a film of pollen, roof grit, or oak tassel can blind the surface until rain or a brush clears it. Quality varies widely by mesh gauge, frame rigidity, and how the guard is pitched, so installation detail matters more here than in any other category.',
      },
      {
        t: 'h3',
        text: 'Perforated aluminum screen',
      },
      {
        t: 'p',
        text: 'A stamped aluminum panel with round or slotted holes. It is durable, it costs less than micro-mesh, it does not blind easily, and it handles heavy rain volume well because the open area is large. It stops leaves and twigs reliably.',
      },
      {
        t: 'p',
        text: 'It does not stop pine needles, which stand up in the perforations and eventually mat, and it passes shingle grit straight through to the trough. Under oaks or maples it is a strong, economical choice. Under pines it will disappoint you.',
      },
      {
        t: 'h3',
        text: 'Reverse-curve and surface-tension',
      },
      {
        t: 'p',
        text: 'A solid nose that curves back over the front of the gutter, relying on water clinging to the curve and following it into a slot while debris carries past and falls off the edge. Well made and correctly pitched, it sheds leaves effectively and handles moderate rain.',
      },
      {
        t: 'p',
        text: 'The physics has limits. Surface tension is what makes it work, and in a high-intensity downpour water arriving with velocity off a steep roof can overshoot the nose entirely and skip the gutter. Fine debris and shingle grit ride into the slot with the water and accumulate inside, where you cannot see it, and cleaning generally means removing the guard. Many reverse-curve products also mount under the shingle course, which is worth understanding before it happens to a roof under warranty.',
      },
      {
        t: 'h3',
        text: 'Brush and foam inserts',
      },
      {
        t: 'p',
        text: 'Brush guards are a long bottle-brush dropped into the trough; foam inserts are a wedge of open-cell material that fills it. Both are inexpensive, both install in an afternoon, and both keep large leaves from reaching the bottom of the gutter.',
      },
      {
        t: 'p',
        text: 'Neither keeps debris out of the gutter — they keep it on top of an insert that now sits inside the gutter. Fine material sifts in and packs around the bristles or into the foam cells, foam degrades under ultraviolet exposure, and both hold moisture against the trough, which accelerates corrosion on steel. They also become seed beds; finding grass growing out of a foam-filled gutter is common. Treat them as a temporary measure, not a system.',
      },
      {
        t: 'h2',
        text: 'What to weigh before choosing',
      },
      {
        t: 'ul',
        items: [
          'What is actually falling on your roof — pines and needles rule out open screens entirely.',
          'Rainfall intensity where you live, which is the honest limit on reverse-curve designs.',
          'Roof pitch, since steep roofs deliver water fast and make overshoot more likely.',
          'The age of the shingles, because grit shed is heaviest early and again late in a roof’s life.',
          'Whether the guard mounts under the shingles, and what that means for your roof warranty.',
          'Whether the gutter itself is sound, correctly pitched, and sized — no guard fixes any of that.',
        ],
      },
      {
        t: 'note',
        text: 'A guard installed on an undersized or badly pitched gutter makes the underlying problem harder to see and harder to reach. Get the gutter right first, then guard it.',
      },
    ],
    bullets: [
      {
        title: 'Gets you off the ladder',
        detail: 'Routine cleaning becomes occasional surface work instead of repeated trips to the eave.',
      },
      {
        title: 'Matched to your debris',
        detail: 'Needle country and oak country call for different guards, and we specify accordingly.',
      },
      {
        title: 'Sized to your gutter',
        detail: 'Guards are fitted to the trough profile and outlet so flow into the downspout is not choked.',
      },
      {
        title: 'Straight talk on limits',
        detail: 'You get told what a guard will not do before it is installed, not after.',
      },
    ],
    related: [
      '/services/gutters',
      '/services/gutters/installation',
      '/services/gutters/maintenance',
      '/services/gutters/repairs',
    ],
    updated: '2026-08-24',
  },

  /* -------------------------------------------------------------- maintenance */
  {
    id: 'maintenance',
    category: 'gutters',
    name: 'Gutter Maintenance',
    headline: 'Keep the system working before it fails.',
    summary:
      'Clearing, flushing, seam inspection, resealing, pitch correction, and re-securing — the seven-step service that keeps gutters working.',
    image: '/svc-gutters-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Gutter maintenance is the cheapest work you will ever have done on your house, and skipping it is how a two-hundred-dollar clearing becomes a fascia replacement. CMAC’s maintenance service is organized into three tiers of work, performed together on a single visit.',
      },
      {
        t: 'h2',
        text: 'Core System Clearance',
      },
      {
        t: 'p',
        text: 'The foundation of the visit. Leaves, twigs, seed pods, and shingle grit are removed from the troughs, downspouts are flushed until they run clear, and any gutter guards on the system are cleared of surface debris. Grit deserves specific mention: as asphalt shingles age they shed granules continuously, and that mineral sediment settles into the bottom of the trough where it holds moisture and accelerates corrosion. It does not blow out, and it does not wash out on its own.',
      },
      {
        t: 'h2',
        text: 'Performance System Check',
      },
      {
        t: 'p',
        text: 'With the trough clean, the system can actually be inspected. Joints and seams are checked for leaks, miters and end caps are examined, failing sealant is cut out and replaced rather than covered, and gutter pitch is measured and corrected so the run drains toward the outlet instead of holding water. A leak found dry, in daylight, from a ladder is a five-minute repair. The same leak found in December, from the ground, after it has been running down the fascia all fall, is not.',
      },
      {
        t: 'h2',
        text: 'Minor Repair & Security',
      },
      {
        t: 'p',
        text: 'Loose sections are re-secured, hangers are tightened or added where spacing has proven inadequate, and downspout sections that have separated at the elbows or at the wall straps are reconnected. Downspouts coming apart at a joint is the most common single defect found on a maintenance visit, and it is also the fastest to fix.',
      },
      {
        t: 'h2',
        text: 'The seven steps, in order',
      },
      {
        t: 'ul',
        items: [
          'Remove leaves, debris, and shingle grit from the troughs.',
          'Flush the downspouts until they run clear.',
          'Inspect every joint and seam for leaks.',
          'Re-seal wherever a joint has failed.',
          'Check gutter pitch and correct it where the run has lost its fall.',
          'Re-secure loose sections and tighten hangers.',
          'Reconnect separated downspout sections.',
        ],
      },
      {
        t: 'h2',
        text: 'When to schedule it',
      },
      {
        t: 'p',
        text: 'Timing follows two things: what falls on your roof and when the storms come. In the southern states leaf drop runs late — oaks in particular hold leaves well into winter and some species drop again in spring — so a clearing done in early October is frequently plugged again by January. Pines shed needles year-round with heavy flushes in spring and fall.',
      },
      {
        t: 'p',
        text: 'The other half is storm season. Across Texas, Oklahoma, and Arkansas the severe-weather window runs spring into early summer, and the Gulf coast adds a tropical season that runs through the fall. Going into either window with a gutter that cannot move water is how a single storm produces damage that a clean system would have shrugged off. Practically speaking, that means clearing after the bulk of leaf drop is finished, and again ahead of the season that brings the heaviest rain where you live. Homes under heavy canopy need it more often than homes in the open, and no schedule replaces looking at your own gutters during a hard rain.',
      },
      {
        t: 'h2',
        text: 'What maintenance catches early',
      },
      {
        t: 'ul',
        items: [
          'Sealant beginning to release at a miter, before it stains the fascia.',
          'A hanger that has pulled a quarter inch, before it takes its neighbors with it.',
          'Standing water marking a low spot, before the sag becomes permanent.',
          'Grit accumulation that signals the shingles above are further along than you thought.',
          'A downspout separating at the wall, before the discharge starts undercutting the foundation.',
        ],
      },
      {
        t: 'note',
        text: 'CMAC provides a complimentary maintenance quote. The inspection that produces it is free and carries no obligation.',
      },
    ],
    steps: [
      {
        title: 'Clear the troughs',
        detail: 'Leaves, debris, and shingle grit are removed from every run by hand.',
      },
      {
        title: 'Flush the downspouts',
        detail: 'Each leader is flushed until it runs clear from outlet to discharge.',
      },
      {
        title: 'Inspect joints and seams',
        detail: 'Miters, laps, end caps, and outlets are checked for active and incipient leaks.',
      },
      {
        title: 'Re-seal where needed',
        detail: 'Failed sealant is cut out and the joint resealed on clean metal.',
      },
      {
        title: 'Check and correct pitch',
        detail: 'Fall toward the outlet is verified and adjusted where the run has settled.',
      },
      {
        title: 'Re-secure and reconnect',
        detail: 'Loose sections and hangers are tightened, and separated downspouts are reconnected.',
      },
    ],
    bullets: [
      {
        title: 'Core System Clearance',
        detail: 'Debris removal, downspout flushing, and clearing of any gutter guards on the system.',
      },
      {
        title: 'Performance System Check',
        detail: 'Joint and seam inspection, leak detection, re-sealing, and pitch adjustment.',
      },
      {
        title: 'Minor Repair & Security',
        detail: 'Re-securing loose sections, tightening hangers, and reconnecting downspouts.',
      },
      {
        title: 'Complimentary quote',
        detail: 'The maintenance assessment and quote are free, with no obligation to book.',
      },
    ],
    related: [
      '/services/gutters',
      '/services/gutters/repairs',
      '/services/gutters/gutter-guards',
      '/services/gutters/installation',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------- commercial gutters */
  {
    id: 'commercial-gutters',
    category: 'gutters',
    name: 'Commercial Gutters',
    headline: 'Drainage sized for commercial water volume.',
    summary:
      'Box gutters, K-style, half-round, and custom systems in galvanized steel, aluminum, copper, and zinc for commercial buildings.',
    image: '/svc-gutters-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Commercial properties demand drainage systems that can handle significantly higher water volume than residential homes. A warehouse roof, a retail strip, a school, or a distribution center collects water over an area several times a house, and it collects it on planes that are longer, flatter, and less forgiving. Residential-scale gutter hung on a commercial building overflows on the first real storm.',
      },
      {
        t: 'h2',
        text: 'Profiles',
      },
      {
        t: 'ul',
        items: [
          'Box gutters — a rectangular trough with far more cross-sectional area than a comparable K-style, fabricated to the dimension the building actually needs rather than to a stock size. The standard answer on high-volume commercial work.',
          'K-style — the familiar ogee profile, available in commercial widths, good for buildings where volume is moderate and the look matters.',
          'Half-round — a semicircular trough that self-scours because there are no corners for sediment to sit in. Common on institutional, historic, and architectural buildings, often in copper.',
          'Custom systems — brake-formed to a specific profile where a building has an existing detail to match, an unusual fascia condition, or a designed appearance to preserve.',
        ],
      },
      {
        t: 'h2',
        text: 'Materials',
      },
      {
        t: 'p',
        text: 'Galvanized steel is the commercial workhorse. It is stiff enough to span between hangers on wide box profiles, it resists impact and ladder damage, and it can be fabricated heavy. Its life depends entirely on the coating and on keeping standing sediment out of the trough.',
      },
      {
        t: 'p',
        text: 'Aluminum is lighter, will not rust, and is easier to handle on long runs. It comes pre-finished in commercial coatings and works well where volume is manageable and the trough is not spanning far.',
      },
      {
        t: 'p',
        text: 'Copper is the long-service material and it is chosen deliberately. Copper gutters often survive fifty to one hundred years, need no coating, and are soldered rather than sealed, which removes the maintenance item that eventually undoes every other system. Zinc behaves similarly, developing a self-protecting patina and offering a very long service life with a softer gray appearance than copper. Both are architectural choices as much as functional ones.',
      },
      {
        t: 'h2',
        text: 'Sizing to rainfall, not to habit',
      },
      {
        t: 'p',
        text: 'Commercial drainage is sized to two numbers: the tributary roof area feeding each run, and the design rainfall intensity for the location, expressed in inches per hour for a short-duration storm. Multiply them and you get a flow rate, and the trough, outlet, and leader all have to pass it. This is why the same building drawing produces a different gutter schedule in Houston than it would in a low-intensity climate — the Gulf coast design intensity is among the highest in the country, and the plains and the Southeast are not far behind.',
      },
      {
        t: 'p',
        text: 'The trough is rarely the constraint. Outlets and leaders usually are, and undersizing there is the most common defect on commercial buildings. Oversized downspouts and conductors, and conductor heads at the outlets, exist to solve exactly this. A conductor head is an open collection box between the gutter outlet and the leader; it accepts a surge from the trough, gives it somewhere to go while the leader catches up, and, because it is open, tells you visually when a leader below it has plugged. On tall or long-run buildings, they are a functional component rather than an ornament.',
      },
      {
        t: 'h2',
        text: 'Internal drains, overflow, and scuppers',
      },
      {
        t: 'p',
        text: 'Most low-slope commercial roofs drain internally: the membrane is sloped to roof drains set at low points, and piping carries the water down through the building. Perimeter gutters on those buildings handle the eave condition and any water that reaches the edge, but the primary system is inside.',
      },
      {
        t: 'p',
        text: 'Every primary drainage system needs a secondary path, because primary drains block. Model plumbing and building codes require secondary drainage — overflow drains set above the roof surface, or overflow scuppers through the parapet — sized to carry the design storm on the assumption the primary system has failed entirely. The overflow inlet is deliberately set higher than the primary so that visible discharge from a scupper is a signal that something below is plugged. Where a parapet has no scuppers and drains block, ponded water accumulates against a structure that was never designed to hold it, and that is how roofs collapse.',
      },
      {
        t: 'p',
        text: 'Ponding matters even short of that. Standing water on a membrane accelerates aging, loads the deck, and finds the smallest seam defect. Positive drainage — enough slope that the roof drains dry after a storm — is the goal on every low-slope system, and gutter and drain sizing is what makes it achievable at the edge.',
      },
      {
        t: 'h2',
        text: 'What undersized commercial drainage looks like',
      },
      {
        t: 'p',
        text: 'It does not usually present as a gutter complaint. It presents as building damage, and by the time it is obvious it has been happening for years.',
      },
      {
        t: 'ul',
        items: [
          'Fascia and soffit deterioration along one elevation, where the trough overflows first.',
          'Vertical staining and efflorescence down masonry walls below the overflow points.',
          'Saturated insulation and interior ceiling stains at the perimeter, where water enters behind the trough.',
          'Sealant failure at wall penetrations and window heads that repeated sheeting has worked on.',
          'Slab edge cracking, settlement, and heaving pavement where discharge lands next to the building.',
          'Ice at entries and loading docks after a freeze, and the liability that comes with it.',
        ],
      },
      {
        t: 'note',
        text: 'CMAC Roofing and Sheet Metal fabricates and installs commercial gutter systems alongside commercial roofing, so the edge metal, the membrane termination, and the drainage are detailed as one assembly rather than by three different trades.',
      },
    ],
    bullets: [
      {
        title: 'Box and custom profiles',
        detail: 'Troughs fabricated to the cross-section your roof area and rainfall intensity actually require.',
      },
      {
        title: 'Four materials',
        detail: 'Galvanized steel, aluminum, copper, and zinc, specified to service life and building type.',
      },
      {
        title: 'Sized to design rainfall',
        detail: 'Trough, outlet, and leader sized from tributary area and local storm intensity together.',
      },
      {
        title: 'Conductor heads and oversized leaders',
        detail: 'Surge capacity at the outlet, and a visible signal when a leader below has plugged.',
      },
      {
        title: 'Overflow accounted for',
        detail: 'Secondary drainage and scupper conditions reviewed as part of the drainage design.',
      },
      {
        title: 'Sheet metal in house',
        detail: 'Edge metal, terminations, and gutters detailed together with the commercial roof system.',
      },
    ],
    related: [
      '/services/gutters',
      '/services/gutters/installation',
      '/services/gutters/maintenance',
      '/services/exteriors',
    ],
    updated: '2026-08-24',
  },
]
