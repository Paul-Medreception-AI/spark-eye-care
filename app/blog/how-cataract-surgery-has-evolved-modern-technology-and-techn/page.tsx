import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Cataract Surgery Has Evolved: Modern Technology and Techniques | Spark Eye Care',
  description: 'Discover how advanced technology and modern techniques have transformed cataract surgery into a safe, precise procedure with faster recovery and better outcomes.',
  openGraph: {
    title: 'How Cataract Surgery Has Evolved: Modern Technology and Techniques',
    description: 'Discover how advanced technology and modern techniques have transformed cataract surgery into a safe, precise procedure with faster recovery and better outcomes.',
    url: 'https://www.sparkeyetx.com/blog/how-cataract-surgery-has-evolved-modern-technology-and-techn',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function BlogPost() {
  return (
    <main>
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
            How Cataract Surgery Has Evolved: Modern Technology and Techniques
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
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
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-lg leading-loose text-[var(--color-ink)] mb-8">
            <p className="mb-6">
              Imagine a world where cloudy vision from cataracts meant living with permanent visual impairment, where surgery required weeks of recovery and carried significant risks. For centuries, this was reality. Today, cataract surgery stands as one of medicine's greatest success stories—a procedure so refined that millions of people each year regain crystal-clear vision through a brief, nearly painless treatment. The journey from crude ancient techniques to today's precision technology reveals how far medical innovation has come, and why patients now have more reasons than ever to feel confident about this life-changing procedure.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            From Ancient Practices to Modern Precision
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Cataract surgery has one of the longest histories in medicine, dating back thousands of years. Ancient practitioners performed "couching," a technique where they would literally push the clouded lens to the bottom of the eye using a sharp instrument. While this sometimes restored limited vision, it left patients vulnerable to complications like inflammation, infection, and glaucoma. The lens remained inside the eye, often causing ongoing problems.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            The modern era began in 1747 when French surgeon Jacques Daviel first removed a cataract through extraction rather than displacement. This was revolutionary, but the procedure still required large incisions and prolonged, uncomfortable recovery periods. Patients spent days or weeks lying flat, hoping their eyes would heal without infection. It wasn't until the mid-20th century that intraocular lens (IOL) implants were developed, eliminating the need for thick "coke bottle" glasses after surgery.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Phacoemulsification Revolution
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            The most significant breakthrough came in 1967 when Dr. Charles Kelman introduced phacoemulsification. This technique uses ultrasound waves to break up the cloudy lens into tiny fragments that can be gently suctioned out through a small incision—typically just 2-3 millimeters. The smaller incision size means faster healing, reduced risk of complications, and often no need for sutures.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Phacoemulsification transformed cataract surgery from a multi-day hospital stay into an outpatient procedure lasting 15-20 minutes. Recovery time shortened dramatically. Where patients once needed weeks before resuming normal activities, most modern cataract surgery patients notice improved vision within days and return to their routines quickly. The procedure's safety profile improved so substantially that it became one of the most commonly performed and successful surgeries in all of medicine, with success rates exceeding 98%.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-xl text-[var(--color-ink)] italic" style={{ fontFamily: 'Cormorant, serif' }}>
              "Modern cataract surgery doesn't just restore vision—it often provides better clarity than patients have experienced in years, sometimes even decades."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Advanced Lens Technology: Beyond Basic Vision Correction
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Perhaps nowhere is the evolution more dramatic than in the artificial lenses themselves. Early IOLs simply replaced the clouded natural lens with a clear one, correcting only distance vision. Patients still needed reading glasses and often struggled in low light conditions.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Today's premium lens options offer unprecedented visual freedom:
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Multifocal lenses</strong> provide clear vision at multiple distances—near, intermediate, and far—reducing or eliminating dependence on glasses
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Toric lenses</strong> correct astigmatism simultaneously with cataract removal, eliminating the distorted vision many patients have lived with for years
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Extended depth-of-focus (EDOF) lenses</strong> create a continuous range of vision with fewer visual side effects than traditional multifocals
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Light-adjustable lenses</strong> can be fine-tuned after implantation using specialized UV light, optimizing vision to each patient's unique needs and lifestyle
              </p>
            </div>
          </div>

          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            These advanced options mean cataract surgery can address multiple vision problems at once—cataracts, presbyopia (age-related near vision loss), and astigmatism—in a single procedure. Many patients achieve better vision than they've had since their youth.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Laser-Assisted Technology: Precision at the Microscopic Level
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Femtosecond laser technology represents the latest evolution in cataract surgery. While traditional phacoemulsification relies on the surgeon's skilled hands for critical steps like creating incisions and opening the lens capsule, laser-assisted cataract surgery uses computer-guided precision for these delicate maneuvers.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            The laser creates incisions with accuracy measured in microns—far more precise than any blade. It softens the cataract before removal, potentially reducing the ultrasound energy needed during phacoemulsification. This gentler approach may lead to faster recovery and less inflammation. For patients receiving premium lenses, especially toric lenses that must be positioned at exact angles to correct astigmatism, laser precision ensures optimal placement and outcomes.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Advanced imaging technology now maps each eye in three dimensions before surgery, allowing surgeons to customize every aspect of the procedure to the patient's unique anatomy. This personalized approach means better visual outcomes and greater predictability.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What These Advances Mean for Patients Today
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            The cumulative effect of these technological leaps is profound. Modern cataract surgery offers benefits that would have seemed miraculous just decades ago:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Minimal discomfort:</strong> Most patients report feeling only slight pressure during the procedure, with topical anesthesia eliminating the need for painful injections
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Rapid recovery:</strong> Many patients notice improved vision within hours, with most activities resumed within a few days
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Exceptional safety:</strong> Serious complications are rare, with infection rates below 0.1% thanks to improved techniques and medications
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Predictable results:</strong> Advanced measurements and surgical planning mean patients can confidently anticipate their post-surgery vision
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base leading-loose text-[var(--color-ink)]">
                <strong>Long-lasting outcomes:</strong> Once a cataract is removed, it cannot return; the replacement lens is permanent
              </p>
            </div>
          </div>

          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Perhaps most importantly, these advances have lowered the threshold for when surgery is appropriate. Patients no longer need to wait until cataracts are "ripe" or severely affecting daily life. Earlier intervention means less disruption to quality of life and often better surgical outcomes.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Making the Right Decision for Your Vision
          </h2>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            If you're experiencing symptoms of cataracts—blurry vision, difficulty with night driving, faded colors, or increased glare sensitivity—there's never been a better time to explore your options. Modern cataract surgery isn't just about removing cloudiness; it's an opportunity to optimize your vision for your lifestyle and goals.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            The key is finding an experienced surgical team who takes time to understand your unique needs, explains all available technologies and lens options, and partners with you to create a personalized treatment plan. Not every patient needs the most advanced technology—sometimes standard techniques and lenses provide excellent results. The right choice depends on your visual demands, expectations, overall eye health, and budget.
          </p>
          <p className="text-base leading-loose text-[var(--color-ink)] mb-6">
            Don't let outdated fears or misconceptions about cataract surgery hold you back from clear vision. The procedure your grandparents might have undergone bears little resemblance to today's gentle, precise treatment. Millions of people each year rediscover the joy of vibrant, clear sight through this remarkable procedure—and with ongoing innovations, outcomes will only continue to improve.
          </p>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12">
            <p className="text-base leading-loose text-[var(--color-ink)] mb-4">
              If you're noticing changes in your vision or have been told you have cataracts, we invite you to schedule a comprehensive consultation. Our team will perform detailed measurements, discuss your visual goals, and help you understand which surgical approach and lens options are best suited to your needs. Clear vision can profoundly improve your quality of life—and today's technology makes achieving it safer and more effective than ever before.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based patient education and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
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
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Age-Related Eye Changes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn what's normal and when to seek professional evaluation as your vision changes with age.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Premium Lens Options: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore advanced intraocular lens technology and how it can reduce your dependence on glasses.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Recovery Guide</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect After Eye Surgery
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to recovery, including tips for optimal healing and when to contact your doctor.
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}