import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refractive Lens Exchange: An Alternative to LASIK for Over 40 | Spark Eye Care',
  description: 'Discover how Refractive Lens Exchange (RLE) offers a permanent vision correction solution for patients over 40 who may not be ideal LASIK candidates. Learn about benefits, candidacy, and what to expect.',
  keywords: 'refractive lens exchange, RLE, LASIK alternative, vision correction over 40, presbyopia treatment, clear lens exchange, cataract surgery alternative',
  openGraph: {
    title: 'Refractive Lens Exchange: An Alternative to LASIK for Over 40',
    description: 'Discover how Refractive Lens Exchange (RLE) offers a permanent vision correction solution for patients over 40 who may not be ideal LASIK candidates.',
    type: 'article',
    publishedTime: '2025-02-15T09:00:00Z',
    authors: ['Spark Eye Care Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-center text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Refractive Lens Exchange: An Alternative to LASIK for Over 40
          </h1>

          {/* Meta Information */}
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <span>Published February 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For decades, LASIK has been the gold standard for vision correction, liberating millions from the daily routine of glasses and contact lenses. But if you're over 40, you may have heard your eye doctor mention that LASIK might not be your best option anymore. The reason? Your eyes are changing in ways that laser vision correction simply can't address.
            </p>
            <p className="mb-6">
              Enter Refractive Lens Exchange (RLE)—a procedure that not only corrects nearsightedness, farsightedness, and astigmatism, but also addresses presbyopia, the age-related loss of near vision that affects virtually everyone after 40. Unlike LASIK, which reshapes your cornea, RLE replaces your eye's natural lens with an advanced artificial lens, offering a permanent solution that can last a lifetime.
            </p>
            <p className="mb-6">
              If you're frustrated by reading glasses, progressive lenses, or the limitations of contacts, RLE might be the vision correction breakthrough you've been waiting for. Let's explore what makes this procedure a compelling alternative for patients in their 40s, 50s, 60s, and beyond.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Refractive Lens Exchange?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Refractive Lens Exchange is essentially the same surgical procedure as cataract surgery, but performed before a cataract has developed. During RLE, your eye surgeon removes your eye's natural crystalline lens and replaces it with an artificial intraocular lens (IOL) specifically chosen to correct your vision prescription.
            </p>
            <p className="mb-6">
              The procedure is performed one eye at a time, typically with a week or two between surgeries. Using advanced techniques and microsurgical instruments, the surgeon creates a tiny incision, uses ultrasound energy to gently break up the natural lens, removes it, and implants the new lens—all in about 15-20 minutes per eye.
            </p>
            <p className="mb-6">
              What sets RLE apart from LASIK is the type of lens that can be implanted. While LASIK can only correct distance vision (requiring reading glasses later), premium IOLs used in RLE can provide a full range of vision—distance, intermediate, and near—potentially eliminating your dependence on glasses altogether.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is an Ideal Candidate for RLE?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              RLE is particularly well-suited for patients who fall into one or more of these categories:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Over 40 with presbyopia:</strong> If you're reaching for reading glasses multiple times a day, RLE can restore your near vision along with correcting distance vision.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High prescriptions:</strong> Extreme nearsightedness or farsightedness that exceeds LASIK's correction range can be effectively treated with RLE.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Thin corneas:</strong> If you've been told you're not a LASIK candidate due to thin corneas, RLE doesn't alter the cornea at all.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Early cataract formation:</strong> If cataracts are beginning to form, RLE can address both your vision correction needs and prevent future cataract surgery.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Dry eye syndrome:</strong> LASIK can temporarily worsen dry eyes; RLE typically has less impact on tear production.</span>
              </li>
            </ul>
            <p className="mb-6">
              However, RLE isn't right for everyone. Your eye surgeon will conduct a comprehensive evaluation to ensure you have healthy retinas, stable eye pressure, and realistic expectations about outcomes. Patients with certain retinal conditions may not be good candidates.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The beauty of RLE is that it's a one-time procedure that not only corrects your current vision but also prevents you from ever needing cataract surgery in the future. It's truly a permanent solution."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Premium Intraocular Lenses
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The lens choice is what makes RLE so versatile. Unlike standard monofocal lenses that only correct distance vision, premium IOLs offer enhanced visual capabilities:
            </p>
            <p className="mb-6">
              <strong>Multifocal IOLs</strong> have multiple focal zones built into the lens, allowing you to see clearly at distance, intermediate (computer), and near (reading) ranges. Many patients achieve complete independence from glasses with these lenses.
            </p>
            <p className="mb-6">
              <strong>Extended Depth of Focus (EDOF) lenses</strong> provide a continuous range of vision from distance to intermediate, with functional near vision. They tend to have fewer visual side effects like halos and glare compared to multifocal lenses.
            </p>
            <p className="mb-6">
              <strong>Toric IOLs</strong> correct astigmatism in addition to nearsightedness or farsightedness, providing crisp, clear vision without the blur that astigmatism creates.
            </p>
            <p className="mb-6">
              <strong>Light-adjustable lenses</strong> are a cutting-edge option that allows your doctor to fine-tune your vision after surgery using targeted UV light treatments, optimizing your visual outcome.
            </p>
            <p className="mb-6">
              Your surgeon will help you choose the lens that best matches your lifestyle, visual priorities, and eye anatomy. Factors like how much you drive at night, your occupation, hobbies, and tolerance for potential visual trade-offs all play a role in this decision.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The RLE Procedure: What to Expect
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              RLE is an outpatient procedure performed under local anesthesia with mild sedation. Most patients report feeling minimal to no discomfort during surgery. Here's what the typical experience looks like:
            </p>
            <p className="mb-6">
              <strong>Before surgery:</strong> You'll receive numbing eye drops, and your surgical team will ensure you're comfortable and relaxed. The area around your eye will be cleaned and prepped in a sterile fashion.
            </p>
            <p className="mb-6">
              <strong>During surgery:</strong> Your surgeon creates a tiny incision (usually 2-3mm) at the edge of your cornea. Using ultrasound energy (phacoemulsification), the natural lens is gently broken into small pieces and removed. The new IOL is then inserted through the same small incision and positioned precisely where your natural lens was. The incision is self-sealing and typically requires no stitches.
            </p>
            <p className="mb-6">
              <strong>Immediately after:</strong> You'll rest briefly in the recovery area while staff monitors you. Your eye will be covered with a protective shield, and you'll receive detailed instructions for post-operative care. Someone will need to drive you home.
            </p>
            <p className="mb-6">
              <strong>Recovery timeline:</strong> Most patients notice improved vision within 24-48 hours, though it can take several weeks for vision to fully stabilize. You'll use antibiotic and anti-inflammatory eye drops for a few weeks, and follow-up appointments will monitor your healing.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Benefits and Considerations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              <strong>The advantages of RLE are significant:</strong>
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Permanent vision correction—the artificial lens doesn't degrade over time</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eliminates the possibility of future cataract development</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Addresses presbyopia, providing freedom from reading glasses</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Can correct extreme prescriptions beyond LASIK's range</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quick recovery with rapid visual improvement</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Proven track record—millions of successful cataract surgeries use the same technique</span>
              </li>
            </ul>
            <p className="mb-6">
              <strong>Important considerations include:</strong>
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>As with any surgery, there are risks, though serious complications are rare (less than 1%)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Premium IOLs may cause visual phenomena like halos or glare around lights, especially at night</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Brain adaptation to multifocal lenses can take several weeks</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Some patients may still need glasses for certain tasks, especially in low light</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>RLE is typically not covered by insurance since it's considered elective refractive surgery</span>
              </li>
            </ul>
            <p className="mb-6">
              These considerations underscore the importance of thorough evaluation and realistic expectations. A detailed consultation with an experienced refractive surgeon will help you understand whether the benefits outweigh the risks for your specific situation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Making the Decision: Is RLE Right for You?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The decision to undergo RLE is deeply personal and should be made in partnership with a qualified eye surgeon who specializes in refractive procedures. During your consultation, expect a comprehensive eye examination including:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• Detailed measurements of your eye's anatomy and prescription</li>
              <li className="text-[var(--color-ink)]">• Corneal topography and thickness evaluation</li>
              <li className="text-[var(--color-ink)]">• Retinal health assessment</li>
              <li className="text-[var(--color-ink)]">• Discussion of your lifestyle, visual needs, and expectations</li>
              <li className="text-[var(--color-ink)]">• Review of lens options and predicted visual outcomes</li>
            </ul>
            <p className="mb-6">
              Ask questions about your surgeon's experience with RLE, complication rates, and what success looks like for patients similar to you. Don't hesitate to seek a second opinion if you're uncertain—this is a permanent decision that deserves careful consideration.
            </p>
            <p className="mb-6">
              For many patients over 40 who are tired of the limitations of glasses and contacts, RLE represents a paradigm shift in vision correction. Instead of temporarily reshaping the cornea or relying on ever-changing prescriptions, RLE offers a definitive solution that works with your eye's natural anatomy to restore clear vision at all distances.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If you're over 40 and exploring alternatives to LASIK, Refractive Lens Exchange may be the vision correction solution you've been searching for. The combination of permanent results, presbyopia correction, and prevention of future cataracts makes RLE an increasingly popular choice for patients who want to invest in their visual future.
            </p>
            <p className="mb-6 font-medium text-lg">
              Schedule a comprehensive consultation with our experienced team at Spark Eye Care to determine if RLE is right for you. We'll conduct thorough testing, explain all your options, and help you make an informed decision about your vision correction journey.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in comprehensive eye care, refractive surgery, and advanced vision correction procedures. Our team is committed to patient education and evidence-based treatment approaches.</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2 font-medium">Vision Correction</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Presbyopia: Why Your Arms Aren't Long Enough Anymore
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about the natural aging process of the eye and modern solutions for near vision difficulties.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2 font-medium">Premium Lenses</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Premium Intraocular Lenses: Which Option Is Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Compare multifocal, EDOF, and toric lens options to find the best match for your lifestyle and vision goals.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2 font-medium">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Preparing for Eye Surgery: Your Complete Pre-Op Checklist
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Essential steps to ensure a successful procedure and smooth recovery from refractive eye surgery.</p>
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you explore your vision correction options.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}