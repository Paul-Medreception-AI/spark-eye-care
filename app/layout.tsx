import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sparkeyetx.com'),
  title: 'Spark Eye Care | Advanced Eye Surgery and Personalized Vision Care',
  description: 'Dr. Andrew Plummer brings cutting-edge cataract, glaucoma, and laser eye surgery to Central Texas. Experience world-class surgical outcomes with personalized care focused on your vision goals.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Spark Eye Care | Advanced Eye Surgery and Personalized Vision Care',
    description: 'Dr. Andrew Plummer brings cutting-edge cataract, glaucoma, and laser eye surgery to Central Texas. Experience world-class surgical outcomes with personalized care focused on your vision goals.',
    url: 'https://www.sparkeyetx.com',
    siteName: 'Spark Eye Care',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spark Eye Care'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/">
              <img src="/logo.png" alt="Spark Eye Care" className="h-11 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Conditions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Team</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a href="/contact" className="ml-8 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Schedule Your Consultation</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <img src="/logo.png" alt="Spark Eye Care" className="h-11 w-auto mb-6 brightness-0 invert" />
                <p className="text-gray-300 leading-relaxed">
                  Advancing vision and quality of life for the Kyle community through exceptional surgical and medical eye care.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-cormorant)]">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="text-gray-300 hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-cormorant)]">Contact</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Kyle, TX</li>
                  <li><a href="tel:(512) 377-1076" className="hover:text-white transition-colors">(512) 377-1076</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Spark Eye Care. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-6 text-center md:text-left">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}