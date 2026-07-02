import Image from 'next/image'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Spark Eye Care | Kyle, TX | (512) 377-1076',
  description: 'Schedule an eye exam or consultation with Dr. Andrew Plummer. Serving Kyle, San Marcos, and Central Texas. Call (512) 377-1076 or send a message.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-cormorant text-6xl font-light mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90">We'd love to hear from you. Reach out to schedule an appointment or ask a question.</p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_447730359.jpeg"
                alt="Smiling patient welcomed at Spark Eye Care"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div id="form" className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] animate-fade-up">
              <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">Visit Us</h3>
                <address className="not-italic text-[var(--color-ink)] leading-relaxed">
                  1180 Seton Parkway<br />
                  Suite 330<br />
                  Kyle, TX 78640
                </address>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">Call or Fax</h3>
                <a href="tel:+15123771076" className="font-cormorant text-3xl font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors block mb-2">(512) 377-1076</a>
                <p className="text-sm text-[var(--color-muted)]">Fax: (512) 287-7071</p>
              </div>

              <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">Hours</h3>
                <dl className="text-[var(--color-ink)] leading-relaxed text-sm grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <dt className="font-medium">Mon–Thu</dt>
                  <dd>8:00 AM – 5:00 PM</dd>
                  <dt className="font-medium">Friday</dt>
                  <dd>8:00 AM – 12:00 PM</dd>
                  <dt className="font-medium">Sat–Sun</dt>
                  <dd className="text-[var(--color-muted)]">Closed</dd>
                </dl>
              </div>

              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold mb-3">Request Your Appointment</h3>
                <p className="mb-6 text-white/90">Prefer to book by phone? Call <a href="tel:+15123771076" className="underline hover:no-underline">(512) 377-1076</a>. Otherwise, fill out the form and our team will follow up within one business day.</p>
                <a href="#form" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-xl font-semibold hover:bg-[var(--color-cream)] transition-colors">Request Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
            <div className="grid lg:grid-cols-[1fr_2fr]">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-4">Find Us in Kyle</h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                  Just off Interstate 35 in the Seton Medical Center Hays complex.
                </p>
                <address className="not-italic text-[var(--color-ink)] leading-relaxed mb-6">
                  <strong>Spark Eye Care</strong><br />
                  1180 Seton Parkway, Suite 330<br />
                  Kyle, TX 78640
                </address>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1180+Seton+Parkway+Suite+330+Kyle+TX+78640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg w-fit group"
                >
                  Get Directions
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="relative min-h-[350px] lg:min-h-[420px]">
                <iframe
                  src="https://www.google.com/maps?q=1180+Seton+Parkway+Suite+330+Kyle+TX+78640&output=embed"
                  title="Map to Spark Eye Care in Kyle, TX"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
