import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dry Eye Syndrome Treatment in Kyle | Spark Eye Care',
  description: 'Expert dry eye syndrome treatment in Kyle. Board-certified eye care specialists offering personalized treatment plans, advanced therapies, and telehealth options for lasting relief.',
  keywords: 'dry eye syndrome treatment Kyle, dry eye doctor Kyle, dry eye relief Kyle, meibomian gland dysfunction Kyle, eye care Kyle TX',
  openGraph: {
    title: 'Dry Eye Syndrome Treatment in Kyle | Spark Eye Care',
    description: 'Comprehensive dry eye treatment with board-certified specialists in Kyle. Get relief from irritation, burning, and discomfort.',
    url: 'https://sparkeyetx.com/conditions/dry-eye-syndrome',
  },
}

export default function DryEyeSyndromePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Dry Eye Syndrome</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Dry Eye Syndrome Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Dry eye syndrome affects millions of people, causing persistent discomfort that interferes with daily activities from reading to driving. At Spark Eye Care, we provide comprehensive, evidence-based treatment to restore your eye comfort and protect your long-term vision health.
          </p>
            </div>
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/shutterstock_2018571389.jpg"
                alt="Comfortable woman relaxing"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Dry Eye Syndrome
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Dry eye syndrome, also known as keratoconjunctivitis sicca, is a chronic condition that occurs when your eyes don't produce enough tears or when the tears evaporate too quickly. This creates an unstable tear film that fails to adequately lubricate and protect the eye surface. Affecting approximately 16 million Americans—with countless more undiagnosed—dry eye syndrome is one of the most common reasons people seek eye care. The condition significantly impacts quality of life, making everyday tasks like reading, using computers, driving at night, and even being outdoors uncomfortable or difficult. Many people suffer for years without realizing that effective treatments are available, dismissing their symptoms as simply part of aging or an unavoidable consequence of modern life.
            </p>
            <p>
              The causes of dry eye syndrome are multifaceted and often involve several contributing factors working together. Age is a primary risk factor, as tear production naturally decreases over time, particularly in women after menopause due to hormonal changes. Environmental factors play a crucial role: prolonged screen time reduces blink rate by up to 66%, air conditioning and heating systems decrease humidity, and exposure to wind or smoke irritates the ocular surface. Medical conditions including diabetes, rheumatoid arthritis, thyroid disorders, and Sjögren's syndrome can affect tear production. Medications such as antihistamines, decongestants, blood pressure medications, and antidepressants commonly cause or worsen dry eye. Meibomian gland dysfunction, where the oil glands in the eyelids become blocked, leads to rapid tear evaporation and is present in approximately 86% of dry eye cases. Contact lens wear, previous eye surgery including LASIK, and certain nutritional deficiencies can also contribute to the development of this condition.
            </p>
            <p>
              Professional treatment for dry eye syndrome is essential because this condition is progressive and can lead to serious complications if left unmanaged. Chronic inflammation on the eye surface can damage the cornea, leading to corneal abrasions, ulcers, and scarring that may permanently affect vision. The constant discomfort creates a cycle where inflammation perpetuates tear film instability, which causes more inflammation. Over-the-counter artificial tears may provide temporary relief but don't address the underlying causes or halt disease progression. A comprehensive eye examination can identify the specific type and causes of your dry eye—whether it's aqueous-deficient (not enough tear production), evaporative (tears evaporate too quickly), or mixed—allowing for targeted treatment. Modern therapeutic options including prescription medications, in-office procedures, nutritional supplementation, and lifestyle modifications can significantly improve symptoms and protect your eyes from long-term damage. Early intervention prevents complications and often leads to better outcomes with less aggressive treatment needed.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Dry Eye Syndrome
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Sensory Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Stinging or Burning Sensation</p>
                    <p className="text-[var(--color-muted)]">Persistent feeling of irritation, as if something is in your eye, often worsening throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Gritty or Sandy Feeling</p>
                    <p className="text-[var(--color-muted)]">Sensation of foreign material or roughness on the eye surface, particularly noticeable when blinking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Light Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Increased discomfort in bright light or when outdoors, making it difficult to keep eyes open comfortably.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Pain or Soreness</p>
                    <p className="text-[var(--color-muted)]">Aching or tender feeling in and around the eyes, sometimes extending to the forehead or temples.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Itching or Scratching Sensation</p>
                    <p className="text-[var(--color-muted)]">Persistent urge to rub eyes, which often temporarily relieves but ultimately worsens symptoms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Fatigue</p>
                    <p className="text-[var(--color-muted)]">Eyes feeling tired or heavy, especially during reading, computer work, or other visually demanding tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Red or Bloodshot Eyes</p>
                    <p className="text-[var(--color-muted)]">Visible redness and inflammation on the white part of the eye, indicating ocular surface irritation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred Vision</p>
                    <p className="text-[var(--color-muted)]">Vision that fluctuates or becomes hazy, often clearing temporarily after blinking but quickly returning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Excessive Watering or Tearing</p>
                    <p className="text-[var(--color-muted)]">Paradoxically, dry eyes often trigger reflex tearing as the body tries to compensate for irritation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Stringy Mucus Discharge</p>
                    <p className="text-[var(--color-muted)]">Thick or sticky discharge in or around the eyes, particularly noticeable upon waking in the morning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Wearing Contact Lenses</p>
                    <p className="text-[var(--color-muted)]">Contact lenses feeling uncomfortable or impossible to wear for extended periods as before.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Nighttime Driving</p>
                    <p className="text-[var(--color-muted)]">Increased visual problems and glare when driving at night due to unstable tear film affecting light refraction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Symptoms Worsening Throughout Day</p>
                    <p className="text-[var(--color-muted)]">Discomfort that starts mild in the morning but progressively intensifies as the day goes on.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Heavy or Difficult-to-Open Eyelids</p>
                    <p className="text-[var(--color-muted)]">Eyelids feeling weighted down or requiring extra effort to keep open, especially later in the day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, prevents complications, and can significantly improve your quality of life and visual comfort.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Dry Eye Syndrome
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation including tear film analysis, meibomian gland imaging, corneal surface examination, and tear production testing. This diagnostic approach identifies the specific type and underlying causes of your dry eye, allowing us to create a targeted treatment strategy. We also review your medical history, medications, and lifestyle factors that may be contributing to your symptoms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic results, we develop a customized treatment protocol that may include prescription anti-inflammatory medications, tear supplements, in-office procedures, nutritional recommendations, and environmental modifications. Your plan is tailored to your specific type of dry eye—whether aqueous-deficient, evaporative, or mixed—ensuring the most effective approach. We explain each treatment component and set realistic expectations for your recovery timeline.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dry eye management is an ongoing process that requires regular monitoring and treatment adjustments. We schedule follow-up appointments to assess your progress, evaluate treatment effectiveness, and modify your care plan as needed. As your symptoms improve, we transition to maintenance therapy designed to keep your eyes comfortable long-term. Our team remains available for questions and concerns throughout your treatment journey.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our evidence-based treatment approach incorporates the latest advances in dry eye management. For inflammatory dry eye, we may prescribe cyclosporine (Restasis), lifitegrast (Xiidra), or topical corticosteroids to reduce ocular surface inflammation. Meibomian gland dysfunction is treated with warm compresses, lid hygiene protocols, omega-3 fatty acid supplementation, and when appropriate, in-office procedures such as meibomian gland expression or intense pulsed light therapy.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              For aqueous-deficient dry eye, we may recommend prescription tear supplements, punctal plugs to retain tears on the eye surface, or autologous serum tears for severe cases. Environmental modifications—including humidifiers, reducing screen time, taking regular breaks during visual tasks, and wearing wraparound glasses outdoors—complement medical treatments. We also address contributing factors such as blepharitis, allergies, or systemic conditions that may be exacerbating your dry eye symptoms. This comprehensive, multi-modal approach provides the best outcomes for lasting relief.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Dry Eye Syndrome Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Our specialists have advanced training in ocular surface disease and stay current with the latest dry eye research and treatment innovations.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">We recognize that every patient's dry eye is unique, tailoring treatment plans to your specific diagnosis, lifestyle, and treatment goals.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">For follow-up appointments and ongoing care management, we offer convenient telehealth visits to support your treatment from home.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Proven Experience</h3>
              <p className="text-[var(--color-muted)]">We have successfully treated hundreds of dry eye patients, from mild discomfort to severe chronic cases requiring advanced interventions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation</h3>
                <p className="text-[var(--color-muted)] mb-1 font-semibold">Week 1</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Your initial appointment includes a comprehensive eye examination with specialized dry eye diagnostic testing. We'll measure your tear production, evaluate tear film quality, assess meibomian gland function, examine the ocular surface for damage, and discuss your symptoms in detail. This thorough evaluation typically takes 60-90 minutes and allows us to determine the type and severity of your dry eye syndrome.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins</h3>
                <p className="text-[var(--color-muted)] mb-1 font-semibold">Weeks 2-4</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  You'll begin your personalized treatment plan, which may include prescription medications, artificial tears, warm compresses, lid hygiene, dietary supplements, or in-office procedures. Many patients notice some improvement within the first 2-4 weeks, though inflammation-related conditions may take longer to respond. We provide detailed instructions for home care and are available to address any questions or concerns as you start treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review</h3>
                <p className="text-[var(--color-muted)] mb-1 font-semibold">Months 2-3</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  We schedule follow-up appointments to assess your response to treatment and make any necessary adjustments. Most patients experience significant improvement by 6-12 weeks, though severe or chronic cases may require 3-6 months for optimal results. We'll re-evaluate your ocular surface, discuss symptom changes, and refine your treatment protocol. If initial treatments haven't provided adequate relief, we'll explore additional therapeutic options.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] mb-1 font-semibold">Ongoing</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Once your symptoms are well-controlled, we transition to a maintenance plan designed to keep your eyes comfortable long-term. This typically involves simplified daily care routines, periodic follow-up visits (every 3-6 months), and strategies to prevent symptom recurrence. Many patients can reduce treatment intensity once their dry eye is stable, though lifelong management is often necessary since dry eye syndrome is typically a chronic condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Dry Eye Syndrome
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                How long does dry eye treatment take to work?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The timeline for dry eye improvement varies depending on the severity and type of your condition. Many patients notice some relief within 2-4 weeks of starting treatment, particularly with artificial tears and environmental modifications. However, prescription anti-inflammatory medications typically require 6-12 weeks to achieve their full effect, as they work by reducing chronic inflammation on the ocular surface. For meibomian gland dysfunction, improvement may take 8-12 weeks as glands gradually resume normal function. Severe or longstanding dry eye may require 3-6 months of consistent treatment before optimal results are achieved. The key is adhering to your treatment plan and attending follow-up appointments so we can adjust therapies as needed.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Will I need medication for dry eye syndrome?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Not everyone with dry eye requires prescription medication, but many patients benefit significantly from it. Mild cases may respond well to over-the-counter artificial tears, warm compresses, and lifestyle modifications alone. However, moderate to severe dry eye—particularly when caused by inflammation, meibomian gland dysfunction, or autoimmune conditions—often requires prescription medications for effective management. These may include anti-inflammatory drops like cyclosporine or lifitegrast, short-term corticosteroids for acute flare-ups, antibiotic ointments for blepharitis, or omega-3 supplements to support tear quality. The decision to use medication is individualized based on your diagnostic findings, symptom severity, and response to initial treatments. Our goal is always to use the least intensive treatment that provides adequate symptom control.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover dry eye treatment?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most insurance plans, including Medicare, cover diagnostic testing and medical treatment for dry eye syndrome since it's a recognized medical condition that can affect vision and eye health. Coverage typically includes comprehensive eye examinations, diagnostic procedures like tear film analysis, and prescription medications when medically necessary. In-office procedures such as punctal plug insertion are usually covered, though prior authorization may be required. However, some advanced treatments, nutritional supplements, and certain specialized procedures may not be covered by all plans. Over-the-counter products like artificial tears are generally not covered. We work with most major insurance carriers and will verify your benefits before treatment. Our staff can help you understand your coverage and explore options for any out-of-pocket expenses.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can dry eye syndrome be cured permanently?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Dry eye syndrome is typically a chronic condition that requires ongoing management rather than a one-time cure. However, with proper treatment, the vast majority of patients achieve significant symptom relief and can maintain comfortable eyes long-term. In some cases—such as dry eye caused by temporary medication use, environmental factors, or acute inflammation—symptoms may resolve completely once the underlying cause is addressed. For most patients with chronic dry eye related to aging, meibomian gland dysfunction, or systemic conditions, lifelong management is necessary. The good news is that once your condition is well-controlled, maintenance treatment is usually less intensive than initial therapy. Many patients transition to simpler daily routines and less frequent follow-up visits while maintaining excellent symptom control. Our goal is to help you achieve the best possible quality of life with minimal treatment burden.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                What if my dry eye treatment isn't working?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If you're not experiencing adequate improvement with your current treatment, several options are available. First, it's important to ensure you're following your treatment plan consistently, as some therapies take time to work. At your follow-up appointment, we'll reassess your condition with updated diagnostic testing to determine why symptoms persist. We may need to adjust medication dosages, add complementary treatments, address previously unidentified contributing factors, or try different therapeutic approaches. For treatment-resistant cases, advanced options include autologous serum tears, scleral contact lenses for severe ocular surface disease, in-office procedures like intense pulsed light therapy, or referral to a corneal specialist. Sometimes dry eye symptoms are complicated by other conditions like allergies, blepharitis, or systemic disease that require simultaneous treatment. The key is maintaining open communication with our team and not giving up—effective solutions exist even for challenging cases.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can telehealth appointments work for dry eye management?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Telehealth can be very effective for certain aspects of dry eye care, particularly follow-up appointments and ongoing management. Once you've had an initial in-person evaluation with diagnostic testing, subsequent visits to discuss symptom changes, review treatment adherence, adjust medications, or provide education can often be conducted virtually. This is especially convenient for routine check-ins when your condition is stable or for addressing new concerns between scheduled appointments. However, initial evaluations always require an in-person visit for comprehensive eye examination and specialized dry eye testing. Similarly, if your symptoms worsen significantly, new problems develop, or in-office procedures are needed, an in-person visit is necessary. We'll work with you to determine the most appropriate format for each appointment, balancing convenience with the need for hands-on assessment. Many patients appreciate the flexibility of combining in-person and telehealth visits throughout their treatment journey.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/blepharitis" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Blepharitis</h4>
              <p className="text-[var(--color-muted)]">Chronic eyelid inflammation that often contributes to dry eye symptoms and requires specialized lid hygiene treatment.</p>
            </Link>
            <Link href="/conditions/meibomian-gland-dysfunction" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Meibomian Gland Dysfunction</h4>
              <p className="text-[var(--color-muted)]">Blocked oil glands in the eyelids causing evaporative dry eye, treatable with thermal therapy and gland expression.</p>
            </Link>
            <Link href="/conditions/allergic-conjunctivitis" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Allergic Conjunctivitis</h4>
              <p className="text-[var(--color-muted)]">Eye allergies that can mimic or worsen dry eye symptoms, requiring accurate diagnosis and targeted treatment.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Dry Eye Syndrome Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face dry eye syndrome alone. Our team is ready to help you find lasting relief and protect your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule an Appointment
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}