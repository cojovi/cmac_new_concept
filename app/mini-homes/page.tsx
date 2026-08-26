import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRight,
  Box,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Factory,
  Hammer,
  Headphones,
  LayoutGrid,
  MapPinned,
  Package,
  Phone,
  Shield,
  Truck,
} from 'lucide-react'
import { QuoteForm } from '@/components/QuoteForm'
import { JsonLd } from '@/components/JsonLd'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { IconBox, RedButton } from '@/components/ui'
import { org } from '@/content/org'
import { docByPath } from '@/content/docs'
import { graphFor } from '@/lib/jsonld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'CMAC Mini-Homes | Texas-Built Modular Container Spaces',
  description:
    'Explore CMAC container-built mini-homes, workforce housing, offices, and flexible spaces made in Texas and delivered turn-key.',
  alternates: { canonical: '/mini-homes' },
}

const trustBadges = [
  { title: 'TEXAS BUILT', detail: 'Built in the Lone Star State', Icon: MapPinned },
  { title: 'FLEXIBLE LAYOUTS', detail: 'Designed around your use', Icon: LayoutGrid },
  { title: 'TURN-KEY OPTIONS', detail: 'Finished and delivery ready', Icon: Shield },
  { title: 'DELIVERY SUPPORT', detail: 'Site planning included', Icon: Truck },
]

const models = [
  {
    title: 'Turn-Key Delivery',
    body: 'Finished interiors can include a kitchenette, full bath, HVAC, and vinyl plank flooring.',
    image: '/minihomes-hero.webp',
    Icon: Package,
  },
  {
    title: 'Workforce Housing',
    body: 'A modular housing option for construction teams, remote sites, and temporary operations.',
    image: '/minihomes-workforce.svg',
    Icon: Building2,
  },
  {
    title: 'Flexible Spaces',
    body: 'Steel-shell layouts for compact living, site offices, and other project-specific uses.',
    image: '/minihomes-modular.svg',
    Icon: Factory,
  },
]

const processSteps = [
  { n: '1', title: 'Consult & Design', detail: 'Confirm the use, layout, finishes, and site.', Icon: ClipboardCheck },
  { n: '2', title: 'Shell & Frame', detail: 'Reinforce the steel shell and its openings.', Icon: Box },
  { n: '3', title: 'Systems', detail: 'Complete electrical and plumbing rough-in.', Icon: Hammer },
  { n: '4', title: 'Build-Out', detail: 'Install insulation, walls, flooring, and fixtures.', Icon: Building2 },
  { n: '5', title: 'Delivery', detail: 'Prepare the completed unit for the approved site.', Icon: Truck },
]

const anatomyLayers = [
  { n: '01', title: 'Steel Container Shell', note: 'Corrugated Corten steel foundation.' },
  { n: '02', title: 'Door & Window Framing', note: 'Steel reinforcement at new openings.' },
  { n: '03', title: 'Interior Framing', note: 'Wood-stud partitions create a flexible plan.' },
  { n: '04', title: 'Insulation & Barrier', note: 'Spray-foam insulation supports comfort.' },
  { n: '05', title: 'Electrical & Plumbing', note: 'Systems are roughed in before walls close.' },
  { n: '06', title: 'Flooring & Finishes', note: 'Interior materials complete the living space.' },
]

const specs = [
  { logo: '40ft', title: 'Flagship Shell', note: '40ft × 8ft × 8.5ft footprint' },
  { logo: '8ft', title: 'Interior Height', note: 'Approximately 8ft finished ceiling' },
  { logo: '250', title: 'Delivery Miles', note: 'First 250 miles included' },
  { logo: '5', title: 'Build Cycle', note: 'Published five-day build target' },
  { logo: 'TX', title: 'Texas Built', note: 'Constructed in the Lone Star State' },
  { logo: '1', title: 'Coordinated Team', note: 'Design, build, and delivery support' },
]

const miniHomesDoc = docByPath('/mini-homes')!

