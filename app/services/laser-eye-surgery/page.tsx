import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Laser Eye Surgery in sparkeyetx | Spark Eye Care',
  description: 'Advanced laser vision correction at Spark Eye Care. LASIK, PRK, and custom laser eye surgery to reduce dependence on glasses and contacts. Board-certified surgeons in sparkeyetx.',
  keywords: 'laser eye surgery sparkeyetx, LASIK sparkeyetx, PRK surgery, vision correction, refractive surgery, custom laser eye surgery, Spark Eye Care'
}

export default function LaserEyeSurgeryPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Laser Eye Surgery</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Laser Eye Surgery in sparkeyetx
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Experience the freedom of clear vision with advanced laser eye surgery at Spark Eye Care. Our board-certified surgeons use state-of-the-art technology to correct nearsightedness, farsightedness, and astigmatism, helping you reduce or eliminate your dependence on glasses and contact lenses.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2745816.jpeg"
                alt="Laser eye surgery procedure"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            What is Laser Eye Surgery?
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6 mb-10">
            <p>
              Laser eye surgery, also known as refractive surgery, is a precise medical procedure that uses advanced laser technology to reshape the cornea and correct vision problems. The cornea is the clear front surface of your eye that helps focus light onto the retina. When the cornea has an irregular shape, it causes refractive errors such as myopia (nearsightedness), hyperopia (farsightedness), or astigmatism. Laser eye surgery corrects these imperfections by removing microscopic amounts of corneal tissue in a carefully calculated pattern, allowing light to focus properly on the retina for clearer vision.
            </p>
            
            <p>
              The most common types of laser eye surgery include LASIK (Laser-Assisted In Situ Keratomileusis), PRK (Photorefractive Keratectomy), and SMILE (Small Incision Lenticule Extraction). LASIK involves creating a thin flap in the cornea, reshaping the underlying tissue with an excimer laser, and repositioning the flap. PRK removes the outer layer of the cornea before laser reshaping, making it ideal for patients with thinner corneas. SMILE is a newer, minimally invasive technique that removes a small piece of corneal tissue through a tiny incision. Each procedure has specific advantages, and your surgeon will recommend the best option based on your eye anatomy, prescription, lifestyle, and personal goals.
            </p>
            
            <p>
              Laser eye surgery has been performed for over three decades with continuous technological improvements enhancing safety and outcomes. Clinical studies demonstrate that more than 96% of patients achieve 20/40 vision or better after LASIK, with most reaching 20/20 or better. The procedure is FDA-approved for adults over 18 with stable prescriptions, healthy eyes, and adequate corneal thickness. Ideal candidates are those seeking freedom from glasses and contacts for work, sports, travel, or daily convenience. At Spark Eye Care, we use the latest wavefront-guided and topography-guided laser systems to create customized treatment plans that address your unique visual needs and deliver exceptional results.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
              You May Be a Candidate for Laser Eye Surgery If You Experience:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Nearsightedness (difficulty seeing distant objects clearly)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Farsightedness (difficulty focusing on near objects)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Astigmatism (blurred vision at all distances due to irregular corneal shape)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Dependence on glasses or contact lenses that interferes with your lifestyle or work</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Contact lens intolerance or discomfort</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Desire for visual freedom during sports, swimming, or outdoor activities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Stable vision prescription for at least one year</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up" style={{fontFamily: 'Cormorant, serif'}}>
            Our Approach to Laser Eye Surgery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with an extensive eye examination including corneal topography, wavefront analysis, pupil measurement, and tear film assessment. We measure corneal thickness, map irregularities, and evaluate overall eye health to determine your candidacy and design a customized treatment plan tailored to your unique visual anatomy.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-all delay-100">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Advanced Laser Technology
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize cutting-edge femtosecond and excimer laser systems with wavefront-guided and topography-guided capabilities. The procedure typically takes 10-15 minutes per eye. Numbing drops ensure comfort while our precision lasers reshape your cornea with sub-micron accuracy, guided by your unique eye map for optimal visual outcomes.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-all delay-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Post-Operative Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Follow-up visits at 1 day, 1 week, 1 month, 3 months, and 6 months ensure proper healing and optimal results. We provide prescription eye drops, protective shields, and detailed recovery instructions. Our team is available 24/7 for any questions or concerns during your healing process as your vision stabilizes and improves.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-light)] rounded-xl p-10 animate-fade-up">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
              Treatment Options We Offer
            </h3>
            <div className="space-y-6 text-[var(--color-ink)]">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">LASIK (Laser-Assisted In Situ Keratomileusis)</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The most popular laser vision correction procedure, LASIK creates a thin corneal flap, reshapes the underlying tissue with an excimer laser, and repositions the flap. Offers rapid visual recovery with most patients seeing clearly within 24 hours. Ideal for moderate to high prescriptions with minimal discomfort and fast return to normal activities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">PRK (Photorefractive Keratectomy)</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A surface ablation technique that removes the corneal epithelium before laser reshaping, allowing it to regenerate naturally. Excellent option for patients with thin corneas, dry eyes, or those in high-impact professions. Recovery takes slightly longer but achieves equivalent visual outcomes to LASIK with enhanced corneal stability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Custom Wavefront and Topography-Guided Treatments</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Advanced technologies that create a detailed map of optical imperfections unique to your eye, enabling personalized laser treatment beyond standard prescriptions. These custom approaches reduce higher-order aberrations, improve night vision, enhance contrast sensitivity, and deliver superior visual quality, especially in challenging lighting conditions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Enhancement Procedures</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  In rare cases where additional correction is desired, we offer safe and effective enhancement procedures to fine-tune your vision. These follow-up treatments use the same proven laser technology to address residual refractive errors or age-related vision changes that may occur years after your initial surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-10 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
              What to Expect During Your Laser Eye Surgery Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Initial Consultation</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Comprehensive eye examination with advanced diagnostic testing including corneal topography, wavefront analysis, and ocular health assessment. We'll discuss your candidacy, review procedure options, answer all questions, and provide detailed pre-operative instructions. Plan for 90-120 minutes for this thorough evaluation.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Surgery Day</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The procedure itself takes only 10-15 minutes per eye. You'll receive numbing drops for comfort. Most patients experience mild pressure but no pain. Vision may be blurry immediately after, but many notice improvement within hours. You'll need someone to drive you home. Rest is recommended for the remainder of the day with protective shields worn while sleeping.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">First Week of Recovery</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most LASIK patients see dramatic improvement within 24-48 hours and can return to work within 1-3 days. PRK patients experience gradual improvement over 3-7 days. You'll use prescribed antibiotic and anti-inflammatory drops. Mild dryness, light sensitivity, and fluctuating vision are normal. Avoid rubbing eyes, swimming, and heavy exercise during this initial healing phase.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Months 1-3: Stabilization Period</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your vision continues to stabilize and sharpen. Most patients achieve their final visual outcome by 3 months. Regular follow-up appointments monitor healing progress. Artificial tears help manage any residual dryness. You can gradually resume all normal activities including sports, swimming, and eye makeup as cleared by your surgeon.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Long-Term Outlook</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The vast majority of patients achieve 20/20 vision or better and maintain excellent results for years or decades. While laser surgery permanently reshapes the cornea, age-related vision changes like presbyopia (need for reading glasses after 40) can still occur naturally. Annual comprehensive eye exams ensure continued eye health and monitor for any other conditions unrelated to your surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Common Questions About Laser Eye Surgery
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Is laser eye surgery safe, and what are the risks?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Laser eye surgery has an excellent safety profile with over 30 years of clinical data supporting its efficacy. Serious complications are extremely rare, occurring in less than 1% of cases. The most common side effects include temporary dry eyes, glare, halos around lights at night, and minor fluctuations in vision during healing—most of which resolve within weeks to months. Our advanced diagnostic screening identifies patients who may not be ideal candidates, further minimizing risks. The FDA has approved these procedures, and millions of successful surgeries have been performed worldwide with high patient satisfaction rates exceeding 95%.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Am I a good candidate for laser eye surgery?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Good candidates are typically adults over 18 years old with stable vision prescriptions for at least one year, healthy eyes free from diseases like glaucoma or cataracts, adequate corneal thickness, and realistic expectations. You should not be pregnant or nursing, as hormonal changes can affect vision stability. Certain medical conditions, severe dry eye, or very high prescriptions may impact candidacy. During your comprehensive consultation at Spark Eye Care, we perform detailed diagnostic testing to determine if you're a suitable candidate and which procedure would deliver optimal results for your specific eye anatomy and visual needs.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Does laser eye surgery hurt, and what is recovery like?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The procedure itself is painless due to numbing eye drops. During surgery, you may feel mild pressure but no pain. LASIK patients typically experience minimal discomfort afterward—some describe a gritty sensation or mild burning that resolves within hours. Visual improvement is often noticeable within 24 hours, and most return to work in 1-3 days. PRK recovery takes slightly longer, with 3-5 days of moderate discomfort and gradual visual improvement over the first week. Post-operative care includes prescription eye drops, avoiding eye rubbing, and wearing protective shields while sleeping. Most daily activities resume within a week, with full stabilization occurring over 1-3 months.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How long do laser eye surgery results last?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Laser eye surgery permanently reshapes the cornea, and for most patients, results are long-lasting—often decades. The correction itself does not "wear off." However, your eyes can still experience natural age-related changes unrelated to the surgery. After age 40, presbyopia (difficulty focusing up close) develops naturally and may require reading glasses regardless of prior laser surgery. In rare cases, minor regression may occur, particularly in patients with higher prescriptions, and enhancement procedures can address this. Long-term studies show that over 90% of patients maintain excellent vision without glasses or contacts for distance vision many years after their procedure.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What is the difference between LASIK, PRK, and other laser procedures?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                LASIK creates a thin corneal flap, reshapes underlying tissue, and repositions the flap for rapid recovery—most patients see well within 24 hours with minimal discomfort. PRK removes the surface epithelium before laser reshaping, requiring 3-7 days for re-epithelialization and longer visual recovery, but it's safer for thin corneas and high-impact activities. SMILE is a newer flapless technique using a femtosecond laser to create and remove a lenticule through a small incision—less invasive with potentially reduced dry eye. All achieve similar final visual outcomes. Your surgeon at Spark Eye Care will recommend the best option based on your corneal thickness, prescription, occupation, hobbies, and healing expectations during your personalized consultation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-10 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced cataract removal with premium lens implants to restore clear vision and reduce dependence on glasses.
              </p>
            </a>

            <a href="/services/dry-eye-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                Dry Eye Treatment
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive evaluation and treatment for chronic dry eye syndrome with advanced therapies for lasting relief.
              </p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Thorough eye health evaluations with advanced diagnostic technology to detect and prevent vision problems.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Experience the Freedom of Clear Vision?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Schedule your comprehensive laser eye surgery consultation at Spark Eye Care today and discover if you're a candidate for life-changing vision correction.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}