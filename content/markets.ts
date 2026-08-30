import type { Market, MarketId, StateDoc, StateId } from './types'

/**
 * NAP is the load-bearing data for local SEO and for the LocalBusiness JSON-LD, so every record
 * here traces to cmacroofing.com/locations.
 *
 * Contact links were refreshed from the live homepage location module supplied by the owner on
 * 2026-08-30. Street addresses remain the verified /locations records; Arkansas and Georgia do not
 * publish map destinations and therefore intentionally omit mapUrl.
 */
export const markets: Market[] = [
  {
    id: 'dallas-fort-worth',
    path: '/locations/texas/dallas-fort-worth',
    name: 'Dallas–Fort Worth',
    state: 'texas',
    stateCode: 'TX',
    street: '199 County Road 4840',
    city: 'Haslet',
    zip: '76052',
    phone: '214-683-7663',
    phoneE164: '+12146837663',
    email: 'brianm@cmacroofing.com',
    mapUrl: 'https://google.com/maps/place/CMAC+Roofing/data=!4m2!3m1!1s0x0:0xfea376457957477c?sa=X&ved=1t:2428&hl=en&ictx=111',
    areasServed: ['Dallas–Fort Worth'],
    climate:
      'North Texas roofs are exposed to severe thunderstorms, hail, high wind, summer heat, and occasional freezing weather. An inspection should evaluate the roof as a complete system rather than assume visible surface damage is the only issue.',
    intro:
      'CMAC is headquartered in Haslet and publishes this office as its Dallas–Fort Worth contact point. Confirm service availability for a specific property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'houston',
    path: '/locations/texas/houston',
    name: 'Houston',
    state: 'texas',
    stateCode: 'TX',
    street: '2444 Randon Dyer Rd Ste. 120',
    city: 'Rosenberg',
    zip: '77471',
    phone: '832-690-7898',
    phoneE164: '+18326907898',
    email: 'martinm@cmacroofing.com',
    mapUrl: 'https://www.google.com/maps/place/CMAC+Roofing/data=!4m2!3m1!1s0x0:0x299a7a0d5fea6413?sa=X&ved=1t:2428&hl=en&ictx=111',
    areasServed: ['Houston'],
    climate:
      'Gulf Coast properties face high wind, heavy rain, heat, and humidity. Roof, wall, flashing, and drainage details all matter when evaluating weather-related damage.',
    intro:
      'CMAC publishes its Rosenberg office as the Houston-area contact point. Confirm service availability for a specific property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'austin',
    path: '/locations/texas/austin',
    name: 'Austin',
    state: 'texas',
    stateCode: 'TX',
    street: '1301 Blue Ridge Dr #104',
    city: 'Georgetown',
    zip: '78626',
    phone: '512-864-0400',
    phoneE164: '+15128640400',
    email: 'garretd@cmacroofing.com',
    mapUrl: 'https://www.google.com/maps/place/1301+Blue+Ridge+Dr,+Georgetown,+TX+78626/@30.5893656,-97.6764189,17z/data=!3m1!4b1!4m6!3m5!1s0x8644d6c7d4d09f9d:0x7c347d1826b72afa!8m2!3d30.589361!4d-97.673844!16s%2Fg%2F11vz38pwtx?entry=ttu',
    areasServed: ['Austin'],
    climate:
      'Central Texas properties face hail, high wind, intense sun, and prolonged heat. Material choice, ventilation, flashing, and drainage should be evaluated for the individual building.',
    intro:
      'CMAC publishes its Georgetown office as the Austin-area contact point. Confirm service availability for a specific property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'oklahoma-city',
    path: '/locations/oklahoma/oklahoma-city',
    name: 'Oklahoma City',
    state: 'oklahoma',
    stateCode: 'OK',
    street: '3613 S Moulton Dr',
    city: 'Oklahoma City',
    zip: '73179',
    phone: '214-883-4670',
    phoneE164: '+12148834670',
    email: 'davidh@cmacroofing.com',
    mapUrl: 'https://www.google.com/maps/place/CMAC+Roofing/data=!4m2!3m1!1s0x0:0xc6d3de6f3c9627d6?sa=X&ved=1t:2428&hl=en&ictx=111',
    areasServed: ['Oklahoma City'],
    climate:
      'Oklahoma City properties are exposed to severe thunderstorms, hail, high wind, and tornado-related damage. Post-storm inspections should document roofing and adjacent exterior components.',
    intro:
      'CMAC publishes an Oklahoma City office and local contact information. Confirm service availability for a specific property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'nashville',
    path: '/locations/tennessee/nashville',
    name: 'Nashville',
    state: 'tennessee',
    stateCode: 'TN',
    street: '2172 Nolensville Pk',
    city: 'Nashville',
    zip: '37211',
    phone: '629-206-9566',
    phoneE164: '+16292069566',
    email: 'nickh@cmacroofing.com',
    mapUrl: 'https://www.google.com/maps/place/CMAC+Roofing/data=!4m2!3m1!1s0x0:0xe51ab983b2f43d7d?sa=X&ved=1t:2428&hl=en&ictx=111',
    areasServed: ['Nashville'],
    climate:
      'Middle Tennessee properties face high wind, hail, heavy rain, and tree-related impacts. Flashing, valleys, roof penetrations, and drainage are common inspection priorities.',
    intro:
      'CMAC publishes a Nashville office and local contact information. Confirm service availability for a specific property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'arkansas',
    path: '/locations/arkansas',
    name: 'Arkansas',
    state: 'arkansas',
    stateCode: 'AR',
    phone: '214-883-4670',
    phoneE164: '+12148834670',
    email: 'davidh@cmacroofing.com',
    areasServed: ['Arkansas'],
    climate:
      'Arkansas properties may be affected by hail, high wind, heavy rain, and winter ice. The condition and project address determine the appropriate inspection and service response.',
    intro:
      'CMAC identifies Arkansas as a service state and schedules inquiries through its regional line. It does not publish a walk-in Arkansas office; confirm availability for the property address when scheduling.',
    updated: '2026-08-30',
  },
  {
    id: 'georgia',
    path: '/locations/georgia/atlanta',
    name: 'Atlanta',
    state: 'georgia',
    stateCode: 'GA',
    phone: '214-883-4670',
    phoneE164: '+12148834670',
    email: 'davidh@cmacroofing.com',
    areasServed: ['Atlanta', 'Georgia'],
    climate:
      'Georgia properties face heat, humidity, high wind, and heavy rain. Roof condition, ventilation, flashing, and drainage should be assessed for the individual building.',
    intro:
      'CMAC identifies Georgia as a service state and routes Atlanta-area inquiries through its regional line. It does not publish a walk-in Georgia office; confirm availability for the property address when scheduling.',
    updated: '2026-08-30',
  },
]

