import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protecting Your Eyes from UV Damage: More Than Sunglasses | Spark Eye Care',
  description: 'Learn how UV radiation affects your eyes and discover comprehensive protection strategies beyond sunglasses. Expert guidance from Spark Eye Care.',
  openGraph: {
    title: 'Protecting Your Eyes from UV Damage: More Than Sunglasses',
    description: 'Learn how UV radiation affects your eyes and discover comprehensive protection strategies beyond sunglasses.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Protecting Your Eyes from UV Damage: More Than Sunglasses
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
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
            <p className="mb-6 text-lg leading-relaxed">
              You wouldn't stand in the sun for hours without sunscreen on your skin, yet many of us overlook the invisible threat ultraviolet radiation poses to our eyes. Every day, whether it's cloudy or clear, UV rays silently penetrate our eyes, potentially causing damage that accumulates over a lifetime. While most people associate eye protection with sunglasses alone, comprehensive UV defense requires a broader understanding and more strategic approach to safeguarding your vision.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding UV Radiation and Your Eyes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Ultraviolet radiation exists on the electromagnetic spectrum between visible light and X-rays. While we can't see UV rays, they penetrate deep into the eye's delicate structures. There are three types of UV radiation—UVA, UVB, and UVC. While Earth's ozone layer blocks most UVC rays, both UVA and UVB reach the surface and affect our eyes differently.
            </p>
            <p className="mb-4">
              UVA rays penetrate deep into the eye, potentially reaching the retina and contributing to macular degeneration over time. UVB rays primarily affect the front structures of the eye, including the cornea and lens, and are the main culprit behind conditions like photokeratitis (essentially a sunburn of the cornea) and cataract formation.
            </p>
            <p className="mb-4">
              What makes UV damage particularly insidious is its cumulative nature. Unlike a sunburn that heals, UV damage to the eyes builds up over years of exposure, often manifesting as vision problems in middle age or later. The World Health Organization estimates that up to 20% of cataract cases are caused or made worse by UV exposure.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            UV-Related Eye Conditions: More Common Than You Think
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Prolonged UV exposure contributes to several serious eye conditions that can significantly impact your quality of life:
            </p>
            <p className="mb-4">
              <strong>Cataracts</strong> develop when the eye's natural lens becomes cloudy, often as a result of protein breakdown accelerated by UV radiation. This clouding gradually blurs vision and can eventually require surgical intervention. Studies show that people who spend long hours outdoors without proper eye protection face three times the risk of developing cataracts.
            </p>
            <p className="mb-4">
              <strong>Macular degeneration</strong>, particularly age-related macular degeneration (AMD), affects the central part of the retina responsible for sharp, detailed vision. While genetics play a role, research indicates that cumulative UV exposure may accelerate AMD progression, potentially leading to significant vision loss in your central field of view.
            </p>
            <p className="mb-4">
              <strong>Pterygium</strong>, often called "surfer's eye," is a growth of tissue on the white part of the eye that can eventually extend onto the cornea, distorting vision. This condition is directly linked to UV exposure and is more common in people who spend considerable time outdoors, particularly near water or snow where UV reflection intensifies exposure.
            </p>
            <p className="mb-4">
              <strong>Photokeratitis</strong> is the acute result of intense UV exposure—essentially a sunburn of the cornea. Common after a day on the ski slopes or at the beach without protection, it causes severe pain, light sensitivity, and temporary vision changes. While it typically heals within a few days, repeated episodes can contribute to long-term damage.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
              "UV damage to the eyes is cumulative and often irreversible. What you do today to protect your vision will determine how well you see tomorrow."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond Sunglasses: Comprehensive UV Protection Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While quality sunglasses form the foundation of UV protection, a truly comprehensive approach involves multiple strategies working together:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Choose sunglasses with 100% UV protection:</strong> Look for labels indicating UV400 or 100% UVA/UVB protection. Darker lenses don't necessarily offer better protection—the UV-blocking coating is what matters. Wraparound styles provide additional coverage by blocking rays from the sides.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Wear wide-brimmed hats:</strong> A hat with at least a 3-inch brim blocks about 50% of UV radiation from reaching your eyes. Combined with sunglasses, this provides excellent protection.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Seek shade during peak UV hours:</strong> UV radiation is strongest between 10 a.m. and 4 p.m. Whenever possible, plan outdoor activities outside these hours or take breaks in shaded areas.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Be aware of reflective surfaces:</strong> Water, snow, sand, and concrete can reflect up to 80% of UV rays, essentially doubling your exposure. Take extra precautions in these environments.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Don't skip protection on cloudy days:</strong> Up to 80% of UV rays can penetrate clouds. Protect your eyes year-round, regardless of weather conditions.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Consider photochromic lenses:</strong> These lenses automatically darken in sunlight and clear indoors, providing continuous UV protection without the need to switch between regular glasses and sunglasses.
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <strong>Protect children's eyes:</strong> Children's eyes are particularly vulnerable because their lenses are clearer and allow more UV to reach the retina. Establish good UV protection habits early.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Special Considerations for High-Risk Individuals
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Certain factors increase your vulnerability to UV damage, making vigilant protection even more critical:
            </p>
            <p className="mb-4">
              People who have had cataract surgery are at higher risk because the natural lens that provided some UV protection has been removed. If you've undergone this procedure, discuss UV-protective intraocular lens options with your ophthalmologist.
            </p>
            <p className="mb-4">
              Individuals taking photosensitizing medications—including certain antibiotics, diuretics, and birth control pills—may experience increased UV sensitivity. If you're on any long-term medications, ask your doctor or pharmacist whether they increase photosensitivity and adjust your eye protection accordingly.
            </p>
            <p className="mb-4">
              Those with lighter-colored eyes (blue, green, or hazel) have less protective pigment and may be more susceptible to UV damage. If you have light eyes, take extra precautions with wraparound sunglasses and wide-brimmed hats.
            </p>
            <p className="mb-4">
              People who spend extensive time outdoors for work or recreation—including athletes, outdoor workers, and fishing or skiing enthusiasts—accumulate significantly more UV exposure and should prioritize comprehensive protection strategies.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Nutrition in UV Protection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              While external protection is essential, emerging research suggests that nutrition may offer additional defense against UV-related eye damage from the inside out.
            </p>
            <p className="mb-4">
              Antioxidants like lutein and zeaxanthin, found in leafy greens, eggs, and colorful vegetables, concentrate in the retina and may help filter harmful blue light while protecting against oxidative stress caused by UV exposure. Omega-3 fatty acids, abundant in fish like salmon and sardines, support overall eye health and may reduce inflammation associated with UV damage.
            </p>
            <p className="mb-4">
              Vitamins C and E, along with zinc, play crucial roles in maintaining healthy eye tissue and combating free radical damage. A diet rich in fruits, vegetables, nuts, and whole grains provides these protective nutrients naturally.
            </p>
            <p className="mb-4">
              While supplements can help fill nutritional gaps, they should complement—not replace—external UV protection measures. Think of nutrition as one layer in a comprehensive defense strategy against UV damage.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Regular comprehensive eye exams are essential for detecting early signs of UV damage before they significantly impact your vision. Many UV-related conditions develop gradually and may not cause noticeable symptoms until they're advanced.
            </p>
            <p className="mb-4">
              Schedule an eye examination immediately if you experience sudden vision changes, persistent eye pain, light sensitivity that doesn't improve, the appearance of new floaters or flashes, or any unusual growth on your eye. These could signal UV-related damage requiring prompt attention.
            </p>
            <p className="mb-4">
              During your exam, discuss your lifestyle, outdoor activities, and family history with your eye care provider. This information helps them assess your UV risk and recommend personalized protection strategies. They can also ensure your sunglasses provide adequate UV protection and advise on specialty lenses if needed.
            </p>
            <p className="mb-6">
              Your eyes are irreplaceable, and the damage UV radiation causes is largely preventable. By understanding the comprehensive nature of UV protection—going well beyond simply wearing sunglasses—you take control of your long-term vision health. Small daily habits of protection compound over time, preserving not just your eyesight but your independence and quality of life for decades to come.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 mt-12 text-center border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] text-lg leading-relaxed mb-4">
              Have questions about protecting your eyes from UV damage? Our experienced team at Spark Eye Care can assess your individual risk factors and recommend personalized protection strategies.
            </p>
            <a href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-dark)] transition-all duration-300">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start border border-[var(--color-border)]">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in comprehensive eye care and vision protection. Our team is dedicated to helping patients maintain healthy vision throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-border)]">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Age-Related Vision Changes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn what's normal as your eyes age and when to seek professional care for vision changes.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-border)]">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Digital Eye Strain: Prevention and Relief
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies to reduce eye fatigue from screens and maintain comfortable vision throughout your day.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-border)]">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Nutrition for Optimal Eye Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover which foods and nutrients support healthy vision and protect against common eye conditions.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you protect your vision for a lifetime.
          </p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}