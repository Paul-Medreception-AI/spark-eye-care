import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Doctor Serving Buda, TX | Spark Eye Care',
  description: 'Advanced surgical eye care for Buda, TX patients. Cataract surgery, LASIK, glaucoma treatment, and dry eye therapy with Dr. Andrew Plummer — just up the road in Kyle.',
  alternates: { canonical: '/locations/buda-tx' },
  openGraph: {
    title: 'Eye Doctor Serving Buda, TX | Spark Eye Care',
    description: 'Advanced surgical eye care for Buda, TX patients with Dr. Andrew Plummer — just up the road in Kyle.',
    images: ['/og-image.png'],
    url: 'https://www.sparkeyetx.com/locations/buda-tx',
  },
}

export default function BudaTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Buda, TX</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Eye Care for Buda, TX
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl opacity-95">
            Serving patients from Buda and surrounding communities. Advanced surgical eye care with a personal touch is just up the road in Kyle.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Request Appointment
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Buda Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Buda residents don't have to travel far for advanced, surgeon-led eye care. Spark Eye Care is just a short drive south at 1180 Seton Parkway in Kyle, on the Seton Medical Center Hays campus right off Interstate 35 — an easy trip from downtown Buda and nearby neighborhoods like Garlic Creek and Sunfield, most within 15–20 minutes.
            </p>
            <p>
              Patients from Buda choose Spark Eye Care for our personalized approach and flexible appointment options. Dr. Andrew Plummer takes the time to build lasting relationships with every patient. For follow-ups and non-urgent eye questions, we also offer secure telehealth so Buda patients can connect from home — with the same expert, compassionate care that has made us a trusted choice for families throughout the area.
            </p>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Buda, TX Service Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Buda Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Premium and standard lens options, small-incision technique, and outcomes that led to "Best of Hays County" recognition for eye care.
              </p>
              <a href="/services/cataract-surgery" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                LASIK & Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Laser vision correction and RLE for patients ready to reduce or eliminate dependence on glasses and contact lenses.
              </p>
              <a href="/services/laser-eye-surgery" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Glaucoma & Medical Eye Care
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Glaucoma screening and treatment, dry eye evaluation, diabetic eye exams, and general ophthalmology for Buda-area patients of all ages.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              For Buda residents with busy schedules or transportation concerns, Spark Eye Care offers telehealth appointments for follow-ups, prescription refills, and non-urgent eye questions. Our secure video platform lets you connect with our team from your home, office, or anywhere with a private internet connection.
            </p>
            <p>
              Telehealth visits are accepted by most major insurance plans. Please note that surgical evaluations and procedures such as cataract surgery, LASIK, and glaucoma treatment still require an in-office visit for the imaging and measurements they depend on — but a virtual visit is a convenient first step for many Buda patients.
            </p>
          </div>
          <div className="text-center mt-8">
            <a
              href="/telehealth"
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-dark)] transition-all duration-300"
            >
              Learn About Telehealth
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is Spark Eye Care from Buda?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We're at 1180 Seton Parkway, Suite 330 in Kyle, on the Seton Medical Center Hays campus just off I-35 — most Buda patients reach us in 15–20 minutes. Free parking is available directly in front of the medical office building, with clear directions from all major Buda neighborhoods including Garlic Creek, Sunfield, and the historic downtown area.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you accept new patients from Buda?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Dr. Plummer welcomes new patients from Buda and the surrounding area for cataract evaluations, LASIK consultations, glaucoma management, dry eye, diabetic eye exams, and routine ophthalmology. Fill out the contact form or call (512) 377-1076 to schedule.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Buda residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes — for follow-ups, prescription refills, and non-urgent eye questions. Most surgical evaluations still require an in-office visit for imaging and measurements. Telehealth is accepted by most insurance plans and is a convenient option when an in-person visit isn't needed.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available and is your office accessible?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we offer free, convenient parking directly in front of our building with designated accessible spaces near the entrance. Our office is ADA-accessible with an elevator and accessible restroom facilities, so all Buda patients can access our services comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Eye Care from Buda
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Advanced surgical eye care is closer than you think. Schedule your appointment today and experience compassionate, personalized care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Request Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
