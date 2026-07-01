import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pterygium Treatment in Kyle | Spark Eye Care',
  description: 'Expert pterygium diagnosis and treatment in Kyle, TX. Board-certified eye care specialists offering surgical and non-surgical solutions for pterygium removal and management.',
  openGraph: {
    title: 'Pterygium Treatment in Kyle | Spark Eye Care',
    description: 'Expert pterygium diagnosis and treatment in Kyle, TX. Comprehensive surgical and non-surgical care for pterygium.',
    url: 'https://sparkeyetx.com/conditions/pterygium',
  },
}

export default function PterygiumPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Pterygium</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Pterygium Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            A pterygium is a benign growth of tissue on the eye's surface that can affect vision and comfort if left untreated. At Spark Eye Care, we provide expert evaluation, monitoring, and surgical treatment to protect your vision and restore eye health.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Pterygium
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
            <p className="mb-6 leading-relaxed">
              A pterygium, commonly called "surfer's eye," is a raised, wedge-shaped growth of the conjunctiva—the clear tissue covering the white part of the eye—that extends onto the cornea. This benign but progressive condition affects millions of people worldwide, particularly those living in sunny, dusty, or windy climates like Central Texas. While a pterygium typically starts small and may cause minimal symptoms, it can gradually grow larger over months or years, potentially distorting the cornea's shape and interfering with vision. Many patients first notice a pterygium as a pinkish, fleshy tissue appearing on the inner corner of the eye near the nose, though it can occur on the outer side as well. Beyond cosmetic concerns, pterygium can cause persistent redness, irritation, foreign body sensation, and dryness that significantly impacts daily comfort and quality of life.
            </p>
            <p className="mb-6 leading-relaxed">
              The primary cause of pterygium is chronic exposure to ultraviolet (UV) light, which damages the conjunctival tissue and triggers abnormal growth patterns. This is why the condition is most prevalent in people who spend considerable time outdoors without adequate eye protection. Additional risk factors include living in equatorial regions or areas with high levels of dust, wind, and environmental irritants—all of which apply to the Kyle area and greater Texas region. Repeated eye irritation from dry, dusty conditions can accelerate pterygium development. Genetics also play a role, as the condition tends to run in families. People who work outdoors in construction, agriculture, landscaping, or similar fields face elevated risk, as do outdoor sports enthusiasts. Age is another factor, with pterygium most commonly developing in adults between 20 and 40 years old, though it can occur at any age. The condition is more common in men than women, likely due to historically higher rates of outdoor occupational exposure.
            </p>
            <p className="leading-relaxed">
              Professional eye care is essential for managing pterygium because the condition requires ongoing monitoring and, in many cases, intervention to prevent vision complications. While some small pterygia remain stable for years, others grow progressively and can induce astigmatism by pulling on the cornea, blur vision by encroaching on the visual axis, or cause chronic inflammation that resists over-the-counter remedies. Without expert evaluation, patients cannot accurately assess whether their pterygium poses a vision threat or when surgical intervention becomes necessary. At Spark Eye Care, our comprehensive approach includes detailed examination with advanced imaging to measure the pterygium's size and corneal involvement, personalized recommendations for UV protection and lubrication to slow progression, and surgical expertise when removal becomes advisable. Early professional involvement allows us to implement preventive strategies and time surgical intervention optimally, reducing recurrence rates and protecting your long-term vision. Attempting to manage pterygium without specialist guidance can lead to delayed treatment, more extensive surgery, and higher complication rates.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Pterygium
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Visual & Appearance Changes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Visible Growth on Eye Surface</span>
                    <p className="text-[var(--color-muted)]">A raised, fleshy, pinkish or yellowish triangular tissue growth, typically starting at the inner corner of the eye near the nose.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurred or Distorted Vision</span>
                    <p className="text-[var(--color-muted)]">As the pterygium grows onto the cornea, it can cause astigmatism or directly obstruct the visual axis, leading to progressive vision impairment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Persistent Eye Redness</span>
                    <p className="text-[var(--color-muted)]">Chronic inflammation causes visible blood vessels and redness in and around the pterygium, often worsening with sun or wind exposure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Cosmetic Concerns</span>
                    <p className="text-[var(--color-muted)]">The visible tissue growth can be emotionally distressing and affect self-confidence, especially as it becomes more prominent.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Wearing Contact Lenses</span>
                    <p className="text-[var(--color-muted)]">The raised tissue can interfere with proper contact lens fitting and comfort, making lens wear difficult or impossible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Increased Tearing</span>
                    <p className="text-[var(--color-muted)]">Irritation and disruption of the tear film can lead to excessive watering or fluctuating tear production.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Physical Discomfort</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Foreign Body Sensation</span>
                    <p className="text-[var(--color-muted)]">A persistent feeling that something is stuck in your eye, like sand or an eyelash, even when nothing is there.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Dryness and Irritation</span>
                    <p className="text-[var(--color-muted)]">The pterygium disrupts the normal tear film, leading to chronic dry eye symptoms that worsen throughout the day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Burning or Stinging</span>
                    <p className="text-[var(--color-muted)]">Inflammatory mediators released by the pterygium tissue can cause sharp, burning sensations, particularly in bright sunlight or windy conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Itching Around the Growth</span>
                    <p className="text-[var(--color-muted)]">Histamine release and tissue inflammation can trigger persistent itching that is difficult to relieve with over-the-counter eye drops.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Swelling and Inflammation</span>
                    <p className="text-[var(--color-muted)]">The pterygium can become acutely inflamed, causing swelling, increased redness, and discomfort that may come and go in episodes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Light Sensitivity</span>
                    <p className="text-[var(--color-muted)]">Photophobia or increased sensitivity to bright lights can develop as the pterygium affects the corneal surface and causes inflammation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Decreased Tear Breakup Time</span>
                    <p className="text-[var(--color-muted)]">The abnormal tissue disrupts the smooth ocular surface, causing tears to evaporate more quickly and exacerbating dry eye symptoms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing vision complications and the need for more extensive surgical intervention.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Pterygium
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with detailed slit-lamp examination to measure the pterygium's size, vascularity, and corneal involvement. We use advanced corneal topography to assess any induced astigmatism and document baseline measurements for monitoring progression. High-resolution photography allows us to track growth patterns over time and determine optimal treatment timing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For small, stable pterygia, we implement conservative management with prescription-strength lubricating drops, anti-inflammatory medications, and UV protection strategies to slow progression. When surgical removal becomes necessary due to vision impairment or refractory symptoms, we develop a detailed surgical plan. Our approach includes discussion of modern techniques like conjunctival autografting to minimize recurrence risk, which can be as high as 40% with older surgical methods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-3">
                Ongoing Care & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Whether you choose observation or proceed with surgery, ongoing care is essential. Non-surgical patients receive scheduled monitoring appointments to track growth and adjust medical management as needed. Post-surgical patients follow a structured recovery protocol with frequent early visits to ensure proper healing, steroid taper to prevent recurrence, and long-term surveillance for any signs of regrowth, which is most likely in the first year after surgery.
              </p>
            </div>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-[var(--color-ink)]">
            <p className="leading-relaxed">
              Our treatment approach draws on evidence-based protocols refined over decades of pterygium research. For medical management, we utilize preservative-free artificial tears to optimize ocular surface health, topical corticosteroids or NSAIDs during inflammatory flares, and aggressive UV protection education to address the primary causative factor. When surgery is indicated, we employ advanced excision techniques combined with conjunctival autografting—transplanting healthy conjunctival tissue from under the eyelid to cover the excision site. This technique significantly reduces recurrence rates compared to bare sclera excision. Some cases benefit from adjunctive therapies like mitomycin-C application or amniotic membrane grafting. Post-operatively, we prescribe a carefully tapered regimen of topical corticosteroids to control inflammation while minimizing side effects, along with continued lubrication and UV protection to prevent recurrence. Our goal is not just pterygium removal but optimization of long-term ocular surface health and visual function.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Pterygium Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)]">
                Our eye care specialists bring advanced training in ocular surface disease and pterygium surgery, ensuring you receive the highest standard of care based on current clinical evidence.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Personalized Treatment
              </h3>
              <p className="text-[var(--color-muted)]">
                We recognize that each pterygium is unique. Your treatment plan is tailored to your specific anatomy, lifestyle needs, visual demands, and preferences regarding surgical versus conservative management.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Convenient Access
              </h3>
              <p className="text-[var(--color-muted)]">
                We offer flexible scheduling and telehealth options for initial consultations and follow-up monitoring visits, making expert pterygium care accessible to busy Kyle-area residents.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Proven Surgical Results
              </h3>
              <p className="text-[var(--color-muted)]">
                Our surgical approach emphasizes low recurrence rates through modern techniques like conjunctival autografting, careful patient selection, and meticulous post-operative management protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination includes slit-lamp microscopy, corneal topography, visual acuity testing with and without correction, and detailed pterygium measurement and photography. We'll discuss your symptoms, occupational and recreational UV exposure, and treatment goals. You'll leave with a clear understanding of your pterygium's severity, whether it's affecting your vision, and our recommended management approach—whether conservative monitoring with medical management or surgical planning. This visit typically takes 45-60 minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If pursuing conservative management, you'll begin your prescription eye drop regimen and UV protection strategies, with a follow-up scheduled in 3-6 months to assess stability. If surgery is planned, we'll schedule your procedure within 2-4 weeks depending on your availability. Pterygium surgery is typically performed as an outpatient procedure under local anesthesia, taking 30-45 minutes. You'll receive detailed pre-operative and post-operative instructions, including activity restrictions and medication schedules. Most patients experience mild discomfort for 3-5 days post-operatively, managed with oral pain medication and topical treatments.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For surgical patients, the first post-operative visit occurs within 24-48 hours to check for complications, followed by visits at one week, one month, and three months. The graft site gradually heals and remodels over 8-12 weeks. You'll notice progressive improvement in redness and comfort, though some irritation and foreign body sensation may persist for several weeks. Conservative management patients return for comparison photography and measurements to document any growth. We adjust your medical regimen based on symptom control and appearance. Vision typically stabilizes 2-3 months after surgery once corneal astigmatism resolves.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-2xl font-semibold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold text-[var(--color-ink)] mb-2">
                  Long-Term Management
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Pterygium requires long-term vigilance regardless of treatment approach. Post-surgical patients need monitoring every 3-6 months during the first year when recurrence risk is highest, then annually thereafter. Any sign of recurrent tissue growth is addressed early when treatment is most effective. Conservative management patients continue regular monitoring to catch progression before vision is threatened. All patients receive ongoing education about UV protection—wrap-around sunglasses, wide-brimmed hats, and ocular lubricants during outdoor exposure—which is essential for preventing recurrence or fellow eye involvement. Most patients do extremely well with appropriate management and achieve lasting improvement in comfort and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Pterygium
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does pterygium treatment take?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>The timeline depends on your chosen treatment approach. Conservative management with eye drops and UV protection is ongoing, with monitoring appointments every 3-6 months to assess stability. Surgical treatment involves a 30-45 minute outpatient procedure, followed by 2-3 months of healing and gradual improvement. Most surgical patients notice significant comfort improvement within 2-3 weeks, though complete healing and cosmetic resolution take 8-12 weeks. Post-surgical monitoring continues for at least one year to watch for recurrence. Many patients achieve lasting results with a single surgery, though pterygium can recur, particularly if UV protection is inadequate.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required for pterygium?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>For small, stable pterygia that aren't affecting vision, we often prescribe preservative-free artificial tears to reduce irritation and inflammation, along with occasional short courses of topical anti-inflammatory medications (corticosteroids or NSAIDs) during flare-ups. These medications help manage symptoms and may slow progression, though they cannot reverse existing growth. After surgical removal, you'll need a carefully tapered regimen of topical corticosteroid drops for several weeks to months to control inflammation and reduce recurrence risk. Continued use of lubricating drops and aggressive UV protection with sunglasses are essential long-term measures for all pterygium patients.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover pterygium treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Most insurance plans, including Medicare, cover pterygium evaluation and surgical removal when it's medically necessary—meaning the growth is causing significant symptoms, affecting vision, or threatening visual function. Documentation of visual impairment, induced astigmatism, or refractory symptoms despite conservative management typically establishes medical necessity. Purely cosmetic removal may not be covered. Conservative management with prescription medications is usually covered with standard copays. Our billing team will verify your coverage, obtain pre-authorization when required, and provide cost estimates before proceeding with surgery. We also offer flexible payment options for any out-of-pocket expenses.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if my pterygium comes back after surgery?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Recurrence is the main complication of pterygium surgery, with rates varying from 5-15% using modern conjunctival autograft techniques to over 40% with older bare sclera methods. Our approach minimizes recurrence risk through advanced surgical technique, appropriate adjunctive therapies when indicated, careful post-operative steroid management, and patient education about UV protection. If recurrence does occur, it typically appears within the first year and can often be detected early during monitoring visits. Recurrent pterygium can be treated with repeat surgery, though recurrence rates are higher with subsequent procedures. We work closely with you to optimize prevention strategies and, if needed, manage recurrent growth aggressively.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can I just use eye drops to make my pterygium go away?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Unfortunately, no eye drops can make an existing pterygium disappear—once the abnormal tissue growth has occurred, it's permanent unless surgically removed. However, lubricating and anti-inflammatory drops play an important role in managing symptoms, reducing inflammation, and potentially slowing progression of small pterygia. For patients who aren't good surgical candidates or who have small, stable growths not affecting vision, medical management with drops and UV protection can control symptoms effectively and may prevent the need for surgery. The key is regular monitoring to ensure the pterygium remains stable and doesn't begin threatening vision, at which point surgical intervention becomes necessary.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth work for pterygium treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p>Telehealth has important but limited applications in pterygium care. Initial consultation via telemedicine can be valuable for discussing symptoms, reviewing photographs you've taken of your eye, and determining whether you need an in-person evaluation. If you have a known pterygium being followed conservatively, some monitoring visits can be conducted via telehealth using patient-submitted photographs, though periodic in-person slit-lamp examination is still necessary for accurate measurement. However, comprehensive initial evaluation, surgical planning, pre-operative assessment, and most post-operative visits require in-person examination with specialized instruments. We offer a hybrid approach, using telehealth where appropriate to maximize convenience while ensuring you receive the hands-on care essential for optimal pterygium management.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/dry-eye" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Chronic ocular surface dryness causing irritation, redness, and fluctuating vision, often coexisting with pterygium.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">
                Learn more →
              </span>
            </Link>
            <Link href="/conditions/pinguecula" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Pinguecula
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                A yellowish, raised conjunctival growth near the cornea caused by UV exposure, related to but distinct from pterygium.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">
                Learn more →
              </span>
            </Link>
            <Link href="/conditions/conjunctivitis" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Conjunctivitis
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Inflammation of the conjunctiva causing redness and discharge, which can complicate pterygium management.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Pterygium Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face pterygium alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}