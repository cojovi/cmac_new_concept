import type { ServiceCategory, ServiceDoc } from '../types'

export const restorationCategory: ServiceCategory = {
  id: 'restoration',
  name: 'Restoration',
  navLabel: 'Restoration',
  headline: 'When Damage Happens, CMAC Responds',
  summary:
    'Water mitigation, storm and fire damage, resurfacing, floor care and odor control, and biohazard cleanup for residential, commercial, and multifamily property.',
  image: '/svc-restoration-clean.jpg',
  body: [
    {
      t: 'p',
      text: 'CMAC delivers reliable restoration. From water mitigation and storm damage to full structural restoration, we deliver fast, professional solutions for residential, commercial, and multifamily properties.',
    },
    {
      t: 'p',
      text: 'Restoration work splits into two phases that get confused with each other constantly. Mitigation is the emergency phase: stop the source, remove the water or the hazard, stabilize the building, and prevent the loss from getting worse. Restoration is the rebuild: replacing what came out, repairing what was damaged, and returning the space to the condition it was in before. CMAC covers both, which means the same contractor who dried the structure is the one who puts it back together.',
    },
    { t: 'h2', text: 'What the restoration division covers' },
    {
      t: 'ul',
      items: [
        'Water mitigation — 24/7 emergency response, extraction, structural drying, moisture monitoring, and reconstruction.',
        'Fire and smoke damage — board-up and stabilization, soot removal, odor remediation, and rebuild.',
        'Resurfacing and refinishing — countertops, tubs, showers, enclosures, and fireplace surrounds restored in place.',
        'Floor care and odor control — carpet cleaning and repair, strip and seal, tile cleaning, pet and smoke odor treatment, and vent cleaning.',
        'Biohazard and trauma cleanup — containment, decontamination, and full site restoration by certified hazmat technicians.',
      ],
    },
    { t: 'h2', text: 'Why speed changes the outcome' },
    {
      t: 'p',
      text: 'Damage compounds. Water wicks up drywall and into framing within hours and creates conditions for microbial growth within days. Soot becomes acidic as it sits and etches metal, glass, and finishes. A biohazard left unaddressed becomes a larger contaminated area. In every case, the size of the eventual repair is set largely by how quickly the first response happens.',
    },
    {
      t: 'p',
      text: 'That is why documentation starts on the first visit. Moisture readings, photographs, affected-material inventories, and daily drying logs are what an insurance adjuster needs to see, and they are far easier to produce while the loss is in front of you than to reconstruct after the fact. CMAC handles insurance claim documentation and adjuster meetings as part of the work.',
    },
    { t: 'h2', text: 'Multifamily and commercial property' },
    {
      t: 'p',
      text: 'A supply line failure on an upper floor of an apartment building is not one loss, it is a vertical column of them. Commercial and multifamily response has to be sequenced: contain the source, triage occupied units, protect common areas, and coordinate around residents and business operations rather than pretending the building is empty. Scheduling and communication matter as much as the equipment.',
    },
    {
      t: 'p',
      text: 'CMAC is veteran-owned and operated, founded and led by Christian Viveiros, holds a BBB A+ rating, and works to the standard “Integrity Truly Matters.” Restoration services are available across Texas — Dallas–Fort Worth, Houston, and Austin — plus Oklahoma, Arkansas, Tennessee, and Georgia. Inspections are free and carry no obligation. Call 1-888-389-CMAC.',
    },
  ],
  updated: '2026-08-24',
}

