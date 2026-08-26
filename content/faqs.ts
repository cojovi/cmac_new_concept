import type { FaqItem } from './types'

/**
 * Answers are written out in full and rendered inside native <details> so they exist in the raw
 * HTML. The current Wix FAQ page gates its answers behind client-side rendering — only the first
 * answer is in the server response, which is precisely the failure this site is built to avoid.
 *
 * `scope` is matched against 'global', a service id, a category id, or a market id.
 */
export const faqs: FaqItem[] = [
  /* ------------------------------------------------------------- company */
  {
    id: 'what-is-cmac',
    q: 'What kind of company is CMAC?',
    a: 'CMAC Roofing and Sheet Metal LLC is a veteran-owned and operated construction and remodeling company founded by Christian Viveiros. We handle roofing, gutters, garage doors, restoration, and exterior work for residential, commercial, and multi-family properties. We are a GAF Master Elite® certified contractor and a GAF President’s Club award winner.',
    scope: ['global', 'about'],
  },
  {
    id: 'what-states',
    q: 'What states does CMAC serve?',
    a: 'Five: Texas, Oklahoma, Arkansas, Tennessee, and Georgia. CMAC publishes office addresses and local contact information for Dallas–Fort Worth (Haslet), Houston (Rosenberg), Austin (Georgetown), Oklahoma City, and Nashville. Arkansas and Georgia inquiries route through the regional line; no walk-in office is published in either state.',
    scope: ['global', 'about', 'locations'],
  },
  {
    id: 'core-principles',
    q: 'What are CMAC’s core principles?',
    a: 'Earn the customer’s trust, use only quality materials, and deliver exceptional workmanship. The company operates under the motto “Integrity Truly Matters,” and the practical version of that is simple: document what we find honestly, quote what the job actually requires, and stand behind the work after the crew leaves.',
    scope: ['global', 'about'],
  },
  {
    id: 'gaf-master-elite',
    q: 'What does GAF Master Elite® mean?',
    a: 'GAF awards Master Elite® status to a small fraction of roofing contractors in North America. It requires proof of proper licensing, adequate insurance, and a sustained record of quality installations and customer satisfaction. Practically, it means CMAC can offer enhanced GAF system warranties that non-certified contractors cannot, and that GAF has independently vetted the company. CMAC is also a GAF President’s Club award winner.',
    scope: ['global', 'about', 'roofing', 'warranty'],
  },

  /* ------------------------------------------------------------- pricing */
  {
    id: 'how-much-does-a-roof-cost',
    q: 'How much does a new roof cost?',
    a: 'There is no honest answer to that question without seeing the roof. Price is driven by measured square footage, the pitch and complexity of the roof, how many layers have to come off, how much decking has turned out to be rotten, the material system you choose, and whether the work is going through an insurance claim or being paid out of pocket. That is why CMAC inspects and measures before quoting rather than publishing a per-square number that would be wrong for most homes. The inspection and the written estimate are both free.',
    scope: ['global', 'pricing'],
  },
  {
    id: 'is-the-inspection-free',
    q: 'Do you charge for an inspection or an estimate?',
    a: 'No. The inspection, the damage documentation including drone photography, and the written estimate are all free and carry no obligation. If the roof does not need work, we will tell you that.',
    scope: ['global', 'pricing', 'roofing'],
  },
  {
    id: 'do-you-offer-financing',
    q: 'Do you offer financing?',
    a: 'Financing options vary by market and by project. Ask your estimator during the inspection and they will walk you through what is currently available for your job. CMAC does not publish standing financing terms online because they change.',
    scope: ['global', 'pricing'],
  },

  /* ---------------------------------------------------------- insurance */
  {
    id: 'will-you-work-with-my-insurance',
    q: 'Will CMAC work with my insurance company?',
    a: 'CMAC can document visible damage, provide a contractor report, and attend the carrier’s inspection to explain the proposed repair scope. CMAC is a contractor, not a public adjuster or law firm, and does not interpret policy coverage or represent a policyholder in a coverage dispute.',
    scope: ['global', 'insurance-claims', 'storm-response', 'roofing'],
  },
  {
    id: 'should-i-file-before-inspection',
    q: 'Should I file my claim before or after the inspection?',
    a: 'Get the inspection first. Filing a claim without knowing what the damage actually is puts you in the position of arguing from a weaker footing, and a claim that gets denied still sits on your record. CMAC inspects first, documents visible and hidden damage, and gives you a professional report. Then you call your carrier with facts in hand.',
    scope: ['insurance-claims', 'storm-response'],
  },
  {
    id: 'what-about-my-deductible',
    q: 'What happens with my deductible?',
    a: 'Your insurance policy and applicable state law govern the deductible. Do not accept a promise to hide or misrepresent a deductible on project documents. Ask your carrier or a qualified local adviser about your obligations, and make sure the contract and invoice accurately describe what you pay.',
    scope: ['insurance-claims', 'storm-response'],
  },

  /* ----------------------------------------------------------- roofing */
  {
    id: 'repair-or-replace',
    q: 'How do I know whether to repair or replace my roof?',
    a: 'Age relative to the material’s service life, how widespread the damage is, and whether you have had more than one leak are the deciding factors. Isolated damage on a roof with years of life left is a repair. Widespread granule loss, exposed mat, multiple leak points, or hail bruising across every slope generally means replacement, because patching a failing system just moves the next leak somewhere else. An inspection settles it.',
    scope: ['roofing', 'roof-repairs', 'roof-replacement'],
  },
  {
    id: 'how-long-does-a-roof-take',
    q: 'How long does a roof replacement take?',
    a: 'Most residential asphalt shingle replacements are a one to two day job once materials are on site. Tile, slate, metal, and complex roof geometry take longer. Weather, decking replacement discovered after tear-off, and permit or HOA requirements are the usual reasons a schedule moves.',
    scope: ['roofing', 'roof-replacement'],
  },
  {
    id: 'hail-damage-not-visible',
    q: 'My roof looks fine from the ground. Could it still be damaged?',
    a: 'Frequently, yes. Hail bruises the mat underneath the granule surface, and that bruising is often invisible from the ground and sometimes hard to see from a ladder. It shortens the roof’s life and creates the leaks you will discover a year or two later, after your claim window has closed. That is why documented post-storm inspections matter.',
    scope: ['roofing', 'roof-repairs', 'storm-response', 'insurance-claims'],
  },

  /* ----------------------------------------------------------- gutters */
  {
    id: 'why-gutters-matter',
    q: 'Why do gutters matter so much?',
    a: 'Gutters are the only thing moving roof runoff away from your foundation. When they fail, water sheets down the wall and saturates the soil at the footing, which is how you get foundation movement, wet crawlspaces, basement intrusion, and rotted fascia — all of which cost far more to fix than the gutters would have.',
    scope: ['gutters'],
  },
  {
    id: 'do-gutter-guards-work',
    q: 'Do gutter guards actually work?',
    a: 'They reduce cleaning frequency substantially, but no guard is truly maintenance-free, and any company claiming otherwise is overselling. Different guard styles handle different debris: fine mesh handles pine needles and shingle grit that screens let through, while reverse-curve designs shed leaves well but can overshoot in heavy downpours. The right choice depends on what is actually falling on your roof.',
    scope: ['gutters', 'gutter-guards'],
  },

  /* ------------------------------------------------------------- doors */
  {
    id: 'garage-door-spring-diy',
    q: 'Can I replace a garage door spring myself?',
    a: 'You should not. A torsion spring on a double door stores enough energy to cause severe injury or worse if it releases while being handled, and the winding process requires the correct bars and technique. This is the single most common source of serious DIY injury in residential maintenance. Call a technician.',
    scope: ['doors', 'repair'],
  },
  {
    id: 'garage-door-wont-close',
    q: 'My garage door will not close and reverses instead. What is wrong?',
    a: 'Nine times out of ten it is the photo-eye safety sensors near the floor — either misaligned, dirty, or with a blocked beam. Check that both indicator lights are steady and that nothing is in the path. If the lights are steady and it still reverses, the issue is more likely the down-force setting, an obstruction in the track, or a failing opener logic board.',
    scope: ['doors', 'repair', 'openers'],
  },

  /* ------------------------------------------------------- restoration */
  {
    id: 'how-fast-water-damage',
    q: 'How quickly do I need to act on water damage?',
    a: 'Immediately. The first 24 to 48 hours determine whether you are drying a building or rebuilding one. Mold can begin colonizing wet organic material within roughly a day or two under the right conditions, and saturated drywall, insulation, and subfloor lose salvageability fast. CMAC offers 24/7 emergency response for water mitigation.',
    scope: ['restoration', 'water-mitigation'],
  },
  {
    id: 'do-you-work-24-7',
    q: 'Does CMAC offer emergency service?',
    a: 'Yes, for the situations that genuinely cannot wait: 24/7 emergency response for water mitigation, and 24/7 emergency garage door repair. Storm response work is dispatched as fast as conditions and crew availability allow after an event.',
    scope: ['global', 'restoration', 'water-mitigation', 'storm-response', 'doors'],
  },

  /* ---------------------------------------------------------- warranty */
  {
    id: 'what-warranty',
    q: 'What warranty comes with the work?',
    a: 'Roofing installations carry both a manufacturer material warranty and a CMAC workmanship warranty. Because CMAC is GAF Master Elite® certified, enhanced GAF system warranties are available on qualifying installations that most contractors cannot offer. Specific terms depend on the system installed and are stated in writing on your estimate — ask your estimator to walk through exactly what is covered before you sign.',
    scope: ['global', 'warranty', 'roofing'],
  },
  {
    id: 'register-my-roof',
    q: 'What is roof registration and do I need it?',
    a: 'If CMAC installed the roof on a newly built home, registering it puts your property in our service system so we can maintain it and support you after your builder’s warranty expires. It takes a couple of minutes and costs nothing.',
    scope: ['warranty'],
  },
]

const scopeMatch = (f: FaqItem, scopes: string[]) => f.scope.some((s) => scopes.includes(s))

/** Returns FAQs matching any of the given scopes, capped so a page stays readable. */
export function faqsFor(scopes: string[], limit = 6): FaqItem[] {
  const seen = new Set<string>()
  const out: FaqItem[] = []
  // Most specific scope first so a service page leads with its own questions.
  for (const scope of scopes) {
    for (const f of faqs) {
      if (out.length >= limit) return out
      if (seen.has(f.id)) continue
      if (scopeMatch(f, [scope])) {
        seen.add(f.id)
        out.push(f)
      }
    }
  }
  return out
}

export const faqById = (id: string) => faqs.find((f) => f.id === id)
