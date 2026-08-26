import type { Block } from './types'

/**
 * Long-form copy for the company and trust pages.
 *
 * /about, /contact, and /privacy-policy are the three the is-agentic audit calls "trust anchor
 * pages" and checks for at least 500 characters of real content each. Everything here is grounded
 * in what CMAC actually publishes; nothing is invented.
 */

export const aboutBody: Block[] = [
  {
    t: 'p',
    text: 'CMAC Roofing and Sheet Metal LLC is a veteran-owned and operated construction and remodeling company founded by Christian Viveiros. What started as a roofing company has grown into a full exterior and restoration contractor working across five states, but the operating principle has not changed: earn the customer’s trust, use only quality materials, and deliver workmanship that holds up after everyone has gone home.',
  },
  {
    t: 'p',
    text: 'The company motto is “Integrity Truly Matters.” In this trade that is not a slogan you get to say for free. Roofing and storm restoration attract operators who show up after a hailstorm, oversell a claim, cut the installation, and are gone before the first leak. CMAC is built the opposite way — around local offices with local crews and named estimators who are still reachable in three years.',
  },
  { t: 'h2', text: 'What we do' },
  {
    t: 'p',
    text: 'CMAC runs five divisions: roofing, gutters, garage doors, restoration, and exteriors. That range exists because the exterior of a building is one system. Hail that damages a roof usually damages the gutters, the garage door, the siding, and the window screens in the same event, and a homeowner should not have to project-manage four contractors and four insurance line items to put it right.',
  },
  {
    t: 'ul',
    items: [
      'Roofing — repairs, full replacement, new construction, custom homes, specialty tile and slate systems, commercial low-slope systems, and multi-family portfolios',
      'Gutters — seamless installation, repairs, guards, maintenance programs, and high-volume commercial drainage',
      'Garage doors — residential and commercial installation, openers, and repair, backed by five major manufacturers',
      'Restoration — 24/7 water mitigation, fire and smoke damage, resurfacing, floor care and odor control, and trauma and biohazard cleanup',
      'Exteriors — siding, replacement windows, decks, and exterior painting',
    ],
  },
  { t: 'h2', text: 'Certifications and standing' },
  {
    t: 'p',
    text: 'CMAC is a GAF Master Elite® certified contractor — a status held by a small percentage of roofing contractors in North America, which requires documented licensing, insurance, and a sustained record of quality installations. CMAC has also been named a GAF President’s Club award winner, holds an A+ rating with the Better Business Bureau, and is a member of the National Roofing Contractors Association. Our GAF contractor ID is 1131347.',
  },
  {
    t: 'p',
    text: 'On the multi-family side, CMAC is a member of the Apartment Association of Greater Dallas and the Fort Worth Apartment Association.',
  },
  { t: 'h2', text: 'Where we work' },
  {
    t: 'p',
    text: 'CMAC serves Texas, Oklahoma, Arkansas, Tennessee, and Georgia. It publishes office addresses and local contact information for Dallas–Fort Worth, Houston, Austin, Oklahoma City, and Nashville. Arkansas and Georgia inquiries route through the regional line; CMAC does not publish a walk-in office in either state.',
  },
  { t: 'h2', text: 'Living Life Unlocked' },
  {
    t: 'p',
    text: '“Living Life Unlocked” is how CMAC describes what the work is actually for: creating opportunities, building lasting relationships, and delivering peace of mind through dependable service and quality workmanship. A roof is a large, disruptive, expensive purchase that most people make once or twice in their lives. Doing it right means the customer stops thinking about it — which is the whole point.',
  },
]

