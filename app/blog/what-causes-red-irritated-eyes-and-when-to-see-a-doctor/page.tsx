import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Causes Red, Irritated Eyes and When to See a Doctor | Spark Eye Care',
  description: 'Learn about common causes of red, irritated eyes, from allergies to infections. Discover when to seek professional care and how to find relief.',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            What Causes Red, Irritated Eyes and When to See a Doctor
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You wake up in the morning, glance in the mirror, and notice your eyes are bright red and uncomfortable. Maybe they're itchy, burning, or watering excessively. Red, irritated eyes are one of the most common reasons people seek eye care, and while they're often caused by minor issues, they can sometimes signal something more serious that requires prompt medical attention.
            </p>
            <p className="mb-6">
              Understanding what's behind your eye irritation—and knowing when to be concerned—can help you protect your vision and find relief faster. Let's explore the most common causes of red eyes, what symptoms to watch for, and when it's time to see a doctor.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Causes of Red, Irritated Eyes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Red eyes occur when the tiny blood vessels on the surface of your eye become dilated or inflamed. This can happen for many reasons, ranging from environmental factors to underlying health conditions.
            </p>
            <p className="mb-4 font-semibold">Allergies</p>
            <p className="mb-6">
              Seasonal or environmental allergies are among the most frequent culprits behind red, itchy eyes. Pollen, pet dander, dust mites, and mold can trigger an immune response that causes eye redness, itching, tearing, and swelling. Allergic conjunctivitis is usually accompanied by sneezing, runny nose, or other allergy symptoms.
            </p>
            <p className="mb-4 font-semibold">Dry Eye Syndrome</p>
            <p className="mb-6">
              When your eyes don't produce enough tears—or the tears evaporate too quickly—your eyes can become dry, red, and irritated. Dry eye is increasingly common due to prolonged screen time, aging, certain medications, and environmental factors like air conditioning or wind. Paradoxically, dry eyes can also cause excessive watering as your eyes try to compensate.
            </p>
            <p className="mb-4 font-semibold">Eye Infections</p>
            <p className="mb-6">
              Conjunctivitis, commonly known as pink eye, is an infection or inflammation of the conjunctiva—the clear membrane covering the white part of your eye. Viral conjunctivitis is highly contagious and often accompanies a cold. Bacterial conjunctivitis produces thick, yellow or green discharge. Both types cause redness, itching, and a gritty feeling.
            </p>
            <p className="mb-4 font-semibold">Eye Strain and Fatigue</p>
            <p className="mb-6">
              Extended periods of reading, computer work, or driving can lead to eye strain, causing redness, dryness, and discomfort. Digital eye strain, or computer vision syndrome, affects the majority of people who spend hours in front of screens daily.
            </p>
            <p className="mb-4 font-semibold">Environmental Irritants</p>
            <p className="mb-6">
              Smoke, chlorine from swimming pools, air pollution, and chemical fumes can all irritate the eyes and cause temporary redness. Even everyday products like makeup, lotions, or hair spray can trigger reactions if they come into contact with your eyes.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "While most cases of red eyes are benign and resolve on their own, certain symptoms warrant immediate medical attention to prevent vision loss or complications."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            More Serious Causes to Be Aware Of
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While many causes of red eyes are minor, some conditions require prompt medical evaluation:
            </p>
            <p className="mb-4 font-semibold">Corneal Ulcers</p>
            <p className="mb-6">
              An open sore on the cornea, often caused by infection or injury, can lead to severe redness, pain, discharge, and blurred vision. Corneal ulcers require immediate treatment to prevent permanent vision damage.
            </p>
            <p className="mb-4 font-semibold">Uveitis</p>
            <p className="mb-6">
              Inflammation of the uvea, the middle layer of the eye, can cause deep eye pain, redness, light sensitivity, and blurred vision. Uveitis can be associated with autoimmune diseases and requires specialized treatment.
            </p>
            <p className="mb-4 font-semibold">Acute Glaucoma</p>
            <p className="mb-6">
              Angle-closure glaucoma is a medical emergency that causes sudden, severe eye pain, redness, blurred vision, halos around lights, nausea, and vomiting. This condition requires immediate treatment to prevent permanent vision loss.
            </p>
            <p className="mb-4 font-semibold">Subconjunctival Hemorrhage</p>
            <p className="mb-6">
              A bright red patch on the white of your eye occurs when a small blood vessel breaks, usually from coughing, sneezing, or straining. While it looks alarming, it's typically harmless and resolves within a week or two without treatment.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to See a Doctor: Red Flags to Watch For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most cases of red, irritated eyes improve with home care within a few days. However, you should seek medical attention if you experience any of these warning signs:
            </p>
            <div className="space-y-3 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Severe eye pain or throbbing discomfort</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudden vision changes, blurriness, or vision loss</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sensitivity to light that's getting worse</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thick yellow or green discharge</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eye redness following an injury or trauma</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms that don't improve after 2-3 days</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You wear contact lenses and experience eye redness</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Redness accompanied by nausea or headache</span>
              </div>
            </div>
            <p className="mb-6">
              If you have a compromised immune system, diabetes, or any condition that affects healing, it's especially important to seek prompt evaluation for any eye symptoms.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Home Remedies and Prevention Tips
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For mild cases of eye redness without concerning symptoms, these self-care measures can provide relief:
            </p>
            <div className="space-y-3 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Apply a cool, damp washcloth to your closed eyes for 5-10 minutes several times a day</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use preservative-free artificial tears to lubricate dry eyes</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoid rubbing your eyes, which can worsen irritation and spread infection</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Remove contact lenses until symptoms resolve completely</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep your hands clean and avoid touching your face</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use a humidifier to add moisture to dry indoor air</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoid known allergens when possible and use antihistamine eye drops for allergies</span>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect During Your Eye Exam
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you do need to see an eye care professional, they'll conduct a thorough examination to identify the cause of your symptoms. This typically includes:
            </p>
            <p className="mb-6">
              A detailed medical history and discussion of your symptoms, including when they started, what makes them better or worse, and any recent illness or exposures. Your doctor will examine your eyes using specialized equipment to check for signs of infection, inflammation, or injury. They may test your vision, measure your eye pressure, and examine the surface of your eye and eyelids.
            </p>
            <p className="mb-6">
              Depending on their findings, treatment might include prescription eye drops (antibiotic, anti-inflammatory, or lubricating), oral medications, recommendations for warm or cool compresses, or referral to a specialist for more complex conditions.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Red, irritated eyes are uncomfortable and concerning, but understanding the potential causes can help you respond appropriately. While many cases resolve with simple home care, don't hesitate to seek professional evaluation when symptoms are severe, persistent, or accompanied by vision changes or pain.
            </p>
            <p className="mb-6">
              Your vision is precious, and prompt attention to eye problems can prevent complications and preserve your sight for years to come. If you're experiencing persistent eye redness or any concerning symptoms, the team at Spark Eye Care is here to provide expert diagnosis and compassionate care.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Dry Eye Syndrome: Symptoms and Treatment
                </h4>
                <p className="text-sm text-[var(--color-muted)]">Learn about the causes of dry eye and modern treatment options for lasting relief.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Often Should You Have an Eye Exam?
                </h4>
                <p className="text-sm text-[var(--color-muted)]">Discover recommended eye exam schedules for different ages and risk factors.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Allergies</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Managing Seasonal Eye Allergies: Tips and Treatments
                </h4>
                <p className="text-sm text-[var(--color-muted)]">Find relief from itchy, watery eyes with these proven allergy management strategies.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}