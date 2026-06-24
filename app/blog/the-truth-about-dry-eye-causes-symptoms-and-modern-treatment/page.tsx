import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Truth About Dry Eye: Causes, Symptoms, and Modern Treatments | Spark Eye Care',
  description: 'Discover the real causes of dry eye disease, recognize the symptoms, and learn about evidence-based modern treatments that can provide lasting relief.',
  openGraph: {
    title: 'The Truth About Dry Eye: Causes, Symptoms, and Modern Treatments',
    description: 'Discover the real causes of dry eye disease, recognize the symptoms, and learn about evidence-based modern treatments that can provide lasting relief.',
    type: 'article',
    url: 'https://www.sparkeyetx.com/blog/the-truth-about-dry-eye-causes-symptoms-and-modern-treatment',
  },
}

export default function BlogPost() {
  return (
    <main>
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
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Truth About Dry Eye: Causes, Symptoms, and Modern Treatments
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you've ever experienced that gritty, burning sensation in your eyes that makes you want to blink constantly—or found yourself reaching for eye drops multiple times throughout the day—you're not alone. Dry eye disease affects millions of people worldwide, yet it remains one of the most misunderstood and undertreated conditions in eye care. The discomfort can range from mildly annoying to genuinely debilitating, impacting your ability to read, work on a computer, drive at night, or simply enjoy your day without constant irritation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            But here's the truth: dry eye is not just about having "dry" eyes. It's a complex, multifactorial disease that affects the tear film—the delicate layer of moisture that protects and nourishes your cornea. Understanding the real causes behind dry eye is the first step toward finding effective, lasting relief.
          </p>

          {/* Section 1 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Dry Eye Disease?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Dry eye disease, also known as keratoconjunctivitis sicca, occurs when your eyes don't produce enough tears or when the tears you produce evaporate too quickly. Your tear film is composed of three layers: an oily outer layer, a watery middle layer, and an inner mucus layer. When any of these layers is compromised, the result is an unstable tear film that fails to adequately protect and lubricate your eye's surface.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This instability triggers a cascade of problems. The ocular surface becomes inflamed, leading to damage of the cornea and conjunctiva. Ironically, this inflammation can sometimes cause excessive tearing as your eyes attempt to compensate—which is why some people with dry eye actually experience watery eyes.
          </p>

          {/* Section 2 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Root Causes: It's Not Just Age
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While dry eye becomes more common with age—particularly in women after menopause due to hormonal changes—the causes are far more diverse than many people realize:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Meibomian Gland Dysfunction (MGD):</strong> The most common cause of dry eye, affecting up to 86% of patients. These glands along your eyelid margins produce the oily layer of tears. When they become blocked or dysfunctional, tears evaporate too quickly.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Digital Eye Strain:</strong> Staring at screens reduces your blink rate by up to 66%, leading to increased tear evaporation and ocular surface exposure.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Environmental Factors:</strong> Air conditioning, heating, wind, low humidity, and air pollution all accelerate tear evaporation.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Medications:</strong> Antihistamines, decongestants, blood pressure medications, antidepressants, and hormone replacement therapy can all reduce tear production.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Autoimmune Conditions:</strong> Sjögren's syndrome, rheumatoid arthritis, lupus, and thyroid disorders are strongly associated with dry eye.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Contact Lens Wear:</strong> Extended wear can disrupt the tear film and reduce corneal sensitivity, decreasing natural tear production.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Symptoms
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Dry eye symptoms can be surprisingly varied and sometimes counterintuitive. You might experience:
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">A stinging, burning, or scratchy sensation in your eyes</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Stringy mucus in or around your eyes</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Increased eye irritation from smoke or wind</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Eye fatigue, especially when reading or using digital devices</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Sensitivity to light</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Redness and inflammation</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">A feeling of having something in your eye</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Difficulty wearing contact lenses</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Blurred vision or eye fatigue</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Watery eyes (reflex tearing in response to irritation)</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These symptoms often worsen throughout the day and can significantly impact quality of life, affecting productivity, driving safety, and participation in activities you enjoy.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant']">
            "Modern dry eye treatment isn't about masking symptoms with artificial tears—it's about addressing the underlying inflammation and restoring healthy tear production."
          </blockquote>

          {/* Section 4 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Modern Treatment Approaches
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that dry eye treatment has advanced dramatically in recent years. Today's approach is personalized, targeting the specific causes of your dry eye rather than simply providing temporary relief.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Lifestyle Modifications and Home Care:</strong>
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                Increase omega-3 fatty acids in your diet (fish oil, flaxseed) to support healthy tear film
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                Use a humidifier to increase moisture in dry indoor environments
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                Apply warm compresses daily to help unclog meibomian glands
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                Practice good eyelid hygiene with gentle cleansing
              </p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Medical Treatments:</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Depending on the severity and cause of your dry eye, your eye care provider may recommend prescription medications that reduce inflammation and help your eyes produce more natural tears. Anti-inflammatory eye drops like cyclosporine (Restasis) or lifitegrast (Xiidra) address the underlying inflammation, while newer options continue to emerge based on cutting-edge research.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Advanced In-Office Procedures:</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For more severe cases, particularly those involving meibomian gland dysfunction, in-office treatments can provide dramatic improvement. These include thermal pulsation systems that clear blocked glands, intense pulsed light (IPL) therapy to reduce inflammation, and punctal plugs that preserve your natural tears by blocking the drainage ducts.
          </p>

          {/* Section 5 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing persistent eye discomfort, redness, or vision changes, it's time to schedule a comprehensive dry eye evaluation. Over-the-counter artificial tears might provide temporary relief, but they don't address the root cause—and in some cases, preservatives in certain drops can actually worsen inflammation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A thorough dry eye assessment includes specialized testing to evaluate your tear production, tear film stability, meibomian gland function, and ocular surface health. This diagnostic approach allows your provider to develop a targeted treatment plan specific to your type of dry eye.
          </p>

          {/* Section 6 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Path Forward
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Living with chronic dry eye can feel discouraging, but understanding that it's a treatable medical condition—not just an inconvenience—is empowering. With the right diagnosis and personalized treatment plan, most people experience significant improvement in their symptoms and quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Don't resign yourself to constant discomfort or dependence on eye drops that only mask the problem. Modern dry eye treatment offers real solutions that address the underlying causes, helping you get back to comfortable, clear vision. Your eyes are worth the investment in proper care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If dry eye symptoms are affecting your daily life, we encourage you to reach out to our team for a comprehensive evaluation. Together, we can develop a treatment strategy that provides lasting relief and protects your long-term eye health.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in comprehensive eye care and advanced dry eye treatment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your Eye Exam: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn what happens during a comprehensive eye examination and why regular visits are essential for maintaining healthy vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Digital Wellness
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Protecting Your Eyes from Digital Strain
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical strategies for reducing eye fatigue and discomfort from extended screen time in our digital world.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  UV Protection and Your Eye Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Why protecting your eyes from ultraviolet radiation is crucial for preventing cataracts, macular degeneration, and other conditions.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find lasting relief from dry eye symptoms.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}