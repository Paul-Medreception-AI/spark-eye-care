import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Doctor Serving Austin, TX | Spark Eye Care',
  description: 'Advanced surgical eye care for Austin, TX patients. Cataract surgery, LASIK, glaucoma treatment, and dry eye therapy with Dr. Andrew Plummer — a short drive south in Kyle.',
  alternates: { canonical: '/locations/austin-tx' },
  openGraph: {
    title: 'Eye Doctor Serving Austin, TX | Spark Eye Care',
    description: 'Advanced surgical eye care for Austin, TX patients with Dr. Andrew Plummer — a short drive south in Kyle.',
    images: ['/og-image.png'],
    url: 'https://www.sparkeyetx.com/locations/austin-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AustinTXPage() {
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
            <span>Austin, TX</span>
          </nav>

          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Eye Care for Austin, TX
          </h1>

          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Serving patients from Austin and surrounding communities. Advanced surgical eye care with a personal touch is a short drive south in Kyle — cataract surgery, LASIK, glaucoma treatment, and routine eye exams with Dr. Andrew Plummer.
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

      {/* Serving the Austin area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6">
            Serving the Austin Area
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed text-lg mb-6">
            Austin-area residents choose Spark Eye Care for advanced, surgeon-led eye care without the wait times and traffic of a large metro practice. Our office sits just south of Austin at 1180 Seton Parkway in Kyle, an easy trip down Interstate 35 from downtown Austin, South Austin, Cedar Park, and Round Rock — and worth the short drive for specialized surgical eye care you can trust.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed text-lg">
            Many Austin patients choose us for our personalized approach, shorter wait times compared to larger facilities, and our commitment to continuity of care. Dr. Andrew Plummer takes the time to build lasting relationships with every patient. For follow-ups and non-urgent eye questions, we also offer telehealth so Austin patients can connect from home.
          </p>
        </div>
      </section>

      {/* Services for Austin patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4 text-center">
            Services for Austin Patients
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
                Glaucoma screening and treatment, dry eye evaluation, diabetic eye exams, and general ophthalmology for Austin-area patients of all ages.
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
                How far is Spark Eye Care from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We're at 1180 Seton Parkway, Suite 330 in Kyle, on the Seton Medical Center Hays campus just off Interstate 35 — a straightforward drive south from Austin, with free parking directly in front of the medical office building.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Do you accept new patients from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Dr. Plummer welcomes new patients from Austin and the surrounding area for cataract evaluations, LASIK consultations, glaucoma management, dry eye, diabetic eye exams, and routine ophthalmology. Fill out the contact form or call (512) 377-1076 to schedule.
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
                Do you offer telehealth for Austin patients?
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
            Austin-area patients trust Spark Eye Care for advanced surgical eye care delivered with a personal touch. Request an appointment today.
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
