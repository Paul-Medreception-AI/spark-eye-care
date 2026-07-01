import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corneal Irregularities Treatment in Kyle, TX | Spark Eye Care',
  description: 'Expert corneal irregularities treatment in Kyle. Board-certified care for keratoconus, corneal scarring, and irregular astigmatism. Specialized contact lens fitting and advanced diagnostics.',
  keywords: 'corneal irregularities treatment Kyle, keratoconus Kyle TX, irregular astigmatism treatment, corneal scarring Kyle, specialty contact lenses Kyle',
  openGraph: {
    title: 'Corneal Irregularities Treatment in Kyle, TX | Spark Eye Care',
    description: 'Expert corneal irregularities treatment in Kyle. Board-certified care for keratoconus, corneal scarring, and irregular astigmatism.',
    url: 'https://www.sparkeyetx.com/conditions/corneal-irregularities',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function CornealIrregularitiesPage() {
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
            <span>Corneal Irregularities</span>
          </nav>
          
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Corneal Irregularities Treatment in Kyle
          </h1>
          
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            When the smooth, dome-shaped surface of your cornea becomes distorted, even simple tasks like reading or driving can become challenging. At Spark Eye Care, we specialize in diagnosing and managing corneal irregularities with advanced technology and personalized treatment plans that restore visual clarity and comfort.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_94313718.jpeg"
                alt="Corneal irregularity"
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
            Understanding Corneal Irregularities
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Corneal irregularities encompass a range of conditions where the normally smooth, spherical surface of the cornea—the clear front window of the eye—becomes distorted, uneven, or misshapen. This disruption affects how light enters the eye and focuses on the retina, resulting in blurred vision, distorted images, increased light sensitivity, and visual discomfort that cannot be fully corrected with standard eyeglasses. Conditions such as keratoconus (where the cornea progressively thins and bulges into a cone shape), post-surgical corneal irregularities following LASIK or cataract surgery, corneal scarring from infections or injuries, and irregular astigmatism all fall under this category. These conditions affect approximately 1 in 2,000 people for keratoconus alone, with many more experiencing irregularities from trauma, surgery, or degenerative changes. The impact on daily life can be profound—patients often struggle with tasks requiring sharp vision such as driving at night, reading fine print, recognizing faces from a distance, and prolonged screen work, leading to eye strain, headaches, and reduced quality of life.
            </p>
            
            <p>
              The causes of corneal irregularities are diverse and can include genetic predisposition (keratoconus often runs in families), chronic eye rubbing which weakens corneal tissue, connective tissue disorders like Ehlers-Danlos syndrome or Marfan syndrome, contact lens-related complications from poor fitting or overwear, corneal infections that leave scarring, previous eye surgeries that alter corneal shape, trauma or injury to the eye, and degenerative conditions such as pellucid marginal degeneration or Terrien's marginal degeneration. Environmental factors including allergies that trigger eye rubbing, ultraviolet light exposure, and hormonal changes during puberty or pregnancy can also contribute to progression. Risk factors are particularly important to identify early—individuals with a family history of keratoconus, those with frequent eye rubbing habits, contact lens wearers who experience persistent discomfort, patients who have undergone refractive surgery, and anyone with connective tissue disorders should receive regular corneal evaluations to detect irregularities before they significantly impact vision.
            </p>
            
            <p>
              Professional treatment for corneal irregularities is essential because these conditions are typically progressive and will not resolve on their own. Without proper management, corneal irregularities can worsen over time, leading to increasing visual impairment that eventually may require surgical intervention such as corneal crosslinking or corneal transplantation. Early detection and appropriate treatment can slow or halt progression, preserve vision, and in many cases restore functional sight through specialized contact lens fitting or other interventions. At Spark Eye Care, we utilize advanced corneal topography and tomography imaging systems that create detailed three-dimensional maps of your corneal surface, allowing us to precisely measure even subtle irregularities and monitor changes over time. This technology-driven approach enables us to design highly customized treatment plans—from specialty rigid gas permeable (RGP) lenses, scleral lenses that vault over the irregular cornea, hybrid lenses combining RGP and soft lens technologies, to medical management of underlying conditions and coordination with corneal specialists when advanced procedures are needed. The goal is always to maximize your visual potential, maintain eye health, and improve your quality of life through evidence-based, personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Corneal Irregularities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred or Distorted Vision</strong>
                    <p className="text-[var(--color-muted)]">Images appear wavy, stretched, or doubled, making it difficult to read or recognize faces clearly.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Ghosting or Multiple Images</strong>
                    <p className="text-[var(--color-muted)]">Seeing several overlapping copies of the same object, particularly noticeable when viewing text or lights.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Increased Light Sensitivity</strong>
                    <p className="text-[var(--color-muted)]">Bright lights cause discomfort, glare, or halos, especially problematic when driving at night.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Prescription Changes</strong>
                    <p className="text-[var(--color-muted)]">Eyeglass prescriptions require constant adjustment yet never provide satisfactory vision correction.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty with Night Vision</strong>
                    <p className="text-[var(--color-muted)]">Severe glare, starbursts around lights, and reduced contrast make nighttime driving dangerous.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye Strain and Fatigue</strong>
                    <p className="text-[var(--color-muted)]">Eyes tire quickly during reading or computer work, accompanied by headaches and difficulty focusing.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Fluctuating Vision</strong>
                    <p className="text-[var(--color-muted)]">Visual clarity varies throughout the day or with eye position, making consistent focus impossible.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>Physical & Behavioral Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Eye Rubbing</strong>
                    <p className="text-[var(--color-muted)]">Chronic urge to rub eyes due to irritation, which can worsen corneal irregularities over time.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Contact Lens Intolerance</strong>
                    <p className="text-[var(--color-muted)]">Standard contact lenses no longer fit properly, slide off-center, cause discomfort, or fall out frequently.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Squinting or Head Tilting</strong>
                    <p className="text-[var(--color-muted)]">Unconsciously adjusting head position or squinting to find a clearer angle of vision through irregular cornea.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Avoiding Visual Tasks</strong>
                    <p className="text-[var(--color-muted)]">Reluctance to read, drive, or perform detailed work due to frustration with poor visual quality.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Cloudy or Scarred Cornea</strong>
                    <p className="text-[var(--color-muted)]">Visible whitish areas or opacity on the corneal surface, often from past infections or injuries.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty Reading Small Print</strong>
                    <p className="text-[var(--color-muted)]">Text appears jumbled or distorted even with reading glasses, making newspapers or phone screens unusable.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Progressive Vision Decline</strong>
                    <p className="text-[var(--color-muted)]">Gradual worsening of vision over months or years, particularly noticeable in late teens to early thirties with keratoconus.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Post-Surgical Vision Problems</strong>
                    <p className="text-[var(--color-muted)]">Vision quality declined or never improved after LASIK, PRK, or cataract surgery due to irregular healing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our specialized diagnostic tools can detect corneal irregularities in their earliest stages, allowing us to implement interventions that preserve and often significantly improve your vision.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Corneal Irregularities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with advanced corneal topography and tomography imaging that creates a detailed three-dimensional map of your corneal surface, measuring thickness, curvature, and elevation with precision. We perform a thorough visual acuity assessment, refraction testing, and slit-lamp examination to understand the full scope of your condition. This detailed diagnostic approach allows us to identify the specific type and severity of irregularity, whether it's keratoconus, post-surgical changes, scarring, or irregular astigmatism.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all duration-300 delay-75">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>Customized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic results, we design a personalized treatment strategy tailored to your specific corneal irregularity and visual needs. For many patients, specialty contact lenses—including rigid gas permeable lenses, scleral lenses that vault over the irregular cornea and rest on the white of the eye, or hybrid lenses—provide dramatic visual improvement by creating a smooth refractive surface. We utilize precision fitting techniques and often work through several lens trials to achieve optimal vision and comfort. Your treatment plan may also include medical management such as anti-inflammatory drops, allergy control, and education about avoiding eye rubbing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all duration-300 delay-150">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Corneal irregularities require consistent monitoring to track stability or progression and ensure your treatment remains effective. We schedule regular follow-up appointments to repeat topography imaging, assess visual acuity changes, evaluate lens fit and condition, and make adjustments as needed. For progressive conditions like keratoconus, we monitor closely for signs that advanced interventions such as corneal crosslinking may be beneficial to halt progression. If your condition requires surgical consultation, we coordinate care with trusted corneal specialists while continuing to manage your ongoing eye care needs throughout your treatment journey.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our evidence-based treatment approach utilizes the latest advances in specialty contact lens technology and corneal imaging. Scleral lenses have revolutionized care for irregular corneas by vaulting completely over the damaged surface and creating a tear-filled reservoir that neutralizes irregularities—many patients achieve 20/20 or near-20/20 vision with these devices. For patients with less severe irregularities, custom rigid gas permeable lenses designed using topography-guided fitting software provide excellent visual outcomes. We also offer hybrid lens options that combine the crisp optics of RGP lenses with the comfort of soft lens skirts. When appropriate, we prescribe medications including lubricating drops for dry eye management, anti-allergy medications to reduce rubbing triggers, and anti-inflammatory agents when corneal inflammation is present. Our comprehensive approach addresses not just visual correction but also the underlying factors contributing to corneal changes, giving you the best possible long-term outcome.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Spark Eye Care for Corneal Irregularities Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our optometrists have specialized training in corneal conditions and specialty contact lens fitting, with years of experience managing complex cases of keratoconus, irregular astigmatism, and post-surgical complications.
              </p>
            </div>
            
            <div className="text-center animate-fade-up transition-all duration-300 delay-75">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every cornea is unique. Your treatment plan is custom-designed based on detailed topography analysis, your lifestyle needs, visual goals, and comfort preferences—not a one-size-fits-all approach.
              </p>
            </div>
            
            <div className="text-center animate-fade-up transition-all duration-300 delay-150">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up consultations, lens troubleshooting, and ongoing management questions, we offer convenient telehealth appointments—making specialized corneal care accessible even for patients with busy schedules or transportation challenges.
              </p>
            </div>
            
            <div className="text-center animate-fade-up transition-all duration-300 delay-200">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Proven Track Record</h3>
              <p className="text-[var(--color-muted)]">
                We have successfully fitted hundreds of specialty contact lenses for patients with corneal irregularities, restoring functional vision and quality of life for individuals who were told they had no options beyond surgery.
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
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2" style={{fontFamily: 'var(--font-cormorant)'}}>First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit includes comprehensive corneal topography imaging, detailed refraction testing, slit-lamp examination, and a thorough discussion of your visual symptoms and goals. We'll explain your specific type of corneal irregularity, review diagnostic images with you, and discuss all available treatment options. This appointment typically takes 60-90 minutes to ensure we have a complete understanding of your condition. If specialty contact lenses are recommended, we may begin diagnostic fitting during this visit or schedule a dedicated fitting appointment.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2" style={{fontFamily: 'var(--font-cormorant)'}}>Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If specialty lenses are part of your treatment plan, we'll order custom-designed lenses based on your topography data and begin the fitting process. Initial lens trials help us assess fit, comfort, and visual performance. You may need to try several lens designs before we achieve the optimal combination of vision quality and all-day comfort. We'll provide detailed insertion, removal, and care instructions, and ensure you're confident managing your lenses independently. For scleral lenses, adaptation typically occurs within days to two weeks as your eyes adjust to the larger lens size.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2" style={{fontFamily: 'var(--font-cormorant)'}}>Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Follow-up appointments during this period allow us to assess your adaptation to specialty lenses, evaluate visual outcomes, check lens condition and fit, and address any comfort issues. We'll perform visual acuity testing with your lenses in place and examine the corneal surface to ensure healthy wear. Most patients report dramatic visual improvement by this stage, often achieving driving-quality vision that wasn't possible with glasses. If adjustments are needed—lens parameter changes, prescription updates, or switching to a different lens design—we'll make those modifications to optimize your results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2" style={{fontFamily: 'var(--font-cormorant)'}}>Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your treatment is optimized, we establish a regular monitoring schedule—typically every 6-12 months for stable conditions, more frequently for progressive conditions like keratoconus. These maintenance visits include repeat topography imaging to track any corneal changes, assessment of lens fit and condition with replacement as needed, and comprehensive eye health examinations. For progressive conditions, we remain vigilant for signs that additional interventions such as corneal crosslinking might be beneficial. Our goal is to maintain stable, excellent vision while preserving corneal health for the long term. Most patients continue specialty lens wear successfully for many years with proper care and monitoring.
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
            Frequently Asked Questions About Corneal Irregularities
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                How long does treatment for corneal irregularities take?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment duration varies significantly based on the type and severity of your corneal irregularity. For specialty contact lens fitting, the initial evaluation and fitting process typically spans 4-8 weeks as we trial different lens designs and make refinements to achieve optimal vision and comfort. Once your lenses are finalized, most patients adapt quickly and experience improved vision immediately. However, corneal irregularities are often chronic conditions requiring lifelong management rather than a "cure." For progressive conditions like keratoconus, treatment is ongoing with regular monitoring every 6-12 months. If corneal crosslinking is recommended to halt progression, this one-time procedure takes about an hour with recovery over several weeks. The good news is that with proper treatment, most patients achieve stable, functional vision that allows them to resume normal activities.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Will I need medication for corneal irregularities?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medication needs depend on your specific condition and contributing factors. While corneal irregularities themselves aren't treated with medications, supporting therapies often include lubricating eye drops to maintain comfort during specialty lens wear, anti-allergy medications if allergies trigger eye rubbing that worsens your condition, and anti-inflammatory drops if corneal inflammation is present. For patients with concurrent dry eye disease—common among contact lens wearers—prescription medications like cyclosporine (Restasis) or lifitegrast (Xiidra) may be recommended. If you're undergoing corneal crosslinking, antibiotic and anti-inflammatory drops are prescribed during the recovery period. Most patients do not require long-term prescription medications specifically for corneal irregularities; the primary treatment is optical correction through specialty lenses. We'll create a medication plan tailored to your individual needs and contributing factors.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Does insurance cover treatment for corneal irregularities?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage for corneal irregularities varies by plan and the specific treatments required. Medical eye exams, corneal topography imaging, and diagnostic testing are typically covered under medical insurance (not vision plans) when performed for diagnosed corneal conditions like keratoconus or post-surgical complications. Many medical insurance plans also provide coverage for specialty contact lenses when medically necessary—which applies to most cases of significant corneal irregularities where standard lenses cannot provide adequate vision. You may need prior authorization or documentation of medical necessity. Vision insurance plans typically do not cover specialty lenses, but medical plans often do with varying levels of reimbursement. Corneal crosslinking procedures have gained increasing insurance coverage as the evidence base has grown. We work with patients to verify benefits, provide necessary documentation, and explore financing options when out-of-pocket costs are involved. Our team will help you understand your specific coverage before beginning treatment.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What if specialty contact lenses don't work for me?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Specialty contact lenses are successful for the vast majority of patients with corneal irregularities, with success rates exceeding 90% when properly fitted by experienced practitioners. However, if you experience persistent discomfort, inadequate vision improvement, or cannot tolerate lens wear despite trying multiple designs, we have alternative options. We may try different lens modalities—for example, switching from rigid gas permeable lenses to scleral lenses, or from standard scleral designs to mini-scleral or larger diameter options. Hybrid lenses combining RGP optics with soft skirts offer another alternative. For patients who truly cannot tolerate contact lens wear, surgical options exist including intracorneal ring segments (Intacs) that reshape the cornea, corneal crosslinking to halt keratoconus progression, or in advanced cases, corneal transplantation. We maintain relationships with corneal specialists for surgical consultations when needed. Our commitment is to explore all available options until we find a solution that provides you with functional, comfortable vision.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Can you treat corneal irregularities through telehealth?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While initial diagnosis and specialty contact lens fitting require in-person visits with advanced diagnostic equipment and hands-on assessment, telehealth can play a valuable role in ongoing management of corneal irregularities. Once your lenses are fitted and working well, telehealth appointments are excellent for troubleshooting comfort issues, discussing vision changes, reviewing lens care techniques, addressing insertion and removal challenges, and routine check-ins between comprehensive exams. We can also use telehealth for initial consultations to review your history and symptoms before scheduling in-person diagnostic visits. However, certain aspects of care—including topography imaging, lens fitting and adjustments, corneal health examinations, and any time you experience pain, redness, or sudden vision changes—require office visits. Our hybrid approach combines the convenience of virtual care where appropriate with necessary in-person visits for hands-on assessment and advanced diagnostics, giving you the best of both worlds.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Will my corneal irregularity get worse over time?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Prognosis varies depending on the type of corneal irregularity you have. Keratoconus typically progresses most rapidly during teenage years and the twenties, then often stabilizes naturally by the mid-thirties to forties. However, progression rates are unpredictable—some patients experience rapid worsening while others remain stable for decades. Corneal crosslinking can halt progression in active keratoconus with high success rates. Post-surgical irregularities from LASIK or PRK generally remain stable once healing is complete, though vision may fluctuate slightly. Corneal scarring from injury or infection is typically stable unless new trauma occurs. The key to managing any corneal irregularity is regular monitoring with topography imaging to detect changes early. If progression is identified, we can intervene with treatments like crosslinking before significant vision loss occurs. With proper management, education about avoiding eye rubbing, and appropriate optical correction, most patients maintain functional vision throughout their lives. Regular follow-up care is essential for tracking your individual course and adjusting treatment as needed.
              </div>
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
            <Link href="/conditions/dry-eye-syndrome" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic dryness and irritation often accompany corneal irregularities and specialty contact lens wear.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link href="/conditions/astigmatism" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Astigmatism</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Regular and irregular astigmatism affect how light focuses on the retina, causing blurred or distorted vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link href="/conditions/dry-eye-syndrome" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Allergic Conjunctivitis</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Eye allergies trigger rubbing behaviors that can worsen corneal irregularities, particularly keratoconus.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Corneal Irregularities Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face corneal irregularities alone. Our team is ready to help you achieve clearer, more comfortable vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Evaluation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}