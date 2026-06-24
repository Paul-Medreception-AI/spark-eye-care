import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between High Blood Pressure and Eye Health | Spark Eye Care',
  description: 'Learn how high blood pressure affects your vision and eye health. Discover the risks of hypertensive retinopathy and steps to protect your eyes from damage.',
  keywords: 'high blood pressure eye health, hypertensive retinopathy, blood pressure vision problems, eye damage hypertension, retinal blood vessels',
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
            The Connection Between High Blood Pressure and Eye Health
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Care Team</span>
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
              When you think about the health risks associated with high blood pressure, you might immediately consider heart disease or stroke. But there's another critical connection that often goes overlooked: the profound impact that hypertension can have on your vision and overall eye health. Your eyes contain some of the smallest, most delicate blood vessels in your body, making them particularly vulnerable to the damaging effects of elevated blood pressure.
            </p>
            <p className="mb-6">
              Nearly half of American adults have high blood pressure, and many don't even know it. Without proper management, this "silent threat" can quietly damage the intricate network of blood vessels in your eyes, potentially leading to vision loss. Understanding this connection is the first step toward protecting both your cardiovascular health and your precious gift of sight.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Hypertensive Retinopathy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Hypertensive retinopathy is the medical term for damage to the retina caused by high blood pressure. The retina is the light-sensitive tissue at the back of your eye that processes visual information and sends it to your brain. This delicate structure relies on a complex network of tiny blood vessels to function properly.
            </p>
            <p className="mb-6">
              When blood pressure remains elevated over time, these fragile vessels can become damaged in several ways. They may narrow, restricting blood flow to the retina. They can develop small bulges called microaneurysms that may leak fluid or blood. In severe cases, the increased pressure can cause bleeding, swelling, or even complete blockage of blood vessels, depriving retinal tissue of the oxygen and nutrients it needs to survive.
            </p>
            <p className="mb-6">
              The condition often develops gradually and may not cause noticeable symptoms in its early stages. This is why regular eye examinations are so crucial—your eye care provider can detect signs of hypertensive retinopathy before you experience any vision changes, allowing for early intervention and better outcomes.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "Your eyes provide a unique window into your overall health. During a comprehensive eye exam, we can actually see the effects of high blood pressure on your blood vessels—something that's difficult to observe anywhere else in the body without invasive procedures."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In the early stages, hypertensive retinopathy typically doesn't cause any noticeable symptoms. However, as the condition progresses, you may begin to experience warning signs that shouldn't be ignored. Vision changes might develop gradually or appear suddenly, depending on the severity of the blood vessel damage.
            </p>
            <p className="mb-6">
              Some individuals notice blurred or distorted vision, difficulty focusing, or the appearance of floaters—small spots or squiggly lines that seem to drift across your field of vision. Others experience reduced visual clarity, especially when trying to read or recognize faces. In more advanced cases, sudden vision loss can occur if blood vessels become blocked or if significant bleeding happens within the eye.
            </p>
            <p className="mb-6">
              It's important to understand that by the time symptoms appear, substantial damage may have already occurred. This underscores the critical importance of preventive care. If you have been diagnosed with high blood pressure, you should consider yourself at increased risk for eye complications, even if your vision seems perfectly fine.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Most at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone with elevated blood pressure can develop hypertensive retinopathy, certain factors increase your vulnerability. Understanding these risk factors can help you take a more proactive approach to protecting your eye health.
            </p>
            <p className="mb-6">
              Duration and severity matter significantly. The longer you've had high blood pressure and the higher your readings, the greater your risk of developing eye complications. People with uncontrolled or poorly managed hypertension face particularly high risk, as do individuals who experience sudden, severe spikes in blood pressure.
            </p>
            <p className="mb-6">
              Additional risk factors include diabetes, which compounds vascular damage throughout the body, including the eyes. Smoking accelerates blood vessel deterioration and increases hypertension's harmful effects. Age is another consideration—older adults are more susceptible to both high blood pressure and its ocular complications. African Americans face disproportionately higher rates of hypertension and its related eye diseases. Family history of cardiovascular disease or eye conditions also elevates your risk profile.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond the Retina: Other Eye Complications
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While hypertensive retinopathy is the most common eye-related complication of high blood pressure, it's not the only concern. Chronic hypertension can affect multiple structures within the eye, each with its own set of potential consequences for your vision.
            </p>
            <p className="mb-6">
              Choroidopathy occurs when high blood pressure damages the layer of blood vessels beneath the retina, called the choroid. This can lead to fluid buildup under the retina, causing distorted vision and, in some cases, scarring that permanently affects sight. Optic neuropathy happens when elevated blood pressure reduces blood flow to the optic nerve—the vital connection between your eye and brain. This can result in sudden vision loss and may cause lasting damage if not treated promptly.
            </p>
            <p className="mb-6">
              High blood pressure also increases the risk of retinal vein occlusion, a blockage in the veins that carry blood away from the retina. This condition can cause sudden, painless vision loss and may lead to serious complications like macular edema or neovascularization. Additionally, hypertension is associated with an increased risk of glaucoma, a group of eye diseases that damage the optic nerve and can lead to irreversible vision loss if left untreated.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Protecting Your Eyes: Practical Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The encouraging news is that protecting your eyes from high blood pressure damage is largely within your control. The same lifestyle modifications and medical interventions that benefit your cardiovascular health also safeguard your vision.
            </p>
            
            <div className="my-6">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Monitor your blood pressure regularly.</strong> Work with your healthcare provider to keep your readings within target range. Home monitoring can help you track patterns and identify concerning trends early.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Take prescribed medications as directed.</strong> If your doctor has prescribed blood pressure medication, consistency is crucial. Don't skip doses or stop taking medication without medical guidance.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Adopt a heart-healthy diet.</strong> Emphasize fruits, vegetables, whole grains, and lean proteins. Reduce sodium intake, which has a direct impact on blood pressure levels.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Exercise regularly.</strong> Aim for at least 150 minutes of moderate aerobic activity each week. Physical activity helps lower blood pressure and improves overall vascular health.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain a healthy weight.</strong> Even modest weight loss can significantly reduce blood pressure and decrease strain on your cardiovascular system.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Limit alcohol consumption.</strong> Excessive drinking can raise blood pressure. If you drink, do so in moderation.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Quit smoking.</strong> Tobacco use damages blood vessels throughout your body, including those in your eyes, and dramatically increases cardiovascular risk.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Schedule regular comprehensive eye exams.</strong> Annual examinations allow your eye care provider to detect and monitor changes before they threaten your vision.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Immediate Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Certain symptoms require urgent medical attention. If you experience sudden vision loss or a dramatic decrease in vision clarity, seek immediate care. The appearance of a curtain or shadow moving across your field of vision can indicate retinal detachment—a medical emergency requiring prompt treatment to prevent permanent vision loss.
            </p>
            <p className="mb-6">
              Other warning signs include sudden onset of severe eye pain, particularly when accompanied by vision changes, nausea, or headache. A sudden increase in floaters or flashes of light may signal bleeding or retinal tears. If you have high blood pressure and notice any of these symptoms, contact your eye care provider immediately or visit an emergency room.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The connection between high blood pressure and eye health is clear and significant, but it doesn't have to be frightening. With proper management of your blood pressure, regular monitoring, and comprehensive eye care, you can dramatically reduce your risk of vision-threatening complications. Your eyes and your heart are intimately connected—caring for one means caring for both.
            </p>
            <p className="mb-6">
              If you have high blood pressure or are concerned about your risk for hypertensive retinopathy, don't wait for symptoms to appear. A comprehensive eye examination can provide valuable insights into your vascular health and detect potential problems before they affect your vision. Our team is here to partner with you in protecting your sight for years to come.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
              Written by the Spark Eye Care Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Other Medical
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Patient Education</div>
                <h4 className="text-xl text-[var(--color-ink)] font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Diabetic Eye Disease
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how diabetes affects your vision and what steps you can take to protect your eyesight.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl text-[var(--color-ink)] font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect During Your Comprehensive Eye Exam
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A detailed guide to understanding what happens during a thorough eye examination.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl text-[var(--color-ink)] font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Lifestyle Changes for Better Eye Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Simple, evidence-based strategies to protect your vision and maintain healthy eyes for life.
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
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Comprehensive Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}