export const pricingBody: Block[] = [
  {
    t: 'p',
    text: 'CMAC does not publish price lists, and you should be skeptical of any roofing company that does. A number posted on a website has to be either so broad that it tells you nothing or so specific that it will be wrong for your building. What we can do is explain exactly how a job gets priced, so that when you get an estimate — from us or from anyone else — you can read it properly.',
  },
  { t: 'h2', text: 'What drives the price of a roof' },
  {
    t: 'ul',
    items: [
      'Measured area. Roofing is quoted in squares — one square is 100 square feet of roof surface, not floor area. A complex roof has far more surface than the footprint suggests.',
      'Pitch and access. A steep roof requires staging and slows every stage of the work. Limited driveway or lot access changes how material and debris get moved.',
      'Layers to remove. Tearing off two or three existing layers costs more in labor and disposal than tearing off one.',
      'Decking condition. Rotten or delaminated sheathing is only visible after tear-off. A good estimate states a per-sheet price for replacement up front rather than surprising you mid-job.',
      'Complexity. Valleys, dormers, chimneys, skylights, and wall transitions are where roofs leak, and detailing them properly takes time and material.',
      'The system you choose. Three-tab, architectural, impact-resistant Class 4, standing-seam metal, concrete or clay tile, natural or synthetic slate — these span an enormous range in both material cost and installation labor.',
      'Ventilation and code. Bringing intake and exhaust ventilation up to spec, or meeting a current code requirement the old roof predated, is often part of doing the job correctly.',
    ],
  },
  { t: 'h2', text: 'Insurance work versus out-of-pocket work' },
  {
    t: 'p',
    text: 'These are two different transactions. On an out-of-pocket project, you are buying a scope of work and comparing bids. On a storm claim, your insurance carrier determines the scope and the settlement, and the contractor’s job is to make sure that scope actually covers the damage. Comparing an insurance-scope roof against an out-of-pocket bid is comparing two unlike things.',
  },
  {
    t: 'note',
    text: 'Your policy and applicable state law govern the deductible. Project documents should state the transaction accurately; ask your carrier or a qualified local adviser if you are unsure about your obligations.',
  },
  { t: 'h2', text: 'What CMAC provides at no cost' },
  {
    t: 'p',
    text: 'The inspection is free. The damage documentation, including drone photography of the roof, is free. The written estimate is free. Meeting your insurance adjuster on the roof and negotiating the scope of work is included in the project rather than billed separately. None of that obligates you to anything, and if the roof does not need work, we will tell you that instead of selling you one.',
  },
  { t: 'h2', text: 'How to read any roofing estimate' },
  {
    t: 'ul',
    items: [
      'Is the measured square count stated, or just a lump sum?',
      'Does it name the actual shingle line and underlayment, or just say “architectural shingle”?',
      'Does it include tear-off and disposal, or is that separate?',
      'Is there a stated per-sheet price for replacing bad decking?',
      'Are new flashings, drip edge, and pipe boots included, or is the old metal being reused?',
      'What ventilation is being installed?',
      'What exactly does the workmanship warranty cover, for how long, and is it transferable?',
      'Is the contractor’s insurance certificate current and available on request?',
    ],
  },
  {
    t: 'p',
    text: 'A cheap estimate is usually cheap because something on that list is missing. Ask which one.',
  },
]

export const insuranceBody: Block[] = [
  {
    t: 'p',
    text: 'A storm claim depends on clear documentation. A contractor inspection can identify visible damage before the property owner contacts the carrier, and the contractor can explain the proposed repair scope during the carrier inspection. Coverage decisions, policy interpretation, and claim representation remain with the carrier, policyholder, and any properly licensed adviser they engage.',
  },
  { t: 'h2', text: 'What CMAC does and does not do' },
  {
    t: 'p',
    text: 'CMAC is a contractor, not a public adjuster and not a law firm. We do not interpret your policy or represent you in a dispute with your carrier. We can document visible damage, attend the carrier inspection to explain the proposed contractor scope, and then build the work authorized by the property owner.',
  },
  { t: 'h2', text: 'Common mistakes' },
  {
    t: 'ul',
    items: [
      'Filing before anyone has looked at the roof. A denied claim still goes on your record.',
      'Waiting too long. Policies carry deadlines for reporting storm damage, and once the window closes, damage from that event is your problem.',
      'Assuming the first scope is final. Adjusters work fast and miss things, particularly hail bruising, damaged gutters, garage door dents, and window screens.',
      'Signing a contingency agreement without reading it. Know what you are agreeing to before a claim is even filed.',
      'Taking a bid that beats the insurance scope by a wide margin. That gap has to come out of the installation somewhere.',
    ],
  },
]

