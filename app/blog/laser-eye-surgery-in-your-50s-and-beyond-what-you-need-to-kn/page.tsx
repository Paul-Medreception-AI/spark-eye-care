import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laser Eye Surgery in Your 50s and Beyond: What You Need to Know | Spark Eye Care',
  description: 'Considering laser eye surgery after 50? Learn about candidacy, presbyopia considerations, safety, and what to expect from LASIK and other vision correction procedures in your 50s, 60s, and beyond.',
  openGraph: {
    title: 'Laser Eye Surgery in Your 50s and Beyond: What You Need to Know',
    description: 'Expert guidance on laser vision correction for patients over 50, including candidacy factors, presbyopia solutions, and safety considerations.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
}

export default function BlogPostPage() {
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
          <h1 className="font-serif text-5xl font-light leading-tight text-center mb-8">
            Laser Eye Surgery in Your 50s and Beyond: What You Need to Know
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For decades, you've watched laser eye surgery transform the lives of friends, colleagues, and family members—offering freedom from glasses and contact lenses with remarkable precision. But as you've entered your 50s, 60s, or beyond, you may have wondered: "Is it too late for me?" The answer might surprise you.
            </p>
            <p className="mb-6">
              Age alone doesn't disqualify you from laser vision correction. While your eyes continue to change throughout your life, many people in their 50s, 60s, and even 70s are excellent candidates for procedures like LASIK, PRK, and other advanced refractive surgeries. However, the considerations are different than they are for younger patients—and understanding these nuances is essential to making an informed decision about your vision.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Age-Related Vision Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before considering laser eye surgery in your 50s or beyond, it's important to understand how your eyes naturally change with age. The most significant change is presbyopia—the gradual loss of your eye's ability to focus on close objects. This typically begins in your early to mid-40s and progresses through your 50s.
            </p>
            <p className="mb-6">
              Presbyopia is why most people in their 50s need reading glasses, even if they've had perfect distance vision their entire lives. It's also why traditional LASIK, which corrects distance vision, may not address all your vision needs at this stage of life.
            </p>
            <p className="mb-6">
              Beyond presbyopia, age-related changes to the lens, cornea, and retina can affect candidacy for laser procedures. Cataracts become increasingly common after 50, and conditions like dry eye, glaucoma, and macular degeneration may also develop. A comprehensive evaluation is essential to determine if laser surgery is appropriate—or if alternative procedures might better serve your needs.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Age is just one factor in determining candidacy for laser eye surgery. What matters most is the overall health of your eyes and realistic expectations about outcomes."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Are You a Candidate? Key Factors Beyond Age
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Candidacy for laser eye surgery in your 50s and beyond depends on several important factors:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Stable prescription:</strong> Your glasses or contact lens prescription should be relatively stable for at least one to two years. Significant changes may indicate other eye conditions requiring attention.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Healthy corneas:</strong> Adequate corneal thickness and overall corneal health are critical. Your surgeon will use advanced imaging to assess corneal structure and rule out conditions like keratoconus.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>No cataracts or early cataracts only:</strong> If you have significant cataracts, cataract surgery (which can also correct refractive errors) is typically a better option than LASIK.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Managed dry eye:</strong> Dry eye is more common with age and can be worsened temporarily by LASIK. However, with proper management before and after surgery, many patients with mild to moderate dry eye can still proceed.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Overall health:</strong> Conditions like uncontrolled diabetes or autoimmune diseases can affect healing and may impact candidacy.
                </div>
              </div>
            </div>
            <p className="mb-6">
              A thorough pre-operative evaluation—including corneal topography, pachymetry, tear film assessment, and dilated eye exam—is essential to determine if you're a good candidate.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Addressing Presbyopia: Monovision and Blended Vision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The elephant in the room when discussing laser eye surgery after 50 is presbyopia. Traditional LASIK can't restore the eye's ability to focus at all distances—but there are strategies to help you reduce dependence on reading glasses.
            </p>
            <p className="mb-6">
              <strong>Monovision</strong> is the most common approach. In monovision, one eye (typically the dominant eye) is corrected for distance vision, while the other is intentionally left slightly nearsighted to help with near tasks. Your brain learns to select the appropriate eye for different distances. Many people adapt beautifully to monovision, though it may slightly reduce depth perception and night vision quality.
            </p>
            <p className="mb-6">
              Before committing to monovision LASIK, most surgeons recommend a trial with contact lenses to see how you adapt. This "test drive" can help you make an informed decision about whether monovision is right for you.
            </p>
            <p className="mb-6">
              <strong>Blended vision</strong> is a more subtle variation that creates less difference between eyes, potentially offering better depth perception while still providing some reading ability. Advanced laser platforms can also create "aspheric" profiles that enhance depth of focus.
            </p>
            <p className="mb-6">
              It's important to set realistic expectations: most patients who choose monovision will still need reading glasses for prolonged reading or very small print, but they gain significant freedom for everyday activities.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Safety and Success Rates in Older Adults
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research shows that laser eye surgery is safe and effective in older adults when performed on carefully selected candidates. Studies have found that patients over 50 achieve visual outcomes comparable to younger patients, with high satisfaction rates.
            </p>
            <p className="mb-6">
              A 2021 study in the Journal of Refractive Surgery found that patients over 60 who underwent LASIK had excellent safety profiles and high rates of achieving 20/20 vision or better. Complication rates were similar to those in younger populations when strict candidacy criteria were applied.
            </p>
            <p className="mb-6">
              However, healing may be slightly slower in older adults, and the risk of certain complications—particularly dry eye—may be marginally higher. Most of these issues can be effectively managed with appropriate pre-operative screening and post-operative care.
            </p>
            <p className="mb-6">
              The key is working with an experienced surgeon who regularly treats older patients and uses the latest diagnostic technology to identify potential risk factors before surgery.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Alternative Options: When Cataract Surgery Might Be Better
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're in your 60s or beyond and have early cataracts, your surgeon may recommend waiting for cataract surgery rather than pursuing LASIK. Modern cataract surgery doesn't just remove the cloudy lens—it's also an opportunity to correct refractive errors and even address presbyopia.
            </p>
            <p className="mb-6">
              Premium intraocular lenses (IOLs) offer options for multifocal vision, extended depth of focus, or monovision. Some patients achieve complete independence from glasses with advanced IOL technology. Cataract surgery also has the advantage of being a one-time procedure—you'll never develop cataracts again in that eye.
            </p>
            <p className="mb-6">
              For patients with significant cataracts or those who are likely to develop them within the next few years, waiting for cataract surgery often makes more sense than proceeding with LASIK. Your eye care provider can help you understand the timeline and which approach best fits your situation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Making the Decision: Questions to Ask Your Surgeon
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're considering laser eye surgery in your 50s or beyond, come prepared to your consultation with thoughtful questions:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  What are the realistic outcomes I can expect given my age and eye health?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Am I a candidate for monovision, and can I trial it first with contact lenses?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Do I have early cataracts, and if so, should I consider waiting for cataract surgery instead?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  What specific risks do I face based on my age and eye conditions?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  How do you manage dry eye before and after surgery in older patients?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  What is your experience performing laser surgery on patients in my age group?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  Will I still need reading glasses after surgery, and if so, for what activities?
                </div>
              </div>
            </div>
            <p className="mb-6">
              A skilled surgeon will take time to answer these questions thoroughly and help you understand whether laser eye surgery aligns with your lifestyle goals and visual needs.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Age doesn't have to be a barrier to clearer vision and greater freedom from glasses. Whether you're 52 or 72, laser eye surgery may be a viable option if your eyes are healthy and your expectations are realistic. The most important step is scheduling a comprehensive evaluation with an experienced eye care provider who can assess your unique situation and guide you toward the best solution for your vision needs.
            </p>
            <p className="mb-6">
              Your 50s and beyond can be a time of renewed visual clarity and independence—if you choose the right path forward.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">
              Written by the Spark Eye Care Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Other Medical
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Vision Care
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding LASIK: A Comprehensive Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn everything you need to know about LASIK surgery, from candidacy to recovery.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Cataracts vs. LASIK: Which Is Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Comparing vision correction options to help you make an informed decision.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Presbyopia Explained: What Happens After 40
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understanding age-related vision changes and your treatment options.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}