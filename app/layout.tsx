import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: "Spark Eye Care | Advanced Surgical Eye Care with a Personal Touch",
  description: "Dr. Andrew Plummer combines cutting-edge technology with personalized care to restore and protect your vision. From cataract surgery to glaucoma treatment, we deliver world-class results close to home.",
  metadataBase: new URL('https://sparkeyetx.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/">
              <img src="/logo.png" alt="Spark Eye Care" className="h-11 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Conditions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Team</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a href="/contact" className="ml-8 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Schedule Your Eye Exam</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <img src="/logo.png" alt="Spark Eye Care" className="h-11 w-auto mb-6" />
                <p className="text-white/80 leading-relaxed">Restoring clarity and protecting vision for the Kyle community with advanced eye care.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="text-white/80 hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="text-white/80 hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="tel:(512) 377-1076" className="text-white/80 hover:text-white transition-colors">
                      (512) 377-1076
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <p className="text-white/60 text-sm">© {new Date().getFullYear()} Spark Eye Care</p>
                <div className="flex gap-6 text-sm">
                  <a href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                  <a href="/sms-terms" className="text-white/60 hover:text-white transition-colors">SMS Terms</a>
                </div>
              </div>
              <p className="text-white/50 text-xs text-center md:text-left">This website does not collect protected health information. All clinical intake is handled through a secure patient portal.</p>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}