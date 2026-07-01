import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Glaucoma: Medications, Lasers, and Surgical Options | Spark Eye Care',
  description: 'Comprehensive guide to glaucoma treatment options including medications, laser procedures, and surgical interventions. Learn how to protect your vision with expert care.',
  keywords: 'glaucoma treatment, glaucoma medications, laser glaucoma surgery, trabeculectomy, glaucoma management, eye pressure, intraocular pressure, glaucoma care',
  openGraph: {
    title: 'Managing Glaucoma: Medications, Lasers, and Surgical Options',
    description: 'Expert guidance on glaucoma treatment approaches to preserve your vision and quality of life.',
    url: 'https://www.sparkeyetx.com/blog/managing-glaucoma-medications-lasers-and-surgical-options',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }]
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Managing Glaucoma: Medications, Lasers, and Surgical Options
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
              When you hear the words "you have glaucoma," it can feel overwhelming. This silent thief of sight affects more than 3 million Americans, and often develops without obvious symptoms until significant vision loss has occurred. But here's the encouraging truth: with proper management, most people with glaucoma can maintain their vision and quality of life for years to come.
            </p>
            <p className="mb-6">
              The key lies in understanding your treatment options and working closely with your eye care team to find the approach that works best for you. Today's glaucoma management arsenal includes everything from simple daily eye drops to advanced surgical procedures—each designed to protect the optic nerve by lowering intraocular pressure (IOP), the primary risk factor for glaucoma progression.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Goal: Lowering Eye Pressure
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Glaucoma occurs when the optic nerve—the connection between your eye and brain—becomes damaged, usually due to elevated pressure inside the eye. This pressure builds when the eye's natural drainage system becomes blocked or inefficient, causing fluid to accumulate.
            </p>
            <p className="mb-6">
              Every treatment approach, whether medication, laser, or surgery, aims to lower this pressure to a target level that prevents further nerve damage. Your ophthalmologist will determine your target pressure based on the severity of your glaucoma, the rate of progression, and other individual factors. The goal isn't necessarily to achieve "normal" pressure, but rather to find the pressure level at which your specific optic nerve remains stable.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            First-Line Treatment: Glaucoma Medications
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For most patients, glaucoma management begins with prescription eye drops. These medications work through different mechanisms to either reduce fluid production in the eye or improve drainage. The most commonly prescribed classes include:
            </p>
            <p className="mb-6">
              <strong>Prostaglandin analogs</strong> (such as latanoprost, travoprost, and bimatoprost) are typically the first choice. Applied once daily, usually at bedtime, they increase fluid outflow through the eye's natural drainage channels. They're highly effective, lowering pressure by 25-35%, with relatively few systemic side effects. Some patients may notice darkening of the iris or increased eyelash growth.
            </p>
            <p className="mb-6">
              <strong>Beta-blockers</strong> (like timolol) reduce the production of aqueous fluid. While effective, they can affect heart rate and breathing, making them unsuitable for patients with certain cardiac or respiratory conditions.
            </p>
            <p className="mb-6">
              <strong>Alpha agonists and carbonic anhydrase inhibitors</strong> offer alternative mechanisms for reducing fluid production or improving drainage. These may be used alone or in combination with other medications when a single drop isn't sufficient.
            </p>
            <p className="mb-6">
              The challenge with medication therapy is adherence. Missing doses or discontinuing drops can lead to pressure spikes and progressive vision loss. If you're struggling with side effects or the complexity of your medication regimen, talk to your doctor—other options exist.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The most important thing is finding a treatment plan you can stick with. Consistency is more valuable than perfection when it comes to preserving your vision."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Laser Procedures: Minimally Invasive Alternatives
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When medications aren't sufficient, aren't well-tolerated, or when patients prefer to reduce their dependence on daily drops, laser treatments offer effective alternatives with minimal recovery time.
            </p>
            <p className="mb-6">
              <strong>Selective Laser Trabeculoplasty (SLT)</strong> is now commonly used as first-line treatment, even before medications in some cases. This in-office procedure uses laser energy to stimulate the eye's drainage system, improving fluid outflow. It takes just minutes, requires no incisions, and can lower pressure by 20-30%. The effects typically last several years, and the procedure can be repeated if needed.
            </p>
            <p className="mb-6">
              <strong>Laser Peripheral Iridotomy (LPI)</strong> is specifically used for angle-closure glaucoma or narrow angles at risk of closure. A small opening is created in the iris to allow fluid to flow more freely between the front and back of the eye, preventing dangerous pressure spikes.
            </p>
            <p className="mb-6">
              <strong>Micropulse Laser Trabeculoplasty</strong> is a newer variation that may cause even less inflammation and discomfort than traditional SLT, though long-term data is still being collected.
            </p>
            <p className="mb-6">
              Laser procedures are performed in the office with numbing drops, involve minimal discomfort, and allow you to resume normal activities almost immediately. They work well for many patients and can significantly reduce or eliminate the need for daily medications.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Minimally Invasive Glaucoma Surgery (MIGS)
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The past decade has brought revolutionary advances in glaucoma surgery with the development of MIGS procedures. These techniques offer the benefits of traditional surgery—sustained pressure reduction—with faster recovery and fewer complications.
            </p>
            <p className="mb-6">
              MIGS procedures work by creating tiny bypass channels or stents to improve fluid drainage from the eye. They're typically performed during cataract surgery but can also be done as standalone procedures. Options include:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Trabecular micro-bypass stents</strong> (like iStent) create channels through the trabecular meshwork, the eye's natural drainage tissue</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Suprachoroidal shunts</strong> redirect fluid to new drainage pathways</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Subconjunctival drainage devices</strong> create microchannels under the clear tissue covering the white of the eye</span>
              </li>
            </ul>
            <p className="mb-6">
              MIGS procedures are ideal for patients with mild to moderate glaucoma who need better pressure control than medications alone can provide but don't yet require traditional surgery. Recovery is typically measured in days rather than weeks, and complication rates are significantly lower than with conventional surgery.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Traditional Glaucoma Surgery: When More Is Needed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For advanced glaucoma or cases where other treatments haven't achieved adequate pressure control, traditional surgical procedures remain highly effective options.
            </p>
            <p className="mb-6">
              <strong>Trabeculectomy</strong> has been the gold standard surgical treatment for decades. The surgeon creates a new drainage channel under a protective flap of tissue, allowing fluid to filter out of the eye and be absorbed by surrounding tissues. This "bleb" creates a reservoir under the conjunctiva. While trabeculectomy involves a longer recovery period and requires more frequent follow-up initially, it can achieve dramatic pressure reductions—often into the low teens or single digits—making it invaluable for severe cases.
            </p>
            <p className="mb-6">
              <strong>Glaucoma drainage devices</strong> (tube shunts) are small implants that create a permanent pathway for fluid to drain from inside the eye to a reservoir plate positioned under the conjunctiva. These are often recommended when trabeculectomy has failed or in complex cases such as neovascular glaucoma or glaucoma following other eye surgeries.
            </p>
            <p className="mb-6">
              While these procedures require more extensive surgery and healing time, they offer powerful, long-lasting pressure control for patients who need it most. Your surgeon will discuss the specific risks and benefits based on your individual situation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating Your Personalized Treatment Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The best treatment approach depends on multiple factors: the type and severity of your glaucoma, your target pressure, your overall health, your lifestyle, and your preferences. Many patients will use a combination of approaches over time as their needs change.
            </p>
            <p className="mb-6">
              Important considerations when discussing options with your ophthalmologist include:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your ability to consistently use eye drops as prescribed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Side effects you're experiencing with current medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How quickly your glaucoma is progressing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Whether you have cataracts that might benefit from combined surgery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your comfort level with different interventions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Insurance coverage and cost considerations</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember that glaucoma management is a journey, not a destination. Regular monitoring with visual field tests, OCT imaging, and pressure checks allows your doctor to adjust your treatment as needed. What works today may need modification tomorrow, and that's perfectly normal.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Living with glaucoma requires commitment, but it doesn't have to mean living with fear. With today's diverse treatment options—from simple eye drops to sophisticated surgical interventions—most patients can preserve their vision and maintain their independence for life.
            </p>
            <p className="mb-6">
              The most important step is staying engaged with your care. Attend your regular appointments, communicate openly about challenges you're facing, and don't hesitate to ask questions. Your eye care team is your partner in protecting your sight, and together, you can find the approach that works best for your unique situation.
            </p>
            <p>
              If you've been diagnosed with glaucoma or have concerns about your eye pressure, we're here to help you navigate your options with compassion and expertise. Your vision is worth protecting—let's work together to keep it that way.
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
            <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
              Written by the Spark Eye Care Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in comprehensive ophthalmology and glaucoma management. Our team is committed to delivering evidence-based care with compassion and expertise.
            </div>
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
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Cataracts: When Is Surgery Right for You?
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn about cataract symptoms, progression, and how to determine the optimal timing for surgery.
              </p>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                What to Expect During Your Comprehensive Eye Exam
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A detailed walkthrough of eye exam components and why regular screenings are essential for early detection.
              </p>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Diabetic Eye Disease: Protecting Your Vision with Blood Sugar Control
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                How diabetes affects your eyes and the critical importance of regular monitoring and management.
              </p>
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
            Our team is here to help you navigate your glaucoma treatment options with expertise and compassion.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}