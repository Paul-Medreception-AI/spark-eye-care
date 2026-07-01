import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Buda, TX | Spark Eye Care',
  description: 'Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think. Schedule your visit today.',
  openGraph: {
    title: 'Other Medical Near Buda, TX | Spark Eye Care',
    description: 'Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://sparkeyetx.com/locations/buda-tx',
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
            Other Medical Near Buda, TX
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl opacity-95">
            Serving patients from Buda and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule in Buda
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
              Located conveniently for Buda residents, Spark Eye Care provides comprehensive psychiatric services just a short drive away. Whether you're commuting from downtown Buda, Kyle, or nearby neighborhoods like Garlic Creek and Sunfield, our practice is easily accessible via I-35 and FM 967. Most patients find us within 15-20 minutes from central Buda, making quality mental health care convenient for busy schedules.
            </p>
            <p>
              Patients from Buda choose Spark Eye Care for our personalized approach to psychiatric treatment and flexible appointment options. We understand that finding the right provider close to home matters, which is why we also offer secure telehealth appointments for those who prefer virtual consultations. Whether you visit us in person or connect remotely, you'll receive the same expert, compassionate care that has made us a trusted choice for families throughout the Buda area.
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.401m-1.4-1.403l-1.344-.344m1.344.344l-.574 3.442c-.234 1.406-1.846 2.168-3.113 1.47l-.803-.441c-.67-.367-1.08-1.084-1.08-1.864v-.935l-1.091-.642c-1.351-.793-1.838-2.545-1.08-3.88l1.091-1.926m0 0l.344-1.344m0 0l-.574-3.442c-.234-1.406 1.846-2.168 3.113-1.47l.803.441c.67.367 1.08 1.084 1.08 1.864v.935l1.091.642c1.351.793 1.838 2.545 1.08 3.88l-1.091 1.926" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough assessments to understand your unique mental health needs and develop personalized treatment plans.
              </p>
              <a href="/services/diabetic-eye-exams" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication oversight with ongoing monitoring to ensure optimal results and minimize side effects.
              </p>
              <a href="/services" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments from the comfort of your Buda home, with the same quality care as in-person visits.
              </p>
              <a href="/telehealth" className="text-[var(--color-primary)] font-semibold hover:underline">
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
              For Buda residents with busy schedules or transportation concerns, Spark Eye Care offers comprehensive telehealth appointments that bring expert psychiatric care directly to you. Our secure video platform allows you to connect with our providers from your home, office, or anywhere with a private internet connection.
            </p>
            <p>
              Telehealth appointments are accepted by most major insurance plans and provide the same thorough evaluation and treatment as in-person visits. Whether you're managing an ongoing condition or seeking an initial consultation, virtual care makes quality mental health treatment accessible and convenient for the entire Buda community.
            </p>
          </div>
          <div className="text-center mt-8">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-dark)] transition-all duration-300"
            >
              Schedule Telehealth Visit
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
                Our practice is conveniently located within 15-20 minutes of central Buda via I-35. Most patients find the commute easy and straightforward, with accessible parking and clear directions from all major Buda neighborhoods including Garlic Creek, Sunfield, and the historic downtown area.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What's the best route from Buda to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Buda, take I-35 North and follow the directions provided in your appointment confirmation email. The route is well-marked and easy to navigate. We're located in a professional building with ample parking. Detailed directions and GPS coordinates are sent to all new patients upon scheduling.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Buda residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide secure telehealth appointments for all Buda patients. Virtual visits are available for initial consultations, medication management follow-ups, and ongoing therapy sessions. Telehealth is covered by most insurance plans and offers the same quality care as in-person appointments from the convenience of your home.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available and is your office accessible?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we offer free, convenient parking directly adjacent to our building with designated accessible spaces near the entrance. Our office is fully ADA-compliant with wheelchair accessibility, an elevator for upper floors, and accessible restroom facilities. We're committed to ensuring all Buda patients can access our services comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Buda
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Quality psychiatric care is closer than you think. Schedule your appointment today and experience compassionate, personalized treatment.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </main>
  )
}