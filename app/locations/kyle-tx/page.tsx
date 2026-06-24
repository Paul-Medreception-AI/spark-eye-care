import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Kyle, TX | Spark Eye Care',
  description: 'Serving patients from Kyle and surrounding TX communities. Expert psychiatric care is closer than you think. Telehealth options available.',
  openGraph: {
    title: 'Other Medical Near Kyle, TX | Spark Eye Care',
    description: 'Serving patients from Kyle and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://www.sparkeyetx.com/locations/kyle-tx',
  },
}

export default function KyleTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Kyle, TX</span>
          </nav>

          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Kyle, TX
          </h1>
          <p className="text-xl mb-10 text-white/90 max-w-3xl leading-relaxed">
            Serving patients from Kyle and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule in Kyle
          </a>
        </div>
      </section>

      {/* Serving Kyle Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Kyle Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Located conveniently for Kyle residents, Spark Eye Care is just a short drive away, making quality psychiatric care accessible to you and your family. Whether you're coming from the heart of Kyle or nearby communities like Buda, San Marcos, or Uhland, our practice offers easy access with ample parking and flexible appointment times to fit your busy schedule.
            </p>
            <p>
              Patients throughout Kyle choose Spark Eye Care for our personalized approach, experienced providers, and comprehensive treatment options. We understand the unique needs of our community and offer both in-person visits and convenient telehealth appointments, ensuring you receive exceptional care without the stress of long commutes or time away from work and family.
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

      {/* Services Available to Kyle Patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Kyle Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric assessments to understand your unique needs and develop personalized treatment plans for optimal mental health outcomes.
              </p>
              <a href="/services/evaluations" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication management with ongoing monitoring and adjustments to ensure safe, effective treatment with minimal side effects.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments from the comfort of your Kyle home, offering the same quality care with added flexibility and privacy.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth for Kyle */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              For Kyle residents with busy schedules, mobility challenges, or who simply prefer the convenience of home-based care, Spark Eye Care offers comprehensive telehealth services. Our secure video appointments provide the same personalized attention and expert psychiatric care as in-person visits.
            </p>
            <p>
              Telehealth appointments are covered by most insurance plans and offer unmatched flexibility—no commute time, no waiting room, and the ability to schedule appointments that fit seamlessly into your day. Experience quality mental health care on your terms, from anywhere in Kyle or the surrounding area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-3">
                How far is Spark Eye Care from Kyle, TX?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Spark Eye Care is conveniently located just a short drive from Kyle, typically 15-25 minutes depending on your exact location and traffic. We're easily accessible via I-35, making us a convenient choice for Kyle residents seeking quality psychiatric care.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-3">
                What are the directions from Kyle to your practice?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Kyle, take I-35 north or south (depending on our location) and follow the signs to our practice. Detailed directions are provided when you schedule your appointment, and our staff is always happy to help you find us. Ample parking is available on-site for your convenience.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth appointments for Kyle residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for all Kyle residents. Telehealth provides the same quality care as in-person visits with added convenience—perfect for follow-up appointments, medication management, or if you prefer to meet from home. Most insurance plans cover telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-3">
                Is parking and accessibility available at your practice?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. We offer ample free parking directly adjacent to our practice, including accessible parking spaces close to the entrance. Our facility is fully ADA compliant with wheelchair accessibility, and our staff is always available to assist you as needed to ensure a comfortable visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Kyle
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Take the first step toward better mental health. Schedule your appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-12 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}