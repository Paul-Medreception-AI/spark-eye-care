import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        <div className="max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Exceptional Vision Care and Advanced Eye Surgery in Kyle, Texas
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Dr. Andrew Plummer combines cutting-edge technology with personalized care to restore and protect your vision. From cataract surgery to glaucoma treatment, we deliver world-class results close to home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Schedule Your Eye Exam
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Board-Certified Ophthalmologist</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Latest Proven Technologies</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Personalized Care</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Serving Kyle, Texas</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            From advanced surgical procedures to comprehensive eye health services, we offer the expertise and technology you need for optimal vision.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cataract Surgery */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Our advanced cataract surgery uses premium lens options to restore clear vision and reduce dependence on glasses. Dr. Plummer specializes in refractive cataract surgery techniques that deliver exceptional visual outcomes.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Refractive Lens Exchange */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Correct nearsightedness, farsightedness, and presbyopia with lens replacement surgery. This procedure offers permanent vision correction and eliminates future cataract development.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Laser Eye Surgery */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Laser Eye Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                State-of-the-art laser procedures provide precise vision correction with rapid recovery times. We use proven laser technology to help patients achieve clearer vision without glasses or contacts.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Expert Eye Care Focused on Your Vision Goals
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Spark Eye Care was founded on the principle that exceptional eye care combines advanced surgical expertise with genuine personal attention. Led by Dr. Andrew Plummer, our practice brings world-class ophthalmology services to the growing Kyle, Texas community. We understand that your vision is precious, and every patient deserves access to the latest proven technologies and techniques without traveling to distant medical centers.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Dr. Plummer specializes in advanced surgical procedures including premium cataract surgery, refractive lens exchange, and minimally invasive glaucoma surgery. His commitment to staying at the forefront of ophthalmology means our patients benefit from the most effective treatments available. We invest in cutting-edge diagnostic equipment and surgical technology, but never lose sight of what matters most: helping you achieve your best possible vision and quality of life.
              </p>
              <Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 stroke-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                "
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                Dr. Plummer performed my cataract surgery and the results exceeded my expectations. I can see better now than I have in decades. The entire experience was professional, comfortable, and the technology they use is impressive. I'm so grateful I didn't have to travel to Austin for this level of care.
              </p>
              <div className="text-sm">
                <div className="font-bold text-[var(--color-ink)]">Barbara</div>
                <div className="text-[var(--color-muted)]">Cataract Surgery Patient</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                "
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                Finding out I had glaucoma was scary, but Dr. Plummer explained everything clearly and gave me confidence in my treatment plan. The minimally invasive surgery was much easier than I expected, and my eye pressure is now well controlled. He takes the time to answer all my questions at every visit.
              </p>
              <div className="text-sm">
                <div className="font-bold text-[var(--color-ink)]">Robert</div>
                <div className="text-[var(--color-muted)]">Glaucoma Treatment Patient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                01
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Comprehensive Evaluation
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Your visit begins with advanced diagnostic testing and a thorough examination of your eye health. Dr. Plummer reviews your medical history, vision goals, and any concerns to develop a complete understanding of your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                02
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We discuss all appropriate treatment options, explaining the benefits and what to expect from each approach. You'll receive clear recommendations tailored to your specific condition, lifestyle, and vision objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                03
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Expert Care and Follow-Up
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Whether you need surgery or ongoing medical management, we provide exceptional care at every stage. Our team ensures you understand post-treatment instructions and schedules appropriate follow-up visits to monitor your progress and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Advanced Surgical Eye Care with a Personal Touch
          </h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </main>
  )
}