import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is Laser Eye Surgery Right for You? LASIK and Beyond | Spark Eye Care',
  description: 'Considering laser eye surgery? Learn about LASIK, PRK, SMILE, and other vision correction options. Discover candidacy requirements, benefits, risks, and what to expect.',
  openGraph: {
    title: 'Is Laser Eye Surgery Right for You? LASIK and Beyond',
    description: 'Expert guide to laser eye surgery options, candidacy requirements, and what to expect from vision correction procedures.',
    type: 'article',
    url: 'https://www.sparkeyetx.com/blog/is-laser-eye-surgery-right-for-you-lasik-and-beyond',
  }
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
            Is Laser Eye Surgery Right for You? LASIK and Beyond
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
              <span>Dr. Andrew Plummer</span>
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
              Imagine waking up and seeing the alarm clock clearly without reaching for your glasses. Picture enjoying a swim without worrying about contact lenses, or watching a sunset with perfect clarity. For millions of people who depend on corrective eyewear, laser eye surgery has transformed these dreams into reality. But with various procedures available and countless questions to consider, how do you know if laser vision correction is right for you?
            </p>
            <p>
              The decision to pursue laser eye surgery is deeply personal and depends on multiple factors—from your eye health and prescription stability to your lifestyle needs and expectations. This comprehensive guide will help you understand your options, evaluate your candidacy, and make an informed decision about your vision future.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Laser Vision Correction: More Than Just LASIK
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When most people think of laser eye surgery, LASIK (Laser-Assisted In Situ Keratomileusis) comes to mind. While LASIK remains the most popular refractive surgery, it's not the only option. Understanding the full spectrum of procedures helps you and your surgeon choose the best approach for your unique eyes.
            </p>
            <p className="mb-6">
              <strong>LASIK</strong> involves creating a thin flap in the cornea, reshaping the underlying tissue with a laser, and repositioning the flap. The procedure is quick, relatively painless, and offers rapid visual recovery—most patients achieve improved vision within 24 hours.
            </p>
            <p className="mb-6">
              <strong>PRK (Photorefractive Keratectomy)</strong> removes the cornea's outer layer entirely before reshaping, with no flap creation. Recovery takes longer, but PRK may be ideal for patients with thin corneas or those in high-impact professions where flap complications could be problematic.
            </p>
            <p className="mb-6">
              <strong>SMILE (Small Incision Lenticule Extraction)</strong> is a newer, minimally invasive procedure that reshapes the cornea through a tiny incision, preserving more corneal structure and potentially reducing dry eye symptoms.
            </p>
            <p>
              Each procedure has distinct advantages, and the best choice depends on your corneal thickness, prescription, lifestyle, and healing characteristics. A comprehensive evaluation with an experienced surgeon is essential to determine which approach suits you best.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "The right laser eye surgery isn't just about correcting your vision—it's about finding the procedure that aligns with your eye anatomy, healing profile, and life goals."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Are You a Candidate? Key Factors That Matter
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Not everyone is an ideal candidate for laser eye surgery, and that's okay. Candidacy depends on several medical, anatomical, and lifestyle factors that help ensure both safety and success.
            </p>
            <p className="mb-6">
              <strong>Age and prescription stability</strong> are foundational. Most surgeons recommend waiting until at least age 18, preferably 21 or older, when vision typically stabilizes. Your prescription should remain unchanged for at least one to two years before surgery.
            </p>
            <p className="mb-6">
              <strong>Corneal thickness and shape</strong> matter significantly. Laser procedures reshape the cornea, so adequate thickness is essential. Conditions like keratoconus (progressive corneal thinning) may disqualify some candidates or require alternative treatments like corneal cross-linking first.
            </p>
            <p className="mb-6">
              <strong>Overall eye health</strong> must be assessed. Chronic dry eye, glaucoma, cataracts, retinal conditions, or active eye infections need to be addressed before considering refractive surgery.
            </p>
            <p className="mb-6">
              <strong>General health considerations</strong> include autoimmune diseases, uncontrolled diabetes, or conditions affecting healing. Pregnancy and nursing also temporarily disqualify candidates due to hormonal vision changes.
            </p>
          </div>

          {/* Candidacy Checklist */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Good Candidate Indicators:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Age 21 or older with stable prescription for 1-2 years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Moderate myopia, hyperopia, or astigmatism within treatable ranges</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Adequate corneal thickness confirmed by diagnostic testing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Healthy eyes free from infections, glaucoma, or significant cataracts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Realistic expectations about outcomes and potential enhancement needs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Good general health without autoimmune conditions affecting healing</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Weighing Benefits and Risks: What the Research Shows
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Laser eye surgery has an impressive safety and success record, supported by decades of research and millions of procedures performed worldwide. Understanding both the benefits and potential risks helps set appropriate expectations.
            </p>
            <p className="mb-6">
              <strong>The benefits are compelling.</strong> Studies show that over 96% of patients achieve 20/40 vision or better—the legal driving standard—after LASIK. Many achieve 20/20 or better. Beyond visual acuity, patients report significant quality-of-life improvements: freedom from glasses and contacts, convenience in sports and travel, and increased confidence in professional and social settings.
            </p>
            <p className="mb-6">
              <strong>Potential risks and side effects</strong> must be acknowledged. Dry eyes are common in the first few months, though usually temporary. Some patients experience glare, halos, or starbursts around lights at night, particularly during healing. Undercorrection or overcorrection may require enhancement procedures. Rare but serious complications include infection, flap complications (with LASIK), or vision loss—though these occur in less than 1% of cases with experienced surgeons.
            </p>
            <p className="mb-6">
              <strong>Long-term considerations</strong> include the natural aging process. Laser surgery doesn't prevent presbyopia (age-related near vision loss requiring reading glasses after 40), nor does it stop cataracts from developing later in life. However, these are separate age-related changes, not complications of the surgery itself.
            </p>
            <p>
              The key to minimizing risks is choosing a highly experienced surgeon, undergoing comprehensive pre-operative testing, following post-operative instructions carefully, and maintaining realistic expectations about outcomes.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Evaluation Process: What to Expect
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A thorough pre-operative evaluation is the foundation of successful laser eye surgery. This comprehensive assessment typically includes multiple diagnostic tests performed over one or more visits.
            </p>
            <p className="mb-6">
              <strong>Corneal topography</strong> creates detailed maps of your cornea's shape and thickness, identifying any irregularities or thin areas. <strong>Wavefront analysis</strong> measures how light travels through your eye, detecting subtle imperfections beyond standard prescriptions. <strong>Pupil size measurement</strong> in various lighting conditions helps predict potential night vision issues.
            </p>
            <p className="mb-6">
              Your surgeon will also review your medical history, current medications, and lifestyle factors. Be honest about all health conditions, including dry eye symptoms, previous eye injuries, or family history of eye diseases. If you wear contact lenses, you'll need to discontinue them before testing (typically 3-7 days for soft lenses, longer for rigid lenses) to ensure accurate measurements.
            </p>
            <p className="mb-6">
              This is also the time to discuss your visual goals and expectations. Are you hoping for perfect distance vision but comfortable with reading glasses? Do you need excellent night vision for driving? Are you willing to accept a small chance of needing an enhancement procedure? Open communication helps align your expectations with realistic outcomes.
            </p>
            <p>
              Some patients discover during evaluation that they're not ideal candidates—and that's valuable information. Alternative options like implantable contact lenses (ICL), refractive lens exchange, or simply updating your glasses prescription may be more appropriate.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Life After Laser Surgery: Recovery and Results
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding the recovery process helps you prepare practically and emotionally for your post-surgery experience. While each procedure has slightly different timelines, most patients find recovery easier than anticipated.
            </p>
            <p className="mb-6">
              <strong>Immediate post-operative period:</strong> With LASIK, most patients notice improved vision within hours, though some blurriness, light sensitivity, and mild discomfort are normal. PRK patients experience a longer healing period—typically 3-5 days of significant discomfort and blurred vision before clarity emerges. Both require protective eye shields, prescribed eye drops, and restrictions on activities like swimming, makeup use, and vigorous exercise for several weeks.
            </p>
            <p className="mb-6">
              <strong>Visual stabilization</strong> occurs gradually. While dramatic improvement happens quickly with LASIK, minor fluctuations are normal for several weeks. Vision continues refining for 3-6 months as healing completes. PRK patients may take longer—sometimes several months—to reach final visual outcomes.
            </p>
            <p className="mb-6">
              <strong>Follow-up care</strong> is crucial. Regular post-operative visits allow your surgeon to monitor healing, address concerns, and determine when vision has stabilized. These appointments are opportunities to discuss any persistent symptoms like dry eyes or visual disturbances.
            </p>
            <p>
              Most patients express high satisfaction with their results. The convenience of clear vision without glasses or contacts often exceeds expectations, though adjustment to new visual perception—particularly at night—may take time. Patience during healing and realistic expectations about the timeline help ensure a positive experience.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Making Your Decision: Questions to Ask Yourself
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Deciding whether to pursue laser eye surgery ultimately comes down to personal values, goals, and circumstances. These reflective questions can guide your decision-making:
            </p>
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>How does corrective eyewear impact your daily life?</strong> If glasses or contacts significantly limit activities you love or affect your professional performance, surgery may offer meaningful improvement.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Are your expectations realistic?</strong> Perfect vision isn't guaranteed, and some patients still need glasses for certain activities. Can you accept good-but-not-perfect outcomes?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Can you manage the recovery period?</strong> Will you be able to take time off work, avoid certain activities, and attend follow-up appointments consistently?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Are you comfortable with the risk-benefit profile?</strong> While serious complications are rare, they exist. Are the potential benefits worth the small but real risks?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Have you researched surgeons thoroughly?</strong> Experience, technology, patient reviews, and communication style all matter significantly in outcomes and satisfaction.</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12">
            <p className="mb-6">
              Laser eye surgery represents a significant decision with potentially life-changing benefits. For many people, the freedom from glasses and contacts enhances quality of life in profound ways. For others, the risks or limitations make alternative options more appropriate.
            </p>
            <p className="mb-6">
              The most important step is education—understanding your options, candidacy factors, and what realistic outcomes look like for someone with your unique eyes and prescription. A comprehensive evaluation with an experienced refractive surgeon provides personalized insights that generic information cannot.
            </p>
            <p>
              Whether you ultimately choose laser surgery, alternative refractive procedures, or decide to continue with glasses or contacts, making an informed decision based on thorough evaluation and honest communication with your eye care team ensures the best possible outcome for your vision and lifestyle.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical care, dedicated to providing evidence-based patient education and compassionate, comprehensive treatment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>Understanding Dry Eye: Causes and Treatment Options</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about the common condition affecting millions and discover effective relief strategies.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>What to Expect During Your Comprehensive Eye Exam</h4>
                <p className="text-[var(--color-muted)] text-sm">A detailed guide to help you prepare for and understand your vision evaluation.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>Protecting Your Vision: Age-Related Eye Conditions to Watch For</h4>
                <p className="text-[var(--color-muted)] text-sm">Early detection makes all the difference. Know the warning signs and screening recommendations.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you explore your vision correction options.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}