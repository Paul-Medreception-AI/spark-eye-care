import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Austin, TX | Spark Eye Care',
  description: 'Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think. Telehealth options available.',
  openGraph: {
    title: 'Other Medical Near Austin, TX | Spark Eye Care',
    description: 'Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://www.sparkeyetx.com/locations/austin-tx',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AustinTXPage() {
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
            <span>Austin, TX</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Austin, TX
          </h1>
          <p className="text-xl mb-8 max-w-3xl opacity-95 leading-relaxed">
            Serving patients from Austin and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule in Austin
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Austin Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located conveniently near Austin, Spark Eye Care provides comprehensive psychiatric services to patients throughout the greater Austin metropolitan area. Whether you're commuting from downtown Austin, West Lake Hills, Cedar Park, Round Rock, or surrounding communities, our practice is easily accessible and worth the short drive for exceptional care. Many of our Austin patients appreciate the personalized attention and shorter wait times compared to crowded urban clinics.
            </p>
            <p>
              Austin residents choose Spark Eye Care because we combine cutting-edge treatment approaches with compassionate, individualized care. Our team understands the unique needs of the Austin community and offers flexible scheduling options including extended hours and same-week appointments. For those who prefer not to travel, we also provide secure telehealth consultations that allow you to receive expert psychiatric care from the comfort of your Austin home.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Austin, TX and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Austin Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Comprehensive Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric assessments to accurately diagnose and create personalized treatment plans for Austin patients.
              </p>
              <a href="/services/evaluations" className="text-[var(--color-primary)] font-semibold hover:underline inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication management with ongoing monitoring to optimize treatment outcomes for our Austin patients.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:underline inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Ongoing Support
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Continuous psychiatric care and follow-up appointments to ensure long-term wellness and treatment success.
              </p>
              <a href="/services/ongoing-care" className="text-[var(--color-primary)] font-semibold hover:underline inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h2 className="font-['Cormorant',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              For Austin residents who prefer the convenience of virtual care, Spark Eye Care offers secure telehealth appointments. Meet with our experienced psychiatric professionals from your home, office, or anywhere with a private internet connection. Our telehealth platform is HIPAA-compliant and designed to provide the same quality care as in-person visits.
            </p>
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Most insurance plans cover telehealth services, and we accept all major carriers serving the Austin area. Virtual appointments are ideal for follow-up visits, medication management, and ongoing psychiatric support. Schedule your telehealth consultation today and experience expert psychiatric care without the commute.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                How far is Spark Eye Care from Austin, TX?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Spark Eye Care is conveniently located within easy driving distance of Austin. Most patients from central Austin can reach our office in 20-35 minutes depending on traffic. We're easily accessible via major highways and offer ample parking for our Austin-area patients.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                What are the best directions from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From downtown Austin, take I-35 or MoPac Expressway depending on your location. Detailed driving directions will be provided when you schedule your appointment. We recommend allowing extra time during peak traffic hours (7-9 AM and 4-6 PM). GPS coordinates and turn-by-turn directions are available on our contact page.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Austin residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all Austin-area patients. Virtual appointments are available for initial consultations, follow-up visits, and medication management. Our secure video platform ensures privacy and convenience while maintaining the same high standard of psychiatric care. Most insurance plans cover telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-['Cormorant',serif] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Is parking available for Austin patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide free, convenient parking for all patients. Our facility features a spacious parking lot with plenty of spaces, including accessible parking near the entrance. The office is located on the ground floor with wheelchair-accessible entrances and restrooms. We've designed our space to be comfortable and accessible for all Austin-area patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Austin
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join the many Austin residents who trust Spark Eye Care for exceptional psychiatric services. Schedule your appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}