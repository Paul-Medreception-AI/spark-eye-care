import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protecting Your Eyes from UV Damage: More Than Just Sunglasses | Spark Eye Care',
  description: 'Learn comprehensive strategies to protect your eyes from harmful UV radiation beyond sunglasses. Expert guidance from Spark Eye Care on preventing long-term eye damage.',
  keywords: 'UV eye protection, UV damage prevention, eye health, sunglasses, UV radiation, eye care, Spark Eye Care',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Protecting Your Eyes from UV Damage: More Than Just Sunglasses
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
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
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When you think about sun protection, you probably think about sunscreen for your skin. But what about your eyes? Every day, invisible ultraviolet (UV) radiation from the sun silently bombards your eyes, potentially causing damage that accumulates over a lifetime. While most people know that sunglasses help protect against UV rays, comprehensive eye protection requires a broader approach—one that considers your entire lifestyle, environment, and daily habits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The truth is, UV damage to your eyes isn't just about what happens during a day at the beach. It's about the cumulative exposure you experience walking to your car, sitting by a window, or even on cloudy days when you think you're safe. Understanding the full scope of UV radiation and how to protect yourself can mean the difference between healthy vision throughout your life and preventable eye conditions that could diminish your quality of life.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding UV Radiation and Your Eyes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Ultraviolet radiation is invisible light energy emitted by the sun. It comes in three types: UVA, UVB, and UVC. While the Earth's atmosphere blocks most UVC rays, both UVA and UVB reach your eyes and can cause significant damage. UVB rays are particularly harmful to the front structures of your eyes, including the cornea and lens, while UVA rays penetrate deeper, potentially affecting the retina.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What makes UV damage particularly insidious is that it's cumulative and largely irreversible. Just as repeated sunburns increase your risk of skin cancer, repeated UV exposure to your eyes increases your risk of conditions like cataracts, macular degeneration, pterygium (growths on the eye), and even certain eye cancers. Research published by the World Health Organization estimates that up to 20% of cataract cases may be caused or made worse by UV exposure.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "UV damage to your eyes is cumulative and largely irreversible. Protection isn't just about comfort today—it's about preserving your vision for decades to come."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Beyond Sunglasses: A Comprehensive Protection Strategy
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While quality sunglasses are essential, they're only one piece of the UV protection puzzle. Sunglasses can leave gaps around the sides, top, and bottom of your eyes where UV rays can enter. Additionally, many people don't wear sunglasses consistently or choose fashion over function, purchasing glasses that don't provide adequate UV protection.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A truly comprehensive approach to UV protection involves multiple strategies working together. This includes choosing the right eyewear, understanding when and where UV exposure is highest, making environmental modifications, and being aware of factors that increase your personal risk.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Essential Protection Strategies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Here are evidence-based strategies to protect your eyes from UV damage throughout your daily life:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Choose wraparound or close-fitting frames:</strong> These styles block UV rays from entering around the sides of your sunglasses. Look for frames labeled as providing 180-degree protection or that fit snugly against your face.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Verify 100% UV protection:</strong> Always look for sunglasses labeled as blocking 100% of UVA and UVB rays or UV400. Darker lenses don't necessarily mean better protection—it's the UV coating that matters.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Wear a wide-brimmed hat:</strong> A hat with at least a 3-inch brim can block up to 50% of UV radiation from reaching your eyes, complementing your sunglasses beautifully.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Consider UV-blocking contact lenses:</strong> Many modern contact lenses include UV protection, providing an additional layer of defense. However, these should still be worn with sunglasses for complete protection.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Protect your eyes indoors:</strong> UV rays can penetrate windows. If you spend significant time near windows, consider UV-blocking window film or position your workspace away from direct sunlight.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Don't forget cloudy days:</strong> Up to 80% of UV rays can penetrate cloud cover. Make sunglasses a daily habit during daylight hours, regardless of weather.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Be extra cautious near reflective surfaces:</strong> Water, snow, sand, and concrete can reflect up to 85% of UV rays, creating a "double exposure" effect. Wear protection even in shaded areas near these surfaces.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Time your outdoor activities wisely:</strong> UV radiation is strongest between 10 a.m. and 4 p.m. When possible, schedule extended outdoor activities outside these peak hours.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Who's at Greatest Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While everyone should protect their eyes from UV damage, certain groups face elevated risk and should be especially vigilant:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Children and young adults</strong> are particularly vulnerable because their eyes' natural lenses are clearer, allowing more UV radiation to reach the retina. Additionally, they typically spend more time outdoors. Studies suggest that up to 80% of lifetime UV exposure occurs before age 18, making early protection crucial.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>People with light-colored eyes</strong> (blue, green, or hazel) have less protective pigment in their eyes and may be at higher risk for UV-related damage. <strong>Those who work outdoors</strong>—farmers, construction workers, lifeguards, and others—accumulate significantly more UV exposure than the general population.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Individuals taking certain medications</strong> such as tetracycline, sulfa drugs, birth control pills, diuretics, and some tranquilizers can experience increased UV sensitivity. If you take any medications, ask your eye care provider about potential photosensitivity effects.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>People who've had cataract surgery</strong> or those with certain eye conditions may also be at increased risk and should discuss specific protection strategies with their eye care team.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Long-Term Benefits of Protection
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Protecting your eyes from UV damage isn't just about preventing discomfort or cosmetic concerns—it's about preserving your vision and quality of life for decades to come. Conditions like cataracts and macular degeneration are leading causes of vision loss in older adults, and UV exposure is a modifiable risk factor for both.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            By implementing comprehensive UV protection now, you're making an investment in your future vision. You're reducing your risk of needing cataract surgery, lowering your chances of developing macular degeneration, and protecting the delicate skin around your eyes from premature aging and skin cancer.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that it's never too late to start protecting your eyes. While you can't reverse past UV damage, you can prevent future damage and slow the progression of UV-related conditions. Every day you protect your eyes is a day you're preserving your vision.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Seek Professional Guidance
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While UV protection is largely preventive, regular eye examinations are essential for detecting early signs of UV-related damage. Your eye care provider can identify subtle changes in your eyes that might indicate UV damage, even before you notice symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Schedule an appointment if you notice any changes in your vision, persistent eye redness or irritation, growths on your eye, or if you spend significant time outdoors and haven't had a recent comprehensive eye exam. Your eye care team can assess your individual risk factors, recommend personalized protection strategies, and prescribe appropriate eyewear with proper UV protection.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember, protecting your eyes from UV damage is a daily commitment, but it's one of the most important investments you can make in your long-term health. By understanding the risks and implementing comprehensive protection strategies, you're taking control of your eye health and preserving your precious gift of sight.
          </p>

          {/* Closing CTA */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-loose text-base">
              At Spark Eye Care, we're committed to helping you protect your vision for life. Our team can provide comprehensive eye examinations, assess your UV exposure risk, and recommend personalized protection strategies tailored to your lifestyle. Don't wait until damage occurs—schedule your consultation today and take the first step toward lifelong eye health.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-[var(--color-ink)] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to helping patients achieve optimal eye health through evidence-based care and patient education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Digital Eye Strain in the Modern Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how screen time affects your eyes and practical strategies to reduce discomfort and protect your vision.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Essential Guide to Comprehensive Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover what happens during a comprehensive eye exam and why regular check-ups are crucial for maintaining healthy vision.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Lifestyle</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Nutrition for Healthy Eyes: What to Eat for Better Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the connection between nutrition and eye health, including key vitamins and foods that support long-term vision.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}