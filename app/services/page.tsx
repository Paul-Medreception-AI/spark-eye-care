import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Advanced surgical eye care and comprehensive vision services tailored to your needs
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
            Dr. Plummer and our team offer a full spectrum of advanced eye care services, from routine examinations to complex surgical procedures
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cataract Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Our advanced cataract surgery uses premium lens options to restore clear vision and reduce dependence on glasses. Dr. Plummer specializes in refractive cataract surgery techniques that deliver exceptional visual outcomes.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Refractive Lens Exchange */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-8 0a4 4 0 108 0m-8 0h8m0 0a4 4 0 11-8 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Correct nearsightedness, farsightedness, and presbyopia with lens replacement surgery. This procedure offers permanent vision correction and eliminates future cataract development.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Laser Eye Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Laser Eye Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                State-of-the-art laser procedures provide precise vision correction with rapid recovery times. We use proven laser technology to help patients achieve clearer vision without glasses or contacts.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Minimally Invasive Glaucoma Surgery */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Minimally Invasive Glaucoma Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Advanced MIGS procedures lower eye pressure with faster healing and fewer complications than traditional surgery. Our approach preserves vision while minimizing disruption to your daily life.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Dry Eye Treatment */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Dry Eye Treatment
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive evaluation and personalized treatment plans address the root causes of dry eye symptoms. We offer both traditional and advanced therapies to restore comfort and protect your eye surface.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            {/* Diabetic Eye Exams */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Diabetic Eye Exams
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Regular screening and monitoring protect your vision from diabetes-related complications. Early detection and treatment of diabetic retinopathy can prevent vision loss and preserve your quality of life.
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
            From your first visit to ongoing care, we're with you every step of the way
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {/* Step 01 */}
            <div className="relative lg:pr-8 lg:border-r lg:border-[var(--color-border)] animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Your visit begins with advanced diagnostic testing and a thorough examination of your eye health. Dr. Plummer reviews your medical history, vision goals, and any concerns to develop a complete understanding of your needs.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative lg:px-8 lg:border-r lg:border-[var(--color-border)] animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                We discuss all appropriate treatment options, explaining the benefits and what to expect from each approach. You'll receive clear recommendations tailored to your specific condition, lifestyle, and vision objectives.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative lg:pl-8 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Expert Care and Follow-Up
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Whether you need surgery or ongoing medical management, we provide exceptional care at every stage. Our team ensures you understand post-treatment instructions and schedules appropriate follow-up visits to monitor your progress and results.
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
            Schedule your consultation with Dr. Plummer and discover how we can help you achieve your best vision
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors duration-300"
          >
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </main>
  )
}