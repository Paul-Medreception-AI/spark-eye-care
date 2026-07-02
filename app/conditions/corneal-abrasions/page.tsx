import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Corneal Abrasions Treatment in Kyle | Spark Eye Care',
  description: 'Expert corneal abrasion treatment in Kyle. Board-certified eye care for scratched cornea injuries. Fast relief, comprehensive healing. Schedule your appointment today.',
  keywords: 'corneal abrasions treatment Kyle, scratched cornea Kyle, corneal injury treatment, eye injury Kyle, corneal abrasion doctor',
  openGraph: {
    title: 'Corneal Abrasions Treatment in Kyle | Spark Eye Care',
    description: 'Expert corneal abrasion treatment in Kyle. Board-certified eye care for scratched cornea injuries.',
    url: 'https://sparkeyetx.com/conditions/corneal-abrasions',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CornealAbrasionsPage() {
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
            <span>Corneal Abrasions</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6" style={{fontFamily: 'Cormorant'}}>
            Corneal Abrasions Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            A corneal abrasion—a scratch on the clear surface of your eye—can be painful and concerning, but prompt professional treatment leads to rapid healing and prevents complications. At Spark Eye Care, we provide expert diagnosis and comprehensive treatment to restore your comfort and protect your vision.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/cornea.jpg"
                alt="Cornea examination and healing"
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
          <h2 className="font-serif text-4xl mb-8" style={{fontFamily: 'Cormorant'}}>
            Understanding Corneal Abrasions
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              A corneal abrasion is a scratch or scrape on the cornea, the transparent dome-shaped surface that covers the front of your eye. The cornea plays a crucial role in focusing light and protecting the inner structures of your eye, and it contains more nerve endings than almost any other tissue in the body—which explains why even a small scratch can cause significant pain. Corneal abrasions are among the most common eye injuries, affecting hundreds of thousands of Americans each year, from infants accidentally scratched by a fingernail to contact lens wearers who develop irritation, to workers injured by flying debris. While most abrasions heal within 24 to 72 hours with proper treatment, they require professional evaluation to prevent infection, ensure complete healing, and rule out more serious underlying injuries.
            </p>
            <p>
              The causes of corneal abrasions are diverse and often occur during everyday activities. Foreign objects such as dust, sand, wood shavings, or metal particles can scratch the cornea when they enter the eye, especially in windy conditions or work environments without proper eye protection. Contact lenses that are worn too long, improperly fitted, or removed carelessly can cause abrasions, as can sleeping in lenses not designed for overnight wear. Direct trauma from fingernails (particularly common with young children), makeup brushes, tree branches, or sports injuries accounts for many cases. Chemical exposures, welding flash, and intense UV light can damage the corneal surface as well. Certain conditions increase vulnerability: dry eyes reduce the protective tear film that normally cushions the cornea, previous eye surgeries may affect corneal integrity, and occupations involving construction, metalwork, woodworking, or healthcare carry higher risk without appropriate protective eyewear.
            </p>
            <p>
              Professional treatment for corneal abrasions is essential, not optional. While the temptation to "wait and see" is understandable given that many minor abrasions heal quickly, only a comprehensive eye examination can determine the extent of injury, identify embedded foreign bodies that may be invisible to the naked eye, detect signs of infection, and rule out penetrating injuries that may appear superficial initially but pose serious risks to vision. Untreated or improperly treated corneal abrasions can lead to corneal ulcers, bacterial or fungal infections, recurrent erosion syndrome (where the abrasion repeatedly reopens), permanent scarring that affects vision, and in severe cases, vision loss. At Spark Eye Care in Kyle, our board-certified eye care professionals use specialized equipment including slit lamp microscopy and fluorescein staining to thoroughly evaluate every corneal injury, provide evidence-based treatment that accelerates healing and prevents complications, and ensure appropriate follow-up to confirm complete recovery. Early intervention dramatically reduces the risk of long-term problems and provides rapid relief from the considerable discomfort that corneal abrasions cause.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Signs & Symptoms of Corneal Abrasions
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Immediate Warning Signs</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Sudden Sharp Eye Pain</div>
                    <p className="text-[var(--color-muted)]">Intense pain that feels like something is stuck in your eye, often worse with blinking or eye movement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Foreign Body Sensation</div>
                    <p className="text-[var(--color-muted)]">Persistent feeling that sand, grit, or an eyelash is trapped under your eyelid even after flushing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Excessive Tearing</div>
                    <p className="text-[var(--color-muted)]">Profuse watering as your eye attempts to flush away the irritant and protect the damaged surface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Severe Light Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Photophobia that makes it difficult to keep your eyes open in normal lighting or bright environments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eye Redness</div>
                    <p className="text-[var(--color-muted)]">Bloodshot appearance as blood vessels dilate in response to the corneal injury and inflammation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Headache Around the Eye</div>
                    <p className="text-[var(--color-muted)]">Pain radiating from the affected eye to the surrounding areas, forehead, or temple on the same side.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Visual & Behavioral Changes</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Blurred Vision</div>
                    <p className="text-[var(--color-muted)]">Reduced clarity of vision in the affected eye due to disruption of the corneal surface and excess tearing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Involuntary Blinking or Squinting</div>
                    <p className="text-[var(--color-muted)]">Frequent blinking, eyelid twitching, or keeping the eye partially or completely closed to reduce discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Discharge from the Eye</div>
                    <p className="text-[var(--color-muted)]">Clear, white, or yellowish discharge that may indicate inflammation or the beginning of infection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty Opening the Eye</div>
                    <p className="text-[var(--color-muted)]">Inability or reluctance to open the affected eye fully due to pain, spasm, or protective reflexes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Worsening Pain Over Time</div>
                    <p className="text-[var(--color-muted)]">Pain that increases rather than improves after several hours, which may signal infection or deeper injury.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Visible Scratch or Irregularity</div>
                    <p className="text-[var(--color-muted)]">In some cases, a scratch line or disrupted reflection on the corneal surface visible when looking closely.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">History of Eye Trauma</div>
                    <p className="text-[var(--color-muted)]">Recent contact with foreign objects, fingernail scratch, contact lens problem, or any injury to the eye area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, faster healing, and prevention of complications that could threaten your vision.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-center" style={{fontFamily: 'Cormorant'}}>
            How We Treat Corneal Abrasions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13 13h.01" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a detailed examination using specialized equipment including slit lamp biomicroscopy to view the cornea at high magnification. Fluorescein dye is applied to make the abrasion visible under blue light, revealing its exact size, depth, and location. We check for embedded foreign bodies that may be difficult to see with the naked eye and assess for signs of infection or penetrating injury that require more aggressive intervention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on the severity and characteristics of your abrasion, we develop an individualized treatment protocol. This typically includes removal of any foreign material, antibiotic eye drops or ointment to prevent infection, and pain management strategies. For larger abrasions, we may apply a bandage contact lens to protect the healing cornea and reduce discomfort. We provide clear instructions on what to expect during healing and warning signs that require immediate attention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Follow-Up & Prevention</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We schedule appropriate follow-up examinations to ensure proper healing—typically within 24-48 hours for moderate to large abrasions. During these visits, we assess healing progress, adjust treatment if needed, and watch for complications. Once healed, we provide guidance on preventing future corneal injuries, including proper contact lens care, workplace eye protection recommendations, and management of underlying conditions like dry eye that increase vulnerability to abrasions.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based treatment approach combines proven medical interventions with compassionate care. Most uncomplicated corneal abrasions heal within 24 to 72 hours with appropriate treatment, though larger or deeper abrasions may require several days to a week. We utilize topical antibiotic medications (such as erythromycin or polymyxin B/trimethoprim) to prevent bacterial infection, which is the most serious potential complication. For pain management, we may prescribe topical nonsteroidal anti-inflammatory drugs (NSAIDs) or oral pain relievers, and in some cases, short-term use of cycloplegic drops to reduce pain from ciliary muscle spasm. Bandage contact lenses serve as a protective barrier for larger abrasions, promoting faster epithelial healing while reducing friction from blinking. We avoid eye patches for most abrasions, as research shows they don't improve healing time and may slightly increase infection risk. Throughout treatment, we emphasize the importance of completing the full course of prescribed medications, avoiding contact lens wear until fully healed, and protecting the eye from further injury. Our comprehensive approach addresses not just the immediate injury but also the underlying factors that contributed to it, reducing the likelihood of recurrence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Why Choose Spark Eye Care for Corneal Abrasions Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our experienced eye care professionals have extensive training in diagnosing and treating corneal injuries, using advanced diagnostic equipment to ensure accurate assessment and optimal outcomes.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We understand that every corneal abrasion is unique. Your treatment plan is tailored to your specific injury characteristics, lifestyle factors, and individual healing needs for the best possible recovery.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Access Options</h3>
              <p className="text-[var(--color-muted)]">
                While initial evaluation requires an in-person visit, we offer telehealth follow-up appointments when appropriate, making it easier to monitor your healing progress without unnecessary trips to the office.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Specialized Eye Injury Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have extensive experience treating corneal abrasions and other eye injuries, from simple scratches to complex cases involving embedded foreign bodies or chemical exposures requiring urgent intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Day 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit focuses on determining the extent of your corneal injury. We'll take a detailed history of what happened, perform a comprehensive eye examination with fluorescein staining to visualize the abrasion, check for foreign bodies, and assess for signs of infection or deeper injury. You'll receive immediate treatment including any necessary foreign body removal, prescription medications (typically antibiotic drops or ointment), pain management recommendations, and detailed instructions for home care. Most patients experience significant pain relief within the first 24 hours of treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Active Healing Phase (Days 2-7)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most uncomplicated corneal abrasions heal within 24 to 72 hours, though larger or deeper injuries may take up to a week. During this period, you'll use prescribed medications as directed and follow activity restrictions we've outlined. We'll schedule a follow-up examination—typically within 24 to 48 hours for moderate to large abrasions—to ensure proper healing and adjust treatment if needed. You should notice progressive improvement in pain, light sensitivity, and vision clarity. If symptoms worsen or new symptoms develop (increased pain, discharge, vision changes), contact us immediately as these may indicate complications requiring urgent attention.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Healing Confirmation (Week 1-2)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your symptoms have resolved, we perform a final examination to confirm complete corneal healing. Using the slit lamp and fluorescein dye, we verify that the epithelium has fully regenerated with no remaining defect. At this visit, we'll clear you to resume normal activities including contact lens wear (if applicable), discuss prevention strategies to reduce risk of future injuries, and address any residual concerns. Some patients may experience mild irritation or foreign body sensation for a few days after complete healing as the new epithelium strengthens and matures.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Prevention (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After your corneal abrasion heals, we provide comprehensive guidance on preventing recurrence. This includes proper contact lens hygiene and wear schedules if applicable, use of protective eyewear for high-risk activities or occupations, management of dry eye conditions that increase vulnerability, and recognition of early warning signs requiring prompt attention. A small percentage of patients may develop recurrent corneal erosion syndrome, where the healing epithelium doesn't adhere properly and the abrasion reopens, typically upon waking. If you experience this, specialized treatments are available to promote stronger adhesion and prevent future episodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions About Corneal Abrasions
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                How long does it take for a corneal abrasion to heal?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most uncomplicated corneal abrasions heal within 24 to 72 hours with appropriate treatment. Small, superficial abrasions may feel significantly better within 24 hours, while larger or deeper abrasions can take up to a week to heal completely. Healing time depends on several factors including the size and depth of the abrasion, its location on the cornea, whether there was an embedded foreign body, your overall eye health, and how consistently you follow treatment instructions. Contact lens-related abrasions sometimes take slightly longer to heal. During follow-up examinations, we use fluorescein dye to confirm that the epithelium has fully regenerated before clearing you to resume normal activities. If healing is taking longer than expected, we'll investigate potential complications such as infection or underlying conditions affecting healing.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Will I need medication, and what are the potential side effects?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, medication is typically necessary for corneal abrasions. Antibiotic eye drops or ointment (such as erythromycin, polymyxin B/trimethoprim, or fluoroquinolones) are prescribed to prevent bacterial infection, which is the most serious potential complication. These medications have minimal side effects—some patients experience temporary blurring (especially with ointments) or mild stinging upon application. For pain management, we may recommend over-the-counter pain relievers or prescribe topical nonsteroidal anti-inflammatory drugs (NSAIDs). In cases of significant pain from ciliary muscle spasm, cycloplegic drops that temporarily dilate the pupil may provide relief. It's crucial to complete the full course of prescribed antibiotics even if you feel better, as stopping early increases infection risk. We'll review all medications, their proper administration technique, and what to expect during your initial visit.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Does insurance cover corneal abrasion treatment?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, corneal abrasion treatment is typically covered by health insurance (not vision insurance) as it's considered a medical eye problem requiring urgent care rather than routine vision care. Most insurance plans cover the examination, diagnostic testing (including fluorescein staining and slit lamp evaluation), foreign body removal procedures if needed, and follow-up visits to confirm healing. Prescribed medications are usually covered under your pharmacy benefits, though you may have a copay depending on your plan. If your injury occurred at work, it may be covered under workers' compensation insurance instead. We recommend contacting your insurance provider before your visit to understand your specific coverage and any potential out-of-pocket costs. Our office staff can provide diagnosis and procedure codes to help you verify benefits, and we'll work with you to maximize your insurance coverage.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                What happens if my corneal abrasion doesn't heal or gets worse?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If your corneal abrasion isn't healing as expected or symptoms worsen, several complications may be developing that require prompt attention. Bacterial or fungal infection can occur, characterized by increased pain, yellow or green discharge, worsening redness, and progressive vision loss—this requires aggressive antibiotic or antifungal treatment. An embedded foreign body that wasn't initially visible may be preventing healing and needs removal. The injury may be deeper than initially assessed, possibly involving the underlying stroma rather than just the epithelium, requiring modified treatment. Some patients develop recurrent corneal erosion syndrome, where the new epithelium doesn't adhere properly and repeatedly breaks down, typically upon waking; this may require specialized treatments such as anterior stromal puncture, phototherapeutic keratectomy, or bandage contact lens use. Contact us immediately if you experience worsening pain, new discharge, vision changes, or lack of improvement after 48-72 hours of treatment. Early intervention for complications dramatically improves outcomes.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Can I use telehealth for corneal abrasion follow-up appointments?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Your initial evaluation for a corneal abrasion must be performed in person because we need specialized equipment (slit lamp microscope and fluorescein dye) to accurately assess the size, depth, and location of the injury, check for embedded foreign bodies, and rule out more serious conditions. However, for uncomplicated cases that are healing well, some follow-up appointments may be conducted via telehealth if appropriate. During a telehealth follow-up, we'll discuss your symptoms, assess your subjective improvement, review your medication compliance, and determine whether an in-person examination is necessary. Telehealth works best when symptoms are clearly improving and there are no concerning signs of complications. Final healing confirmation typically requires an in-person visit with fluorescein examination to verify complete epithelial regeneration. We'll make recommendations based on your specific situation, always prioritizing thoroughness and safety while offering convenience when possible.
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                How can I prevent future corneal abrasions?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Prevention strategies depend on the cause of your abrasion. For contact lens wearers: follow proper hygiene and cleaning protocols, adhere to recommended replacement schedules, never sleep in lenses unless specifically designed for extended wear, remove lenses immediately if they become uncomfortable, and maintain adequate tear film with artificial tears if needed. For workplace injuries: wear appropriate safety glasses or goggles when working with tools, chemicals, or in environments with flying debris; this is especially critical for construction, metalwork, woodworking, and laboratory settings. For general prevention: trim fingernails regularly and be careful around young children whose fingers may accidentally scratch your eye, be cautious with makeup applicators and keep them clean, protect your eyes from tree branches and bushes during outdoor activities, and manage underlying dry eye conditions that compromise corneal protection. If you've had a corneal abrasion, your eye may be more vulnerable for several weeks as the new epithelium strengthens, so extra caution during this period is important. We'll provide personalized prevention recommendations based on your specific risk factors.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/dry-eye-syndrome" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic dry eye increases vulnerability to corneal abrasions by reducing the protective tear film.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
            <a href="/conditions/corneal-abrasions" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Eye Infections</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Untreated corneal abrasions can develop bacterial or fungal infections requiring specialized treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
            <a href="/conditions/corneal-abrasions" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Corneal Ulcer</h4>
              <p className="text-[var(--color-muted)] mb-4">
                An infected corneal abrasion can progress to a corneal ulcer, a serious condition threatening vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Get Help for Corneal Abrasions Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face corneal abrasions alone. Our team is ready to help you heal quickly and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Appointment
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}