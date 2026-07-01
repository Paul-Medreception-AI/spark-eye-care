import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Normal Tension Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert Normal Tension Glaucoma treatment in Kyle. Board-certified ophthalmologists specializing in NTG diagnosis, monitoring, and advanced treatment options. Schedule your comprehensive evaluation today.',
  keywords: 'normal tension glaucoma treatment Kyle, NTG Kyle TX, low pressure glaucoma, glaucoma specialist Kyle, eye pressure treatment, optic nerve damage Kyle',
  openGraph: {
    title: 'Normal Tension Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert Normal Tension Glaucoma treatment in Kyle. Comprehensive evaluation and personalized treatment plans.',
    url: 'https://sparkeyetx.com/conditions/normal-tension-glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function NormalTensionGlaucomaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Normal Tension Glaucoma</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Normal Tension Glaucoma Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl">
            Normal tension glaucoma occurs when the optic nerve is damaged despite eye pressure remaining within normal ranges, making early detection and specialized treatment essential. At Spark Eye Care, we provide comprehensive evaluation, advanced monitoring technology, and personalized treatment plans to preserve your vision and prevent progression of this challenging condition.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Normal Tension Glaucoma
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Normal tension glaucoma (NTG), also called low-tension or normal-pressure glaucoma, is a form of open-angle glaucoma where characteristic optic nerve damage and vision loss occur despite intraocular pressure (IOP) measurements consistently remaining in the statistically normal range (below 21 mmHg). This condition accounts for approximately one-third of all open-angle glaucoma cases in the United States and up to 90% of glaucoma cases in certain Asian populations. NTG is particularly insidious because patients and even some healthcare providers may assume that normal eye pressure readings mean glaucoma isn't possible, leading to delayed diagnosis and treatment. The condition typically progresses slowly but can result in significant peripheral vision loss and, if left untreated, eventually affect central vision and daily activities like reading, driving, and recognizing faces.
            </p>
            <p>
              The exact mechanisms behind normal tension glaucoma remain an active area of research, but several factors are believed to contribute to optic nerve vulnerability despite normal eye pressure. Vascular insufficiency—reduced blood flow to the optic nerve head—is thought to play a central role, potentially caused by systemic conditions like low blood pressure (especially nocturnal hypotension), vasospasm, or cardiovascular disease. Other risk factors include age (most common after 60), family history of any type of glaucoma, Japanese ancestry, female gender, migraine headaches, Raynaud's phenomenon, sleep apnea, and a history of significant blood loss or cardiovascular events. The optic nerve in NTG patients may also have an inherently lower threshold for pressure-related damage, or there may be biomechanical factors in the structure of the optic nerve head and surrounding tissues that make it more susceptible to injury at pressures that would be well-tolerated by others.
            </p>
            <p>
              Professional diagnosis and treatment of normal tension glaucoma is critical because the condition cannot be detected through routine vision tests or standard eye pressure checks alone—it requires comprehensive optic nerve evaluation, visual field testing, and often advanced imaging of the optic nerve structure. Unlike high-pressure glaucoma where the treatment target is obvious, managing NTG involves identifying your individual risk factors, establishing a baseline of optic nerve health and visual function, and implementing a treatment strategy that addresses both pressure reduction and vascular health. Without specialized care, the gradual progression of NTG can go unnoticed until substantial irreversible vision loss has occurred. Our team at Spark Eye Care has the diagnostic technology, clinical expertise, and individualized treatment approach necessary to detect NTG early, monitor it carefully, and implement interventions that preserve your vision for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Normal Tension Glaucoma
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Visual & Functional Changes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Peripheral Vision Loss</div>
                    <p className="text-[var(--color-muted)]">Gradual loss of side vision that often goes unnoticed until advanced, sometimes described as tunnel vision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty with Contrast</div>
                    <p className="text-[var(--color-muted)]">Trouble distinguishing objects in low light or seeing subtle differences in shading and depth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Patchy Blind Spots</div>
                    <p className="text-[var(--color-muted)]">Areas of missing vision in the peripheral or central visual field that may initially be subtle or intermittent.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Bumping into Objects</div>
                    <p className="text-[var(--color-muted)]">Frequently hitting doorframes, furniture, or not noticing people or objects approaching from the side.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty Driving at Night</div>
                    <p className="text-[var(--color-muted)]">Increased challenges with night driving due to reduced peripheral awareness and contrast sensitivity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Reading Difficulties</div>
                    <p className="text-[var(--color-muted)]">In advanced cases, trouble with reading speed or losing place on the page due to central visual field involvement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">No Pain or Redness</div>
                    <p className="text-[var(--color-muted)]">Unlike acute glaucoma, NTG typically causes no eye pain, redness, or obvious symptoms, making regular screening essential.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Risk Factors & Associated Conditions</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Family History of Glaucoma</div>
                    <p className="text-[var(--color-muted)]">Having a parent or sibling with any type of glaucoma significantly increases your risk of developing NTG.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Cardiovascular Disease</div>
                    <p className="text-[var(--color-muted)]">History of heart disease, stroke, irregular heartbeat, or poor circulation that may affect optic nerve blood flow.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Low Blood Pressure</div>
                    <p className="text-[var(--color-muted)]">Chronic hypotension, especially at night, may reduce perfusion pressure to the optic nerve head.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Migraine Headaches</div>
                    <p className="text-[var(--color-muted)]">Frequent migraines, particularly with visual aura, are associated with increased NTG risk due to vascular factors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Sleep Apnea</div>
                    <p className="text-[var(--color-muted)]">Obstructive sleep apnea may contribute to optic nerve damage through intermittent oxygen deprivation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Raynaud's Phenomenon</div>
                    <p className="text-[var(--color-muted)]">Vasospastic conditions affecting fingers and toes suggest similar vascular dysregulation may affect the optic nerve.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Asian or Japanese Ancestry</div>
                    <p className="text-[var(--color-muted)]">NTG is significantly more prevalent in certain ethnic populations, particularly those of Japanese descent.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Age Over 60</div>
                    <p className="text-[var(--color-muted)]">Risk increases with age, with most NTG cases diagnosed in individuals over 60 years old.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              If you recognize these signs or have multiple risk factors, help is available. Early detection and treatment of normal tension glaucoma leads to significantly better outcomes and vision preservation. Schedule a comprehensive eye evaluation today.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Normal Tension Glaucoma
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with detailed medical and family history, followed by precise intraocular pressure measurements at different times of day, comprehensive dilated optic nerve examination, and baseline visual field testing. We utilize advanced imaging technology including optical coherence tomography (OCT) to measure retinal nerve fiber layer thickness and assess optic nerve head structure with microscopic precision, establishing a baseline for future comparison and progression monitoring.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Individualized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific risk factors, degree of optic nerve damage, and baseline pressure measurements, we develop a customized treatment strategy. For many NTG patients, this includes pressure-lowering eye drops targeting a 30% reduction from baseline, even though pressure is already in the normal range. We also address systemic factors by coordinating with your primary care physician regarding blood pressure management, sleep apnea treatment, and cardiovascular health optimization to improve optic nerve perfusion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                NTG requires vigilant long-term monitoring to detect any progression and adjust treatment accordingly. You'll have regular follow-up appointments including visual field testing every 3-6 months initially, OCT imaging to track structural changes, and pressure checks to ensure target IOP is being maintained. If progression is detected despite treatment, we discuss advanced options including laser trabeculoplasty or surgical interventions like trabeculectomy to achieve greater pressure reduction and vision preservation.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based treatment approach for normal tension glaucoma combines several therapeutic modalities tailored to each patient's needs. Topical prostaglandin analogs (latanoprost, travoprost, bimatoprost) are often first-line medications due to their once-daily dosing, excellent efficacy, and potential neuroprotective effects beyond pressure lowering. Beta-blockers (timolol, betaxolol) and alpha-agonists (brimonidine) may be added for additional pressure reduction, while carbonic anhydrase inhibitors can serve as adjunctive therapy. For patients who cannot tolerate medications or require greater pressure reduction, selective laser trabeculoplasty (SLT) offers a non-invasive option to improve aqueous outflow. We also emphasize lifestyle modifications including regular cardiovascular exercise, avoiding extreme head-down positions during yoga or exercise, managing sleep position to avoid excessive pressure on the eye, and optimizing treatment of systemic conditions like sleep apnea that may compromise optic nerve blood flow. Throughout your care, we maintain close communication with your other healthcare providers to ensure a coordinated, comprehensive approach to preserving your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Normal Tension Glaucoma Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our ophthalmologists are board-certified with specialized training in glaucoma diagnosis and management, utilizing the latest diagnostic technology and treatment protocols.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every NTG patient is unique, tailoring treatment plans to your specific risk factors, lifestyle, medical history, and treatment goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice features state-of-the-art OCT imaging, visual field testing, and optic nerve analysis equipment for precise diagnosis and monitoring of disease progression.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Long-Term Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We provide coordinated, continuous care throughout your treatment journey, with systematic monitoring protocols and prompt intervention if progression is detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">First Evaluation — Week 1</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive evaluation includes detailed medical history review, multiple intraocular pressure measurements, dilated optic nerve examination, baseline visual field testing, and OCT imaging of the optic nerve and retinal nerve fiber layer. We'll also discuss your systemic risk factors including blood pressure patterns, cardiovascular health, sleep quality, and family history. This appointment typically takes 90-120 minutes and establishes the foundation for your personalized treatment plan.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Treatment Begins — Weeks 2-4</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most patients begin with one or two pressure-lowering eye drops, typically starting with a prostaglandin analog applied once daily in the evening. We'll provide detailed instructions on proper administration technique and potential side effects to watch for. You'll also receive guidance on lifestyle modifications and coordination with your primary care physician for systemic risk factor management. A follow-up visit at 3-4 weeks checks your pressure response to medication and ensures you're tolerating treatment well without significant side effects.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Progress Review — Months 2-3</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your 2-3 month follow-up, we reassess your intraocular pressure to confirm we're achieving target reduction (typically 30% below baseline), repeat visual field testing to ensure stability, and may perform follow-up OCT imaging. If pressure goals aren't being met or you're experiencing medication side effects, we'll adjust your treatment plan by adding medications, changing medication classes, or discussing laser treatment options. Most patients find a regimen that works well during this phase, though finding the optimal treatment may require patience and adjustment.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Management — Ongoing</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Normal tension glaucoma requires lifelong monitoring and treatment. Once stable, most patients are seen every 3-6 months for pressure checks, visual field testing, and optic nerve evaluation. Annual OCT imaging tracks structural changes over time. The key to successful management is consistent medication use, regular monitoring appointments, and prompt communication if you notice any vision changes. With diligent treatment and monitoring, the vast majority of NTG patients maintain functional vision throughout their lifetime. We're partners in your long-term eye health, providing education, support, and expert care every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Normal Tension Glaucoma
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                How long does treatment for normal tension glaucoma take?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Normal tension glaucoma is a chronic, lifelong condition that requires ongoing treatment and monitoring indefinitely. While this may sound daunting, the daily reality for most patients is simply applying one or two eye drops each day and attending regular monitoring appointments every 3-6 months. Treatment doesn't "cure" NTG, but it effectively prevents progression and preserves vision. Most patients achieve stable pressure control within the first 2-3 months of starting treatment, and with consistent medication use and regular monitoring, vision can be maintained for a lifetime. Think of it like managing high blood pressure or high cholesterol—it's a long-term commitment, but the daily burden is minimal and the benefits are substantial.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                Will I definitely need to take eye drops, or are there other options?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                For most patients with normal tension glaucoma, pressure-lowering eye drops are the first-line treatment and remain the mainstay of therapy. However, there are alternatives if you cannot tolerate drops or need additional pressure reduction. Selective laser trabeculoplasty (SLT) is an in-office laser procedure that can lower pressure by 20-30% without daily medications, though its effects typically last 2-5 years before retreatment may be needed. For patients with progressive vision loss despite maximum medical therapy, surgical options like trabeculectomy or minimally invasive glaucoma surgery (MIGS) can achieve greater pressure reduction. Additionally, addressing systemic factors—optimizing blood pressure management, treating sleep apnea, improving cardiovascular health—is an important complementary approach that may help slow progression even without dramatic pressure reduction.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                Does insurance cover normal tension glaucoma treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, normal tension glaucoma treatment is considered medically necessary and is covered by virtually all medical insurance plans, including Medicare. This includes diagnostic testing (visual fields, OCT imaging), office visits with your ophthalmologist, and both generic and brand-name glaucoma medications. Prior authorization may be required for some newer brand-name medications, but generic alternatives are usually readily available and covered with standard copays. Laser procedures and glaucoma surgeries are also covered when medically indicated. Your out-of-pocket costs will depend on your specific insurance plan's deductibles and copayments. Our billing team is experienced in working with insurance companies to maximize your coverage and can provide cost estimates before treatment begins.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                What if my vision continues to worsen despite treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If progression is detected on visual field testing or OCT imaging despite treatment, we take a systematic approach to optimize your care. First, we verify medication adherence and proper drop administration technique, as inconsistent use is a common cause of apparent treatment failure. Next, we assess whether target pressure is being achieved—if not, we intensify medical therapy with additional drops or consider laser trabeculoplasty. We also evaluate and optimize systemic factors including blood pressure management (avoiding both hypertension and nocturnal hypotension), sleep apnea treatment, and cardiovascular health. If progression continues despite maximized medical therapy and target pressure achievement, surgical options provide greater pressure reduction and may slow or halt further vision loss. Some patients have more aggressive disease that's challenging to control, but with persistent, individualized management adjustments, the vast majority achieve stability and preserve functional vision for daily activities.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                Can I do any of my follow-up appointments via telehealth?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While normal tension glaucoma monitoring requires regular in-person examinations for pressure measurement, visual field testing, and optic nerve evaluation, telehealth can play a supportive role in your care. Medication review appointments, discussions about side effects, education about your condition and treatment options, and coordination with your primary care physician regarding systemic risk factors can often be conducted via secure video visits. Some patients alternate between in-person monitoring visits and telehealth check-ins, particularly if they're stable on treatment and live far from our office. However, the core monitoring appointments—typically every 3-6 months—need to be in-person to properly assess disease status and detect any progression. We're happy to discuss a hybrid approach that balances thorough monitoring with convenience based on your individual circumstances and disease stability.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors flex justify-between items-center">
                Will I go blind from normal tension glaucoma?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The vast majority of patients with normal tension glaucoma who are diagnosed early and receive consistent treatment maintain functional vision for their entire lives and never experience severe vision loss or blindness. NTG typically progresses slowly, and effective treatment can slow progression dramatically or stop it entirely. Studies show that with appropriate treatment, fewer than 10% of NTG patients progress to legal blindness in the better-seeing eye over their lifetime. The keys to preserving vision are early detection, consistent use of prescribed medications, regular monitoring appointments to detect any progression, and prompt treatment adjustments when needed. Even patients who have experienced some vision loss at diagnosis can stabilize with treatment and maintain sufficient vision for driving, reading, and independent living. Your prognosis is best when you partner actively in your care—using drops as prescribed, attending all monitoring appointments, communicating about any changes in your vision, and maintaining good overall health. We're committed to helping you preserve your vision for the long term.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/glaucoma" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Primary Open-Angle Glaucoma
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                The most common form of glaucoma, characterized by gradual pressure elevation and optic nerve damage requiring early detection and treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/macular-degeneration" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Age-Related Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Progressive deterioration of the central retina affecting detailed vision, requiring monitoring and treatment to slow progression.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/diabetic-retinopathy" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Diabetes-related retinal damage that can lead to vision loss, requiring regular screening and timely intervention to preserve sight.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-4">
            Get Help for Normal Tension Glaucoma Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            You don't have to face Normal Tension Glaucoma alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-md font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors inline-block"
            >
              Schedule Your Evaluation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}