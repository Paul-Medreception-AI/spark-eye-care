import Link from 'next/link'

export const metadata = {
  title: 'Other Medical Near Buda, TX | Spark Eye Care',
  description: 'Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Other Medical Near Buda, TX | Spark Eye Care',
    description: 'Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://www.sparkeyetx.com/locations/buda-tx',
  },
}

export default function BudaTXPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Buda, TX</span>
          </nav>
          
          <h1 className="text-5xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Other Medical Near Buda, TX
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed opacity-95 max-w-3xl animate-fade-up">
            Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors animate-fade-up"
          >
            Schedule in Buda
          </Link>
        </div>
      </section>

      {/* Serving Buda Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Buda Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Located just a short drive from Buda, Spark Eye Care provides comprehensive psychiatric and mental health services to patients throughout the greater Austin area. We understand that finding quality mental health care close to home is important, which is why we've made our practice easily accessible to Buda residents. The convenient commute from Buda typically takes 20-30 minutes depending on your location, making it easy to fit appointments into your busy schedule.
            </p>
            
            <p>
              Many Buda patients choose Spark Eye Care because of our specialized expertise, personalized approach, and comprehensive treatment options that may not be available in smaller local practices. We accept most major insurance plans and offer flexible scheduling including evening appointments. For those who prefer to receive care from the comfort of home, we also provide secure telehealth appointments that serve Buda residents just as effectively as in-person visits.
            </p>
          </div>
          
          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-semibold">Serving Buda, TX</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Convenient access from Buda and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Buda Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.071 0 4.243l-1.8 1.8a3.183 3.183 0 01-4.5 0l-1.8-1.8a3.183 3.183 0 010-4.5l1.8-1.8m-7.6-7.6L5 14.5" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and create personalized treatment plans.
              </p>
              <Link href="/services/psychiatric-evaluation" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication management with ongoing monitoring and adjustments to optimize your treatment outcomes.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Secure video appointments that bring expert psychiatric care directly to your home in Buda with the same quality as in-person visits.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth for Buda */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <svg className="w-16 h-16 mb-6 text-[var(--color-primary)] mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            
            <h2 className="text-3xl font-light mb-6 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              Can't Make the Drive? We Offer Telehealth
            </h2>
            
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                For Buda residents who prefer the convenience of receiving care from home, Spark Eye Care offers comprehensive telehealth services. Our secure, HIPAA-compliant video platform allows you to meet with our experienced psychiatric providers without the commute, making it easier to fit mental health care into your busy schedule.
              </p>
              
              <p>
                Telehealth appointments are ideal for medication management follow-ups, ongoing therapy sessions, and many initial consultations. We accept most major insurance plans for telehealth visits, just as we do for in-person appointments. Whether you're managing a busy work schedule, have transportation challenges, or simply prefer the comfort of your own home, telehealth provides the same quality psychiatric care you'd receive in our office.
              </p>
              
              <p className="font-semibold text-[var(--color-primary)] pt-4">
                Schedule your telehealth appointment today and experience expert psychiatric care from anywhere in Buda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                How far is Spark Eye Care from Buda?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Spark Eye Care is conveniently located just 20-30 minutes from Buda, depending on your specific location and traffic conditions. Many of our Buda patients find the short drive worthwhile for access to specialized psychiatric care and comprehensive treatment options. The practice is easily accessible via major highways, making your commute as smooth as possible.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                What are the best directions from Buda to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Buda, take I-35 North and follow the signs toward our location. Detailed directions and parking information will be provided when you schedule your appointment. Our staff is happy to assist with any questions about finding our office or navigating the area. For those who prefer not to drive, telehealth appointments are available and eliminate the need for travel entirely.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                Do you offer telehealth for Buda residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services to all Buda residents. Our secure video platform allows you to receive the same quality psychiatric care from the comfort of your home. Telehealth appointments are perfect for medication management, follow-up visits, and many initial consultations. Most insurance plans cover telehealth visits just like in-person appointments, and scheduling is simple and flexible.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                Is parking available at your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all patients at our office location. Our facility is fully accessible with accommodations for patients with mobility challenges. Detailed parking instructions will be provided when you schedule your appointment. We strive to make your visit as comfortable and stress-free as possible from the moment you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Buda
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Schedule your appointment today and experience compassionate, comprehensive psychiatric care serving the Buda community.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </>
  )
}