import type { Review } from './types'

/**
 * REAL REVIEWS ONLY — every entry below is published on Google via CMAC's own review hub
 * (cmacroofingreviews.com), and the Haslet-profile entries were independently cross-checked
 * character-for-character against Trustindex's published dataset.
 *
 * The design concept shipped three invented testimonials ("Jason M.", "Sarah T.", "Robert K.")
 * with stock Unsplash avatars. Fabricated endorsements are an FTC problem on their own, and
 * feeding them into Review structured data would compound it. They are gone.
 *
 * The critical 3-star review is deliberately included on /reviews. Showing only 5-star reviews
 * while claiming an aggregate that includes 1-star reviews is a selective-sampling problem, and
 * a visible mixed set reads as more credible to both humans and answer engines.
 */
export const reviews: Review[] = [
  {
    id: 'jamie-warren',
    author: 'Jamie Warren',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Joe Coker was very attentive and answered all my questions. When he showed up for a site visit, we discussed everything from roof pitch, different levels of shingles, what insurance would cover, and even color. The day the crew came, they were prompt at showing up at 7am, didn’t waste a minute getting tarps setup for catching debris. They wrapped up everything and did an excellent job of cleaning up. Overall, I cannot recommend CMAC enough!',
  },
  {
    id: 'dave-roberts',
    author: 'Dave Roberts',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Three years after my roof was completed, I contacted the owner and asked about something in the attic that looked out of place. Without hesitation, a technician was dispatched to my home to look at and corrected the minor imperfection. And at no charge I should add. EXCEPTIONAL SERVICE!',
  },
  {
    id: 'douglas-andreotti',
    author: 'Douglas Andreotti',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'After a severe weather event that damaged our home, we contacted Dave at CMAC. Dave came out promptly and examined the roof damage with a drone. He was extremely knowledgeable about the insurance process and the required repairs, plus he met with our insurance adjuster on a Sunday. New roof installed timely and with professional workers. Roof install is perfect and the yard cleaned.',
  },
  {
    id: 'karen-ferraro',
    author: 'Karen Ferraro',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC Roofing was the best roofing company I have ever dealt with. Michael August and his associate Dave were professional, finished on time and on budget. I can’t say enough about the customer service. If I could give 10 stars, I would.',
  },
  {
    id: 'sue-cave',
    author: 'Sue Cave',
    city: 'Ingleside, TX',
    rating: 5,
    source: 'Google',
    body: 'We had a hailstorm on 11/1/25, this required a new roof. During the process of figuring out what to do, I met Jason Gomez of CMAC Roofing. On day one, he treated us with respect and led us through the process one step at a time. Their crew showed up bright and early on our scheduled day and got the job done. We are extremely satisfied with our new roof!',
  },
  {
    id: 'kevin-w',
    author: 'Kevin W.',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Mike August and his team made the entire roofing process stress-free and seamless. From the initial inspection, to working directly with my insurance company, to the final installation, I always felt that my best interests came first. The new roof looks incredible, and I couldn’t be happier with the quality and professionalism.',
  },
  {
    id: 'sally-ann-patton',
    author: 'Sally Ann Patton',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'We noticed several shingles had been blown off our roof due to the high winds here in Texas. We have lived in our brand new home a little over a year — we contacted our house builders but they refused to help us. We then contacted CMAC roofing. They sent a young man over a few days later and he replaced about ten to twelve shingles for us. We were so pleased when we were told there would be no charge for their services.',
  },
  {
    id: 'franklin-knight',
    author: 'Franklin Knight',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Aaron Garcia is an exceptional professional that evaluated my home’s roofing needs with no high pressure for non necessary repairs or excessive material forecasts. Once he finished, I was provided photographs of the damage and descriptions of the repairs identified as recommended, and a clear written estimate with full description of activity and materials.',
  },
  {
    id: 'maria-perez',
    author: 'Maria Perez',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC representative Marcus Gutierrez did a great job in sizing up the roof hail damage as well as installing attic venting turtles. He also replaced 6 roof plywood pieces that were rotten. Roof looks great.',
  },
  {
    id: 'mat-briggs',
    author: 'Mat Briggs',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Joseph Bandy’s crew have helped me multiple times this year with both a complete gutter installation and some much needed roof repairs. His team is always quick to help and do excellent work.',
  },
  {
    id: 'whitney-davis',
    author: 'Whitney Davis',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'I was able to contact Dave Tresemer for an emergency roof inspection in less than 24 hours. Not only was he accommodating, his report was beyond thorough and informative. The professionalism and attention to detail is the reason I will always recommend CMAC.',
  },
  {
    id: 'heather-meade',
    author: 'Heather Meade',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'I can’t say enough great things about this company and Mike in particular. He has always gone so far above and beyond to make sure I’m taken care of. The quality of their work and the aftercare is top notch.',
  },
  {
    id: 'brian-h',
    author: 'Brian H',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Grant and the team at CMAC Roofing were amazing to work with. Every step of the process was completely explained and they made the whole process as smooth and painless as possible. The roof, gutters and shutters look great and would highly recommend.',
  },
  {
    id: 'randy-wagner',
    author: 'Randy Wagner',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC has been a pleasure to work with. Their customer service is top notch and anytime there is an issue they are there in faster than expected time every time, whether it is their issue or not. Highly recommend.',
  },
  {
    id: 'abraham-lopez',
    author: 'Abraham Lopez',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'As a national homebuilder who does business with multiple trade partners, Edwin and JR keep us informed with detailed explanations and planning stages for every inspection and repair. CMAC Roofing goes above and beyond to make sure our community homeowners receive the best service and quality performance day in and day out.',
  },
  {
    id: 'mark-f-critical',
    author: 'Mark F',
    city: 'Haslet, TX',
    rating: 3,
    source: 'Google',
    body: 'Did the roof fast but felt like the pricing was confusing, the equity check was not made clear, felt that was to go to me since it was only to go to me. Was not provided any warranty info. I felt I should have had that provided.',
  },
  {
    id: 'biff-eck',
    author: 'Biff Eck',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'Joshua Lawrence of CMAC looked at our roof after the hail storm of 4/4/25, met with our adjuster for our insurance claim, scheduled with our solar panel provider, and got the roof replaced to our satisfaction.',
  },
  {
    id: 'nathan-morse',
    author: 'Nathan Morse',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'CMAC stopped by our house seeing that we had major roofing issues. They inspected the roof and did the necessary maintenance to prevent damage to the contents of the house. Possibly the most professional two gentlemen, Scott and Bailey, we have had the pleasure to do business with in a very long time. Their quote on new roofing was well within reason and very timely.',
  },
  {
    id: 'keifer-bandy',
    author: 'Keifer Bandy',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'Josh Lawrence helped us every step of the way working with our insurance adjuster, and staying in touch during everything. They replaced our roof and siding on our house and were done the same day they started the job. Josh stayed in communication the whole time, sending us pictures throughout the process.',
  },
  {
    id: 'lyndal-sumbera',
    author: 'Lyndal Sumbera',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'Loved the customer service, worked great with my insurance adjuster and got my roof replaced quickly after being damaged from a hailstorm. Will definitely be using them in the future!',
  },
  {
    id: 'jason-musshafen',
    author: 'Jason Musshafen',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'Let me start off by saying how incredible of an experience we had with Scott and CMAC Roofing. He walked us through the entire process, treated us with the utmost respect, and his crew did an amazing job. We couldn’t be happier.',
  },
  {
    id: 'charles-raymond',
    author: 'Charles Raymond',
    city: 'Oklahoma City, OK',
    rating: 5,
    source: 'Google',
    body: 'They were here on time, all the crew worked very hard together, only took one day. Cleanup was fast. I was very impressed and the roof looks beautiful.',
  },
  {
    id: 'sodum-ithertz',
    author: 'SoDum ItHertz',
    city: 'Nashville, TN',
    rating: 5,
    source: 'Google',
    body: 'Carner and Nick really came through in the clutch when I had a leak in my studio and needed a fix fast. Their professionalism, attention to detail, and swift implementation of the repair saved my studio from a potential water damage nightmare. I especially appreciated their transparent communication and the seamless way they coordinated with my insurance company.',
  },
  {
    id: 'mitchell-parker',
    author: 'Mitchell Parker',
    city: 'Nashville, TN',
    rating: 5,
    source: 'Google',
    body: 'Been awesome working with these guys and getting our work completed.',
  },
  {
    id: 'ernesto',
    author: 'Ernesto',
    city: 'Rosenberg, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC Roofing did an excellent job. The team was professional, knowledgeable, and explained every step of the process. The crew worked efficiently and did a quality job.',
  },
  {
    id: 'spencer-fesmire',
    author: 'Spencer Fesmire',
    city: 'Rosenberg, TX',
    rating: 5,
    source: 'Google',
    body: 'Professionalism at the highest level.',
  },
  {
    id: 'cory-moore',
    author: 'Cory Moore',
    city: 'Georgetown, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC Roofing in Georgetown did a great job! I highly recommend them for your roofing project!',
  },
  {
    id: 'vividefx',
    author: 'VividEFX',
    city: 'Georgetown, TX',
    rating: 5,
    source: 'Google',
    body: 'Jonni and Jared are very professional. They treated me right and made sure the quality and pricing was the best. CMAC Roofing in Georgetown is a great choice for roofing, restoration, and all your construction needs.',
  },
  {
    id: 'mark-leyva',
    author: 'Mark Leyva',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'CMAC Roofing and Garret are the very best! Great pricing and exceptional service!',
  },
  {
    id: 'dean-krambeck',
    author: 'Dean Krambeck',
    city: 'Haslet, TX',
    rating: 5,
    source: 'Google',
    body: 'Scott and his CMAC crew did great work in replacing our hail-damaged roof, and gutters. The few concerns I had were quickly addressed, and we are very happy with the finished work!',
  },
]

