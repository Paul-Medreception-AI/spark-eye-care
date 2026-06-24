import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Can Dry Eye Be Cured? Treatment Options That Actually Work | Spark Eye Care',
  description: 'Discover evidence-based dry eye treatments that provide real relief. Learn about causes, symptoms, and effective management strategies from eye care specialists.',
  openGraph: {
    title: 'Can Dry Eye Be Cured? Treatment Options That Actually Work',
    description: 'Discover evidence-based dry eye treatments that provide real relief. Learn about causes, symptoms, and effective management strategies from eye care specialists.',
    url: 'https://www.sparkeyetx.com/blog/can-dry-eye-be-cured-treatment-options-that-actually-work',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Can Dry Eye Be Cured? Treatment Options That Actually Work
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've ever experienced that gritty, burning sensation in your eyes, you know how distracting and uncomfortable dry eye can be. You're not alone—dry eye disease affects millions of people worldwide, and that number is growing as we spend more time staring at screens. But here's the question everyone asks: can dry eye actually be cured, or will you be stuck managing symptoms forever?
            </p>
            <p className="mb-6">
              The truth is more nuanced than a simple yes or no. While many cases of dry eye can be effectively managed to the point where symptoms disappear, whether it's "cured" depends on the underlying cause. The good news? Modern treatment options have come a long way, and many people find significant—even complete—relief when they identify the right approach for their situation.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding What Dry Eye Really Is
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Dry eye disease occurs when your eyes don't produce enough tears, or when the tears you do produce evaporate too quickly. Your tear film is actually a complex system made up of three layers: an oily outer layer, a watery middle layer, and a mucus inner layer. When any of these layers is compromised, dry eye symptoms can develop.
            </p>
            <p className="mb-6">
              Common symptoms include burning, stinging, redness, light sensitivity, blurred vision, and—ironically—excessive watering as your eyes try to compensate for the dryness. Some people describe a feeling like sand or grit in their eyes, especially after reading or using a computer for extended periods.
            </p>
            <p className="mb-6">
              The causes are varied: age-related changes, hormonal fluctuations, autoimmune conditions, certain medications, environmental factors, and prolonged screen time all contribute. Meibomian gland dysfunction—when the oil glands in your eyelids become blocked—is one of the most common underlying causes and affects the quality of your tear film.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Can It Be Cured? The Honest Answer
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Here's where we need to be clear about terminology. If your dry eye is caused by a temporary situation—like a medication side effect, an environmental irritant, or excessive screen time—then yes, addressing that root cause can potentially "cure" the condition. Stop the offending medication (under your doctor's guidance), remove yourself from the irritant, or adjust your digital habits, and your symptoms may resolve completely.
            </p>
            <p className="mb-6">
              However, if your dry eye stems from a chronic condition like Sjögren's syndrome, rheumatoid arthritis, or age-related gland changes, the word "cure" becomes less applicable. In these cases, we talk about management and control. The goal shifts to keeping symptoms at bay and maintaining your eye health and comfort through ongoing treatment.
            </p>
            <p className="mb-6">
              That said, modern treatments have become so effective that many people with chronic dry eye achieve complete symptom relief and maintain it with minimal ongoing intervention. In practical terms, if you're comfortable, your vision is clear, and you're not thinking about your eyes all day, that's what matters most—not whether we call it a "cure" or "excellent management."
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Modern dry eye treatments have become so effective that many patients achieve complete symptom relief and forget they ever had the condition."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment Options That Actually Work
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The landscape of dry eye treatment has expanded dramatically in recent years. What works best depends on the severity and type of dry eye you have, but here are the most effective evidence-based options:
            </p>
            
            <p className="mb-4 font-semibold">First-Line Treatments:</p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Artificial tears and lubricating drops:</strong> Over-the-counter options provide immediate relief for mild cases. Preservative-free formulations are best for frequent use.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lifestyle modifications:</strong> Taking screen breaks (the 20-20-20 rule), using a humidifier, staying hydrated, and protecting eyes from wind and air conditioning can make a significant difference.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Omega-3 supplements:</strong> High-quality fish oil or flaxseed oil can improve tear quality and reduce inflammation in the oil glands.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Warm compresses and lid hygiene:</strong> Regular eyelid cleaning and warm compresses help unblock oil glands and improve tear film quality.</span>
              </li>
            </ul>

            <p className="mb-4 font-semibold">Advanced Medical Treatments:</p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prescription anti-inflammatory drops:</strong> Medications like cyclosporine (Restasis) or lifitegrast (Xiidra) address the underlying inflammation and can significantly improve tear production over time.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Punctal plugs:</strong> Tiny devices inserted into tear ducts to prevent drainage, keeping natural tears on the eye surface longer.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Intense Pulsed Light (IPL) therapy:</strong> A breakthrough treatment that uses light energy to treat meibomian gland dysfunction, showing excellent results for many patients.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>LipiFlow and thermal pulsation:</strong> In-office procedures that clear blocked oil glands using heat and pressure.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Scleral contact lenses:</strong> For severe cases, these specialized lenses create a fluid reservoir over the eye, providing constant moisture.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What the Research Shows
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Clinical studies have demonstrated impressive success rates with modern dry eye treatments. Research published in ophthalmology journals shows that combination therapy—addressing both inflammation and oil gland function—produces the best outcomes.
            </p>
            <p className="mb-6">
              One large study found that 70-80% of patients experienced significant symptom improvement with prescription anti-inflammatory drops after three to six months of consistent use. IPL therapy has shown success rates of 85-90% for treating meibomian gland dysfunction, with effects lasting months to years.
            </p>
            <p className="mb-6">
              The key finding across research is that early intervention matters. Addressing dry eye symptoms when they first appear prevents progression and often leads to better long-term outcomes. Chronic, untreated dry eye can lead to changes in the ocular surface that become harder to reverse over time.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating Your Treatment Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The most effective approach to dry eye is personalized. What works brilliantly for one person might be less effective for another because the underlying causes vary. This is why a comprehensive eye examination is essential—your eye care provider can identify which type of dry eye you have and which factors are contributing to your symptoms.
            </p>
            <p className="mb-6">
              Many people find success with a stepped approach: starting with lifestyle changes and over-the-counter options, then progressing to prescription treatments or in-office procedures if symptoms persist. Some patients need only simple interventions, while others benefit from combining multiple treatment modalities.
            </p>
            <p className="mb-6">
              Patience is important. Unlike taking an antibiotic for an infection, dry eye treatments—especially those addressing underlying inflammation—often take weeks to months to show their full effect. Consistent use and follow-up care are crucial for achieving the best results.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing dry eye symptoms that interfere with daily activities, don't wait to seek evaluation. Over-the-counter drops aren't providing relief? Your symptoms are getting worse? You're avoiding activities you enjoy because of eye discomfort? These are all signs it's time to see an eye care specialist.
            </p>
            <p className="mb-6">
              A comprehensive dry eye evaluation goes beyond a basic eye exam. It includes specialized testing to measure tear production, evaluate tear quality, assess oil gland function, and examine the ocular surface. This detailed assessment allows your provider to create a targeted treatment plan specific to your needs.
            </p>
            <p className="mb-6">
              Remember: dry eye is not something you have to live with. With the right diagnosis and treatment approach, most people can achieve significant improvement or complete resolution of their symptoms. The question isn't whether dry eye can be helped—it's finding the right combination of treatments that work for you.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 p-6 bg-[var(--color-cream)] rounded-lg">
            <p className="mb-4">
              Living with dry eye doesn't have to mean constant discomfort or compromising your quality of life. Whether we call the outcome a "cure" or "excellent management," what matters is that effective treatments exist, and most people can find relief.
            </p>
            <p>
              If you're struggling with dry, irritated eyes, the team at Spark Eye Care is here to help. We offer comprehensive dry eye evaluations and access to the latest treatment options. Schedule a consultation today to start your journey toward lasting comfort and clearer vision.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in comprehensive eye care and vision health. Our team is dedicated to providing evidence-based education and personalized care for every patient.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Digital Eye Strain
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how screen time affects your eyes and discover practical strategies to reduce discomfort and protect your vision.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                The Complete Guide to Eye Vitamins
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover which nutrients support optimal eye health and how to incorporate them into your daily routine.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                How Often Should You Get an Eye Exam?
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn the recommended schedule for comprehensive eye exams based on your age, health, and risk factors.
              </p>
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
            Our team is here to help you find relief from dry eye symptoms.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}