export const states: StateDoc[] = [
  {
    id: 'texas',
    path: '/locations/texas',
    name: 'Texas',
    code: 'TX',
    marketIds: ['dallas-fort-worth', 'houston', 'austin'],
    intro:
      'Texas is CMAC’s headquarters state. The company publishes contact points for Dallas–Fort Worth from Haslet, Houston from Rosenberg, and Austin from Georgetown.',
    climate:
      'No single Texas roof faces one climate. North and Central Texas take punishing spring hail, the Gulf Coast takes hurricane wind and wind-driven rain, and all of it bakes under summer heat that shortens the service life of every asphalt product on the market.',
    updated: '2026-08-24',
  },
  {
    id: 'oklahoma',
    path: '/locations/oklahoma',
    name: 'Oklahoma',
    code: 'OK',
    marketIds: ['oklahoma-city'],
    intro:
      'CMAC publishes an Oklahoma City office for roofing, gutter, garage door, and restoration inquiries. Availability is confirmed by property address.',
    climate:
      'Oklahoma sees some of the most destructive hail in the country. Roofs here are replaced on storm cycles rather than on wear cycles, which makes impact-resistant systems and a contractor who knows the claims process worth far more than they are in a calmer market.',
    updated: '2026-08-24',
  },
  {
    id: 'tennessee',
    path: '/locations/tennessee',
    name: 'Tennessee',
    code: 'TN',
    marketIds: ['nashville'],
    intro:
      'CMAC publishes a Nashville office on Nolensville Pike for roofing, gutter, garage door, and restoration inquiries. Availability is confirmed by property address.',
    climate:
      'Middle Tennessee combines spring severe weather with heavy annual rainfall and dense tree cover — a combination that puts unusual pressure on flashing details, valleys, and gutter capacity.',
    updated: '2026-08-24',
  },
  {
    id: 'arkansas',
    path: '/locations/arkansas',
    name: 'Arkansas',
    code: 'AR',
    marketIds: ['arkansas'],
    intro:
      'CMAC identifies Arkansas as a service state and routes inquiries through its regional team. It does not publish a walk-in Arkansas office.',
    climate:
      'Arkansas catches the eastern edge of the spring hail belt along with the winter ice storms that bring limbs down on roofs and gutters.',
    updated: '2026-08-24',
  },
  {
    id: 'georgia',
    path: '/locations/georgia',
    name: 'Georgia',
    code: 'GA',
    marketIds: ['georgia'],
    intro:
      'CMAC identifies Georgia as a service state and routes Atlanta-area inquiries through its regional team. It does not publish a walk-in Georgia office.',
    climate:
      'Georgia roofs contend with heat, humidity, algae streaking, and the intense summer downpours that overwhelm undersized drainage.',
    updated: '2026-08-24',
  },
]

export const marketById = (id: MarketId) => markets.find((m) => m.id === id)!
export const stateById = (id: StateId) => states.find((s) => s.id === id)!
export const marketsInState = (id: StateId) => markets.filter((m) => m.state === id)
/** Markets with a real street address get a full LocalBusiness node; the rest get areaServed only. */
export const hasAddress = (m: Market) => Boolean(m.street && m.city && m.zip)