export const stormBody: Block[] = [
  {
    t: 'p',
    text: 'After a major hail or wind event, the roofs in an affected neighborhood all need attention at once, and the contractors who arrive first are frequently the ones who followed the storm in from out of state. CMAC operates permanently in these markets. Our Dallas–Fort Worth, Oklahoma City, Austin, Houston, and Nashville teams live where the storms hit, which is why we are still reachable long after the storm-chasers have moved on.',
  },
  { t: 'h2', text: 'What to do in the first 24 hours' },
  {
    t: 'ul',
    items: [
      'Deal with safety first — downed lines, standing water near electrical, and structural damage. Leave the building if there is any doubt.',
      'Photograph everything from the ground, including hail on the lawn, dented gutters and garage doors, and any interior water staining. Timestamps matter.',
      'Get water out of the building. Standing water becomes a mold problem within a day or two, not a week.',
      'Cover active leaks if it is safe to do so from inside. Do not climb a wet or damaged roof.',
      'Call for a professional inspection before you call your carrier, so you file knowing what actually happened.',
    ],
  },
  { t: 'h2', text: 'Full-scope storm response' },
  {
    t: 'p',
    text: 'CMAC handles the whole chain rather than a piece of it: emergency water mitigation and structural drying, debris removal, roof repair or replacement, gutters, garage doors, siding and window damage, interior repairs, and full reconstruction. Water mitigation runs 24/7 because water damage is measured in hours.',
  },
]

export const warrantyBody: Block[] = [
  {
    t: 'p',
    text: 'Roofing work from CMAC is covered on two fronts: the manufacturer warrants the materials, and CMAC warrants the installation. Both matter, and they fail in different ways. A material warranty will not help you if the flashing was installed wrong, and a workmanship warranty will not help you if the shingles themselves were defective.',
  },
  { t: 'h2', text: 'Manufacturer warranties' },
  {
    t: 'p',
    text: 'Because CMAC holds GAF Master Elite® certification, we can offer enhanced GAF system warranties on qualifying installations that non-certified contractors are not authorized to provide. These cover the full roofing system rather than shingles alone, which is the distinction that matters when something goes wrong. Coverage depends on the specific system installed.',
  },
  { t: 'h2', text: 'Workmanship warranty' },
  {
    t: 'p',
    text: 'Warranty terms vary by the material system and approved project scope. The applicable manufacturer and workmanship terms should be stated in writing for the particular project. Read that section before signing and ask the estimator to explain what is covered, for how long, and whether coverage transfers.',
  },
  {
    t: 'note',
    text: 'Terms vary by system and by project, so this page deliberately does not print a duration. The authoritative answer is the written warranty on your own estimate.',
  },
  { t: 'h2', text: 'Register your roof' },
  {
    t: 'p',
    text: 'CMAC services customers after the project is complete, including new-construction homeowners after the builder’s warranty expires. Registering your roof puts your property in our service system so we know what was installed, when, and by whom. It costs nothing and takes a couple of minutes.',
  },
]

export const partnersBody: Block[] = [
  {
    t: 'p',
    text: 'CMAC works with independent roofing and construction businesses across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. If you run a crew or a company in the roofing or general construction trades and you are interested in working with CMAC, this is the way in.',
  },
  {
    t: 'note',
    text: 'This is a business-to-business partnership channel, not a job board. It is for companies and crews, not individual applicants. If you are looking for individual employment with CMAC, contact your nearest office directly.',
  },
  { t: 'h2', text: 'What we look for' },
  {
    t: 'ul',
    items: [
      'A legitimate business entity operating in roofing or general construction',
      'Current liability insurance and workers’ compensation coverage',
      'Crews that install to manufacturer specification, because our certifications depend on it',
      'Reliability on schedule — production and multi-family work lives or dies on it',
      'Willingness to work the way we do: document honestly, communicate early, finish the punch list',
    ],
  },
]

