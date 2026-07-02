import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meibomian Gland Dysfunction Treatment in Kyle | Spark Eye Care',
  description: 'Expert Meibomian Gland Dysfunction treatment in Kyle. Board-certified care for dry eyes, gland blockage, and tear film issues. Telehealth available.',
  keywords: 'Meibomian Gland Dysfunction treatment Kyle, MGD Kyle TX, dry eye treatment Kyle, blocked oil glands, eye care Kyle',
  openGraph: {
    title: 'Meibomian Gland Dysfunction Treatment in Kyle | Spark Eye Care',
    description: 'Expert Meibomian Gland Dysfunction treatment in Kyle. Board-certified care for dry eyes, gland blockage, and tear film issues.',
    url: 'https://sparkeyetx.com/conditions/meibomian-gland-dysfunction',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function MeibomianGlandDysfunctionPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Meibomian Gland Dysfunction</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light mb-6 leading-tight">
            Meibomian Gland Dysfunction Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Meibomian Gland Dysfunction (MGD) is one of the most common causes of dry eye disease, affecting millions of people who struggle daily with irritation, redness, and blurred vision. At Spark Eye Care, we provide comprehensive, evidence-based treatment to restore your eye comfort and protect your long-term vision health.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/blepharitis.jpg"
                alt="Meibomian gland eyelid examination"
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
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Meibomian Gland Dysfunction
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Meibomian Gland Dysfunction occurs when the tiny oil glands along the eyelid margins—called meibomian glands—become blocked or produce poor-quality oil. These glands are responsible for secreting the lipid layer of your tear film, which prevents tears from evaporating too quickly. When MGD develops, tears evaporate rapidly, leaving eyes feeling dry, scratchy, and uncomfortable. Research indicates that MGD is present in up to 86% of patients with dry eye disease, making it the leading cause of evaporative dry eye. The condition affects people of all ages but becomes increasingly common after age 40. Left untreated, MGD can significantly impact quality of life, making reading, computer work, driving, and other daily activities difficult and uncomfortable.
            </p>
            
            <p>
              Multiple factors contribute to the development of Meibomian Gland Dysfunction. Age is a primary risk factor—as we get older, oil gland secretions naturally thicken and gland function declines. Hormonal changes, particularly in women during menopause, can also affect meibomian gland function. Environmental factors like low humidity, air conditioning, heating systems, and prolonged screen time reduce blink rate and accelerate tear evaporation. Certain medications including antihistamines, antidepressants, and blood pressure medications can worsen MGD symptoms. Contact lens wear, eye makeup that blocks gland openings, eyelid inflammation (blepharitis), rosacea, and autoimmune conditions like Sjögren's syndrome are additional risk factors. Some people have naturally thicker meibum (gland secretions) that is more prone to causing blockages. Understanding these contributing factors helps us develop targeted treatment strategies that address your specific situation.
            </p>
            
            <p>
              Professional treatment for Meibomian Gland Dysfunction is essential because the condition is chronic and progressive—it typically worsens over time without intervention. While over-the-counter artificial tears may provide temporary relief, they don't address the underlying gland dysfunction. Effective MGD treatment requires a comprehensive approach that includes clearing blocked glands, improving oil quality, reducing inflammation, and establishing sustainable long-term management strategies. Early diagnosis and treatment can prevent permanent gland damage and preserve tear film function. At Spark Eye Care, we use advanced diagnostic techniques to assess meibomian gland structure and function, then develop individualized treatment plans that combine in-office procedures, prescription therapies, and at-home care protocols. Our goal is not just symptom relief but restoring healthy gland function to give you lasting comfort and protect your ocular surface health.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Meibomian Gland Dysfunction
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Impact on Daily Life</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eye Fatigue During Screen Time</div>
                    <p className="text-[var(--color-muted)]">Eyes feel tired and strained after reading or computer work, making it difficult to maintain focus.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty with Contact Lenses</div>
                    <p className="text-[var(--color-muted)]">Contact lenses become uncomfortable or impossible to wear for full days, causing frustration and inconvenience.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Light Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Bright lights or sunlight cause discomfort, making outdoor activities or driving challenging.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Fluctuating Vision</div>
                    <p className="text-[var(--color-muted)]">Vision blurs intermittently throughout the day, temporarily improving after blinking but quickly degrading again.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Avoidance of Activities</div>
                    <p className="text-[var(--color-muted)]">You find yourself avoiding reading, watching movies, or other activities because your eyes feel too uncomfortable.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Sleep Disruption</div>
                    <p className="text-[var(--color-muted)]">Waking up with crusted or stuck-together eyelids, or eyes that feel extremely dry upon waking.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Frustration and Worry</div>
                    <p className="text-[var(--color-muted)]">Concern that symptoms will worsen or that permanent eye damage might occur without proper treatment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Physical Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Dry, Gritty Sensation</div>
                    <p className="text-[var(--color-muted)]">Persistent feeling of sand or gravel in the eyes, especially noticeable later in the day or in dry environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Burning or Stinging</div>
                    <p className="text-[var(--color-muted)]">Eyes feel hot, irritated, or as if something acidic is touching them, often worse in wind or air conditioning.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Excessive Tearing</div>
                    <p className="text-[var(--color-muted)]">Paradoxically, dry eyes often trigger reflex tearing, causing watery eyes that don't provide adequate lubrication.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Red, Bloodshot Eyes</div>
                    <p className="text-[var(--color-muted)]">Chronic inflammation causes visible redness and blood vessel dilation that may worsen throughout the day.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Swollen or Crusty Eyelids</div>
                    <p className="text-[var(--color-muted)]">Eyelid margins appear puffy, red, or have debris buildup, indicating gland blockage and inflammation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Stringy Discharge</div>
                    <p className="text-[var(--color-muted)]">Thick, mucus-like discharge collects in the corners of eyes or on lashes, especially after sleep.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Recurrent Styes or Chalazia</div>
                    <p className="text-[var(--color-muted)]">Frequent eyelid bumps or cysts develop when blocked meibomian glands become infected or inflamed.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Foamy Tears</div>
                    <p className="text-[var(--color-muted)]">Tear film appears bubbly or foamy at eyelid margins due to altered oil-to-water ratio in tears.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing permanent gland loss and preserving your eye health and comfort for the long term.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Meibomian Gland Dysfunction
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with specialized diagnostic imaging and functional tests to evaluate meibomian gland structure, assess oil quality, measure tear break-up time, and identify areas of gland dropout. This detailed assessment guides our treatment recommendations and establishes baseline measurements to track your progress over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment findings, we design a customized treatment protocol combining in-office procedures, prescription therapies, and home care strategies. Your plan addresses the specific severity and type of MGD you have, incorporating the most effective evidence-based treatments for your individual situation and lifestyle needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                MGD is a chronic condition requiring long-term management. We schedule regular follow-up evaluations to assess treatment response, adjust therapies as needed, and prevent disease progression. You'll receive education and support to maintain gland health between visits, with telehealth check-ins available for convenience and accessibility.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach integrates multiple proven therapies to address MGD comprehensively. Warm compress therapy and eyelid massage help liquefy thickened meibum and manually express blocked glands. We often recommend specialized heating devices that maintain consistent therapeutic temperatures more effectively than traditional compresses. Tea tree oil-based eyelid cleansers reduce bacterial load and demodex mites that contribute to inflammation. For moderate to severe MGD, we may prescribe topical anti-inflammatory medications, oral antibiotics with anti-inflammatory properties (such as doxycycline or azithromycin), or prescription eye drops that increase tear production and reduce inflammation.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Advanced in-office treatments include intense pulsed light (IPL) therapy, which reduces inflammation and improves gland function through targeted light energy, and thermal pulsation systems that combine heat with mechanical expression to clear blocked glands. Nutritional supplementation with omega-3 fatty acids supports healthier oil production and reduces ocular surface inflammation. Environmental modifications—using humidifiers, taking screen breaks, protecting eyes from wind—complement medical treatments. Every element of your treatment plan is selected based on current clinical research and tailored to your specific MGD presentation, ensuring you receive the most effective care available.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Meibomian Gland Dysfunction Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our team has specialized training in ocular surface disease and stays current with the latest MGD research and treatment advances.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Individualized Care</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that MGD affects each person differently and customize treatment plans based on your specific symptoms, severity, and lifestyle.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                We offer convenient virtual follow-up appointments for treatment monitoring, education, and adjustments to your care plan.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extensive MGD Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have successfully treated hundreds of patients with MGD and dry eye disease, helping them regain comfort and eye health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit includes a comprehensive eye examination, specialized MGD diagnostic testing including meibography imaging, tear film assessment, and gland expression evaluation. We'll discuss your symptoms in detail, review your medical history and medications, and explain how MGD is affecting your eyes specifically. You'll leave with a clear understanding of your condition severity, a personalized treatment plan, and initial recommendations you can begin immediately. This appointment typically takes 60-90 minutes to ensure thoroughness.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll start your prescribed at-home treatment regimen, which may include warm compresses, eyelid hygiene, prescribed medications, and environmental modifications. If in-office procedures are recommended, we'll schedule those during this phase. Many patients begin noticing symptom improvement within 2-3 weeks, though full benefits take longer to develop. We'll check in via telehealth or phone to ensure you're comfortable with your treatment routine, address any questions, and make adjustments if needed. Consistency during this initial phase is crucial for long-term success.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up examination to objectively measure your treatment response, repeat diagnostic tests to assess gland function improvement, and compare your current status to baseline measurements. Most patients experience significant symptom relief by this point, with improved tear stability and reduced inflammation. Based on your progress, we may adjust treatment intensity, add or discontinue certain therapies, or modify your home care routine. This is also an opportunity to address any remaining symptoms or concerns and refine your treatment plan for optimal results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once we've achieved symptom control and improved gland function, we transition to maintenance care designed to prevent recurrence and preserve your progress. This typically involves simplified at-home care routines that fit sustainably into your lifestyle, periodic check-ups every 6-12 months to monitor gland health, and adjustments to treatment when environmental or health factors change. MGD management is ongoing, but with proper care, most patients maintain comfortable eyes and stable gland function. We'll be your long-term partner in protecting your eye health and quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Meibomian Gland Dysfunction
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does MGD treatment take to work?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Most patients notice some symptom improvement within 2-4 weeks of beginning treatment, but significant improvement typically takes 6-12 weeks as meibomian glands gradually resume healthier function. The timeline varies based on disease severity, how long MGD has been present, and treatment compliance. Mild cases may respond quickly, while severe or long-standing MGD requires more time. In-office procedures like thermal pulsation may provide more rapid relief. Remember that MGD is a chronic condition—even after initial improvement, ongoing maintenance is necessary to sustain results. Setting realistic expectations and staying committed to your treatment plan through the initial weeks leads to the best long-term outcomes.
                </p>
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Will I need to take medication long-term?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Not necessarily. Medication needs vary greatly depending on your specific MGD presentation. Some patients require oral antibiotics like doxycycline for several months to control inflammation, then discontinue them while maintaining symptom relief with at-home care alone. Others benefit from ongoing prescription eye drops or periodic courses of oral medication during flare-ups. Many patients achieve excellent control with non-prescription treatments—warm compresses, eyelid hygiene, omega-3 supplements, and environmental modifications—without long-term medication use. We tailor medication recommendations to your disease severity and treatment response, always aiming to use the least intensive approach that maintains your eye comfort. Throughout your care, we'll regularly reassess whether medications can be reduced or discontinued.
                </p>
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover MGD treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Insurance coverage for MGD treatment varies. Medical eye examinations for diagnosed MGD are typically covered by medical insurance (not vision insurance), as MGD is a medical condition affecting eye health. Prescription medications are usually covered under your pharmacy benefits, subject to your specific plan's formulary and copays. However, some advanced in-office procedures like intense pulsed light therapy or thermal pulsation systems may not be covered by all insurance plans and could be considered elective or cosmetic, requiring out-of-pocket payment. We verify benefits prior to treatment and provide cost estimates for any non-covered services. Our team will work with you to maximize insurance coverage and develop a treatment plan that fits your budget while effectively addressing your condition.
                </p>
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if my treatment isn't working?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  If you're not experiencing improvement after 6-8 weeks of consistent treatment, several factors may be at play. First, we'll review your treatment compliance to ensure techniques are being performed correctly and consistently—even small variations in warm compress temperature or duration can affect results. We'll also reassess your diagnosis to rule out other contributing conditions like aqueous deficiency dry eye, ocular rosacea, or autoimmune disease that may require additional treatment. Your medication regimen may need adjustment—different patients respond differently to various therapies. We might recommend advancing to more intensive treatments like in-office procedures, trying different medication combinations, or addressing underlying systemic health factors. Resistant cases sometimes benefit from referral to dry eye subspecialists or testing for underlying conditions. The key is open communication—let us know if treatment isn't helping so we can promptly adjust your care plan.
                </p>
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can MGD be treated effectively through telehealth?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  While the initial diagnostic evaluation requires an in-person examination with specialized equipment to properly assess meibomian gland structure and function, many aspects of MGD treatment can be effectively managed through telehealth. Once you're diagnosed and have an established treatment plan, virtual follow-ups are excellent for monitoring symptom improvement, reviewing treatment technique, troubleshooting difficulties with home care routines, adjusting medications, and providing education and support. Telehealth appointments offer convenience and accessibility, eliminating travel time and making it easier to fit care into busy schedules. For ongoing maintenance after initial treatment success, periodic telehealth check-ins combined with less frequent in-person examinations work well for many patients. We'll recommend an appropriate balance of in-person and virtual care based on your specific situation and needs.
                </p>
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can MGD cause permanent damage if left untreated?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Yes, untreated Meibomian Gland Dysfunction can lead to permanent gland loss and chronic ocular surface damage. Over time, blocked meibomian glands undergo progressive structural changes called gland atrophy or dropout—the glands shrink, scar, and eventually stop functioning altogether. This permanent gland loss cannot be reversed, even with treatment, reducing the eye's long-term ability to maintain a healthy tear film. Chronic dry eye from MGD can also damage the corneal surface, potentially affecting vision quality and increasing infection risk. Additionally, persistent inflammation may worsen other eye conditions. This is why early diagnosis and treatment are so important—intervening before significant gland dropout occurs preserves gland structure and function, preventing irreversible damage. Even if you've had symptoms for years, treatment still helps by protecting remaining glands and maximizing their function, making it never too late to seek care.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Comprehensive treatment for chronic dry eye including aqueous deficiency, evaporative dry eye, and mixed-mechanism presentations.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
            
            <a href="/conditions/blepharitis" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Blepharitis</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Treatment for eyelid margin inflammation often occurring alongside MGD, causing crusty lids, redness, and discomfort.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
            
            <a href="/conditions/blepharitis" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Ocular Rosacea</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Specialized care for rosacea affecting the eyes, which commonly coexists with MGD and requires integrated treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Get Help for Meibomian Gland Dysfunction Today
          </h2>
          <p className="text-xl mb-10 opacity-95">
            You don't have to face Meibomian Gland Dysfunction alone. Our team is ready to help you find relief and protect your eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-block"
            >
              Schedule Consultation
            </a>
            <a 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}