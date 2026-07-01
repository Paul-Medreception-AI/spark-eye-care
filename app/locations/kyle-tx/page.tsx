import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Kyle, TX | Spark Eye Care',
  description: 'Expert Other Medical services for Kyle, TX residents. Serving Kyle and surrounding communities with comprehensive psychiatric care and telehealth options.',
  openGraph: {
    title: 'Other Medical Near Kyle, TX | Spark Eye Care',
    description: 'Expert Other Medical services for Kyle, TX residents. Serving Kyle and surrounding communities with comprehensive psychiatric care and telehealth options.',
    url: 'https://sparkeyetx.com/locations/kyle-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function KyleTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Locations</span>
            <span className="mx-2">›</span>
            <span>Kyle, TX</span>
          </nav>
          
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Kyle, TX
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Serving patients from Kyle and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105 hover:shadow-xl"
          >
            Schedule in Kyle
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-10 text-center">
            Serving the Kyle Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located just a short drive from Kyle, Spark Eye Care provides convenient access to comprehensive Other Medical services for residents throughout the area. Whether you're commuting from downtown Kyle, Plum Creek, or surrounding communities like Buda and San Marcos, our practice offers easy accessibility with ample parking and flexible scheduling to accommodate your busy lifestyle.
            </p>
            
            <p>
              Kyle residents choose Spark Eye Care for our patient-centered approach, experienced medical professionals, and commitment to personalized treatment plans. We understand the unique needs of our community and offer both in-person consultations and telehealth appointments, ensuring you receive expert psychiatric care in the format that works best for you and your schedule.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Kyle Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Comprehensive Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric assessments to understand your unique mental health needs and develop personalized treatment strategies.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert guidance on psychiatric medications with ongoing monitoring to ensure optimal results and minimal side effects.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments that bring quality psychiatric care directly to your home in Kyle.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-['Cormorant',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            For Kyle residents with busy schedules, transportation challenges, or those who simply prefer the convenience of home-based care, Spark Eye Care offers comprehensive telehealth services. Our virtual appointments provide the same quality psychiatric care you'd receive in person, with secure video consultations that fit seamlessly into your lifestyle.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            Most insurance plans cover telehealth visits at the same rate as in-office appointments. Contact us to verify your coverage and schedule your first virtual consultation today.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                How far is Spark Eye Care from Kyle, TX?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located within a short drive from Kyle, typically 15-25 minutes depending on your exact location and traffic conditions. We're easily accessible via I-35 and offer ample parking for all patients.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                What's the best route from Kyle to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most Kyle residents find I-35 to be the most direct route. Detailed directions can be provided when you schedule your appointment. We also offer landmark-based guidance to make your first visit as stress-free as possible.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Kyle residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide comprehensive telehealth services for all Kyle residents. Virtual appointments offer the same quality care as in-person visits and are ideal for follow-ups, medication management, and ongoing consultations. Most insurance plans cover telehealth at the same rate as office visits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Is your facility accessible with convenient parking?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. Our practice features accessible entrances, elevators where needed, and ample free parking directly adjacent to our building. We're committed to ensuring every patient can access our services comfortably and conveniently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-8">
            Get Expert Care from Kyle
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Join the Kyle residents who trust Spark Eye Care for comprehensive, compassionate psychiatric services.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}