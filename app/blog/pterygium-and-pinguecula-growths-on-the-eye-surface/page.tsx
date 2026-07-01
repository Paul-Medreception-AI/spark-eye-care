import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pterygium and Pinguecula: Growths on the Eye Surface | Spark Eye Care',
  description: 'Learn about pterygium and pinguecula, common eye surface growths caused by UV exposure. Discover symptoms, treatment options, and prevention strategies from our expert team.',
  openGraph: {
    title: 'Pterygium and Pinguecula: Growths on the Eye Surface | Spark Eye Care',
    description: 'Learn about pterygium and pinguecula, common eye surface growths caused by UV exposure. Discover symptoms, treatment options, and prevention strategies from our expert team.',
    url: 'https://sparkeyetx.com/blog/pterygium-and-pinguecula-growths-on-the-eye-surface',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-sm mb-6 text-white/80">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
              Patient Education
            </div>
            
            <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              Pterygium and Pinguecula: Growths on the Eye Surface
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="text-xl mb-6 leading-relaxed">
                Have you ever noticed a small, yellowish bump or wedge-shaped growth on the white part of your eye? While these growths can be alarming when first discovered, pterygium and pinguecula are common, usually benign conditions that affect millions of people worldwide. Understanding what they are, why they develop, and when to seek treatment can help you protect your eye health and maintain clear, comfortable vision.
              </p>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                What Are Pterygium and Pinguecula?
              </h2>
              
              <p className="mb-6">
                Both pterygium and pinguecula are growths that develop on the conjunctiva, the clear membrane covering the white part of your eye. While they share similar causes and risk factors, they differ in appearance and severity.
              </p>

              <p className="mb-6">
                A <strong>pinguecula</strong> appears as a small, yellowish bump or patch on the conjunctiva, typically near the edge of the cornea but not crossing onto it. It's often described as looking slightly raised and may have a slightly fatty appearance. Pingueculae are extremely common and usually cause no symptoms beyond occasional mild irritation.
              </p>

              <p className="mb-6">
                A <strong>pterygium</strong>, sometimes called "surfer's eye," is a wedge-shaped growth that extends from the conjunctiva onto the cornea itself—the clear front surface of your eye. It typically has a triangular shape with the point directed toward the pupil. Pterygia start as pingueculae but grow progressively across the cornea, potentially affecting vision if they encroach on the central visual axis.
              </p>

              <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
                "Both conditions are strongly linked to chronic UV exposure, making prevention through proper eye protection one of the most important strategies for maintaining long-term eye health."
              </div>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Who Is at Risk?
              </h2>

              <p className="mb-6">
                Pterygium and pinguecula are most commonly seen in people who spend significant time outdoors, particularly in sunny, windy, or dusty environments. The conditions are far more prevalent in regions near the equator and in areas with high UV exposure.
              </p>

              <p className="mb-6">
                Key risk factors include:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Chronic UV exposure:</strong> Years of unprotected sun exposure damage the conjunctival tissue</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Outdoor occupations:</strong> Farmers, construction workers, fishermen, and others who work outside</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Geographic location:</strong> Living in sunny climates or at higher altitudes where UV intensity is greater</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dry, dusty conditions:</strong> Chronic irritation from wind, dust, or environmental pollutants</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Age:</strong> More common in adults aged 20-40, though can occur at any age</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Male gender:</strong> Studies show slightly higher prevalence in men, possibly due to occupational exposure patterns</span>
                </li>
              </ul>

              <p className="mb-6">
                Research indicates that nearly 23% of the global population has pingueculae, while pterygia affect approximately 12% worldwide, with rates significantly higher in tropical and subtropical regions.
              </p>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Recognizing the Symptoms
              </h2>

              <p className="mb-6">
                Many people with pingueculae experience no symptoms at all and only discover the growth during a routine eye exam. However, both conditions can cause noticeable discomfort, particularly as they grow or become inflamed.
              </p>

              <p className="mb-6">
                Common symptoms include:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Visible growth:</strong> A yellowish bump (pinguecula) or fleshy, triangular tissue (pterygium) on the eye surface</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Redness and inflammation:</strong> The area around the growth may become red and irritated, especially with exposure to wind, dust, or UV light</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dry eye sensation:</strong> Feeling of grit or a foreign body in the eye</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Blurred vision:</strong> If a pterygium grows large enough to cover part of the cornea, it can distort vision or cause astigmatism</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Cosmetic concerns:</strong> Some patients find the appearance of the growth bothersome</span>
                </li>
              </ul>

              <p className="mb-6">
                It's important to note that symptoms can fluctuate. You may experience periods of inflammation (called pingueculitis or pterygitis) where the growth becomes more red, swollen, and uncomfortable, followed by periods where it's barely noticeable.
              </p>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Treatment Options: From Conservative to Surgical
              </h2>

              <p className="mb-6">
                The approach to treating pterygium and pinguecula depends on the severity of symptoms, the size and location of the growth, and its impact on your vision and quality of life.
              </p>

              <p className="mb-6">
                <strong>Conservative Management:</strong> For mild cases without significant symptoms, observation and supportive care are often sufficient. This includes:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Artificial tears and lubricating eye drops to reduce dryness and irritation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>UV-blocking sunglasses to prevent progression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Anti-inflammatory eye drops during flare-ups of redness or swelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Avoiding environmental irritants when possible</span>
                </li>
              </ul>

              <p className="mb-6">
                <strong>Surgical Removal:</strong> Surgery may be recommended when:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>The pterygium grows large enough to threaten vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Symptoms become chronic and significantly affect comfort or quality of life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>The growth causes persistent inflammation despite medical treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>Cosmetic concerns are significant to the patient</span>
                </li>
              </ul>

              <p className="mb-6">
                Modern pterygium surgery is an outpatient procedure typically performed under local anesthesia. The growth is carefully removed, and advanced techniques such as conjunctival autografts (transplanting healthy tissue from another part of your eye) or amniotic membrane grafts are used to reduce the risk of recurrence, which historically occurred in up to 40% of cases with older techniques. Today's methods have reduced recurrence rates to below 10% in most cases.
              </p>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Prevention: Your Best Defense
              </h2>

              <p className="mb-6">
                Since UV exposure is the primary culprit behind both pterygium and pinguecula, prevention centers on protecting your eyes from harmful radiation and environmental irritants throughout your life.
              </p>

              <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-8">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Essential Prevention Strategies:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Wear UV-blocking sunglasses:</strong> Choose wrap-around styles that block 99-100% of both UVA and UVB rays. Even on cloudy days, UV radiation reaches your eyes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Use a wide-brimmed hat:</strong> Additional protection from overhead sun exposure, especially during peak UV hours (10 AM to 4 PM).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Protect against dust and wind:</strong> Wear safety glasses or goggles in dusty, windy conditions or when working outdoors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Use artificial tears:</strong> Keep your eyes lubricated, especially in dry environments, to reduce chronic irritation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Schedule regular eye exams:</strong> Early detection allows for monitoring and intervention before growths become problematic.</span>
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Remember that UV damage is cumulative over your lifetime. Protection is important at any age, but especially critical for children and young adults whose eyes will face decades of potential exposure.
              </p>

              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                When to Seek Professional Care
              </h2>

              <p className="mb-6">
                While pterygium and pinguecula are usually harmless, certain situations warrant prompt evaluation by an eye care professional:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You notice a new growth on your eye or an existing one is getting larger</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You experience persistent redness, irritation, or discomfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your vision becomes blurred or you notice changes in your eyesight</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The growth interferes with contact lens wear</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You're concerned about the appearance or have questions about treatment options</span>
                </li>
              </ul>

              <p className="mb-6">
                A comprehensive eye examination can determine the exact nature of the growth, rule out other conditions, and establish a baseline for monitoring any changes over time. Your eye care provider can also assess whether your current protective measures are adequate and recommend strategies tailored to your lifestyle and risk factors.
              </p>

              <p className="text-lg mt-12 leading-relaxed">
                Pterygium and pinguecula are common reminders of the importance of lifelong eye protection. While they're usually benign, they can cause discomfort and, in some cases, threaten vision if left unmonitored. The good news is that with proper UV protection, regular eye care, and timely intervention when needed, you can maintain healthy, comfortable eyes throughout your life. If you've noticed a growth on your eye or have concerns about your eye health, don't hesitate to reach out to a qualified eye care professional who can provide personalized guidance and care.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Dry Eye Syndrome</h4>
                  <p className="text-[var(--color-muted)] text-sm">Learn about the causes, symptoms, and treatment options for this common condition affecting millions.</p>
                </div>
              </a>

              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">UV Protection for Your Eyes</h4>
                  <p className="text-[var(--color-muted)] text-sm">Discover why UV protection matters and how to choose the right sunglasses for optimal eye health.</p>
                </div>
              </a>

              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">When to Schedule an Eye Exam</h4>
                  <p className="text-[var(--color-muted)] text-sm">Regular eye exams are essential for detecting problems early. Learn how often you should see your eye doctor.</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}