export const restorationServices: ServiceDoc[] = [
  /* ------------------------------------------------------- water mitigation */
  {
    id: 'water-mitigation',
    category: 'restoration',
    name: 'Water Mitigation',
    headline: 'When water damage strikes, CMAC is ready',
    summary:
      'Rapid-response water mitigation and emergency restoration for residential, commercial, and multi-family properties, with 24/7 emergency response.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC delivers rapid-response water mitigation and emergency restoration services to protect residential, commercial, and multi-family properties. That covers 24/7 emergency response, water extraction and structural drying, moisture detection and monitoring, flood damage cleanup, antimicrobial and mold prevention treatment, debris removal, structural repairs, and full reconstruction services.',
      },
      { t: 'h2', text: 'The first 24 to 48 hours decide the size of the job' },
      {
        t: 'p',
        text: 'Water does not sit still. It moves along framing, wicks vertically up drywall and insulation, runs under baseboard, and travels through wall cavities into rooms that look completely dry. Within the first day or two the loss is still mostly a drying problem. Past that window, under the right temperature and humidity conditions, it starts becoming a microbial problem — and microbial growth changes the scope, the cost, and the health considerations of the whole project.',
      },
      {
        t: 'p',
        text: 'This is why the response matters more than any single piece of equipment. Get the source stopped, get standing water out, get airflow and dehumidification running, and most of what would have been demolition stays in place.',
      },
      { t: 'h2', text: 'Categories of water' },
      {
        t: 'p',
        text: 'The industry classifies water losses by contamination, and the category drives what can be saved. Category 1 is clean water from a sanitary source — a supply line, a water heater, rainwater. Category 2, often called gray water, carries significant contamination: dishwasher and washing machine discharge, toilet overflow with urine only, aquarium water. Category 3, black water, is grossly contaminated — sewage, rising floodwater from outside, seawater, and any water that has been sitting long enough to degrade.',
      },
      {
        t: 'p',
        text: 'Two things about categories catch people out. First, clean water does not stay clean; a Category 1 loss left standing can degrade to Category 2 or 3 as it picks up contaminants and biological activity. Second, category determines whether porous materials such as carpet pad, insulation, and saturated drywall can be dried in place or must be removed. On a Category 3 loss, porous materials come out.',
      },
      { t: 'h2', text: 'Classes of water loss' },
      {
        t: 'p',
        text: 'Where category describes how dirty the water is, class describes how much evaporation load the drying system faces — a function of how much material got wet and how absorbent it is. A small spill on a tile floor and a fully saturated carpeted floor with wet drywall three feet up the wall are entirely different drying problems even though both are clean water. Class is what determines how many air movers and how much dehumidification capacity the space actually needs.',
      },
      { t: 'h2', text: 'Why extraction beats evaporation' },
      {
        t: 'p',
        text: 'Removing a gallon of water with a truck-mounted or portable extractor takes seconds and no energy from the drying system. Evaporating that same gallon takes hours of air mover and dehumidifier runtime, and every bit of it has to be pulled back out of the air afterward. Aggressive extraction — including weighted extraction over carpet and pad — is the highest-value step in the entire process, and skipping it lengthens the job for no benefit.',
      },
      { t: 'h2', text: 'What structural drying actually means' },
      {
        t: 'p',
        text: 'Structural drying is the controlled manipulation of four variables: temperature, humidity, airflow, and time. Air movers do not dry materials directly. They break up the thin saturated boundary layer of air sitting against wet surfaces and accelerate evaporation into the room. Dehumidifiers then remove that moisture from the air so it does not simply redeposit somewhere colder.',
      },
      {
        t: 'p',
        text: 'Refrigerant dehumidifiers condense moisture on a cold coil and drain it away; low-grain refrigerant units perform well in the drier conditions late in a job. Desiccant dehumidifiers adsorb moisture chemically and can pull humidity down further, which is what you want on dense materials such as hardwood, plaster, and structural framing. Specialty drying systems can push air directly into wall cavities, under hardwood, and beneath cabinet toe kicks — reaching water that would otherwise force demolition.',
      },
      { t: 'h2', text: 'Finding water you cannot see' },
      {
        t: 'p',
        text: 'Thermal imaging cameras do not detect moisture. They detect temperature difference, and evaporating water cools a surface, which makes wet areas show as cool anomalies behind finishes. That is how the search gets narrowed quickly across a large area.',
      },
      {
        t: 'p',
        text: 'Confirmation comes from meters. Non-penetrating meters read moisture near the surface without damaging the finish. Penetrating pin meters read moisture inside a material at depth. Thermo-hygrometers track temperature and relative humidity of the affected space, unaffected areas, the outside air, and the dehumidifier discharge — which is how you tell whether the drying system is actually working or just moving air around.',
      },
      { t: 'h2', text: 'Dry means documented, not “looks dry”' },
      {
        t: 'p',
        text: 'The single most common failure in water work is calling a job dry because surfaces feel dry. Framing and subfloor can hold enough moisture behind an apparently dry wall to support growth for months. The correct target is a documented moisture content compared against an unaffected reference area of the same material in the same building, verified with meters and recorded daily until the readings hold.',
      },
      {
        t: 'p',
        text: 'Those daily logs also do double duty. They are the evidence an adjuster uses to justify the scope, and they are your record that the structure was returned to a dry standard rather than closed up wet. Antimicrobial treatment is applied where appropriate, but treatment is not a substitute for drying — moisture control is what prevents mold.',
      },
      {
        t: 'note',
        text: 'If water is still running, shut off the supply at the fixture or the main and cut power to affected areas at the breaker if it is safe to reach. Do not enter standing water where outlets, appliances, or panels are submerged.',
      },
      {
        t: 'p',
        text: 'CMAC responds 24/7 across Texas, Oklahoma, Arkansas, Tennessee, and Georgia, and handles insurance claim documentation and adjuster meetings. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: '24/7 emergency response', detail: 'Crews available around the clock for active and recent water losses.' },
      { title: 'Extraction and structural drying', detail: 'Aggressive water removal followed by engineered air movement and dehumidification.' },
      { title: 'Moisture detection and monitoring', detail: 'Thermal imaging and meters to find hidden water and track it to a dry standard.' },
      { title: 'Flood damage cleanup', detail: 'Contaminated-water response including removal of unsalvageable porous materials.' },
      { title: 'Antimicrobial treatment', detail: 'Mold prevention treatment applied alongside — never instead of — proper drying.' },
      { title: 'Repairs and reconstruction', detail: 'Debris removal, structural repairs, and full rebuild by the same contractor.' },
    ],
    steps: [
      {
        title: 'Emergency response and source control',
        detail: 'The water source is stopped or isolated and hazards such as electrical exposure are addressed before work begins.',
      },
      {
        title: 'Inspection and moisture mapping',
        detail: 'Thermal imaging and moisture meters establish how far the water traveled, including inside wall and floor cavities.',
      },
      {
        title: 'Extraction and removal',
        detail: 'Standing water is extracted and unsalvageable porous materials are removed based on the category of water involved.',
      },
      {
        title: 'Structural drying',
        detail: 'Air movers and dehumidifiers are placed to the size and class of the loss, with specialty systems for cavities and hardwood.',
      },
      {
        title: 'Daily monitoring',
        detail: 'Readings are taken and logged each day and equipment is adjusted until documented dry targets are met.',
      },
      {
        title: 'Repairs and reconstruction',
        detail: 'Once the structure is verified dry, removed materials are replaced and the space is rebuilt.',
      },
    ],
    related: [
      '/services/restoration/fire-smoke-damage',
      '/services/restoration/floor-care-odor-control',
      '/services/restoration/biohazard-trauma-cleanup',
      '/services/restoration',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------ fire and smoke */
  {
    id: 'fire-smoke-damage',
    category: 'restoration',
    name: 'Fire & Smoke Damage Restoration',
    headline: 'Board-up, soot removal, odor remediation, and rebuild',
    summary:
      'Fire damage restoration, smoke odor removal, and reconstruction — emergency board-up, soot cleaning, HVAC decontamination, and full rebuild.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC provides fire damage restoration, smoke odor removal, and reconstruction as part of its storm and disaster response work. A fire loss is rarely a single kind of damage. It is fire, smoke, soot, heat, and the water used to put the fire out, layered on top of each other, and each one needs a different approach.',
      },
      { t: 'h2', text: 'Emergency board-up and stabilization' },
      {
        t: 'p',
        text: 'The first work happens before any cleaning. Openings get boarded, compromised roof areas get covered, and the building gets secured against weather and entry. This is not cosmetic — an unsecured structure keeps taking damage, and an insurer generally expects reasonable steps to prevent further loss. Temporary fencing, lighting, and power may be part of the same visit, and utilities are shut off or isolated where the fire department has not already done so.',
      },
      {
        t: 'p',
        text: 'Nobody re-enters a fire-damaged building until it has been cleared as structurally safe. Heat weakens framing and connections in ways that are not visible from the ground, and floors above a fire are the usual concern.',
      },
      { t: 'h2', text: 'Soot types, and why the wrong method sets a stain permanently' },
      {
        t: 'p',
        text: 'Soot is not one substance. What burned determines what is on the surfaces, and that determines how it must be removed.',
      },
      {
        t: 'ul',
        items: [
          'Dry soot comes from fast, high-temperature fires burning paper and wood. It is powdery and sits loosely on surfaces, and it is removed dry — HEPA vacuuming and chemical sponges first, never a wet wipe, which drives it into the finish.',
          'Wet soot comes from slow, smoldering, low-heat fires burning plastics and rubber. It is sticky, greasy, dense, and strongly odorous, and it needs solvent-based cleaning rather than dry methods.',
          'Protein residue comes from cooking fires. It is nearly invisible, discolors paint and varnish, and carries an intense odor that survives ordinary cleaning entirely.',
          'Fuel oil soot from a furnace puff-back deposits an oily film across an entire building through the duct system.',
        ],
      },
      {
        t: 'p',
        text: 'The critical point is sequence. Wiping dry soot with a damp cloth pushes carbon into porous paint, grout, and stone and sets a stain that no later cleaning removes. Testing an inconspicuous area and matching the method to the residue is what separates a surface that cleans up from a surface that has to be replaced.',
      },
      { t: 'h2', text: 'Why smoke odor outlasts the smoke' },
      {
        t: 'p',
        text: 'Smoke consists of extremely fine particles carried on hot, expanding air. That air seeks cooler surfaces and lower-pressure spaces, which is how odor ends up inside closets, drawers, wall cavities, attic insulation, and rooms far from the fire. Because the particles are so small, they penetrate porous materials — drywall, wood, textiles, carpet pad, upholstery — instead of resting on them.',
      },
      {
        t: 'p',
        text: 'That is the reason a room can be cleaned, look fine, and still smell on the first humid day. Odor treatment has to reach into the material, not just across its surface. Air scrubbing with HEPA and activated carbon filtration removes airborne particulate and gases first, because cleaning while contamination is circulating just moves it around.',
      },
      {
        t: 'h3',
        text: 'Deodorization methods',
      },
      {
        t: 'ul',
        items: [
          'Thermal fogging heats a deodorizing compound into a fine vapor that follows the same paths the hot smoke took, reaching into the cracks and cavities where odor settled.',
          'Hydroxyl and ozone treatments oxidize odor compounds. Ozone requires an unoccupied, sealed space and a clearance period afterward; hydroxyl generators are generally used where occupancy continues.',
          'Sealing encapsulates residual odor in framing and subfloor with a shellac-based or specialty primer once cleaning is complete — a legitimate final step, and a shortcut only if used before cleaning.',
          'Content cleaning handles textiles, soft goods, and hard contents separately, since many items need off-site processing.',
        ],
      },
      { t: 'h2', text: 'HVAC contamination' },
      {
        t: 'p',
        text: 'If the system ran during or after the fire, the duct network distributed soot and odor through the entire building and is now a reservoir that will re-contaminate cleaned rooms every time the system cycles. Ducts, plenums, coils, blower assemblies, and filters all need attention, and the system stays off until it has been addressed. Skipping this is the single most common reason odor returns weeks after a job appeared finished.',
      },
      { t: 'h2', text: 'The second loss: firefighting water' },
      {
        t: 'p',
        text: 'Suppression puts a large volume of water into a building in a short time, and that water carries soot and debris with it. The result is a water loss layered on top of a fire loss, with all the same urgency around extraction, structural drying, and moisture monitoring. Running fire cleaning and water mitigation as one coordinated project rather than two sequential ones is what keeps a fire loss from turning into a mold claim on top of everything else.',
      },
      { t: 'h2', text: 'Reconstruction' },
      {
        t: 'p',
        text: 'What cannot be cleaned or dried gets removed and rebuilt: framing, drywall, insulation, flooring, cabinetry, trim, roofing, and finishes. Having the same contractor carry the job from board-up through reconstruction removes the handoff where scope, documentation, and responsibility usually get lost. CMAC handles insurance claim documentation and adjuster meetings throughout.',
      },
      {
        t: 'note',
        text: 'Do not run the HVAC system, and do not attempt to wipe soot off walls or ceilings before the residue has been identified. Both commonly make the eventual restoration harder and more expensive.',
      },
      {
        t: 'p',
        text: 'Fire and smoke restoration is available across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC for a free, no-obligation inspection.',
      },
    ],
    bullets: [
      { title: 'Emergency board-up', detail: 'Openings secured and the structure protected from weather and entry.' },
      { title: 'Soot and residue removal', detail: 'Cleaning method matched to dry, wet, protein, or fuel-oil residue.' },
      { title: 'Smoke odor remediation', detail: 'Air scrubbing, thermal fogging, and sealing to reach odor inside porous materials.' },
      { title: 'HVAC decontamination', detail: 'Ducts, coils, and blowers addressed so cleaned rooms do not get re-contaminated.' },
      { title: 'Water damage from suppression', detail: 'Extraction and structural drying run alongside the fire cleaning, not after it.' },
      { title: 'Full reconstruction', detail: 'Framing, drywall, flooring, and finishes rebuilt by the same contractor.' },
    ],
    related: [
      '/services/restoration/water-mitigation',
      '/services/restoration/floor-care-odor-control',
      '/services/restoration',
    ],
    updated: '2026-08-24',
  },

  /* --------------------------------------------------------- resurfacing */
  {
    id: 'resurfacing-refinishing',
    category: 'restoration',
    name: 'Resurfacing & Refinishing',
    headline: 'When surfaces wear down, we restore',
    summary:
      'Countertop, tub, shower, enclosure, and fireplace refinishing that revitalizes existing surfaces, improves durability, and extends their lifespan.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'When surfaces show wear, CMAC restores. Refinishing is a cost-effective solution that revitalizes your existing surfaces — enhancing durability, improving appearance, and extending their lifespan. The work covers kitchen countertop refinishing, bathroom countertop resurfacing, tub and shower refinishing, enclosure refinishing, fireplace and hearth refinishing, surface strip and preparation, and protective clear coat finishes.',
      },
      {
        t: 'p',
        text: 'The case for refinishing is simple. Replacing a tub means removing tile, disturbing plumbing, and often opening a wall. Replacing a countertop means pulling the sink and faucet, sometimes the backsplash, and living without a kitchen while it happens. Refinishing addresses the surface in place, which generally makes it faster and far less disruptive than replacement.',
      },
      { t: 'h2', text: 'Why this fits multifamily unit turns' },
      {
        t: 'p',
        text: 'On an apartment or student housing turn, the constraint is days, not dollars alone. A unit that cannot be leased is a unit producing nothing, and replacement work in an occupied building means demolition noise, hallway traffic, dumpsters, and elevator time.',
      },
      {
        t: 'p',
        text: 'Refinishing changes that calculation. A tub, a vanity top, and a surround can be brought back to a clean, uniform finish without opening walls or hauling out debris, and finishes can be standardized across a property so units match regardless of when each one was built or last updated. For property managers running dozens of turns a year, consistency is worth as much as speed.',
      },
      { t: 'h2', text: 'Preparation is the entire job' },
      {
        t: 'p',
        text: 'A refinished surface fails for one reason: the new coating did not bond to the old one. Everything about longevity is decided before any finish is applied.',
      },
      {
        t: 'ul',
        items: [
          'Cleaning and degreasing — soap scum, body oils, cleaning product residue, and silicone from old caulk all prevent adhesion and all have to come off first.',
          'Etching or abrasion — a glossy surface is profiled so the coating has mechanical grip rather than sitting on polished glaze.',
          'Repairs — chips, cracks, and gouges are filled and sanded flush, because a coating follows the shape underneath it and hides nothing.',
          'Caulk removal — old caulk is cut out entirely; coating over silicone guarantees a failure line at the joint.',
          'Masking and ventilation — surrounding surfaces, fixtures, and floors are protected, and the space is ventilated throughout the work.',
          'Primer and topcoat — a bonding primer suited to the substrate, followed by the finish coat and a protective clear coat.',
        ],
      },
      { t: 'h2', text: 'Cure time is not dry time' },
      {
        t: 'p',
        text: 'A refinished tub can feel dry to the touch long before the coating has reached its working hardness. Putting it back into service early is the most common way a good refinish gets ruined, because the finish is still soft enough to imprint, scratch, or lift at the drain.',
      },
      {
        t: 'p',
        text: 'Cure schedules vary by product, temperature, and humidity, so the specific return-to-service time comes with your job rather than from a general figure. Expect to keep the surface dry and unused for the stated period, to leave any drain hardware and caulk work until it is complete, and to hold off on bath mats with suction cups, which are hard on any refinished tub even long after cure.',
      },
      { t: 'h2', text: 'What can and cannot be refinished' },
      {
        t: 'p',
        text: 'Refinishing works on porcelain and enameled steel or cast iron tubs, fiberglass and acrylic tubs and surrounds, ceramic tile walls and countertops, cultured marble, laminate countertops, solid surface material, and masonry fireplace surrounds and hearths. On most of these the surface is sound and only the finish has failed, which is exactly the situation refinishing exists for.',
      },
      {
        t: 'p',
        text: 'It is the wrong answer in a few cases. A tub with structural cracks, soft spots underfoot, or rust perforation through the shell needs replacement — a coating does not restore structure. Surfaces with active water intrusion behind them have a leak problem that has to be fixed first. Natural stone that has been sealed and honed is normally restored by polishing and resealing rather than coating. And a surface that has already been refinished several times may need the previous coatings fully stripped before anything new will bond.',
      },
      {
        t: 'note',
        text: 'After refinishing, clean with a non-abrasive cleaner only. Abrasive powders and scouring pads will dull a clear coat quickly, and that is the most common cause of a finish looking tired early.',
      },
      {
        t: 'p',
        text: 'Resurfacing and refinishing are available for homes, commercial buildings, and multifamily properties across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Kitchen countertops', detail: 'Worn laminate, tile, and solid surface countertops refinished in place.' },
      { title: 'Bathroom countertops and vanities', detail: 'Cultured marble and tile vanity tops resurfaced to a uniform finish.' },
      { title: 'Tubs and showers', detail: 'Porcelain, cast iron, fiberglass, and acrylic tubs and pans refinished without removal.' },
      { title: 'Enclosures and surrounds', detail: 'Tile and one-piece surrounds restored along with the tub for a consistent result.' },
      { title: 'Fireplace and hearth', detail: 'Masonry surrounds and hearths refinished to update a dated focal point.' },
      { title: 'Strip, prep, and clear coat', detail: 'Full surface preparation and a protective clear coat, which is what makes it last.' },
    ],
    related: [
      '/services/restoration/floor-care-odor-control',
      '/services/restoration/water-mitigation',
      '/services/restoration',
    ],
    updated: '2026-08-24',
  },

  /* -------------------------------------------------- floor care and odor */
  {
    id: 'floor-care-odor-control',
    category: 'restoration',
    name: 'Floor Care & Odor Control',
    headline: 'When cleanliness counts, CMAC delivers',
    summary:
      'Carpet cleaning and repair, strip and seal, tile and surface cleaning, pet and smoke odor treatment, and dryer and AC vent cleaning.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Professional floor care and advanced odor control solutions designed to restore cleanliness, eliminate odors at the source, and create healthier indoor environments. Services include carpet cleaning, stain removal treatments, carpet stretching and repairs, strip and seal floor services, tile and surface cleaning, smoke odor removal, pet odor treatment, thermal fogging, and dryer and AC vent cleaning.',
      },
      { t: 'h2', text: 'Odor has a source, and masking is not removal' },
      {
        t: 'p',
        text: 'Air fresheners and scented products add a smell on top of a smell. For a day or two the room seems better, then the covering scent fades and the original odor is exactly where it was. Real odor control removes or chemically destroys the material producing the odor. Anything else is a countdown.',
      },
      {
        t: 'p',
        text: 'Finding the source is most of the work. Odor is almost always coming from a material that absorbed something — carpet pad, subfloor, drywall, upholstery, duct interiors, or the pan under an appliance — and cleaning everything except that material accomplishes very little.',
      },
      { t: 'h2', text: 'Pet odor goes deeper than the carpet' },
      {
        t: 'p',
        text: 'A visible spot on carpet is the smallest part of the problem. Urine passes through the face fiber and the backing, saturates the pad underneath, and spreads outward — the affected area beneath is usually several times larger than what shows on top. From there it reaches the subfloor, soaks into plywood or the seams and cracks of a concrete slab, and wicks up baseboard and the bottom of the drywall.',
      },
      {
        t: 'p',
        text: 'This is why surface cleaning fails on pet odor. It also explains the humidity effect: when the air gets damp, remaining salts reactivate and the smell returns in a room that seemed fine all winter. A UV light will reveal the true extent of contamination and is the honest way to scope the work before starting.',
      },
      {
        t: 'p',
        text: 'Enzymatic treatment is what actually addresses it. Enzymes and beneficial bacteria break down the uric acid crystals and organic material that ordinary detergents leave behind, and they need dwell time to work — applied to the pad and subfloor, not sprayed on the carpet face. Heavy contamination means pad replacement and sealing the subfloor, and there is a point at which the carpet itself has to go. Being told that plainly beats paying repeatedly for cleanings that cannot succeed.',
      },
      { t: 'h2', text: 'Hot water extraction versus low-moisture encapsulation' },
      {
        t: 'p',
        text: 'Hot water extraction — commonly called steam cleaning — injects heated cleaning solution into the carpet under pressure and immediately vacuums it back out along with suspended soil. It is the deepest routine cleaning available and the method most carpet manufacturers specify for warranty maintenance. The trade-off is drying time: airflow matters, and a carpet left wet too long invites the exact odor problem you were trying to solve.',
      },
      {
        t: 'p',
        text: 'Low-moisture encapsulation applies a polymer that crystallizes around soil particles as it dries, and the encapsulated soil is then vacuumed out. It uses a fraction of the water, so an office or a corridor can be back in service in an hour or two. It suits high-traffic commercial glue-down carpet and interim maintenance between deep cleans. Most well-run programs use both: encapsulation on a frequent cycle, extraction periodically to reset.',
      },
      {
        t: 'p',
        text: 'Carpet repair belongs in the same conversation. Ripples and buckles are usually a stretching problem rather than a cleaning problem, and power stretching pulls them out and removes a genuine trip hazard. Burns, permanent stains, and damaged areas can often be patched from a closet or an unseen section rather than replacing the room.',
      },
      { t: 'h2', text: 'Hard floors: strip and seal' },
      {
        t: 'p',
        text: 'VCT and similar resilient tile are protected by layers of floor finish, not by the tile itself. Daily traffic abrades that finish, and once it is worn through, dirt reaches the tile and starts staining it permanently. Regular buffing and periodic recoating extend the life of the finish, but eventually the layers yellow, build up unevenly, and trap soil.',
      },
      {
        t: 'p',
        text: 'A strip and seal removes the old finish down to bare tile with a stripping solution and machine, neutralizes and rinses the floor, and lays down fresh coats of sealer and finish. Doing this on a planned cycle keeps the tile itself protected. Letting it go too long is how a floor gets replaced years earlier than it should have been.',
      },
      {
        t: 'p',
        text: 'Tile and grout are the same story in a different form. Grout is porous, and once the sealer is gone it absorbs everything that lands on it, which is why grout lines darken while the tile still looks fine. Deep cleaning with pressure and extraction followed by resealing restores the line and slows the next round of soiling.',
      },
      { t: 'h2', text: 'Dryer vents are a fire hazard, not a housekeeping item' },
      {
        t: 'p',
        text: 'Lint is highly combustible, and it accumulates through the entire dryer duct, not just in the lint screen. A restricted vent makes the dryer run longer and hotter to do the same work, which raises the temperature inside a duct packed with fuel. Clothes dryers cause thousands of residential structure fires a year in the United States, and failure to clean them is the leading contributing factor.',
      },
      {
        t: 'ul',
        items: [
          'Clothes take noticeably longer than one cycle to dry, or come out hot and still damp.',
          'The laundry room feels humid or unusually warm while the dryer runs.',
          'The exterior vent flap does not open fully, or you can see lint around it.',
          'There is a burning or scorched smell during a cycle.',
        ],
      },
      {
        t: 'p',
        text: 'AC and duct cleaning addresses a related problem. Return ducts collect dust, and evaporator coils and drain pans hold moisture, which is where musty odor circulating through a building usually originates. Cleaning the system removes the reservoir rather than filtering its output forever.',
      },
      {
        t: 'p',
        text: 'Floor care and odor control are available for homes, offices, and multifamily properties across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Carpet cleaning and stain removal', detail: 'Hot water extraction and low-moisture methods matched to the fiber and the traffic.' },
      { title: 'Carpet stretching and repair', detail: 'Power stretching for ripples and patching for burns and damaged sections.' },
      { title: 'Strip and seal', detail: 'VCT and resilient floors stripped to bare tile, resealed, and refinished.' },
      { title: 'Tile and grout cleaning', detail: 'Deep cleaning and resealing to restore grout lines and slow resoiling.' },
      { title: 'Pet and smoke odor treatment', detail: 'Enzymatic treatment and thermal fogging that address the source, not the symptom.' },
      { title: 'Dryer and AC vent cleaning', detail: 'Lint removal from the full duct run and cleaning of ducts, coils, and pans.' },
    ],
    related: [
      '/services/restoration/resurfacing-refinishing',
      '/services/restoration/water-mitigation',
      '/services/restoration/fire-smoke-damage',
      '/services/restoration',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------- biohazard */
  {
    id: 'biohazard-trauma-cleanup',
    category: 'restoration',
    name: 'Biohazard & Trauma Cleanup',
    headline: 'When critical situations arise, CMAC responds with care',
    summary:
      'Trauma scene and biohazard cleanup by certified hazmat technicians — containment, decontamination, and full site restoration, handled with discretion.',
    image: '/svc-restoration-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'If you need this service now, call 1-888-389-CMAC. A trained team can come to the property, take responsibility for the cleanup, and handle it from containment through to restoring the space. You do not have to be the one to do this.',
      },
      {
        t: 'p',
        text: 'CMAC provides professional trauma scene and biohazard cleanup services. From the safe removal of hazardous materials to thorough sanitation and full restoration, our trained team follows strict safety protocols and industry standards — handling every situation with discretion, compassion, and complete confidentiality.',
      },
      { t: 'h2', text: 'What happens when you call' },
      {
        t: 'p',
        text: 'You will be asked a small number of practical questions: the address, what kind of situation it is, whether authorities have released the scene, and who is authorized to be on site. You are not expected to describe more than you want to. If law enforcement or a medical examiner is still working, the property is not released yet, and the response is scheduled for when it is.',
      },
      {
        t: 'p',
        text: 'A technician meets you at the property. You do not need to be present during the work, and many people choose not to be. If you would rather leave and be called when it is finished, that is a normal request and it will be accommodated.',
      },
      { t: 'h2', text: 'What you should not do' },
      {
        t: 'p',
        text: 'Do not attempt to clean the area yourself. This is not about the difficulty of the work. Bloodborne pathogens including hepatitis B, hepatitis C, and HIV can remain infectious on surfaces, and household cleaning products and equipment are not designed to make an area safe. Ordinary vacuums can aerosolize contamination rather than contain it.',
      },
      {
        t: 'p',
        text: 'Keep other people, and pets, out of the affected area until it has been handled. Beyond the health question, cleaning a scene involving someone you know is a lasting burden that people take on in shock and carry afterward. There is no obligation on you to do it.',
      },
      { t: 'h2', text: 'How the work is done' },
      {
        t: 'p',
        text: 'The affected area is contained first, so that nothing spreads into the rest of the property. Technicians work in personal protective equipment appropriate to the exposure. Contaminated porous materials — carpet, pad, subfloor, drywall, upholstered furniture, bedding — are removed when they cannot be decontaminated, because porous material absorbs and cannot be reliably cleaned to a safe standard.',
      },
      {
        t: 'p',
        text: 'Remaining surfaces are cleaned and then treated with hospital-grade disinfectants at the correct dwell times. Odor is addressed at its source rather than covered. Regulated waste is packaged, labeled, and transported for disposal through licensed channels, with documentation.',
      },
      {
        t: 'p',
        text: 'Restoration follows. Materials that were removed are replaced, surfaces are repaired and refinished, and the room is returned to a normal condition. Insurance frequently covers this work; CMAC handles claim documentation and adjuster meetings so that the paperwork is not one more thing on you.',
      },
      { t: 'h2', text: 'Credentials and compliance' },
      {
        t: 'ul',
        items: [
          'Certified Hazmat Technicians.',
          'OSHA and EPA compliant procedures for handling and disposal.',
          'Discreet and respectful service — unmarked arrival where possible, and no discussion of the situation with neighbors or anyone not authorized.',
          'Complete confidentiality.',
          'Full site restoration, not just cleanup.',
        ],
      },
      { t: 'h2', text: 'Situations this covers' },
      {
        t: 'p',
        text: 'Trauma and accident scenes, unattended death, blood and other potentially infectious material, hoarding conditions, sewage backup, chemical residue, and other conditions that require containment and regulated disposal rather than ordinary cleaning.',
      },
      {
        t: 'note',
        text: 'If there is an ongoing emergency or anyone is in danger, call 911 first. This service begins once the scene has been released.',
      },
      {
        t: 'p',
        text: 'Available across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Certified hazmat technicians', detail: 'Trained personnel handling containment, removal, and regulated disposal.' },
      { title: 'OSHA and EPA compliant', detail: 'Procedures and waste handling that follow federal safety and disposal standards.' },
      { title: 'Discreet and respectful', detail: 'Quiet arrival, no signage where avoidable, and complete confidentiality.' },
      { title: 'Full site restoration', detail: 'Removed materials replaced and the space returned to normal condition.' },
    ],
    steps: [
      {
        title: 'Immediate response and site evaluation',
        detail: 'A technician assesses the affected area, identifies the extent of contamination, and confirms who is authorized on site.',
      },
      {
        title: 'Secure containment and safety measures',
        detail: 'The area is isolated to prevent spread, and technicians work in personal protective equipment suited to the exposure.',
      },
      {
        title: 'Hazard removal and decontamination',
        detail: 'Contaminated materials are removed and packaged for regulated disposal, and remaining surfaces are cleaned and disinfected.',
      },
      {
        title: 'Final inspection and site restoration',
        detail: 'The area is verified clean, removed materials are replaced, and the space is restored to normal condition.',
      },
    ],
    related: [
      '/services/restoration/water-mitigation',
      '/services/restoration/floor-care-odor-control',
      '/services/restoration',
    ],
    updated: '2026-08-24',
  },
]
