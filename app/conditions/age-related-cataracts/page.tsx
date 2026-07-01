import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Age-Related Cataracts Treatment in Kyle | Spark Eye Care',
  description: 'Expert age-related cataracts treatment in Kyle. Board-certified eye care specialists offering comprehensive cataract evaluation, surgery, and ongoing management. Schedule your consultation today.',
  keywords: 'age-related cataracts treatment Kyle, cataract surgery Kyle, cataract specialist Kyle, cataracts Kyle TX, eye doctor cataracts Kyle',
  openGraph: {
    title: 'Age-Related Cataracts Treatment in Kyle | Spark Eye Care',
    description: 'Expert age-related cataracts treatment in Kyle. Comprehensive evaluation and surgical solutions for clearer vision.',
    url: 'https://www.sparkeyetx.com/conditions/age-related-cataracts',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AgeRelatedCataractsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Age-Related Cataracts</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Age-Related Cataracts Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl opacity-95">
            Age-related cataracts cloud the natural lens of your eye, gradually diminishing your vision and quality of life. At Spark Eye Care, we provide comprehensive evaluation, advanced surgical treatment, and compassionate care to restore your clear vision and independence.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748701.jpeg"
                alt="Woman with age-related vision changes"
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

      {/* OVERVIEW SECTION */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Age-Related Cataracts
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Age-related cataracts are a natural clouding of the eye's crystalline lens that occurs as we grow older, affecting more than half of all Americans by age 80. The lens, which sits behind the iris and pupil, must remain clear to focus light properly onto the retina. When cataracts develop, proteins in the lens begin to clump together, creating opaque areas that scatter light and blur vision. This progressive condition impacts daily activities like reading, driving, recognizing faces, and enjoying hobbies. While cataracts typically develop slowly over years, they eventually interfere significantly with quality of life, independence, and safety. The good news is that cataract surgery is one of the most successful and commonly performed procedures in medicine, with a success rate exceeding 95% for restoring functional vision.
            </p>
            <p>
              Multiple factors contribute to cataract formation beyond simple aging. Ultraviolet radiation exposure over decades damages lens proteins, making sun protection important throughout life. Medical conditions like diabetes accelerate cataract development, as elevated blood sugar levels alter the lens's biochemical environment. Long-term use of corticosteroid medications, previous eye injuries or surgeries, smoking, and family history all increase cataract risk. While everyone who lives long enough will eventually develop some degree of cataract, the rate of progression varies considerably between individuals. Some people experience minimal visual impact well into their eighties, while others require intervention in their sixties. Understanding your personal risk factors allows for appropriate monitoring and timely intervention when cataracts begin affecting your daily functioning.
            </p>
            <p>
              Professional evaluation and treatment by an experienced eye care specialist is essential when cataracts begin impacting your life. While no medications, eye drops, or lifestyle changes can reverse or prevent cataracts once they've formed, modern cataract surgery offers remarkable results with minimal discomfort and rapid recovery. Delaying treatment when cataracts significantly impair vision increases fall risk, limits mobility, contributes to social isolation, and reduces overall quality of life. At Spark Eye Care, we carefully monitor cataract progression during regular eye examinations, discuss treatment options when the time is right, and provide state-of-the-art surgical care tailored to your individual visual needs and lifestyle. Our goal is not just removing cataracts, but optimizing your vision for the activities you value most.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Age-Related Cataracts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred or Cloudy Vision:</strong>
                    <span className="text-[var(--color-muted)]"> Progressive dimming or fogging of vision that cannot be corrected with glasses, making fine details increasingly difficult to see.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Increased Glare Sensitivity:</strong>
                    <span className="text-[var(--color-muted)]"> Bright lights create halos, starbursts, or disabling glare, particularly problematic during night driving or in sunlight.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Faded or Yellowed Colors:</strong>
                    <span className="text-[var(--color-muted)]"> Colors appear less vibrant, with a yellowish or brownish tint that makes color discrimination difficult.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Double Vision in One Eye:</strong>
                    <span className="text-[var(--color-muted)]"> Monocular diplopia where you see multiple images even when covering the other eye, caused by irregular light scattering.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Prescription Changes:</strong>
                    <span className="text-[var(--color-muted)]"> Your glasses prescription changes frequently but new lenses provide only temporary improvement as cataracts progress.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty with Night Vision:</strong>
                    <span className="text-[var(--color-muted)]"> Vision deteriorates significantly in low-light conditions, making evening activities and night driving especially challenging.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Need for Brighter Light:</strong>
                    <span className="text-[var(--color-muted)]"> You require increasingly bright illumination for reading, cooking, and other close-up tasks that were previously manageable.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Functional Impact</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reading Difficulties:</strong>
                    <span className="text-[var(--color-muted)]"> Reading books, newspapers, labels, or digital screens becomes frustrating despite adequate lighting or magnification.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Driving Concerns:</strong>
                    <span className="text-[var(--color-muted)]"> Reduced confidence while driving, particularly at night, in rain, or in bright conditions due to glare and reduced clarity.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Limited Independence:</strong>
                    <span className="text-[var(--color-muted)]"> Growing reliance on others for transportation, shopping, managing medications, and other daily activities you previously handled independently.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reduced Social Engagement:</strong>
                    <span className="text-[var(--color-muted)]"> Avoiding social activities, restaurants, or gatherings because of difficulty recognizing faces or navigating unfamiliar environments.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Hobby Limitations:</strong>
                    <span className="text-[var(--color-muted)]"> Giving up activities you enjoy such as crafts, woodworking, golf, or gardening due to insufficient visual clarity.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Increased Fall Risk:</strong>
                    <span className="text-[var(--color-muted)]"> Difficulty judging distances and seeing obstacles, leading to trips, falls, and injuries that compromise mobility.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Medication Management Errors:</strong>
                    <span className="text-[var(--color-muted)]"> Difficulty reading prescription labels, distinguishing between medications, or seeing expiration dates safely.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Workplace Challenges:</strong>
                    <span className="text-[var(--color-muted)]"> For those still working, cataracts can impact job performance, particularly in roles requiring detailed visual tasks or computer work.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Modern cataract surgery can restore clear vision and dramatically improve your quality of life, safety, and independence.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Age-Related Cataracts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including visual acuity testing, dilated pupil examination, and advanced diagnostic imaging to evaluate cataract density and location. We assess how cataracts affect your daily functioning, discuss your visual goals, and determine the optimal timing for intervention based on your lifestyle needs and overall health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.7 1.7a2.25 2.25 0 01-3.182 0l-1.448-1.448m6.328-4.719L15.75 9.75" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Surgical Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When surgery is appropriate, we create a personalized treatment plan using modern phacoemulsification techniques with ultrasound energy to gently remove the clouded lens. We help you select the ideal intraocular lens (IOL) replacement—standard monofocal, toric for astigmatism correction, or premium multifocal/extended depth of focus lenses—based on your visual needs, lifestyle, and budget considerations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Recovery & Follow-Up Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Post-operative care includes prescribed anti-inflammatory and antibiotic eye drops, protective eyewear, and activity guidelines to ensure optimal healing. We schedule follow-up appointments at one day, one week, and one month after surgery to monitor your recovery, address any concerns, and fine-tune your vision with updated glasses prescription if needed for best results.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Cataract surgery is performed as an outpatient procedure, typically taking 15-20 minutes per eye under local anesthesia with mild sedation. The procedure uses femtosecond laser or ultrasonic phacoemulsification technology to break up and remove the clouded natural lens through a tiny self-sealing incision, usually requiring no sutures. The artificial intraocular lens (IOL) is then carefully positioned where your natural lens once was, permanently correcting the cataract.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              We utilize evidence-based surgical techniques refined over decades, with success rates exceeding 95% for visual improvement. Most patients notice dramatically improved vision within days, with full recovery typically occurring within four to six weeks. Pre-operative measurements using optical biometry and corneal topography ensure precise IOL power calculation for optimal refractive outcomes. Advanced IOL options include monofocal lenses for excellent distance vision, toric IOLs for astigmatism correction, and premium multifocal or extended depth of focus lenses that can reduce dependence on glasses for both distance and near vision.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Age-Related Cataracts Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Excellence</h3>
              <p className="text-[var(--color-muted)]">
                Our team includes board-certified ophthalmologists with specialized training in advanced cataract surgery techniques and premium lens implant technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Vision Solutions</h3>
              <p className="text-[var(--color-muted)]">
                We take time to understand your unique lifestyle needs, visual goals, and concerns to recommend the most appropriate lens options and surgical approach for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Consultations</h3>
              <p className="text-[var(--color-muted)]">
                Initial consultations and certain follow-up appointments can be conducted via secure telehealth, making care more accessible while in-person surgical services remain available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extensive Cataract Experience</h3>
              <p className="text-[var(--color-muted)]">
                With thousands of successful cataract surgeries performed, our team has the expertise to handle routine and complex cases with excellent outcomes and minimal complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Initial Comprehensive Evaluation</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your first visit, typically within 1-2 weeks of scheduling, we perform a complete eye examination including visual acuity testing, dilated examination of the lens and retina, intraocular pressure measurement, and advanced imaging to assess cataract severity. We discuss your symptoms, how they impact daily activities, review your medical history, and explain all treatment options. This appointment usually lasts 60-90 minutes due to the comprehensive nature of testing and consultation time.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Pre-Operative Planning</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If surgery is recommended, we schedule a pre-operative appointment where precise measurements of your eye are taken using optical biometry and corneal topography to calculate the ideal lens implant power. We review lens options—standard monofocal, toric for astigmatism, or premium multifocal lenses—discussing benefits, limitations, and costs of each. You'll receive detailed instructions about medications to discontinue, pre-operative eye drops if needed, fasting requirements, and what to expect on surgery day. We coordinate with your primary care physician if medical clearance is required.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Surgery & Immediate Recovery</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Cataract surgery is performed as an outpatient procedure lasting 15-20 minutes per eye under local anesthesia with mild sedation. Most patients experience minimal discomfort during and after the procedure. You'll rest briefly in recovery, receive post-operative instructions and prescriptions for eye drops, and can go home the same day—you'll need someone to drive you. Vision often improves within 24 hours, though complete healing takes several weeks. If both eyes require surgery, the second eye is typically treated 1-2 weeks after the first to ensure proper healing.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Follow-Up Care & Optimization</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Post-operative visits are scheduled at one day, one week, and one month after surgery to monitor healing and visual recovery. Most patients achieve 90% of their final vision within the first week, with continued improvement over four to six weeks. We prescribe anti-inflammatory and antibiotic eye drops for several weeks and provide activity restrictions to protect your eye during healing. Once fully healed, we perform a comprehensive refraction to determine if glasses are needed for optimal vision at all distances, though many patients find they need glasses less frequently than before surgery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Realistic Expectations:</strong> Over 95% of cataract surgeries result in significantly improved vision with minimal complications. While most patients achieve excellent outcomes, individual results depend on overall eye health, presence of other conditions like macular degeneration or glaucoma, and which lens type is selected. Some patients may still need glasses for certain activities, particularly reading with standard monofocal lenses. Serious complications are rare but can include infection, bleeding, or retinal detachment. We'll discuss all risks and benefits thoroughly before you proceed with surgery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Age-Related Cataracts
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">How long does cataract surgery recovery take?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most patients notice improved vision within 24-48 hours after cataract surgery, with continued improvement over several weeks. Initial recovery with activity restrictions typically lasts about one week, during which you'll use prescribed eye drops and avoid strenuous activities, swimming, and rubbing your eye. Complete healing generally occurs within four to six weeks, at which point your vision stabilizes and we can prescribe updated glasses if needed. The vast majority of patients can resume normal daily activities, including driving, within a few days if vision in the treated eye meets legal requirements.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Will I need glasses after cataract surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Whether you need glasses after cataract surgery depends primarily on which intraocular lens (IOL) type you choose. Standard monofocal lenses, which are covered by insurance, provide excellent vision at one distance—usually optimized for distance vision—meaning you'll likely need reading glasses for close work. Toric monofocal lenses correct astigmatism as well. Premium multifocal or extended depth of focus lenses (available at additional out-of-pocket cost) can reduce or eliminate the need for glasses at multiple distances, though some patients still prefer glasses for certain tasks like prolonged reading or night driving. We'll help you select the lens option that best matches your lifestyle priorities and budget.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Does insurance cover cataract surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, cataract surgery is considered medically necessary when cataracts impair your daily functioning, and is covered by Medicare and most private insurance plans. Coverage typically includes the surgical procedure, standard monofocal lens implant, facility fees, and basic pre- and post-operative care. Your out-of-pocket costs will depend on your specific insurance plan, deductibles, and co-insurance amounts. Premium lens options (multifocal, extended depth of focus, or toric lenses for astigmatism correction) may involve additional fees not covered by insurance. We'll verify your benefits, provide cost estimates, and discuss payment options during your consultation to ensure you understand your financial responsibility before proceeding.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Can cataracts come back after surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  No, cataracts cannot return after the natural lens has been removed and replaced with an artificial intraocular lens. However, some patients develop posterior capsule opacification (PCO), sometimes called a "secondary cataract," where the thin membrane behind the lens implant becomes cloudy months or years after surgery. This occurs in approximately 20-40% of patients and causes similar symptoms to the original cataract—blurred vision, glare, or dimming. PCO is easily treated with a quick, painless in-office laser procedure called YAG laser capsulotomy, which creates an opening in the cloudy capsule to restore clear vision. This five-minute treatment requires no incisions and typically provides immediate visual improvement with no recovery time needed.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">When is the right time for cataract surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The right time for cataract surgery is when your vision impairment interferes with activities important to your quality of life and safety—there's no need to wait until cataracts are "ripe" as was once believed. If you're having difficulty driving safely (especially at night), reading, working, recognizing faces, managing medications, or enjoying hobbies despite updated glasses, it's time to consider surgery. Some patients choose surgery earlier when they first notice bothersome symptoms, while others wait longer if symptoms are minimal. Delaying surgery when cataracts significantly impact your life increases fall risk, limits independence, and reduces quality of life unnecessarily. During your evaluation, we'll assess cataract severity, discuss how symptoms affect you personally, and help you decide if now is the right time based on your individual situation and preferences.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Can telehealth appointments work for cataract evaluation?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  While complete cataract evaluation requires in-person examination with specialized equipment for dilated eye exam and precise measurements, telehealth can be valuable for initial consultations to discuss your symptoms, review medical history, answer questions about the surgical process, and determine if you're a candidate for evaluation. Telehealth is also useful for some post-operative follow-up visits when healing is progressing normally and no concerns have arisen. However, the comprehensive pre-operative assessment, precise biometry measurements for lens power calculation, and the surgery itself must be performed in person. We'll work with you to maximize convenience through telehealth where appropriate while ensuring you receive thorough in-person care when necessary for optimal surgical outcomes.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Glaucoma</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Progressive optic nerve damage often associated with elevated eye pressure, requiring ongoing monitoring and treatment to prevent vision loss.
              </p>
            </a>

            <a href="/conditions/age-related-macular-degeneration" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Age-related deterioration of the central retina affecting detailed vision, reading ability, and facial recognition.
              </p>
            </a>

            <a href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diabetes-related damage to retinal blood vessels that can lead to vision loss if not properly monitored and treated.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Age-Related Cataracts Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face age-related cataracts alone. Our team is ready to help you regain clear vision and independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Consultation
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