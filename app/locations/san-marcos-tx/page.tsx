import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Doctor Serving San Marcos, TX | Spark Eye Care',
  description: 'Advanced eye care for San Marcos residents. Dr. Andrew Plummer sees patients at 1180 Seton Parkway in Kyle, TX — about 20 minutes north of San Marcos on I-35.',
  alternates: { canonical: '/locations/san-marcos-tx' },
  openGraph: {
    title: 'Eye Doctor Serving San Marcos, TX | Spark Eye Care',
    description: 'Cataract, LASIK, and glaucoma care for San Marcos patients, just 20 minutes up I-35 in Kyle.',
    url: 'https://sparkeyetx.com/locations/san-marcos-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SanMarcosTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-6 text-sm opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>San Marcos, TX</span>
          </nav>

          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Serving San Marcos, TX
          </h1>

          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Advanced surgical eye care for San Marcos and Hays County residents — a short drive up I-35 in Kyle. Cataract surgery, LASIK, glaucoma treatment, and routine eye exams with Dr. Andrew Plummer.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact#form"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105 hover:shadow-xl"
            >
              Request Appointment
            </a>
            <a
              href="tel:+15123771076"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              (512) 377-1076
            </a>
          </div>
        </div>
      </section>

      {/* Address + Map + Drive info */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-stretch">
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-10 animate-fade-up">
              <h2 className="font-['Cormorant',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
                20 Minutes from San Marcos
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Our office sits on the Seton Medical Center Hays campus in Kyle, TX — a straight shot up Interstate 35 from downtown San Marcos and Texas State University.
              </p>
              <address className="not-italic text-[var(--color-ink)] leading-relaxed text-lg mb-6">
                <strong>Spark Eye Care</strong><br />
                1180 Seton Parkway, Suite 330<br />
                Kyle, TX 78640
              </address>
              <dl className="text-[var(--color-ink)] text-sm grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mb-8">
                <dt className="font-semibold">Phone</dt>
                <dd><a href="tel:+15123771076" className="text-[var(--color-primary)] hover:underline">(512) 377-1076</a></dd>
                <dt className="font-semibold pt-2">Mon–Thu</dt>
                <dd className="pt-2">8:00 AM – 5:00 PM</dd>
                <dt className="font-semibold">Friday</dt>
                <dd>8:00 AM – 12:00 PM</dd>
              </dl>
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=San+Marcos+TX&destination=1180+Seton+Parkway+Suite+330+Kyle+TX+78640"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg w-fit group"
              >
                Directions from San Marcos
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="relative min-h-[350px] lg:min-h-[440px] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
              <iframe
                src="https://www.google.com/maps?q=1180+Seton+Parkway+Suite+330+Kyle+TX+78640&output=embed"
                title="Map from San Marcos, TX to Spark Eye Care in Kyle"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4 text-center">
            Why San Marcos Patients Choose Spark
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Surgical-level eye care without the drive into Austin. Everything from routine exams to premium cataract surgery, delivered by a board-certified ophthalmologist.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Premium Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Advanced lens options and small-incision technique. Dr. Plummer was voted "Best of Hays County" in eye care in 2023.
              </p>
              <a href="/services/cataract-surgery" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                LASIK & Vision Correction
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Perfect for students, professionals, and anyone tired of glasses and contacts. Free consultations to determine your best option.
              </p>
              <a href="/services/laser-eye-surgery" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Glaucoma, Dry Eye & Diabetic Care
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Ongoing medical eye care, diabetic eye exams, and dry eye treatment for San Marcos patients of all ages.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                How far is Spark Eye Care from San Marcos?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                About 15 to 20 miles north on Interstate 35 — usually a 20 to 25 minute drive depending on traffic. Our office is on the Seton Medical Center Hays campus at 1180 Seton Parkway in Kyle.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Do you see Texas State University students?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. We regularly see students and staff from Texas State for LASIK consultations, contact lens issues, and routine eye exams. Fill out the contact form or call (512) 377-1076 to schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                What insurance do you accept?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We accept most major medical insurance plans. Call our office and our team will verify your benefits before your visit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Can I do a telehealth visit instead of driving up?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes — for follow-ups, prescription refills, and non-urgent eye questions. Surgical evaluations and imaging still require an in-office visit. <a href="/telehealth" className="text-[var(--color-primary)] hover:underline">Learn more about telehealth</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-8">
            Ready to Schedule?
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Join the San Marcos and Hays County patients who trust Spark Eye Care for their eye health. Request an appointment today.
          </p>
          <a
            href="/contact#form"
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105 hover:shadow-xl"
          >
            Request Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
