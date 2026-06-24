import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › Services
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Advanced surgical and medical eye care tailored to your unique vision needs and lifestyle goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            From routine exams to advanced surgical procedures, we offer the full spectrum of eye care services with expertise and compassion
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cataract Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                State-of-the-art cataract removal with premium lens options for clearer vision. We specialize in refractive cataract surgery to reduce or eliminate your dependence on glasses after surgery.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Refractive Lens Exchange */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Advanced lens replacement procedure to correct nearsightedness, farsightedness, and astigmatism. This procedure offers freedom from glasses and contacts for patients not yet ready for traditional cataract surgery.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Laser Eye Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Laser Eye Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Precise laser vision correction using proven technology for lasting results. We help patients achieve crisp, clear vision with minimal recovery time and exceptional safety outcomes.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Minimally Invasive Glaucoma Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Minimally Invasive Glaucoma Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Advanced MIGS procedures to lower eye pressure and preserve your vision. Our techniques offer effective glaucoma management with faster recovery than traditional surgery.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Dry Eye Treatment */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Dry Eye Treatment
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive evaluation and treatment for chronic dry eye symptoms. We identify the root cause and create personalized treatment plans for lasting relief and comfort.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Diabetic Eye Exams */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Diabetic Eye Exams
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Specialized screening to detect and manage diabetic retinopathy early. Regular monitoring helps prevent vision loss and keeps your eyes healthy despite diabetes.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Your Journey to Better Vision
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            A clear path from initial consultation to optimal results
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {/* Step 01 */}
            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:pr-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Your journey begins with a thorough eye examination using advanced diagnostic technology. Dr. Plummer takes time to understand your vision goals, medical history, and lifestyle needs to create a personalized treatment plan.
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:px-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We discuss all available options and answer every question you have about your procedure. You will understand exactly what to expect, the benefits and risks, and how the treatment will improve your daily life and vision.
              </p>
            </div>

            {/* Step 03 */}
            <div className="text-center lg:text-left lg:pl-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Expert Care & Follow-Up
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Whether you need surgery or medical treatment, you receive exceptional care using proven techniques and technology. Our team stays with you through recovery with attentive follow-up appointments to ensure optimal healing and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule your consultation with Dr. Plummer and take the first step toward clearer, healthier vision
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}