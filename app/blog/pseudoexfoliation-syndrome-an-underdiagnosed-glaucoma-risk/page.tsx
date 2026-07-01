import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pseudoexfoliation Syndrome: An Underdiagnosed Glaucoma Risk | Spark Eye Care',
  description: 'Learn about pseudoexfoliation syndrome, a common yet often missed condition that significantly increases glaucoma risk. Understand symptoms, diagnosis, and why regular eye exams matter.',
  keywords: 'pseudoexfoliation syndrome, exfoliation glaucoma, glaucoma risk factors, eye health, comprehensive eye exam, Spark Eye Care',
  openGraph: {
    title: 'Pseudoexfoliation Syndrome: An Underdiagnosed Glaucoma Risk',
    description: 'Learn about pseudoexfoliation syndrome, a common yet often missed condition that significantly increases glaucoma risk.',
    url: 'https://sparkeyetx.com/blog/pseudoexfoliation-syndrome-an-underdiagnosed-glaucoma-risk',
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
            Pseudoexfoliation Syndrome: An Underdiagnosed Glaucoma Risk
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
              <span>Dr. Care Team</span>
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
              Imagine a condition affecting up to 30% of people over age 60—one that dramatically increases the risk of glaucoma and vision loss—yet remains largely unknown to most patients. Pseudoexfoliation syndrome (PXF or PEX) is precisely that: a common age-related eye disorder that often goes undetected until significant damage has occurred.
            </p>
            <p className="mb-6">
              While glaucoma screenings focus on eye pressure and optic nerve health, pseudoexfoliation syndrome represents a hidden risk factor that can accelerate vision loss even when other parameters seem controlled. Understanding this condition is crucial for anyone over 60, especially those with a family history of glaucoma or Scandinavian heritage.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Pseudoexfoliation Syndrome?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pseudoexfoliation syndrome is a systemic condition characterized by the abnormal production and accumulation of microscopic protein-like material throughout the body. In the eye, this material deposits on the lens capsule, iris, cornea, and trabecular meshwork—the eye's drainage system responsible for regulating intraocular pressure.
            </p>
            <p className="mb-6">
              The white, flaky material resembles exfoliation (peeling) of the lens capsule, hence the name "pseudoexfoliation." Unlike true exfoliation syndrome (caused by heat or radiation exposure), PXF develops spontaneously and is linked to both genetic and environmental factors.
            </p>
            <p className="mb-6">
              When pseudoexfoliation material clogs the trabecular meshwork, it impedes fluid drainage from the eye, leading to elevated intraocular pressure—the primary risk factor for glaucoma. In fact, patients with PXF are 5 to 10 times more likely to develop glaucoma than those without the condition.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pseudoexfoliation syndrome becomes increasingly common with age, rarely appearing before age 50. By age 70, prevalence ranges from 10-30% depending on geographic location and ancestry. Several key risk factors have been identified:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age:</strong> Risk increases dramatically after 60, with highest prevalence in those over 70</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ancestry:</strong> Particularly common in people of Scandinavian, Russian, Greek, and Mediterranean descent</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Genetics:</strong> Specific gene variants (particularly in the LOXL1 gene) significantly increase risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Geography:</strong> Higher rates in northern latitudes and certain geographic regions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Gender:</strong> Slightly more common in women than men</span>
              </li>
            </ul>
            <p className="mb-6">
              Recent research also suggests possible links between PXF and systemic vascular conditions, including cardiovascular disease, hypertension, and cerebrovascular events, though more research is needed to understand these connections fully.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            "Patients with pseudoexfoliation syndrome are 5 to 10 times more likely to develop glaucoma, and the glaucoma tends to be more aggressive and harder to control."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Why It Often Goes Undiagnosed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The insidious nature of pseudoexfoliation syndrome contributes to its underdiagnosis. In its early stages, PXF produces no symptoms whatsoever. Patients have no pain, no vision changes, and no awareness that anything is wrong. The condition can only be detected during a comprehensive dilated eye examination when an eye care professional examines the lens and other structures under magnification.
            </p>
            <p className="mb-6">
              Even when present, the characteristic white deposits may be subtle or require careful examination techniques to visualize. Brief or non-dilated eye screenings—such as those sometimes offered at health fairs or quick vision checks—often miss these telltale signs entirely.
            </p>
            <p className="mb-6">
              Furthermore, many patients and even some healthcare providers are unfamiliar with pseudoexfoliation syndrome, leading to inadequate screening in at-risk populations. By the time vision problems appear, significant glaucomatous damage may have already occurred.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Connection to Glaucoma
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pseudoexfoliation glaucoma (PXG) represents one of the most aggressive forms of open-angle glaucoma. When PXF material accumulates in the trabecular meshwork, it obstructs aqueous humor outflow, causing intraocular pressure to rise—often to higher levels than in primary open-angle glaucoma.
            </p>
            <p className="mb-6">
              Several characteristics make pseudoexfoliation glaucoma particularly concerning:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Higher pressures:</strong> Intraocular pressure tends to be significantly elevated and fluctuate more than in other glaucoma types</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Faster progression:</strong> Optic nerve damage and visual field loss occur more rapidly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>More difficult to manage:</strong> Medical treatment alone may be insufficient; surgical intervention is often needed earlier</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Greater risk of blindness:</strong> Without aggressive treatment, vision loss is more likely</span>
              </li>
            </ul>
            <p className="mb-6">
              Even patients with PXF who don't yet have glaucoma require closer monitoring than the general population. Regular comprehensive eye exams—at least annually, sometimes more frequently—allow for early detection of pressure increases or optic nerve changes before irreversible damage occurs.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Surgical Complications
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond glaucoma risk, pseudoexfoliation syndrome complicates cataract surgery and other intraocular procedures. The abnormal protein deposits weaken the zonules—tiny fibers that hold the lens in place—increasing the risk of lens dislocation during surgery. Cataracts also tend to develop earlier and progress more rapidly in eyes with PXF.
            </p>
            <p className="mb-6">
              Surgeons must take special precautions when operating on eyes with pseudoexfoliation, including gentler surgical techniques and sometimes additional support devices for the lens. Postoperative inflammation may also be more pronounced, requiring more intensive follow-up care.
            </p>
            <p className="mb-6">
              Importantly, identifying PXF before surgery allows ophthalmologists to plan appropriately and discuss realistic expectations with patients, potentially preventing complications and improving outcomes.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What You Can Do: Early Detection Saves Vision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While there's currently no cure for pseudoexfoliation syndrome itself, early detection and proactive management can prevent vision loss. Here's what you should know:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule comprehensive eye exams:</strong> If you're over 60, annual dilated examinations are essential, even if your vision seems perfect</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Know your family history:</strong> Share information about glaucoma or eye diseases in your family with your eye care provider</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Follow monitoring recommendations:</strong> If diagnosed with PXF, adhere strictly to recommended follow-up schedules</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use glaucoma medications as prescribed:</strong> If pressure-lowering drops are recommended, consistent use is critical</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Consider laser or surgical treatment when recommended:</strong> These procedures can effectively lower pressure and prevent vision loss</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Inform all eye care providers:</strong> Make sure any surgeon knows about your PXF diagnosis before procedures</span>
              </li>
            </ul>
            <p className="mb-6">
              Treatment for pseudoexfoliation glaucoma typically begins with medicated eye drops to lower intraocular pressure. However, because PXG tends to be more aggressive, laser trabeculoplasty (SLT) or surgical procedures such as trabeculectomy or tube shunts may be necessary earlier in the disease course.
            </p>
            <p className="mb-6">
              The good news is that with proper monitoring and treatment, most patients with pseudoexfoliation syndrome maintain functional vision throughout their lives. The key is catching it early—before irreversible damage occurs.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Pseudoexfoliation syndrome may be common, but it doesn't have to steal your sight. Understanding your risk, prioritizing regular comprehensive eye examinations, and working closely with your eye care team can make all the difference. If you're over 60, have a family history of glaucoma, or have ancestry associated with higher PXF risk, don't wait—schedule a dilated eye exam today.
            </p>
            <p className="mb-6">
              Your vision is precious. With awareness and proactive care, you can protect it for years to come.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and compassionate care to our community.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Glaucoma: The Silent Thief of Sight
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the different types of glaucoma, risk factors, and why early detection is crucial for preserving your vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect During a Comprehensive Eye Exam
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A complete guide to the tests and procedures that help detect eye diseases early and protect your long-term vision health.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Age-Related Eye Conditions: What Every Senior Should Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  As we age, certain eye conditions become more common. Learn the warning signs and preventive measures to maintain healthy vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:gap-3 shadow-lg"
          >
            Schedule Your Comprehensive Eye Exam
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}