import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blepharitis: Causes, Symptoms, and Long-Term Management | Spark Eye Care',
  description: 'Learn about blepharitis causes, symptoms, and effective long-term management strategies. Expert insights from the Spark Eye Care team on managing this common eyelid condition.',
  keywords: 'blepharitis, eyelid inflammation, eye health, chronic eye conditions, eyelid hygiene, meibomian gland dysfunction',
}

export default function BlepharitisArticlePage() {
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Blepharitis: Causes, Symptoms, and Long-Term Management
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've ever experienced persistent irritation, redness, or crusting along your eyelid margins, you're not alone. Blepharitis affects millions of people worldwide, making it one of the most common yet frequently misunderstood eye conditions. While it rarely threatens vision, its chronic nature and uncomfortable symptoms can significantly impact daily life and quality of vision.
            </p>
            <p className="mb-6">
              Understanding blepharitis—what causes it, how to recognize it, and most importantly, how to manage it effectively—is the first step toward finding relief and maintaining healthy, comfortable eyes for the long term.
            </p>
          </div>

          {/* What Is Blepharitis */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Blepharitis?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blepharitis is a chronic inflammatory condition affecting the eyelids, particularly the area where the eyelashes grow. The term comes from the Greek words "blepharon" (eyelid) and "itis" (inflammation). This condition occurs when the tiny oil glands near the base of the eyelashes become clogged or irritated, leading to inflammation and discomfort.
            </p>
            <p className="mb-6">
              There are two primary types of blepharitis: anterior blepharitis, which affects the outside front of the eyelid where eyelashes attach, and posterior blepharitis, which affects the inner edge of the eyelid that contacts the eye. Many people experience a combination of both types, and the condition often occurs alongside other skin conditions such as rosacea, seborrheic dermatitis, or dry eye disease.
            </p>
            <p className="mb-6">
              While blepharitis can affect anyone at any age, it becomes more common as we get older. The condition is typically chronic, meaning it requires ongoing management rather than a one-time cure. However, with proper care and attention, most people can effectively control their symptoms and prevent flare-ups.
            </p>
          </div>

          {/* Common Causes */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Causes and Risk Factors
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blepharitis has multiple potential causes, and often several factors work together to trigger or worsen the condition. Understanding these causes can help you identify personal risk factors and develop an effective management strategy.
            </p>
            <p className="mb-6">
              Bacterial overgrowth is one of the most common culprits. Staphylococcus bacteria naturally live on the skin, but when they multiply excessively on the eyelid margins, they can cause inflammation and irritation. These bacteria produce waste products that are toxic to the delicate tissues of the eyelid.
            </p>
            <p className="mb-6">
              Meibomian gland dysfunction (MGD) is another major contributor. These tiny glands in the eyelids produce the oily layer of your tear film. When they become blocked or produce poor-quality oil, it can lead to posterior blepharitis and contribute to dry eye symptoms. Studies suggest that MGD is present in up to 70% of people with blepharitis.
            </p>
            <p className="mb-6">
              Other contributing factors include skin conditions like rosacea and seborrheic dermatitis, allergies to eye makeup or contact lens solutions, eyelash mites (Demodex), and environmental irritants. Hormonal changes, certain medications, and inadequate eyelid hygiene can also play a role in developing or worsening blepharitis.
            </p>
          </div>

          {/* Recognizing Symptoms */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blepharitis symptoms can vary in severity and may come and go, often worsening in the morning or during periods of stress or illness. Early recognition of symptoms allows for prompt treatment and can prevent the condition from worsening.
            </p>
            <p className="mb-6">
              Common symptoms include red, swollen eyelids that may appear greasy or crusty, especially upon waking. Many people experience a gritty or burning sensation in the eyes, as if something is stuck under the eyelid. Excessive tearing or paradoxically dry eyes are also frequent complaints, as the inflammation disrupts normal tear production and quality.
            </p>
            <p className="mb-6">
              You might notice flaking or dandruff-like scales at the base of your eyelashes, or your eyelids may feel itchy and irritated throughout the day. Some people experience sensitivity to light, blurred vision that improves with blinking, or frequent styes and chalazia (small lumps in the eyelid). In severe cases, eyelashes may grow abnormally, fall out, or the eyelid margins may appear to turn inward or outward.
            </p>
            <p className="mb-6">
              These symptoms often overlap with other eye conditions, which is why professional evaluation is essential for accurate diagnosis and appropriate treatment.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "With consistent daily care and appropriate treatment, most people with blepharitis can achieve significant symptom relief and maintain comfortable, healthy eyes."
          </blockquote>

          {/* Treatment Approaches */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Professional Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While blepharitis is a chronic condition, various treatment options can effectively manage symptoms and prevent complications. Your eye care provider will tailor treatment to your specific type and severity of blepharitis.
            </p>
            <p className="mb-6">
              In-office treatments may include professional eyelid cleaning to remove debris and bacteria, warm compress therapy to improve meibomian gland function, or specialized procedures like intense pulsed light (IPL) therapy for more severe cases. Some patients benefit from prescription antibiotic ointments or oral antibiotics to reduce bacterial load and inflammation.
            </p>
            <p className="mb-6">
              For cases involving meibomian gland dysfunction, thermal pulsation treatments can help restore normal gland function. Anti-inflammatory medications, including topical steroids or cyclosporine drops, may be prescribed for short-term use during flare-ups. If underlying conditions like rosacea or seborrheic dermatitis contribute to your blepharitis, treating these conditions is essential for long-term control.
            </p>
            <p className="mb-6">
              Your provider may also recommend preservative-free artificial tears to supplement tear production and provide comfort, or omega-3 fatty acid supplements, which research suggests can improve meibomian gland function and reduce inflammation.
            </p>
          </div>

          {/* Long-Term Management */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Long-Term Management Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The key to living comfortably with blepharitis lies in establishing and maintaining a consistent daily eyelid hygiene routine. While this requires commitment, most people find that their efforts are well rewarded with reduced symptoms and fewer flare-ups.
            </p>
            <p className="mb-6">
              A comprehensive daily routine should include:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[var(--color-ink)]">
                  <strong>Warm compresses:</strong> Apply a clean, warm washcloth to closed eyelids for 5-10 minutes, twice daily. This helps loosen crusts and improves oil gland function.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[var(--color-ink)]">
                  <strong>Gentle eyelid cleaning:</strong> Use a diluted baby shampoo solution or commercial eyelid cleansing pads to gently clean the base of your eyelashes, removing debris and excess oil.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[var(--color-ink)]">
                  <strong>Eyelid massage:</strong> After warming, gently massage along the eyelid margins to express oil from the glands and prevent blockages.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[var(--color-ink)]">
                  <strong>Makeup hygiene:</strong> Replace eye makeup every three months, remove all makeup before bed, and avoid applying eyeliner to the inner lid margin.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[var(--color-ink)]">
                  <strong>Environmental modifications:</strong> Use a humidifier in dry environments, take breaks from screens to reduce eye strain, and protect eyes from wind and irritants.
                </p>
              </div>
            </div>
            <p className="mb-6">
              Dietary considerations may also help. Some studies suggest that increasing omega-3 fatty acids (found in fatty fish, flaxseed, and walnuts) can reduce inflammation and improve oil gland function. Staying well-hydrated and limiting inflammatory foods may also provide benefits.
            </p>
            <p className="mb-6">
              Remember that blepharitis management is a marathon, not a sprint. Consistency is more important than perfection. Even during symptom-free periods, maintaining your hygiene routine helps prevent flare-ups and keeps the condition under control.
            </p>
          </div>

          {/* When to Seek Help */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While daily hygiene can manage mild blepharitis, certain situations warrant professional evaluation. Seek care if your symptoms worsen despite home treatment, if you experience vision changes, severe pain, or if you develop a lump on your eyelid that doesn't resolve within a week.
            </p>
            <p className="mb-6">
              Regular eye examinations are important for anyone with blepharitis, as chronic inflammation can lead to complications if left unmanaged. Your eye care provider can monitor your condition, adjust treatment as needed, and screen for associated conditions like dry eye disease or meibomian gland dysfunction.
            </p>
            <p className="mb-6">
              Early intervention can prevent complications such as chronic dry eye, recurrent styes or chalazia, corneal damage from chronic inflammation, or eyelash problems including misdirected growth or loss. With proper care and professional guidance, you can maintain healthy, comfortable eyes and excellent quality of life despite this chronic condition.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Living with blepharitis doesn't mean living with constant discomfort. By understanding the condition, establishing good eyelid hygiene habits, and working with your eye care team, you can effectively manage symptoms and enjoy clear, comfortable vision. If you're experiencing symptoms of blepharitis or have questions about your eye health, don't hesitate to reach out for professional guidance. Your comfort and visual health are worth the investment in proper care.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to providing evidence-based patient education and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Dry Eye Syndrome
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about the causes, symptoms, and treatment options for chronic dry eye disease.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Prevention
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Daily Eye Care Habits for Lifelong Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Simple daily practices that can protect your vision and maintain eye health.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Guide
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  When to Schedule Your Eye Exam
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Guidelines for routine eye care and when to seek immediate attention.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}