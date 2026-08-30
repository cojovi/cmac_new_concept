import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Star,
} from 'lucide-react'
import type { Block, Cta, Market, Section } from '@/content/types'
import { credentials, org, press } from '@/content/org'
import { IconBox } from '@/components/ui'
import { QuoteForm } from '@/components/QuoteForm'
import { TopLink } from '@/components/TopLink'

/* ------------------------------------------------------------------ shared */

function Label({ children, red }: { children?: React.ReactNode; red?: boolean }) {
  if (!children) return null
  return <span className={red ? 'section-label red' : 'section-label'}>{children}</span>
}

function Buttons({ cta }: { cta?: Cta[] }) {
  if (!cta?.length) return null
  return (
    <div className="hero-buttons">
      {cta.map(({ label, href, kind = 'outline' }) => {
        const cls = kind === 'primary' ? 'btn btn-red' : 'btn btn-outline'
        return href.startsWith('/') ? (
          <Link className={cls} key={label} href={href}>
            {label}
            {kind === 'primary' ? <ArrowRight size={13} strokeWidth={2.6} aria-hidden="true" /> : null}
          </Link>
        ) : (
          <a className={cls} key={label} href={href}>
            {label}
            {kind === 'primary' ? <ArrowRight size={13} strokeWidth={2.6} aria-hidden="true" /> : null}
          </a>
        )
      })}
    </div>
  )
}

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>
          case 'h3':
            return <h3 key={i}>{b.text}</h3>
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )
          case 'note':
            return (
              <aside className="prose-note" key={i}>
                {b.text}
              </aside>
            )
          default:
            return <p key={i}>{b.text}</p>
        }
      })}
    </>
  )
}

/* --------------------------------------------------------------- sections */

function HeroSection({ s }: { s: Extract<Section, { k: 'hero' }> }) {
  const classes = [
    'panel',
    'page-hero',
    s.form ? 'page-hero-form' : '',
    s.image ? 'page-hero-with-image' : '',
  ].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      {s.image ? (
        <div className="page-hero-media">
          <Image
            src={s.image}
            alt={s.imageAlt ?? ''}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 68vw"
            style={{ objectPosition: s.imagePosition ?? 'center' }}
          />
          <div className="page-hero-media-wash" aria-hidden="true" />
          <span className="page-hero-media-index" aria-hidden="true">CMAC / FIELD SYSTEM</span>
        </div>
      ) : null}
      <div className="page-hero-copy">
        <Label red>{s.eyebrow}</Label>
        <h1>{s.h1}</h1>
        <p className="hero-sub">{s.sub}</p>
        {s.body ? <p className="hero-body">{s.body}</p> : null}
        <Buttons cta={s.cta} />
        {s.image ? (
          <ul className="page-hero-proof" aria-label="CMAC service facts">
            <li>Veteran-owned</li>
            <li>Five-state service</li>
            <li>Free inspection</li>
          </ul>
        ) : null}
      </div>
      {s.form ? <QuoteForm formKind={s.formVariant ?? 'inspection'} /> : null}
    </section>
  )
}

