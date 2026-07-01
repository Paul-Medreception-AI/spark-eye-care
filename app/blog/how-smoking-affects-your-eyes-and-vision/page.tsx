import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Smoking Affects Your Eyes and Vision | Spark Eye Care',
  description: 'Learn about the serious impact smoking has on eye health, from cataracts to macular degeneration. Discover why quitting smoking is one of the best things you can do for your vision.',
  openGraph: {
    title: 'How Smoking Affects Your Eyes and Vision | Spark Eye Care',
    description: 'Learn about the serious impact smoking has on eye health, from cataracts to macular degeneration. Discover why quitting smoking is one of the best things you can do for your vision.',
    url: 'https://www.sparkeyetx.com/blog/how-smoking-affects-your-eyes-and-vision',
    type: 'article',
    images: [
      {
        url: 'https://www.sparkeyetx.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spark Eye Care',
      },
    ],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
          
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            How Smoking Affects Your Eyes and Vision
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 font-light">
              Most people know that smoking damages the lungs and heart, but fewer realize that lighting up a cigarette can seriously harm your eyes. The truth is, smoking doesn't just cloud the air around you—it can cloud your vision permanently. From accelerating cataracts to increasing your risk of blindness, the effects of smoking on eye health are profound and often irreversible. If you've ever needed another reason to quit, protecting your precious gift of sight might be the most compelling one yet.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Connection Between Smoking and Eye Disease
            </h2>
            <p className="mb-6">
              Cigarette smoke contains over 7,000 chemicals, many of which are toxic and can damage delicate eye tissues. When you smoke, these harmful substances enter your bloodstream and travel throughout your body, including to your eyes. The oxidative stress caused by smoking damages blood vessels, reduces oxygen supply to the eyes, and promotes inflammation—all of which create the perfect storm for eye disease.
            </p>
            <p className="mb-6">
              Research has consistently shown that smokers face significantly higher risks for virtually every major eye condition. The dose-response relationship is clear: the more you smoke and the longer you smoke, the greater your risk becomes. Even secondhand smoke exposure has been linked to increased eye disease risk, particularly in children and non-smoking adults who live with smokers.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Age-Related Macular Degeneration (AMD)
            </h2>
            <p className="mb-6">
              Age-related macular degeneration is a leading cause of vision loss in people over 50, and smoking is the single most significant modifiable risk factor for developing this condition. Smokers are three to four times more likely to develop AMD compared to non-smokers, and they tend to develop it at younger ages with more aggressive progression.
            </p>
            <p className="mb-6">
              AMD affects the macula, the central part of the retina responsible for sharp, detailed vision needed for reading, driving, and recognizing faces. The disease can progress from dry AMD, which causes gradual vision loss, to wet AMD, which can lead to rapid and severe vision impairment. The chemicals in cigarette smoke damage the retinal pigment epithelium and promote the growth of abnormal blood vessels under the retina—hallmarks of this devastating disease.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant'] leading-relaxed">
                "The good news is that quitting smoking can significantly reduce your risk of AMD. Studies show that after 20 years of not smoking, your risk approaches that of someone who never smoked."
              </p>
            </div>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cataracts: Clouding Your Future
            </h2>
            <p className="mb-6">
              Cataracts occur when the normally clear lens of the eye becomes cloudy, causing blurred vision, glare sensitivity, and difficulty seeing at night. While cataracts are common with aging, smoking dramatically accelerates their development. Studies indicate that heavy smokers have up to three times the risk of developing cataracts compared to non-smokers.
            </p>
            <p className="mb-6">
              The oxidative stress from smoking damages the proteins in the lens, causing them to clump together and create cloudiness. Smokers not only develop cataracts earlier in life but also often require cataract surgery at younger ages. The type of cataract that forms can also be more severe, with nuclear cataracts (affecting the center of the lens) being particularly common among smokers.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Diabetic Retinopathy and Vascular Complications
            </h2>
            <p className="mb-6">
              For people with diabetes, smoking adds another layer of risk. Smoking worsens diabetic retinopathy by damaging blood vessels in the retina and reducing oxygen supply to eye tissues. This combination can lead to bleeding, swelling, and the formation of scar tissue that can cause retinal detachment and blindness.
            </p>
            <p className="mb-6">
              Beyond diabetic retinopathy, smoking increases the risk of other vascular eye problems, including retinal vein occlusion (blockage of veins that drain blood from the retina) and ischemic optic neuropathy (damage to the optic nerve from reduced blood flow). These conditions can cause sudden, permanent vision loss and have limited treatment options once they occur.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Additional Eye Conditions Linked to Smoking
            </h2>
            <p className="mb-6">
              The eye problems associated with smoking extend well beyond the major diseases:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Dry Eye Syndrome:</strong> Smoke irritates the eyes and disrupts the tear film, leading to chronic dryness, burning, and discomfort.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Uveitis:</strong> Smoking increases inflammation throughout the body, including in the uvea (the middle layer of the eye), causing pain, redness, and potential vision loss.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Thyroid Eye Disease:</strong> For people with Graves' disease, smoking significantly worsens thyroid eye disease, causing bulging eyes, double vision, and eye pain.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Optic Neuropathy:</strong> The toxic effects of tobacco can directly damage the optic nerve, leading to vision loss that may be irreversible.</p>
              </div>
            </div>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Benefits of Quitting: It's Never Too Late
            </h2>
            <p className="mb-6">
              While the risks of smoking for eye health are sobering, there's encouraging news: quitting smoking at any age reduces your risk of developing eye disease. Within just a few years of quitting, your risk for cataracts begins to decline. After 10-15 years, your risk of AMD starts to decrease significantly, and after 20 years, it approaches that of someone who never smoked.
            </p>
            <p className="mb-6">
              Even if you already have early signs of eye disease, quitting can slow progression and improve your response to treatment. For conditions like AMD, studies show that continuing to smoke after diagnosis leads to worse outcomes and more rapid vision loss. Quitting gives your eyes the best possible chance to maintain function and respond to medical interventions.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Action to Protect Your Vision
            </h2>
            <p className="mb-6">
              If you smoke, the single best thing you can do for your eye health is to quit. Here are steps to get started:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Talk to your healthcare provider about smoking cessation programs and medications that can help you quit successfully.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Schedule comprehensive eye exams annually, especially if you have a history of smoking, to catch problems early when they're most treatable.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Eat a diet rich in leafy greens, fish, and colorful fruits and vegetables to support eye health with antioxidants and omega-3 fatty acids.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Protect your eyes from UV light by wearing quality sunglasses outdoors, as smoking combined with UV exposure compounds the risk for certain eye diseases.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Avoid secondhand smoke exposure to protect not just your own eyes but also the vision health of those around you.</p>
              </div>
            </div>

            <p className="text-lg mt-12 mb-6 leading-relaxed">
              Your eyes are irreplaceable, and the vision they provide enriches every aspect of your life. While smoking may have become a habit, it doesn't have to define your future health. Whether you're a current smoker considering quitting or a former smoker wondering about your risk, regular eye care and preventive measures can make a significant difference. Our team at Spark Eye Care is here to support your vision health journey with comprehensive exams, early detection, and treatment options tailored to your needs.
            </p>
            <p className="text-lg leading-relaxed">
              Don't wait until vision problems develop. Schedule your comprehensive eye examination today and take an important step toward protecting your sight for years to come.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Age-Related Vision Changes</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn what vision changes are normal with age and when to seek professional care.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Nutrition for Healthy Eyes</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover which foods and nutrients support optimal vision and eye health.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Importance of Regular Eye Exams</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Why routine eye care is essential for detecting problems early and protecting vision.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}