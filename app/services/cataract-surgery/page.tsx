import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cataract Surgery | Spark Eye Care',
  description: 'Expert cataract surgery services at Spark Eye Care. Advanced lens replacement procedures to restore clear vision with personalized care and state-of-the-art technology.',
}

export default function CataractSurgeryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Cataract Surgery</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Cataract Surgery in San Antonio
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Restore your clear vision with advanced cataract surgery at Spark Eye Care. Our experienced surgeons use the latest lens replacement technology to remove cloudy lenses and replace them with premium intraocular lenses, helping you see the world with renewed clarity and confidence.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            What is Cataract Surgery?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Cataract surgery is one of the most common and successful surgical procedures performed worldwide, designed to restore clear vision by removing the eye's natural lens when it becomes clouded by a cataract. A cataract forms when proteins in the eye's lens break down and clump together, creating a cloudy area that blocks and scatters light as it passes through. This cloudiness progressively worsens over time, causing blurred vision, difficulty seeing at night, sensitivity to glare, faded colors, and frequent changes in eyeglass prescriptions. While cataracts are a natural part of aging and affect millions of people over 60, they can also develop due to injury, certain medications, medical conditions like diabetes, or prolonged UV exposure.
            </p>
            
            <p>
              During cataract surgery, the clouded natural lens is carefully removed and replaced with an artificial intraocular lens (IOL) that restores clear vision. The procedure is performed on an outpatient basis using advanced microsurgical techniques, typically taking less than 20 minutes per eye. Modern cataract surgery has evolved dramatically with innovations like femtosecond laser technology, which allows for unprecedented precision in lens removal and IOL placement. The surgery is performed under local anesthesia with sedation, ensuring patient comfort throughout the procedure. Most patients experience minimal discomfort and can return to normal activities within a few days, with vision improvement often noticeable within 24 hours.
            </p>
            
            <p>
              At Spark Eye Care, we offer a comprehensive range of premium intraocular lens options tailored to each patient's unique visual needs and lifestyle goals. Beyond standard monofocal lenses that provide clear distance vision, we offer advanced technology lenses including multifocal IOLs for both near and distance vision, toric IOLs to correct astigmatism, and extended depth of focus lenses that provide a continuous range of vision. Our surgeons conduct thorough preoperative measurements and consultations to determine the best lens option for your specific vision goals, whether that's reducing dependence on glasses, improving night driving, or achieving optimal vision for your hobbies and work. With a success rate exceeding 98% and decades of combined surgical experience, our team provides the expertise and personalized care that transforms cloudy vision into crystal-clear sight.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Signs You May Need Cataract Surgery
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Blurred or cloudy vision that interferes with daily activities like reading, driving, or watching television</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Increased sensitivity to light and glare, especially from oncoming headlights when driving at night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Fading or yellowing of colors, making it difficult to distinguish between similar shades</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Double vision in one eye or seeing halos around lights, particularly at night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Frequent changes in eyeglass or contact lens prescriptions without significant improvement in vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty reading fine print even with adequate lighting or corrective lenses</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Approach to Cataract Surgery
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with advanced diagnostic testing including OCT imaging, corneal topography, and precise biometry measurements to assess your cataract severity and determine the optimal surgical approach and lens selection for your unique eye anatomy.
              </p>
            </div>

            <div className="text-center animate-fade-up transition-all delay-100">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Advanced Surgical Technique
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Using state-of-the-art phacoemulsification technology and optional femtosecond laser assistance, we perform minimally invasive surgery through a tiny incision, removing the clouded lens and implanting your customized premium IOL with exceptional precision.
              </p>
            </div>

            <div className="text-center animate-fade-up transition-all delay-200">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Dedicated Post-Operative Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our commitment extends beyond surgery with scheduled follow-up appointments to monitor healing, optimize visual outcomes, and address any questions. We provide detailed instructions and 24/7 access to our on-call team for complete peace of mind.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="bg-[var(--color-cream)] rounded-2xl p-10">
              <h3 className="text-3xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Premium Lens Technology Options
              </h3>
              <div className="space-y-6 text-[var(--color-ink)]">
                <p className="leading-relaxed">
                  At Spark Eye Care, we offer the most advanced intraocular lens options to match your visual goals and lifestyle needs. Our premium lens portfolio includes monofocal IOLs for crisp distance vision, multifocal lenses that provide clear vision at multiple distances reducing or eliminating the need for reading glasses, toric IOLs specifically designed to correct astigmatism, and extended depth of focus (EDOF) lenses that offer a continuous range of functional vision from intermediate to distance.
                </p>
                <p className="leading-relaxed">
                  During your comprehensive consultation, we discuss your daily activities, hobbies, occupation, and visual priorities to recommend the ideal lens technology. Whether you're an avid reader, spend significant time on computers, enjoy outdoor activities, or drive frequently at night, we have lens solutions engineered to optimize your vision for the activities that matter most to you. Our surgeons stay at the forefront of lens innovation, offering the latest FDA-approved technologies that deliver exceptional visual outcomes and patient satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-10 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Your Cataract Surgery Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Initial Consultation & Testing
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your journey begins with a comprehensive eye examination including dilated eye exam, advanced imaging, corneal measurements, and precise calculations to determine your optimal lens power. We'll review your medical history, discuss lens options, answer all your questions, and schedule your surgery at your convenience. This visit typically takes 90-120 minutes.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Surgery Day
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  On surgery day, plan to spend approximately 2-3 hours at our facility. The actual procedure takes 15-20 minutes per eye under local anesthesia with mild sedation. You'll be awake but comfortable throughout. Most patients report minimal discomfort and are surprised by how quick and easy the process is. You'll need someone to drive you home, and we'll provide protective eye shields and detailed post-operative instructions.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  First Week Recovery
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Many patients notice improved vision within 24 hours, though complete healing takes several weeks. You'll use prescription eye drops to prevent infection and reduce inflammation. We schedule a follow-up visit the day after surgery, then at one week. Most patients return to normal activities within 2-3 days, avoiding heavy lifting, swimming, and eye rubbing. Vision continues improving as your eye heals and adjusts to the new lens.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Long-Term Results
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By 4-6 weeks post-surgery, your vision stabilizes and reaches its full potential. Over 98% of patients achieve 20/40 vision or better, with many reaching 20/20 or better with their premium IOL. If you chose to have both eyes done, the second eye is typically operated on 1-2 weeks after the first. Your new intraocular lens is permanent, requires no maintenance, and won't develop cataracts again. We'll see you for periodic check-ups to ensure lasting visual health and address any new prescription needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Questions About Cataract Surgery
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-medium text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Is cataract surgery painful?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Cataract surgery is not painful. We use numbing eye drops and mild sedation to ensure your comfort throughout the procedure. Most patients report feeling only slight pressure during surgery, with no pain. After surgery, you may experience mild discomfort, scratchiness, or foreign body sensation for a day or two, which is easily managed with over-the-counter pain relievers. The vast majority of patients are pleasantly surprised by how comfortable the entire experience is from start to finish.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-medium text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How long does it take to recover from cataract surgery?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients experience rapid visual recovery, with noticeable improvement within 24 hours. You can typically resume most normal activities within 2-3 days, including light work, reading, and watching television. Complete healing takes about 4-6 weeks, during which your vision continues to improve and stabilize. You'll need to use prescription eye drops for about a month and avoid strenuous activities, heavy lifting, swimming, and rubbing your eyes during the initial healing period. Most patients are thrilled with how quickly they recover and return to their daily routines with clearer vision.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-medium text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Will I still need glasses after cataract surgery?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Whether you need glasses after cataract surgery depends on the type of intraocular lens you choose. Standard monofocal lenses provide excellent distance vision but typically require reading glasses for near tasks. Premium multifocal or extended depth of focus lenses are designed to reduce or eliminate dependence on glasses for most activities, providing clear vision at multiple distances. Toric lenses correct astigmatism for sharper uncorrected vision. During your consultation, we'll discuss your lifestyle and visual goals to recommend the lens option that best matches your desire for glasses independence. Many patients with premium lenses achieve functional vision without glasses for the majority of daily activities.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-medium text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>What are the risks of cataract surgery?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Cataract surgery is one of the safest and most successful surgical procedures performed today, with a success rate exceeding 98%. However, as with any surgery, there are potential risks including infection (endophthalmitis), inflammation, bleeding, retinal detachment, elevated eye pressure, or posterior capsule opacification (which can be easily treated with a quick laser procedure). Serious complications are extremely rare, occurring in less than 1% of cases. Our experienced surgeons use advanced techniques and technology to minimize risks, and we provide thorough preoperative evaluation to identify any factors that might affect your surgery. We discuss all risks and benefits in detail during your consultation so you can make an informed decision.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-medium text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Is cataract surgery covered by insurance?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, cataract surgery with standard intraocular lenses is typically covered by Medicare and most private insurance plans when the cataract significantly affects your vision and daily activities. Insurance covers the medically necessary portion of the procedure including the surgeon's fees, facility costs, and standard monofocal lens implant. However, premium lens upgrades such as multifocal, toric, or extended depth of focus lenses are considered elective enhancements and involve an additional out-of-pocket cost. Our knowledgeable staff will verify your insurance benefits, explain what's covered, discuss any upgrade options you may be interested in, and provide transparent pricing before your surgery. We also offer flexible financing options to make premium lens technology accessible.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-10 text-center text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="w-14 h-14 bg-[var(--color-primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Thorough eye examinations to detect cataracts early and monitor their progression, ensuring timely intervention when surgery becomes beneficial.
              </p>
            </a>

            <a href="/services/glaucoma-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up transition-all delay-100">
              <div className="w-14 h-14 bg-[var(--color-primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Expert diagnosis and treatment of glaucoma, which often coexists with cataracts and requires specialized care during cataract surgery planning.
              </p>
            </a>

            <a href="/services/diabetic-eye-care" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up transition-all delay-200">
              <div className="w-14 h-14 bg-[var(--color-primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Diabetic Eye Care
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Specialized care for diabetic patients who have increased risk of cataracts and require careful preoperative evaluation and post-surgical monitoring.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Restore Your Clear Vision?
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Don't let cataracts keep you from seeing life's precious moments clearly. Schedule your comprehensive cataract evaluation with our experienced surgeons today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}