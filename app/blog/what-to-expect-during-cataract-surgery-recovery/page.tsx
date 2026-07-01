import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect During Cataract Surgery Recovery | Spark Eye Care',
  description: 'A comprehensive guide to cataract surgery recovery, including timeline, do\'s and don\'ts, potential complications, and tips for optimal healing.',
  keywords: 'cataract surgery recovery, post-cataract care, eye surgery healing, cataract surgery timeline, vision recovery',
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
            <span className="text-white/60">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What to Expect During Cataract Surgery Recovery
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            If you've recently undergone cataract surgery or are scheduled for the procedure, you're likely wondering what the recovery process will look like. The good news? Cataract surgery is one of the most common and successful procedures performed today, with millions of people experiencing restored vision each year. Understanding what to expect during recovery can help ease anxiety, prepare you for the healing process, and ensure the best possible outcome for your vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While the surgery itself typically takes less than 30 minutes, the recovery period is just as important as the procedure. Knowing what's normal, what to avoid, and when to seek help can make all the difference in your healing journey. Let's walk through everything you need to know about cataract surgery recovery.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The First 24 Hours: Immediate Post-Surgery Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Immediately after cataract surgery, your eye will be covered with a protective shield, and you'll spend a short time in the recovery area while the anesthesia wears off. Your vision may be blurry or hazy at first—this is completely normal. You'll need someone to drive you home, as your vision won't be clear enough for safe driving.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During the first day, you may experience mild discomfort, grittiness, or a foreign body sensation in your eye. Some patients describe it as feeling like there's an eyelash stuck in the eye. Light sensitivity and mild tearing are also common. These symptoms typically improve significantly within the first 24 to 48 hours.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your surgeon will prescribe eye drops—typically an antibiotic to prevent infection and an anti-inflammatory to reduce swelling. Following the eye drop schedule precisely is crucial for optimal healing. Most patients are instructed to wear the protective eye shield while sleeping for at least the first week to prevent accidental rubbing or pressure on the eye.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The First Week: What's Normal and What to Avoid
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most patients notice significant vision improvement within the first few days, though complete stabilization can take several weeks. Your vision may fluctuate during this time—clear one moment and slightly blurry the next. This is a normal part of the healing process as your eye adjusts to the new intraocular lens.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Colors may appear brighter and more vivid than before surgery. Many patients are surprised by this change—cataracts can cause a gradual yellowing of vision that you may not have noticed until it's corrected. This enhanced color perception is one of the most delightful aspects of cataract surgery recovery.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "Most patients are amazed at how quickly their vision improves after cataract surgery. While complete healing takes time, many notice clearer, brighter vision within just a few days."
            </p>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During the first week, it's important to avoid activities that could compromise healing:
          </p>

          <div className="my-8 space-y-3">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Avoid rubbing or pressing on your eye, even if it feels itchy or irritated</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Don't get water directly in your eye—no swimming, hot tubs, or face-first showers</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Avoid heavy lifting, bending over at the waist, or strenuous exercise</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Skip dusty or dirty environments that could introduce irritants or infection</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Avoid eye makeup and refrain from using face lotions or creams near the eye</p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Weeks 2-4: Gradual Return to Normal Activities
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            By the second week, most patients can resume many normal activities, including light exercise, reading, watching television, and using computers or phones. However, you should continue using prescribed eye drops as directed and wearing protective eyewear when sleeping or in situations where your eye could be bumped or exposed to debris.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your vision will continue to improve and stabilize during this period. Some patients experience minor fluctuations in clarity, especially in different lighting conditions. This is normal as your brain adapts to the new lens and your eye completes its healing process.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You'll typically have follow-up appointments at one day, one week, and one month post-surgery. These visits allow your surgeon to monitor healing, check for complications, and adjust your treatment plan if needed. Attend all scheduled appointments, even if you feel your vision is perfect—early detection of any issues is key to successful outcomes.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Your Vision Changes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many patients wonder why their vision isn't instantly perfect after surgery. The truth is that while the cataract is removed and the artificial lens is in place immediately, your eye needs time to heal and your brain needs time to adjust to the new visual input.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Some patients experience "posterior capsule opacification" months or even years after surgery. This occurs when the membrane behind the artificial lens becomes cloudy, causing vision to become hazy again. Fortunately, this is easily treated with a quick, painless laser procedure called a YAG capsulotomy that restores clear vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's also important to understand that cataract surgery corrects the cloudiness caused by the cataract, but it doesn't necessarily eliminate the need for glasses. Depending on the type of intraocular lens you received and your individual vision needs, you may still need glasses for reading, distance, or specific activities. Your surgeon will discuss new prescription needs once your vision has fully stabilized, typically around 4-6 weeks post-surgery.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Contact Your Doctor: Warning Signs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While complications from cataract surgery are rare, it's crucial to know when to seek immediate medical attention. Contact your eye surgeon right away if you experience:
          </p>

          <div className="my-8 space-y-3">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Sudden vision loss or significantly worsening vision</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Severe eye pain that isn't relieved by over-the-counter pain medication</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Increasing redness, swelling, or discharge from the eye</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Flashes of light or new floaters (spots in your vision)</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">A curtain or shadow appearing in your peripheral vision</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These symptoms could indicate rare but serious complications such as infection, inflammation, retinal detachment, or increased eye pressure. Early intervention is essential for the best outcomes, so never hesitate to contact your eye care team with concerns.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Tips for a Smooth Recovery
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Following these evidence-based recovery tips can help ensure optimal healing and the best possible visual outcome:
          </p>

          <div className="my-8 space-y-3">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Use your eye drops exactly as prescribed.</strong> Set phone reminders if needed—consistency is crucial for preventing infection and reducing inflammation.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Wear sunglasses outdoors.</strong> Your eyes may be more sensitive to light during recovery, and UV protection supports healing.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Sleep on your back or the non-operative side.</strong> This prevents accidental pressure on the healing eye.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Take it easy the first few days.</strong> While you don't need bed rest, avoid strenuous activities and give your body time to heal.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Stay hydrated and eat nutritious foods.</strong> Good nutrition supports healing—focus on foods rich in vitamins A, C, and E.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Attend all follow-up appointments.</strong> These visits are essential for monitoring your recovery and addressing any concerns early.</p>
            </div>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Cataract surgery recovery is generally straightforward and well-tolerated, with most patients experiencing significant vision improvement within days. By following your surgeon's instructions, using your prescribed medications, and being aware of warning signs, you can expect a smooth recovery and enjoy the gift of clearer, brighter vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember, every patient's recovery is unique. Some people heal faster than others, and that's perfectly normal. If you have questions or concerns at any point during your recovery, don't hesitate to reach out to your eye care team. We're here to support you every step of the way on your journey to better vision.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and compassionate care.</p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Understanding Cataracts: Causes, Symptoms, and Treatment Options</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about the development of cataracts, risk factors, and when to consider surgery for optimal vision health.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Surgical Guide</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Preparing for Cataract Surgery: A Complete Checklist</h4>
                <p className="text-[var(--color-muted)] text-sm">Everything you need to know before your cataract surgery, from pre-operative tests to day-of-surgery preparations.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Choosing the Right Intraocular Lens for Your Lifestyle</h4>
                <p className="text-[var(--color-muted)] text-sm">Explore different IOL options and discover which lens type best matches your visual needs and daily activities.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}