/**
 * PUBLISHED AGGREGATE — deliberately conservative.
 *
 * Five different aggregate numbers exist for CMAC. Trustindex's 4.5 / 83 is used here because it is
 * third-party published, covers the whole Haslet Google profile including its nine 1-star reviews,
 * and is the most defensible of the available figures.
 *
 * NOT used: CMAC's own 4.8 / 50 and 4.84 / 50. Those describe a hand-picked 50-review subset of
 * CMAC's own scrape that excludes every 1-star review on the profile. Google's review-snippet
 * guidelines require an aggregate to reflect all reviews rather than a curated selection.
 *
 * OPEN ITEM for CMAC: Birdeye reports 4.7 / 142 for a *different* Haslet address
 * (435 Co Rd 4841 vs 199 Co Rd 4840), which suggests duplicate or relocated Google Business
 * Profiles. Consolidating those listings is worth doing on its own — duplicate profiles split
 * review equity and are a direct contributor to the audit's "brand name discoverability" failure.
 */
export const aggregateRating = {
  ratingValue: 4.5,
  reviewCount: 83,
  source: 'Google',
  sourceUrl: 'https://www.trustindex.io/reviews/www.cmacroofing.com',
} as const

export const reviewsFor = (limit = 3): Review[] => reviews.filter((r) => r.rating === 5).slice(0, limit)
export const reviewsForCity = (city: string, limit = 3): Review[] =>
  reviews.filter((r) => r.city.includes(city) && r.rating === 5).slice(0, limit)
