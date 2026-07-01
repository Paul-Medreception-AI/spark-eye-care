import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
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
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Conditions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Meet the Doctor</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a
                href="https://spark.ema.md/ema/pay/Online#/pm/payfac/pay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
              >
                Pay My Bill
              </a>
              <a href="tel:+15123771076" className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (512) 377-1076
              </a>
              <a href="/contact#form" className="ml-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Request Appointment</a>
            </nav>
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

        {/*
          Klara messaging widget — DISABLED on preview URLs.
          Klara authorizes by hostname; only sparkeyetx.com is allowlisted so the
          widget renders blank elsewhere (opens empty white panel). Enable once
          DNS cuts over to sparkeyetx.com, or after confirming AI-chat widget
          replacement with Dr. Plummer.
          Widget ID: bdcdd645-fe28-4dec-b7c7-fc53c45b7dc8

          <Script id="klara-init" strategy="afterInteractive">
            {\`window.klaraWidget = window.klaraWidget || [];
window.klaraWidget.push(["setWidgetId", "bdcdd645-fe28-4dec-b7c7-fc53c45b7dc8"]);\`}
          </Script>
          <Script
            src="https://s3.amazonaws.com/widget-frontend.klara.com/bundle.js"
            strategy="afterInteractive"
          />
        */}
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}