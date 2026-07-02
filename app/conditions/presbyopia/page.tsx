import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Presbyopia Treatment in Kyle | Spark Eye Care',
  description: 'Expert presbyopia treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction solutions for age-related focusing difficulties.',
  openGraph: {
    title: 'Presbyopia Treatment in Kyle | Spark Eye Care',
    description: 'Expert presbyopia treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction solutions for age-related focusing difficulties.',
    url: 'https://sparkeyetx.com/conditions/presbyopia',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PresbyopiaPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Presbyopia</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Presbyopia Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Presbyopia is a natural age-related vision condition that affects nearly everyone after age 40, making it difficult to focus on close objects. At Spark Eye Care, we provide comprehensive diagnostic evaluations and personalized vision correction solutions to help you maintain clear, comfortable vision at all distances throughout your life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/presbyopia.jpg"
                alt="Reading glasses for presbyopia"
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

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Presbyopia
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Presbyopia is a progressive, age-related vision condition that gradually reduces your ability to focus on objects at close range. The term literally means "old eye" in Greek, though it's not a disease but rather a natural part of the aging process that affects virtually everyone, typically beginning around age 40. As presbyopia develops, you may notice yourself holding reading materials at arm's length, struggling to read small print in dim lighting, or experiencing eye strain and headaches after prolonged close work. This condition affects approximately 1.8 billion people worldwide and is the most common reason adults seek vision correction. Without proper treatment, presbyopia can significantly impact your quality of life, making everyday tasks like reading prescriptions, using smartphones, working on computers, or enjoying hobbies increasingly frustrating and difficult.
            </p>
            <p>
              The underlying cause of presbyopia is the gradual loss of flexibility in the eye's natural crystalline lens, combined with weakening of the ciliary muscles that control the lens shape for focusing. Throughout childhood and young adulthood, the lens remains soft and pliable, easily changing shape to focus light from objects at varying distances—a process called accommodation. As we age, proteins within the lens become denser and less elastic, while the lens itself continues growing throughout life, becoming thicker and less responsive to the ciliary muscles' contractions. Risk factors that may accelerate or worsen presbyopia include diabetes, cardiovascular disease, multiple sclerosis, certain medications (antihistamines, antidepressants, diuretics), prolonged near-work activities, inadequate lighting, and premature presbyopia in people with farsightedness. Additionally, environmental factors, nutritional deficiencies, and genetic predisposition can influence the age of onset and rate of progression.
            </p>
            <p>
              Professional eye care evaluation and treatment for presbyopia is essential not only for restoring functional vision but also for identifying potential underlying eye health issues that may present with similar symptoms. While presbyopia itself is benign, comprehensive eye examinations during presbyopia evaluation can detect serious conditions like glaucoma, cataracts, macular degeneration, diabetic retinopathy, and retinal detachment. Modern presbyopia treatment offers numerous sophisticated options beyond traditional reading glasses, including progressive lenses, multifocal contact lenses, monovision correction, and surgical interventions that can dramatically improve your visual function and lifestyle satisfaction. Our board-certified optometrists and ophthalmologists utilize advanced diagnostic technology to precisely measure your refractive error, assess your accommodative amplitude, evaluate your binocular vision function, and develop customized treatment strategies that address your specific visual demands, occupational requirements, and lifestyle preferences. Early intervention and regular monitoring ensure optimal visual outcomes and help you maintain independence, productivity, and enjoyment in all your daily activities.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Presbyopia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Vision Changes
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Reading Small Print</p>
                    <p className="text-[var(--color-muted)]">You find yourself struggling to read books, menus, medication labels, or smartphone text without holding them farther away.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Holding Objects at Arm's Length</p>
                    <p className="text-[var(--color-muted)]">You instinctively extend your arms to move reading materials farther from your eyes to bring text into focus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Blurred Vision at Normal Reading Distance</p>
                    <p className="text-[var(--color-muted)]">Close objects that were once clear at 14-16 inches now appear fuzzy or out of focus at that distance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Need for Brighter Lighting</p>
                    <p className="text-[var(--color-muted)]">You require increasingly bright illumination to read comfortably, especially in restaurants, theaters, or evening settings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty with Computer Work</p>
                    <p className="text-[var(--color-muted)]">Extended screen time becomes uncomfortable, with focus shifting between monitor and keyboard causing visual fatigue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Slow Focus Adjustment</p>
                    <p className="text-[var(--color-muted)]">You experience delayed focusing when shifting your gaze from distance to near objects or vice versa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Previously Clear Vision Now Blurry</p>
                    <p className="text-[var(--color-muted)]">Tasks like threading needles, reading fine print, or detailed hobby work that were once easy now present challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Physical & Behavioral Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Eye Strain and Fatigue</p>
                    <p className="text-[var(--color-muted)]">Your eyes feel tired, achy, or strained after reading or performing close work for extended periods.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Headaches After Close Work</p>
                    <p className="text-[var(--color-muted)]">You develop frontal or temporal headaches during or following reading, computer use, or detailed visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Squinting to See Clearly</p>
                    <p className="text-[var(--color-muted)]">You find yourself squinting or partially closing your eyelids when trying to read or focus on near objects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">General Fatigue</p>
                    <p className="text-[var(--color-muted)]">You experience overall tiredness and reduced energy levels due to the extra effort required for visual focusing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Avoiding Reading Activities</p>
                    <p className="text-[var(--color-muted)]">You begin limiting or avoiding books, crafts, or hobbies that require near vision due to discomfort or frustration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Reduced Productivity</p>
                    <p className="text-[var(--color-muted)]">Work efficiency declines as visual tasks take longer and require more effort, particularly with documents or screens.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Frustration and Irritability</p>
                    <p className="text-[var(--color-muted)]">You feel increasingly annoyed by your inability to see clearly, impacting mood and quality of life.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Removing Glasses to Read</p>
                    <p className="text-[var(--color-muted)]">If you wear distance glasses, you frequently remove them to see near objects more clearly, indicating changing vision needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and allows you to maintain clear, comfortable vision for all your daily activities.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Presbyopia
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough vision examination including visual acuity testing at multiple distances, refraction to determine precise optical correction needs, and accommodative amplitude measurement to assess your remaining focusing ability. We evaluate your ocular health with advanced diagnostic imaging, discuss your lifestyle and visual demands, and identify any underlying conditions that may affect treatment options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-100">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment findings, we develop a customized correction strategy tailored to your specific needs, preferences, and budget. Options may include reading glasses for occasional use, progressive lenses for seamless vision at all distances, bifocal or trifocal glasses for distinct viewing zones, multifocal or monovision contact lenses for those preferring lens-free appearance, or discussion of surgical options like corneal inlays, refractive lens exchange, or laser vision correction for appropriate candidates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-200">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Care & Adjustment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Presbyopia is progressive, so we provide continuous monitoring and adjustment of your vision correction as your needs evolve. Follow-up appointments ensure optimal comfort and visual performance, with prescription updates typically needed every one to three years as the condition advances. We offer adaptation support for new multifocal lens wearers, troubleshoot any visual difficulties, and coordinate with surgical specialists if advanced interventions become appropriate for your situation.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Our evidence-based treatment approach utilizes the latest advancements in optical technology and refractive science. Progressive lens designs now feature advanced digital surfacing for wider fields of clear vision and reduced peripheral distortion. Premium anti-reflective coatings eliminate glare and improve contrast. Multifocal contact lens options include daily disposables for convenience and eye health. For patients seeking spectacle independence, we collaborate with experienced refractive surgeons offering presbyopia-correcting intraocular lenses, corneal reshaping procedures, and monovision LASIK or PRK. Computer vision syndrome often accompanies presbyopia, so we prescribe specialized intermediate-distance computer glasses with blue light filtering when appropriate. Our opticians provide expert frame selection and fitting to ensure your eyewear is comfortable, functional, and reflects your personal style, while our doctors stay current with emerging technologies like pharmaceutical presbyopia treatments currently in clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Spark Eye Care for Presbyopia Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists and ophthalmologists are board-certified professionals with extensive training in refractive vision correction and the latest presbyopia treatment technologies.
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-75">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient has unique visual needs, lifestyle demands, and aesthetic preferences—your treatment plan is customized specifically for you, not a one-size-fits-all solution.
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-150">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For follow-up consultations, adaptation troubleshooting, and prescription adjustments, we offer convenient telehealth appointments that save you time while maintaining quality care.
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-225">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Presbyopia Specialists</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have extensive experience managing presbyopia across all age groups and severity levels, from early-onset cases requiring minimal correction to advanced presbyopia needing complex multifocal solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12 mt-16">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes comprehensive vision testing, medical history review, detailed discussion of your visual symptoms and lifestyle needs, and examination of eye health. We'll measure your current refractive error, assess accommodative function, evaluate binocular vision, and discuss all available correction options. This visit typically takes 60-90 minutes and provides the foundation for your personalized treatment plan. Many patients receive a preliminary prescription and can begin exploring eyewear options the same day.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your prescription eyewear or contact lenses are ready, you'll receive detailed instructions for proper use and care. Progressive lens wearers typically need 1-2 weeks to fully adapt to the new visual experience—this is completely normal. Contact lens patients may require several fitting adjustments to optimize comfort and vision. We encourage you to wear your new correction consistently during this adaptation period. For most patients, near vision improves immediately, though some fine-tuning may be needed. Report any persistent discomfort, visual distortions, or difficulties so we can make appropriate adjustments.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A follow-up appointment 4-8 weeks after receiving your correction ensures optimal visual performance and comfort. We'll assess adaptation success, verify prescription accuracy across all distances, address any concerns or difficulties, and make refinements if needed. For progressive lens wearers who experience peripheral distortion or neck strain, we can modify lens corridor design. Contact lens patients experiencing dryness or fluctuating vision may benefit from different materials or wearing schedules. This checkpoint ensures your correction is working optimally for your daily life.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Long-term Management
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Presbyopia progresses gradually with age, so regular annual eye examinations are essential for maintaining optimal vision. Most patients require prescription updates every 1-3 years, with more frequent changes typical in the first decade after onset (ages 40-50) and stabilization occurring around age 60-65. We monitor for age-related eye conditions that become more common alongside presbyopia, including cataracts, glaucoma, and macular degeneration. As your visual needs evolve—perhaps requiring computer-specific glasses or stronger reading correction—we adjust your treatment accordingly. Our goal is lifelong clear, comfortable vision through every stage of presbyopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Presbyopia
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                Can presbyopia be prevented or reversed?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                Unfortunately, presbyopia cannot be prevented as it's a natural consequence of aging that affects the lens structure at the cellular level. No eye exercises, dietary supplements, or lifestyle modifications have been scientifically proven to prevent or reverse presbyopia. However, the condition can be effectively managed with various correction options that restore functional near vision. While the lens changes themselves are irreversible, your quality of life doesn't have to suffer—appropriate optical or surgical correction provides excellent visual outcomes. Emerging pharmaceutical treatments are in development, but none are currently FDA-approved for presbyopia prevention or reversal.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                How long does it take to adjust to progressive lenses?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                Most patients adapt to progressive lenses within one to two weeks of consistent wear, though individual experiences vary. The adjustment period involves learning to position your head and eyes to access the appropriate lens zones for different distances—looking straight ahead for distance, slightly downward through the reading corridor for near tasks, and through intermediate zones for computer work. Some peripheral distortion is normal with progressive lenses but typically becomes less noticeable as your brain adapts. First-time progressive lens wearers generally experience a longer adjustment than those upgrading to a new prescription. Premium progressive lens designs with wider viewing zones and reduced distortion may offer easier adaptation. If you're still struggling after three weeks, we can reassess the fit, prescription accuracy, or lens design.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                What's the difference between reading glasses and progressive lenses?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                Reading glasses provide magnification for near vision only and must be removed to see clearly at distance. They're ideal if you have no distance vision problems and only need help with close work—simple, inexpensive, and effective for occasional readers. Progressive lenses contain multiple prescriptions in one lens, providing clear vision at all distances without visible lines. The top portion corrects distance vision, the middle provides intermediate focus (ideal for computers), and the bottom magnifies for reading. Progressives are optimal if you need vision correction at multiple distances and want the convenience of one pair of glasses for all activities. Bifocals offer an alternative with distinct distance and near zones separated by a visible line, suitable for those who don't require intermediate correction or prefer simpler lens designs.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                Does insurance cover presbyopia treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                Most medical insurance plans cover the eye examination portion of presbyopia evaluation, particularly if you have other eye health conditions requiring monitoring. However, standard medical insurance typically does not cover eyeglasses or contact lenses, as these are considered routine vision correction. Vision insurance plans (such as VSP, EyeMed, or Davis Vision) usually provide allowances toward eyewear every one to two years, though premium lens options like progressives may involve additional out-of-pocket costs beyond the basic coverage. We accept most major vision and medical insurance plans and will verify your specific benefits before your appointment. For patients without vision insurance, we offer various payment options and can discuss value-oriented eyewear solutions that meet your needs and budget.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                Are there surgical options for presbyopia?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                Yes, several surgical procedures can reduce dependence on reading glasses for presbyopia patients. Refractive lens exchange (RLE) replaces your natural lens with a premium multifocal or accommodating intraocular lens that provides vision at multiple distances—essentially cataract surgery performed before a cataract develops. Corneal inlays are tiny devices implanted in one cornea to improve near vision while maintaining distance vision. LASIK or PRK can be performed in a monovision configuration, where one eye is corrected for distance and the other for near vision. Conductive keratoplasty uses radiofrequency energy to reshape the cornea for improved near focus. Not all patients are suitable candidates for these procedures—factors like corneal health, degree of refractive error, lifestyle needs, and realistic expectations determine eligibility. We can discuss whether surgical options are appropriate for you and provide referrals to experienced refractive surgeons if desired.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] mb-4">
                Can I manage presbyopia through telehealth appointments?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] leading-relaxed pl-4">
                While the initial comprehensive eye examination and prescription determination require an in-person visit with specialized equipment, many follow-up aspects of presbyopia management can be handled through telehealth. Virtual appointments work well for discussing adaptation difficulties with new progressive lenses, troubleshooting visual symptoms, reviewing contact lens comfort issues, determining when a prescription update may be needed, and discussing lifestyle changes affecting your vision needs. Telehealth is particularly valuable for busy professionals, patients with mobility limitations, or those living farther from our office. However, actual vision testing, prescription refinement, eyewear dispensing and fitting, and comprehensive eye health examinations must be performed in person. We've found that combining in-person visits for essential testing with convenient telehealth check-ins provides optimal care while respecting your time and schedule.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/cataracts" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Cataracts</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Clouding of the eye's natural lens that develops with age, causing blurred vision, glare sensitivity, and reduced contrast perception.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>
            <Link href="/conditions/dry-eye-syndrome" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Chronic condition causing insufficient tear production or poor tear quality, leading to discomfort, irritation, and visual fluctuations.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>
            <Link href="/conditions/computer-vision-syndrome" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Computer Vision Syndrome</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Eye strain and discomfort from prolonged digital screen use, often worsened by presbyopia and requiring specialized intermediate-distance correction.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Presbyopia Today
          </h2>
          <p className="text-xl mb-10 opacity-95">
            You don't have to face presbyopia alone. Our team is ready to help you achieve clear, comfortable vision at all distances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Evaluation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}