export default function Page() {
  return (
    <div className="site-shell home-page minihomes-page">
      <JsonLd graph={graphFor(miniHomesDoc)} />
      <SiteHeader variant="minihomes" />

      <main id="main-content">
        <section className="hero hero-minihomes" aria-labelledby="minihomes-title">
          <div
            className="minihomes-hero-bg"
            role="img"
            aria-label="CMAC container mini-home with exterior lighting"
          />
          <div className="hero-copy">
            <h1 id="minihomes-title">
              CMAC
              <br />
              CONTAINERS
            </h1>
            <p className="hero-sub">
              Container-built homes and spaces.
              <br />
              Texas-built quality.
            </p>
            <p className="hero-body">
              From modern mini-homes to offices and workforce housing, CMAC creates durable container spaces around
              the way you plan to use them.
            </p>
            <div className="hero-buttons">
              <RedButton href="#consultation">Request Consultation</RedButton>
              <a className="btn btn-outline" href="#models">
                Explore the Build
              </a>
            </div>
          </div>

          <QuoteForm
            id="consultation"
            title="REQUEST CONSULTATION"
            cta="Send Project Request"
            formKind="mini-homes"
          />

          <div className="trust-row" aria-label="CMAC Mini-Homes highlights">
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

        <section id="models" className="panel states-panel minihomes-flagship-panel" aria-labelledby="model-title">
          <div className="minihomes-flagship-art" aria-hidden="true" />
          <div className="states-copy">
            <span className="section-label red">FLAGSHIP SHELL</span>
            <h2 id="model-title">
              40ft Modular
              <br />
              Container
            </h2>
            <ul>
              <li>40ft × 8ft × 8.5ft shell</li>
              <li>Approximately 8ft ceiling</li>
              <li>Flexible interior planning</li>
              <li className="dim">First 250 delivery miles included</li>
            </ul>
          </div>
          <aside className="local-card">
            <IconBox soft>
              <Truck size={20} aria-hidden="true" />
            </IconBox>
            <p>
              Turn-key options.
              <br />
              Delivery planning.
              <br />
              Built in Texas.
            </p>
            <a href="#consultation">
              Discuss Your Site <ArrowRight size={11} aria-hidden="true" />
            </a>
          </aside>
        </section>

        <section className="panel services-panel" aria-labelledby="models-title">
          <span className="section-label">CONFIGURATIONS</span>
          <h2 id="models-title">Built for Living and Working.</h2>
          <div className="service-grid minihomes-service-grid">
            {models.map(({ title, body, image, Icon }) => (
              <article className="service-card" key={title}>
                <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="image-vignette" aria-hidden="true" />
                <IconBox soft>
                  <Icon size={17} aria-hidden="true" />
                </IconBox>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <a href="#consultation">
                    Start a Conversation <ArrowRight size={11} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="panel process-panel" aria-labelledby="container-process-title">
          <div className="process-title">
            <span className="section-label">OUR PROCESS</span>
            <h2 id="container-process-title">
              Containers,
              <br />
              Reimagined.
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

        <section className="panel credentials-panel" aria-labelledby="specs-title">
          <span className="section-label">PUBLISHED SPECIFICATIONS</span>
          <h2 id="specs-title">Compact Footprint. Serious Build.</h2>
          <div className="credential-grid">
            {specs.map((spec) => (
              <article className="credential-card" key={spec.title}>
                <strong className="minihomes-spec">{spec.logo}</strong>
                <b>{spec.title}</b>
                <span>{spec.note}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="panel anatomy-panel" aria-labelledby="anatomy-title">
          <span className="section-label">UNDER THE CLADDING</span>
          <h2 id="anatomy-title">
            Anatomy of a
            <br />
            Container Space
          </h2>
          <p className="anatomy-lead">Six core systems turn the steel shell into a finished, usable environment.</p>
          <div className="anatomy-grid">
            {anatomyLayers.map((layer) => (
              <article className="anatomy-card" key={layer.n}>
                <span className="anatomy-number">{layer.n}</span>
                <h3>{layer.title}</h3>
                <p>{layer.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel press-panel minihomes-press-panel" aria-labelledby="launch-title">
          <div>
            <span className="section-label">PROJECT PLANNING</span>
            <h2 id="launch-title">
              Start With
              <br />
              the Right Site
            </h2>
          </div>
          <div className="press-logos minihomes-launch-logos">
            <span className="minihomes-launch-stat">5</span>
            <span className="minihomes-launch-copy">
              Day Build Target
              <small>Confirm current timing with the CMAC team</small>
            </span>
            <a className="minihomes-launch-domain" href="https://cmaccontainers.com">
              cmaccontainers.com
            </a>
          </div>
        </section>

        <section className="cta-panel cta-panel-minihomes" aria-labelledby="mini-cta-title">
          <div className="cta-fog-layer" aria-hidden="true" />
          <div className="cta-copy">
            <span className="section-label">PLAN YOUR SPACE</span>
            <h2 id="mini-cta-title">
              Bring the Idea.
              <br />
              We’ll Talk Details.
            </h2>
            <p>Share the intended use and site, then CMAC can discuss layout, finishes, delivery, and next steps.</p>
          </div>
          <div className="benefit-card">
            <article>
              <CalendarDays size={29} aria-hidden="true" />
              <h3>Project Intake</h3>
              <p>Tell us the intended use and location.</p>
            </article>
            <article>
              <Shield size={31} aria-hidden="true" />
              <h3>Clear Scope</h3>
              <p>Review the build and delivery details.</p>
            </article>
            <article>
              <Headphones size={31} aria-hidden="true" />
              <h3>Direct Contact</h3>
              <p>Speak with the CMAC team about the concept.</p>
            </article>
            <div className="benefit-actions">
              <RedButton wide href="#consultation">
                Request Consultation
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
  )
}
