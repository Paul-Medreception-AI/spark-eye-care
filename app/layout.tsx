import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import MobileMenu from '@/components/MobileMenu'
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
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Conditions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">Meet the Doctor</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a
                href="https://spark.ema.md/ema/pay/Online#/pm/payfac/pay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap"
              >
                Pay My Bill
              </a>
              <a href="tel:+15123771076" className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (512) 377-1076
              </a>
              <a href="/contact#form" className="ml-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap">Request Appointment</a>
            </nav>
            <MobileMenu />
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-16">
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
                  <li><a href="/team" className="text-white/80 hover:text-white transition-colors">Meet the Doctor</a></li>
                  <li><a href="https://spark.ema.md/ema/pay/Online#/pm/payfac/pay" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Pay My Bill</a></li>
                  <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <address className="not-italic text-white/80 leading-relaxed mb-3">
                  1180 Seton Parkway<br />
                  Suite 330<br />
                  Kyle, TX 78640
                </address>
                <p className="mb-1">
                  <a href="tel:+15123771076" className="text-white/80 hover:text-white transition-colors">
                    (512) 377-1076
                  </a>
                </p>
                <p className="text-white/60 text-sm mb-4">Fax: (512) 287-7071</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Mon–Thu: 8:00 AM – 5:00 PM<br />
                  Friday: 8:00 AM – 12:00 PM<br />
                  <span className="text-white/50">Sat–Sun: Closed</span>
                </p>

                <div className="flex gap-4 mt-6">
                  <a href="https://www.facebook.com/p/Spark-Eye-Care-61566761185568/" target="_blank" rel="noopener noreferrer" aria-label="Spark Eye Care on Facebook" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/sparkeyetx/" target="_blank" rel="noopener noreferrer" aria-label="Spark Eye Care on Instagram" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@SparkEyeTx" target="_blank" rel="noopener noreferrer" aria-label="Spark Eye Care on YouTube" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="https://www.google.com/maps?cid=7516118286067296078" target="_blank" rel="noopener noreferrer" aria-label="Spark Eye Care Google Reviews (5.0 stars, 366 reviews)" className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.416 8.253L12 19.771l-7.416 4.079L6 15.597 0 9.75l8.332-1.595z" />
                    </svg>
                    <span className="text-xs">5.0 · 366 reviews</span>
                  </a>
                </div>
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

        <Script
          src="https://widget.medreception.ai/embed.js"
          data-client-id="spark-eye-care"
          strategy="afterInteractive"
        />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}