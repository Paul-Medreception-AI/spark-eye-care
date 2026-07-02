import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Doctor in Kyle, TX | Spark Eye Care | Dr. Andrew Plummer',
  description: 'Comprehensive eye care in Kyle, TX. Cataract surgery, LASIK, glaucoma treatment, and dry eye therapy with Dr. Andrew Plummer at 1180 Seton Parkway, Kyle.',
  alternates: { canonical: '/locations/kyle-tx' },
  openGraph: {
    title: 'Eye Doctor in Kyle, TX | Spark Eye Care',
    description: 'Comprehensive eye care in Kyle, TX with Dr. Andrew Plummer at 1180 Seton Parkway.',
    url: 'https://sparkeyetx.com/locations/kyle-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function KyleTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Kyle, TX</span>
          </nav>

          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Eye Care in Kyle, TX
          </h1>

          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Spark Eye Care is Kyle's home for advanced surgical eye care. Dr. Andrew Plummer sees patients right in the Seton Medical Center Hays complex — cataract surgery, LASIK, glaucoma treatment, and routine eye exams, close to home.
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

      {/* Address + Map */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-stretch">
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-10 animate-fade-up">
              <h2 className="font-['Cormorant',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
                Visit Our Kyle Office
              </h2>
              <address className="not-italic text-[var(--color-ink)] leading-relaxed text-lg mb-6">
                <strong>Spark Eye Care</strong><br />
                1180 Seton Parkway, Suite 330<br />
                Kyle, TX 78640
              </address>
              <dl className="text-[var(--color-ink)] text-sm grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mb-8">
                <dt className="font-semibold">Phone</dt>
                <dd><a href="tel:+15123771076" className="text-[var(--color-primary)] hover:underline">(512) 377-1076</a></dd>
                <dt className="font-semibold">Fax</dt>
                <dd>(512) 287-7071</dd>
                <dt className="font-semibold pt-2">Mon–Thu</dt>
                <dd className="pt-2">8:00 AM – 5:00 PM</dd>
                <dt className="font-semibold">Friday</dt>
                <dd>8:00 AM – 12:00 PM</dd>
                <dt className="font-semibold">Sat–Sun</dt>
                <dd className="text-[var(--color-muted)]">Closed</dd>
              </dl>
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
            <div className="relative min-h-[350px] lg:min-h-[440px] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
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
      </section>

      {/* Services for Kyle patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4 text-center">
            Services for Kyle Patients
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Everything from your annual eye exam to advanced surgery, delivered by a board-certified ophthalmologist in a modern outpatient setting.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Premium and standard lens options, small-incision technique, and outcomes that led to "Best of Hays County" recognition for eye care.
              </p>
              <a href="/services/cataract-surgery" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                LASIK & Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Laser vision correction and RLE for patients ready to reduce or eliminate dependence on glasses and contact lenses.
              </p>
              <a href="/services/laser-eye-surgery" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Glaucoma & Medical Eye Care
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Glaucoma screening and treatment, dry eye evaluation, diabetic eye exams, and general ophthalmology for Kyle patients of all ages.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors">
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
                Where is Spark Eye Care located in Kyle?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We're at 1180 Seton Parkway, Suite 330, on the Seton Medical Center Hays campus just off Interstate 35. Free parking is available directly in front of the medical office building.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Do you accept new patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Dr. Plummer welcomes new patients for cataract evaluations, LASIK consultations, glaucoma management, dry eye, diabetic eye exams, and routine ophthalmology. Fill out the contact form or call (512) 377-1076 to schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                What insurance do you accept?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We accept most major medical insurance plans. For questions about your specific plan or vision coverage, please call our office and our team will verify benefits before your visit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Do you offer telehealth?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes — for follow-ups, prescription refills, and non-urgent eye questions. Most surgical evaluations still require an in-office visit for imaging and measurements. <a href="/telehealth" className="text-[var(--color-primary)] hover:underline">Learn more about telehealth</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-8">
            Ready to Book Your Visit?
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Kyle residents trust Spark Eye Care for advanced surgical eye care delivered with a personal touch. Request an appointment today.
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
