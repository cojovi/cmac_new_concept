import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CalendarDays,
  CircleDot,
  ClipboardCheck,
  DoorClosed,
  Hammer,
  Headphones,
  Home,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Search,
  Shield,
  Wrench,
} from 'lucide-react'
import { QuoteForm } from '@/components/QuoteForm'
import { JsonLd } from '@/components/JsonLd'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { IconBox, RedButton } from '@/components/ui'
import { credentials, org, press } from '@/content/org'
import { aggregateRating, reviewsFor } from '@/content/reviews'
import { docByPath } from '@/content/docs'
import { marketById } from '@/content/markets'
import { graphFor } from '@/lib/jsonld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Veteran-Owned Roofing, Gutters, Doors & Restoration',
  description: org.description,
  alternates: { canonical: '/', types: { 'text/markdown': '/.md' } },
}

const trustBadges = [
  { title: 'VETERAN OWNED', detail: 'Veteran led and operated', Icon: Award },
  { title: 'GAF MASTER ELITE', detail: 'Certified contractor', Icon: Shield },
  { title: 'BBB A+ RATED', detail: 'Accredited business', Icon: Home },
  { title: '24/7 WATER RESPONSE', detail: 'Emergency restoration', Icon: Headphones },
]

const services = [
  {
    title: 'Roofing',
    body: 'Residential, commercial, multi-family, metal, tile, and flat-roof expertise.',
    image: '/svc-roofing-clean.jpg',
    href: '/services/roofing',
    Icon: Home,
  },
  {
    title: 'Gutters',
    body: 'Seamless gutters, guards, repairs, and drainage solutions for your property.',
    image: '/svc-gutters-clean.jpg',
    href: '/services/gutters',
    Icon: CircleDot,
  },
  {
    title: 'Garage Doors',
    body: 'Garage-door installation and repair for safer, better-looking exteriors.',
    image: '/svc-doors-clean.jpg',
    href: '/services/doors',
    Icon: DoorClosed,
  },
  {
    title: 'Restoration',
    body: 'Storm, fire, and water restoration coordinated by one experienced team.',
    image: '/svc-restoration-clean.jpg',
    href: '/services/restoration',
    Icon: Wrench,
  },
]

const processSteps = [
  { n: '1', title: 'Schedule', detail: 'Tell us what is happening at your property.', Icon: CalendarDays },
  { n: '2', title: 'Inspect', detail: 'We document the roof and exterior carefully.', Icon: Search },
  { n: '3', title: 'Plan', detail: 'Review a clear scope and written proposal.', Icon: ClipboardCheck },
  { n: '4', title: 'Build', detail: 'The CMAC team completes the approved work.', Icon: Hammer },
  { n: '5', title: 'Confirm', detail: 'A final walkthrough closes out the project.', Icon: Shield },
]

const homeReviews = reviewsFor(3)
const homeDoc = docByPath('/')!
const homeLocationLabels: Record<string, string> = {
  'dallas-fort-worth': 'DFW',
  houston: 'Houston',
  austin: 'Austin',
  'oklahoma-city': 'Oklahoma',
  arkansas: 'Arkansas',
  nashville: 'Nashville',
  georgia: 'Atlanta',
}
const homeLocations = [
  marketById('dallas-fort-worth'),
  marketById('houston'),
  marketById('austin'),
  marketById('oklahoma-city'),
  marketById('arkansas'),
  marketById('nashville'),
  marketById('georgia'),
]

