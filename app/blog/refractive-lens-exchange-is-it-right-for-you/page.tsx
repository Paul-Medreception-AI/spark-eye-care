import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refractive Lens Exchange: Is It Right for You? | Spark Eye Care',
  description: 'Considering refractive lens exchange? Learn about RLE surgery, ideal candidates, benefits, risks, and whether this vision correction procedure is the right choice for you.',
  keywords: 'refractive lens exchange, RLE surgery, vision correction, presbyopia treatment, lens replacement, cataract surgery alternative',
  openGraph: {
    title: 'Refractive Lens Exchange: Is It Right for You?',
    description: 'Expert guide to understanding refractive lens exchange surgery and determining if it\'s the right vision correction option for your needs.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Refractive Lens Exchange: Is It Right for You?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine waking up each morning with clear, crisp vision—no more fumbling for reading glasses, no more squinting at your phone, and no more dependence on bifocals or contact lenses. For millions of people over 40 who struggle with presbyopia or high refractive errors, this dream can become reality through refractive lens exchange (RLE).
            </p>
            <p className="mb-6">
              But as with any surgical procedure, the decision to undergo RLE requires careful consideration. Is it the right choice for your eyes, your lifestyle, and your long-term vision goals? This comprehensive guide will help you understand what RLE entails, who makes an ideal candidate, and how to determine if this transformative procedure aligns with your needs.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Refractive Lens Exchange?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Refractive lens exchange is a surgical procedure that replaces your eye's natural lens with an artificial intraocular lens (IOL) to correct refractive errors and reduce or eliminate your dependence on glasses or contacts. While the technique is virtually identical to cataract surgery, RLE is performed on clear lenses that haven't yet developed cataracts.
            </p>
            <p className="mb-6">
              During the procedure, your surgeon makes a small incision in the cornea, removes the natural lens using ultrasound energy (phacoemulsification), and inserts a carefully selected IOL designed to address your specific vision needs. The entire process typically takes less than 30 minutes per eye and is performed on an outpatient basis under local anesthesia.
            </p>
            <p className="mb-6">
              What sets modern RLE apart is the variety of premium IOL options available. Depending on your vision goals, you might choose multifocal lenses for clear vision at all distances, accommodating lenses that adjust focus naturally, or toric lenses specifically designed to correct astigmatism.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Are the Ideal Candidates?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              RLE isn't for everyone, and determining candidacy requires a thorough evaluation by an experienced ophthalmologist. However, certain characteristics indicate you might be an excellent candidate for this procedure.
            </p>
            <p className="mb-6">
              The most common candidates are adults over 40 who have developed presbyopia—the age-related loss of near focusing ability that makes reading and close-up tasks increasingly difficult. If you find yourself constantly reaching for reading glasses or struggling with bifocals, RLE may offer a permanent solution.
            </p>
            <p className="mb-6">
              People with high degrees of nearsightedness (myopia) or farsightedness (hyperopia) that exceed the safe treatment range for LASIK are also excellent candidates. Similarly, those with thin corneas that make them unsuitable for laser vision correction can often benefit from RLE.
            </p>
            <p className="mb-6">
              Other ideal candidates include individuals with early cataracts who want to proactively address both refractive errors and lens clouding in one procedure, or those who've already had LASIK but are now experiencing presbyopia and want comprehensive vision correction.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The goal of RLE isn't just clear vision—it's visual freedom. We're helping patients reclaim activities they love without the constant burden of corrective eyewear."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Benefits and Advantages
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The benefits of RLE extend far beyond simple vision correction. For many patients, the procedure represents a life-changing investment in their quality of life and long-term eye health.
            </p>
            <p className="mb-6">
              One of the most significant advantages is permanence. Unlike LASIK, which reshapes the cornea, RLE replaces the lens itself—meaning you'll never develop cataracts in the treated eye. This is particularly appealing for patients in their 50s and 60s who would likely face cataract surgery within the next decade or two anyway.
            </p>
            <p className="mb-6">
              The range of vision correction possible with RLE is impressive. Modern premium IOLs can address multiple vision zones simultaneously, potentially eliminating your need for glasses for driving, computer work, reading, and everything in between. Many patients report greater visual freedom than they've experienced since their youth.
            </p>
            <p className="mb-6">
              For active individuals, the lifestyle benefits are substantial. Swimming, traveling, playing sports, and outdoor activities all become simpler without the hassle of glasses or contacts. The confidence that comes with clear, reliable vision in all situations shouldn't be underestimated.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Considering the Risks and Limitations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While RLE has an excellent safety profile and high satisfaction rates, it's important to understand the potential risks and limitations before making your decision. As with any intraocular surgery, complications are possible, though rare.
            </p>
            <p className="mb-6">
              The most common side effects are temporary and include dry eyes, glare or halos around lights (especially at night), and mild discomfort during the healing process. These typically resolve within a few weeks to months as your brain adapts to the new lenses.
            </p>
            <p className="mb-6">
              More serious but rare complications include infection (endophthalmitis), retinal detachment, increased eye pressure, or displacement of the IOL. Your surgeon will discuss your individual risk factors and take precautions to minimize these possibilities.
            </p>
            <p className="mb-6">
              It's also worth noting that while premium multifocal IOLs offer excellent distance and near vision, some patients experience reduced contrast sensitivity or need reading glasses for very small print. The adjustment period can require patience as your visual system adapts to the new way of seeing.
            </p>
            <p className="mb-6">
              Additionally, RLE is typically not covered by insurance when performed for refractive purposes rather than cataract removal, making it a significant out-of-pocket investment for most patients.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect: The Evaluation and Decision Process
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Determining whether RLE is right for you begins with a comprehensive eye examination and consultation with a qualified ophthalmologist who specializes in refractive surgery.
            </p>
            <p className="mb-6">
              Your evaluation will include detailed measurements of your eye's anatomy, assessment of your corneal health, evaluation of your retina and optic nerve, and discussion of your vision goals and lifestyle needs. Advanced diagnostic technology provides precise data that helps your surgeon select the optimal IOL for your unique eyes.
            </p>
            <p className="mb-6">
              This is also the time to ask questions. How much improvement can you realistically expect? What are the chances you'll still need glasses for certain tasks? How long is the recovery period, and when can you return to work or normal activities? A reputable surgeon will provide honest, evidence-based answers rather than making unrealistic promises.
            </p>
            <p className="mb-6">
              Consider your decision carefully, weighing both the medical and personal factors. Are you prepared for the recovery process? Do you have realistic expectations about outcomes? Are you comfortable with the financial investment? Taking time to reflect on these questions will help ensure you're making the right choice for your individual circumstances.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Key Questions to Discuss with Your Surgeon
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before committing to RLE, arm yourself with information by asking your surgeon these essential questions:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Based on my eye health and prescription, am I a good candidate for RLE, or would another procedure be more appropriate?</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Which type of IOL do you recommend for my vision needs and lifestyle, and why?</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>What is your experience with RLE procedures, and what are your complication rates?</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>What is the realistic likelihood that I'll be glasses-free for most activities after surgery?</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>What specific risks do I face based on my individual eye health and medical history?</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>What does the recovery timeline look like, and when can I expect to see my final visual results?</p>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Refractive lens exchange represents one of the most advanced and effective solutions for vision correction available today. For the right candidates, it offers the promise of clear vision at all distances, freedom from corrective eyewear, and protection against future cataract development—all in a single procedure.
            </p>
            <p className="mb-6">
              However, the decision to undergo RLE should never be taken lightly. It requires careful evaluation of your eye health, realistic expectations about outcomes, consideration of the risks and benefits, and confidence in your surgical team.
            </p>
            <p className="mb-6">
              If you're tired of dependence on glasses or contacts, if you're facing the limitations of presbyopia, or if you simply want to explore your options for achieving better vision, a consultation with an experienced refractive surgeon is your next step. Together, you can determine whether RLE is the right choice for your eyes, your life, and your future.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in comprehensive eye care and vision correction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Presbyopia: When Reading Becomes Difficult
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about age-related vision changes and modern treatment options available.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Surgical Options</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  LASIK vs. RLE: Which Vision Correction Is Best?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Compare the two most popular vision correction procedures and find what's right for you.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Guide</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect After Lens Replacement Surgery
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  A complete guide to recovery, healing timeline, and optimizing your surgical results.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you explore your vision correction options and determine if RLE is right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}