function ProseSection({ s }: { s: Extract<Section, { k: 'prose' }> }) {
  const intro: Block[] = []
  const chapters: { heading: string; blocks: Block[] }[] = []
  let current: { heading: string; blocks: Block[] } | undefined

  for (const block of s.blocks) {
    if (block.t === 'h2') {
      current = { heading: block.text, blocks: [] }
      chapters.push(current)
    } else if (current) {
      current.blocks.push(block)
    } else {
      intro.push(block)
    }
  }

  const chapterId = (heading: string, index: number) => {
    const slug = heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .slice(0, 58)
    return `field-brief-${index + 1}-${slug || 'section'}`
  }

  return (
    <section className="panel story-panel">
      <div className="story-system-bar" aria-hidden="true">
        <span>CMAC / FIELD BRIEF</span>
        <span>{String(Math.max(chapters.length, 1)).padStart(2, '0')} SECTIONS</span>
      </div>
      <div className={chapters.length ? 'story-layout' : 'story-layout story-layout-single'}>
        <div className="story-overview">
          <div className="story-overview-icon" aria-hidden="true">
            <FileText size={20} strokeWidth={1.8} />
          </div>
          <Label red>{s.label ?? 'THE FIELD BRIEF'}</Label>
          <h2>{s.heading ?? 'The details that matter.'}</h2>
          {intro.length ? (
            <div className="story-intro prose">
              <Prose blocks={intro} />
            </div>
          ) : null}
          {chapters.length ? (
            <nav className="story-index" aria-label="On this page">
              <span>ON THIS PAGE</span>
              <ol>
                {chapters.map((chapter, index) => (
                  <li key={`${chapter.heading}-${index}`}>
                    <a href={`#${chapterId(chapter.heading, index)}`}>
                      <b>{String(index + 1).padStart(2, '0')}</b>
                      <span>{chapter.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
        </div>
        {chapters.length ? (
          <div className="story-chapter-grid">
            {chapters.map((chapter, index) => (
              <article
                className={`story-chapter story-chapter-${(index % 4) + 1}`}
                id={chapterId(chapter.heading, index)}
                key={`${chapter.heading}-${index}`}
              >
                <header>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>SCOPE MODULE</small>
                </header>
                <h2>{chapter.heading}</h2>
                <div className="prose story-copy">
                  <Prose blocks={chapter.blocks} />
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function FeaturesSection({ s }: { s: Extract<Section, { k: 'features' }> }) {
  return (
    <section className="panel features-panel">
      <Label>SCOPE OF WORK</Label>
      <h2>{s.heading}</h2>
      <div className="features-grid">
        {s.items.map((item) => (
          <article className="feature-card" key={item.title}>
            <IconBox soft>
              <CheckCircle2 size={17} aria-hidden="true" />
            </IconBox>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServiceGridSection({ s }: { s: Extract<Section, { k: 'serviceGrid' }> }) {
  return (
    <section id="services" className="panel services-panel">
      <Label>{s.label ?? 'SERVICE SYSTEM'}</Label>
      <h2>{s.heading}</h2>
      <div className="service-grid service-grid-flow">
        {s.items.map((item) => (
          <article className="service-card" key={item.path}>
            {item.image ? (
              <div className="service-card-media">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ''}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 28vw"
                  style={{ objectPosition: item.imagePosition ?? 'center' }}
                />
                <div className="image-vignette" aria-hidden="true" />
              </div>
            ) : null}
            <div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <TopLink href={item.path} scroll>
                Explore {item.name} <ArrowRight size={11} aria-hidden="true" />
              </TopLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProcessSection({ s }: { s: Extract<Section, { k: 'process' }> }) {
  return (
    <section id="process" className="panel process-panel">
      <div className="process-title">
        <Label>{s.label ?? 'OUR PROCESS'}</Label>
        <h2>{s.heading}</h2>
      </div>
      <ol className="timeline">
        {s.steps.map((step, i) => (
          <li className={i === 0 ? 'step active-step' : 'step'} key={step.title}>
            <span className="step-number">{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function BrandsSection({ s }: { s: Extract<Section, { k: 'brands' }> }) {
  return (
    <section className="panel brands-panel">
      <Label>TRUSTED MANUFACTURERS</Label>
      <h2>{s.heading}</h2>
      <ul className="brand-grid">
        {s.brands.map((b) => (
          <li className="brand-card" key={b.id}>
            <strong>{b.name}</strong>
            <span>{b.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function MarketsSection({ s }: { s: Extract<Section, { k: 'markets' }> }) {
  return (
    <section id="locations" className="panel markets-panel">
      <Label red>{s.label ?? 'SERVICE AREA'}</Label>
      <h2>{s.heading}</h2>
      <ul className="market-grid">
        {s.markets.map((m) => (
          <li className="market-card" key={m.id}>
            <IconBox soft>
              <MapPin size={16} aria-hidden="true" />
            </IconBox>
            <h3>
              <Link href={m.path}>{m.name}</Link>
            </h3>
            {m.street ? (
              <address>
                {m.street}
                <br />
                {m.city}, {m.stateCode} {m.zip}
              </address>
            ) : (
              <address>Regional scheduling for {m.areasServed.slice(0, 3).join(', ')}</address>
            )}
            <a href={`tel:${m.phoneE164.replace(/[^0-9+]/g, '')}`}>{m.phone}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function NapSection({ market: m }: { market: Market }) {
  return (
    <section className="panel nap-panel">
      <div className="nap-card">
        <IconBox soft>
          <MapPinned size={20} aria-hidden="true" />
        </IconBox>
        <h2>CMAC {m.name}</h2>
        {m.street ? (
          <address>
            {m.street}
            <br />
            {m.city}, {m.stateCode} {m.zip}
          </address>
        ) : (
          <address>
            No walk-in office in {m.name} yet — projects are scheduled through our regional team.
          </address>
        )}
        <p className="nap-links">
          <a href={`tel:${m.phoneE164.replace(/[^0-9+]/g, '')}`}>
            <Phone size={12} aria-hidden="true" /> {m.phone}
          </a>
          <a href={`mailto:${m.email}`}>
            <Mail size={12} aria-hidden="true" /> {m.email}
          </a>
          {m.mapUrl ? (
            <a href={m.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={12} aria-hidden="true" /> Open map
            </a>
          ) : null}
        </p>
      </div>
      <div className="nap-areas">
        <h3>Areas served</h3>
        <ul>
          {m.areasServed.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CredentialsSection({ s }: { s: Extract<Section, { k: 'credentials' }> }) {
  return (
    <section className="panel credentials-panel">
      <Label>{s.label ?? 'CERTIFIED. TRUSTED. PROVEN.'}</Label>
      <h2>{s.heading}</h2>
      <ul className="credential-grid">
        {credentials.map((c) => (
          <li className="credential-card" key={c.id}>
            <strong className={c.className}>{c.logo}</strong>
            <b>{c.title}</b>
            <span>{c.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function PressSection({ s }: { s: Extract<Section, { k: 'press' }> }) {
  return (
    <section className="panel press-panel">
      <div>
        <Label>{s.label ?? 'FEATURED ON'}</Label>
        <h2>{s.heading}</h2>
      </div>
      <ul className="press-logos">
        {press.map((p) => (
          <li className={p.className} key={p.id}>
            {p.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

function ReviewsSection({ s }: { s: Extract<Section, { k: 'reviews' }> }) {
  if (!s.reviews.length) return null
  return (
    <section id="reviews" className="panel reviews-panel">
      <div className="review-title">
        <Label>{s.label ?? 'WHAT OUR CLIENTS SAY'}</Label>
        <h2>{s.heading}</h2>
      </div>
      <ul className="review-grid">
        {s.reviews.map((r) => (
          <li className="review-card" key={r.id}>
            <strong aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }, (_, i) => (
                <Star key={i} size={12} fill="currentColor" aria-hidden="true" />
              ))}
            </strong>
            <p>{r.body}</p>
            <div className="review-person">
              <span>
                <b>{r.author}</b>
                <em>
                  {r.city} ·{' '}
                  {r.sourceUrl ? (
                    <a href={r.sourceUrl} rel="noopener noreferrer">
                      {r.source}
                    </a>
                  ) : (
                    r.source
                  )}
                </em>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

/**
 * Native <details> rather than a JS accordion. The answers sit in the raw HTML whether a panel is
 * open or closed, which is exactly what the "content without JavaScript" audit check reads — and
 * what the current Wix FAQ page gets wrong.
 */
function FaqSection({ s }: { s: Extract<Section, { k: 'faq' }> }) {
  if (!s.items.length) return null
  return (
    <section id="faq" className="panel faq-panel">
      <Label>{s.label ?? 'COMMON QUESTIONS'}</Label>
      <h2>{s.heading}</h2>
      <div className="faq-list">
        {s.items.map((f, i) => (
          <details key={f.id} name="faq" open={i === 0}>
            <summary>
              <h3>{f.q}</h3>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function OffersSection({ s }: { s: Extract<Section, { k: 'offers' }> }) {
  return (
    <section className="panel offers-panel">
      <Label red>WHAT IS FREE</Label>
      <h2>{s.heading}</h2>
      <ul className="offer-grid">
        {s.offers.map((o) => (
          <li className="offer-card" key={o.name}>
            <IconBox soft>
              <Award size={17} aria-hidden="true" />
            </IconBox>
            <h3>{o.name}</h3>
            {o.price === 0 ? <b className="offer-price">No charge</b> : null}
            <p>{o.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function LinksSection({ s }: { s: Extract<Section, { k: 'links' }> }) {
  return (
    <section className="panel links-panel">
      <Label>EXPLORE NEXT</Label>
      <h2>{s.heading}</h2>
      <ul className="link-grid">
        {s.items.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <b>{item.name}</b>
              {item.summary ? <span>{item.summary}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function FormSection({ s }: { s: Extract<Section, { k: 'form' }> }) {
  return (
    <section className="panel form-panel">
      <div>
        <h2>{s.heading}</h2>
        {s.body ? <p>{s.body}</p> : null}
        <p className="form-alt">
          Prefer to talk? Call{' '}
          <a href={`tel:${org.phoneDigits}`}>
            <Phone size={12} aria-hidden="true" /> {org.phone}
          </a>
        </p>
      </div>
      <QuoteForm
        id={s.variant === 'roof-registration' ? 'roof-registration' : 'quote'}
        title={s.variant === 'roof-registration' ? 'REGISTER YOUR ROOF' : 'REQUEST YOUR FREE INSPECTION'}
        cta={s.variant === 'roof-registration' ? 'Register Roof' : 'Request Inspection'}
        formKind={s.variant ?? 'inspection'}
      />
    </section>
  )
}

function CtaSection({ s }: { s: Extract<Section, { k: 'cta' }> }) {
  return (
    <section className="cta-panel cta-panel-slim">
      <div className="cta-fog-layer" aria-hidden="true" />
      <div className="cta-copy">
        <Label>READY WHEN YOU ARE</Label>
        <h2>{s.heading}</h2>
        <p>{s.body}</p>
      </div>
      <div className="cta-actions">
        <Buttons cta={s.cta} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- dispatcher */

export function RenderSection({ section }: { section: Section }) {
  switch (section.k) {
    case 'hero':
      return <HeroSection s={section} />
    case 'prose':
      return <ProseSection s={section} />
    case 'features':
      return <FeaturesSection s={section} />
    case 'serviceGrid':
      return <ServiceGridSection s={section} />
    case 'process':
      return <ProcessSection s={section} />
    case 'brands':
      return <BrandsSection s={section} />
    case 'markets':
      return <MarketsSection s={section} />
    case 'nap':
      return <NapSection market={section.market} />
    case 'credentials':
      return <CredentialsSection s={section} />
    case 'press':
      return <PressSection s={section} />
    case 'reviews':
      return <ReviewsSection s={section} />
    case 'faq':
      return <FaqSection s={section} />
    case 'offers':
      return <OffersSection s={section} />
    case 'links':
      return <LinksSection s={section} />
    case 'form':
      return <FormSection s={section} />
    case 'cta':
      return <CtaSection s={section} />
  }
}
