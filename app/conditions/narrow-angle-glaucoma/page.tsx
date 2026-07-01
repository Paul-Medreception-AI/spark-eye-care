import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Narrow Angle Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert narrow angle glaucoma treatment in Kyle. Board-certified care for acute and chronic angle-closure glaucoma. Same-day emergency appointments available.',
  keywords: 'narrow angle glaucoma treatment Kyle, angle-closure glaucoma Kyle, glaucoma specialist Kyle, eye pressure treatment Kyle, laser iridotomy Kyle',
  openGraph: {
    title: 'Narrow Angle Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert narrow angle glaucoma treatment in Kyle. Board-certified care for acute and chronic angle-closure glaucoma.',
    url: 'https://sparkeyetx.com/conditions/narrow-angle-glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function NarrowAngleGlaucomaPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Narrow Angle Glaucoma</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Narrow Angle Glaucoma Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Narrow angle glaucoma is a serious eye condition that requires immediate attention to prevent vision loss. At Spark Eye Care, we provide comprehensive diagnosis, emergency treatment, and ongoing management to protect your sight and preserve your quality of life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748707.jpeg"
                alt="Narrow-angle glaucoma"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Narrow Angle Glaucoma
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Narrow angle glaucoma, also known as angle-closure glaucoma, occurs when the drainage angle between the iris and cornea becomes too narrow or completely blocked, causing a rapid or gradual increase in intraocular pressure. This condition affects approximately 500,000 Americans annually, with certain populations including individuals of Asian descent, those over age 60, and women being at higher risk. Unlike open-angle glaucoma which develops slowly, narrow angle glaucoma can present as a medical emergency requiring immediate intervention to prevent permanent vision loss. The condition can significantly impact daily activities, causing severe eye pain, blurred vision, halos around lights, and in acute cases, nausea and vomiting that can be debilitating enough to interfere with work, driving, and normal life functioning.
            </p>
            <p>
              The anatomical cause of narrow angle glaucoma involves the physical structure of the eye, particularly when the iris is positioned too close to the drainage angle. Risk factors include being farsighted (hyperopic), having a naturally shallow anterior chamber, family history of the condition, certain medications that dilate the pupil, and age-related changes that cause the lens to thicken and push the iris forward. Acute angle-closure attacks can be triggered by situations that cause pupil dilation, such as entering a dark room, stress, certain medications including antihistamines and decongestants, or even spending prolonged time in dim lighting. Chronic narrow angle glaucoma develops more gradually as the drainage angle becomes progressively narrower over time, often without obvious symptoms until significant damage has occurred.
            </p>
            <p>
              Professional treatment for narrow angle glaucoma is absolutely essential because untreated acute attacks can cause irreversible optic nerve damage within hours, and chronic narrow angles can lead to permanent vision loss over time. Many patients delay seeking care because they don't recognize the symptoms or hope they will resolve on their own, but this delay can result in preventable blindness. At Spark Eye Care in Kyle, we utilize advanced diagnostic technology including gonioscopy to examine the drainage angle, optical coherence tomography to assess anterior chamber depth, and tonometry to measure eye pressure accurately. Early detection through comprehensive eye examinations allows us to identify narrow angles before they cause an acute attack, enabling preventive treatment that can preserve vision. Our evidence-based approach combines medical management, laser procedures when indicated, and surgical intervention for advanced cases, all tailored to your specific anatomical features and risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Narrow Angle Glaucoma
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Acute Symptoms (Emergency)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Severe Eye Pain</p>
                    <p className="text-[var(--color-muted)]">Sudden, intense pain in one eye that may feel like pressure or throbbing, often described as the worst eye pain ever experienced.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred or Hazy Vision</p>
                    <p className="text-[var(--color-muted)]">Rapid onset of cloudy, foggy, or significantly decreased vision that doesn't improve with blinking or rubbing the eye.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Halos Around Lights</p>
                    <p className="text-[var(--color-muted)]">Seeing rainbow-colored rings or circles around lights, particularly noticeable at night or in low-light conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Red Eye</p>
                    <p className="text-[var(--color-muted)]">Marked redness of the white part of the eye due to increased blood vessel congestion from elevated pressure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Nausea and Vomiting</p>
                    <p className="text-[var(--color-muted)]">Stomach upset that accompanies the eye pain, often severe enough that patients may initially think they have a gastrointestinal illness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Headache</p>
                    <p className="text-[var(--color-muted)]">Severe headache on the same side as the affected eye, often accompanied by forehead or brow pain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fixed, Mid-Dilated Pupil</p>
                    <p className="text-[var(--color-muted)]">The pupil appears moderately dilated and doesn't respond normally to light, often appearing oval or irregular in shape.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Chronic/Warning Signs</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Intermittent Eye Discomfort</p>
                    <p className="text-[var(--color-muted)]">Recurring episodes of mild eye pain or pressure that resolve on their own, often occurring in the evening or after pupil dilation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Temporary Vision Changes</p>
                    <p className="text-[var(--color-muted)]">Brief episodes of blurred vision or seeing halos that come and go, particularly in dim lighting or when pupils are dilated.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Peripheral Vision Loss</p>
                    <p className="text-[var(--color-muted)]">Gradual narrowing of side vision that develops slowly over time as chronic pressure damages the optic nerve.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Light Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Increased discomfort in bright light or difficulty adjusting when moving between different lighting conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Redness Episodes</p>
                    <p className="text-[var(--color-muted)]">Recurring periods of eye redness that may be accompanied by mild discomfort and resolve within hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frontal Headaches</p>
                    <p className="text-[var(--color-muted)]">Recurring headaches over the brow or forehead area, particularly in the evening or after activities that cause pupil dilation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Seeing in Dark</p>
                    <p className="text-[var(--color-muted)]">Increasing trouble with night vision or adapting to low-light environments like movie theaters or dimly lit restaurants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. <strong>Acute symptoms require immediate emergency care to prevent permanent vision loss.</strong>
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Narrow Angle Glaucoma
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with detailed diagnostic testing including gonioscopy to directly visualize your drainage angle, optical coherence tomography to measure anterior chamber depth and angle anatomy, and tonometry to accurately measure intraocular pressure. We evaluate your complete medical history, current medications, and risk factors to determine your immediate treatment needs and long-term management strategy. For acute cases, we provide same-day emergency evaluation and treatment to prevent vision loss.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific anatomy and condition severity, we develop an individualized treatment approach that may include immediate pressure-lowering medications, laser peripheral iridotomy to create a bypass drainage opening, or surgical intervention for advanced cases. We coordinate closely with glaucoma specialists when needed and explain each treatment option thoroughly, including expected outcomes, potential risks, and recovery timeline. Your treatment plan addresses both the affected eye and preventive measures for the fellow eye if narrow angles are present bilaterally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Following treatment, we provide structured follow-up care with regular pressure checks, visual field testing to monitor for optic nerve damage, and angle assessments to ensure treatment effectiveness. We adjust medications as needed, monitor for potential complications, and provide education about lifestyle modifications and triggers to avoid. Long-term management includes annual comprehensive examinations, ongoing pressure monitoring, and prompt intervention if pressure elevation recurs, ensuring your vision remains protected for life.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-4">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach utilizes proven interventions backed by extensive clinical research. For acute angle-closure attacks, we employ immediate medical therapy including topical and oral pressure-lowering medications such as beta-blockers, alpha-agonists, carbonic anhydrase inhibitors, and hyperosmotic agents to rapidly reduce intraocular pressure and prevent optic nerve damage. Topical pilocarpine helps constrict the pupil and pull the iris away from the drainage angle.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              The definitive treatment for narrow angle glaucoma is laser peripheral iridotomy, a procedure that creates a small opening in the iris to allow aqueous fluid to bypass the narrow drainage angle. This outpatient procedure takes only minutes and has a success rate exceeding 90% in preventing future acute attacks. For patients with plateau iris configuration or those who don't respond adequately to iridotomy, we may recommend laser iridoplasty or surgical options including lens extraction or trabeculectomy. We also provide prophylactic laser treatment to the fellow eye when anatomically narrow angles are present, preventing bilateral disease and preserving vision in both eyes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Narrow Angle Glaucoma Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our providers are board-certified with specialized training in glaucoma diagnosis and management, ensuring you receive expert care based on the latest clinical guidelines and treatment protocols.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's anatomy and risk factors are unique. Your treatment plan is customized to your specific condition, lifestyle needs, and vision goals, not a one-size-fits-all protocol.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Advanced Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize state-of-the-art diagnostic equipment including optical coherence tomography and gonioscopy to accurately assess drainage angles and anterior chamber anatomy for precise treatment planning.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Emergency Availability</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that acute angle-closure glaucoma is a medical emergency. We offer same-day appointments for urgent cases and coordinate immediate care to prevent vision loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">First Evaluation (Day 1 or Emergency Visit)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit includes comprehensive eye examination with specialized testing to assess drainage angles, measure intraocular pressure, and evaluate optic nerve health. For acute cases, we provide immediate pressure-lowering treatment and coordinate urgent laser therapy or surgical consultation. For chronic narrow angles or at-risk patients, we discuss preventive treatment options and schedule procedures as appropriate. You'll receive a clear diagnosis, understand your risk level, and leave with a specific treatment plan tailored to your condition.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Treatment Begins (Days 1-7)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For most patients, laser peripheral iridotomy is performed within days of diagnosis, either as emergency treatment or scheduled preventive procedure. The laser treatment takes 10-15 minutes in our office with topical anesthesia, creating a small opening in the iris to permanently improve fluid drainage. You may experience mild discomfort, light sensitivity, and blurred vision for 1-2 days following the procedure. Prescription anti-inflammatory drops are used for several days to minimize inflammation. Follow-up examination within one week confirms treatment success and pressure normalization.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Progress Review (Weeks 2-6)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Additional follow-up visits monitor treatment effectiveness, ensure pressure remains controlled, and assess for any complications. If you had an acute attack, we typically recommend prophylactic treatment of the fellow eye to prevent bilateral disease. For patients with residual pressure elevation or complex cases, we may adjust medications or discuss additional treatment options including surgical intervention. Most patients experience significant improvement in symptoms and pressure control by this stage, with return to normal activities and reduced anxiety about vision loss.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Successful treatment doesn't mean you can forget about glaucoma—ongoing monitoring is essential to detect any changes early. We recommend annual comprehensive eye examinations including pressure measurement, visual field testing, and optic nerve evaluation to ensure long-term vision preservation. We educate you about warning signs that require immediate attention, medications to avoid that may trigger angle closure, and lifestyle strategies to maintain eye health. With proper treatment and monitoring, the vast majority of narrow angle glaucoma patients maintain excellent vision throughout their lives and avoid the complications of untreated disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Narrow Angle Glaucoma
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                What is the difference between narrow angle glaucoma and regular glaucoma?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The main difference lies in the drainage angle anatomy and how pressure increases. Open-angle glaucoma (the most common type) occurs when the drainage angle is anatomically open but the trabecular meshwork becomes clogged over time, causing gradual pressure elevation with few symptoms. Narrow angle glaucoma occurs when the iris is positioned too close to the drainage angle, physically blocking fluid outflow and causing rapid or intermittent pressure spikes. Narrow angle glaucoma can cause acute attacks with severe symptoms requiring emergency treatment, while open-angle glaucoma typically progresses slowly without obvious symptoms until advanced stages. Both types can cause permanent vision loss if untreated, but the treatment approaches differ significantly.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                How long does treatment take and will I need surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The primary treatment for narrow angle glaucoma is laser peripheral iridotomy, a quick in-office procedure that takes 10-15 minutes per eye and provides a permanent solution for most patients. This laser treatment creates a small opening in the iris that allows aqueous fluid to bypass the narrow drainage angle, preventing future attacks. Recovery is typically 1-2 days with minimal discomfort. Traditional surgery is rarely needed for narrow angle glaucoma unless the laser treatment fails, pressure remains elevated despite treatment, or significant optic nerve damage has occurred. Some patients with very thick iris tissue or plateau iris configuration may require additional laser treatment or surgical intervention, but over 90% of patients are successfully treated with laser alone. The fellow eye is often treated prophylactically to prevent bilateral disease.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                Will I need to take medication long-term?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many patients do not require long-term glaucoma medications after successful laser iridotomy, as the procedure permanently addresses the anatomical problem causing angle closure. However, medication needs depend on several factors including whether optic nerve damage occurred before treatment, whether residual pressure elevation persists after laser, and whether you have concurrent open-angle glaucoma. If you experienced an acute attack with optic nerve damage, you may need ongoing pressure-lowering medications to prevent further damage. Short-term anti-inflammatory drops are used for several days after laser treatment to minimize inflammation. Your provider will determine your specific medication needs based on post-treatment pressure measurements, optic nerve health, and visual field testing results during follow-up visits.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                Does insurance cover narrow angle glaucoma treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, narrow angle glaucoma treatment is considered medically necessary and is covered by most insurance plans including Medicare, Medicaid, and private insurance. Laser peripheral iridotomy is a standard, FDA-approved procedure covered by insurance when medically indicated. Diagnostic testing including gonioscopy, optical coherence tomography, and visual field testing are also typically covered. Your specific out-of-pocket costs depend on your insurance plan's deductibles, copayments, and coinsurance requirements. We participate with most major insurance plans and our billing staff will verify your coverage and provide cost estimates before treatment. For patients without insurance or with high deductibles, we offer payment plans to make necessary treatment accessible and prevent vision loss from delayed care.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                Can I prevent narrow angle glaucoma or is it hereditary?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Narrow angle glaucoma has a genetic component—if a family member has been diagnosed, your risk is increased. The anatomical factors that predispose to narrow angles (shallow anterior chamber, thick lens, small eye size) are inherited traits. However, having narrow angles doesn't mean you'll definitely develop angle-closure glaucoma. Regular comprehensive eye examinations allow early detection of narrow angles before acute attacks occur, and preventive laser iridotomy can permanently eliminate the risk of angle closure in high-risk eyes. You cannot change your eye anatomy through lifestyle modifications, but avoiding medications that dilate the pupil (certain antihistamines, decongestants, antidepressants), being aware of warning symptoms, and getting regular eye examinations can prevent vision loss. If you have family history or risk factors, inform your eye doctor so appropriate screening can be performed.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-dark)]">
                Can narrow angle glaucoma be managed with telehealth visits?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Initial diagnosis and laser treatment of narrow angle glaucoma require in-person examination because we must directly visualize the drainage angle with specialized equipment, measure intraocular pressure, and perform laser procedures. However, telehealth can play a valuable role in ongoing management for certain follow-up needs. After successful treatment, telehealth visits can be used for medication management discussions, reviewing symptoms, assessing recovery after procedures, and addressing questions or concerns. We may also use telehealth for education about warning signs, medication side effects, and lifestyle modifications. Acute symptoms suggesting an angle-closure attack require immediate in-person emergency evaluation—telehealth is not appropriate for urgent or emergent situations. We offer flexible scheduling combining in-person and telehealth visits based on your specific treatment stage and monitoring needs.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/open-angle-glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Open-Angle Glaucoma</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                The most common form of glaucoma causing gradual vision loss through trabecular meshwork dysfunction and elevated intraocular pressure.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Cataracts</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Clouding of the natural lens causing blurred vision. Cataract surgery can also widen drainage angles and help manage narrow angle glaucoma.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-3">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Diabetes-related eye disease that can coexist with glaucoma, requiring coordinated management to preserve vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Narrow Angle Glaucoma Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            You don't have to face narrow angle glaucoma alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Emergency cases: Call immediately if experiencing severe eye pain, vision changes, or nausea with eye symptoms
          </p>
        </div>
      </section>

    </main>
  )
}