import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Am I Too Young for Cataract Surgery? Age and Timing Considerations | Spark Eye Care',
  description: 'Cataracts aren\'t just for seniors. Learn about age factors, timing considerations, and when cataract surgery makes sense regardless of your age.',
  keywords: 'cataract surgery age, young cataracts, early cataract surgery, cataract timing, age-related cataracts',
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
          <h1 className="text-5xl font-light leading-tight text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Am I Too Young for Cataract Surgery? Age and Timing Considerations
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you hear the word "cataracts," you might picture someone in their 70s or 80s. But what if you're in your 40s, 50s, or even younger, and your ophthalmologist has just mentioned the word? The question that immediately comes to mind is often: "Am I too young for this?"
            </p>
            <p className="mb-6">
              The truth is, while cataracts are indeed more common with advancing age, they don't follow a strict timeline. Age is an important factor in cataract development and surgical timing, but it's far from the only consideration. Understanding when cataract surgery makes sense—regardless of the number on your birthday cake—can help you make informed decisions about your vision and quality of life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Cataracts Beyond Age
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A cataract is a clouding of the eye's natural lens, which sits behind the iris and pupil. While age-related cataracts typically develop gradually over decades, cataracts can occur at any age due to various factors including genetics, trauma, medications (particularly long-term steroid use), medical conditions like diabetes, and even congenital factors present from birth.
            </p>
            <p className="mb-6">
              The traditional notion that cataracts are exclusively an elderly person's condition has been challenged by increasing awareness of early-onset cataracts. Research published in ophthalmology journals indicates that approximately 5-10% of cataract surgeries are performed on patients under age 60, and these numbers are rising as diagnostic techniques improve and awareness grows.
            </p>
            <p className="mb-6">
              What matters most isn't your chronological age, but rather how the cataract affects your daily life, visual function, and overall well-being.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "The right time for cataract surgery isn't determined by a birth certificate—it's determined by how your vision impacts your ability to live the life you want to live."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When Age Is Just a Number: Functional Impact Matters Most
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Modern ophthalmology has moved away from the outdated practice of waiting until cataracts are "ripe" before removing them. Today's surgical approach focuses on functional vision—how well you can perform the activities that matter to you.
            </p>
            <p className="mb-6">
              For someone in their 40s or 50s who's still working, driving at night, playing sports, or caring for young children, even a moderate cataract can significantly impact quality of life. Conversely, a person in their 80s with minimal visual demands might function perfectly well with a more advanced cataract.
            </p>
            <p className="mb-6">
              Consider these functional indicators that suggest it might be time for cataract surgery, regardless of age:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty reading, even with updated glasses or adequate lighting</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased sensitivity to glare from headlights or sunlight</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Challenges with night driving that affect safety or independence</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Colors appearing faded or yellowed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Frequent prescription changes that no longer improve vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Double vision in one eye</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Inability to perform work tasks or hobbies you enjoy</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Special Considerations for Younger Patients
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While cataract surgery is highly successful at any age, younger patients do have some unique considerations to discuss with their ophthalmologist.
            </p>
            <p className="mb-6">
              <strong>Lens implant selection</strong> becomes particularly important for younger individuals. Premium intraocular lenses (IOLs) that correct astigmatism or provide multifocal vision may offer greater long-term benefit for someone who has decades of active life ahead. The investment in advanced lens technology often makes more sense for a 45-year-old than a 90-year-old, though individual circumstances always vary.
            </p>
            <p className="mb-6">
              <strong>Long-term outcomes</strong> are another consideration. Standard IOLs are designed to last a lifetime, but younger patients will be living with their lens implants for potentially 40, 50, or more years. While IOL technology has proven remarkably durable, the longer timeframe means more opportunities for rare complications like posterior capsule opacification (easily treated with a laser procedure) or IOL dislocation (rare but more likely with trauma or certain connective tissue conditions).
            </p>
            <p className="mb-6">
              <strong>Career and lifestyle factors</strong> also play a role. A 35-year-old commercial pilot with a cataract affecting depth perception and glare tolerance faces very different considerations than a 75-year-old retiree. Occupational requirements, recreational activities, and life stage all influence the timing decision.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Risks of Waiting Too Long
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One common misconception is that it's always better to delay cataract surgery as long as possible. In reality, waiting too long can create several problems.
            </p>
            <p className="mb-6">
              Very advanced cataracts become harder (literally) and more difficult to remove, potentially increasing surgical complexity and recovery time. What would have been a routine 15-minute procedure might become more involved if the cataract has progressed to a dense, brunescent (brown and hardened) stage.
            </p>
            <p className="mb-6">
              Additionally, living with significantly impaired vision carries real risks. Falls, accidents, social isolation, and decreased independence can all result from delaying necessary surgery. Research has demonstrated that cataract surgery in older adults reduces fall risk and improves quality of life measures—benefits that apply regardless of whether you're 55 or 85.
            </p>
            <p className="mb-6">
              Perhaps most importantly, living with poor vision when excellent solutions exist means unnecessarily compromising your quality of life. Every day spent squinting, straining, or avoiding activities you love is a day that didn't need to be that way.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Making the Decision: Key Questions to Ask
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're wondering whether you're too young—or whether it's the right time—for cataract surgery, here are essential questions to discuss with your ophthalmologist:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How much is the cataract affecting my vision objectively, and how does that compare to symptoms I'm experiencing?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Are there other eye conditions contributing to my vision problems that need to be addressed?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What lens options are most appropriate for my age, lifestyle, and visual goals?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What are the realistic outcomes I can expect from surgery at my age?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Are there medical or ocular reasons to proceed sooner or to wait?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What will recovery look like given my age and health status?</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Bottom Line on Age and Cataract Surgery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You're not too young for cataract surgery if cataracts are significantly impacting your vision and quality of life. Age is simply one factor among many in a complex decision that should be individualized to your unique circumstances.
            </p>
            <p className="mb-6">
              Modern cataract surgery is one of medicine's great success stories—a safe, effective procedure with excellent outcomes across all age groups. The technology, techniques, and lens options available today mean that younger patients can expect decades of clear vision after surgery.
            </p>
            <p className="mb-6">
              Rather than asking "Am I too young?" the better question is "Is my vision limiting my life in ways that surgery could improve?" If the answer is yes, age becomes far less relevant than taking action to restore the clear vision you deserve.
            </p>
            <p className="mb-6">
              If you're experiencing vision changes and wondering whether cataracts might be the cause—or if you've been told you have cataracts but aren't sure about timing—a comprehensive evaluation with an experienced ophthalmologist is your best next step. Together, you can determine whether now is the right time, or create a monitoring plan for the future.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in comprehensive eye care and surgical excellence</div>
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
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                What to Expect During Cataract Surgery: A Complete Guide
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Understanding the procedure can ease anxiety and help you prepare for successful outcomes.</p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Treatment Options</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Premium vs. Standard Lens Implants: Making the Right Choice
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Explore your lens options and learn which technology might best suit your lifestyle and visual goals.</p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Recovery</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Cataract Surgery Recovery: Timeline and Tips for Optimal Healing
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Learn what to expect after surgery and how to ensure smooth recovery and excellent visual outcomes.</p>
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you explore your options and determine the best timing for your vision care needs.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}