export const contactBody: Block[] = [
  {
    t: 'p',
    text: 'CMAC publishes direct phone numbers and email addresses for its operating markets. If you are not sure which contact covers the property, call the main line at 1-888-389-CMAC and the team will route the inquiry.',
  },
  {
    t: 'p',
    text: 'For a free, no-obligation inspection, use the form on this page or the quote request page. We inspect, document what we find with photographs including drone imagery of the roof, and give you a written estimate at no cost. There is no charge and no obligation, and if your roof does not need work we will say so.',
  },
  {
    t: 'note',
    text: 'Water damage or an emergency? Water mitigation runs 24/7 — call 1-888-389-CMAC rather than using the form. Time matters more than paperwork.',
  },
]

export const aiBody: Block[] = [
  {
    t: 'p',
    text: 'This site is built to be read by software as well as by people. Every page is server-rendered, so its full text is in the raw HTML with no JavaScript required. Every page also has a plain-text markdown twin, and the site publishes machine-readable indexes describing what CMAC does and where.',
  },
  { t: 'h2', text: 'Getting markdown instead of HTML' },
  {
    t: 'p',
    text: 'Two ways, both of which return text/markdown with a Vary: Accept header. Append .md to any URL — for example /services/roofing.md — or send an Accept: text/markdown request header to the normal URL.',
  },
  { t: 'h2', text: 'Machine-readable indexes' },
  {
    t: 'ul',
    items: [
      '/llms.txt — the site index, including guidance on when an agent should reach for CMAC and when it should not',
      '/llms-full.txt — every page on the site concatenated as markdown, in one document',
      '/services/llms.txt and /locations/llms.txt — scoped indexes for a single area',
      '/sitemap.xml — every canonical URL with a real last-modified date',
      '/ask — a POST endpoint accepting a natural-language query and returning ranked JSON results',
      '/mcp — a public, read-only Streamable HTTP MCP server for site search, pages, services, locations, and contact details',
      '/.well-known/mcp/server-card.json — Model Context Protocol discovery',
    ],
  },
  { t: 'h2', text: 'Structured data' },
  {
    t: 'p',
    text: 'Every page carries a JSON-LD @graph containing the Organization, the WebSite, a WebPage node, and a BreadcrumbList, plus a Service node on service pages, a LocalBusiness node on location pages, and an FAQPage node wherever questions are shown. Contact points are published per market with a telephone, email, and area served.',
  },
  {
    t: 'note',
    text: 'CMAC publishes no job pricing anywhere, so you will not find price figures in this site’s structured data. Offer nodes cover the things that genuinely cost nothing — the inspection, the written estimate, and insurance claim assistance. Anything quoting a CMAC price is not from CMAC.',
  },
]

export const accessibilityBody: Block[] = [
  {
    t: 'p',
    text: 'CMAC wants this site usable by everyone, including people using screen readers, keyboard-only navigation, screen magnification, or reduced-motion settings. We build toward the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.',
  },
  { t: 'h2', text: 'What is in place' },
  {
    t: 'ul',
    items: [
      'Every page is server-rendered, so content is available without JavaScript',
      'Semantic headings, landmarks, and lists throughout, with one h1 per page',
      'Visible keyboard focus indicators on every interactive element',
      'Text alternatives for meaningful images; decorative images are hidden from assistive technology',
      'Form fields have real labels, not placeholder text standing in for them',
      'FAQ answers use native disclosure elements that work without scripting',
      'Animation respects the prefers-reduced-motion setting',
    ],
  },
  { t: 'h2', text: 'Reporting a problem' },
  {
    t: 'p',
    text: 'If any part of this site is difficult or impossible for you to use, tell us and we will fix it. Email info@cmacroofing.com or call 1-888-389-CMAC. If you need information from a page that is not working for you, we will provide it in another format.',
  },
]

