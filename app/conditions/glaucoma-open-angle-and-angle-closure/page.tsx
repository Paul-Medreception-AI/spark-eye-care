import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Glaucoma (Open-Angle and Angle-Closure) Treatment in Kyle | Spark Eye Care',
  description: 'Expert glaucoma treatment in Kyle. Comprehensive care for open-angle and angle-closure glaucoma with advanced diagnostics and personalized treatment plans.',
  keywords: 'glaucoma treatment Kyle, open-angle glaucoma, angle-closure glaucoma, eye pressure, optic nerve damage, glaucoma specialist Kyle',
}

export default function GlaucomaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Glaucoma (Open-Angle and Angle-Closure)</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Glaucoma (Open-Angle and Angle-Closure) Treatment in Kyle
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl">
            Glaucoma is a leading cause of irreversible vision loss, but with early detection and proper treatment, we can preserve your sight. At Spark Eye Care, we provide comprehensive management for both open-angle and angle-closure glaucoma using advanced diagnostic technology and evidence-based treatment protocols.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748707.jpeg"
                alt="Glaucoma types"
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
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Glaucoma (Open-Angle and Angle-Closure)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Glaucoma refers to a group of eye conditions that damage the optic nerve, typically caused by elevated intraocular pressure (IOP). The two most common forms are open-angle glaucoma and angle-closure glaucoma. Open-angle glaucoma, which accounts for approximately 90% of all glaucoma cases, develops gradually when the eye's drainage canals become clogged over time, causing pressure to build slowly. Angle-closure glaucoma occurs when the iris blocks the drainage angle, causing a rapid or sudden increase in eye pressure. Both types can lead to permanent vision loss if left untreated, affecting approximately 3 million Americans and over 60 million people worldwide. The impact on daily life can be profound, as glaucoma typically affects peripheral vision first, making activities like driving, reading, and recognizing faces increasingly difficult.
            </p>
            <p>
              The causes and risk factors for glaucoma vary between the two types but share common elements. Open-angle glaucoma is strongly associated with age (particularly over 60), family history, African American or Hispanic ethnicity, high intraocular pressure, thin corneas, and conditions like diabetes and cardiovascular disease. Angle-closure glaucoma risk factors include being of Asian or Inuit descent, being female, being farsighted, having a family history of the condition, and having a shallow anterior chamber in the eye. Both types can be influenced by long-term corticosteroid use, eye injuries, and certain anatomical features of the eye. Open-angle glaucoma often has no early warning signs and progresses so gradually that vision loss may not be noticed until significant damage has occurred. Angle-closure glaucoma can present as a medical emergency with sudden symptoms including severe eye pain, headache, blurred vision, rainbow halos around lights, and nausea.
            </p>
            <p>
              Professional treatment is essential because glaucoma damage is irreversible—once vision is lost, it cannot be restored. However, with early detection and consistent treatment, further vision loss can often be prevented or significantly slowed. Regular comprehensive eye examinations that include intraocular pressure measurement, optic nerve evaluation, visual field testing, and optical coherence tomography (OCT) imaging are critical for detecting glaucoma in its earliest stages. At Spark Eye Care, we use state-of-the-art diagnostic equipment to identify even subtle changes in your optic nerve and visual field, allowing us to intervene before significant vision loss occurs. Treatment is personalized based on the type and severity of glaucoma, your overall health, and your treatment preferences, with the goal of lowering eye pressure to a safe level that prevents further optic nerve damage.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Glaucoma (Open-Angle and Angle-Closure)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Open-Angle Glaucoma Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Gradual Peripheral Vision Loss</span>
                    <p className="text-[var(--color-muted)]">Often described as "tunnel vision," this typically affects both eyes and develops so slowly it may go unnoticed for years.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">No Early Symptoms</span>
                    <p className="text-[var(--color-muted)]">Most people with open-angle glaucoma experience no pain or noticeable symptoms until significant vision loss has occurred.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Patchy Blind Spots</span>
                    <p className="text-[var(--color-muted)]">Irregular areas of vision loss in the peripheral or central visual field, often in both eyes during advanced stages.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Adjusting to Darkness</span>
                    <p className="text-[var(--color-muted)]">Increased challenges seeing in low light conditions or adapting when moving from bright to dark environments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Trouble with Mobility</span>
                    <p className="text-[var(--color-muted)]">Bumping into objects, difficulty navigating stairs, or challenges judging distances due to peripheral vision loss.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Driving Difficulties</span>
                    <p className="text-[var(--color-muted)]">Missing traffic signs, not seeing vehicles approaching from the sides, or difficulty with lane changes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reading Challenges</span>
                    <p className="text-[var(--color-muted)]">In advanced stages, difficulty tracking lines of text or losing your place while reading due to central vision involvement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Angle-Closure Glaucoma Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Severe Eye Pain</span>
                    <p className="text-[var(--color-muted)]">Sudden, intense pain in one eye that may be accompanied by throbbing or aching sensations requiring immediate medical attention.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Intense Headache</span>
                    <p className="text-[var(--color-muted)]">Severe headache often concentrated on the same side as the affected eye, sometimes mistaken for a migraine.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Halos Around Lights</span>
                    <p className="text-[var(--color-muted)]">Rainbow-colored circles or halos visible around lights, especially noticeable at night or in low-light conditions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Sudden Vision Blurring</span>
                    <p className="text-[var(--color-muted)]">Rapid onset of blurred or hazy vision that cannot be cleared by blinking and may come and go initially.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Red Eye</span>
                    <p className="text-[var(--color-muted)]">Noticeable redness of the affected eye accompanied by a feeling of pressure or fullness in the eye.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Nausea and Vomiting</span>
                    <p className="text-[var(--color-muted)]">Digestive symptoms that accompany acute angle-closure attacks, often leading to misdiagnosis of other conditions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Cloudy-Appearing Cornea</span>
                    <p className="text-[var(--color-muted)]">The front surface of the eye may appear cloudy or steamy due to corneal swelling from elevated pressure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Acute angle-closure glaucoma is a medical emergency requiring immediate attention, while open-angle glaucoma benefits from early detection through regular comprehensive eye exams.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Glaucoma (Open-Angle and Angle-Closure)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation includes intraocular pressure measurement using tonometry, dilated optic nerve examination, visual field testing to map your peripheral vision, and optical coherence tomography (OCT) to assess optic nerve fiber thickness. We also evaluate your drainage angle using gonioscopy to determine whether you have open-angle or angle-closure glaucoma. This complete assessment allows us to stage your glaucoma, identify risk factors, and determine the most appropriate treatment approach for your specific situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment results, we develop a customized treatment strategy designed to lower your intraocular pressure to a safe target level. Your plan may include prescription eye drops (prostaglandin analogs, beta blockers, alpha agonists, or carbonic anhydrase inhibitors), laser treatments, or surgical intervention depending on the type and severity of your glaucoma. We carefully consider your lifestyle, ability to adhere to medication schedules, other health conditions, and treatment preferences. For angle-closure glaucoma, we may recommend preventive laser peripheral iridotomy to create a new drainage pathway and prevent future attacks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Glaucoma is a chronic condition requiring lifelong management and regular monitoring. We schedule follow-up appointments every 3-6 months (or more frequently if needed) to measure your eye pressure, assess your optic nerve for any changes, and perform periodic visual field tests to ensure the disease is not progressing. We monitor for medication side effects and adjust your treatment plan if your pressure is not adequately controlled or if you experience vision changes. Our goal is to preserve your remaining vision and maintain your quality of life through consistent, proactive care and patient education about medication adherence and lifestyle modifications.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Our treatment approach is grounded in evidence-based medicine and utilizes the latest advances in glaucoma management. Medication therapy typically begins with prostaglandin analogs (latanoprost, travoprost, bimatoprost) as first-line treatment due to their efficacy and once-daily dosing. When additional pressure reduction is needed, we may add beta-blockers (timolol), alpha-adrenergic agonists (brimonidine), or carbonic anhydrase inhibitors (dorzolamide, brinzolamide). Laser treatments include selective laser trabeculoplasty (SLT) for open-angle glaucoma, which improves drainage through the trabecular meshwork, and laser peripheral iridotomy (LPI) for angle-closure glaucoma, which creates an alternative drainage pathway. For patients who require surgical intervention, we coordinate referrals to experienced glaucoma surgeons for procedures such as trabeculectomy, tube shunt implantation, or minimally invasive glaucoma surgery (MIGS). Throughout your care, we emphasize the importance of medication adherence, as consistent use of prescribed eye drops is the most critical factor in preventing vision loss from glaucoma.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Glaucoma (Open-Angle and Angle-Closure) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)]">
                State-of-the-art OCT imaging, visual field testing, and pachymetry for accurate glaucoma detection and monitoring.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Plans</h3>
              <p className="text-[var(--color-muted)]">
                Treatment strategies tailored to your specific type of glaucoma, lifestyle, and individual pressure-lowering needs.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Convenient Access</h3>
              <p className="text-[var(--color-muted)]">
                Telehealth consultations available for medication management discussions, education, and follow-up care coordination.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Specialized Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Extensive experience managing both open-angle and angle-closure glaucoma with a focus on preserving vision long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination will take approximately 60-90 minutes and includes multiple diagnostic tests. We'll measure your intraocular pressure, examine your optic nerve after dilation, perform visual field testing to map any vision loss, and use OCT imaging to analyze your optic nerve fiber layer thickness. We'll also evaluate your drainage angle and discuss your medical history, risk factors, and any symptoms you've experienced. By the end of this visit, you'll have a clear diagnosis, understand the severity and type of your glaucoma, and receive your personalized treatment plan with detailed instructions for any prescribed medications.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll begin your prescribed medication regimen, typically starting with eye drops that need to be administered daily at the same time. Most glaucoma medications take 2-4 weeks to reach their full pressure-lowering effect, so patience during this initial phase is important. We'll provide detailed instructions on proper eye drop administration technique and discuss potential side effects to watch for. During this period, you'll learn how to incorporate your medication into your daily routine. We may schedule a brief follow-up visit or phone consultation to check on your adjustment to the medication and address any concerns or side effects you're experiencing.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we'll measure your intraocular pressure to determine how well your treatment is working and whether we've achieved your target pressure goal. We'll examine your optic nerve to look for any changes and ask about your experience with the medication, including adherence, side effects, and any challenges you've encountered. If your pressure is not adequately controlled, we may adjust your medication dosage, add a second medication, or discuss laser treatment options. If your pressure is well-controlled and stable, we'll establish an ongoing monitoring schedule, typically every 3-6 months, to ensure continued disease control.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Glaucoma requires lifelong monitoring and treatment to preserve your vision. You'll have regular check-ups every 3-6 months for pressure checks and optic nerve evaluation, with comprehensive visual field testing performed annually or more frequently if your glaucoma is progressing. We'll continue to monitor for any changes in your optic nerve appearance or visual field and adjust your treatment as needed. Many patients maintain stable vision for decades with proper treatment adherence. We'll provide ongoing education about your condition, help you optimize medication adherence, and immediately address any new symptoms or concerns. Your active participation in your care through consistent medication use and regular appointments is the key to successful long-term glaucoma management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Glaucoma (Open-Angle and Angle-Closure)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can vision lost to glaucoma be restored?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Unfortunately, vision loss from glaucoma is permanent and cannot be reversed. The optic nerve damage that causes vision loss is irreversible with current medical technology. However, this makes early detection and treatment even more critical—when glaucoma is caught early and treated consistently, further vision loss can usually be prevented or significantly slowed. This is why regular comprehensive eye exams are essential, especially for people over 60, those with a family history of glaucoma, or individuals in high-risk ethnic groups. Our goal is to preserve your remaining vision and prevent further deterioration through effective pressure-lowering treatment.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I need to use eye drops for the rest of my life?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Most patients with glaucoma do require lifelong medication use to control their eye pressure, as glaucoma is a chronic condition. However, there are alternatives if you find daily eye drops challenging. Laser trabeculoplasty (SLT) can lower pressure for several years without the need for daily drops, though the effect may diminish over time and require retreatment. Some patients eventually opt for surgical procedures that create new drainage pathways, potentially eliminating or reducing the need for daily medications. The key is finding a treatment approach that you can maintain consistently, as interrupted treatment can lead to pressure elevation and further vision loss. We work with you to find the most sustainable long-term solution for your specific situation.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover glaucoma treatment in Kyle?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Yes, glaucoma treatment is typically well-covered by both medical insurance and Medicare, as it's considered a medical necessity rather than routine vision care. This includes comprehensive eye exams with glaucoma testing, diagnostic imaging like OCT, visual field testing, prescription medications (though copays vary by plan), and laser or surgical procedures when medically necessary. Coverage levels vary by insurance plan, so we recommend checking your specific benefits. Our office staff will verify your coverage before your appointment and help you understand your out-of-pocket costs. We'll also work with your insurance company to obtain prior authorizations when required for medications or procedures. If you have questions about coverage, don't hesitate to contact our billing department.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What happens if my eye pressure isn't controlled with medication?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                If your intraocular pressure remains elevated despite medication, or if you're experiencing progression of vision loss, we have several options to intensify treatment. We may add additional eye drop medications (up to three or four different drops are sometimes used), as different classes of medications work through different mechanisms to lower pressure. Selective laser trabeculoplasty (SLT) can be added to medication therapy to achieve additional pressure reduction. If medication and laser treatment are insufficient, we'll discuss surgical options and coordinate a referral to a glaucoma specialist for procedures like trabeculectomy (creating a new drainage channel), tube shunt implantation, or minimally invasive glaucoma surgery (MIGS). The most important thing is not to become discouraged—with today's treatment options, we can almost always find an approach that adequately controls your pressure and protects your vision.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can I use telehealth for glaucoma follow-up appointments?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                While glaucoma monitoring requires in-person examinations for pressure measurements and optic nerve evaluation, telehealth can be valuable for certain aspects of your care. We use telehealth appointments for medication management discussions, reviewing side effects, addressing adherence challenges, discussing recent test results and their implications, providing education about your condition, and coordinating with other healthcare providers. Telehealth is particularly helpful if you're experiencing side effects from your medication and need guidance before your next scheduled in-person visit. However, you'll still need regular in-person appointments (typically every 3-6 months) for pressure checks, optic nerve examination, and visual field testing to ensure your glaucoma remains well-controlled. This hybrid approach provides convenience while maintaining the thorough monitoring essential for glaucoma management.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Is acute angle-closure glaucoma really an emergency?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Yes, acute angle-closure glaucoma is a true medical emergency that requires immediate treatment—ideally within hours of symptom onset. When the drainage angle suddenly closes, eye pressure can spike to dangerously high levels (often 40-80 mmHg compared to normal levels of 10-21 mmHg), causing rapid and permanent optic nerve damage if not treated promptly. Symptoms include severe eye pain, intense headache, nausea and vomiting, sudden vision blurring, halos around lights, and a red eye. If you experience these symptoms, seek emergency care immediately—either at an emergency department or urgent eye care facility. Treatment involves medications to rapidly lower pressure followed by laser peripheral iridotomy to create a permanent drainage opening. Delays in treatment increase the risk of permanent vision loss, so never wait to see if symptoms improve on their own.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/cataracts" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Cataracts</h4>
              <p className="text-[var(--color-muted)]">
                Clouding of the eye's natural lens causing blurry vision, glare sensitivity, and difficulty with night vision requiring surgical treatment.
              </p>
            </a>
            <a href="/conditions/diabetic-retinopathy" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)]">
                Diabetes-related damage to retinal blood vessels that can lead to vision loss if not detected early and managed properly.
              </p>
            </a>
            <a href="/conditions/age-related-macular-degeneration" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)]">
                Age-related deterioration of the central retina (macula) causing progressive loss of central vision and difficulty reading.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Glaucoma (Open-Angle and Angle-Closure) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Glaucoma (Open-Angle and Angle-Closure) alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/conditions"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}