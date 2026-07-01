import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Impact of Blood Pressure on Eye Health | Spark Eye Care',
  description: 'Learn how high blood pressure affects your vision and eye health. Discover the connection between hypertension and serious eye conditions like retinopathy and glaucoma.',
  openGraph: {
    title: 'The Impact of Blood Pressure on Eye Health | Spark Eye Care',
    description: 'Learn how high blood pressure affects your vision and eye health. Discover the connection between hypertension and serious eye conditions like retinopathy and glaucoma.',
    url: 'https://sparkeyetx.com/blog/the-impact-of-blood-pressure-on-eye-health',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
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
            <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              The Impact of Blood Pressure on Eye Health
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
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening Hook */}
            <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
              Your eyes are often called the windows to your soul, but they're also powerful indicators of your overall health. Among the many health conditions that can silently affect your vision, high blood pressure stands out as one of the most common yet frequently overlooked threats. With nearly half of American adults living with hypertension, understanding its impact on eye health isn't just important—it's essential for preserving your sight and quality of life.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The connection between blood pressure and eye health is more direct than many people realize. Your eyes contain some of the smallest and most delicate blood vessels in your body, making them particularly vulnerable to damage from the increased pressure that comes with hypertension. Let's explore how this common condition affects your vision and what you can do to protect your eyes.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding the Eye-Blood Pressure Connection
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              High blood pressure doesn't just affect your heart—it impacts every blood vessel in your body, including those in your eyes. The retina, the light-sensitive tissue at the back of your eye, relies on a delicate network of tiny blood vessels to function properly. When blood pressure remains elevated over time, these vessels can become damaged, leading to a condition called hypertensive retinopathy.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The damage occurs gradually. Chronic high blood pressure causes the walls of these small vessels to thicken, reducing blood flow to the retina. In more severe cases, vessels can leak fluid or blood, or even become completely blocked. This reduced blood supply deprives the retina of oxygen and nutrients it needs to function, potentially leading to vision problems or even permanent vision loss if left untreated.
            </p>

            {/* Section 2 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Eye Conditions Linked to High Blood Pressure
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Several serious eye conditions are directly associated with uncontrolled hypertension. Understanding these connections helps emphasize why blood pressure management is crucial for eye health.
            </p>

            <div className="my-8">
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Hypertensive Retinopathy:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Direct damage to retinal blood vessels, causing bleeding, swelling, or scarring that can impair vision.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Choroidopathy:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Fluid buildup under the retina caused by leaking blood vessels, leading to distorted vision.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Optic Neuropathy:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Blocked blood flow that damages the optic nerve, potentially causing sudden vision loss.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Increased Glaucoma Risk:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Research shows a complex relationship between blood pressure and glaucoma, with both high and fluctuating blood pressure increasing risk.</span>
                </div>
              </div>
            </div>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The severity of eye damage often correlates with how high blood pressure is and how long it remains uncontrolled. Early detection and management are key to preventing permanent damage.
            </p>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
                "Your eyes can show signs of high blood pressure damage before you experience any symptoms. Regular eye exams aren't just about checking your vision—they're an important window into your overall cardiovascular health."
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Warning Signs and Symptoms
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              One of the most concerning aspects of hypertensive eye disease is that it often develops without noticeable symptoms in its early stages. This is why high blood pressure is sometimes called the "silent killer"—damage can occur long before you notice any changes in your vision.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              However, as the condition progresses, you may experience:
            </p>

            <div className="my-8 pl-6">
              <ul className="list-none space-y-3 text-[var(--color-ink)] leading-loose">
                <li className="flex gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Blurred or double vision</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Sudden vision loss or dark spots in your visual field</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Headaches accompanied by vision changes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Reduced peripheral vision</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Eye pain or pressure</span>
                </li>
              </ul>
            </div>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              If you experience any sudden vision changes, especially if you have high blood pressure, seek immediate medical attention. Prompt treatment can prevent permanent vision loss.
            </p>

            {/* Section 4 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              The Role of Comprehensive Eye Exams
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Regular comprehensive eye exams are crucial for everyone, but they're especially important if you have high blood pressure or are at risk for developing it. During these exams, your eye care provider can detect early signs of hypertensive damage before it affects your vision.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              A dilated eye exam allows your eye doctor to examine the blood vessels in your retina directly. These vessels are the only blood vessels in your body that can be viewed non-invasively, making your eyes a unique window into your vascular health. Changes in these vessels—such as narrowing, crossing patterns, or signs of bleeding—can indicate not only eye damage but also suggest how well your blood pressure is controlled overall.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              In some cases, eye doctors are the first healthcare providers to detect signs of high blood pressure, leading to earlier diagnosis and treatment that can prevent complications throughout the body.
            </p>

            {/* Section 5 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Protecting Your Eyes: Practical Steps
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The good news is that managing your blood pressure effectively can prevent or slow the progression of eye damage. Here are evidence-based strategies to protect your vision:
            </p>

            <div className="my-8">
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Monitor Your Blood Pressure:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Know your numbers and work with your healthcare provider to keep them in a healthy range (generally below 130/80 mmHg).</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Take Medications as Prescribed:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> If you've been prescribed blood pressure medication, taking it consistently is crucial for preventing complications.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Adopt a Heart-Healthy Diet:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> The DASH diet (Dietary Approaches to Stop Hypertension) emphasizes fruits, vegetables, whole grains, and lean proteins while limiting sodium and processed foods.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Exercise Regularly:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Aim for at least 150 minutes of moderate aerobic activity per week. Physical activity helps lower blood pressure naturally.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Maintain a Healthy Weight:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Even modest weight loss can significantly reduce blood pressure in people who are overweight.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Limit Alcohol and Quit Smoking:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Both habits contribute to high blood pressure and increase your risk of eye disease.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Manage Stress:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> Chronic stress can elevate blood pressure. Techniques like meditation, deep breathing, and adequate sleep can help.</span>
                </div>
              </div>
              <div className="mb-4 flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Schedule Regular Eye Exams:</strong>
                  <span className="text-[var(--color-ink)] leading-loose"> If you have high blood pressure, you should have a comprehensive eye exam at least once a year, or more frequently if recommended by your eye care provider.</span>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Seek Professional Care
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The relationship between blood pressure and eye health underscores the importance of coordinated care between your primary care physician and eye care provider. If you have hypertension, make sure both providers are aware of your complete medical history and any changes in your condition.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Don't wait for symptoms to appear before seeking care. Early detection and treatment of hypertensive eye disease can preserve your vision and prevent serious complications. If you haven't had an eye exam in the past year, or if you have high blood pressure and haven't had your eyes checked recently, now is the time to schedule an appointment.
            </p>

            {/* Closing */}
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
              Your eyes are precious, and protecting them requires attention to your overall health. Understanding the connection between blood pressure and vision helps you make informed decisions about your care. By managing your blood pressure effectively and maintaining regular eye exams, you're taking important steps to preserve your sight for years to come. Remember, what's good for your heart is good for your eyes—and small changes today can make a significant difference in your long-term health and quality of life.
            </p>
          </div>
        </section>

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
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Written by the Spark Eye Care Clinical Team
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Board-certified providers specializing in Other Medical, dedicated to providing evidence-based patient education and comprehensive eye care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    Eye Health
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    Understanding Diabetic Retinopathy
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Learn how diabetes affects your eyes and what you can do to protect your vision.
                  </p>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    Prevention
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    Early Detection of Glaucoma
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Why regular screenings are essential for catching this silent vision thief early.
                  </p>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    Wellness
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    How Often Should You Get an Eye Exam?
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Recommended eye exam schedules for every age and health condition.
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
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}