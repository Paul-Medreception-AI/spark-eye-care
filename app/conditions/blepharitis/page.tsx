import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blepharitis Treatment in Kyle | Spark Eye Care',
  description: 'Expert blepharitis treatment in Kyle. Board-certified care for eyelid inflammation, crusty eyelids, and chronic eye irritation. Telehealth available.',
  keywords: 'blepharitis treatment Kyle, eyelid inflammation Kyle, crusty eyelids, eye doctor Kyle, dry eyes Kyle',
  openGraph: {
    title: 'Blepharitis Treatment in Kyle | Spark Eye Care',
    description: 'Expert blepharitis treatment in Kyle. Board-certified care for eyelid inflammation, crusty eyelids, and chronic eye irritation.',
    url: 'https://www.sparkeyetx.com/conditions/blepharitis',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlepharitisPage() {
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
            <span>Blepharitis</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Blepharitis Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            Blepharitis can make every blink uncomfortable, affecting your daily quality of life with persistent irritation, redness, and crusty eyelids. At Spark Eye Care, we provide comprehensive, evidence-based treatment to manage this chronic condition and restore your ocular comfort.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Blepharitis
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Blepharitis is a common inflammatory condition affecting the eyelids, characterized by red, swollen, and irritated eyelid margins. This chronic disorder affects millions of Americans and occurs when the tiny oil glands near the base of the eyelashes become clogged or inflamed. While blepharitis rarely causes permanent vision loss, it can significantly impact your quality of life, causing persistent discomfort, eye fatigue, and difficulties with contact lens wear. The condition often comes and goes in episodes, with periods of flare-ups followed by times when symptoms are less bothersome. Many patients report that blepharitis affects their ability to work comfortably at computers, read for extended periods, or wear eye makeup without irritation.
            </p>
            <p>
              The causes of blepharitis are multifactorial and often interrelated. Bacterial overgrowth, particularly of Staphylococcus species, commonly contributes to anterior blepharitis affecting the outer eyelid. Seborrheic blepharitis is associated with dandruff of the scalp and eyebrows, while meibomian gland dysfunction (MGD) affects the inner eyelid and oil gland secretions. Demodex mites, microscopic organisms that naturally inhabit hair follicles, can proliferate excessively and trigger inflammation. Risk factors include age (blepharitis becomes more common after 50), rosacea and other skin conditions, allergies, hormonal changes, environmental irritants, and chronic dry eye disease. The condition is also more prevalent in individuals with compromised immune systems or those taking certain medications that affect tear production or gland function.
            </p>
            <p>
              Professional treatment is essential for managing blepharitis effectively because this condition requires accurate diagnosis to determine the underlying cause and appropriate therapeutic approach. While over-the-counter remedies and home care can provide temporary relief, comprehensive medical evaluation identifies whether you have anterior, posterior, or mixed blepharitis, and whether contributing factors like Demodex infestation, bacterial colonization, or meibomian gland dysfunction require targeted treatment. Without proper management, blepharitis can lead to complications including recurrent styes and chalazia, corneal damage from chronic inflammation, eyelash loss or misdirection, and severe dry eye syndrome. Our evidence-based treatment protocols address both the symptoms and underlying causes, helping you achieve long-term control of this frustrating condition and preventing progression to more serious ocular surface disease.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Blepharitis
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Eye & Eyelid Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Red, Swollen Eyelid Margins</p>
                    <p className="text-[var(--color-muted)]">Inflammation along the edge of the eyelids, particularly noticeable in the morning or after prolonged visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Crusty Debris on Eyelashes</p>
                    <p className="text-[var(--color-muted)]">Scaly, flaky material or yellowish crusts accumulating at the base of lashes, especially after sleep.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Burning or Stinging Sensation</p>
                    <p className="text-[var(--color-muted)]">Persistent discomfort ranging from mild irritation to severe burning, often worsening throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Gritty or Foreign Body Sensation</p>
                    <p className="text-[var(--color-muted)]">Feeling like sand or debris is in your eyes even when nothing is there, making blinking uncomfortable.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Excessive Tearing or Watery Eyes</p>
                    <p className="text-[var(--color-muted)]">Paradoxical tearing occurs when irritated eyes overproduce watery tears that don't adequately lubricate.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Light Sensitivity (Photophobia)</p>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights, sunlight, or computer screens due to ocular surface inflammation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eyelids Stuck Together Upon Waking</p>
                    <p className="text-[var(--color-muted)]">Dried secretions cause eyelids to mat together overnight, requiring warm water to gently separate them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Functional & Associated Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Wearing Contact Lenses</p>
                    <p className="text-[var(--color-muted)]">Contact lens intolerance develops as inflammation and altered tear film make lens wear increasingly uncomfortable.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurry Vision That Clears with Blinking</p>
                    <p className="text-[var(--color-muted)]">Unstable tear film causes intermittent vision blur that temporarily improves after blinking or rubbing eyes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Recurrent Styes or Chalazia</p>
                    <p className="text-[var(--color-muted)]">Frequent painful lumps or bumps on eyelids caused by blocked glands associated with chronic blepharitis.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Loss of Eyelashes or Misdirected Growth</p>
                    <p className="text-[var(--color-muted)]">Chronic inflammation damages hair follicles, leading to eyelash loss or abnormal growth that irritates the eye.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Fatigue During Reading or Screen Use</p>
                    <p className="text-[var(--color-muted)]">Discomfort and tiredness intensify during prolonged visual tasks due to inadequate tear film and inflammation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Foamy or Oily Tear Film</p>
                    <p className="text-[var(--color-muted)]">Visible foam at eyelid margins or oily appearance on tear film indicates meibomian gland dysfunction.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Worsening Symptoms in Certain Environments</p>
                    <p className="text-[var(--color-muted)]">Symptoms intensify in air-conditioned spaces, windy conditions, low humidity, or exposure to smoke and pollutants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing complications and restoring comfort to your daily life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Blepharitis
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough examination of your eyelids, eyelashes, and ocular surface using specialized magnification and diagnostic tools. We assess meibomian gland function, evaluate for Demodex mites, examine tear film quality, and identify any bacterial colonization or seborrheic involvement. This detailed evaluation determines whether you have anterior, posterior, or mixed blepharitis and reveals contributing factors that must be addressed for successful treatment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific type and severity of blepharitis, we create a customized treatment protocol combining in-office procedures with at-home therapies. Your plan may include prescription medications, specialized eyelid hygiene techniques, warm compress therapy with specific temperature and duration protocols, and targeted treatments for identified causative factors. We educate you on proper eyelid cleaning methods, demonstrate techniques, and provide detailed instructions to ensure treatment adherence and optimal outcomes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Management</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Blepharitis is a chronic condition requiring long-term management, so we schedule regular follow-up appointments to monitor your response to treatment and adjust therapies as needed. We track improvements in symptoms, reassess eyelid health and gland function, and modify treatments based on your progress. As your condition stabilizes, we establish a maintenance regimen to prevent flare-ups and preserve the gains you've achieved, providing continued support to keep your eyes comfortable and healthy.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our evidence-based approach utilizes multiple therapeutic modalities proven effective for blepharitis management. For anterior blepharitis with bacterial involvement, we may prescribe antibiotic ointments applied to the eyelid margins, often combined with diluted baby shampoo or tea tree oil-based cleansers to reduce bacterial load and Demodex populations. Posterior blepharitis with meibomian gland dysfunction typically requires warm compress therapy using specific protocols (108-110°F for 10-15 minutes) followed by gentle lid massage to express thickened meibum. Omega-3 fatty acid supplementation improves meibomian gland secretion quality and reduces inflammation. In severe or resistant cases, we may recommend oral antibiotics such as doxycycline or azithromycin for their anti-inflammatory properties and lipid-normalizing effects. For Demodex-associated blepharitis, tea tree oil-based treatments or prescription medications targeting mite populations are highly effective. Advanced in-office treatments may include intense pulsed light (IPL) therapy, thermal pulsation procedures (LipiFlow), or manual gland expression. Throughout treatment, we emphasize consistent eyelid hygiene, environmental modifications, and addressing contributing factors like rosacea or seborrheic dermatitis to achieve lasting symptom control.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Blepharitis Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our medical professionals have specialized training in ocular surface disease and lid margin disorders, bringing years of experience in diagnosing and treating complex blepharitis cases.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that blepharitis manifests differently in each patient. Your treatment plan is tailored to your specific type, severity, contributing factors, and lifestyle needs for optimal results.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up appointments and ongoing management, we offer convenient telehealth visits, making it easier to maintain your treatment regimen and stay connected with your care team.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Extensive Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have successfully treated hundreds of blepharitis patients, including complex cases resistant to previous treatments, using the latest evidence-based protocols and advanced therapies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive eye examination with detailed evaluation of your eyelids, lashes, tear film, and ocular surface. We'll identify the type and severity of your blepharitis, discuss causative factors, review your symptoms and medical history, and create your personalized treatment plan. You'll leave with clear instructions, any necessary prescriptions, and supplies to begin treatment immediately. This visit typically takes 45-60 minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the first weeks of treatment, you'll establish your daily eyelid hygiene routine, use prescribed medications as directed, and begin to notice gradual symptom improvement. Some patients experience relief within days, while others require several weeks for inflammation to resolve. It's normal for symptoms to fluctuate initially. We're available to answer questions and adjust your regimen if needed. Consistency with your at-home care is crucial during this phase.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we reassess your eyelid health, evaluate treatment effectiveness, and determine if modifications are needed. Most patients experience significant improvement by this point, with reduced redness, less crusting, and improved comfort. If progress is slower than expected, we may recommend additional therapies, change medications, or investigate other contributing factors. This is also when we begin discussing long-term maintenance strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your symptoms are well-controlled, we establish a maintenance routine designed to prevent flare-ups. This typically includes simplified daily eyelid hygiene, periodic warm compress therapy, and possibly reduced-frequency use of certain medications. We schedule periodic check-ups every 3-6 months to monitor your condition and catch any recurrences early. With proper maintenance, many patients enjoy long periods of comfort with minimal symptoms, maintaining the improvements achieved during active treatment.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Honest Expectations:</strong> Blepharitis is a chronic condition that cannot be permanently "cured," but it can be effectively managed with appropriate treatment and ongoing maintenance. Most patients achieve significant symptom relief within 4-8 weeks of starting treatment. However, flare-ups may occur during periods of stress, illness, environmental changes, or if maintenance care is neglected. Your commitment to daily eyelid hygiene and follow-up care is essential for long-term success. With proper management, you can expect substantially improved comfort and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Blepharitis
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                How long does blepharitis treatment take?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients notice initial improvement within 2-4 weeks of starting treatment, with significant symptom relief typically achieved by 6-8 weeks. However, blepharitis is a chronic condition requiring ongoing management rather than a one-time treatment. The active treatment phase usually lasts 2-3 months, after which you'll transition to a maintenance routine. The timeline varies based on the type and severity of your blepharitis, how consistently you follow your treatment plan, and whether contributing factors like rosacea or Demodex infestation are present. Some resistant cases may require longer treatment periods or combination therapies.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I need prescription medications for blepharitis?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many blepharitis cases require prescription medications for optimal management, though not all patients need them. Mild cases may respond to eyelid hygiene and warm compress therapy alone. Moderate to severe cases often benefit from antibiotic ointments (like erythromycin or bacitracin) applied to eyelid margins, or anti-inflammatory medications. Posterior blepharitis with significant meibomian gland dysfunction may require oral antibiotics such as doxycycline or azithromycin, which reduce inflammation and improve oil gland secretions. Demodex-associated blepharitis may need prescription tea tree oil formulations or ivermectin cream. During your evaluation, we'll determine which medications, if any, are appropriate for your specific condition.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover blepharitis treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, blepharitis treatment is generally covered by medical insurance, including Medicare, as it is a medical condition affecting eye health. Your comprehensive eye examination, diagnostic testing, and follow-up appointments are typically covered under your medical insurance (not vision insurance). Prescription medications are usually covered by your pharmacy benefits, though specific coverage depends on your plan's formulary. Some advanced in-office treatments like intense pulsed light (IPL) therapy or specialized gland expression procedures may not be covered by all insurance plans. We verify your insurance benefits before treatment and provide cost estimates for any procedures that may not be covered. Our billing team can help you understand your specific coverage and any out-of-pocket costs.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What if my blepharitis doesn't respond to treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If your blepharitis doesn't improve with initial treatment, we have several options to explore. First, we'll reassess your diagnosis to ensure we're treating the correct type and haven't missed contributing factors. Treatment resistance may indicate undiagnosed Demodex infestation, refractory meibomian gland dysfunction, or underlying conditions like ocular rosacea or seborrheic dermatitis that need concurrent treatment. We may switch medications, add combination therapies, recommend advanced in-office procedures, or extend treatment duration. Some patients require oral antibiotics for longer periods or specialized treatments like thermal pulsation or IPL therapy. We may also investigate environmental or lifestyle factors affecting treatment effectiveness. Our commitment is to continue working with you until we find an effective management strategy for your condition.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can blepharitis be treated through telehealth appointments?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your initial evaluation for blepharitis requires an in-person appointment for comprehensive examination with specialized equipment to visualize your eyelids, meibomian glands, and ocular surface. However, many follow-up appointments can be conducted via telehealth, especially for established patients whose condition we've already diagnosed and begun treating. Telehealth visits work well for monitoring symptom progress, adjusting treatment protocols, renewing prescriptions, providing additional education on technique, and troubleshooting problems with your home care routine. If during a telehealth visit we identify concerns requiring hands-on examination, we'll schedule an in-person appointment. Telehealth offers convenient access to ongoing care while maintaining treatment quality for appropriate visits.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can I prevent blepharitis from coming back?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While blepharitis cannot be permanently cured, consistent maintenance care significantly reduces the frequency and severity of flare-ups. Your ongoing prevention routine should include daily gentle eyelid hygiene with approved cleansers, regular warm compress therapy (even when asymptomatic), omega-3 fatty acid supplementation, proper makeup hygiene (replacing products regularly and removing makeup thoroughly each night), and managing contributing conditions like rosacea or dry eye. Environmental modifications like using a humidifier, avoiding smoke and irritants, taking breaks during screen use, and staying hydrated also help. Even with perfect maintenance, occasional flare-ups may occur during illness, stress, hormonal changes, or seasonal shifts. When you notice early symptoms returning, promptly resume intensive treatment before inflammation becomes severe. Regular check-ups allow us to catch and address issues early.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/dry-eye" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Dry Eye Disease</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic insufficient tear production or poor tear quality causing discomfort, often associated with blepharitis and meibomian gland dysfunction.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
            <Link href="/conditions/meibomian-gland-dysfunction" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Meibomian Gland Dysfunction</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Blockage or abnormal secretions from oil glands in the eyelids, a primary cause of posterior blepharitis and evaporative dry eye.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
            <Link href="/conditions/ocular-rosacea" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Ocular Rosacea</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Eye involvement in rosacea causing chronic inflammation, redness, and symptoms similar to blepharitis, requiring specialized treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Blepharitis Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face blepharitis alone. Our team is ready to help you find relief and restore your ocular comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Evaluation
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