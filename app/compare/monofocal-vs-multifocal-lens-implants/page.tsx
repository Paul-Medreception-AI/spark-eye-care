import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monofocal vs Multifocal Lens Implants: Choosing the Best IOL for Your Lifestyle | Spark Eye Care',
  description: 'Compare monofocal and multifocal IOLs for cataract surgery. Learn about effectiveness, side effects, costs, and which lens implant best fits your lifestyle and vision goals.',
  keywords: 'monofocal vs multifocal, IOL comparison, lens implants, cataract surgery options, premium IOL, best lens implant, multifocal lenses',
}

export default function MonofocalVsMultifocalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Monofocal vs Multifocal Lens Implants: Choosing the Best IOL for Your Lifestyle
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Understanding the differences between lens implant options to make the best decision for your vision and daily activities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              When undergoing cataract surgery or refractive lens exchange, one of the most important decisions you'll make is choosing which type of intraocular lens (IOL) to have implanted. The two primary categories—monofocal and multifocal lenses—each offer distinct advantages and are suited to different lifestyles and visual priorities.
            </p>
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              This comprehensive comparison will help you understand the key differences, weigh the pros and cons, and determine which lens implant option aligns best with your daily activities, visual goals, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">Monofocal IOL</div>
              <div className="p-6 font-semibold border-l border-white/20">Multifocal IOL</div>
            </div>

            {/* Vision Range */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Vision Range</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Single focal point (typically distance); reading glasses needed for near tasks</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Multiple focal points for distance, intermediate, and near vision</div>
            </div>

            {/* Glasses Dependency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Glasses Dependency</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Will need reading glasses for close work; may need glasses for distance if set for near</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Reduced or eliminated need for glasses at all distances</div>
            </div>

            {/* Visual Quality */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Visual Quality</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Sharpest, most crisp vision at focal point; excellent contrast sensitivity</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Good vision at multiple distances; may have slight reduction in contrast</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Side Effects</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Minimal; rare halos or glare</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Possible halos, glare, or starburst around lights (especially at night); most adapt within 3-6 months</div>
            </div>

            {/* Night Driving */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Night Driving</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Excellent; minimal visual disturbances</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">May experience halos or glare; improves with adaptation</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Typically covered by insurance for cataract surgery; lower out-of-pocket</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Premium upgrade; additional out-of-pocket cost ($1,500-$3,500+ per eye)</div>
            </div>

            {/* Adaptation Period */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Adaptation Period</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Minimal; vision stabilizes quickly</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">3-6 months for brain to adapt to multiple focal points</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Budget-conscious patients; those who don't mind reading glasses; professional drivers</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Active lifestyles; desire for glasses independence; frequent travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Monofocal */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                Monofocal IOL: Proven, Reliable Single-Focus Vision
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Monofocal intraocular lenses have been the gold standard in cataract surgery for decades. These lenses are designed to provide sharp, clear vision at one specific distance—typically set for optimal distance vision, allowing you to see clearly across a room, while driving, or enjoying outdoor activities. The optics are straightforward: light focuses at a single point on the retina, delivering crisp visual quality without the compromises inherent in splitting focus across multiple distances.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              The primary trade-off with monofocal lenses is that you'll need reading glasses for close-up tasks such as reading, using your smartphone, or doing detailed work. Some patients opt for "monovision," where one eye is set for distance and the other for near vision, though this approach doesn't suit everyone. Monofocal lenses offer excellent contrast sensitivity and the sharpest possible vision at their focal point, making them ideal for patients who prioritize visual clarity and don't mind wearing glasses for certain activities.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Monofocal IOLs are typically fully covered by insurance when part of cataract surgery, making them the most economical choice. They're particularly well-suited for patients on a budget, those who already wear and are comfortable with glasses, individuals with demanding visual tasks requiring maximum sharpness (such as professional drivers or pilots), and anyone who wants to avoid potential side effects like halos or glare.
            </p>
          </div>

          {/* Deep Dive - Multifocal */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                Multifocal IOL: Premium Technology for Glasses Independence
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Multifocal intraocular lenses represent a significant advancement in lens implant technology, designed to reduce or eliminate dependence on glasses after cataract surgery. These premium lenses use sophisticated optical designs—typically with concentric rings or diffractive patterns—to split incoming light and create multiple focal points. This allows you to see clearly at distance (driving, watching TV), intermediate range (computer work, dashboard), and near (reading, smartphone use) without constantly reaching for glasses.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              The visual freedom offered by multifocal IOLs comes with some considerations. Because the lens divides light between multiple focal points, there can be a slight reduction in contrast sensitivity compared to monofocal lenses. Many patients experience visual phenomena such as halos, glare, or starburst effects around lights, particularly noticeable when night driving. These effects are most pronounced in the first few months after surgery and typically diminish significantly as the brain adapts to processing the multiple images. Most patients report high satisfaction once they've completed the adaptation period, usually within 3-6 months.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Multifocal IOLs are considered a premium upgrade and involve additional out-of-pocket costs beyond standard insurance coverage, typically ranging from $1,500 to $3,500 or more per eye. They're best suited for motivated patients who strongly desire independence from glasses, lead active lifestyles with varied visual demands, are willing to accept the possibility of visual side effects during the adaptation period, and can afford the premium investment. Ideal candidates include frequent travelers, active individuals who participate in sports or outdoor activities, and people who find glasses inconvenient in their daily routines.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: Which IOL Is Right for You?
            </h2>

            {/* Choose Monofocal */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Monofocal IOL if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Prioritize the sharpest possible vision at one distance and maximum contrast sensitivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Don't mind wearing reading glasses for close-up tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Want to minimize out-of-pocket costs and rely on insurance coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Do significant night driving and want to avoid any potential halos or glare</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Have visual demands requiring the absolute best clarity (professional drivers, pilots, precision work)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Already wear glasses regularly and find them convenient</span>
                </li>
              </ul>
            </div>

            {/* Choose Multifocal */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Multifocal IOL if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Strongly desire independence from glasses for most or all daily activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Lead an active lifestyle with varied visual demands (sports, travel, hobbies)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Find glasses inconvenient or incompatible with your activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Are willing to invest in premium lens technology for long-term convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Can accept a 3-6 month adaptation period and potential for temporary visual phenomena</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Have realistic expectations and understand the trade-offs involved</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important Note:</strong> Your eye surgeon will evaluate your individual eye health, corneal condition, lifestyle needs, and visual goals to recommend the most appropriate lens option. Certain eye conditions may make you a better candidate for one type over another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Considerations */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Additional Factors to Consider
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Cost Analysis</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    While multifocal lenses cost more upfront, consider the long-term savings on prescription glasses and contacts. Over 20+ years, the cost difference may narrow considerably.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Lifestyle Assessment</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Think about your daily activities: Do you read frequently? Use computers? Drive at night? Play sports? Your lifestyle should heavily influence your decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-5.4-7.518l4.537 4.537m0 0l-1.402 1.402A3.24 3.24 0 0115.5 21h-7c-1.183 0-2.262-.643-2.835-1.674l-1.402-1.402m12.474-3.196L9.177 7.637" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Personality & Adaptability</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Multifocal lenses require patience during adaptation. If you're sensitive to visual changes or have difficulty adjusting to new experiences, monofocal may be safer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Medical History</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Conditions like dry eye, macular degeneration, glaucoma, or corneal irregularities may affect lens selection. Your surgeon will assess your candidacy thoroughly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Can I switch from monofocal to multifocal lenses later?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                While it's technically possible to exchange an IOL through a secondary surgical procedure, it's complex, carries risks, and is generally not recommended unless there's a medical necessity. This is why the initial lens choice is so important. Take time to carefully consider your options and discuss them thoroughly with your surgeon before your cataract surgery.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Will I definitely experience halos and glare with multifocal lenses?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Not everyone experiences significant halos or glare, and when they do occur, they're often most noticeable in low-light conditions during the first few months. As your brain adapts to the multifocal optics, these visual phenomena typically diminish substantially. Most patients report that they become unnoticeable or minimally bothersome after 3-6 months. However, individual experiences vary, and a small percentage of patients remain bothered by these effects long-term.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                Are there other premium lens options besides multifocal?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Yes, there are several other advanced lens options worth discussing with your surgeon. Extended Depth of Focus (EDOF) lenses provide good distance and intermediate vision with fewer halos than multifocal lenses, though you may still need readers for fine print. Toric lenses correct astigmatism and can be combined with monofocal or multifocal designs. Accommodating lenses attempt to mimic the eye's natural focusing ability. Each has unique benefits and limitations based on your specific visual needs and eye anatomy.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                How do I know if I'm a good candidate for multifocal lenses?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Good candidates for multifocal IOLs typically have healthy eyes free from conditions like severe macular degeneration, significant glaucoma damage, or irregular corneas. Your expectations matter too—you should have a strong motivation for glasses independence, realistic understanding of the adaptation period, and tolerance for potential visual compromises. During your consultation, your surgeon will perform comprehensive testing including corneal topography, optical coherence tomography (OCT), and detailed measurements to determine if you're a suitable candidate.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-light)] transition-colors">
                What if I choose monofocal but later decide I want less dependence on glasses?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                If you choose monofocal lenses and later want to reduce glasses dependence, you have options. Laser vision correction (LASIK or PRK) can sometimes be performed after cataract surgery to create a monovision effect or correct residual refractive error. Another option is to wear contact lenses over your IOLs for specific activities. However, these are additional procedures with their own considerations and costs. It's generally best to plan your long-term vision strategy during your initial cataract surgery decision.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Discuss Your Lens Options?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a comprehensive consultation with our experienced surgeons to determine which IOL option best suits your vision goals, lifestyle, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors shadow-lg"
              >
                Schedule Your Consultation
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
              >
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
            </div>
            <p className="text-white/80 mt-8 text-sm">
              Most insurance plans cover monofocal IOLs for cataract surgery. Financing options available for premium lens upgrades.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}