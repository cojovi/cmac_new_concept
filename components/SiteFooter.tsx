import Link from 'next/link'
import { org } from '@/content/org'
import { markets } from '@/content/markets'
import { Logo } from '@/components/ui'

const serviceLinks = [
  { label: 'Roofing', href: '/services/roofing' },
  { label: 'Gutters', href: '/services/gutters' },
  { label: 'Garage Doors', href: '/services/doors' },
  { label: 'Restoration', href: '/services/restoration' },
  { label: 'Siding, Windows & More', href: '/services/exteriors' },
  { label: 'Commercial Roofing', href: '/services/roofing/commercial-roofing' },
  { label: 'Multi-Family', href: '/services/roofing/multi-family' },
]

const companyLinks = [
  { label: 'About CMAC', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'Storm Response', href: '/storm-response' },
  { label: 'Insurance Claims', href: '/insurance-claims' },
  { label: 'Warranty & Registration', href: '/warranty' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Partner With CMAC', href: '/partners' },
]

const resourceLinks = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'How Pricing Works', href: '/pricing' },
  { label: 'Get a Free Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
  { label: 'Site Index', href: '/sitemap-page' },
  { label: 'AI & Developer Docs', href: '/developers' },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="footer-panel">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo small />
          <p>
            Veteran-owned roofing, gutters, garage doors, and restoration across Texas, Oklahoma,
            Arkansas, Tennessee, and Georgia. {org.slogan}
          </p>
        </div>

        <nav aria-labelledby="footer-services">
          <h3 id="footer-services">Services</h3>
          {serviceLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-labelledby="footer-company">
          <h3 id="footer-company">Company</h3>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-labelledby="footer-resources">
          <h3 id="footer-resources">Resources</h3>
          {resourceLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-labelledby="footer-locations">
          <h3 id="footer-locations">Locations</h3>
          {markets.map((m) => (
            <Link key={m.id} href={m.path}>
              {m.name}
            </Link>
          ))}
        </nav>

        <address aria-labelledby="footer-contact">
          <h3 id="footer-contact">Contact</h3>
          <a href={`tel:${org.phoneDigits}`}>{org.phone}</a>
          <a href={`mailto:${org.email}`}>{org.email}</a>
          <span>
            {org.address.street}
            <br />
            {org.address.city}, {org.address.state} {org.address.zip}
          </span>
          <span>24/7 storm &amp; water emergency response</span>
        </address>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {org.legalName}. All rights reserved.
        </span>
        <span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/accessibility">Accessibility</Link>
        </span>
      </div>
    </footer>
  )
}
