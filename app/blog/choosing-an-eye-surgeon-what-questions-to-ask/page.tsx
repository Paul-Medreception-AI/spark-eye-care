import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choosing an Eye Surgeon: What Questions to Ask | Spark Eye Care',
  description: 'Learn the essential questions to ask when selecting an eye surgeon. Expert guidance on qualifications, experience, and what to look for in a surgical eye care provider.',
  openGraph: {
    title: 'Choosing an Eye Surgeon: What Questions to Ask | Spark Eye Care',
    description: 'Learn the essential questions to ask when selecting an eye surgeon. Expert guidance on qualifications, experience, and what to look for in a surgical eye care provider.',
    url: 'https://www.sparkeyetx.com/blog/choosing-an-eye-surgeon-what-questions-to-ask',
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
          <div className="text-sm text-white/80 mb-8 text-center">
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Choosing an Eye Surgeon: What Questions to Ask
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published March 2025</span>
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Choosing an eye surgeon is one of the most important healthcare decisions you'll ever make. Your vision is precious, and entrusting it to someone requires confidence, research, and informed decision-making. Whether you're considering cataract surgery, LASIK, glaucoma treatment, or retinal repair, the surgeon you select will directly impact not only the outcome of your procedure but also your experience throughout the entire process.
            </p>
            <p className="mb-6">
              Many patients feel overwhelmed when faced with this decision. How do you evaluate credentials? What separates adequate care from exceptional care? What red flags should you watch for? This guide provides you with the essential questions to ask and the key factors to consider when selecting an eye surgeon, empowering you to make the best choice for your vision and peace of mind.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Credentials and Training
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The foundation of any qualified eye surgeon begins with their education and training. All ophthalmologists complete four years of medical school followed by at least three years of ophthalmology residency. However, many eye surgeons pursue additional fellowship training in subspecialties such as cornea and refractive surgery, retina, glaucoma, or oculoplastics.
            </p>
            <p className="mb-6">
              When evaluating a potential surgeon, ask these critical questions about their background:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Are you board-certified by the American Board of Ophthalmology?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Did you complete fellowship training in a subspecialty relevant to my condition?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do you have hospital privileges, and at which facilities?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How do you stay current with the latest surgical techniques and technologies?</span>
              </li>
            </ul>
            <p className="mb-6">
              Board certification demonstrates that a surgeon has met rigorous standards and continues to maintain competency through ongoing education. Hospital privileges indicate peer review and institutional oversight, adding another layer of accountability.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Experience with Your Specific Procedure
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Not all eye surgeries are created equal, and experience matters tremendously when it comes to outcomes. A surgeon who performs your specific procedure regularly will have refined techniques, anticipate complications, and handle unexpected situations with confidence.
            </p>
            <p className="mb-6">
              Don't be shy about asking direct questions regarding experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How many of these procedures have you performed?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How often do you perform this specific surgery?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What is your complication rate compared to national averages?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Have you managed cases similar to mine, especially if my case is complex?</span>
              </li>
            </ul>
            <p className="mb-6">
              For common procedures like cataract surgery, an experienced surgeon may perform thousands over their career. For rarer conditions, even a few dozen cases performed by a subspecialist represents significant expertise. The key is finding someone who treats your condition routinely, not occasionally.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            "The right surgeon doesn't just have excellent technical skills—they communicate clearly, listen to your concerns, and partner with you in your care journey."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Technology and Surgical Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Eye surgery technology has advanced dramatically in recent years. From laser-assisted cataract surgery to minimally invasive glaucoma procedures to advanced imaging systems, modern tools can improve precision, safety, and outcomes. However, technology is only as good as the surgeon using it.
            </p>
            <p className="mb-6">
              Questions to ask about surgical approach and technology include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What surgical technique do you recommend for my specific case, and why?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What equipment and technology do you use?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Are there alternative approaches, and what are the pros and cons of each?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How do you customize the procedure to my individual needs?</span>
              </li>
            </ul>
            <p className="mb-6">
              A skilled surgeon will explain their approach in understandable terms and discuss why they've chosen a particular technique for your situation. They should be transparent about both the benefits and limitations of their recommended approach.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Communication Style and Patient Care Philosophy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Technical skill is essential, but so is the ability to communicate effectively and make you feel heard and respected. The surgeon-patient relationship matters, especially since eye surgery often involves multiple appointments before and after the procedure.
            </p>
            <p className="mb-6">
              Pay attention to how the surgeon and their team interact with you:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Does the surgeon listen to your concerns and answer questions thoroughly?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do they explain things in terms you can understand, avoiding unnecessary jargon?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do you feel rushed, or does the surgeon take adequate time with you?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Is the office staff professional, responsive, and helpful?</span>
              </li>
            </ul>
            <p className="mb-6">
              Trust your instincts. If you feel uncomfortable or sense that your concerns aren't being taken seriously, it's perfectly acceptable to seek a second opinion or choose a different surgeon.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Risks, Outcomes, and Postoperative Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every surgical procedure carries some degree of risk, and a trustworthy surgeon will be transparent about potential complications while also discussing realistic outcome expectations. Understanding what to expect before, during, and after surgery helps you prepare mentally and practically.
            </p>
            <p className="mb-6">
              Important questions about outcomes and recovery include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What are the potential risks and complications of this procedure?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What results can I realistically expect?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What is the recovery timeline, and what restrictions will I have?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Who provides postoperative care, and how do I reach you if complications arise?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What happens if the outcome isn't what we hoped for?</span>
              </li>
            </ul>
            <p className="mb-6">
              The best surgeons set realistic expectations. Be cautious of anyone who promises perfect results or minimizes risks. Postoperative follow-up is crucial for monitoring healing and addressing any issues promptly, so ensure your surgeon provides comprehensive aftercare.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Making Your Final Decision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              After gathering information from consultations, consider these final factors as you make your choice. Check online reviews and testimonials, but remember that individual experiences vary. Ask if you can speak with previous patients who've had similar procedures. Verify that the surgeon accepts your insurance or discuss payment options if you're paying out of pocket.
            </p>
            <p className="mb-6">
              Consider proximity and convenience—you'll have multiple appointments, so location matters. Most importantly, trust your gut feeling about whether this surgeon is the right fit for you.
            </p>
            <p className="mb-6">
              Choosing an eye surgeon is a significant decision that deserves careful consideration. By asking the right questions, evaluating credentials and experience, and assessing communication and care quality, you can find a surgeon who not only has the technical expertise you need but also treats you with the respect and compassion you deserve. Your vision is worth the investment of time in making an informed choice.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12 text-center">
            <p className="text-[var(--color-ink)] leading-relaxed text-lg mb-6">
              If you're considering eye surgery or have concerns about your vision, our experienced team at Spark Eye Care is here to help. We welcome your questions and are committed to providing exceptional, patient-centered surgical care.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-dark)] transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in comprehensive ophthalmology and surgical eye care, committed to patient education and exceptional outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Understanding Cataract Surgery: What to Expect</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">A comprehensive guide to cataract surgery, from diagnosis through recovery and vision restoration.</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Preparing for Eye Surgery: A Patient's Checklist</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">Essential steps to take before your eye surgery to ensure the best possible outcome and smooth recovery.</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">When to Seek a Second Opinion for Eye Conditions</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">Learn when it's appropriate to seek additional medical opinions and how to navigate the process effectively.</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}