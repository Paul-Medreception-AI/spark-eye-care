import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Astigmatism and How It\'s Corrected | Spark Eye Care',
  description: 'Learn about astigmatism, its causes, symptoms, and modern correction options. Expert insights from Spark Eye Care on managing this common vision condition.',
  keywords: 'astigmatism, vision correction, eye care, eyeglasses, contact lenses, LASIK, blurry vision, eye health',
  openGraph: {
    title: 'Understanding Astigmatism and How It\'s Corrected',
    description: 'Comprehensive guide to astigmatism causes, symptoms, and treatment options from the experts at Spark Eye Care.',
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
            Understanding Astigmatism and How It's Corrected
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Spark Eye Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              If you've ever squinted at a street sign, struggled to read text on your phone, or noticed that lights seem to have a starburst effect at night, you might be experiencing astigmatism. This incredibly common vision condition affects approximately one in three people in the United States, yet many don't fully understand what it is or how it can be effectively corrected.
            </p>
            <p className="mb-6">
              The good news? Astigmatism is not a disease, and it's highly treatable. With modern correction options ranging from eyeglasses to advanced surgical procedures, clearer vision is within reach. Understanding your condition is the first step toward seeing the world more clearly.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Astigmatism?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Astigmatism is a refractive error caused by an irregularly shaped cornea or lens inside your eye. In a perfectly shaped eye, the cornea is round like a basketball, allowing light to focus evenly on the retina. With astigmatism, the cornea is shaped more like a football—curved more steeply in one direction than the other.
            </p>
            <p className="mb-6">
              This uneven curvature causes light to focus on multiple points rather than a single point on the retina, resulting in blurred or distorted vision at all distances. You might notice that vertical lines appear clearer than horizontal ones, or vice versa. Some people describe their vision as stretched or skewed.
            </p>
            <p className="mb-6">
              Astigmatism often occurs alongside other refractive errors like nearsightedness (myopia) or farsightedness (hyperopia). It can be present from birth or develop gradually over time. The severity can range from mild (which may not require correction) to significant (causing notable vision problems).
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Astigmatism symptoms can be subtle, especially in mild cases. Many people adapt to their blurred vision without realizing something is wrong. However, recognizing these signs can help you seek timely care:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Blurred or distorted vision</strong> at all distances, both near and far</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Eye strain or discomfort</strong>, particularly after prolonged reading or screen time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Headaches</strong>, especially frontal headaches that worsen with visual tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Difficulty seeing at night</strong> or in low-light conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Squinting</strong> to try to see more clearly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Halos or starbursts</strong> around lights, particularly noticeable when driving at night</span>
              </li>
            </ul>
            <p className="mb-6">
              Children with astigmatism may have trouble concentrating in school, complain of tired eyes, or avoid reading and other close-up activities. If your child frequently rubs their eyes, sits too close to the television, or tilts their head to see better, an eye exam is recommended.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Astigmatism is not a disease—it's simply a difference in how your eye is shaped. With the right correction, most people achieve excellent vision and can enjoy all their daily activities without limitation."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            How Astigmatism Is Diagnosed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Diagnosing astigmatism requires a comprehensive eye examination. Your eye care provider will use several tests to measure how your eyes focus light and determine the exact prescription needed to correct your vision.
            </p>
            <p className="mb-6">
              A <strong>visual acuity test</strong> measures how clearly you see at various distances using the familiar eye chart. <strong>Keratometry</strong> measures the curvature of your cornea by focusing a circle of light on it and measuring its reflection. <strong>Refraction testing</strong> uses a phoropter—the instrument with multiple lenses—to determine which lens combination gives you the sharpest vision.
            </p>
            <p className="mb-6">
              Advanced diagnostic tools like corneal topography create detailed maps of your cornea's surface, measuring thousands of points to detect even subtle irregularities. This technology is particularly useful for fitting specialty contact lenses or planning refractive surgery.
            </p>
            <p className="mb-6">
              The American Optometric Association recommends comprehensive eye exams every two years for adults under 60, and annually for those over 60 or with risk factors. Children should have their first exam at six months, again at age three, and before starting school.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Correction Options: From Glasses to Surgery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that astigmatism is highly correctable. Your eye care provider will recommend the best option based on the severity of your astigmatism, your lifestyle, and your personal preferences.
            </p>
            
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Eyeglasses</h3>
            <p className="mb-6">
              Eyeglasses are the simplest and most common way to correct astigmatism. Lenses for astigmatism are called "toric" lenses, which have different powers in different meridians of the lens to compensate for the uneven shape of your cornea. Modern lens technology provides excellent clarity, and glasses offer the added benefit of protecting your eyes from UV rays and digital eye strain.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Contact Lenses</h3>
            <p className="mb-6">
              Toric contact lenses are specifically designed to correct astigmatism. These lenses have different powers in different zones and are weighted or designed to stay in a specific orientation on your eye. Options include soft toric lenses, rigid gas-permeable (RGP) lenses, and hybrid lenses that combine the comfort of soft lenses with the crisp vision of RGP lenses.
            </p>
            <p className="mb-6">
              Some people with mild astigmatism may achieve adequate vision with standard spherical contact lenses. Your eye care provider can help determine which type is best for you.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Refractive Surgery</h3>
            <p className="mb-6">
              For those seeking a more permanent solution, refractive surgery can reshape the cornea to correct astigmatism. <strong>LASIK</strong> (laser-assisted in situ keratomileusis) uses a laser to create a thin flap in the cornea, then reshapes the underlying tissue. <strong>PRK</strong> (photorefractive keratectomy) reshapes the cornea's surface without creating a flap. Both procedures have excellent success rates for treating astigmatism.
            </p>
            <p className="mb-6">
              <strong>LASEK</strong> and newer procedures like <strong>SMILE</strong> (small incision lenticule extraction) offer additional options depending on your specific corneal anatomy and degree of astigmatism. A thorough consultation and examination will determine if you're a good candidate for surgery.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Orthokeratology</h3>
            <p className="mb-6">
              Ortho-k involves wearing specially designed rigid contact lenses overnight that temporarily reshape your cornea. When you remove the lenses in the morning, you can see clearly throughout the day without glasses or contacts. This non-surgical option is reversible and particularly popular for children with progressive myopia.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Living Well with Astigmatism
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Once your astigmatism is properly corrected, you should experience clear, comfortable vision. However, there are steps you can take to maintain optimal eye health and ensure your correction continues to work effectively:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Attend regular eye exams</strong> to monitor changes in your vision and update your prescription as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice good lighting habits</strong> when reading or doing close work to reduce eye strain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Follow the 20-20-20 rule</strong>: Every 20 minutes, look at something 20 feet away for 20 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Protect your eyes</strong> from UV radiation with sunglasses rated for 100% UV protection</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Care for your glasses or contacts properly</strong> according to your provider's instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain overall health</strong> through proper nutrition, hydration, and management of systemic conditions like diabetes</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to note that astigmatism can change over time. Your prescription from five years ago may no longer provide optimal clarity. If you notice your vision becoming less clear, experience eye strain, or develop headaches, schedule an appointment for a comprehensive exam.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While astigmatism is common and not dangerous, uncorrected astigmatism can impact your quality of life. Blurred vision can affect your ability to work, drive safely, read comfortably, and enjoy hobbies. Children with uncorrected astigmatism may struggle academically or in sports.
            </p>
            <p className="mb-6">
              Seek care if you experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudden changes in vision quality</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent eye strain or headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty with night driving or seeing in low light</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increasing need to squint or adjust reading distance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eye discomfort during or after visual tasks</span>
              </li>
            </ul>
            <p className="mb-6">
              Don't wait until your vision significantly impacts your daily life. Early detection and correction of astigmatism can prevent unnecessary discomfort and ensure you're seeing as clearly as possible.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Understanding astigmatism empowers you to take control of your vision health. Whether you're experiencing symptoms for the first time or have been managing astigmatism for years, today's correction options offer excellent outcomes and improved quality of life.
            </p>
            <p className="mb-6 text-lg font-semibold">
              At Spark Eye Care, our experienced team specializes in comprehensive eye examinations and personalized treatment plans for astigmatism and all vision conditions. We'll take the time to understand your visual needs, explain your options clearly, and help you achieve the clearest, most comfortable vision possible.
            </p>
            <p>
              Ready to see the world more clearly? <a href="/contact" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors font-semibold underline">Schedule your comprehensive eye exam today</a> and discover how much better life looks with properly corrected vision.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 animate-fade-up">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in comprehensive eye care and vision correction. Our team is dedicated to helping patients achieve optimal vision health through evidence-based treatment and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Regular Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn why routine eye examinations are essential for maintaining optimal vision and detecting potential issues early.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Contact Lenses vs. Glasses: Which Is Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the benefits and considerations of contact lenses and eyeglasses to find your ideal vision correction solution.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Digital Eye Strain: Protecting Your Vision in the Screen Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover practical strategies to reduce digital eye strain and maintain comfortable vision during extended screen time.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you achieve clearer, more comfortable vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Schedule Your Eye Exam
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="/blog" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
              Explore More Resources
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}