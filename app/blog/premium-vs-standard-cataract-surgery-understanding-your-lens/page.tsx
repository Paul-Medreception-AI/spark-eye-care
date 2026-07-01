import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium vs Standard Cataract Surgery: Understanding Your Lens Options | Spark Eye Care',
  description: 'Comprehensive guide to choosing between premium and standard intraocular lenses for cataract surgery. Learn about lens options, benefits, costs, and which choice is right for your vision goals.',
  keywords: 'cataract surgery, premium IOL, standard IOL, intraocular lens, monofocal lens, multifocal lens, toric lens, cataract treatment, vision correction',
  openGraph: {
    title: 'Premium vs Standard Cataract Surgery: Understanding Your Lens Options',
    description: 'Expert guidance on selecting the right intraocular lens for your cataract surgery',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Spark Eye Care Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Premium vs Standard Cataract Surgery: Understanding Your Lens Options
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6 text-lg">
              If you've been told you need cataract surgery, you're facing one of the most important decisions in your vision care journey: choosing the right intraocular lens (IOL). While the removal of your clouded natural lens is standard across all cataract procedures, the artificial lens that replaces it can dramatically affect your vision quality, lifestyle, and long-term satisfaction.
            </p>
            <p className="mb-6">
              Understanding the difference between premium and standard lens options isn't just about cost—it's about aligning your choice with your visual goals, daily activities, and quality of life expectations. This comprehensive guide will help you make an informed decision that's right for you.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            What Are Standard Intraocular Lenses?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Standard intraocular lenses, also called monofocal lenses, are the traditional option covered by Medicare and most insurance plans. These lenses provide clear vision at one fixed distance—typically optimized for distance vision. After surgery with standard IOLs, most patients achieve excellent distance vision but will need reading glasses for close-up tasks like reading menus, using smartphones, or doing detailed work.
            </p>
            <p className="mb-6">
              Monofocal lenses have been used successfully for decades and represent a safe, proven solution for cataract treatment. They correct the cloudiness caused by cataracts and can significantly improve your overall vision quality. However, they don't address presbyopia (age-related loss of near vision) or astigmatism, which means additional corrective eyewear is typically necessary for various distances and activities.
            </p>
            <p className="mb-6">
              For many patients, especially those comfortable wearing glasses and primarily concerned about distance vision for driving and daily activities, standard lenses provide excellent results at no out-of-pocket cost beyond standard insurance deductibles and copays.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Premium Lens Options
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Premium intraocular lenses represent advanced technology designed to reduce or eliminate dependence on glasses after cataract surgery. These lenses come in several types, each addressing different vision needs:
            </p>
            <p className="mb-6">
              <strong>Multifocal and Extended Depth of Focus (EDOF) Lenses</strong> provide clear vision at multiple distances—near, intermediate, and far. These lenses use sophisticated optical designs to split incoming light, allowing you to see clearly whether you're reading a book, working on a computer, or driving. Many patients with these lenses achieve functional vision without glasses for most daily activities.
            </p>
            <p className="mb-6">
              <strong>Toric Lenses</strong> correct astigmatism, a common condition where the cornea has an irregular shape causing blurred or distorted vision. Toric lenses are available in both standard monofocal and premium multifocal versions, addressing both cataracts and astigmatism simultaneously.
            </p>
            <p className="mb-6">
              <strong>Accommodating Lenses</strong> are designed to move or change shape inside the eye, mimicking the natural focusing ability of a younger lens. While results vary, some patients achieve good vision at multiple distances with these lenses.
            </p>
            <p className="mb-6">
              Premium lenses require an out-of-pocket investment, as insurance typically covers only the cost equivalent to standard lenses. However, many patients find that reduced dependence on glasses—and the associated long-term costs of prescription eyewear—makes premium lenses a worthwhile investment in their quality of life.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "The right lens choice isn't about what's 'better' in absolute terms—it's about what aligns best with your lifestyle, visual goals, and expectations for life after cataract surgery."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Key Considerations in Making Your Decision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Choosing between premium and standard lenses requires honest reflection on several important factors:
            </p>
            <p className="mb-6">
              <strong>Your Lifestyle and Visual Demands:</strong> Consider how you spend your day. Are you an avid reader? Do you work extensively on computers? Do you enjoy hobbies requiring detailed near vision like crafting or woodworking? Or are your primary concerns distance activities like driving, golf, or outdoor recreation? Your daily visual needs should heavily influence your lens choice.
            </p>
            <p className="mb-6">
              <strong>Current Glasses Dependence:</strong> If you've worn glasses comfortably your entire life and don't mind continuing to do so, standard lenses may serve you well. However, if you've always desired freedom from glasses or find them inconvenient for your active lifestyle, premium lenses may be worth the investment.
            </p>
            <p className="mb-6">
              <strong>Financial Considerations:</strong> Premium lenses typically cost between $1,500 to $3,000 per eye beyond what insurance covers. While this represents a significant upfront investment, consider the long-term costs of prescription glasses, bifocals, or progressive lenses over the remaining decades of your life. For many patients, premium lenses prove cost-effective over time.
            </p>
            <p className="mb-6">
              <strong>Tolerance for Visual Trade-offs:</strong> Premium multifocal lenses can occasionally cause visual phenomena like halos around lights at night or slightly reduced contrast sensitivity. While most patients adapt quickly and find these minor compared to glasses freedom, it's important to discuss these potential trade-offs with your surgeon.
            </p>
            <p className="mb-6">
              <strong>Realistic Expectations:</strong> Even premium lenses may not eliminate glasses need entirely. Some patients still need readers for very fine print or extended reading sessions. Understanding realistic outcomes helps ensure satisfaction with your choice.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            What the Research Shows
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Clinical studies consistently demonstrate high satisfaction rates with both standard and premium IOLs, though outcomes differ based on patient priorities and expectations.
            </p>
            <p className="mb-6">
              Research published in major ophthalmology journals shows that multifocal IOL patients achieve spectacle independence rates of 70-85% for most daily activities, compared to 20-30% for standard monofocal lenses. Studies also indicate that patient satisfaction correlates strongly with appropriate preoperative counseling and realistic expectation-setting rather than lens type alone.
            </p>
            <p className="mb-6">
              A comprehensive analysis in the Journal of Cataract and Refractive Surgery found that while premium lens patients report higher rates of visual phenomena like halos, overall satisfaction levels remain very high—typically above 90%—when patients are properly selected and counseled. The study emphasized that the best candidates for premium lenses are those with strong motivation for glasses independence and realistic understanding of potential trade-offs.
            </p>
            <p className="mb-6">
              Importantly, research confirms that both standard and premium lenses are safe, effective, and dramatically improve quality of life compared to living with untreated cataracts. The "right" choice truly depends on individual circumstances rather than one option being universally superior.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Making Your Decision: Practical Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              As you navigate this important decision, consider these practical steps to ensure you choose the lens option that's right for you:
            </p>
            
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Schedule a Comprehensive Consultation:</strong> Discuss your visual goals, lifestyle, and concerns thoroughly with your surgeon. This conversation should be unhurried and comprehensive.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Ask About Your Specific Candidacy:</strong> Not all eyes are ideal candidates for all lens types. Certain conditions like irregular corneas, retinal issues, or extreme prescriptions may affect which lenses work best for you.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Request Visual Simulations:</strong> Many practices offer demonstrations or simulations showing how different lenses affect vision. These can provide valuable insight into what to expect.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Talk to Previous Patients:</strong> Ask your surgeon if you can speak with patients who've chosen different lens options. First-hand experiences can provide valuable perspective.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Consider Timing and Trial Periods:</strong> If having both eyes done, some patients choose to try standard in one eye and premium in the other, though this approach requires careful discussion with your surgeon.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Review Financial Options:</strong> If premium lenses interest you but cost is a concern, ask about financing plans or payment options that might make them more accessible.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Don't Rush Your Decision:</strong> While cataracts shouldn't be ignored indefinitely, you typically have time to carefully consider your options unless your surgeon indicates urgency for medical reasons.
                </div>
              </div>
            </div>

            <p className="mb-6">
              Remember that this decision is deeply personal. What works beautifully for one patient may not be ideal for another. The goal is matching lens technology to your unique combination of medical factors, lifestyle needs, financial situation, and personal preferences.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Looking Forward: Life After Cataract Surgery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Regardless of which lens option you choose, cataract surgery typically offers life-changing improvements in vision quality. Colors appear brighter, contrast sensitivity improves, and the cloudy, dimmed vision caused by cataracts is replaced with clearer sight.
            </p>
            <p className="mb-6">
              Most patients experience rapid recovery, with noticeable vision improvement within days and continued refinement over several weeks. The procedure itself is one of the safest and most successful surgeries in all of medicine, with complication rates below 1% and satisfaction rates consistently above 95%.
            </p>
            <p className="mb-6">
              Whether you choose standard lenses and embrace the clarity they provide with the assistance of glasses, or invest in premium lenses for broader spectacle independence, you're making a positive choice for your vision health and quality of life.
            </p>
            <p className="mb-6">
              The key to a successful outcome isn't just the lens technology—it's the partnership between you and your eye care team. Open communication about your expectations, honest discussion about trade-offs, and realistic understanding of outcomes all contribute to satisfaction with your results.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 animate-fade-up">
            <h3 className="text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Ready to Discuss Your Options?
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Choosing the right intraocular lens is an important decision that deserves personalized guidance from experienced professionals. Our team at Spark Eye Care specializes in helping patients navigate cataract surgery options with comprehensive consultations, advanced diagnostic technology, and patient-centered care.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              We'll take the time to understand your lifestyle, assess your eye health thoroughly, explain all available options in plain language, and help you make the choice that aligns with your goals and values. Your vision is too important to leave to guesswork.
            </p>
            <a href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-dark)] transition-all">
              Schedule Your Consultation
            </a>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in comprehensive eye care and advanced cataract surgery. Our team is dedicated to patient education and personalized treatment planning.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Cataracts: When Is Surgery Necessary?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about cataract development, symptoms to watch for, and how to know when it's time to consider surgical treatment.
                </p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Surgical Care</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect: Your Cataract Surgery Journey
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A complete guide to preparing for surgery, what happens during the procedure, and recovery expectations for optimal outcomes.
                </p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Healthy Aging</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Protecting Your Vision as You Age: Prevention Strategies
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Evidence-based approaches to maintaining eye health, reducing cataract risk, and preserving clear vision throughout your lifetime.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Our team is here to help you navigate your cataract surgery options with expert guidance and compassionate care.
          </p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all hover:scale-105 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}