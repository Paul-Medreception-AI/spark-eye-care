import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meibomian Gland Dysfunction Treatment in Kyle | Spark Eye Care',
  description: 'Expert Meibomian Gland Dysfunction (MGD) treatment in Kyle. Board-certified care for dry eye, gland blockage, and tear film instability. Telehealth available.',
  keywords: 'Meibomian Gland Dysfunction treatment Kyle, MGD treatment, dry eye Kyle, blocked oil glands, evaporative dry eye, blepharitis treatment Kyle',
  openGraph: {
    title: 'Meibomian Gland Dysfunction Treatment in Kyle | Spark Eye Care',
    description: 'Expert Meibomian Gland Dysfunction (MGD) treatment in Kyle. Board-certified care for dry eye, gland blockage, and tear film instability.',
    url: 'https://www.sparkeyetx.com/conditions/meibomian-gland-dysfunction',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function MeibomianGlandDysfunctionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Meibomian Gland Dysfunction</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Meibomian Gland Dysfunction Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            When your meibomian glands don't produce enough oil to protect your tears, every blink can feel uncomfortable. At Spark Eye Care, we provide comprehensive, evidence-based treatment for Meibomian Gland Dysfunction to restore your eye comfort and protect your long-term vision health.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Meibomian Gland Dysfunction
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Meibomian Gland Dysfunction (MGD) is one of the most common yet underdiagnosed eye conditions affecting millions of Americans. Your eyelids contain approximately 25-40 meibomian glands that secrete an oily substance called meibum, which forms the outer protective layer of your tear film. When these glands become blocked or produce poor-quality oil, your tears evaporate too quickly, leading to chronic dry eye symptoms. MGD is the leading cause of evaporative dry eye disease, accounting for up to 86% of all dry eye cases. Without proper treatment, this condition can significantly impact your quality of life, making it difficult to read, use digital devices, drive at night, or wear contact lenses comfortably.
            </p>
            <p>
              Multiple factors contribute to the development of Meibomian Gland Dysfunction. Age is a significant risk factor, as gland function naturally declines over time, particularly after age 40. Hormonal changes, especially in women during menopause, can affect meibum production and quality. Extended screen time and reduced blink rates cause glands to become sluggish and produce thickened secretions that block the gland openings. Contact lens wear, certain medications (including antihistamines, antidepressants, and blood pressure medications), inflammatory conditions like rosacea and blepharitis, and environmental factors such as low humidity and air conditioning all increase MGD risk. Incomplete blinking, makeup use around the eyelid margins, and underlying autoimmune conditions can further compromise gland function.
            </p>
            <p>
              Professional treatment for Meibomian Gland Dysfunction is essential because this condition is progressive and can lead to permanent gland loss if left untreated. Research shows that up to 60% of meibomian glands can atrophy over time when MGD goes unmanaged, resulting in irreversible dry eye symptoms. Early intervention can preserve gland function, prevent complications such as corneal damage and recurrent eye infections, and restore comfortable vision for daily activities. At Spark Eye Care in Kyle, we use advanced diagnostic imaging to assess your gland structure and function, allowing us to create targeted treatment plans that address the root cause of your symptoms rather than just providing temporary relief.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Meibomian Gland Dysfunction
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Impact on Daily Life</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty with Screen Time</div>
                    <p className="text-[var(--color-muted)]">Increased discomfort during computer work or reading that worsens as the day progresses</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Contact Lens Intolerance</div>
                    <p className="text-[var(--color-muted)]">Unable to wear contact lenses for as long as you used to, or at all</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Morning Eye Discomfort</div>
                    <p className="text-[var(--color-muted)]">Waking with crusty, stuck-together eyelids or immediate burning sensation upon opening eyes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Environmental Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Eyes feel worse in air conditioning, wind, low humidity, or smoky environments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Fluctuating Vision</div>
                    <p className="text-[var(--color-muted)]">Blurred vision that temporarily improves with blinking but quickly returns</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Reduced Quality of Life</div>
                    <p className="text-[var(--color-muted)]">Avoiding activities you once enjoyed like reading, driving at night, or spending time outdoors</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Physical Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Burning or Stinging Sensation</div>
                    <p className="text-[var(--color-muted)]">Persistent burning feeling in one or both eyes, often worse later in the day</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eye Redness</div>
                    <p className="text-[var(--color-muted)]">Chronic red or bloodshot appearance, particularly along the eyelid margins</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Paradoxical Tearing</div>
                    <p className="text-[var(--color-muted)]">Eyes feel dry yet water excessively as a reflex response to irritation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Foreign Body Sensation</div>
                    <p className="text-[var(--color-muted)]">Feeling like sand, grit, or an eyelash is constantly in your eye</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eyelid Inflammation</div>
                    <p className="text-[var(--color-muted)]">Swollen, irritated eyelid margins with visible debris or crusting at the lash base</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Light Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights or glare, especially when driving at night</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Stringy Eye Discharge</div>
                    <p className="text-[var(--color-muted)]">Thick, stringy mucus in or around the eyes, particularly upon waking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and can prevent permanent gland loss.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Meibomian Gland Dysfunction
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with advanced meibography imaging to visualize your gland structure and identify areas of blockage or atrophy. We assess tear film quality, measure tear breakup time, and evaluate the meibum expressibility and quality from each lid. This detailed diagnostic approach allows us to determine the severity of your MGD and identify any contributing factors such as blepharitis, rosacea, or allergies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-100">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific MGD presentation, we create a customized treatment protocol combining multiple evidence-based therapies. Your plan may include in-office thermal pulsation treatments to unclog glands, intense pulsed light therapy for inflammation reduction, and prescription medications to improve oil quality. We provide detailed at-home care instructions including warm compress therapy, lid hygiene techniques, and nutritional supplements like omega-3 fatty acids to support long-term gland health.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-200">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                MGD requires consistent management to maintain results and prevent gland deterioration. We schedule regular follow-up appointments to assess treatment response, adjust therapies as needed, and perform maintenance procedures to keep glands functioning optimally. We track your symptom improvement using validated questionnaires and objective measurements, ensuring your treatment plan continues to meet your evolving needs and prevents disease progression over time.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our treatment protocols are grounded in the latest ophthalmic research and clinical guidelines. For mild to moderate MGD, we typically begin with conservative measures including preservative-free artificial tears, omega-3 supplementation (typically 2000mg daily of combined EPA/DHA), and optimized at-home warm compress therapy using specialized heat masks that maintain therapeutic temperatures. For moderate to severe cases, we may recommend in-office procedures such as thermal pulsation therapy (LipiFlow), intense pulsed light (IPL) therapy to reduce inflammation and improve meibum secretion, or meibomian gland expression to manually clear blocked glands. Prescription medications may include topical azithromycin or cyclosporine to reduce inflammation, oral doxycycline or omega-3 supplements to improve oil quality, and in some cases, autologous serum tears for advanced dry eye. We also address contributing factors such as incomplete blinking with blink exercises, environmental modifications, and treatment of underlying conditions like blepharitis or rosacea that perpetuate gland dysfunction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Meibomian Gland Dysfunction Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized training in ocular surface disease and advanced MGD treatment modalities
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-100">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                Every treatment plan is customized to your specific gland function, symptoms, and lifestyle needs
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-200">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Convenient follow-up visits and consultations from your home for ongoing management and support
              </p>
            </div>
            <div className="text-center animate-fade-up transition-all delay-300">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extensive MGD Experience</h3>
              <p className="text-[var(--color-muted)]">
                Proven track record treating hundreds of patients with dry eye and meibomian gland dysfunction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial comprehensive evaluation, we perform meibography imaging to visualize your gland structure, assess tear film quality and stability, evaluate meibum production and quality, and conduct a detailed symptom assessment. We'll explain your specific MGD presentation, discuss all available treatment options, and create your personalized treatment plan. Most patients leave with immediate at-home therapies to begin and prescriptions if appropriate, along with clear expectations for the treatment timeline ahead.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll implement your at-home care regimen including warm compress therapy twice daily, lid hygiene techniques, and any prescribed medications or supplements. If in-office procedures are recommended, we typically schedule these during this period. Most patients begin noticing some symptom improvement within 2-4 weeks, though the timeline varies depending on MGD severity. We remain available for questions and support as you adjust to your new routine and begin experiencing relief.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up evaluation to objectively measure your treatment response using the same diagnostic tests from your initial visit. We assess symptom improvement, measure changes in tear film stability and gland function, and review your adherence to the treatment protocol. Based on your progress, we may adjust medications, modify your at-home care routine, recommend additional in-office treatments, or continue with the current successful plan. This is also when we address any challenges you've encountered and problem-solve together.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  MGD is a chronic condition that requires ongoing maintenance to prevent gland deterioration and symptom recurrence. Once we achieve optimal symptom control, we transition to maintenance care with periodic follow-ups every 6-12 months to monitor gland health. Many patients continue simplified at-home therapies indefinitely, while others may need periodic in-office treatments. The goal is sustainable comfort with the least intensive regimen possible while preserving your meibomian glands for long-term eye health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions About Meibomian Gland Dysfunction
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>How long does MGD treatment take to work?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most patients begin experiencing some symptom relief within 2-4 weeks of starting treatment, but significant improvement typically takes 6-12 weeks as gland function gradually improves. The timeline depends on several factors including the severity of your MGD, how long you've had the condition before seeking treatment, your adherence to the treatment plan, and whether you have contributing conditions like blepharitis or rosacea. In-office procedures like thermal pulsation may provide more immediate relief, but sustained results require consistent at-home care. It's important to maintain realistic expectations—MGD treatment is a process, not a quick fix, but most patients achieve substantial improvement with proper management.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>Will I need to take medication for MGD?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Not everyone with MGD requires prescription medication, but many patients benefit from pharmaceutical intervention. For mild cases, we often start with over-the-counter artificial tears, omega-3 supplements, and optimized at-home lid hygiene. Moderate to severe cases may benefit from topical anti-inflammatory drops like cyclosporine or lifitegrast, topical azithromycin to improve meibum quality, or oral antibiotics such as doxycycline which have anti-inflammatory properties that improve oil gland function. The decision depends on your specific presentation, symptom severity, and response to conservative measures. Many patients use medications initially and then taper to maintenance doses or discontinue once gland function improves, while others require long-term management to maintain results.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>Does insurance cover MGD treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans cover the diagnostic evaluation for MGD including comprehensive eye exams, meibography imaging, and tear film assessment when medically necessary. Many prescription medications for MGD are also covered, though some require prior authorization or have preferred alternatives. However, certain in-office procedures like intense pulsed light (IPL) therapy or thermal pulsation treatments are often considered elective and may not be covered by insurance, requiring out-of-pocket payment. Over-the-counter products like artificial tears, omega-3 supplements, and warm compress devices are typically not covered. We recommend contacting your insurance provider before treatment to understand your specific coverage, and our staff can provide documentation and medical necessity letters when appropriate to help maximize your benefits.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>What happens if treatment isn't working?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing adequate improvement after 6-8 weeks of consistent treatment, we reassess your situation comprehensively. We first evaluate treatment adherence—are you performing warm compresses correctly and consistently? Are you taking medications as prescribed? Next, we investigate potential contributing factors that may have been missed initially, such as undiagnosed autoimmune conditions, medication side effects, environmental exposures, or anatomical issues. We may modify your treatment plan by increasing medication doses, adding new therapeutic modalities, trying different in-office procedures, or referring you to specialists for underlying conditions like rosacea or hormonal imbalances. In rare cases of severe, treatment-resistant MGD, we discuss advanced options like autologous serum tears, scleral contact lenses for corneal protection, or punctal plugs to conserve tears. Our commitment is to systematically work through options until we find an effective solution for your specific situation.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>Can telehealth work for MGD treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While your initial MGD evaluation requires an in-person visit for comprehensive diagnostic testing including meibography and tear film assessment, telehealth can be highly effective for follow-up care and ongoing management. Virtual visits work well for reviewing symptom progress, adjusting at-home care protocols, discussing medication side effects or dosage changes, troubleshooting technique issues with warm compresses or lid hygiene, and providing education and support. Many of our Kyle patients appreciate the convenience of telehealth for routine check-ins, especially when symptoms are stable. However, if you experience sudden changes, significant worsening, or potential complications, we'll schedule an in-person evaluation. Telehealth allows us to maintain close contact during your treatment journey without requiring frequent trips to the office, making it easier to stay consistent with your care plan.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none">
                <span>Is MGD permanent or can it be cured?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                MGD is typically a chronic condition that requires long-term management rather than a one-time cure. However, this doesn't mean lifelong symptoms—with proper treatment, most patients achieve excellent symptom control and maintain comfortable vision. The key is preventing further gland loss and preserving the function of your remaining healthy glands. Research shows that meibomian glands that have atrophied (died) cannot regenerate, which is why early treatment is crucial. If caught early and managed consistently, many patients maintain good gland function with minimal ongoing therapy. Even in advanced cases, while we cannot restore lost glands, we can optimize the function of remaining glands and manage symptoms effectively. The prognosis is generally excellent with appropriate treatment—most patients return to comfortable daily activities, wear contact lenses again if desired, and maintain stable eye health long-term with maintenance care.
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
            <Link href="/conditions/dry-eye" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Dry Eye Disease</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Comprehensive treatment for all types of dry eye, including aqueous deficiency and evaporative dry eye
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
            <Link href="/conditions/blepharitis" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Blepharitis</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Treatment for chronic eyelid inflammation that often accompanies and worsens MGD
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
            <Link href="/conditions/eye-allergies" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Eye Allergies</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Relief from allergic conjunctivitis that can aggravate dry eye and MGD symptoms
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Meibomian Gland Dysfunction Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Meibomian Gland Dysfunction alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}