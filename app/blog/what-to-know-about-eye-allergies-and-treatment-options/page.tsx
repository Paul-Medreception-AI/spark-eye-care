import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Know About Eye Allergies and Treatment Options | Spark Eye Care',
  description: 'Learn about eye allergy symptoms, causes, and effective treatment options. Expert guidance from Spark Eye Care on managing seasonal and year-round eye allergies.',
  keywords: 'eye allergies, allergic conjunctivitis, itchy eyes, seasonal allergies, eye allergy treatment, antihistamine eye drops',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Know About Eye Allergies and Treatment Options
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published: January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            The unmistakable itch. The constant urge to rub. The red, watery eyes that make you look like you haven't slept in days. If you've experienced eye allergies, you know they're more than a minor inconvenience—they can significantly impact your quality of life, affecting your ability to work, drive, and enjoy outdoor activities. With millions of Americans experiencing allergic eye conditions each year, understanding what triggers these reactions and how to treat them effectively is essential for finding lasting relief.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Eye allergies, medically known as allergic conjunctivitis, occur when your eyes react to allergens in the environment. While often considered a seasonal nuisance, these conditions can be chronic for many people and deserve proper attention and treatment. The good news? With the right knowledge and approach, most eye allergy sufferers can find significant relief and protect their long-term eye health.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Eye Allergies: What Happens When Your Eyes React
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Eye allergies develop when your immune system overreacts to substances that are typically harmless. When allergens contact the surface of your eye, immune cells release histamine and other chemicals, triggering the characteristic symptoms of allergic conjunctivitis.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most common types of eye allergies include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Seasonal allergic conjunctivitis (SAC):</strong> The most common form, triggered by outdoor allergens like pollen from trees, grasses, and weeds during specific times of the year</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Perennial allergic conjunctivitis (PAC):</strong> Year-round symptoms caused by indoor allergens such as dust mites, pet dander, and mold spores</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Contact allergic conjunctivitis:</strong> Reactions to substances that directly touch the eye, including certain eye drops, cosmetics, or contact lens solutions</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Recognizing which type affects you is the first step toward effective treatment and prevention strategies.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Signs: Symptoms That Signal Eye Allergies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While symptoms can vary in intensity from person to person, eye allergy sufferers typically experience a combination of the following:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Intense itching—often the hallmark symptom that distinguishes allergies from other eye conditions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Redness in the white part of the eye and inner eyelids</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Watery discharge that's typically clear rather than thick or colored</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Swollen or puffy eyelids, particularly noticeable in the morning</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Burning sensation or feeling of grittiness in the eyes</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Light sensitivity that makes bright environments uncomfortable</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Blurred vision that improves with blinking</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Eye allergy symptoms often occur alongside other allergic reactions such as sneezing, nasal congestion, or scratchy throat, particularly during high pollen seasons. Both eyes are typically affected, though symptoms may be more pronounced in one eye depending on exposure patterns.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "The key to managing eye allergies effectively isn't just treating symptoms—it's identifying triggers and developing a comprehensive prevention strategy that protects your eyes year-round."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Prevention Strategies: Reducing Your Exposure to Allergens
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While completely avoiding allergens isn't always possible, strategic prevention can significantly reduce the frequency and severity of allergic reactions. The most effective approach combines environmental modifications with protective habits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>For outdoor allergens:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Monitor local pollen counts and limit outdoor activities on high-pollen days</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Wear wraparound sunglasses when outside to create a barrier against airborne allergens</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Keep windows closed during peak pollen hours (typically early morning and evening)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Shower and change clothes after spending extended time outdoors to remove pollen from your body and hair</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>For indoor allergens:</strong>
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Use HEPA air filters in your home, particularly in bedrooms</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Wash bedding weekly in hot water to eliminate dust mites</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduce indoor humidity to discourage mold growth (aim for 30-50% humidity)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Keep pets out of bedrooms if you're sensitive to pet dander</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Avoid rubbing your eyes, which releases more histamine and worsens symptoms</span>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment Options: From Over-the-Counter to Prescription Solutions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When prevention alone isn't enough, numerous treatment options can provide relief from eye allergy symptoms. The best approach often combines multiple strategies tailored to your specific situation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Over-the-counter options:</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Artificial tears and lubricating eye drops can help dilute allergens and wash them away from the eye surface. These preservative-free formulations can be used multiple times daily and are particularly helpful for mild symptoms or as an adjunct to other treatments.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Antihistamine eye drops work by blocking histamine receptors, directly targeting the allergic response in the eyes. These provide rapid relief, often within minutes, and are available in both over-the-counter and prescription strengths. Many newer formulations combine antihistamines with mast cell stabilizers for both immediate and preventive benefits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Decongestant eye drops can quickly reduce redness, but should only be used short-term (no more than a few days) as prolonged use can cause rebound redness and worsen symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Prescription treatments:</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For moderate to severe symptoms, prescription-strength antihistamine drops offer more potent relief. Mast cell stabilizer eye drops prevent the release of histamine and other inflammatory chemicals, making them excellent for long-term management, though they work best when started before allergy season begins.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Corticosteroid eye drops are reserved for severe cases that don't respond to other treatments. While highly effective at reducing inflammation, they require careful monitoring by an eye care professional due to potential side effects with long-term use, including increased eye pressure and cataract formation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Oral antihistamines can help control both eye and systemic allergy symptoms. Non-sedating formulations are preferred for daytime use, though some people find these medications can worsen dry eye symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            For severe, persistent allergies that significantly impact quality of life, immunotherapy (allergy shots or sublingual tablets) may be recommended. This long-term approach gradually desensitizes your immune system to specific allergens, potentially providing lasting relief even after treatment concludes.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Special Considerations for Contact Lens Wearers
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Contact lens wearers face unique challenges during allergy season. Allergens can accumulate on lens surfaces, prolonging exposure and intensifying symptoms. Protein deposits from tears can also build up more rapidly during allergic reactions, creating discomfort and potentially affecting vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During severe allergy flare-ups, switching temporarily to glasses allows your eyes to heal and reduces irritation. If continuing with contacts, daily disposable lenses are ideal since they're discarded each day along with any accumulated allergens. More frequent lens replacement, meticulous lens hygiene, and using preservative-free rewetting drops throughout the day can also help.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Never use medicated eye drops while wearing contact lenses unless specifically designed for that purpose. Most allergy drops should be applied 10-15 minutes before inserting lenses or after removing them for the day. Consult with your eye care provider about contact-lens-compatible treatment options.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While many eye allergies can be managed with over-the-counter treatments and lifestyle modifications, certain situations warrant professional evaluation:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms that persist despite over-the-counter treatment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Significant pain or changes in vision</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Discharge that is thick, colored, or accompanied by crusting—which may indicate infection rather than allergies</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms affecting only one eye</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Extreme light sensitivity or inability to open your eyes</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms that significantly interfere with daily activities, work, or sleep</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            A comprehensive eye examination can rule out other conditions that may mimic allergies, such as dry eye syndrome, bacterial or viral conjunctivitis, blepharitis, or more serious inflammatory conditions. Your eye care provider can also identify the specific allergens triggering your symptoms and develop a targeted treatment plan that addresses your unique needs.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking Control of Your Eye Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Eye allergies don't have to dictate your life or force you to avoid activities you love. With proper identification of triggers, strategic prevention, and appropriate treatment, most people can achieve excellent symptom control and maintain comfortable, healthy eyes throughout the year.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The key is taking a proactive rather than reactive approach—starting preventive measures before allergy season begins, maintaining consistent treatment during peak times, and working with eye care professionals when symptoms persist or worsen. Remember that what works for one person may not work for another, and finding the right combination of strategies often requires some trial and adjustment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base">
            If you're struggling with eye allergy symptoms that aren't adequately controlled with over-the-counter options, or if you're uncertain whether your symptoms are truly allergy-related, professional evaluation can provide answers and relief. Our team at Spark Eye Care specializes in diagnosing and treating all types of allergic eye conditions, offering personalized solutions that fit your lifestyle and bring lasting comfort to your eyes.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Dry Eye Syndrome: Causes and Solutions
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about chronic dry eye conditions and effective treatment approaches.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Protecting Your Eyes from UV Damage
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Essential information about sun exposure and long-term eye health.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Contact Lens Care: Best Practices for Healthy Eyes
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Expert guidance on proper lens hygiene and avoiding complications.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}