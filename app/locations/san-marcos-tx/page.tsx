import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near San Marcos, TX | Spark Eye Care',
  description: 'Serving patients from San Marcos and surrounding TX communities. Expert psychiatric care is closer than you think. Schedule your appointment today.',
  openGraph: {
    title: 'Other Medical Near San Marcos, TX | Spark Eye Care',
    description: 'Serving patients from San Marcos and surrounding TX communities. Expert psychiatric care is closer than you think.',
    url: 'https://www.sparkeyetx.com/locations/san-marcos-tx',
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
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Locations</span>
            <span className="mx-2">›</span>
            <span>San Marcos, TX</span>
          </nav>
          
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near San Marcos, TX
          </h1>
          
          <p className="text-xl mb-8 max-w-3xl opacity-95 leading-relaxed">
            Serving patients from San Marcos and surrounding TX communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule in San Marcos
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Serving the San Marcos Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12 animate-fade-up">
            <p>
              Located just a convenient drive from San Marcos, Spark Eye Care provides comprehensive psychiatric services to residents throughout the San Marcos area and surrounding communities. Whether you're commuting from downtown San Marcos, Texas State University, or nearby neighborhoods like Willow Springs and Meadows, our practice is easily accessible via I-35 and offers ample parking for your convenience.
            </p>
            
            <p>
              San Marcos patients choose Spark Eye Care for our personalized approach to mental health care, experienced providers, and commitment to evidence-based treatment. We understand the unique needs of our Central Texas community and offer flexible scheduling options to accommodate your busy lifestyle. For patients who prefer to avoid the commute, we also provide secure telehealth appointments that deliver the same quality care from the comfort of your San Marcos home.
            </p>
          </div>
          
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
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
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to San Marcos Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive mental health assessments to accurately diagnose and develop personalized treatment plans for San Marcos patients.
              </p>
              <a href="/services/psychiatric-evaluation" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert prescription and monitoring of psychiatric medications, with ongoing support to ensure optimal results for your mental health.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments allow San Marcos residents to receive quality psychiatric care from home via secure video platform.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-dark)] transition-colors duration-300">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-['Cormorant'] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              We understand that San Marcos residents lead busy lives. Between work, family, and Texas State University commitments, finding time to drive to appointments can be challenging. That's why Spark Eye Care offers comprehensive telehealth services to patients throughout the San Marcos area.
            </p>
            
            <p>
              Our secure video platform allows you to meet with our experienced psychiatric providers from the comfort of your San Marcos home, office, or anywhere with a private internet connection. Telehealth appointments offer the same quality care as in-person visits, and most insurance plans cover virtual psychiatric services. Whether you're managing anxiety, depression, ADHD, or other mental health conditions, our telehealth option makes expert care accessible and convenient for the San Marcos community.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                How far is Spark Eye Care from San Marcos?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located within a comfortable driving distance from San Marcos, easily accessible via I-35. Most San Marcos residents find the commute straightforward, typically 20-40 minutes depending on your specific location and traffic conditions. We're worth the short drive for specialized psychiatric care that prioritizes your individual needs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                What's the best route from San Marcos to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From downtown San Marcos or the Texas State campus, take I-35 toward our location. Detailed directions and GPS coordinates are provided when you schedule your appointment. Our office features ample free parking and is located in an easily accessible area with clear signage. If you have any difficulty finding us, our friendly staff is happy to provide additional guidance.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Do you offer telehealth for San Marcos patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide secure telehealth appointments for San Marcos residents who prefer virtual care or cannot easily make the drive. Our telehealth services deliver the same comprehensive psychiatric care through HIPAA-compliant video sessions. Many patients appreciate the flexibility of scheduling telehealth appointments around their work or school commitments without commute time. Contact us to learn more about telehealth availability.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Is parking available for San Marcos patients visiting the office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. We offer free, convenient parking directly adjacent to our office with plenty of spaces for patients. Our facility is fully accessible with wheelchair-friendly entrances and accommodations. We've designed our practice to ensure San Marcos patients experience a stress-free visit from the moment they arrive until they depart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from San Marcos
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Schedule your appointment today and experience compassionate, personalized psychiatric care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}