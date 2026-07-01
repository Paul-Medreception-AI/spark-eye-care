import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near San Marcos, TX | Spark Eye Care',
  description: 'Expert Other Medical services for San Marcos, TX patients. Serving the greater San Marcos area with telehealth options available. Schedule your consultation today.',
  openGraph: {
    title: 'Other Medical Near San Marcos, TX | Spark Eye Care',
    description: 'Expert Other Medical services for San Marcos, TX patients. Serving the greater San Marcos area with telehealth options available.',
    url: 'https://sparkeyetx.com/locations/san-marcos-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SanMarcosTXPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-6 text-sm opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>San Marcos, TX</span>
          </nav>
          
          <h1 className="text-5xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Other Medical Near San Marcos, TX
          </h1>
          
          <p className="text-xl mb-8 opacity-95 max-w-3xl animate-fade-up">
            Serving patients from San Marcos and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 animate-fade-up"
          >
            Schedule in San Marcos
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the San Marcos Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Located conveniently for San Marcos residents, Spark Eye Care provides comprehensive Other Medical services to patients throughout Hays County and the surrounding Texas Hill Country. Whether you're commuting from downtown San Marcos, the Texas State University area, or nearby communities like Kyle, Buda, or Wimberley, our practice is easily accessible and worth the short drive for exceptional psychiatric care.
            </p>
            
            <p>
              San Marcos patients choose Spark Eye Care for our personalized approach, shorter wait times compared to larger hospital systems, and our commitment to staying at the forefront of psychiatric medicine. We understand that seeking mental health care is an important decision, and we've created a welcoming, judgment-free environment where you can receive the expert treatment you deserve. For those who prefer to avoid the commute, we also offer convenient telehealth appointments that bring quality psychiatric care directly to your home.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving San Marcos, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to San Marcos Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Comprehensive Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough assessments to accurately diagnose and develop personalized treatment plans for San Marcos patients seeking mental health support.
              </p>
              <a href="/services/psychiatric-evaluations" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication services with ongoing monitoring and adjustments to ensure optimal outcomes for our San Marcos patients.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Secure virtual appointments that bring quality psychiatric care to San Marcos residents from the comfort and privacy of home.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            For San Marcos residents who prefer the convenience of virtual care, Spark Eye Care offers comprehensive telehealth services. Connect with our experienced psychiatric providers from anywhere in Texas through secure, HIPAA-compliant video appointments.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            Our telehealth services are covered by most major insurance plans and provide the same high-quality care as in-person visits. Whether you're managing a busy schedule at Texas State, prefer the privacy of home appointments, or simply want to avoid the commute, telehealth makes expert psychiatric care more accessible than ever for San Marcos patients.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is Spark Eye Care from San Marcos?
              </h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located within easy driving distance of San Marcos, typically 20-30 minutes depending on your starting location and traffic. Many San Marcos patients find the short commute worthwhile for the personalized, expert care they receive. We're accessible via I-35 and well-connected to the San Marcos area.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                What are the best directions from San Marcos to your office?
              </h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                From downtown San Marcos, take I-35 North or South (depending on our exact location) and follow the signs to our exit. Detailed directions with landmarks and parking information are provided when you schedule your appointment. We recommend using GPS navigation for real-time traffic updates, and our staff is always happy to help with specific directions when you call.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for San Marcos patients?
              </h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all San Marcos residents. Virtual appointments provide the same quality care as in-person visits and are perfect for follow-up appointments, medication management, and ongoing psychiatric care. Telehealth is covered by most insurance plans and eliminates the need to commute, making mental health care more convenient and accessible.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available and is your office accessible?
              </h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking for all patients, including those traveling from San Marcos. Our facility is fully accessible with wheelchair-friendly entrances, and we've designed our space to be welcoming and comfortable. If you have specific accessibility needs or questions about parking, please let us know when scheduling your appointment so we can ensure your visit is as smooth as possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from San Marcos
          </h2>
          <p className="text-xl mb-8 opacity-95 animate-fade-up">
            Schedule your appointment today and experience compassionate, expert psychiatric care close to home.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 animate-fade-up"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}