export default function Page() {
  return (
    <>
      <JsonLd graph={graphFor(homeDoc)} />
      <link rel="preload" href="/hero-house.avif" as="image" type="image/avif" fetchPriority="high" />
      <div className="site-shell home-page">
        <SiteHeader variant="roofing" />

      <main id="main-content">
        <section className="hero" aria-labelledby="home-title">
          <div className="blueprint-grid" aria-hidden="true" />
          <div className="hero-house" aria-hidden="true" />
          <div className="hero-copy">
            <h1 id="home-title">
              CMAC
              <br />
              ROOFING
            </h1>
            <p className="hero-sub">
              Veteran-owned. Mission-focused.
              <br />
              Protecting what matters across five states.
            </p>
            <p className="hero-body">
              Roofing, gutters, garage doors, and restoration built around disciplined service, clear communication,
              and durable work.
            </p>
            <div className="hero-buttons">
              <RedButton href="/quote">Request Inspection</RedButton>
              <a className="btn btn-outline" href="#services">
                Explore Services
              </a>
            </div>
          </div>

          <QuoteForm />

          <div className="trust-row" aria-label="CMAC credentials">
            {trustBadges.map(({ title, detail, Icon }) => (
              <div className="trust-item" key={title}>
                <IconBox soft>
                  <Icon size={15} aria-hidden="true" />
                </IconBox>
                <span>
                  <b>{title}</b>
                  <em>{detail}</em>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="states" className="panel states-panel" aria-labelledby="states-title">
          <div className="states-art" aria-hidden="true" />
          <div className="states-copy">
            <span className="section-label red">SERVICE NETWORK</span>
            <h2 id="states-title">
              Proudly Serving
              <br />5 States
            </h2>
            <ul>
              {org.states.map((state) => (
                <li key={state}>{state}</li>
              ))}
            </ul>
          </div>
          <aside className="local-card">
            <IconBox soft>
              <MapPinned size={20} aria-hidden="true" />
            </IconBox>
            <p>
              Regional teams.
              <br />
              Local addresses.
              <br />
              One CMAC standard.
            </p>
            <Link href="/locations">
              View All Locations <ArrowRight size={11} aria-hidden="true" />
            </Link>
          </aside>
        </section>

        <section id="services" className="panel services-panel" aria-labelledby="services-title">
          <span className="section-label">OUR SERVICE SYSTEM</span>
          <h2 id="services-title">Complete Exterior. Total Protection.</h2>
          <div className="service-grid">
            {services.map(({ title, body, image, href, Icon }) => (
              <article className="service-card" key={title}>
                <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="image-vignette" aria-hidden="true" />
                <IconBox soft>
                  <Icon size={17} aria-hidden="true" />
                </IconBox>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Link href={href}>
                    Explore {title} <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="panel process-panel" aria-labelledby="process-title">
          <div className="process-title">
            <span className="section-label">OUR PROCESS</span>
            <h2 id="process-title">
              Built on a
              <br />
              Disciplined Process
            </h2>
          </div>
          <div className="timeline">
            {processSteps.map(({ n, title, detail, Icon }, index) => (
              <article className={index === 0 ? 'step active-step' : 'step'} key={n}>
                <span className="step-number">{n}</span>
                <span className="step-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel credentials-panel" aria-labelledby="credentials-title">
          <span className="section-label">CERTIFIED. TRUSTED. PROVEN.</span>
          <h2 id="credentials-title">Credentials You Can Verify.</h2>
          <div className="credential-grid">
            {credentials.map((credential) => (
              <article className="credential-card" key={credential.id}>
                <strong className={credential.className}>{credential.logo}</strong>
                <b>{credential.title}</b>
                <span>{credential.note}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="panel press-panel" aria-labelledby="press-title">
          <div>
            <span className="section-label">AS SEEN ON</span>
            <h2 id="press-title">
              CMAC in
              <br />
              the Media
            </h2>
          </div>
          <div className="press-logos">
            {press.map((outlet) => (
              <span key={outlet.id} className={outlet.className}>
                {outlet.name}
              </span>
            ))}
          </div>
        </section>

        <section className="panel reviews-panel" aria-labelledby="reviews-title">
          <div className="review-title">
            <span className="section-label">FROM VERIFIED SOURCES</span>
            <h2 id="reviews-title">
              Customer
              <br />
              Experiences
            </h2>
          </div>
          <div className="review-grid">
            {homeReviews.map((review) => (
              <article className="review-card" key={review.id}>
                <strong aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}</strong>
                <p>“{review.body.length > 205 ? `${review.body.slice(0, 202)}…` : review.body}”</p>
                <div className="review-person">
                  <span>
                    <b>{review.author}</b>
                    <em>{review.city}</em>
                  </span>
                </div>
              </article>
            ))}
          </div>
          <a className="review-source" href={aggregateRating.sourceUrl} rel="noopener noreferrer" target="_blank">
            Read the published Google review source
          </a>
        </section>

        <section className="panel home-locations-panel" aria-labelledby="home-locations-title">
          <div className="home-locations-heading">
            <span className="section-label">DIRECT LOCAL CONTACT</span>
            <h2 id="home-locations-title">CMAC Locations</h2>
            <p>Reach the right regional team by email, phone, or published map listing.</p>
          </div>
          <ul className="home-location-grid">
            {homeLocations.map((market, index) => (
              <li className="home-location-card" key={market.id}>
                <span className="home-location-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>
                  <Link href={market.path}>{homeLocationLabels[market.id]}</Link>
                </h3>
                <div className="home-location-actions">
                  <a href={`mailto:${market.email}`} aria-label={`Email CMAC ${homeLocationLabels[market.id]} at ${market.email}`}>
                    <Mail size={19} aria-hidden="true" />
                  </a>
                  <a href={`tel:${market.phoneE164}`} aria-label={`Call CMAC ${homeLocationLabels[market.id]} at ${market.phone}`}>
                    <Phone size={19} aria-hidden="true" />
                  </a>
                  {market.mapUrl ? (
                    <a
                      href={market.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open CMAC ${homeLocationLabels[market.id]} in Google Maps`}
                    >
                      <MapPin size={19} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="home-location-action-unavailable" aria-label={`No published map link for CMAC ${homeLocationLabels[market.id]}`} role="img">
                      <MapPin size={19} aria-hidden="true" />
                    </span>
                  )}
                </div>
                <a className="home-location-phone" href={`tel:${market.phoneE164}`}>{market.phone}</a>
              </li>
            ))}
          </ul>
          <Link className="home-locations-all" href="/locations">
            Explore all location details <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </section>

        <section className="cta-panel" aria-labelledby="cta-title">
          <div className="cta-fog-layer" aria-hidden="true" />
          <div className="cta-copy">
            <span className="section-label">READY FOR PEACE OF MIND?</span>
            <h2 id="cta-title">
              Let’s Protect
              <br />
              What Matters.
            </h2>
            <p>Request a free inspection and a written recommendation from an experienced CMAC team.</p>
          </div>
          <div className="benefit-card">
            <article>
              <CalendarDays size={29} aria-hidden="true" />
              <h3>Easy Request</h3>
              <p>Start online whenever it is convenient.</p>
            </article>
            <article>
              <Shield size={31} aria-hidden="true" />
              <h3>No Obligation</h3>
              <p>Free inspection and straightforward answers.</p>
            </article>
            <article>
              <Headphones size={31} aria-hidden="true" />
              <h3>Direct Contact</h3>
              <p>Call the CMAC team with urgent questions.</p>
            </article>
            <div className="benefit-actions">
              <RedButton wide href="/quote">
                Request Inspection
              </RedButton>
              <a className="btn btn-outline btn-wide" href={`tel:${org.phoneDigits}`}>
                <Phone size={12} aria-hidden="true" /> {org.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

        <SiteFooter />
      </div>
    </>
  )
}
