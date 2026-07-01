import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Complete Guide to Dry Eye Treatment Options | Spark Eye Care',
  description: 'Discover comprehensive dry eye treatment options from artificial tears to advanced therapies. Expert guidance on managing symptoms and finding relief.',
  keywords: 'dry eye treatment, dry eye syndrome, artificial tears, eye drops, punctal plugs, IPL therapy, meibomian gland dysfunction',
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
            The Complete Guide to Dry Eye Treatment Options
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            If you've ever experienced the burning, gritty sensation of dry eyes, you know how significantly it can impact your daily life. From struggling to read on your computer screen to feeling discomfort while driving at night, dry eye syndrome affects millions of people worldwide. The good news? Today's treatment landscape offers more options than ever before, ranging from simple lifestyle adjustments to advanced medical therapies. Understanding these options is the first step toward finding relief and reclaiming your comfort.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Dry eye disease occurs when your tears can't provide adequate lubrication for your eyes. This happens either because you don't produce enough tears, or because the tears you produce are of poor quality. While it might sound like a minor inconvenience, chronic dry eye can lead to eye inflammation, surface damage, and vision problems if left untreated. Let's explore the comprehensive range of treatment options available to help you find lasting relief.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Root Causes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Before diving into treatments, it's crucial to understand what's causing your dry eyes. The most common culprits include age-related changes in tear production, hormonal fluctuations (particularly in women during menopause), certain medications like antihistamines and blood pressure drugs, environmental factors such as dry air and wind, and prolonged screen time that reduces your blink rate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Many people also suffer from meibomian gland dysfunction (MGD), where the oil-producing glands in your eyelids become blocked. This leads to rapid tear evaporation and is one of the leading causes of dry eye symptoms. Identifying the underlying cause helps determine which treatment approach will be most effective for you.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            First-Line Treatments: Over-the-Counter Solutions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For mild to moderate dry eye, over-the-counter artificial tears are often the first line of defense. These lubricating eye drops supplement your natural tears and provide immediate relief. However, not all artificial tears are created equal. Preservative-free formulations are generally recommended for people who need to use drops more than four times daily, as preservatives can sometimes irritate the eyes with frequent use.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond basic artificial tears, you'll find options with different viscosities. Thicker gels and ointments provide longer-lasting relief but can temporarily blur vision, making them ideal for nighttime use. Some products also contain lipid components that specifically address the oil layer of your tears, which is particularly helpful if you have MGD.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            "The key to successful dry eye management isn't finding a one-size-fits-all solution—it's discovering the right combination of treatments tailored to your specific condition."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Prescription Medications and Advanced Therapies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When over-the-counter options aren't enough, prescription medications can help address the inflammation that often underlies dry eye disease. Cyclosporine (Restasis) and lifitegrast (Xiidra) are anti-inflammatory eye drops that help increase tear production and reduce surface inflammation. These medications typically require consistent use for several weeks before you notice significant improvement.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For severe cases, your eye care provider might recommend autologous serum tears—eye drops made from your own blood serum. These contain growth factors and vitamins that can promote healing of the ocular surface. While this option requires more effort to obtain and store, many patients with severe dry eye find it remarkably effective.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Punctal plugs offer another approach by blocking the tear drainage ducts in your eyelids. This helps your natural tears stay on the eye surface longer, providing sustained moisture. These tiny devices can be temporary (dissolving after a few months) or permanent, depending on your needs.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            In-Office Procedures and Technologies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Modern eye care offers several in-office procedures that can provide significant relief from dry eye symptoms. Intense Pulsed Light (IPL) therapy, originally developed for dermatology, has shown remarkable results for dry eye patients, particularly those with MGD. The light energy helps reduce inflammation around the eyelids and improves meibomian gland function.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            LipiFlow and similar thermal pulsation devices use controlled heat and massage to clear blocked meibomian glands. This FDA-approved treatment takes about 12 minutes and can provide relief lasting several months. Many patients report significant improvement in their symptoms after just one treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            For patients with severe inflammation or infections of the eyelid margins (blepharitis), BlephEx is a painless in-office procedure that deeply cleans the eyelids, removing bacteria and debris that contribute to dry eye symptoms.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Lifestyle Modifications That Make a Difference
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While medical treatments are important, lifestyle changes can significantly enhance their effectiveness and sometimes provide relief on their own. Simple adjustments to your daily routine can make a substantial difference in managing dry eye symptoms.
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Follow the 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds to encourage blinking and reduce eye strain.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Use a humidifier:</strong> Adding moisture to your indoor environment can prevent tear evaporation, especially during winter months when heating systems dry the air.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Increase omega-3 intake:</strong> Studies suggest that omega-3 fatty acids from fish or supplements can improve tear quality and reduce inflammation.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Protect your eyes outdoors:</strong> Wear wraparound sunglasses to shield your eyes from wind and sun, which can accelerate tear evaporation.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Practice warm compress therapy:</strong> Apply a warm, damp cloth to closed eyelids for 5-10 minutes daily to help unclog oil glands.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Stay hydrated:</strong> Drinking adequate water throughout the day supports overall tear production and eye health.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating Your Personalized Treatment Plan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most effective approach to dry eye treatment is rarely a single solution. Instead, combining multiple strategies often yields the best results. Your treatment plan should be personalized based on the severity of your symptoms, the underlying causes, your lifestyle, and how you respond to different therapies.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many patients find success with a layered approach: starting with lifestyle modifications and over-the-counter products, adding prescription medications if needed, and considering in-office procedures for persistent cases. It's important to give each treatment adequate time to work—some therapies take several weeks to show their full benefits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Regular follow-up with your eye care provider is essential. Dry eye is often a chronic condition that requires ongoing management, and your treatment needs may change over time. Don't hesitate to communicate what's working and what isn't—your feedback helps refine your treatment plan for optimal results.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-6 border-t border-[var(--color-border)]">
            Living with dry eye doesn't mean accepting discomfort as your new normal. With today's comprehensive range of treatment options, most people can find significant relief and improve their quality of life. If you're struggling with dry, irritated eyes, don't wait for symptoms to worsen. A thorough evaluation by an eye care professional can identify the specific factors contributing to your dry eye and help you develop an effective, personalized treatment strategy. Your eyes deserve the care and attention needed to keep them comfortable, healthy, and functioning at their best.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based care and patient education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Understanding Digital Eye Strain</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn how screen time affects your eyes and practical strategies to reduce digital eye strain symptoms.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>5 Signs You Need an Eye Exam</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover the warning signs that indicate it's time to schedule a comprehensive eye examination.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Lifestyle</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Protecting Your Eyes from UV Damage</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Essential tips for safeguarding your vision from harmful UV rays throughout the year.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}