import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Evaporative Dry Eye Treatment in Kyle | Spark Eye Care',
  description: 'Expert evaporative dry eye treatment in Kyle. Board-certified care for meibomian gland dysfunction, tear film instability, and chronic eye discomfort. Telehealth available.',
  keywords: 'evaporative dry eye treatment Kyle, meibomian gland dysfunction Kyle, dry eye specialist Kyle, MGD treatment, tear film therapy',
  openGraph: {
    title: 'Evaporative Dry Eye Treatment in Kyle | Spark Eye Care',
    description: 'Comprehensive treatment for evaporative dry eye and meibomian gland dysfunction in Kyle, Texas.',
    url: 'https://www.sparkeyetx.com/conditions/evaporative-dry-eye',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function EvaporativeDryEyePage() {
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
            <span>Evaporative Dry Eye</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Evaporative Dry Eye Treatment in Kyle
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Evaporative dry eye affects millions, causing persistent discomfort, burning, and vision fluctuations due to poor tear quality and meibomian gland dysfunction. At Spark Eye Care, we provide comprehensive, evidence-based treatment to restore your tear film stability and help you find lasting relief.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/dry-eye.jpg"
                alt="Woman experiencing evaporative dry eye"
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
            Understanding Evaporative Dry Eye
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Evaporative dry eye is the most common form of dry eye disease, accounting for approximately 86% of all dry eye cases. Unlike aqueous deficient dry eye where tear production is insufficient, evaporative dry eye occurs when tears evaporate too quickly from the eye surface due to poor oil quality in the tear film. This condition is primarily caused by meibomian gland dysfunction (MGD), where the tiny oil-producing glands in your eyelids become blocked or produce abnormal oils that cannot properly protect your tears from evaporation. The result is chronic eye irritation, a gritty sensation, intermittent blurred vision, eye redness, and paradoxically, excessive tearing as your eyes attempt to compensate for the unstable tear film. For many people, these symptoms worsen throughout the day, particularly during activities that reduce blink rate such as computer work, reading, or driving.
            </p>
            
            <p>
              Multiple factors contribute to the development of evaporative dry eye. Age is a significant risk factor, as meibomian gland function naturally declines over time, with prevalence increasing dramatically after age 40. Hormonal changes, particularly in women during menopause, can affect oil gland function. Environmental factors including low humidity, air conditioning, heating systems, and wind exposure accelerate tear evaporation. Extended screen time reduces blink frequency by up to 66%, preventing adequate oil distribution across the eye surface. Contact lens wear, certain medications (including antihistamines, decongestants, and blood pressure medications), inflammatory conditions like rosacea and blepharitis, and incomplete eyelid closure during sleep all contribute to meibomian gland dysfunction and evaporative dry eye. Additionally, dietary factors—particularly insufficient omega-3 fatty acid intake—can affect the quality of oils produced by the meibomian glands.
            </p>
            
            <p>
              Professional treatment for evaporative dry eye is essential because this condition is progressive and rarely resolves without intervention. Left untreated, chronic inflammation can cause permanent damage to the meibomian glands, leading to gland dropout where the glands atrophy and lose function entirely. This makes treatment increasingly difficult and less effective over time. Beyond the physical discomfort, untreated evaporative dry eye significantly impacts quality of life, interfering with reading, computer work, driving (especially at night), and outdoor activities. The condition can also compromise the success of other eye procedures, including cataract surgery and refractive surgery. Early diagnosis and treatment not only provide symptom relief but also preserve meibomian gland function, prevent irreversible changes, and maintain long-term eye health. At Spark Eye Care, we utilize advanced diagnostic technology to assess tear film quality, meibomian gland structure, and inflammation levels, enabling us to create targeted treatment plans that address the root causes of your evaporative dry eye rather than simply masking symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Evaporative Dry Eye
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Physical Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Burning or Stinging Sensation</p>
                    <p className="text-[var(--color-muted)]">Persistent burning feeling in the eyes that often worsens as the day progresses or during extended visual tasks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Gritty or Sandy Feeling</p>
                    <p className="text-[var(--color-muted)]">Sensation of having sand or foreign particles in your eyes, even when nothing is actually present.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fluctuating Vision</p>
                    <p className="text-[var(--color-muted)]">Intermittent blurred vision that temporarily improves with blinking, caused by unstable tear film between blinks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Redness</p>
                    <p className="text-[var(--color-muted)]">Chronic redness and bloodshot appearance due to inflammation and irritation from rapid tear evaporation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Excessive Watering or Tearing</p>
                    <p className="text-[var(--color-muted)]">Paradoxical tearing as your eyes produce reflex tears to compensate for poor tear quality and rapid evaporation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Light Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights, glare, and sunlight due to compromised corneal surface and inflammation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eyelid Inflammation</p>
                    <p className="text-[var(--color-muted)]">Red, swollen, or crusty eyelid margins indicating blepharitis or meibomian gland dysfunction.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Impact on Daily Life</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Computer Work</p>
                    <p className="text-[var(--color-muted)]">Symptoms worsen significantly during screen time due to reduced blink rate and increased tear evaporation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Contact Lens Intolerance</p>
                    <p className="text-[var(--color-muted)]">Inability to wear contact lenses comfortably or for extended periods due to insufficient tear film quality.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reading Challenges</p>
                    <p className="text-[var(--color-muted)]">Discomfort and vision fluctuation during sustained reading tasks that require visual concentration.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Driving Difficulties</p>
                    <p className="text-[var(--color-muted)]">Compromised night driving ability and difficulty in windy conditions or with air vents directed toward face.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Outdoor Activity Limitations</p>
                    <p className="text-[var(--color-muted)]">Symptoms worsen in wind, low humidity, air conditioning, or high-altitude environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</p>
                    <p className="text-[var(--color-muted)]">Morning eye discomfort and symptoms upon waking, particularly if eyelids don't close completely during sleep.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Quality of Life</p>
                    <p className="text-[var(--color-muted)]">Chronic discomfort affects work productivity, leisure activities, and overall well-being and life satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preserves meibomian gland function, and prevents irreversible changes that make the condition more difficult to manage.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Evaporative Dry Eye
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with advanced diagnostic imaging to evaluate your meibomian gland structure, assess tear film quality and breakup time, measure lipid layer thickness, and evaluate inflammation markers. This detailed assessment allows us to identify the specific dysfunction patterns causing your symptoms and determine the most effective treatment approach for your unique situation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic findings, we create a customized treatment protocol that may include in-office therapies, at-home management strategies, and lifestyle modifications. We explain the rationale behind each treatment component, set realistic expectations for improvement timelines, and ensure you understand how to perform at-home therapies effectively to maximize results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Evaporative dry eye is a chronic condition requiring long-term management. We schedule regular follow-up appointments to assess treatment response, adjust therapies as needed, and monitor meibomian gland function over time. Our goal is not just symptom relief but preserving gland function, preventing progression, and maintaining your long-term eye health and comfort.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-4">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach incorporates multiple evidence-based therapies tailored to your specific needs. Warm compress therapy with specialized masks helps liquefy thickened meibomian gland secretions, improving oil flow to the tear film. Lid hygiene protocols remove inflammatory debris and biofilm from eyelid margins, reducing bacterial colonization that contributes to gland dysfunction. Manual meibomian gland expression in-office clears blocked glands and restores oil flow.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              For more severe cases, we may recommend intense pulsed light (IPL) therapy, which reduces inflammation and improves meibomian gland function through photothermal effects. Prescription anti-inflammatory medications, including topical cyclosporine or lifitegrast, address underlying inflammation that perpetuates gland dysfunction. Omega-3 fatty acid supplementation improves meibomian gland oil quality and reduces inflammation systemically.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Environmental modifications—including proper screen ergonomics, humidity control, protective eyewear in windy conditions, and awareness of medication effects—complement medical treatments. For patients with concurrent blepharitis or demodex infestation, we incorporate targeted antimicrobial or antiparasitic treatments. Our comprehensive approach addresses all contributing factors to achieve optimal, lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Evaporative Dry Eye Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team brings specialized training in dry eye disease and meibomian gland dysfunction, staying current with the latest research and treatment innovations. We utilize advanced diagnostic technology to precisely identify dysfunction patterns and create evidence-based treatment plans tailored to your specific condition severity and contributing factors.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that evaporative dry eye manifests differently in each patient based on gland dysfunction severity, lifestyle factors, and concurrent conditions. Your treatment plan is customized to your specific needs, symptoms, and goals, with ongoing adjustments based on your response to therapy, ensuring optimal outcomes and long-term success.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Convenient Telehealth Access</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Many aspects of dry eye management can be effectively conducted via telehealth, including follow-up assessments, treatment adjustments, and ongoing support. We offer flexible virtual appointments that fit your schedule, making it easier to maintain consistent care without the burden of frequent in-person visits, particularly valuable for ongoing management.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">Extensive Treatment Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have successfully treated hundreds of patients with evaporative dry eye and meibomian gland dysfunction, from mild cases requiring only lifestyle modifications to severe cases needing intensive multimodal therapy. Our experience across the full spectrum of disease severity enables us to anticipate challenges, optimize treatment protocols, and achieve the best possible outcomes.
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
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive evaluation includes detailed symptom assessment, meibomian gland imaging to visualize gland structure and dropout, tear film analysis including breakup time and lipid layer evaluation, inflammation assessment, and examination of eyelid margins for signs of blepharitis or other contributing conditions. We'll discuss your medical history, current medications, lifestyle factors, and environmental exposures. This thorough evaluation typically takes 45-60 minutes and provides the foundation for your personalized treatment plan. You'll leave with a clear understanding of your specific dysfunction patterns and recommended treatment approach.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment initiation involves establishing your at-home therapy routine, including proper warm compress technique, lid hygiene protocols, and any prescribed medications or supplements. For patients receiving in-office treatments like gland expression or IPL therapy, we schedule these procedures during this phase. Many patients begin noticing some improvement within 2-3 weeks, though complete response typically takes longer. We provide detailed instructions, demonstration videos, and ongoing support to ensure you're performing therapies correctly. Environmental modifications and lifestyle changes are implemented during this period to support treatment effectiveness.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Follow-up assessments evaluate your symptom improvement, objective measures of tear film stability, meibomian gland function response, and treatment adherence. Most patients experience significant improvement by 6-8 weeks, though the timeline varies based on disease severity and gland damage extent. We adjust treatment protocols based on your response—some therapies may be reduced or discontinued while others are continued for maintenance. If progress is slower than expected, we explore potential contributing factors, adherence challenges, or the need for additional treatment modalities. This is a collaborative process where your feedback guides treatment refinement.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Evaporative dry eye is a chronic condition requiring ongoing management to maintain results and prevent relapse. Once your symptoms are well-controlled, we transition to a maintenance protocol with reduced treatment intensity and less frequent follow-up visits, typically every 3-6 months. Many patients continue simplified at-home therapies indefinitely to preserve gland function and prevent symptom recurrence. We monitor for disease progression, adjust treatments seasonally or based on lifestyle changes, and provide ongoing education and support. Our goal is sustainable symptom control, preserved meibomian gland function, and maintained quality of life with the least burdensome treatment regimen possible.
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
            Frequently Asked Questions About Evaporative Dry Eye
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                How long does treatment for evaporative dry eye take to work?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The timeline for improvement varies based on disease severity, meibomian gland damage extent, and treatment adherence. Most patients notice some symptom reduction within 2-4 weeks of starting treatment, with more substantial improvement by 6-8 weeks. However, complete optimization of meibomian gland function may take 3-4 months, particularly in cases with significant gland obstruction or atrophy. Patients with mild dysfunction and minimal gland dropout typically respond faster than those with severe, long-standing disease. Consistent adherence to at-home therapies significantly impacts treatment speed and effectiveness. In-office procedures like gland expression or IPL therapy may provide more rapid initial improvement, which is then maintained through ongoing at-home management.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Is medication always required for evaporative dry eye treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Not necessarily. Many patients with mild to moderate evaporative dry eye achieve excellent results with non-pharmaceutical approaches including warm compresses, lid hygiene, omega-3 supplementation, and environmental modifications. However, patients with significant inflammation, severe symptoms, or inadequate response to conservative measures often benefit from prescription anti-inflammatory medications like cyclosporine (Restasis), lifitegrast (Xiidra), or topical corticosteroids for short-term use. These medications address the underlying inflammation that perpetuates meibomian gland dysfunction and prevents healing. In cases with concurrent bacterial blepharitis, antibiotic ointments or oral antibiotics may be needed. Our approach is to start with the least invasive effective treatments and escalate to medications only when necessary based on your specific condition severity and treatment response.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Does insurance cover evaporative dry eye treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Coverage varies depending on your insurance plan and the specific treatments required. Diagnostic evaluation and medical management of evaporative dry eye are typically covered as this is a medical condition, not a cosmetic concern. Office visits, diagnostic testing, and prescription medications usually fall under standard medical insurance coverage, though copays, deductibles, and medication formulary restrictions apply. However, some advanced treatments like intense pulsed light (IPL) therapy or specialized in-office procedures may not be covered by all insurance plans and could be considered elective, requiring out-of-pocket payment. Over-the-counter products like specialized warm compress masks, lid hygiene products, and omega-3 supplements are generally not covered. We provide detailed documentation of medical necessity and work with your insurance company to maximize coverage whenever possible. Our team can provide cost estimates and discuss payment options during your consultation.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                What if my evaporative dry eye doesn't improve with treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing adequate improvement with initial treatment, we systematically evaluate potential reasons and adjust our approach accordingly. Common factors affecting treatment response include inadequate adherence to at-home therapies (often due to time constraints or technique issues), unidentified contributing conditions like demodex infestation or autoimmune disease, concurrent aqueous deficiency requiring additional treatment, environmental or occupational factors overwhelming treatment effectiveness, or severe irreversible meibomian gland atrophy limiting recovery potential. We reassess your diagnosis, evaluate treatment technique and adherence, consider additional diagnostic testing to identify overlooked contributing factors, and escalate to more intensive therapies. Options for resistant cases include prescription anti-inflammatory medications, in-office procedures like IPL or gland expression, treatment of concurrent conditions, or referral to specialized dry eye centers for advanced therapies. Most patients ultimately achieve significant improvement with appropriate treatment adjustments, though expectations must be realistic in cases with extensive gland damage.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can evaporative dry eye treatment be done through telehealth?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many aspects of evaporative dry eye management can be effectively conducted via telehealth, though initial diagnosis typically requires in-person evaluation with specialized equipment to assess meibomian gland structure and tear film quality. However, once diagnosed, telehealth appointments work well for follow-up assessments, discussing symptom changes and treatment response, adjusting medication regimens, reviewing at-home therapy technique, addressing treatment adherence challenges, and providing ongoing support and education. Telehealth is particularly valuable for patients with transportation limitations, busy schedules, or those who've achieved stable symptom control and need only periodic monitoring. For patients requiring in-office procedures like gland expression or IPL therapy, hybrid care with periodic in-person visits supplemented by telehealth follow-ups offers convenience while ensuring comprehensive treatment. We'll discuss whether telehealth is appropriate for your specific situation during your initial consultation.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Will I need treatment for evaporative dry eye forever?
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Evaporative dry eye and meibomian gland dysfunction are chronic conditions that typically require long-term management, though treatment intensity can often be significantly reduced once symptoms are controlled. The goal is not necessarily cure but rather sustainable symptom control with the least burdensome treatment regimen. Many patients achieve excellent results with simplified maintenance protocols—perhaps warm compresses a few times weekly, ongoing omega-3 supplementation, and environmental awareness—rather than the intensive daily treatments needed initially. Some patients experience periods of remission with minimal symptoms requiring little intervention, while others need more consistent ongoing management. Factors affecting long-term treatment needs include underlying disease severity, age-related changes in gland function, hormonal influences, environmental and occupational exposures, and concurrent health conditions. Discontinuing all treatment typically results in symptom recurrence as the underlying gland dysfunction persists, though the timeline varies. We work with you to find the minimal effective maintenance regimen that preserves your quality of life while fitting realistically into your lifestyle.
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
            <a href="/conditions/meibomian-gland-dysfunction" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="text-xl font-cormorant font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Meibomian Gland Dysfunction
              </h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive treatment for blocked meibomian glands, the primary cause of evaporative dry eye, using advanced diagnostic imaging and targeted therapies.
              </p>
            </a>
            
            <a href="/conditions/blepharitis" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="text-xl font-cormorant font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Blepharitis
              </h4>
              <p className="text-[var(--color-muted)]">
                Treatment for eyelid inflammation that often coexists with evaporative dry eye, addressing bacterial colonization and inflammatory debris affecting tear quality.
              </p>
            </a>
            
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="text-xl font-cormorant font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Chronic Dry Eye Disease
              </h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive management of all forms of chronic dry eye, including mixed evaporative and aqueous deficiency types, with personalized multimodal treatment approaches.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Evaporative Dry Eye Today
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-95">
            You don't have to face evaporative dry eye alone. Our team is ready to help you find lasting relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}