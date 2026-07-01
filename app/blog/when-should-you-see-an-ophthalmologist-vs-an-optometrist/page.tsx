import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Should You See an Ophthalmologist vs an Optometrist? | Spark Eye Care',
  description: 'Learn the key differences between ophthalmologists and optometrists, and discover which eye care specialist is right for your specific vision needs and conditions.',
  openGraph: {
    title: 'When Should You See an Ophthalmologist vs an Optometrist? | Spark Eye Care',
    description: 'Learn the key differences between ophthalmologists and optometrists, and discover which eye care specialist is right for your specific vision needs and conditions.',
    url: 'https://www.sparkeyetx.com/blog/when-should-you-see-an-ophthalmologist-vs-an-optometrist',
    type: 'article',
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
            <span className="text-white/60">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            When Should You See an Ophthalmologist vs an Optometrist?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You notice your vision seems a bit blurry, or perhaps you're experiencing eye discomfort. Your first instinct is to seek professional help—but who should you call? The world of eye care can be confusing, with terms like "ophthalmologist" and "optometrist" often used interchangeably. Yet these professionals have distinct roles, training levels, and areas of expertise. Understanding the difference could mean the difference between a routine checkup and getting the specialized surgical care you need.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Both ophthalmologists and optometrists are essential to comprehensive eye health, but knowing when to see each one empowers you to make informed decisions about your vision care. Let's explore what sets these eye care professionals apart and how to choose the right specialist for your specific needs.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Educational Pathway
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The primary distinction between ophthalmologists and optometrists lies in their education and training. Optometrists complete a four-year Doctor of Optometry (O.D.) degree after undergraduate studies. Their training focuses on vision testing, prescribing corrective lenses, detecting eye abnormalities, and managing certain eye conditions with medication.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Ophthalmologists, on the other hand, are medical doctors (M.D. or D.O.) who complete four years of medical school followed by at least four years of specialized residency training in ophthalmology. Many pursue additional fellowship training in subspecialties like retinal surgery, glaucoma, or pediatric ophthalmology. This extensive medical training qualifies them to diagnose and treat all eye diseases, perform eye surgery, and provide comprehensive medical and surgical eye care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Think of it this way: all ophthalmologists can do what optometrists do, but ophthalmologists have additional medical and surgical expertise that allows them to handle more complex conditions and perform procedures that optometrists cannot.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to See an Optometrist
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Optometrists are your go-to professionals for primary vision care. They excel at routine eye examinations, vision testing, and prescribing corrective lenses. If you're experiencing basic vision changes, need new glasses or contact lenses, or require routine eye health monitoring, an optometrist is an excellent starting point.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Optometrists can also diagnose and manage common eye conditions such as:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Dry eye syndrome</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Pink eye (conjunctivitis)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Eye allergies</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Minor eye infections</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Pre- and post-operative care for certain procedures</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many people establish long-term relationships with their optometrists for annual checkups and preventive care. Optometrists also play a crucial role in early detection, identifying potential problems that may require referral to an ophthalmologist for specialized treatment.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Think of optometrists as your primary care providers for eye health—they're essential for routine care and early detection, while ophthalmologists are the specialists you turn to for surgery and complex medical conditions."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to See an Ophthalmologist
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Ophthalmologists are medical specialists who handle complex eye diseases and perform surgical procedures. You should see an ophthalmologist when dealing with conditions that require medical treatment or surgery, or when experiencing symptoms that suggest serious eye disease.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Common reasons to consult an ophthalmologist include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cataracts:</strong> Clouding of the eye's natural lens that requires surgical removal and lens replacement</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Glaucoma:</strong> A group of diseases causing optic nerve damage that may require laser treatment or surgery</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Retinal conditions:</strong> Including diabetic retinopathy, macular degeneration, or retinal detachment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Eye injuries or trauma:</strong> Requiring immediate medical attention</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Corneal diseases:</strong> Including infections or conditions requiring transplantation</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Refractive surgery:</strong> Such as LASIK or PRK for vision correction</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Eye tumors:</strong> Requiring specialized diagnosis and treatment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Complex medical eye conditions:</strong> Related to systemic diseases like diabetes or autoimmune disorders</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you experience sudden vision loss, eye pain, flashes of light, a curtain-like shadow in your vision, or any eye injury, seek immediate care from an ophthalmologist or emergency department.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Collaborative Care Model
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In modern eye care, optometrists and ophthalmologists often work together to provide comprehensive treatment. This collaborative approach ensures patients receive both excellent routine care and specialized expertise when needed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For example, your optometrist might detect early signs of glaucoma during a routine exam and refer you to an ophthalmologist for advanced testing and treatment planning. After the ophthalmologist establishes a treatment protocol, your optometrist may continue monitoring your condition through regular checkups, referring back to the ophthalmologist as needed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Similarly, if you undergo cataract surgery with an ophthalmologist, your optometrist might provide pre-operative measurements and post-operative follow-up care, prescribing new glasses once your vision has stabilized.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This team-based approach maximizes convenience while ensuring you receive appropriate specialized care when necessary. The key is having providers who communicate effectively and prioritize your best interests.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Making the Right Choice for Your Situation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Choosing between an optometrist and ophthalmologist doesn't have to be complicated. Consider these guidelines:
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-[var(--color-ink)] mb-3">Start with an optometrist if you:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Need a routine eye exam or vision screening</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Want to update your glasses or contact lens prescription</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Have minor eye irritation or common concerns</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Need primary eye care and preventive services</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-light)] rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-[var(--color-ink)] mb-3">See an ophthalmologist if you:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Have been diagnosed with a serious eye disease</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Need eye surgery or are considering refractive procedures</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Experience sudden or severe vision changes</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Have complex medical conditions affecting your eyes</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Were referred by your optometrist for specialized care</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember, your optometrist can always refer you to an ophthalmologist if they identify a condition requiring specialized treatment. Starting with routine care and getting appropriate referrals when needed ensures you're using healthcare resources efficiently while receiving optimal care.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Insurance and Accessibility Considerations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Another practical consideration is insurance coverage and accessibility. Vision insurance plans typically cover routine optometry visits and may have different benefits for medical eye care provided by ophthalmologists. Complex conditions treated by ophthalmologists are usually covered under medical insurance rather than vision plans.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Optometrist appointments are often easier to schedule and may be more conveniently located in your community. However, when specialized surgical expertise is needed, traveling to see an ophthalmologist—even if it requires more effort—is worth the investment in your vision health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're unsure about coverage, contact your insurance provider or the practice directly to verify benefits before your appointment.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Your Vision Deserves Expert Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the difference between optometrists and ophthalmologists empowers you to seek appropriate care for your unique vision needs. Both play vital roles in protecting your sight—optometrists as primary care providers for routine eye health, and ophthalmologists as medical specialists for complex conditions and surgical treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most important step is scheduling regular eye exams and seeking prompt attention when problems arise. Whether you start with an optometrist for routine care or go directly to an ophthalmologist for a known condition, prioritizing your eye health ensures you'll continue enjoying clear, comfortable vision for years to come.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing vision changes, have been diagnosed with an eye condition, or are due for a comprehensive eye examination, don't delay seeking professional care. Your eyes are precious—give them the expert attention they deserve.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-1">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Signs You Need a Comprehensive Eye Exam
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn the warning signs that indicate it's time to schedule an appointment with your eye care provider.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect During Your First Ophthalmology Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm">A comprehensive guide to preparing for and understanding your initial ophthalmology consultation.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Common Eye Conditions and Treatments
                </h4>
                <p className="text-[var(--color-muted)] text-sm">An overview of prevalent eye diseases and the modern treatment approaches available today.</p>
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}