export const privacyBody: Block[] = [
  { t: 'p', text: 'Effective date: January 1, 2020. Last updated: August 31, 2025.' },
  {
    t: 'p',
    text: 'This policy explains what CMAC Roofing and Sheet Metal LLC collects when you use cmacroofing.com or contact us, how it is used, and what choices you have. Questions go to info@cmacroofing.com or 1-888-389-CMAC.',
  },
  { t: 'h2', text: 'What we collect' },
  {
    t: 'ul',
    items: [
      'Information you give us: name, phone number, email address, physical address, and other contact details submitted through a form',
      'Project details you provide, such as the service you need and your property address',
      'Technical information collected automatically: IP address, browser type, device type, and usage data, via cookies and analytics',
      'Records of your communication with us by phone, email, or SMS',
    ],
  },
  { t: 'h2', text: 'How we use it' },
  {
    t: 'p',
    text: 'To respond to your request, schedule and perform work, support an insurance claim, service your project afterward, meet legal obligations, and improve the site. We do not sell your personal information.',
  },
  { t: 'h2', text: 'Communications and SMS consent' },
  {
    t: 'p',
    text: 'By submitting your information through any form on cmacroofing.com, you consent to receive communications from CMAC Roofing, including phone calls, text messages (SMS/MMS), and emails. Message and data rates may apply. Reply STOP to any text message to opt out of SMS, or use the unsubscribe link in any email to opt out of email.',
  },
  { t: 'h2', text: 'Who we share it with' },
  {
    t: 'p',
    text: 'Authorized service providers working on our behalf under confidentiality obligations, and government or legal authorities where required by law. Nobody else.',
  },
  { t: 'h2', text: 'Your choices' },
  {
    t: 'p',
    text: 'You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it, subject to records we are legally required to retain. Contact info@cmacroofing.com or 1-888-389-CMAC. You can also control cookies through your browser settings.',
  },
  { t: 'h2', text: 'Changes' },
  {
    t: 'p',
    text: 'We may update this policy. The effective date at the top of this page reflects the current version. Material changes will be posted here.',
  },
]

export const termsBody: Block[] = [
  {
    t: 'p',
    text: 'These terms govern your use of cmacroofing.com. They do not govern any construction contract between you and CMAC — that relationship is set out in your signed estimate and contract documents, which control if anything here conflicts with them.',
  },
  { t: 'h2', text: 'Information on this site' },
  {
    t: 'p',
    text: 'Content here is provided for general information about CMAC’s services. Descriptions of materials, systems, and construction practice are general to the trade and are not a substitute for an inspection of your specific property. No estimate, warranty, scope of work, or price is created by anything on this site. CMAC publishes no pricing online; any figure attributed to CMAC that did not come from a signed CMAC estimate is not ours.',
  },
  { t: 'h2', text: 'Submitting a request' },
  {
    t: 'p',
    text: 'Submitting a form requests contact from CMAC. It does not create a contract, schedule work, or obligate either party. By submitting, you confirm the information is accurate and that you are authorized to request service for the property named.',
  },
  { t: 'h2', text: 'Intellectual property' },
  {
    t: 'p',
    text: 'The CMAC name, logo, site content, and project photography are the property of CMAC Roofing and Sheet Metal LLC. Third-party manufacturer names and marks referenced on this site belong to their respective owners and are used to identify products CMAC installs.',
  },
  { t: 'h2', text: 'Limitation of liability' },
  {
    t: 'p',
    text: 'This site is provided as is. To the extent permitted by law, CMAC is not liable for damages arising from your use of it or from reliance on general information published here. This does not limit any obligation CMAC owes you under a signed construction contract or warranty.',
  },
  { t: 'h2', text: 'Governing law' },
  { t: 'p', text: 'These terms are governed by the laws of the State of Texas.' },
  {
    t: 'p',
    text: 'Questions: info@cmacroofing.com or 1-888-389-CMAC. CMAC Roofing and Sheet Metal LLC, 199 County Road 4840, Haslet, TX 76052.',
  },
]
