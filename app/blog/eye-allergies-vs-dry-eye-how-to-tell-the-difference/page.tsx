import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Allergies vs Dry Eye: How to Tell the Difference | Spark Eye Care',
  description: 'Learn how to distinguish between eye allergies and dry eye syndrome. Understand the symptoms, causes, and treatments for each condition from the experts at Spark Eye Care.',
  keywords: 'eye allergies, dry eye, itchy eyes, watery eyes, red eyes, eye care, allergic conjunctivitis, dry eye syndrome',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Eye Allergies vs Dry Eye: How to Tell the Difference
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You wake up with red, irritated eyes. They feel gritty, uncomfortable, and won't stop watering. But is it allergies, or is it dry eye? These two common conditions share remarkably similar symptoms, yet they require completely different treatments. Misidentifying which one you're dealing with can lead to months of ineffective remedies and unnecessary discomfort. Understanding the key differences between eye allergies and dry eye syndrome is the first step toward finding real relief.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Both conditions affect millions of Americans every year, often disrupting daily activities, work productivity, and quality of life. The good news? Once you know what to look for, distinguishing between them becomes much clearer—and so does the path to effective treatment.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Eye Allergies
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Eye allergies, medically known as allergic conjunctivitis, occur when your immune system overreacts to allergens in the environment. When pollen, pet dander, dust mites, or mold spores come into contact with your eyes, your body releases histamine—a chemical that triggers inflammation and those all-too-familiar allergy symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The hallmark of eye allergies is <strong>itching</strong>. If your primary complaint is an overwhelming urge to rub your eyes, allergies are likely the culprit. Other telltale signs include:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Intense itching that makes you want to rub your eyes constantly</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Redness in both eyes simultaneously</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Watery discharge (not thick or sticky)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Puffy, swollen eyelids</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Accompanying nasal symptoms like sneezing or runny nose</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Seasonal patterns (worse during spring or fall)</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Eye allergies tend to come and go based on exposure to triggers. You might notice symptoms worsen when you're outdoors during high pollen counts, visiting a home with pets, or in dusty environments.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Dry Eye Syndrome
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Dry eye syndrome occurs when your eyes don't produce enough tears, or when the tears you do produce evaporate too quickly. This leaves the surface of your eye inadequately lubricated, leading to inflammation and damage to the ocular surface over time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Unlike allergies, dry eye is characterized by a <strong>burning or gritty sensation</strong>—as if there's sand or an eyelash stuck in your eye. Key symptoms include:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Burning, stinging, or scratchy sensation</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Paradoxical excessive tearing (eyes overcompensating for dryness)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Eye fatigue, especially after reading or screen time</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Blurred vision that improves with blinking</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Stringy mucus in or around the eyes</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms that worsen throughout the day</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Discomfort when wearing contact lenses</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Dry eye is often chronic and persistent, rather than seasonal. It's more common in people over 50, those who spend extended time on digital devices, individuals taking certain medications (like antihistamines or antidepressants), and people with autoimmune conditions.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "The key distinction: if itching is your main complaint, think allergies. If it's burning or grittiness, think dry eye. But remember, you can have both conditions simultaneously."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Overlap: When Both Conditions Coexist
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Here's where things get tricky: you can have both eye allergies and dry eye at the same time. In fact, having one condition can make you more susceptible to the other. Chronic eye allergies can damage the tear film, leading to dry eye. Conversely, dry eyes are more vulnerable to allergen exposure because the protective tear layer is compromised.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            This overlap is why self-diagnosis can be challenging. Over-the-counter allergy drops won't help dry eye, and artificial tears alone won't stop an allergic reaction. When symptoms persist despite treatment, or when you're experiencing a confusing mix of burning <em>and</em> itching, it's time to see an eye care professional who can properly diagnose and treat both conditions.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Treatment Approaches: Different Problems, Different Solutions
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>For Eye Allergies:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Antihistamine eye drops to block the allergic response</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mast cell stabilizers for prevention (start before allergy season)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cold compresses to reduce swelling and itching</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Avoiding allergen exposure when possible</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Oral antihistamines for systemic allergy relief</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>For Dry Eye:</strong>
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Preservative-free artificial tears throughout the day</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Warm compresses to improve oil gland function</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Prescription anti-inflammatory drops (like cyclosporine or lifitegrast)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Omega-3 fatty acid supplements</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Environmental modifications (humidifiers, screen breaks)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Punctal plugs to retain tears in severe cases</span>
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Seek Professional Help
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While mild symptoms can sometimes be managed with over-the-counter solutions, certain situations warrant a visit to an eye care professional:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms persist for more than a week despite treatment</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Vision changes or eye pain accompany your symptoms</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You're unsure whether you're dealing with allergies or dry eye</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Discharge becomes thick, yellow, or green (possible infection)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Your symptoms significantly impact daily activities or quality of life</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            A comprehensive eye exam can identify the root cause of your symptoms. Your eye care provider can perform specialized tests like tear break-up time, Schirmer testing for tear production, and examine your eyelids and ocular surface under magnification. They'll also review your medical history, medications, and environmental factors to develop a personalized treatment plan.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Living Comfortably: Prevention Strategies
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Whether you're dealing with allergies, dry eye, or both, certain lifestyle adjustments can minimize symptoms:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Practice the 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Keep air clean:</strong> Use HEPA filters, keep windows closed during high pollen days</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Stay hydrated:</strong> Drink plenty of water throughout the day</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Wear wraparound sunglasses:</strong> Protects eyes from both allergens and wind</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Maintain eyelid hygiene:</strong> Gentle cleaning with warm water or lid wipes</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Avoid rubbing your eyes:</strong> This worsens inflammation for both conditions</span>
            </li>
          </ul>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Red, irritated eyes don't have to be your norm. Understanding the difference between eye allergies and dry eye empowers you to choose the right treatments and seek appropriate care. While both conditions can be frustrating, they're also highly manageable with the correct approach.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're tired of guessing what's causing your discomfort—or if over-the-counter remedies aren't providing relief—it's time to get answers. Our team at Spark Eye Care specializes in diagnosing and treating both eye allergies and dry eye syndrome, creating customized care plans that address your unique needs. Don't let uncomfortable eyes hold you back from living fully. Reach out today, and let's find the solution that works for you.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Digital Eye Strain</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how screen time affects your eyes and what you can do to protect your vision.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Importance of UV Protection</h4>
                <p className="text-[var(--color-muted)] text-sm">Why protecting your eyes from UV rays matters year-round, not just in summer.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">When to Schedule Your Eye Exam</h4>
                <p className="text-[var(--color-muted)] text-sm">Guidelines for how often you should see your eye care provider based on age and risk factors.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you find relief and restore your eye comfort.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}