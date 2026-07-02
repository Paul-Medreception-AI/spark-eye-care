import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Fuchs' Dystrophy Treatment in Kyle, TX | Spark Eye Care",
  description: "Expert Fuchs' Dystrophy treatment in Kyle. Board-certified eye care specialists offering comprehensive corneal care, advanced therapies, and personalized treatment plans.",
  keywords: "Fuchs' Dystrophy treatment Kyle, corneal dystrophy Kyle TX, Fuchs' corneal dystrophy, eye specialist Kyle, ophthalmologist Kyle",
  openGraph: {
    title: "Fuchs' Dystrophy Treatment in Kyle, TX | Spark Eye Care",
    description: "Expert treatment for Fuchs' Dystrophy with personalized care plans and advanced corneal therapies.",
    url: 'https://sparkeyetx.com/conditions/fuchs-dystrophy',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function FuchsDystrophyPage() {
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
            <span>Fuchs' Dystrophy</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Fuchs' Dystrophy Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Fuchs' Dystrophy is a progressive corneal condition that can significantly impact your vision and quality of life. At Spark Eye Care, we provide comprehensive evaluation, advanced treatment options, and ongoing management to help preserve your vision and maintain your eye health.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/fuchs-dystrophy.jpg"
                alt="Fuchs endothelial dystrophy evaluation"
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
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Fuchs' Dystrophy
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Fuchs' Dystrophy, also known as Fuchs' Endothelial Corneal Dystrophy (FECD), is a progressive eye disease that affects the cornea—the clear, dome-shaped surface covering the front of your eye. This condition specifically targets the endothelium, a thin layer of cells on the inner surface of the cornea responsible for maintaining proper fluid balance. When these cells gradually deteriorate, fluid accumulates in the cornea, causing swelling, clouding, and progressive vision loss. Fuchs' Dystrophy typically affects both eyes, though one may be more severely impacted than the other. It's estimated that approximately 4% of Americans over age 40 have some form of Fuchs' Dystrophy, with women being three to four times more likely to develop the condition than men. The disease usually manifests in a person's 50s or 60s, though earlier-onset forms can occur. Left untreated, Fuchs' Dystrophy can significantly impair your ability to drive, read, work, and perform daily activities, fundamentally affecting your independence and quality of life.
            </p>
            <p>
              The exact causes of Fuchs' Dystrophy are not fully understood, but research indicates a strong genetic component—if a parent has the condition, there's approximately a 50% chance their children will develop it as well. Scientists have identified several genes associated with the disease, including TCF4, COL8A2, and SLC4A11. Beyond genetics, factors such as aging, oxidative stress, and cellular dysfunction contribute to the progressive loss of endothelial cells. Unlike other parts of the body, corneal endothelial cells have very limited regenerative capacity; once damaged or lost, they cannot be replaced naturally. Risk factors include family history, age over 50, female gender, and possibly smoking and eye trauma. Some patients with Fuchs' Dystrophy also have a history of other eye conditions or systemic diseases. The disease progresses through distinct stages, from asymptomatic changes visible only during examination to advanced stages with significant corneal edema, blurred vision, and painful corneal blisters.
            </p>
            <p>
              Professional evaluation and treatment are essential for managing Fuchs' Dystrophy effectively. Early diagnosis allows for monitoring disease progression and implementing interventions that can preserve vision and delay the need for surgical treatment. At Spark Eye Care in Kyle, our experienced team uses advanced diagnostic technology to assess the health of your corneal endothelium, measure corneal thickness, and evaluate the extent of cellular damage. We develop personalized treatment plans based on your specific stage of disease, symptoms, and visual needs. Treatment options range from conservative management with medications and specialized eyewear in early stages to advanced surgical interventions like Descemet's Stripping Endothelial Keratoplasty (DSEK) or Descemet's Membrane Endothelial Keratoplasty (DMEK) for more advanced cases. Regular follow-up care is crucial for adjusting treatment as the condition evolves and ensuring optimal outcomes. With proper management, many patients maintain functional vision and quality of life for years, and modern surgical techniques offer excellent visual rehabilitation for those who need them.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Fuchs' Dystrophy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Early Stage Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Morning Vision Blur</strong>
                    <p className="text-[var(--color-muted)]">Vision is noticeably worse upon waking, gradually improving as the day progresses and corneal swelling decreases.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Light Sensitivity (Photophobia)</strong>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights, particularly noticeable in sunny conditions or when driving at night with oncoming headlights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Glare and Halos Around Lights</strong>
                    <p className="text-[var(--color-muted)]">Seeing halos or starbursts around lights, especially at night, making driving difficult and potentially dangerous.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Cloudy or Hazy Vision</strong>
                    <p className="text-[var(--color-muted)]">Persistent fogginess or haziness in vision, as if looking through a steamy window that doesn't clear completely.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty with Fine Detail</strong>
                    <p className="text-[var(--color-muted)]">Challenges reading small print, recognizing faces at a distance, or performing detailed work like sewing or crafts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye Discomfort</strong>
                    <p className="text-[var(--color-muted)]">Mild grittiness or feeling that something is in your eye, particularly noticeable in the morning hours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Advanced Stage Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">All-Day Vision Impairment</strong>
                    <p className="text-[var(--color-muted)]">Vision remains blurry throughout the entire day, no longer improving as time passes, significantly affecting daily activities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Painful Corneal Blisters (Bullae)</strong>
                    <p className="text-[var(--color-muted)]">Fluid-filled blisters form on the corneal surface, causing sudden sharp pain when they rupture, particularly upon waking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe Eye Pain</strong>
                    <p className="text-[var(--color-muted)]">Intense, stabbing pain episodes that can last for hours, often requiring immediate medical attention and pain management.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Foreign Body Sensation</strong>
                    <p className="text-[var(--color-muted)]">Persistent feeling of grit, sand, or an object in the eye that doesn't resolve with blinking or eye drops.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Marked Visual Decline</strong>
                    <p className="text-[var(--color-muted)]">Significant loss of visual acuity that glasses or contact lenses cannot correct, impacting independence and safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Corneal Scarring</strong>
                    <p className="text-[var(--color-muted)]">Permanent clouding or scarring of the cornea that can only be addressed through surgical intervention like corneal transplantation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reduced Quality of Life</strong>
                    <p className="text-[var(--color-muted)]">Inability to perform everyday tasks like driving, reading, or working, leading to loss of independence and emotional distress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our team at Spark Eye Care specializes in diagnosing and managing Fuchs' Dystrophy at all stages, helping you preserve your vision and maintain your quality of life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Fuchs' Dystrophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including slit-lamp biomicroscopy to evaluate corneal clarity, specular microscopy to assess endothelial cell count and morphology, and pachymetry to measure corneal thickness. We also perform visual acuity testing and review your medical and family history to understand the full scope of your condition. This comprehensive evaluation allows us to accurately stage your Fuchs' Dystrophy and identify any concurrent eye conditions that may affect treatment planning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment findings, we develop a customized treatment approach tailored to your disease stage and individual needs. For early-stage Fuchs' Dystrophy, we may recommend hypertonic saline drops or ointments to draw excess fluid from the cornea, along with strategies to minimize morning swelling such as using a hair dryer on cool setting to gently dry the eye surface. We also address any contributing factors like dry eye disease or inflammation. Your treatment plan includes clear explanations of what to expect, lifestyle modifications that can help, and a schedule for monitoring disease progression.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Fuchs' Dystrophy requires consistent monitoring to track disease progression and adjust treatment as needed. We schedule regular follow-up appointments to reassess corneal thickness, endothelial cell health, and visual function. If conservative treatments become insufficient, we discuss advanced options including referral for corneal transplantation procedures like DSEK or DMEK, which replace only the diseased endothelial layer while preserving healthy corneal tissue. Throughout your care journey, we provide education, support, and coordination with corneal specialists when necessary, ensuring you receive optimal care at every stage.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our evidence-based approach to treating Fuchs' Dystrophy combines medical management with surgical intervention when appropriate. For symptom relief in early to moderate stages, we prescribe hypertonic sodium chloride solutions (5% drops or ointment) which work by drawing excess fluid out of the swollen cornea through osmotic pressure. These medications are typically used upon waking and throughout the day as needed. We may also recommend bandage contact lenses for patients experiencing recurrent corneal erosions or painful bullae, providing protection and comfort while the epithelium heals.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              When medical management no longer provides adequate symptom control or vision, surgical intervention becomes necessary. Modern endothelial keratoplasty procedures like DSEK (Descemet's Stripping Endothelial Keratoplasty) and DMEK (Descemet's Membrane Endothelial Keratoplasty) have revolutionized treatment outcomes for Fuchs' Dystrophy. These selective transplant procedures replace only the diseased endothelial layer rather than the entire cornea, resulting in faster recovery, better visual outcomes, and lower rejection rates compared to traditional full-thickness corneal transplants. We work closely with experienced corneal surgeons to coordinate timing of surgical referral and provide comprehensive pre- and post-operative care. Additionally, emerging therapies such as Rho-kinase inhibitors are being investigated for their potential to stimulate endothelial cell function and may offer future non-surgical treatment options.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Fuchs' Dystrophy Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our team includes board-certified eye care specialists with advanced training in corneal diseases and extensive experience managing Fuchs' Dystrophy at all stages.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's experience with Fuchs' Dystrophy is unique, and we tailor treatment plans to your specific symptoms, lifestyle needs, and goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Convenient Telehealth Options</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up consultations, medication adjustments, and care coordination, we offer telehealth appointments that make ongoing management more convenient.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Specialized Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have extensive experience managing corneal dystrophies and work collaboratively with leading corneal surgeons when advanced interventions are needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically lasts 60-90 minutes and includes multiple diagnostic tests to assess your corneal health. We'll measure your visual acuity, evaluate endothelial cell density using specular microscopy, measure corneal thickness with pachymetry, and perform slit-lamp examination to visualize corneal guttae and edema. You'll receive a complete explanation of your diagnosis, disease stage, and recommended treatment approach. We'll answer all your questions and provide educational materials about Fuchs' Dystrophy. Most patients leave with a clear understanding of their condition and a prescription for hypertonic saline if appropriate.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll begin your prescribed treatment regimen, which typically includes hypertonic saline drops or ointment used upon waking and as needed throughout the day. During this period, you'll learn optimal application techniques and develop a routine that fits your lifestyle. We encourage you to keep a symptom diary noting morning vision quality, any pain episodes, and how your vision changes throughout the day. Many patients notice gradual improvement in morning blurriness within the first few weeks, though results vary based on disease severity. We're available for questions or concerns that arise as you adjust to your new treatment routine.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we'll reassess your corneal health and evaluate treatment effectiveness. We'll repeat key measurements including pachymetry and visual acuity testing to objectively document any changes. Based on your response to treatment and symptom improvement, we may adjust medication frequency, add complementary therapies, or maintain your current regimen. This is also an opportunity to discuss any challenges you've encountered and problem-solve together. For patients whose condition remains stable with medical management, we'll establish a monitoring schedule—typically every 3-6 months—to track disease progression over time.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Fuchs' Dystrophy is a progressive condition requiring ongoing care. For patients in early stages, medical management may remain effective for many years, allowing you to maintain functional vision and quality of life. We continue regular monitoring to detect changes that might indicate disease progression. If and when conservative treatments become insufficient—typically indicated by all-day vision impairment, frequent painful episodes, or inability to perform necessary daily activities—we'll have detailed discussions about surgical options. We'll coordinate referral to experienced corneal surgeons and remain involved in your care throughout the surgical process and recovery. Our goal is to help you maintain the best possible vision and eye comfort throughout all stages of your condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Fuchs' Dystrophy
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>How long does treatment for Fuchs' Dystrophy take?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Fuchs' Dystrophy is a chronic, progressive condition that requires long-term management rather than a finite treatment course. Early-stage disease can often be managed successfully with hypertonic saline solutions and supportive care for many years. The timeline for progression varies significantly among individuals—some patients maintain stable vision for a decade or more with conservative treatment, while others progress more rapidly. If surgical intervention becomes necessary, the corneal transplant procedure itself takes 1-2 hours, with visual recovery occurring gradually over 3-12 months depending on the technique used (DSEK vs. DMEK). Throughout all stages, ongoing monitoring and care adjustments ensure optimal outcomes.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>Is medication required for Fuchs' Dystrophy?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                For early to moderate-stage Fuchs' Dystrophy, hypertonic saline eye drops or ointment (typically 5% sodium chloride) are the primary medical treatment and are highly recommended. These medications work by drawing excess fluid out of the swollen cornea, reducing morning blurriness and improving vision throughout the day. While not curative, they provide meaningful symptom relief for many patients and may delay the need for surgery. In advanced stages where corneal edema is severe and constant, medications become less effective because the endothelial dysfunction is too extensive. At that point, surgical intervention (corneal transplantation) becomes the definitive treatment. Some patients also benefit from lubricating eye drops for concurrent dry eye symptoms or anti-inflammatory medications if needed.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>Does insurance cover Fuchs' Dystrophy treatment?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Yes, treatment for Fuchs' Dystrophy is typically covered by health insurance, including Medicare, as it is a medical eye condition rather than a cosmetic concern. Coverage generally includes diagnostic testing (specular microscopy, pachymetry, comprehensive eye exams), prescription medications like hypertonic saline solutions, and surgical interventions when medically necessary. Corneal transplantation procedures (DSEK, DMEK) are considered medically necessary when conservative treatment fails and vision impairment significantly affects daily functioning. Coverage specifics vary by insurance plan, so we recommend verifying your benefits before treatment. Our billing team is experienced in working with insurance companies and can help you understand your coverage, obtain prior authorizations when needed, and maximize your benefits.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>What if treatment isn't working?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                If hypertonic saline and conservative measures aren't providing adequate symptom relief, it doesn't mean you're out of options—it typically indicates disease progression requiring more advanced intervention. First, we'll ensure you're using medications correctly and optimally, as technique and frequency can significantly impact effectiveness. We may try increasing the concentration or frequency of hypertonic saline, adding bandage contact lenses for comfort, or addressing contributing factors like dry eye or inflammation. If conservative treatments truly become insufficient despite optimization, we'll have a thorough discussion about surgical options. Modern endothelial keratoplasty procedures (DSEK and DMEK) have excellent success rates, with over 90% of patients achieving significant visual improvement. We'll help you understand the benefits, risks, and expected outcomes of surgery, and coordinate referral to experienced corneal surgeons when the time is right.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>Can telehealth work for Fuchs' Dystrophy management?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Telehealth can be valuable for certain aspects of Fuchs' Dystrophy management, though in-person examinations remain essential for diagnosis and comprehensive monitoring. Initial diagnosis always requires in-person evaluation with specialized equipment like slit-lamp biomicroscopy and specular microscopy. However, once diagnosed and stable on treatment, telehealth appointments can be useful for follow-up consultations, discussing symptom changes, adjusting medication regimens, providing education and support, addressing concerns, and determining when in-person re-evaluation is needed. Telehealth is particularly convenient for patients with mobility challenges or those who live farther from our Kyle office. That said, regular in-person examinations remain necessary—typically every 3-6 months—to objectively measure corneal thickness, assess endothelial health, and monitor disease progression. We use a hybrid approach, combining convenient telehealth check-ins with necessary in-person assessments.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[var(--color-ink)]">
                <span>Will I eventually need a corneal transplant?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Not all patients with Fuchs' Dystrophy require corneal transplantation—the disease progresses at different rates for different people, and some individuals maintain adequate vision with conservative treatment throughout their lives. However, Fuchs' Dystrophy is progressive, and many patients eventually develop corneal edema severe enough that surgical intervention becomes necessary. Factors influencing progression include genetic variants, disease onset age, initial severity, and individual cellular characteristics. Generally, patients diagnosed in their 40s or 50s are more likely to eventually need surgery than those diagnosed later in life. The good news is that modern selective transplant techniques (DSEK and DMEK) have revolutionized outcomes, offering faster recovery, better vision, and lower rejection rates than older full-thickness procedures. If transplantation becomes necessary, we'll ensure you're fully informed, connected with excellent surgeons, and supported throughout the process. Many patients achieve 20/20 or near-20/20 vision after successful endothelial keratoplasty.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/corneal-irregularities" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Keratoconus</h4>
              <p className="text-[var(--color-muted)]">
                Progressive thinning and bulging of the cornea causing distorted vision and requiring specialized management including cross-linking and specialty contact lenses.
              </p>
            </a>
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)]">
                Chronic eye surface condition causing discomfort, blurred vision, and irritation that often coexists with corneal dystrophies and requires comprehensive treatment.
              </p>
            </a>
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Cataracts</h4>
              <p className="text-[var(--color-muted)]">
                Clouding of the eye's natural lens that frequently occurs alongside Fuchs' Dystrophy, requiring careful surgical planning and timing for optimal outcomes.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
            Get Help for Fuchs' Dystrophy Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face Fuchs' Dystrophy alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded font-semibold hover:bg-[var(--color-cream)] transition-colors">
              Schedule Your Consultation
            </a>
            <a href="/conditions" className="inline-block border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}