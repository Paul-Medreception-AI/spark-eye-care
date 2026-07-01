import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Normal Tension Glaucoma: When Eye Pressure Isn\'t the Problem | Spark Eye Care',
  description: 'Understanding normal tension glaucoma, a unique form of glaucoma that damages the optic nerve despite normal eye pressure. Learn symptoms, risk factors, and treatment options.',
  keywords: 'normal tension glaucoma, low tension glaucoma, glaucoma without high pressure, optic nerve damage, eye health, glaucoma treatment',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Normal Tension Glaucoma: When Eye Pressure Isn't the Problem
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've been diligent about your eye exams. Your eye pressure readings have always been normal. Yet your ophthalmologist mentions a concern about glaucoma. How is this possible? Welcome to the puzzling world of normal tension glaucoma (NTG), a condition that challenges our traditional understanding of this sight-threatening disease.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Normal tension glaucoma affects thousands of people who would otherwise seem to have healthy eyes. Understanding this condition is crucial because early detection and treatment can preserve your vision for years to come. Let's explore what makes NTG unique, who's at risk, and what you can do about it.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Normal Tension Glaucoma?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Normal tension glaucoma, also called low-tension or normal-pressure glaucoma, is a form of open-angle glaucoma where optic nerve damage and vision loss occur despite intraocular pressure (IOP) remaining within the statistically normal range (typically below 21 mmHg). This distinguishes it from traditional glaucoma, where elevated eye pressure is the primary risk factor.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The optic nerve, which transmits visual information from your eye to your brain, becomes progressively damaged in NTG. This damage creates characteristic patterns of vision loss, starting with peripheral vision and potentially progressing to central vision if left untreated. The mystery lies in why this happens when pressure readings appear normal.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Researchers believe that in NTG, the optic nerve may be more susceptible to damage at normal pressure levels, or that other factors beyond pressure contribute to nerve deterioration. These factors might include reduced blood flow to the optic nerve, structural weakness in the nerve tissue, or other vascular and autoimmune conditions.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Normal tension glaucoma accounts for approximately one-third of all open-angle glaucoma cases in the United States, though this percentage varies significantly by ethnicity and geographic region. Certain populations face higher risk than others.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Key risk factors include:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Japanese ancestry:</strong> Studies show significantly higher prevalence in Japanese populations compared to Caucasian or African populations</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Family history:</strong> Having a close relative with any form of glaucoma increases your risk</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Cardiovascular disease:</strong> Conditions affecting blood flow, including low blood pressure, heart disease, and history of stroke</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Migraine headaches:</strong> Particularly migraines with aura, which may indicate vascular instability</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Female gender:</strong> Women appear to have slightly higher rates of NTG than men</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Age over 60:</strong> Risk increases with advancing age, as with most forms of glaucoma</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The absence of elevated eye pressure doesn't mean you're safe from glaucoma. Normal tension glaucoma reminds us that comprehensive eye exams are essential for everyone, not just those with high pressure readings."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Warning Signs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One of the most challenging aspects of normal tension glaucoma is that it typically produces no symptoms in its early stages. Vision loss begins in the peripheral (side) vision and progresses so gradually that many people don't notice until significant damage has occurred.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            By the time you notice vision changes on your own, substantial and irreversible nerve damage may have already taken place. This is why regular comprehensive eye examinations are absolutely critical, especially if you have any of the risk factors mentioned above.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During a comprehensive exam, your eye care provider will measure your intraocular pressure, but they'll also examine your optic nerve directly using specialized imaging. They may perform visual field testing to map your peripheral vision and identify any early losses that you haven't noticed yet. Advanced imaging techniques like optical coherence tomography (OCT) can detect structural changes in the optic nerve before functional vision loss occurs.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Science Behind the Damage
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While we don't fully understand why some optic nerves are damaged at normal pressure levels, research has identified several contributing mechanisms. The leading theories focus on blood flow and structural vulnerabilities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Vascular insufficiency</strong> is a primary suspect. Your optic nerve requires constant blood flow to deliver oxygen and nutrients. Conditions that compromise this blood supply—such as low blood pressure, vasospasm (blood vessel constriction), or atherosclerosis—may leave the nerve vulnerable to damage even without elevated eye pressure. Nighttime blood pressure dips, common in some patients, may be particularly harmful.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Structural factors</strong> also play a role. Some individuals may have optic nerve tissue that's inherently more susceptible to mechanical stress. The lamina cribrosa, a mesh-like structure through which nerve fibers exit the eye, may be more compliant or structurally weak in some people, making nerve fibers more vulnerable to damage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Recent research also suggests that <strong>cerebrospinal fluid pressure</strong> dynamics may contribute. The optic nerve sits at the interface between intraocular pressure and cerebrospinal fluid pressure. An imbalance in these pressures could create stress on nerve fibers even when eye pressure alone appears normal.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment Approaches That Work
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Despite the "normal" pressure readings, treatment for NTG still focuses primarily on lowering intraocular pressure further. Clinical trials have demonstrated that reducing IOP by 30% or more from baseline can slow or halt disease progression in many patients with normal tension glaucoma.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Treatment options include:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Medicated eye drops:</strong> Prostaglandin analogs and other pressure-lowering medications are typically first-line therapy</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Laser procedures:</strong> Selective laser trabeculoplasty (SLT) can improve fluid drainage and lower pressure</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Surgical intervention:</strong> Trabeculectomy or minimally invasive glaucoma surgery (MIGS) for advanced cases or when medications are insufficient</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Cardiovascular optimization:</strong> Working with your primary care physician to manage blood pressure, circulation, and heart health</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond pressure reduction, some practitioners recommend strategies to improve optic nerve blood flow, though evidence is still emerging. These may include avoiding excessive blood pressure lowering (especially at night), managing sleep apnea, optimizing cardiovascular health, and in some cases, supplements that support vascular health—though always discuss supplements with your doctor before starting them.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Living Well With Normal Tension Glaucoma
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A diagnosis of normal tension glaucoma can feel overwhelming, but with proper management, most people maintain functional vision throughout their lives. The key is commitment to treatment and regular monitoring.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Essential steps for protecting your vision:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Use medications exactly as prescribed:</strong> Consistency is critical for maintaining stable eye pressure</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Attend all follow-up appointments:</strong> Regular monitoring allows your doctor to detect progression early and adjust treatment</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Maintain overall health:</strong> Exercise regularly, eat a balanced diet rich in leafy greens and omega-3 fatty acids, and don't smoke</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Manage cardiovascular risk factors:</strong> Work with your primary care doctor to optimize blood pressure, cholesterol, and circulation</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Protect your eyes:</strong> Wear protective eyewear during activities that could injure your eyes</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-loose"><strong>Stay informed:</strong> Ask questions and understand your treatment plan and what to watch for</span>
            </li>
          </ul>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Normal tension glaucoma challenges the conventional wisdom that glaucoma is simply a disease of elevated eye pressure. It reminds us that eye health is complex and that comprehensive care goes beyond any single measurement. The good news is that with early detection and appropriate treatment, vision can be preserved.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you have risk factors for normal tension glaucoma, or if it's been more than a year since your last comprehensive eye exam, don't wait. Early detection provides the best opportunity to protect your vision for the long term. Your eyesight is irreplaceable—give it the attention it deserves.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
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
            <div className="text-sm text-[var(--color-muted)]">
              Board-certified providers specializing in Other Medical
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">
                  Eye Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Open-Angle Glaucoma: The Silent Thief of Sight
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn about the most common form of glaucoma and why early detection matters.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">
                  Prevention
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Often Should You Get a Comprehensive Eye Exam?
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Age-based guidelines for eye exams and why regular screening saves vision.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">
                  Wellness
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Connection Between Heart Health and Eye Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Discover how cardiovascular wellness affects your vision and what you can do.
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
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}