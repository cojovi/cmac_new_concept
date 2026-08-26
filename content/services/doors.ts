import type { ServiceCategory, ServiceDoc } from '../types'

export const doorsCategory: ServiceCategory = {
  id: 'doors',
  name: 'Doors',
  navLabel: 'Doors',
  headline: 'Expert Garage Door Installation & Repair Services',
  summary:
    'CMAC installs and repairs residential and commercial garage doors — wood, steel, aluminum, and glass — with 24/7 emergency repair service.',
  image: '/svc-doors-clean.jpg',
  body: [
    {
      t: 'p',
      text: 'CMAC provides dependable, high-quality garage doors — from wood to glass — installed by expert technicians. The work covers new construction, retail replacement, commercial and industrial openings, opener systems, and repairs when a door stops working the way it should.',
    },
    {
      t: 'p',
      text: 'A garage door is usually the largest moving object in a building. On a house it is often a third of the front elevation; on a warehouse it is the only thing standing between inventory and the weather. Either way it is a system, not a slab: sections, hinges, rollers, track, cables, drums, springs, and an operator all have to stay in balance for the door to open quietly and close safely.',
    },
    { t: 'h2', text: 'What the doors division covers' },
    {
      t: 'ul',
      items: [
        'Residential garage doors — retail replacement and upgrades, new construction, and insurance claim work.',
        'Commercial and industrial doors — rolling steel, loading dock doors, security gates, and heavy-duty insulated sectionals.',
        'Openers — repair, replacement, smart and silent drive upgrades, keypads, and safety tune-ups.',
        'Repair — springs, cables, rollers, bent track, off-track doors, sensors, and electrical troubleshooting.',
        'Manufacturer partners — doors sourced from established names with real parts and warranty support behind them.',
      ],
    },
    { t: 'h2', text: 'Material choices, in plain terms' },
    {
      t: 'p',
      text: 'Steel is the volume material. It takes paint and embossed woodgrain well, resists warping, and can be built as a single skin or as a sandwich with insulation between two skins. Aluminum is lighter and will not rust, which makes it the frame of choice for full-view glass sections. Wood carries a look nothing else quite matches — real carriage doors, stain-grade overlays, custom widths — at the cost of periodic refinishing. Glass sections turn a garage into a room with light in it, and are increasingly used on shops, showrooms, and patio-facing residential bays.',
    },
    {
      t: 'p',
      text: 'Insulation is the specification most people skip and later regret. An uninsulated door on an attached garage lets the garage swing with the outdoor temperature, and that garage shares a wall and a ceiling with conditioned space. An insulated door turns the garage into a thermal buffer instead of a heat source.',
    },
    { t: 'h2', text: 'Why installation quality decides how long a door lasts' },
    {
      t: 'p',
      text: 'Most premature garage door failures are not manufacturing defects. They are installation problems: track set out of plumb, spring wound to the wrong turn count for the door weight, hardware sized for a lighter panel, or a header that was never checked for square. A correctly balanced door should hold position when lifted halfway by hand with the opener disconnected. If it slams down or climbs on its own, the spring system is fighting the door and every cycle is costing life off the opener.',
    },
    {
      t: 'p',
      text: 'CMAC is veteran-owned and operated, founded and led by Christian Viveiros, with a BBB A+ rating and the same “Integrity Truly Matters” standard applied to a garage bay that gets applied to a roof. Inspections are free and carry no obligation. Service runs across Texas — Dallas–Fort Worth, Houston, and Austin — plus Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
    },
    {
      t: 'note',
      text: '24/7 emergency repair service is available for doors that are stuck open, stuck closed, or off their track.',
    },
  ],
  updated: '2026-08-24',
}

