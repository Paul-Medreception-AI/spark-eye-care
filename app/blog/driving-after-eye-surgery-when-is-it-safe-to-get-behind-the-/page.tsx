import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driving After Eye Surgery: When Is It Safe to Get Behind the Wheel? | Spark Eye Care',
  description: 'Learn when it\'s safe to drive after cataract surgery, LASIK, and other eye procedures. Expert guidance on recovery timelines and safety considerations from Spark Eye Care.',
  openGraph: {
    title: 'Driving After Eye Surgery: When Is It Safe to Get Behind the Wheel?',
    description: 'Expert guidance on when you can safely resume driving after eye surgery.',
    url: 'https://www.sparkeyetx.com/blog/driving-after-eye-surgery-when-is-it-safe-to-get-behind-the-wheel',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Driving After Eye Surgery: When Is It Safe to Get Behind the Wheel?
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published March 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6">
              You've just undergone eye surgery, and while you're excited about improved vision, there's one question weighing on your mind: when can I drive again? Whether you've had cataract surgery, LASIK, glaucoma treatment, or a retinal procedure, the inability to drive can feel like a sudden loss of independence. You need to get to work, pick up groceries, take kids to school—everyday life depends on your ability to safely operate a vehicle.
            </p>
            <p className="mb-6">
              The answer isn't always straightforward. Driving requires sharp vision, depth perception, quick reflexes, and the ability to process visual information rapidly. After eye surgery, your eyes need time to heal, and your brain needs time to adjust to changes in vision. Driving too soon can put you and others at risk. Understanding when it's safe to resume driving is crucial for both your recovery and road safety.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Why You Shouldn't Rush Back Behind the Wheel
            </h2>
            <p className="mb-6">
              After eye surgery, your visual system undergoes significant changes. Your eyes may be sensitive to light, your vision might be blurry or fluctuating, and you may experience reduced depth perception. These temporary conditions can seriously impair your ability to judge distances, read road signs, or react quickly to unexpected situations.
            </p>
            <p className="mb-6">
              Additionally, many eye surgeries require post-operative medications—eye drops that can cause temporary blurriness or dilated pupils that increase light sensitivity. Some procedures involve sedation or anesthesia, which can affect your coordination and reaction time for hours after surgery. Driving while still under the influence of these medications is not only unsafe but also illegal in most jurisdictions.
            </p>
            <p className="mb-6">
              Beyond safety concerns, there are legal considerations. If you're involved in an accident and it's determined that you were driving against medical advice during your recovery period, you could face liability issues and insurance complications. Most surgeons provide specific written instructions about when you can resume driving—following these guidelines protects both your health and your legal standing.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "The question isn't just about when your eyes have healed—it's about when your vision is stable enough to make split-second decisions that could save lives."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Recovery Timelines by Surgery Type
            </h2>
            <p className="mb-6">
              Different eye surgeries have different recovery timelines. Here's what you can generally expect, though your surgeon will provide personalized guidance based on your specific case:
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Cataract Surgery</h3>
              <p className="mb-4">
                Most patients can resume driving within 24 to 48 hours after cataract surgery, provided their vision meets legal driving requirements and they feel comfortable behind the wheel. Your surgeon will perform a follow-up exam the day after surgery to assess your vision and determine if it's safe for you to drive. Some patients experience immediate improvement, while others need a few days for their vision to stabilize as the eye adjusts to the new lens.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">LASIK and PRK</h3>
              <p className="mb-4">
                LASIK patients typically can drive within one to three days, once their vision has stabilized and they're cleared by their surgeon at their post-operative appointment. PRK has a longer recovery period—you may need to wait one to two weeks before driving, as the healing process is gradual and vision can fluctuate significantly during the first week. Both procedures can cause light sensitivity and halos around lights initially, which can make night driving particularly challenging.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Retinal Surgery</h3>
              <p className="mb-4">
                Retinal procedures, including surgery for retinal detachment or macular holes, often require a longer recovery period—anywhere from one week to several months, depending on the complexity of the surgery. Some retinal surgeries require patients to maintain specific head positions during recovery, which can affect balance and spatial awareness. You'll need explicit clearance from your retinal specialist before resuming driving.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Glaucoma Surgery</h3>
              <p className="mb-4">
                Recovery after glaucoma surgery varies widely depending on the type of procedure performed. Traditional trabeculectomy may require one to two weeks before driving, while minimally invasive glaucoma surgeries (MIGS) may allow you to drive within a few days. Your ophthalmologist will monitor your eye pressure and overall healing before clearing you to drive.
              </p>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              How to Know When You're Ready
            </h2>
            <p className="mb-6">
              Beyond your surgeon's clearance, there are practical ways to assess your readiness to drive safely:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Vision clarity:</strong> Can you read a license plate from 20 feet away? Can you clearly see traffic signals and road signs?
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Peripheral vision:</strong> Can you see objects and movement to your sides without turning your head excessively?
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Depth perception:</strong> Can you accurately judge the distance between your car and other vehicles or objects?
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Reaction time:</strong> Do you feel alert and capable of making quick decisions?
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Comfort level:</strong> Do you feel confident and comfortable, or are you experiencing anxiety about your vision?
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Medication effects:</strong> Are you still using eye drops that cause blurriness or light sensitivity?
                </p>
              </div>
            </div>

            <p className="mb-6">
              Consider having a friend or family member take you for a test drive in a safe, low-traffic area before you venture onto busy roads. This can help you assess your visual capabilities in a real-world driving scenario without the pressure of high-stakes traffic situations.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Planning Your Transportation During Recovery
            </h2>
            <p className="mb-6">
              One of the most important steps in preparing for eye surgery is arranging alternative transportation during your recovery period. Here are practical strategies:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Coordinate with family or friends to drive you to and from your surgery and follow-up appointments
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Research rideshare services or medical transportation options in your area
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Stock up on groceries and essentials before your surgery to minimize trips during recovery
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Arrange for work-from-home accommodations or time off if your job requires driving
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Consider scheduling your surgery at a time when you have help available, such as when family visits or during vacation time
                </p>
              </div>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              What Your Surgeon Will Evaluate
            </h2>
            <p className="mb-6">
              Before clearing you to drive, your eye surgeon will conduct specific assessments during your follow-up visits:
            </p>
            <p className="mb-6">
              <strong>Visual acuity testing:</strong> You'll need to meet your state's minimum vision requirements for driving, typically 20/40 vision or better in at least one eye. Your surgeon will test your vision with standard eye charts to ensure you meet this threshold.
            </p>
            <p className="mb-6">
              <strong>Visual field testing:</strong> Adequate peripheral vision is essential for safe driving. Your surgeon will assess whether your side vision is sufficient to detect vehicles, pedestrians, and obstacles in your peripheral view.
            </p>
            <p className="mb-6">
              <strong>Healing progress:</strong> Your surgeon will examine your eye to ensure proper healing, absence of complications, and stability of any surgical corrections. Inflammation, swelling, or other issues may delay driving clearance.
            </p>
            <p className="mb-6">
              <strong>Binocular vision:</strong> If you've had surgery on only one eye, your surgeon will assess how well your eyes work together. Some patients experience temporary double vision or difficulty with depth perception that needs to resolve before driving.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Taking the First Drive: Safety Tips
            </h2>
            <p className="mb-6">
              When you've been cleared to drive and feel ready to get behind the wheel, start cautiously:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Begin with short trips during daylight hours in familiar areas with light traffic
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Avoid driving at night until you're confident in your vision, especially if you're experiencing glare or halos around lights
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Wear sunglasses to reduce light sensitivity and glare, which is common after eye surgery
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Have a companion with you for your first few drives in case you need assistance
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Pull over if you experience any vision changes, discomfort, or uncertainty while driving
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  Continue using prescribed eye drops as directed—don't skip doses because you're driving
                </p>
              </div>
            </div>

            <p className="mb-6">
              Remember, there's no shame in waiting an extra day or two if you don't feel ready. Your safety and the safety of others on the road should always be the priority.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Contact Your Eye Surgeon
            </h2>
            <p className="mb-6">
              Even after you've been cleared to drive, contact your surgeon immediately if you experience:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-2 text-[var(--color-ink)]">
              <li>Sudden vision changes or vision loss</li>
              <li>Increased pain, redness, or discharge from the eye</li>
              <li>Flashes of light or new floaters</li>
              <li>Persistent double vision</li>
              <li>Difficulty focusing or maintaining visual clarity</li>
              <li>Any concerns about your ability to see clearly while driving</li>
            </ul>

            <p className="mb-6">
              These symptoms could indicate complications that require immediate attention and may affect your ability to drive safely.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Your independence is important, but so is your safety. Patience during recovery ensures you'll be driving confidently for years to come."
            </div>

            <p className="mb-6">
              Driving after eye surgery is a milestone in your recovery, but it's one that shouldn't be rushed. By following your surgeon's guidance, honestly assessing your visual capabilities, and taking a cautious approach to getting back on the road, you'll protect both your healing eyes and your safety.
            </p>

            <p className="mb-6">
              If you're planning eye surgery or have questions about when you'll be able to drive again, talk with your ophthalmologist. They can provide personalized guidance based on your specific procedure, overall health, and individual healing progress. At Spark Eye Care, our team is committed to supporting you through every stage of your recovery—including helping you get back to the activities that matter most to you.
            </p>
          </div>
        </div>
      </article>

      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in comprehensive eye care and patient education. Our team is dedicated to helping you understand your eye health and make informed decisions about your care.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                What to Expect During Cataract Surgery Recovery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Learn about the recovery process, timeline, and tips for optimal healing after cataract surgery.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Your Eye Surgery: Questions to Ask Your Doctor
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Prepare for your procedure with this comprehensive guide to important questions about eye surgery.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                How to Prepare for Your Eye Surgery Appointment
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Essential steps to take before your procedure to ensure a smooth surgery day and optimal outcomes.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you navigate your eye care journey with confidence.
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