import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const pirulen = localFont({
  src: './fonts/pirulen-rg.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-pirulen',
  display: 'swap',
  preload: true,
  fallback: ['Impact', 'Arial Black', 'sans-serif'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CMAC Roofing | Veteran-Owned Roofing, Gutters, Doors & Restoration',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'CMAC Roofing is a veteran-owned roofing, gutter, garage door, and restoration contractor serving Texas, Oklahoma, Arkansas, Tennessee, and Georgia. GAF Master Elite® certified.',
  applicationName: SITE_NAME,
  authors: [{ name: 'CMAC Roofing and Sheet Metal LLC', url: SITE_URL }],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
    images: [
      {
        url: '/hero-house.webp',
        width: 1600,
        height: 1067,
        alt: 'CMAC Roofing residential exterior',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/hero-house.webp'] },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#020406',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${pirulen.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
