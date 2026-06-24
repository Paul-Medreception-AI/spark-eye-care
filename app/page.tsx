import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        <div className="max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            See Life Clearly with Advanced Eye Care in Kyle
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Dr. Andrew Plummer brings cutting-edge cataract, glaucoma, and laser eye surgery to Central Texas. Experience world-class surgical outcomes with personalized care focused on your vision goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Schedule Your Consultation
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
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm sm:text-base text-[var(--color-ink)]">Board-Certified Ophthalmologist</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm sm:text-base text-[var(--color-ink)]">Premium Refractive Cataract Surgery Specialist</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm sm:text-base text-[var(--color-ink)]">Latest Proven Surgical Technologies</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm sm:text-base text-[var(--color-ink)]">Personalized Patient-Centered Approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive surgical and medical eye care using the latest proven technologies
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cataract Surgery */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Cataract Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                State-of-the-art cataract removal with premium lens options for clearer vision. We specialize in refractive cataract surgery to reduce or eliminate your dependence on glasses after surgery.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Refractive Lens Exchange */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Refractive Lens Exchange
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Advanced lens replacement procedure to correct nearsightedness, farsightedness, and astigmatism. This procedure offers freedom from glasses and contacts for patients not yet ready for traditional cataract surgery.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Laser Eye Surgery */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Laser Eye Surgery
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Precise laser vision correction using proven technology for lasting results. We help patients achieve crisp, clear vision with minimal recovery time and exceptional safety outcomes.
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
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Exceptional Eye Care Rooted in Trust and Technology
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Spark Eye Care was founded on the belief that every patient deserves access to world-class surgical eye care delivered with genuine compassion and respect. Dr. Andrew Plummer established our practice in Kyle to bring the most advanced ophthalmologic treatments to Central Texas, combining cutting-edge technology with the personalized attention that only a dedicated local practice can provide. We understand that your vision affects every aspect of your life, and we take that responsibility seriously.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Our practice specializes in premium refractive cataract surgery, which goes beyond simply removing cataracts to actually improve your vision beyond what glasses provided before surgery. We invest in the latest proven technologies and surgical techniques, ensuring our patients receive outcomes comparable to the nation's top academic medical centers. From minimally invasive glaucoma procedures to advanced dry eye treatments, we offer comprehensive surgical and medical eye care under one roof. Dr. Plummer stays current with the latest research and techniques, regularly attending national conferences and bringing innovative approaches back to our Kyle community.
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
          <h2 className="text-4xl text-center text-[var(--color-ink)] mb-16" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                Dr. Plummer and his team made my cataract surgery experience completely stress-free. I can now see better than I have in decades, and I no longer need glasses for driving or reading. The personalized care and attention to detail throughout the entire process was exceptional.
              </p>
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-bold text-[var(--color-ink)]">Margaret</p>
                <p className="text-sm text-[var(--color-muted)]">Cataract Surgery Patient</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                The minimally invasive glaucoma procedure Dr. Plummer performed has been life-changing. My eye pressure is finally under control, and the recovery was much faster than I expected. I'm so grateful to have found such skilled and compassionate care right here in Kyle.
              </p>
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-bold text-[var(--color-ink)]">Robert</p>
                <p className="text-sm text-[var(--color-muted)]">Glaucoma Surgery Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>01</div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Comprehensive Evaluation</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Your journey begins with a thorough eye examination using advanced diagnostic technology. Dr. Plummer takes time to understand your vision goals, medical history, and lifestyle needs to create a personalized treatment plan.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>02</div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Personalized Treatment Plan</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We discuss all available options and answer every question you have about your procedure. You will understand exactly what to expect, the benefits and risks, and how the treatment will improve your daily life and vision.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>03</div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Expert Care & Follow-Up</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Whether you need surgery or medical treatment, you receive exceptional care using proven techniques and technology. Our team stays with you through recovery with attentive follow-up appointments to ensure optimal healing and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Advanced Eye Surgery and Personalized Vision Care
          </h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}