import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Austin, TX | Spark Eye Care',
  description: 'Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Other Medical Near Austin, TX | Spark Eye Care',
    description: 'Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://sparkeyetx.com/locations/austin-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AustinTXPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline transition-all">Home</a>
            <span>›</span>
            <a href="/locations" className="hover:underline transition-all">Locations</a>
            <span>›</span>
            <span>Austin, TX</span>
          </nav>
          <h1 className="text-5xl font-light mb-6 animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Other Medical Near Austin, TX
          </h1>
          <p className="text-xl mb-10 opacity-95 max-w-3xl animate-fade-up">
            Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all animate-fade-up"
          >
            Schedule in Austin
          </a>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Serving the Austin Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Located conveniently for Austin residents, Spark Eye Care provides comprehensive psychiatric services to patients throughout the greater Austin metropolitan area. Whether you're commuting from downtown Austin, Cedar Park, Round Rock, or surrounding communities, our practice is easily accessible and worth the short drive for specialized mental health care you can trust.
            </p>
            <p>
              Many Austin patients choose Spark Eye Care because of our personalized approach, shorter wait times compared to larger Austin facilities, and our commitment to continuity of care. We understand that finding the right psychiatric provider is crucial, and our team takes the time to build lasting relationships with every patient. For those who prefer to avoid the commute entirely, we also offer comprehensive telehealth services that bring expert care directly to your home.
            </p>
          </div>
          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Services Available to Austin Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Diagnostic Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive psychiatric assessments to understand your unique mental health needs and develop personalized treatment plans.
              </p>
              <a href="/services/diagnostic-evaluations" className="text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert prescription and monitoring of psychiatric medications to optimize your treatment outcomes with minimal side effects.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Convenient virtual appointments that bring quality psychiatric care to Austin residents from the comfort of home.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              We understand that Austin traffic and busy schedules can make it challenging to attend in-person appointments. That's why Spark Eye Care offers comprehensive telehealth services to all Austin-area residents. Our virtual appointments provide the same expert care and personalized attention as in-office visits, delivered securely through HIPAA-compliant video platforms.
            </p>
            <p>
              Telehealth appointments are available for most psychiatric services, including initial evaluations, follow-up visits, and medication management. Many insurance plans cover telehealth at the same rate as in-person visits. Contact our office to verify your coverage and schedule your convenient virtual appointment today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                How far is Spark Eye Care from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Spark Eye Care is conveniently located within easy driving distance of Austin, typically 20-40 minutes depending on your specific location in the Austin metro area. We serve patients from downtown Austin, North Austin, South Austin, and surrounding communities including Cedar Park, Round Rock, and Pflugerville.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                What are the best directions from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The easiest route from most Austin locations is via I-35 or MoPac. Specific directions depend on your starting point in Austin. When you schedule your appointment, our team will provide detailed directions tailored to your location. Ample parking is available on-site for your convenience.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                Do you offer telehealth for Austin residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services to all Austin-area patients. Virtual appointments are available for most psychiatric services and are covered by most insurance plans. Telehealth is an excellent option if you prefer to avoid the commute, have scheduling constraints, or simply prefer the convenience of meeting from home.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                Is your office accessible and is parking available?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. Our facility is fully accessible with wheelchair-accessible entrances and restrooms. We provide free, convenient parking directly adjacent to our office, so you won't need to worry about finding street parking or paying for parking garages. Our office is designed to be welcoming and easy to navigate for all patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6 animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Expert Care from Austin
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto animate-fade-up">
            Schedule your appointment today and experience compassionate, expert psychiatric care that's worth the drive—or available from home via telehealth.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all animate-fade-up"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}