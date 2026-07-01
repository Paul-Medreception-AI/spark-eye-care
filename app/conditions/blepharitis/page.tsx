import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blepharitis Treatment in Kyle, TX | Spark Eye Care',
  description: 'Expert blepharitis treatment in Kyle, Texas. Board-certified eye care specialists offering personalized treatment plans for chronic eyelid inflammation. Schedule your consultation today.',
  keywords: 'blepharitis treatment Kyle, eyelid inflammation Kyle TX, dry eye treatment, meibomian gland dysfunction, eye care Kyle',
  openGraph: {
    title: 'Blepharitis Treatment in Kyle, TX | Spark Eye Care',
    description: 'Expert blepharitis treatment in Kyle, Texas. Personalized care for chronic eyelid inflammation and dry eye symptoms.',
    url: 'https://sparkeyetx.com/conditions/blepharitis',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function BlepharitisPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Blepharitis</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Blepharitis Treatment in Kyle
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl">
            Chronic eyelid inflammation doesn't have to disrupt your daily life. At Spark Eye Care, we provide comprehensive, evidence-based treatment for blepharitis that addresses both symptoms and underlying causes, helping you achieve lasting comfort and healthier eyes.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Blepharitis
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Blepharitis is a common and chronic inflammatory condition affecting the eyelids, particularly the areas where the eyelashes grow. This condition causes redness, irritation, and discomfort along the eyelid margins and can significantly impact your quality of life. Affecting millions of Americans, blepharitis is one of the most frequent reasons patients seek eye care. While it's not typically vision-threatening, it can lead to persistent discomfort, crusty debris around the lashes, burning sensations, and even complications like styes, chalazia, or dry eye disease if left untreated. Many patients experience symptoms that come and go, often worsening during certain seasons or periods of stress, making professional management essential for long-term relief.
            </p>
            <p>
              The causes of blepharitis are multifactorial and often overlapping. The two primary types are anterior blepharitis, which affects the outer front edge of the eyelid where eyelashes attach, and posterior blepharitis, which involves the inner edge of the eyelid that contacts the eye, specifically the meibomian glands that produce the oily layer of tears. Anterior blepharitis is commonly caused by bacteria (particularly Staphylococcus) or seborrheic dermatitis, while posterior blepharitis results from meibomian gland dysfunction (MGD) where these oil glands become clogged or produce poor-quality oils. Risk factors include having oily skin, rosacea, dandruff, allergies, eyelash mites (Demodex), contact lens wear, and certain autoimmune conditions. Environmental factors like dry climates, air pollution, and prolonged screen time can also exacerbate symptoms. Understanding your specific type and triggers is crucial for effective treatment.
            </p>
            <p>
              Professional treatment is essential because blepharitis requires more than over-the-counter remedies. While good eyelid hygiene is foundational, the condition often needs targeted medical intervention to break the cycle of inflammation and prevent complications. Without proper treatment, blepharitis can lead to chronic dry eye, permanent changes to the eyelid margin, recurrent infections, corneal damage from insufficient tear quality, and even eyelash loss. At Spark Eye Care in Kyle, we take a comprehensive approach that combines in-office treatments, prescription therapies when appropriate, and customized home care protocols. Our goal is not just to provide temporary relief, but to help you achieve long-term control over your symptoms and protect your ocular health for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Signs & Symptoms of Blepharitis
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Visual & Comfort Symptoms
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Red, swollen eyelids</strong>
                    <p className="text-[var(--color-muted)]">Persistent inflammation along the eyelid margins that may worsen throughout the day or upon waking.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Burning or stinging sensation</strong>
                    <p className="text-[var(--color-muted)]">A persistent gritty, burning feeling in the eyes that often intensifies with reading or screen use.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Crusty debris on lashes</strong>
                    <p className="text-[var(--color-muted)]">Flakes, scales, or crust that accumulate at the base of eyelashes, especially noticeable in the morning.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Excessive tearing or watery eyes</strong>
                    <p className="text-[var(--color-muted)]">Paradoxical tearing that occurs when poor tear quality triggers reflex tearing as your eyes try to compensate.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Light sensitivity</strong>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights or sunlight due to ocular surface inflammation and tear film instability.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred vision</strong>
                    <p className="text-[var(--color-muted)]">Intermittent vision blur, particularly between blinks, caused by unstable tear film and debris on the ocular surface.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Physical & Behavioral Changes
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent eye rubbing</strong>
                    <p className="text-[var(--color-muted)]">Constant urge to rub or touch your eyes due to itching and irritation, which can worsen inflammation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eyelashes falling out</strong>
                    <p className="text-[var(--color-muted)]">Loss of eyelashes or misdirected lash growth due to chronic inflammation of the hair follicles.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Recurrent styes or chalazia</strong>
                    <p className="text-[var(--color-muted)]">Repeated eyelid bumps or infections caused by blocked oil glands along the eyelid margin.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty wearing contact lenses</strong>
                    <p className="text-[var(--color-muted)]">Increased discomfort or intolerance to contact lenses due to poor tear quality and eyelid inflammation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Foamy tears or discharge</strong>
                    <p className="text-[var(--color-muted)]">Frothy appearance to tears or sticky discharge, indicating meibomian gland dysfunction and poor oil secretion.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eyelids stuck together upon waking</strong>
                    <p className="text-[var(--color-muted)]">Matting of the eyelashes and difficulty opening eyes in the morning due to overnight secretion buildup.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Avoiding activities that worsen symptoms</strong>
                    <p className="text-[var(--color-muted)]">Limiting reading, computer work, or outdoor activities due to discomfort and symptom exacerbation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and can prevent complications that affect your vision and quality of life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How We Treat Blepharitis
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough evaluation where we examine your eyelids under magnification, assess your meibomian gland function, evaluate tear quality and quantity, and identify any contributing factors like Demodex mites or seborrheic dermatitis. We take time to understand your symptom patterns, lifestyle factors, and previous treatments to develop a complete picture of your condition and its impact on your daily life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific type and severity of blepharitis, we create a customized treatment protocol that may include prescription medications, in-office procedures like lid debridement or expression of blocked glands, specialized eyelid hygiene products, warm compress therapy protocols, and nutritional recommendations including omega-3 supplementation. We ensure you understand each component of your plan and why it's important for your particular situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Ongoing Care & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Blepharitis is a chronic condition that requires consistent management to maintain results. We schedule regular follow-up visits to assess your progress, adjust treatments as needed, and teach you maintenance strategies that fit your lifestyle. Our team provides ongoing support through telehealth check-ins when appropriate, ensuring you have the guidance you need to keep symptoms under control long-term and prevent flare-ups before they become problematic.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based approach utilizes the latest advancements in blepharitis management. Treatment modalities may include antibiotic or anti-inflammatory medications (topical ointments, oral antibiotics for severe cases, or steroid drops for acute flares), prescription eyelid cleansers containing tea tree oil or hypochlorous acid to address Demodex and bacterial colonization, intense pulsed light (IPL) therapy referrals for refractory meibomian gland dysfunction, thermal pulsation treatments to open blocked glands, and lifestyle modifications addressing diet, screen time, and environmental triggers. We stay current with emerging therapies and tailor our recommendations based on the most effective, scientifically supported interventions for your specific presentation. Our goal is not just symptom relief, but addressing the root causes to achieve lasting control and prevent complications.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why Choose Spark Eye Care for Blepharitis Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)]">
                Our team includes board-certified eye care professionals with specialized training in managing complex eyelid and ocular surface conditions.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Approach
              </h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's blepharitis is unique, and we customize treatment plans based on your specific symptoms, lifestyle, and goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Telehealth Available
              </h3>
              <p className="text-[var(--color-muted)]">
                For follow-up visits and ongoing management, we offer convenient telehealth appointments so you can get expert care from home.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Extensive Experience
              </h3>
              <p className="text-[var(--color-muted)]">
                We've successfully treated hundreds of blepharitis patients in Kyle and understand the nuances of managing this chronic condition long-term.
              </p>
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
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive eye examination with detailed evaluation of your eyelids, lashes, meibomian glands, and tear film. We'll discuss your symptoms in depth, review your medical history, and may perform specialized tests like meibography or tear osmolarity testing. You'll leave with a clear diagnosis, understanding of your condition, and a detailed treatment plan with written instructions for home care and any prescribed medications.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the first month, you'll follow your personalized treatment protocol, which typically includes daily eyelid hygiene routines, warm compresses, prescribed medications, and lifestyle modifications. Many patients notice initial improvement within the first 2-3 weeks, though it's essential to continue treatment even as symptoms improve. We may schedule a brief check-in visit or telehealth appointment to ensure you're performing techniques correctly and to address any questions or concerns.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we'll reassess your eyelid health, evaluate treatment response, and make any necessary adjustments to your care plan. Most patients experience significant symptom relief by this point, though complete resolution can take several months. If your response has been suboptimal, we may add additional therapies, adjust medications, or consider advanced treatment options. This is also when we begin transitioning to a maintenance protocol designed to prevent recurrence.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Long-term Management (Ongoing)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Because blepharitis is a chronic condition, ongoing maintenance is key to sustained relief. We'll work with you to develop a simplified long-term routine that fits your lifestyle while keeping symptoms controlled. Regular monitoring visits (typically every 6-12 months) allow us to catch and address flare-ups early. Many patients achieve excellent long-term control with minimal daily maintenance once their condition is stabilized, allowing them to return to normal activities without constant discomfort.
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
            Frequently Asked Questions About Blepharitis
          </h2>
          <div className="space-y-4">
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>How long does blepharitis treatment take?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Initial improvement typically occurs within 2-4 weeks of starting treatment, but achieving optimal control usually takes 2-3 months. Because blepharitis is a chronic condition, ongoing maintenance is necessary to prevent recurrence. Most patients find that once their condition is stabilized, they can maintain control with a simplified daily routine. The timeline varies based on severity, underlying causes, and adherence to treatment protocols. Severe cases or those with complications may require longer initial treatment periods.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>Will I need to take medication for blepharitis?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Not all blepharitis cases require medication, but many benefit from targeted pharmaceutical therapy. Treatment may include antibiotic ointments or drops to address bacterial colonization, oral antibiotics (like doxycycline) for moderate to severe meibomian gland dysfunction due to their anti-inflammatory properties, short-term steroid drops for acute inflammation, or prescription eyelid cleansers. Mild cases may respond well to improved eyelid hygiene and warm compress therapy alone. We prescribe medications only when clinically indicated and always explain the rationale, expected benefits, and potential side effects so you can make informed decisions about your care.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>Does insurance cover blepharitis treatment?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans cover evaluation and treatment for blepharitis because it's a medical eye condition, not a cosmetic concern. Office visits, examinations, and many prescribed medications are typically covered, though you may have copays or deductibles that apply. Some advanced treatments like IPL therapy or certain specialized procedures may not be covered by all plans. We verify insurance benefits before your appointment and provide transparent cost information. Our team works with you to maximize your insurance benefits and can discuss payment options for any out-of-pocket costs.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>Can blepharitis be cured permanently?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Blepharitis is typically a chronic condition that cannot be permanently cured, but it can be very effectively managed and controlled. With proper treatment and ongoing maintenance, most patients achieve excellent symptom relief and can prevent flare-ups. Think of it similarly to conditions like rosacea or eczema—while the underlying tendency may persist, consistent management keeps you comfortable and symptom-free. Many patients go months or even years without significant symptoms once they establish an effective maintenance routine. The key is working with your eye care provider to find a sustainable long-term approach.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>What if my blepharitis isn't improving with treatment?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If your symptoms aren't improving after 4-6 weeks of consistent treatment, it's important to schedule a follow-up appointment. There are several possible explanations: the diagnosis may need refinement (some conditions mimic blepharitis), there may be contributing factors we haven't yet addressed (like Demodex infestation, rosacea, or allergies), the treatment protocol may need adjustment, or adherence to home care routines may need reinforcement. We have multiple treatment options available and can escalate therapy with additional medications, in-office procedures, or referrals for advanced treatments. Refractory cases sometimes benefit from collaboration with dermatologists or other specialists, which we coordinate as needed.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-xl text-[var(--color-ink)] font-light list-none" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span>Can I do telehealth appointments for blepharitis treatment?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While your initial evaluation requires an in-person visit so we can examine your eyelids and eyes under magnification, many follow-up appointments can be conducted via telehealth. Telehealth visits work well for discussing symptom changes, reviewing home care techniques, adjusting treatment protocols, addressing questions or concerns, and monitoring overall progress. We can often assess eyelid appearance through high-quality video and make informed treatment decisions. However, if you're experiencing worsening symptoms, new complications, or not responding to treatment as expected, we'll recommend an in-person visit for thorough examination. Our hybrid approach offers convenience while ensuring you receive comprehensive care.
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
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/dry-eye" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Dry Eye Disease
              </h4>
              <p className="text-[var(--color-muted)]">
                Chronic dry eye often coexists with blepharitis and shares similar treatment approaches targeting tear film stability and ocular surface health.
              </p>
            </a>
            <a href="/conditions/meibomian-gland-dysfunction" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Meibomian Gland Dysfunction
              </h4>
              <p className="text-[var(--color-muted)]">
                MGD is a primary component of posterior blepharitis, causing blocked oil glands that affect tear quality and lead to evaporative dry eye.
              </p>
            </a>
            <a href="/conditions/chalazion" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Chalazion & Styes
              </h4>
              <p className="text-[var(--color-muted)]">
                Recurrent eyelid bumps are common complications of untreated blepharitis, requiring both immediate treatment and long-term prevention strategies.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Get Help for Blepharitis Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face blepharitis alone. Our team is ready to help you find relief and reclaim your comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-medium hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}