export const doorsServices: ServiceDoc[] = [
  /* ------------------------------------------------------------ residential */
  {
    id: 'residential-garage-doors',
    category: 'doors',
    name: 'Residential Garage Doors',
    headline: 'The residential garage door experts',
    summary:
      'Expert installation, replacement, and repairs for homeowners — retail upgrades, new builds, and hassle-free insurance claims.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC handles the full range of residential garage door work: retail sales and upgrades, new construction installation, insurance claim services, and repairs. Whether you are replacing a twenty-year-old builder-grade door, specifying doors for a house under construction, or working through a claim after a storm or an impact, the process starts with a free, no-obligation inspection.',
      },
      {
        t: 'p',
        text: 'It is worth being blunt about what a garage door is. It is the largest moving object in most houses, it cycles thousands of times over its life, and it is usually the single biggest element of the front elevation. Replacing a tired door changes how the house reads from the street more than almost any other exterior item at a comparable scope of work.',
      },
      { t: 'h2', text: 'How a sectional door is actually built' },
      {
        t: 'p',
        text: 'A modern residential door is sectional: four or five horizontal panels hinged together, riding rollers in a vertical track that curves back into a horizontal track under the ceiling. That hinge line is what lets a door eight feet tall live in a garage with a seven-foot ceiling. The counterbalance — almost always a torsion spring on a shaft above the opening — carries the weight so the opener only has to move a nearly balanced load.',
      },
      {
        t: 'p',
        text: 'The track radius matters more than it sounds. Standard radius track needs the most headroom. Low-headroom track uses a tighter curve and a double-track arrangement for tight garages. High-lift track raises the door further before it turns horizontal, which is what you want in a garage with a lift or tall ceilings. Getting this wrong at the specification stage is expensive to fix later.',
      },
      { t: 'h2', text: 'Single, double, and triple-layer steel' },
      {
        t: 'p',
        text: 'Single-layer steel is one skin with no insulation — the least expensive option and the loudest. Double-layer adds polystyrene bonded to the back of the skin. Triple-layer, sometimes called sandwich construction, puts insulation between two steel skins, which makes the section stiffer, quieter, and far more resistant to the dents and flex that show up on thin single-skin doors.',
      },
      {
        t: 'p',
        text: 'R-value measures resistance to heat flow; higher is better. It is genuinely relevant on an attached garage, because that garage shares a wall with the house and often sits under a bedroom. A garage that runs near outdoor temperature all summer pushes heat through that shared wall around the clock. An insulated door does not make the garage conditioned space, but it narrows the swing and takes load off the adjacent rooms. It also cuts noise — both the door operating and everything happening outside.',
      },
      {
        t: 'note',
        text: 'Compare R-values only between doors tested the same way. A number quoted for the insulation alone is not the same as a number for the assembled section.',
      },
      { t: 'h2', text: 'Windows, style, and hardware' },
      {
        t: 'p',
        text: 'Window sections are the fastest way to change the character of a door. Placement is a design decision: the top section is standard and delivers daylight without giving anyone a view of what is in the garage, while full-view glass turns the whole door into a wall of light. Glass options run from clear to obscure, tinted, insulated, and frosted. Obscure glass is the usual answer when you want the light but not the sightline.',
      },
      {
        t: 'p',
        text: 'Hardware follows the same logic. Heavier doors need heavier hinges, longer-stem rollers, and thicker track. Nylon rollers with sealed bearings run noticeably quieter than the plain steel rollers packed with entry-level doors, and they are one of the least expensive upgrades available at installation.',
      },
      { t: 'h2', text: 'New construction and insurance claims' },
      {
        t: 'p',
        text: 'On new construction, the door goes in after the opening is framed and the header is verified. Coordinating early lets the opening, the headroom, the backroom, and the electrical rough-in match the door and operator actually being installed rather than forcing a compromise at the end of the job.',
      },
      {
        t: 'p',
        text: 'On insurance work — hail, wind, or vehicle impact — CMAC handles claim documentation and meets with the adjuster. Damaged sections, bent track, and a bowed door that no longer seals are all documentable conditions. Bring the claim number and the inspection report to the same conversation and the process moves considerably faster.',
      },
    ],
    bullets: [
      { title: 'Retail sales and upgrades', detail: 'Replacement doors and upgrades for homes with an existing opening.' },
      { title: 'New construction installation', detail: 'Door and opener specified alongside the framing rather than after it.' },
      { title: 'Insurance claim services', detail: 'Damage documentation and adjuster meetings handled as part of the job.' },
      { title: 'Garage door repairs', detail: 'Springs, rollers, track, cables, and sections serviced without a full replacement.' },
      { title: 'Insulated construction', detail: 'Double and triple-layer steel options that quiet the door and buffer an attached garage.' },
      { title: 'Free inspection', detail: 'A no-obligation look at the door, the balance, and the hardware before anything is quoted.' },
    ],
    brandIds: ['clopay', 'wayne-dalton', 'amarr', 'northwest-door'],
    related: [
      '/services/doors/openers',
      '/services/doors/repair',
      '/services/doors/brands',
      '/services/doors/gallery',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },

  /* ------------------------------------------------------------- commercial */
  {
    id: 'commercial-garage-doors',
    category: 'doors',
    name: 'Commercial Garage Doors',
    headline: 'The commercial garage door experts',
    summary:
      'Installation, replacement, and repair for commercial and industrial properties — roll-up doors, dock doors, security gates, and insulated sectionals.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC installs, replaces, and repairs doors on commercial and industrial buildings: high-traffic roll-up doors, custom loading dock doors, specialized security gates, and heavy-duty insulated sectional doors. The division also handles door system upgrades, access control and automation, new construction installation, and insurance claim services.',
      },
      {
        t: 'p',
        text: 'A commercial door is a piece of operating equipment. When it stops, trucks stop, and the cost of the outage usually dwarfs the cost of the door. That changes how the specification should be approached: the question is not which door is cheapest to hang, but which door survives the duty cycle the building actually imposes on it.',
      },
      { t: 'h2', text: 'Cycle life is the specification that matters most' },
      {
        t: 'p',
        text: 'Springs and door systems are rated in cycles — one cycle is one full open and one full close. A door rated for 10,000 cycles sounds like a lot until you put it on a dock that runs 100 cycles a day. At that rate the rating is consumed in roughly three to four months of operation, and the failure will happen mid-shift with a trailer backed in.',
      },
      {
        t: 'p',
        text: 'Count the real traffic before selecting hardware. High-cycle spring packages, heavier bearings, and commercial operators cost more up front and are almost always cheaper over the life of the opening than repeated emergency service on an under-rated assembly. The same arithmetic applies to rollers, hinges, and the operator itself.',
      },
      { t: 'h2', text: 'Rolling steel versus sectional' },
      {
        t: 'p',
        text: 'Rolling steel doors are built from interlocking horizontal slats that coil onto a barrel above the opening. They consume almost no ceiling space, tolerate abuse, and suit tight openings, service bays, storage facilities, and anywhere sprinklers, piping, or low structure rule out horizontal track. Insulation options exist but are more limited than on sectionals.',
      },
      {
        t: 'p',
        text: 'Sectional doors run panels back along horizontal track under the ceiling. They insulate better, seal better, and accept windows, which is why they dominate on conditioned warehouses, distribution buildings, and anywhere the door is part of the thermal envelope. Heavy-duty insulated sectionals are the usual answer on cold storage and climate-sensitive space.',
      },
      { t: 'h2', text: 'High-lift and vertical-lift track' },
      {
        t: 'p',
        text: 'Standard track turns the door horizontal immediately, which eats overhead space. High-lift track carries the door further up the wall before it turns, freeing the area directly inside the opening for a lift, a conveyor, or racking. Vertical-lift track takes the door straight up the full height of the wall, which is what tall industrial bays and some dock configurations need. Both require adequate headroom and a structurally sound wall above the opening, so this gets verified on site before anything is ordered.',
      },
      { t: 'h2', text: 'Loading docks are a system, not a door' },
      {
        t: 'p',
        text: 'A dock opening is a door plus a leveler plus a seal or shelter plus bumpers, and each part protects the others. A worn dock seal lets conditioned air and weather in around the trailer. A failing leveler transfers shock into the door and the wall. Missing or crushed bumpers let a trailer strike the building itself. Servicing these together is how you stop the same door from being damaged repeatedly.',
      },
      { t: 'h2', text: 'Fire doors and life safety' },
      {
        t: 'p',
        text: 'Rolling fire doors are held open by a release mechanism designed to drop the door when heat or an alarm signal triggers it. Those assemblies are life-safety equipment, subject to inspection and drop-testing requirements, and they must never be blocked, chained, or obstructed by stored product. If a fire door has been painted over, propped, or shimmed, it has to be treated as a compliance problem and not a cosmetic one.',
      },
      { t: 'h2', text: 'Operators, photo-eyes, and safety edges' },
      {
        t: 'p',
        text: 'Commercial operators are selected by duty: standard duty for occasional use, medium and heavy duty for continuous cycling, with hoist chains for manual operation during a power failure. Entrapment protection is required on powered doors — photo-eyes across the opening, a monitored safety edge on the bottom bar, or both, depending on the door and the control type. Constant-pressure controls exist for exactly this reason and should never be defeated with a taped-down button.',
      },
      {
        t: 'p',
        text: 'CMAC serves commercial and multifamily property across Texas, Oklahoma, Arkansas, Tennessee, and Georgia, and handles insurance claim documentation and adjuster meetings when a door is damaged. Call 1-888-389-CMAC to schedule a free, no-obligation site inspection.',
      },
    ],
    bullets: [
      { title: 'Roll-up doors', detail: 'Rolling steel for high-traffic openings where headroom is limited.' },
      { title: 'Loading dock doors', detail: 'Dock openings specified with levelers, seals, and bumpers as one system.' },
      { title: 'Security gates', detail: 'Specialized gates and grilles for storefronts, parking, and secured access.' },
      { title: 'Insulated sectionals', detail: 'Heavy-duty insulated doors for conditioned warehouse and cold storage space.' },
      { title: 'Access control and automation', detail: 'Operators, controls, and automation matched to the door’s real duty cycle.' },
      { title: 'Insurance claim services', detail: 'Damage documentation and adjuster coordination on commercial losses.' },
    ],
    brandIds: ['overhead-door', 'clopay', 'wayne-dalton', 'amarr'],
    related: [
      '/services/doors/residential-garage-doors',
      '/services/doors/openers',
      '/services/doors/repair',
      '/services/doors/brands',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },

  /* ---------------------------------------------------------------- openers */
  {
    id: 'openers',
    category: 'doors',
    name: 'Garage Door Openers',
    headline: 'Smart, secure opener systems',
    summary:
      'Opener repair, replacement, and smart upgrades — belt-drive, chain, and wall-mount systems, keypads, safety checks, and emergency service.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC eliminates the hassle and risks of dealing with unreliable openers by offering state-of-the-art smart and silent access systems. That covers opener repair and troubleshooting, new installation and smart upgrades, belt-drive, chain, and wall-mount systems, keypad upgrades, safety checks and system tune-ups, and emergency repairs.',
      },
      {
        t: 'p',
        text: 'An opener is not what lifts the door. The springs do that. The opener guides a balanced door up and down and holds it closed. When an opener struggles, strains, or reverses partway, the first thing to check is almost never the opener — it is the balance of the door it is attached to.',
      },
      { t: 'h2', text: 'Drive types and what they sound like' },
      {
        t: 'p',
        text: 'Chain drive pulls the trolley with a metal chain. It is durable and inexpensive, and it is the loudest option — a real consideration if anyone sleeps over or beside the garage. Belt drive replaces the chain with a reinforced rubber belt and is dramatically quieter; it is the default recommendation for attached garages under living space. Screw drive turns a threaded steel rod, with fewer moving parts and a middle-ground noise level. Wall-mount jackshaft units mount beside the door on the torsion shaft, which removes the rail and motor from the ceiling entirely.',
      },
      {
        t: 'p',
        text: 'The jackshaft configuration is worth knowing about for two reasons beyond noise. It frees the ceiling for storage or a lift, and it is often the only workable option on high-lift or low-headroom track where a ceiling-mounted rail has nowhere to go.',
      },
      { t: 'h2', text: 'DC motors and battery backup' },
      {
        t: 'p',
        text: 'Modern openers generally use DC motors with soft start and soft stop, which is easier on the door and quieter through the travel. DC also makes battery backup practical: the opener keeps working through a power outage instead of forcing you to pull the emergency release and lift a heavy door by hand.',
      },
      {
        t: 'p',
        text: 'Battery backup is not only a convenience feature. Some states now require battery backup on newly installed or replaced residential garage door openers, following incidents where people were trapped by doors they could not open during power failures. It is worth confirming the requirement in your jurisdiction before selecting a unit.',
      },
      { t: 'h2', text: 'Security: rolling codes and smart control' },
      {
        t: 'p',
        text: 'Older fixed-code remotes transmitted the same code every time, which made them straightforward to capture and replay. Rolling-code systems change the code on every use, so an intercepted transmission is already dead. If your opener predates rolling code, that is a genuine security reason to replace it, separate from anything mechanical.',
      },
      {
        t: 'p',
        text: 'Wi-Fi-connected openers add remote operation, open and close notifications, and scheduled auto-close from a phone. They also let you confirm the door is shut without driving home. Keep the app account on a strong, unique password — the connected opener is a door into the house, and it deserves the same treatment as any other credential.',
      },
      {
        t: 'p',
        text: 'Exterior keypads remain the most practical way to give access to family, a service visit, or a delivery without handing out a remote. Codes can be changed after the fact, and temporary codes can be issued and retired.',
      },
      { t: 'h2', text: 'The photo-eye reversal system and how to test it' },
      {
        t: 'p',
        text: 'Residential openers manufactured since the early 1990s are required to include an external entrapment protection system. In practice that means a pair of photo-eyes mounted no more than six inches above the floor on either side of the opening, projecting an invisible beam across the door path. Break the beam while the door is closing and the door must stop and reverse.',
      },
      {
        t: 'ul',
        items: [
          'Beam test: with the door fully open, press close and wave a broom handle or a box through the beam. The door should reverse immediately and fully.',
          'Contact reversal test: lay a 2x4 flat on the floor in the door path and close the door onto it. On contact the door should reverse.',
          'Balance test: pull the emergency release with the door closed, lift the door by hand to waist height, and let go. A balanced door holds. If it drops or rises, the spring system needs service, not the opener.',
          'Alignment check: steady indicator lights on both photo-eyes mean alignment is good. A blinking or dark sensor means the beam is broken, misaligned, or the wiring is damaged.',
        ],
      },
      {
        t: 'note',
        text: 'If a door will not reverse on either test, stop using the opener and disconnect it until the system is repaired. Do not tape, bypass, or relocate the photo-eyes to make a fault go away.',
      },
      {
        t: 'p',
        text: 'CMAC services openers across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Repair and troubleshooting', detail: 'Diagnosis of openers that hum, reverse, stall, or refuse to close.' },
      { title: 'New installation and smart upgrades', detail: 'Replacement units with Wi-Fi control, rolling-code security, and app notifications.' },
      { title: 'Belt, chain, and wall-mount', detail: 'Drive type matched to the garage layout and how much noise you can live with.' },
      { title: 'Keypad upgrades', detail: 'Exterior keypads for keyless entry with codes you can change or retire.' },
      { title: 'Safety check and tune-up', detail: 'Photo-eye alignment, reversal testing, force settings, and hardware inspection.' },
      { title: 'Emergency repairs', detail: 'Service for doors left stuck open or stuck closed by an opener failure.' },
    ],
    related: [
      '/services/doors/repair',
      '/services/doors/residential-garage-doors',
      '/services/doors/commercial-garage-doors',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },

  /* ----------------------------------------------------------------- repair */
  {
    id: 'repair',
    category: 'doors',
    name: 'Garage Door Repair',
    headline: 'Your expert in garage door repair',
    summary:
      'Diagnostics, repair, and parts replacement — broken springs, cables, rollers, bent track, electrical troubleshooting, and off-track doors.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'CMAC provides expert diagnostics, repair, and parts replacement for homeowners, including broken springs, electrical and sensor troubleshooting, and off-track doors. Most repairs come down to one of a short list of failures, and knowing which one you are looking at tells you whether it is a service call or something more.',
      },
      { t: 'h2', text: 'Springs: the most common failure, and the most dangerous' },
      {
        t: 'p',
        text: 'Torsion springs mount on a shaft above the opening and wind up as the door lowers. Extension springs run along the horizontal tracks on either side and stretch as the door closes. Torsion is the more common modern arrangement, is more stable through travel, and generally lasts longer. Extension springs must have containment cables running through them so that a broken spring cannot become a projectile.',
      },
      {
        t: 'p',
        text: 'Springs fail more often than anything else on a door because they are the part doing the work. They are rated in cycles, and a standard spring rated around 10,000 cycles reaches the end of its design life in roughly seven years at four cycles a day, faster on a busy household. High-cycle springs cost more and last proportionally longer, which is usually the right call on a door that gets heavy use.',
      },
      {
        t: 'note',
        text: 'A torsion spring stores an enormous amount of energy even when the door is closed. Winding, unwinding, or replacing one without the correct bars and technique causes serious injuries every year. This is not a DIY repair. If a spring is broken, leave the door down and call for service.',
      },
      { t: 'h2', text: 'Cables, drums, rollers, and bearings' },
      {
        t: 'p',
        text: 'Lift cables run from the bottom bracket to grooved drums on the torsion shaft. When a spring breaks, cables often slip off the drums or shred; when a cable frays or snaps first, the door drops on one side and jams in the track. Bottom brackets are under cable tension for the same reason springs are dangerous, and they get the same respect.',
      },
      {
        t: 'p',
        text: 'Rollers and their bearings are the quiet-versus-loud part of the equation. Worn steel rollers with sloppy bearings grind, chatter, and eventually let the roller stem work sideways out of the track. Nylon rollers on sealed bearings are quieter and a common upgrade during any repair that already has the door apart. Center bearings and end bearing plates on the torsion shaft also wear, and a squealing shaft under load is usually a bearing, not the spring.',
      },
      { t: 'h2', text: 'Bent track and off-track doors' },
      {
        t: 'p',
        text: 'A door comes off track after an impact, after a cable failure, or after being closed onto an obstruction. Once a roller is out, the door is unsupported on that side and the panel is taking load it was never meant to carry. Do not run the opener to “work it back in” — that bends track, tears hinges out of sections, and turns a repair into a replacement. Disconnect the opener and leave the door alone until it can be serviced.',
      },
      { t: 'h2', text: 'Electrical, sensors, and opener faults' },
      {
        t: 'p',
        text: 'The single most common “my door will not close” call is a misaligned or obstructed photo-eye. The safety system is doing exactly what it is designed to do: if the beam between the two sensors is broken, the opener refuses to close. A bumped bracket, a cobweb, a stored bin, direct sunlight into the receiver, or a nicked sensor wire will all produce the same symptom, usually with the opener light flashing a fault code.',
      },
      {
        t: 'p',
        text: 'The other frequent opener failure is a stripped drive gear. The motor runs and hums, the door does not move, and there is often a small pile of plastic shavings under the unit. On many openers a gear kit is a repair rather than a replacement — but if the door was out of balance, the gear will strip again unless the springs are corrected too.',
      },
      {
        t: 'p',
        text: 'Other electrical faults worth ruling out before replacing anything: a tripped GFCI or breaker, force and travel limits knocked out of adjustment, a stuck wall button, remotes that need reprogramming after a power event, and a lock mode accidentally engaged on the wall console.',
      },
      { t: 'h2', text: 'Sections and weather seal' },
      {
        t: 'p',
        text: 'Individual sections can often be replaced rather than the whole door, provided the model is still available — one more reason manufacturer choice matters years after installation. Bottom weather seal, or astragal, is a wear item that hardens and cracks over time and is the usual culprit behind water and debris under a closed door. Perimeter stop molding seals the sides and head.',
      },
      {
        t: 'p',
        text: 'Free, no-obligation inspections are available across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Call 1-888-389-CMAC.',
      },
    ],
    bullets: [
      { title: 'Springs', detail: 'Torsion and extension spring replacement, including high-cycle upgrades.' },
      { title: 'Cables and drums', detail: 'Frayed or slipped lift cables, drums, and bottom brackets brought back into balance.' },
      { title: 'Rollers and bearings', detail: 'Worn rollers, center bearings, and end plates replaced to quiet the door.' },
      { title: 'Track and off-track doors', detail: 'Bent track straightened or replaced and the door reseated safely.' },
      { title: 'Electrical and sensors', detail: 'Photo-eye alignment, wiring faults, limits, force settings, and remote programming.' },
      { title: 'Diagnostics', detail: 'A full balance and hardware check so the repair fixes the cause, not the symptom.' },
    ],
    steps: [
      {
        title: 'Balance and safety check',
        detail: 'The opener is disconnected and the door is lifted by hand to see whether the spring system is actually carrying the weight.',
      },
      {
        title: 'Visual hardware inspection',
        detail: 'Springs, cables, drums, rollers, hinges, brackets, track, and the bottom seal are checked for wear, bends, and fatigue.',
      },
      {
        title: 'Operator and electrical test',
        detail: 'Photo-eye alignment, reversal behavior, travel and force limits, wall control, remotes, and power are verified.',
      },
      {
        title: 'Diagnosis and options',
        detail: 'You get the actual cause, what it takes to fix it, and an honest read on repair versus replacement.',
      },
      {
        title: 'Repair and retest',
        detail: 'Parts are replaced, the door is rebalanced, and both reversal tests are run again before the technician leaves.',
      },
    ],
    related: [
      '/services/doors/openers',
      '/services/doors/residential-garage-doors',
      '/services/doors/commercial-garage-doors',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },

  /* ----------------------------------------------------------------- brands */
  {
    id: 'brands',
    category: 'doors',
    name: 'Garage Door Vendors',
    headline: 'Our trusted partners: industry-leading door vendors',
    summary:
      'CMAC partners only with proven, trusted door manufacturers — superior engineering, high-grade materials, and robust warranties behind every install.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'Built on trust: CMAC eliminates risk by partnering only with proven, trusted manufacturers offering superior engineering, high-grade materials, and robust warranties. The door you choose is one decision. The company standing behind it is a decision you live with for as long as the door is on the building.',
      },
      { t: 'h2', text: 'Why the manufacturer matters years later' },
      {
        t: 'p',
        text: 'A garage door is not a one-time purchase. At some point a section gets backed into, a panel style needs matching, glass gets replaced, or hardware has to be sourced to fit an existing track. Established manufacturers keep parts channels open and publish model documentation, which means a fifteen-year-old door can often be repaired instead of replaced. Off-brand and unbranded doors frequently cannot, and a single damaged section turns into a whole new door.',
      },
      {
        t: 'p',
        text: 'Warranty language is the second reason. Terms vary by manufacturer, by product line, and by whether the door was installed by an authorized dealer, and they typically treat the section, the finish, the hardware, and the springs as separate items with separate coverage. Read what is actually covered and for how long rather than reacting to a headline number, and keep the model and serial information from the installation — it is what a parts request starts from.',
      },
      { t: 'h2', text: 'What separates a well-built door' },
      {
        t: 'ul',
        items: [
          'Steel gauge and section construction — a thicker skin and a true insulated sandwich resist denting and flex far better than a single thin skin.',
          'Finish system — a factory-applied multi-layer coating over treated steel holds color and resists chalking longer than a single topcoat.',
          'Hardware grade — hinge thickness, roller quality, and track gauge are usually where a low price is quietly recovered.',
          'Spring rating — the cycle life packaged with the door tells you how the manufacturer expects it to be used.',
          'Weather sealing — a bottom astragal in a proper retainer, plus perimeter seals, is what keeps water and debris out.',
          'Documentation and parts availability — model numbers, published specs, and a real dealer channel for replacement sections.',
        ],
      },
      { t: 'h2', text: 'The manufacturers CMAC works with' },
      {
        t: 'p',
        text: 'CMAC sources residential and commercial doors from Clopay, Wayne Dalton, Amarr, Overhead Door, and Northwest Door. Each of these is a long-established name with residential and commercial product lines, published specifications, and a parts channel that is still going to be there when a door needs service.',
      },
      {
        t: 'p',
        text: 'Selection follows the opening, not the other way around. A conditioned warehouse needs a different door than a self-storage bay; a custom wood carriage door and a triple-layer steel door solve different problems. The right choice is the one whose construction, insulation, cycle rating, and finish match how the opening is actually used — and which the installing contractor can support afterward.',
      },
      {
        t: 'p',
        text: 'CMAC is veteran-owned and operated, holds a BBB A+ rating, and works under the standard its founder set: integrity truly matters. Inspections are free and carry no obligation. Call 1-888-389-CMAC.',
      },
    ],
    brandIds: ['clopay', 'wayne-dalton', 'amarr', 'overhead-door', 'northwest-door'],
    bullets: [
      { title: 'Proven manufacturers', detail: 'Only established door brands with real dealer and parts channels.' },
      { title: 'Parts availability', detail: 'Model documentation that lets a single damaged section be replaced years later.' },
      { title: 'Warranty backing', detail: 'Written manufacturer terms rather than a verbal promise from an installer.' },
      { title: 'Hardware and spring quality', detail: 'Track, hinges, rollers, and cycle-rated springs specified to the door weight.' },
    ],
    related: [
      '/services/doors/residential-garage-doors',
      '/services/doors/commercial-garage-doors',
      '/services/doors/gallery',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },

  /* ---------------------------------------------------------------- gallery */
  {
    id: 'gallery',
    category: 'doors',
    name: 'Garage Door Gallery',
    headline: 'Finished residential and commercial projects',
    summary:
      'Residential and commercial garage door projects across Texas, Oklahoma, Arkansas, Tennessee, and Georgia — plus how to compare door styles.',
    image: '/svc-doors-clean.jpg',
    body: [
      {
        t: 'p',
        text: 'View examples of CMAC residential and commercial garage-door projects and use them to compare materials, colors, glazing, and panel styles for your property.',
      },
      {
        t: 'note',
        text: 'Project photography for this gallery is being added. If you would like to see completed work similar to your building, ask during your free inspection and we will bring relevant examples.',
      },
      {
        t: 'p',
        text: 'While the photography is going up, here is the more useful thing to know: how to look at garage doors when you are comparing them. Almost everyone starts by browsing pictures and picking a favorite. That works better if you know what you are actually choosing between.',
      },
      { t: 'h2', text: 'The four styles most doors fall into' },
      { t: 'h3', text: 'Carriage house' },
      {
        t: 'p',
        text: 'Designed to read like the side-hinged barn doors it replaced, with overlays, cross-bucks, strap hinges, and often a row of upper windows. It still operates as a normal sectional door. It suits traditional, craftsman, farmhouse, Tudor, and Mediterranean elevations, and it is the style that most changes the character of a plain builder-grade front.',
      },
      { t: 'h3', text: 'Raised panel' },
      {
        t: 'p',
        text: 'The most common residential door: a grid of rectangular raised panels, usually in embossed woodgrain steel. It is the safe, quiet choice — it disappears into most elevations rather than making a statement, which is exactly what you want when the door should not be the focal point.',
      },
      { t: 'h3', text: 'Contemporary flush' },
      {
        t: 'p',
        text: 'Flat or lightly ribbed sections with no panel detail, frequently in a solid dark color or a smooth woodgrain. It belongs on modern, mid-century, and transitional architecture, and it depends on clean lines — which means the installation has to be square, because there is no panel detail to hide a bad reveal.',
      },
      { t: 'h3', text: 'Full-view glass' },
      {
        t: 'p',
        text: 'An aluminum frame carrying glass in every section. It is the standard for showrooms, restaurants, breweries, and shops, and it is increasingly used on residential bays that double as living space. Glass can be clear, tinted, obscure, frosted, or insulated. Consider what the door faces and how much heat and sightline you want to accept.',
      },
      { t: 'h2', text: 'Matching the door to the house' },
      {
        t: 'p',
        text: 'The reliable rule is that the door should agree with the windows and the front door, not compete with them. If your windows are divided into panes, a door with a matching window grid ties the elevation together. If the house is modern with large unbroken glass, a paneled carriage door will look applied rather than original.',
      },
      {
        t: 'p',
        text: 'Proportion is the second consideration. On a wide double opening, a short-panel design can look busy, while long-panel and flush designs read calmer. Two single doors and one double door of the same width are visually very different; if you have two singles, keeping the design identical and the spacing even matters more than the design itself.',
      },
      { t: 'h2', text: 'Windows and color' },
      {
        t: 'p',
        text: 'Windows go in the top section by default, which brings daylight into the garage without letting anyone see what is stored there. Obscure or frosted glass keeps the light and removes the sightline. Decorative inserts change the style significantly, so match them to the window pattern elsewhere on the house rather than choosing them in isolation.',
      },
      {
        t: 'p',
        text: 'On color, there are two workable strategies. Match the door to the body of the house so it recedes and the entry becomes the focal point, or match it to the trim or the front door so it reads as an intentional accent. Dark doors on a sun-facing elevation absorb more heat, which is a real consideration in Texas, Oklahoma, and Georgia summers, and is one more argument for insulated construction on that orientation.',
      },
      {
        t: 'p',
        text: 'Bring a photo of your elevation to a free, no-obligation inspection and the options can be narrowed against the actual house rather than a catalog. Call 1-888-389-CMAC.',
      },
    ],
    related: [
      '/services/doors/residential-garage-doors',
      '/services/doors/commercial-garage-doors',
      '/services/doors/brands',
      '/services/doors',
    ],
    updated: '2026-08-24',
  },
]
