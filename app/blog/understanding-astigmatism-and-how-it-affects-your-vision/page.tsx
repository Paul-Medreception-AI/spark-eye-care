import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Astigmatism and How It Affects Your Vision | Spark Eye Care',
  description: 'Learn about astigmatism, its causes, symptoms, and treatment options. Expert insights from Spark Eye Care on managing this common vision condition.',
  openGraph: {
    title: 'Understanding Astigmatism and How It Affects Your Vision | Spark Eye Care',
    description: 'Learn about astigmatism, its causes, symptoms, and treatment options. Expert insights from Spark Eye Care on managing this common vision condition.',
    url: 'https://www.sparkeyetx.com/blog/understanding-astigmatism-and-how-it-affects-your-vision',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO */}
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
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</p>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Astigmatism and How It Affects Your Vision
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Andrew Plummer</span>
          </div>

        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Do you find yourself squinting at road signs, struggling to read text messages, or experiencing persistent headaches after focusing on your computer screen? You might be living with astigmatism—one of the most common yet misunderstood vision conditions affecting millions of people worldwide. The good news? Understanding astigmatism is the first step toward clearer, more comfortable vision.
            </p>
            <p>
              While the term "astigmatism" might sound intimidating, it simply describes an irregularity in how your eye is shaped. Far from being a disease or a sign of eye health problems, astigmatism is a refractive error that can be easily corrected with the right care. Let's explore what astigmatism really means, how it affects your daily life, and what you can do about it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Astigmatism?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              To understand astigmatism, it helps to know how a healthy eye works. In an eye with normal vision, the cornea (the clear front surface of your eye) and the lens are smoothly curved, like a perfectly round basketball. This shape allows light to bend evenly and focus precisely on the retina at the back of your eye, creating clear images.
            </p>
            <p className="mb-6">
              With astigmatism, the cornea or lens has an irregular, oblong shape—more like a football than a basketball. This uneven curvature causes light to focus on multiple points rather than a single point on the retina. The result? Blurred or distorted vision at all distances.
            </p>
            <p>
              Astigmatism often occurs alongside other refractive errors like nearsightedness (myopia) or farsightedness (hyperopia). It can be present from birth or develop gradually over time, and it may change as you age. The degree of astigmatism can range from mild (barely noticeable) to severe (significantly impacting daily activities).
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            How Does Astigmatism Affect Your Vision?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The symptoms of astigmatism can vary widely depending on the severity of the condition. Some people with mild astigmatism may not notice any vision problems at all, while others experience significant visual disturbances that interfere with work, driving, and everyday tasks.
            </p>
            <p className="mb-6">
              Common symptoms include blurred or fuzzy vision at all distances, difficulty seeing at night, eye strain and discomfort, frequent headaches (especially after reading or using digital devices), and the need to squint to see clearly. Many people describe their vision as "stretched" or "smeared," with lights appearing to have halos or starbursts around them.
            </p>
            <p>
              Children with uncorrected astigmatism may struggle in school, have difficulty reading from the board, or complain of tired eyes. Because young children often don't realize their vision is abnormal, regular eye exams are crucial for early detection and treatment.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Understanding that astigmatism is a common, treatable condition—not a disease—empowers patients to seek the care they need for clearer, more comfortable vision."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Gets Astigmatism and Why?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Astigmatism is incredibly common, affecting approximately one in three people in the United States. While the exact cause isn't always clear, several factors can contribute to its development.
            </p>
            <p className="mb-6">
              Genetics plays a significant role—if your parents have astigmatism, you're more likely to develop it as well. The condition is often present from birth, though it may not be detected until later in childhood or early adulthood.
            </p>
            <p className="mb-6">
              Eye injuries or surgeries that affect the cornea can also cause astigmatism. Conditions like keratoconus (a progressive thinning of the cornea) can lead to irregular astigmatism. Additionally, certain eye diseases or scarring on the cornea may result in astigmatic changes.
            </p>
            <p>
              Contrary to popular myths, astigmatism is not caused by reading in poor light, sitting too close to the television, or excessive screen time. These activities may cause eye strain but don't change the physical shape of your cornea or lens.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Diagnosing Astigmatism
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The only way to definitively diagnose astigmatism is through a comprehensive eye examination. During your exam, your eye care provider will perform several tests to measure how your eyes focus light and determine the degree of any refractive error.
            </p>
            <p className="mb-6">
              A visual acuity test (reading letters on an eye chart) provides a baseline measurement of your vision. Keratometry measures the curvature of your cornea, while refraction assessment determines your exact prescription. Your provider may also use corneal topography, a sophisticated imaging technique that creates a detailed map of your cornea's surface.
            </p>
            <p>
              These tests are painless and typically take less than an hour. The American Optometric Association recommends comprehensive eye exams every two years for adults under 60 with no vision problems, and annually for those over 60 or with existing eye conditions.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment Options for Astigmatism
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that astigmatism is highly treatable. Your eye care provider will recommend the best option based on the severity of your astigmatism, your lifestyle, and your personal preferences.
            </p>
            <p className="mb-6">
              <strong>Eyeglasses</strong> are the simplest and most common way to correct astigmatism. Special cylindrical lenses compensate for the irregular shape of your cornea, allowing light to focus properly on your retina. Modern lens technologies offer thin, lightweight options with anti-reflective coatings to reduce glare.
            </p>
            <p className="mb-6">
              <strong>Contact lenses</strong> provide another excellent option. Toric contact lenses are specifically designed to correct astigmatism, with different powers in different meridians of the lens. They're available in both soft and rigid gas permeable materials, as well as daily disposable or extended wear options.
            </p>
            <p className="mb-6">
              <strong>Refractive surgery</strong>, such as LASIK or PRK, can permanently reshape the cornea to correct astigmatism. These procedures use advanced laser technology to precisely remove microscopic amounts of corneal tissue, creating a more uniform curvature. Not everyone is a candidate for refractive surgery, so a thorough evaluation is essential.
            </p>
            <p>
              For patients undergoing cataract surgery, toric intraocular lenses can correct astigmatism at the same time as treating cataracts, reducing dependence on glasses after surgery.
            </p>
          </div>

          {/* Section 6 - Tips */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Living Well with Astigmatism
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Whether you've just been diagnosed with astigmatism or have been managing it for years, these tips can help you maintain optimal vision and eye comfort:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wear your corrective lenses consistently.</strong> Your eyes work best when they have the proper optical correction at all times.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule regular eye exams.</strong> Your prescription can change over time, and annual check-ups ensure you always have the most accurate correction.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice good eye hygiene.</strong> If you wear contacts, follow proper cleaning and replacement schedules to prevent complications.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use proper lighting.</strong> Good illumination reduces eye strain when reading or working on detailed tasks.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Take digital breaks.</strong> Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Protect your eyes.</strong> Wear safety glasses during sports or activities that could injure your eyes.</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Living with astigmatism doesn't mean accepting blurry vision or constant eye strain. With proper diagnosis and the right corrective approach, you can enjoy clear, comfortable vision that enhances every aspect of your life.
            </p>
            <p>
              If you're experiencing any symptoms of astigmatism—or if it's been more than a year since your last eye exam—we encourage you to schedule a comprehensive vision assessment. Our team at Spark Eye Care is here to answer your questions, evaluate your vision, and recommend the best treatment options for your unique needs. Clear vision is within reach—let's work together to help you see your world more clearly.
            </p>
          </div>

        </div>
      </article>

      {/* AUTHOR BOX */}
      <div className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Other Medical</p>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Eye Health</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Regular Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover why routine eye examinations are essential for maintaining healthy vision throughout your life.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Vision Care</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Contact Lenses vs. Glasses: Which Is Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Explore the benefits of each option and find the best vision correction solution for your lifestyle.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Digital Health</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Protecting Your Eyes from Digital Eye Strain
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn practical strategies to reduce eye fatigue and discomfort from prolonged screen use.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}