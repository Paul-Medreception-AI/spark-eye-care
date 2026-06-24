import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert glaucoma diagnosis and treatment in Kyle. Board-certified eye care specialists offering comprehensive glaucoma management, advanced testing, and personalized treatment plans.',
  keywords: 'glaucoma treatment Kyle, glaucoma specialist Kyle, eye pressure Kyle, glaucoma surgery Kyle, glaucoma management, ophthalmologist Kyle',
  openGraph: {
    title: 'Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert glaucoma diagnosis and treatment in Kyle. Comprehensive care from board-certified specialists.',
    url: 'https://www.sparkeyetx.com/conditions/glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function GlaucomaPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Glaucoma</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6 leading-tight">
            Glaucoma Treatment in Kyle
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Glaucoma is a progressive eye disease that can lead to permanent vision loss if left untreated, but with early detection and proper management, vision can be preserved. At Spark Eye Care, our experienced team provides comprehensive glaucoma diagnosis, monitoring, and treatment using the latest technology and evidence-based approaches to protect your sight for years to come.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Glaucoma
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Glaucoma is a group of eye conditions that damage the optic nerve, which is essential for good vision. This damage is often caused by abnormally high pressure in the eye, known as intraocular pressure (IOP). Glaucoma is one of the leading causes of blindness for people over 60 years old, affecting more than 3 million Americans, though it can occur at any age. The condition typically develops slowly and without noticeable symptoms in its early stages, which is why it's often called the "silent thief of sight." Because peripheral vision is usually affected first, many people don't realize they have glaucoma until significant vision loss has already occurred. Once vision is lost to glaucoma, it cannot be recovered, making early detection and consistent treatment absolutely critical for preserving eyesight and maintaining quality of life.
            </p>
            <p>
              The primary cause of glaucoma is elevated intraocular pressure resulting from a buildup of fluid (aqueous humor) that flows throughout the inside of the eye. When this fluid cannot drain properly through the eye's drainage system, pressure builds and damages the optic nerve fibers. Several risk factors increase the likelihood of developing glaucoma, including being over age 60, having a family history of glaucoma, being of African American, Hispanic, or Asian descent, having high eye pressure, being farsighted or nearsighted, having had an eye injury, having thin corneas, and having certain medical conditions such as diabetes, heart disease, high blood pressure, and sickle cell anemia. Long-term corticosteroid use, particularly eye drops, can also increase risk. There are different types of glaucoma, with primary open-angle glaucoma being the most common, developing gradually, and angle-closure glaucoma, which can occur suddenly and requires immediate medical attention.
            </p>
            <p>
              Professional diagnosis and treatment are essential because glaucoma cannot be prevented and vision loss cannot be reversed, but the progression can be slowed or halted with proper care. Regular comprehensive eye examinations that include measurement of eye pressure, inspection of the optic nerve, visual field testing, and measurement of corneal thickness are crucial for early detection. When glaucoma is identified early, treatment options including prescription eye drops, laser procedures, and surgical interventions can effectively lower eye pressure and prevent further damage. Without treatment, glaucoma progresses from peripheral vision loss to tunnel vision and eventually to complete blindness. At Spark Eye Care in Kyle, we utilize advanced diagnostic equipment and proven treatment protocols to catch glaucoma in its earliest stages and create personalized management plans that preserve vision and allow our patients to maintain their independence and quality of life for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Glaucoma
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Early Warning Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Gradual loss of peripheral vision:</strong> Side vision slowly diminishes, usually in both eyes, often going unnoticed until significant damage has occurred.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Tunnel vision:</strong> Advanced stages create the sensation of looking through a narrow tube, with only central vision remaining intact.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Patchy blind spots:</strong> Irregular areas of vision loss in peripheral or central vision, frequently noticed in both eyes during visual field testing.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty adjusting to darkness:</strong> Increased trouble adapting to low-light environments or transitioning from bright to dim spaces.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Halos around lights:</strong> Seeing rainbow-colored circles or rings around lights, especially at night or in dimly lit conditions.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred vision:</strong> Intermittent or persistent blurriness that may come and go, particularly in the periphery of vision.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Increased bumping into objects:</strong> Frequently colliding with doorframes, furniture, or people due to reduced peripheral awareness.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Acute Angle-Closure Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe eye pain:</strong> Sudden, intense pain in one eye that may be accompanied by a headache and requires immediate medical attention.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Nausea and vomiting:</strong> Digestive upset accompanying sudden eye pressure increases, often mistaken for other medical conditions.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sudden vision disturbances:</strong> Rapid onset of blurred or hazy vision, particularly affecting one eye more than the other.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Red eye:</strong> Noticeable redness and inflammation of the affected eye, often with visible blood vessels and irritation.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye appears cloudy:</strong> The clear front surface of the eye takes on a hazy, clouded appearance due to corneal swelling.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Headache:</strong> Severe headache often centered around the forehead or temples, accompanying the affected eye.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Dilated pupil:</strong> The pupil of the affected eye becomes enlarged and may not respond normally to light changes.
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Rainbow halos around lights:</strong> Distinctive colored rings seen around light sources, indicating corneal edema and elevated pressure.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Regular eye examinations are the best way to detect glaucoma before noticeable symptoms appear, allowing for timely intervention that can preserve your vision for life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Glaucoma
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Your journey begins with a thorough eye examination including tonometry to measure intraocular pressure, ophthalmoscopy to inspect the optic nerve for damage, visual field testing to detect blind spots, pachymetry to measure corneal thickness, and gonioscopy to examine the drainage angle. We use advanced imaging technology including optical coherence tomography (OCT) to create detailed maps of your optic nerve and retinal nerve fiber layer, establishing a baseline for future monitoring.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Based on your specific type of glaucoma, severity, risk factors, and overall health, we develop a customized treatment strategy designed to lower your eye pressure to a safe target level. Your plan may include prescription eye drops, oral medications, laser treatments, or surgical interventions, depending on what will be most effective for your situation. We explain each option thoroughly, including expected outcomes, potential side effects, and what you can expect during treatment, ensuring you're fully informed and comfortable with the approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Glaucoma management is a lifelong commitment, and we're with you every step of the way. Regular follow-up appointments allow us to monitor your eye pressure, assess optic nerve health, track any changes in your visual field, and adjust treatment as needed to maintain optimal pressure control. We conduct periodic comprehensive evaluations to ensure the disease isn't progressing and your treatment remains effective. Our team provides education about proper medication use, lifestyle modifications that support eye health, and answers any questions that arise as you manage this condition.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              At Spark Eye Care, we utilize evidence-based treatments proven to effectively manage glaucoma and preserve vision. First-line therapy typically involves prescription eye drops that either reduce aqueous humor production or improve drainage, including prostaglandin analogs, beta blockers, alpha-adrenergic agonists, and carbonic anhydrase inhibitors. When medications alone aren't sufficient, we offer laser treatments such as selective laser trabeculoplasty (SLT) for open-angle glaucoma, which improves fluid drainage, and laser peripheral iridotomy (LPI) for angle-closure glaucoma, which creates a small opening to facilitate fluid flow. For advanced cases or when other treatments haven't achieved adequate pressure control, surgical options including trabeculectomy, drainage implants, and minimally invasive glaucoma surgery (MIGS) procedures may be recommended. Our approach is always conservative yet effective, starting with the least invasive options and progressing only when necessary to protect your vision while minimizing treatment burden and side effects.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Glaucoma Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our eye care specialists are board-certified professionals with extensive training in glaucoma diagnosis and management. We stay current with the latest research, treatment advances, and technology to provide you with the highest standard of care based on the most recent clinical evidence and best practices in ophthalmology.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We recognize that every patient's glaucoma is unique, with different risk factors, progression rates, and treatment responses. Your care plan is tailored specifically to your needs, lifestyle, and goals, with treatment adjustments made based on your individual response and any changes in your condition over time.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Access Options</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                While comprehensive glaucoma examinations require in-person visits for testing and evaluation, we offer telehealth consultations for follow-up appointments, medication management discussions, treatment planning, and answering questions between regular check-ups, making it easier to stay on track with your care from the comfort of home.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Advanced Technology & Experience</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We utilize state-of-the-art diagnostic equipment including OCT imaging, automated visual field testing, and digital optic nerve photography to detect even subtle changes in your condition. Our experience managing hundreds of glaucoma patients means we can recognize progression early and intervene promptly to preserve your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Your initial appointment is comprehensive and typically lasts 60-90 minutes. We'll conduct a complete eye examination including pressure measurements, visual field testing, optic nerve evaluation, and imaging studies. You'll receive a thorough explanation of your diagnosis, the extent of any existing damage, your risk factors, and recommended treatment options. We'll answer all your questions and, if medication is prescribed, provide detailed instructions for proper use.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Most patients begin with prescription eye drops used once or twice daily to lower intraocular pressure. It takes several weeks for these medications to reach their full effect. During this period, you'll learn the proper technique for administering eye drops, understand potential side effects to watch for, and establish a routine that ensures consistent medication use. If you experience any difficulties or side effects, contact us immediately so we can make adjustments.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Follow-up appointments occur every 4-12 weeks initially, depending on the severity of your glaucoma and how well your pressure is controlled. We'll measure your eye pressure, check for medication side effects, and assess your optic nerve. If your target pressure isn't being achieved, we may add a second medication, increase the dosage, recommend laser treatment, or adjust your regimen. Once your pressure is stable at a safe level, monitoring intervals can be extended.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Glaucoma requires lifelong management with regular monitoring every 3-6 months for stable patients, or more frequently if there are concerns about progression. Comprehensive visual field testing and imaging are performed annually or as needed to track any changes. With consistent treatment and monitoring, most patients maintain their vision and quality of life indefinitely. The key to success is medication adherence, attending all scheduled appointments, and promptly reporting any vision changes or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Glaucoma
          </h2>
          <div className="space-y-4">
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                How long does glaucoma treatment take?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                Glaucoma treatment is lifelong, not temporary. This is a chronic condition that requires ongoing management to prevent progression and preserve vision. However, with consistent treatment, most patients maintain stable vision for decades. Daily eye drops take just a few seconds to administer, and once your pressure is controlled, monitoring appointments occur every 3-6 months. While the commitment is permanent, the time investment is minimal compared to the benefit of preserving your sight.
              </div>
            </details>
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Is medication always required for glaucoma?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                For most glaucoma patients, medication is the first-line treatment and is often sufficient to control eye pressure when used consistently. Prescription eye drops work by either reducing fluid production in the eye or improving drainage. Some patients may eventually benefit from laser treatment or surgery, which can reduce or eliminate the need for daily medications. However, even after procedures, many patients still need at least one medication to maintain safe pressure levels. The specific treatment you need depends on your type of glaucoma, severity, and how well your pressure responds to different interventions.
              </div>
            </details>
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover glaucoma treatment in Kyle?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                Most health insurance plans, including Medicare, cover glaucoma diagnosis, treatment, and monitoring because it's a medical condition that threatens vision. Coverage typically includes comprehensive eye examinations, diagnostic testing, prescription medications, laser procedures, and surgical interventions when medically necessary. We accept most major insurance plans and will verify your benefits before treatment begins. Our staff can help you understand your coverage, estimated out-of-pocket costs, and payment options for any services not fully covered by insurance.
              </div>
            </details>
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                What if my glaucoma treatment isn't working?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                If your eye pressure remains elevated despite medication, or if your visual field tests show progression, we have several options to intensify treatment. We can add additional eye drops (many patients use 2-3 different medications), switch to more potent medications, recommend selective laser trabeculoplasty to improve drainage, or discuss surgical options for more advanced cases. It's crucial to continue all scheduled monitoring appointments and report any vision changes immediately so we can detect inadequate pressure control early and adjust your treatment before significant additional damage occurs. Most patients achieve good pressure control with the right combination of treatments.
              </div>
            </details>
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can I use telehealth for glaucoma appointments?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                Telehealth can be useful for certain aspects of glaucoma care, including discussing test results, reviewing treatment plans, addressing medication side effects or adherence challenges, and answering questions between in-person visits. However, comprehensive glaucoma management requires regular in-person appointments for essential testing that cannot be done remotely, including eye pressure measurement, visual field testing, optic nerve examination, and OCT imaging. We typically recommend a hybrid approach with in-person visits for testing and monitoring every 3-6 months, supplemented by telehealth consultations as needed for medication management and support.
              </div>
            </details>
            <details className="border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="bg-[var(--color-cream)] px-6 py-4 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can glaucoma be prevented or reversed?
              </summary>
              <div className="px-6 py-4 text-[var(--color-ink)] leading-relaxed">
                Unfortunately, glaucoma cannot be prevented in most cases, and vision loss that has already occurred cannot be reversed. However, early detection through regular comprehensive eye examinations allows treatment to begin before significant damage occurs. With proper treatment, the vast majority of patients can prevent further vision loss and maintain functional vision throughout their lives. This is why we emphasize the importance of consistent medication use, regular monitoring appointments, and lifestyle factors that support eye health such as maintaining healthy blood pressure, protecting eyes from injury, and avoiding smoking. The earlier glaucoma is detected and treated, the better the long-term visual outcome.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Cataracts</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Clouding of the eye's natural lens causing blurred vision, often occurring alongside glaucoma in older adults.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Diabetes-related eye damage affecting blood vessels in the retina, requiring similar careful monitoring.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/macular-degeneration" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Progressive deterioration of the macula causing central vision loss, another leading cause of vision impairment.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
            Get Help for Glaucoma Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            You don't have to face glaucoma alone. Our team is ready to help you preserve your vision and maintain your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Your Evaluation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}