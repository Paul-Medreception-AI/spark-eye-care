import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refractive Lens Exchange | Spark Eye Care',
  description: 'Advanced refractive lens exchange surgery to correct vision problems and reduce dependence on glasses. Expert care for presbyopia, high refractive errors, and lens replacement.',
}

export default function RefractiveLensExchangePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Refractive Lens Exchange</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Refractive Lens Exchange in www.sparkeyetx
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed opacity-95">
            Refractive lens exchange offers a permanent solution for vision correction by replacing your eye's natural lens with an advanced intraocular lens. This transformative procedure helps patients achieve clear vision at all distances while addressing presbyopia, high refractive errors, and age-related lens changes.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            What is Refractive Lens Exchange?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Refractive lens exchange (RLE), also known as clear lens extraction or lens replacement surgery, is an advanced vision correction procedure that involves removing the eye's natural crystalline lens and replacing it with a premium artificial intraocular lens (IOL). Unlike LASIK or PRK, which reshape the cornea, RLE addresses vision problems at the lens level, making it an ideal solution for patients with high degrees of nearsightedness, farsightedness, astigmatism, or presbyopia who may not be good candidates for corneal refractive surgery.
            </p>
            
            <p>
              The procedure is virtually identical to modern cataract surgery, utilizing the same proven techniques and advanced technology that have made cataract surgery one of the most successful procedures in all of medicine. However, RLE is performed on clear, healthy lenses before cataracts have developed, offering patients the opportunity to address both refractive errors and presbyopia proactively while permanently preventing future cataract formation. The artificial lens implant remains stable and functional for life, providing lasting vision improvement without deterioration over time.
            </p>
            
            <p>
              Premium intraocular lenses used in RLE come in various types, including multifocal lenses that provide clear vision at multiple distances, accommodating lenses that change focus like natural lenses, extended depth of focus lenses that offer a continuous range of vision, and toric lenses specifically designed to correct astigmatism. These advanced lens technologies allow patients to customize their vision correction based on their lifestyle needs, visual demands, and personal preferences, often dramatically reducing or eliminating dependence on glasses and contact lenses for daily activities.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
              You May Benefit from Refractive Lens Exchange If You Experience:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'High degrees of nearsightedness or farsightedness',
                'Age-related reading vision difficulties (presbyopia)',
                'Dependence on bifocals or progressive lenses',
                'Astigmatism affecting vision quality',
                'Thin corneas unsuitable for LASIK',
                'Early lens changes or decreased contrast sensitivity',
                'Desire for permanent vision correction',
                'Active lifestyle requiring clear vision at all distances'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-4 text-center">
            Our Approach to Refractive Lens Exchange
          </h2>
          <p className="text-xl text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            Comprehensive surgical care utilizing the latest lens technology and precision surgical techniques
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Detailed preoperative assessment including advanced biometry, corneal topography, optical coherence tomography, and wavefront analysis to map your unique eye anatomy and calculate precise lens power for optimal visual outcomes.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Personalized Lens Selection
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                In-depth consultation to determine the ideal premium IOL based on your visual goals, lifestyle requirements, occupation, hobbies, and existing eye health. Options include multifocal, extended depth of focus, toric, and accommodating lens designs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Ongoing Support
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Comprehensive postoperative care with scheduled follow-up visits to monitor healing, assess visual recovery, optimize visual outcomes, and address any questions or concerns during your recovery and visual adaptation period.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-[var(--color-ink)] mb-8">
              Advanced Surgical Techniques and Technology
            </h3>
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
              <p className="mb-6">
                Our refractive lens exchange procedures utilize state-of-the-art femtosecond laser technology for bladeless precision, advanced phacoemulsification systems for gentle lens removal, and sophisticated imaging guidance for accurate lens positioning. The surgery is performed through tiny micro-incisions that typically require no sutures and heal naturally within days.
              </p>
              <p className="mb-6">
                The procedure is performed on an outpatient basis using topical anesthetic drops for comfort, with most patients experiencing minimal discomfort. The entire surgical process typically takes 15-20 minutes per eye, with patients remaining awake but relaxed throughout. We employ the latest premium intraocular lenses from leading manufacturers, carefully selected based on extensive research, clinical outcomes data, and proven track records of safety and effectiveness.
              </p>
              <p>
                Postoperative care includes prescription anti-inflammatory and antibiotic eye drops to promote healing and prevent infection, protective eyewear recommendations, activity guidelines tailored to your recovery, and a structured follow-up schedule at one day, one week, one month, and three months after surgery to ensure optimal healing and visual outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-8 text-center">
              What to Expect: Your RLE Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Initial Consultation & Testing
                </h3>
                <p className="text-[var(--color-ink)]">
                  Comprehensive eye examination, advanced diagnostic testing, lens calculations, and detailed discussion of your visual goals, lens options, surgical process, and expected outcomes. We'll answer all your questions and ensure you feel confident about proceeding.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Surgery Day & First 24 Hours
                </h3>
                <p className="text-[var(--color-ink)]">
                  Quick outpatient procedure with immediate visual improvement, though vision may be blurry initially. Mild discomfort, light sensitivity, and watering are normal. Protective eye shield worn overnight. Most patients notice significantly improved vision by the next morning's follow-up appointment.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  First Week to Month
                </h3>
                <p className="text-[var(--color-ink)]">
                  Progressive vision improvement as your eyes heal and adapt to the new lens. Prescription eye drops continue during this period. Vision typically stabilizes within 2-4 weeks. Most patients resume normal daily activities within days, with full recovery and optimal vision achieved within 4-6 weeks.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Long-Term Results
                </h3>
                <p className="text-[var(--color-ink)]">
                  Stable, permanent vision correction with the artificial lens remaining functional for life. No cataract formation in the treated eye since the natural lens has been replaced. Annual comprehensive eye exams recommended to monitor overall eye health and address any age-related changes in other eye structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Common Questions About Refractive Lens Exchange
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>How is RLE different from cataract surgery?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Refractive lens exchange is essentially the same surgical procedure as cataract surgery, using identical techniques and technology. The key difference is that RLE is performed on clear, healthy lenses before cataracts develop, primarily for vision correction purposes rather than to remove cloudy cataracts. Both procedures involve removing the natural lens and replacing it with an artificial intraocular lens, offering permanent vision improvement and preventing future cataract formation in the treated eye.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Am I a good candidate for refractive lens exchange?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Ideal candidates are typically over 45 years old with high degrees of nearsightedness, farsightedness, or astigmatism, experiencing presbyopia requiring reading glasses, or have thin corneas unsuitable for LASIK. RLE works well for patients who want permanent vision correction and freedom from glasses or contacts. A comprehensive eye examination and consultation will determine if RLE is the best option for your specific vision needs, eye health, and lifestyle requirements.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What are the risks and potential complications?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                RLE has an excellent safety profile with decades of proven outcomes. Potential risks include infection (extremely rare with preventive antibiotics), inflammation (controlled with medication), temporary increased eye pressure, retinal detachment (less than 1% risk, higher in very nearsighted eyes), posterior capsule opacification requiring a quick laser treatment months or years later, and visual side effects like glare or halos with multifocal lenses. Serious complications are rare, and most can be successfully treated if they occur. We thoroughly discuss all risks during your consultation.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Will I still need glasses after refractive lens exchange?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Most patients achieve significant reduction or complete elimination of glasses dependence for daily activities. Premium multifocal or extended depth of focus lenses provide clear vision at distance, intermediate, and near ranges, allowing most patients to function without glasses for driving, computer work, reading, and most activities. Some patients may occasionally use reading glasses for very fine print or extended reading in dim lighting. Monofocal lenses correct vision at one distance, typically requiring glasses for reading or other distances. Your lens choice impacts glasses dependence.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>How long do the results of RLE last?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Refractive lens exchange provides permanent vision correction. The artificial intraocular lens does not degrade, change, or deteriorate over time, and cataracts cannot form since the natural lens has been removed. Your vision prescription in the treated eye will not regress. The only potential future change is posterior capsule opacification (clouding of the membrane behind the lens), which occurs in some patients months or years after surgery and is easily treated with a quick, painless laser procedure. Otherwise, results are lifelong.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-10 text-center">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-muted)]">
                Advanced cataract removal with premium lens implants to restore clear vision
              </p>
            </a>

            <a href="/services/lasik-prk" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                LASIK & PRK
              </h4>
              <p className="text-[var(--color-muted)]">
                Laser vision correction for nearsightedness, farsightedness, and astigmatism
              </p>
            </a>

            <a href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)]">
                Complete vision and eye health evaluations with advanced diagnostic technology
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-6">
            Ready to Get Help with Refractive Lens Exchange?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Schedule your consultation today and discover if refractive lens exchange is right for you
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  )
}