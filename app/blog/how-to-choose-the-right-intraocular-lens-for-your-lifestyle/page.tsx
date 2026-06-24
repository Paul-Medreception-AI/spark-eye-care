import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Choose the Right Intraocular Lens for Your Lifestyle | Spark Eye Care',
  description: 'Learn how to select the best intraocular lens (IOL) for cataract surgery based on your lifestyle, vision needs, and daily activities. Expert guidance from Spark Eye Care.',
  keywords: 'intraocular lens, IOL selection, cataract surgery, lens implant, monofocal lens, multifocal lens, toric lens, lifestyle vision',
  openGraph: {
    title: 'How to Choose the Right Intraocular Lens for Your Lifestyle',
    description: 'Learn how to select the best intraocular lens (IOL) for cataract surgery based on your lifestyle, vision needs, and daily activities.',
    url: 'https://www.sparkeyetx.com/blog/how-to-choose-the-right-intraocular-lens-for-your-lifestyle',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
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
            <nav className="text-sm text-white/80 mb-8 text-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span className="text-white">Article</span>
            </nav>

            {/* Category Tag */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Patient Education
            </div>

            {/* Title */}
            <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              How to Choose the Right Intraocular Lens for Your Lifestyle
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>January 15, 2025</span>
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
                <span>Dr. Care Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening Hook */}
            <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
              Imagine waking up one morning and seeing the world with clarity you haven't experienced in years—reading without glasses, driving confidently at night, or enjoying your favorite hobbies with crystal-clear vision. For millions of people undergoing cataract surgery each year, this dream becomes reality through the careful selection of an intraocular lens (IOL). But with several types of lenses available, each designed for different visual needs and lifestyles, how do you choose the right one for you?
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The decision about which IOL to implant during cataract surgery is one of the most important choices you'll make for your long-term vision health. Unlike choosing eyeglasses that can be changed if your needs evolve, an IOL is a permanent implant that will serve you for the rest of your life. Understanding your options and how they align with your daily activities, visual priorities, and lifestyle is essential to achieving the best possible outcome.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding Intraocular Lenses: What They Are and Why They Matter
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              An intraocular lens is an artificial lens that replaces your eye's natural lens when it becomes clouded by cataracts. During cataract surgery, your surgeon removes the cloudy natural lens and implants an IOL in its place. This tiny, biocompatible lens is designed to last a lifetime, restoring clear vision and eliminating the cataract permanently.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              While all IOLs serve the fundamental purpose of focusing light onto your retina, they differ significantly in their optical designs and capabilities. Some lenses provide excellent distance vision but require reading glasses for close work. Others offer a range of focus distances, potentially reducing or eliminating the need for glasses altogether. Some are specifically designed to correct astigmatism, while others optimize contrast sensitivity or reduce glare and halos around lights.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              The lens you choose will directly impact how you see the world every day—from reading prescription labels and using your smartphone to driving at dusk and enjoying outdoor activities. That's why understanding the different types of IOLs and matching them to your lifestyle is so crucial.
            </p>

            {/* Section 2 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Types of Intraocular Lenses: Your Options Explained
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Today's cataract patients have access to several categories of IOLs, each with distinct characteristics:
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Monofocal Lenses</h3>
              <p className="text-[var(--color-ink)] leading-loose text-base mb-3">
                Monofocal IOLs are the standard lens option covered by insurance. They provide excellent clarity at one fixed distance—typically optimized for far vision. Most patients with monofocal lenses will need reading glasses for close-up tasks and sometimes intermediate distances like computer work. These lenses offer crisp, high-quality distance vision with minimal visual side effects.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Multifocal and Extended Depth of Focus (EDOF) Lenses</h3>
              <p className="text-[var(--color-ink)] leading-loose text-base mb-3">
                These premium lenses are designed to provide clear vision at multiple distances—near, intermediate, and far—potentially reducing or eliminating your dependence on glasses. Multifocal IOLs use concentric zones or diffraction patterns to split light between different focal points. EDOF lenses extend your range of clear vision through innovative optical designs. While these lenses offer greater spectacle independence, some patients may experience mild visual phenomena such as halos or glare around lights, especially at night.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Toric Lenses</h3>
              <p className="text-[var(--color-ink)] leading-loose text-base mb-3">
                If you have astigmatism—an irregular curvature of the cornea that causes blurred or distorted vision—a toric IOL can correct this condition during cataract surgery. Toric lenses come in both monofocal and multifocal versions, allowing you to address astigmatism while also choosing your preferred focal range. Without astigmatism correction, you would likely need glasses or contact lenses even after cataract surgery.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Accommodating Lenses</h3>
              <p className="text-[var(--color-ink)] leading-loose text-base mb-3">
                These lenses are designed to move or change shape within the eye in response to ciliary muscle contractions, mimicking the natural focusing ability of a younger lens. They can provide good distance and intermediate vision, though reading glasses may still be needed for very fine print or extended close work.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
                "The best IOL for you isn't necessarily the most advanced or expensive—it's the one that aligns with how you live your life and what you value most in your vision."
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Matching Your Lens to Your Lifestyle: Key Considerations
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Choosing the right IOL begins with honest reflection about your daily activities, visual priorities, and willingness to adapt to new visual experiences. Here are the most important factors to consider:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-[var(--color-ink)] leading-loose text-base">
                    <strong>Your Daily Activities:</strong> Are you an avid reader? Do you spend hours on the computer? Do you drive frequently at night? Do you enjoy hobbies like painting, woodworking, or golf? Your most common and valued activities should guide your lens choice.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-[var(--color-ink)] leading-loose text-base">
                    <strong>Your Tolerance for Glasses:</strong> Some people don't mind wearing reading glasses and prioritize the crispest possible distance vision. Others strongly prefer to be glasses-free for most activities and are willing to accept minor visual trade-offs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-[var(--color-ink)] leading-loose text-base">
                    <strong>Your Visual Expectations:</strong> Premium multifocal lenses can provide remarkable spectacle independence, but they work differently than natural vision. Your brain needs time to adapt, and you may notice halos around lights initially. Understanding these trade-offs is essential.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-[var(--color-ink)] leading-loose text-base">
                    <strong>Your Ocular Health:</strong> Certain eye conditions may make you a better candidate for specific lens types. For example, patients with significant astigmatism benefit greatly from toric lenses, while those with certain retinal conditions may achieve better results with monofocal lenses.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-[var(--color-ink)] leading-loose text-base">
                    <strong>Your Budget:</strong> While standard monofocal lenses are covered by insurance, premium IOLs involve additional out-of-pocket costs. Consider the long-term value of reduced dependence on glasses when evaluating your investment.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Real-World Scenarios: Which Lens Might Fit Your Life?
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              To help you visualize how different lenses might serve different lifestyles, consider these common patient profiles:
            </p>

            <div className="bg-[var(--color-light)] rounded-xl p-6 mb-4">
              <p className="text-[var(--color-ink)] leading-loose text-base mb-2">
                <strong>The Avid Reader and Detail-Oriented Professional:</strong> If you spend considerable time reading books, working on detailed projects, or using digital devices, a multifocal or EDOF lens might provide the near and intermediate vision you need without constantly reaching for reading glasses.
              </p>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-6 mb-4">
              <p className="text-[var(--color-ink)] leading-loose text-base mb-2">
                <strong>The Active Outdoor Enthusiast:</strong> If you prioritize activities like hiking, golfing, or traveling—where distance vision is paramount and you don't mind using readers occasionally—a high-quality monofocal lens optimized for distance might be your best choice.
              </p>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-6 mb-4">
              <p className="text-[var(--color-ink)] leading-loose text-base mb-2">
                <strong>The Frequent Night Driver:</strong> If you drive often after dark and are sensitive to glare, a monofocal or accommodating lens may provide the sharpest, clearest night vision with minimal halos around lights.
              </p>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-6 mb-4">
              <p className="text-[var(--color-ink)] leading-loose text-base mb-2">
                <strong>The Patient with Astigmatism:</strong> If you have moderate to high astigmatism, a toric lens—whether monofocal or multifocal—can dramatically improve your uncorrected vision and reduce your dependence on glasses or contacts.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              What the Research Tells Us About IOL Satisfaction
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Studies consistently show that the vast majority of cataract surgery patients—over 95%—are satisfied with their visual outcomes regardless of lens type. However, satisfaction is highest when expectations are realistic and the lens choice aligns with the patient's priorities.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Research published in ophthalmology journals indicates that patients who choose multifocal IOLs report significantly greater spectacle independence than those with monofocal lenses—approximately 80-90% are glasses-free for most activities compared to 30-40% with standard lenses. However, multifocal lens recipients are also more likely to report mild visual phenomena like halos, particularly in the first few months after surgery as the brain adapts to the new optics.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Importantly, studies also show that thorough preoperative counseling and realistic expectation-setting are the strongest predictors of patient satisfaction. When patients understand how their chosen lens will perform in various lighting conditions and distances, they report higher satisfaction scores and better quality of life outcomes.
            </p>

            {/* Section 6 */}
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Questions to Ask Your Surgeon Before Deciding
            </h2>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Your consultation with your cataract surgeon is the perfect opportunity to clarify your options and arrive at the best decision. Consider asking:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  Based on my eye health and vision history, which lens do you recommend and why?
                </p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  What are the realistic expectations for vision at different distances with each lens option?
                </p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  What side effects or visual compromises should I anticipate with premium lenses?
                </p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  How long is the typical adaptation period, and what can I do to optimize my results?
                </p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  Do I have any eye conditions that would make me a better or worse candidate for certain lenses?
                </p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose text-base">
                  What are the cost differences, and what is covered by my insurance?
                </p>
              </div>
            </div>

            {/* Closing */}
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Choosing the right intraocular lens is a deeply personal decision that deserves careful thought and professional guidance. There is no universally "best" lens—only the lens that best serves your unique vision needs, lifestyle priorities, and expectations. By understanding your options, honestly assessing your daily visual demands, and having an open conversation with your eye care team, you can make a confident, informed choice that supports clear, comfortable vision for years to come.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              If you're facing cataract surgery or curious about whether it's time to explore your options, we're here to help. Our experienced team specializes in comprehensive cataract evaluations and personalized lens consultations designed to match your vision goals with the technology that will serve you best.
            </p>
          </div>

          {/* Author Box */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and compassionate care.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Patient Education</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Understanding Cataracts: Symptoms, Causes, and Treatment Options
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Learn about cataract development, warning signs, and modern surgical solutions.
                  </p>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Surgical Care</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    What to Expect During Cataract Surgery: A Complete Guide
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Step-by-step overview of the procedure, recovery timeline, and post-op care.
                  </p>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Prevention</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Protecting Your Vision: Tips for Eye Health at Every Age
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm">
                    Practical strategies to maintain healthy eyes and prevent common conditions.
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
              Our team is here to help you make the best decision for your vision and lifestyle.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Consultation
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}