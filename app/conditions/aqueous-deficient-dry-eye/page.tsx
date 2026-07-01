import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aqueous Deficient Dry Eye Treatment in Kyle | Spark Eye Care',
  description: 'Expert aqueous deficient dry eye treatment in Kyle. Board-certified care for chronic dry eye caused by tear production deficiency. Telehealth available.',
  keywords: 'aqueous deficient dry eye treatment Kyle, dry eye treatment Kyle, tear deficiency Kyle, lacrimal gland dysfunction, dry eye specialist Kyle',
  openGraph: {
    title: 'Aqueous Deficient Dry Eye Treatment in Kyle | Spark Eye Care',
    description: 'Expert aqueous deficient dry eye treatment in Kyle. Board-certified care for chronic dry eye caused by tear production deficiency.',
    url: 'https://www.sparkeyetx.com/conditions/aqueous-deficient-dry-eye',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function AqueousDeficientDryEyePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Aqueous Deficient Dry Eye</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Aqueous Deficient Dry Eye Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Aqueous deficient dry eye occurs when your lacrimal glands don't produce enough tears to keep your eyes properly lubricated, leading to chronic discomfort and potential vision problems. At Spark Eye Care, we provide comprehensive, evidence-based treatment to restore tear production and relieve your symptoms.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748703.jpeg"
                alt="Dry eye discomfort"
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
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Aqueous Deficient Dry Eye
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Aqueous deficient dry eye (ADDE) is one of the two major classifications of dry eye disease, accounting for approximately 10-15% of all dry eye cases. Unlike evaporative dry eye caused by meibomian gland dysfunction, ADDE results from inadequate production of the aqueous (watery) layer of tears by the lacrimal glands. This deficiency leads to insufficient tear volume, causing the eye surface to become dry, irritated, and vulnerable to damage. The condition can significantly impact quality of life, affecting your ability to read, work on computers, drive at night, and participate in daily activities comfortably. Many people with ADDE experience a paradoxical increase in tearing as the eyes attempt to compensate for the underlying deficiency, leading to confusion about their diagnosis.
            </p>
            <p>
              The causes of aqueous deficient dry eye are diverse and often multifactorial. Sjögren's syndrome, an autoimmune condition that attacks moisture-producing glands, is one of the most common underlying causes and affects approximately 4 million Americans, predominantly women over 40. Non-Sjögren's causes include age-related lacrimal gland dysfunction, hormonal changes during menopause, medications such as antihistamines and antidepressants, inflammatory conditions affecting the lacrimal glands, previous eye surgeries including LASIK, and systemic diseases like rheumatoid arthritis and lupus. Environmental factors such as low humidity, air conditioning, and prolonged screen time can exacerbate the condition. Lacrimal gland obstruction or damage from trauma, radiation therapy, or chronic inflammation can also lead to decreased tear production. Understanding the underlying cause is essential for developing an effective treatment strategy tailored to your specific situation.
            </p>
            <p>
              Professional treatment for aqueous deficient dry eye is crucial because untreated ADDE can lead to serious complications beyond discomfort. Chronic dry eye increases the risk of eye infections, corneal abrasions, corneal ulcers, and in severe cases, vision loss. The constant irritation and inflammation can create a vicious cycle where surface damage further impairs tear production and quality. Many people attempt to self-treat with over-the-counter artificial tears, but these provide only temporary relief and don't address the underlying tear production deficiency. At Spark Eye Care, we utilize comprehensive diagnostic testing to determine the specific type and severity of your dry eye, identify contributing factors, and develop a personalized treatment plan that may include prescription medications to increase tear production, anti-inflammatory therapies, punctal plugs to retain tears, nutritional supplementation, and management of underlying systemic conditions. Early intervention can prevent progression and restore comfort and visual function.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Signs & Symptoms of Aqueous Deficient Dry Eye
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Physical Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Physical Symptoms
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Persistent Dryness Sensation</div>
                    <p className="text-[var(--color-muted)]">A constant feeling that your eyes are dry, gritty, or sandy, even when you haven't been in dry environments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Burning or Stinging Eyes</div>
                    <p className="text-[var(--color-muted)]">Sharp or burning sensations in your eyes that worsen throughout the day or with visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eye Redness and Irritation</div>
                    <p className="text-[var(--color-muted)]">Chronic redness and inflammation that doesn't improve with rest or over-the-counter drops.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Excessive or Paradoxical Tearing</div>
                    <p className="text-[var(--color-muted)]">Watery eyes as your body overcompensates for dryness with reflex tearing that doesn't provide adequate lubrication.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Blurred or Fluctuating Vision</div>
                    <p className="text-[var(--color-muted)]">Vision that becomes blurry during reading or screen time and temporarily clears with blinking.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Light Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to light, glare, or bright environments that makes outdoor activities uncomfortable.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Heavy or Tired Eyelids</div>
                    <p className="text-[var(--color-muted)]">A sensation that your eyelids are heavy or difficult to keep open, especially during extended visual tasks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact on Daily Life */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Impact on Daily Life
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty with Screen Work</div>
                    <p className="text-[var(--color-muted)]">Struggling to work on computers or use digital devices for normal periods without discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Reading Challenges</div>
                    <p className="text-[var(--color-muted)]">Finding it difficult to read books, documents, or labels for extended periods due to eye discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Contact Lens Intolerance</div>
                    <p className="text-[var(--color-muted)]">Inability to wear contact lenses comfortably or for as long as you used to.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Nighttime Driving Problems</div>
                    <p className="text-[var(--color-muted)]">Increased difficulty driving at night due to glare, halos, or blurred vision from tear film instability.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Environmental Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Symptoms that worsen dramatically in air-conditioned spaces, airplanes, or low-humidity environments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Morning Eye Discomfort</div>
                    <p className="text-[var(--color-muted)]">Waking with stuck or uncomfortable eyelids and difficulty opening your eyes in the morning.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Frequent Eye Drop Dependence</div>
                    <p className="text-[var(--color-muted)]">Needing to use artificial tears constantly throughout the day just to maintain minimal comfort.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Makeup Application Difficulties</div>
                    <p className="text-[var(--color-muted)]">Irritation from eye makeup or inability to wear it due to increased sensitivity and tearing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing progression and preserving your eye health and quality of life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How We Treat Aqueous Deficient Dry Eye
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with specialized diagnostic testing to measure your tear production using Schirmer testing, evaluate tear film quality and stability, assess ocular surface damage with vital dye staining, and determine if underlying conditions like Sjögren's syndrome are contributing factors. This thorough evaluation allows us to distinguish aqueous deficient dry eye from other types and identify the root causes. We also review your medical history, medications, and lifestyle factors that may be affecting tear production.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic results, we create a customized treatment strategy that may include prescription medications to stimulate tear production, anti-inflammatory therapies to reduce ocular surface inflammation, punctal plugs to conserve your natural tears, nutritional supplements including omega-3 fatty acids, and management of contributing systemic conditions. We tailor the approach to your specific type and severity of ADDE, lifestyle needs, and treatment goals. Your plan is designed to address both immediate symptom relief and long-term tear production improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Ongoing Care & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Aqueous deficient dry eye requires consistent management and periodic adjustment of your treatment plan. We schedule regular follow-up appointments to assess your response to treatment, measure improvements in tear production and ocular surface health, and modify therapies as needed for optimal results. We monitor for potential complications and adjust medications or interventions based on your progress. Our goal is to achieve sustained improvement in symptoms and prevent long-term damage while minimizing treatment burden and maximizing your quality of life.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Our evidence-based treatment approach for aqueous deficient dry eye includes several proven modalities. <strong>Prescription tear-stimulating medications</strong> such as cyclosporine (Restasis, Cequa) and lifitegrast (Xiidra) reduce inflammation and increase natural tear production over time, typically showing significant improvement within 3-6 months. For patients with underlying autoimmune conditions, we may prescribe systemic immunosuppressants or coordinate with your rheumatologist.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              <strong>Punctal occlusion</strong> using temporary or permanent plugs helps retain your existing tears on the eye surface, providing immediate symptom relief. We also utilize <strong>autologous serum eye drops</strong> for severe cases, which contain growth factors and nutrients from your own blood to promote healing. <strong>Nutritional supplementation</strong> with high-quality omega-3 fatty acids (EPA and DHA) has demonstrated clinical efficacy in improving tear production and reducing inflammation. For advanced cases, we may recommend <strong>prescription secretagogues</strong> or consider emerging therapies including intense pulsed light (IPL) treatment and regenerative approaches. Environmental modifications, proper eyelid hygiene, and optimal artificial tear selection complement these medical therapies for comprehensive management.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why Choose Spark Eye Care for Aqueous Deficient Dry Eye Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Our providers have specialized training in diagnosing and treating complex dry eye conditions, including aqueous deficiency.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">We understand that every patient's dry eye is unique, and we customize treatment plans based on your specific symptoms, causes, and lifestyle.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">Many aspects of dry eye management, including follow-ups and treatment adjustments, can be handled through convenient virtual visits.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Specialized Experience</h3>
              <p className="text-[var(--color-muted)]">We have extensive experience treating aqueous deficient dry eye, including complex cases and patients with underlying autoimmune conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>01</div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive eye examination with specialized dry eye testing. We'll perform Schirmer testing to measure tear production, assess tear film quality and break-up time, examine your ocular surface for signs of damage, and review your medical history and medications. We'll discuss your symptoms in detail and may order additional testing to rule out underlying conditions like Sjögren's syndrome. You'll leave with a clear diagnosis, understanding of your condition, and an initial treatment plan. Many patients begin prescription medications or punctal plug insertion during this visit.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>02</div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll begin your prescribed treatment regimen, which may include daily use of prescription anti-inflammatory drops, omega-3 supplementation, punctal plugs to conserve tears, and optimized artificial tear use. During this phase, it's important to follow your treatment plan consistently, even if you don't see immediate improvement. Some treatments, particularly immunomodulatory medications, require several weeks to begin working. We may schedule a brief check-in visit or telehealth appointment to assess your initial response, address any concerns about medication side effects, and ensure you're using treatments correctly. This is a critical period for establishing good treatment habits.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>03</div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At this stage, most patients begin experiencing noticeable improvement in symptoms. We'll conduct follow-up testing to objectively measure changes in tear production, evaluate ocular surface healing, and assess symptom reduction. This appointment is crucial for determining if your current treatment plan is effective or if adjustments are needed. We may increase medication dosages, add complementary therapies, consider autologous serum drops for persistent cases, or adjust the treatment approach based on your specific response. Many patients see 50-70% improvement in symptoms by this point, though complete resolution may take longer.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>04</div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Long-term Management (Ongoing)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Aqueous deficient dry eye is typically a chronic condition requiring ongoing management, though many patients achieve excellent symptom control with maintenance therapy. We'll establish a long-term follow-up schedule tailored to your stability, typically every 3-6 months once symptoms are well-controlled. During maintenance, we'll monitor for changes in your condition, adjust treatments as needed for seasonal variations or life changes, manage any new medications that might affect tear production, and watch for complications. Many patients are able to reduce treatment intensity over time while maintaining good ocular comfort. Our goal is to keep you comfortable and prevent progression while minimizing treatment burden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Frequently Asked Questions About Aqueous Deficient Dry Eye
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does it take to see improvement with treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The timeline for improvement varies depending on the severity of your condition and the treatments used. Punctal plugs can provide immediate relief by conserving existing tears, often within days. However, prescription anti-inflammatory medications like cyclosporine or lifitegrast typically require 6-12 weeks of consistent use before significant improvement is noticed, with maximum benefit often achieved at 3-6 months. Nutritional supplements like omega-3 fatty acids may take 2-3 months to show effects. Most patients experience some degree of improvement within the first month, with progressive enhancement over time. It's crucial to continue treatment as prescribed even if you don't see immediate results, as aqueous deficient dry eye requires time to heal and restore normal tear production.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Will I need to take medication indefinitely?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                For many patients with aqueous deficient dry eye, long-term medication use is necessary to maintain symptom relief and prevent progression. Aqueous deficiency is often a chronic condition, especially when related to aging, autoimmune disease, or hormonal changes. However, some patients are able to reduce medication frequency or transition to less intensive maintenance therapy once their condition stabilizes. The need for ongoing treatment depends on the underlying cause—patients with Sjögren's syndrome or other systemic conditions typically require continuous management, while those with medication-induced or mild age-related deficiency may eventually taper treatments. We work with each patient to find the minimal effective treatment regimen that maintains comfort and eye health while minimizing medication burden and cost.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover aqueous deficient dry eye treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Coverage for dry eye treatment varies by insurance plan and specific treatments. Most medical insurance plans cover the initial diagnostic evaluation and testing for dry eye disease, as it is recognized as a medical condition affecting eye health. Prescription medications like Restasis, Xiidra, and Cequa are often covered under prescription drug plans, though prior authorization may be required and copays can vary significantly. Punctal plug insertion is typically covered when medically necessary. However, some treatments like nutritional supplements, certain advanced therapies, and premium artificial tears are usually not covered and are out-of-pocket expenses. We will work with your insurance to maximize coverage and provide cost estimates before treatment. For patients with limited coverage, we can discuss alternative treatment options and generic medications that may be more affordable while still effective.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments work for dry eye management?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, telehealth can be very effective for many aspects of aqueous deficient dry eye management, particularly for follow-up care and treatment adjustments. After your initial in-person evaluation with comprehensive diagnostic testing, subsequent appointments to discuss symptom improvement, medication side effects, treatment adherence, and prescription adjustments can often be conducted virtually. Telehealth is especially convenient for patients who are stable on treatment and need periodic check-ins to ensure continued symptom control. However, certain situations require in-person visits, including initial diagnostic testing, significant worsening of symptoms, procedures like punctal plug insertion, and periodic comprehensive examinations to assess ocular surface health. We'll help determine which appointments can be done via telehealth and which require in-office evaluation to ensure you receive optimal care while maximizing convenience.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if my treatment isn't working?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing adequate improvement with your initial treatment plan, there are many alternative and additional options available. First, we'll verify that you're using treatments correctly and consistently, as improper use or non-adherence is a common reason for poor response. We'll also reassess your diagnosis to ensure we're treating the correct type of dry eye or if there are contributing factors we haven't addressed. Treatment adjustments might include switching to different prescription medications, adding complementary therapies like autologous serum drops, considering punctal plugs if not already used, increasing omega-3 supplementation dosage, or addressing underlying systemic conditions more aggressively. For severe refractory cases, we may consider advanced therapies like intense pulsed light treatment, scleral contact lenses for corneal protection, or surgical options. We're committed to finding an effective solution for every patient, even if it requires trying multiple approaches.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Should I be tested for Sjögren's syndrome?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We recommend testing for Sjögren's syndrome in certain situations, as this autoimmune condition is a major cause of aqueous deficient dry eye. You should be evaluated if you have severe dry eye symptoms, particularly if accompanied by dry mouth; moderate to severe aqueous deficiency on Schirmer testing; other autoimmune conditions or family history of autoimmune disease; systemic symptoms like joint pain, fatigue, or dental problems; or dry eye that's resistant to standard treatments. Testing typically includes blood work for specific antibodies (SSA/Ro and SSB/La), assessment of salivary gland function, and potentially a minor salivary gland biopsy. Early diagnosis of Sjögren's syndrome is important because it allows for appropriate systemic treatment that can slow disease progression, explains why standard dry eye treatments may be less effective, and alerts us to monitor for other organ involvement. Even if testing is negative, knowing this information helps us optimize your dry eye treatment approach.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/evaporative-dry-eye" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Evaporative Dry Eye
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Dry eye caused by meibomian gland dysfunction and poor tear film quality, often occurring alongside aqueous deficiency.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/aqueous-deficient-dry-eye" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Sjögren's Syndrome
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                An autoimmune condition that attacks moisture-producing glands, causing severe aqueous deficient dry eye and dry mouth.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/blepharitis" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Blepharitis
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Chronic eyelid inflammation that can compromise tear quality and contribute to dry eye symptoms.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Get Help for Aqueous Deficient Dry Eye Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face aqueous deficient dry eye alone. Our team is ready to help you find relief and protect your eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}