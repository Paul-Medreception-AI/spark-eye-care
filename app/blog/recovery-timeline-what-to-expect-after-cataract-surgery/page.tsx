import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recovery Timeline: What to Expect After Cataract Surgery | Spark Eye Care',
  description: 'A comprehensive guide to cataract surgery recovery, including day-by-day expectations, healing milestones, activity restrictions, and tips for optimal outcomes.',
  keywords: 'cataract surgery recovery, post-operative care, healing timeline, eye surgery aftercare, vision restoration',
  openGraph: {
    title: 'Recovery Timeline: What to Expect After Cataract Surgery',
    description: 'Expert guidance on what to expect during your cataract surgery recovery journey.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Recovery Timeline: What to Expect After Cataract Surgery
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6 text-lg">
              The decision to undergo cataract surgery is often life-changing, promising clearer vision and renewed independence. But as the surgery date approaches, many patients find themselves wondering: what will recovery actually look like? Understanding the healing timeline can ease anxiety, help you prepare properly, and set realistic expectations for your journey back to clear sight.
            </p>
            <p className="mb-6">
              Cataract surgery is one of the most common and successful procedures performed today, with millions of people experiencing restored vision each year. While individual experiences vary, the recovery process follows a predictable pattern. This comprehensive guide walks you through each phase of healing, from the first hours after surgery through complete recovery, so you know exactly what to expect along the way.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The First 24 Hours: Immediate Post-Operative Period
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The hours immediately following cataract surgery are critical for protecting your eye and beginning the healing process. Most patients are surprised by how quickly the procedure itself goes—typically 15 to 30 minutes—but the first day requires careful attention and rest.
            </p>
            <p className="mb-6">
              Right after surgery, your eye will be covered with a protective shield, and you may notice some mild discomfort, itchiness, or a gritty sensation. Your vision will likely be blurry or hazy, which is completely normal. Some patients experience watering, light sensitivity, or the feeling that something is in their eye. These sensations typically subside within the first few days.
            </p>
            <p className="mb-6">
              During this initial period, you'll need someone to drive you home and stay with you for at least the first few hours. Most surgeons recommend resting with your eyes closed for several hours after the procedure. You'll begin using prescribed eye drops—typically an antibiotic to prevent infection and an anti-inflammatory to reduce swelling—on a specific schedule that your surgical team will provide.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Days 2-7: Early Recovery and Rapid Improvement
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The first week after cataract surgery is when most patients notice the most dramatic improvements. Many people are amazed at how quickly their vision begins to clear, with colors appearing more vibrant and details becoming sharper day by day.
            </p>
            <p className="mb-6">
              You'll have a follow-up appointment within 24 to 48 hours of surgery, where your doctor will examine your eye, check your vision, and ensure healing is progressing normally. During this first week, you'll continue using your prescribed eye drops multiple times daily—adherence to this schedule is crucial for preventing infection and controlling inflammation.
            </p>
            <p className="mb-6">
              Most patients can return to light, non-strenuous activities within a day or two. Reading, watching television, and using computers are generally fine, though you may tire more easily. However, certain activities must be avoided during this crucial healing period.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Most patients are amazed at how quickly their vision begins to clear after cataract surgery, with many noticing significant improvements within just a few days of the procedure."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Activity Restrictions: What to Avoid During Recovery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Understanding which activities to avoid is just as important as knowing what you can do. These restrictions exist to protect your healing eye from pressure, trauma, and infection during the critical early weeks.
            </p>
            <p className="mb-6">
              For at least the first week, you should avoid:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Rubbing your eye</strong> – This is perhaps the most important restriction. Even if your eye feels itchy, resist the urge to rub it, as this can dislodge the healing lens or cause complications.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Getting water in your eye</strong> – Avoid swimming, hot tubs, and be careful when showering or washing your face. Water can introduce bacteria that may cause infection.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Heavy lifting or strenuous exercise</strong> – Activities that increase pressure in your eye should be postponed. This includes lifting anything over 10-15 pounds, vigorous exercise, and bending over at the waist.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Dusty or dirty environments</strong> – Protect your eye from potential irritants by avoiding yard work, gardening, and dusty areas during the initial healing phase.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Driving without clearance</strong> – Don't drive until your doctor confirms your vision meets legal requirements, typically at your first follow-up visit.</span>
              </li>
            </ul>
            <p className="mb-6">
              You'll need to wear a protective eye shield while sleeping for at least the first week, and sometimes longer, to prevent accidental rubbing or bumping during the night. Many surgeons also recommend wearing sunglasses during the day to protect against bright light and wind.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Weeks 2-4: Continued Healing and Vision Stabilization
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              By the second week, most patients notice substantial improvement and can resume many normal activities. Your vision continues to sharpen, though it may still fluctuate slightly from day to day as your eye adjusts to the new lens.
            </p>
            <p className="mb-6">
              You'll likely have another follow-up appointment around the two-week mark, where your doctor will assess your healing progress and may adjust your eye drop regimen. Some patients are able to discontinue certain drops at this point, while others continue for a few more weeks.
            </p>
            <p className="mb-6">
              During weeks two through four, you can gradually return to more activities, including light exercise like walking, gentle yoga, and swimming (with goggles and your doctor's approval). However, contact sports and activities with a risk of eye injury should still be avoided until you receive full clearance.
            </p>
            <p className="mb-6">
              This is also when many patients begin to truly appreciate the transformation in their vision. Colors may seem more vivid than they have in years, details appear crisper, and activities like reading, driving, and enjoying hobbies become easier and more enjoyable.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Weeks 4-8: Complete Healing and Final Vision Assessment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              For most patients, complete healing occurs within four to eight weeks after surgery. By this point, your vision has typically stabilized, and you can fully appreciate the results of your procedure.
            </p>
            <p className="mb-6">
              Your final post-operative appointment usually occurs around the six to eight week mark. This is when your eye care provider will perform a comprehensive exam to measure your final vision and determine if you need updated eyeglasses or contact lenses. Even after successful cataract surgery, many patients still benefit from glasses for certain activities like reading or computer work.
            </p>
            <p className="mb-6">
              If you had cataract surgery on both eyes at different times, you'll notice that your vision continues to improve as your brain adapts to having clear vision in both eyes. This binocular vision provides better depth perception and overall visual quality than having just one eye treated.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Warning Signs: When to Contact Your Doctor
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While complications from cataract surgery are rare, it's important to know which symptoms require immediate medical attention. Contact your eye care provider right away if you experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Sudden vision loss or significantly decreased vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Increasing pain that doesn't respond to over-the-counter pain medication</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Increased redness, discharge, or swelling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>New flashes of light or an increase in floaters</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>A curtain or shadow moving across your vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Persistent nausea or vomiting</span>
              </li>
            </ul>
            <p className="mb-6">
              These symptoms could indicate complications such as infection, inflammation, increased eye pressure, or retinal detachment, all of which require prompt treatment. Don't hesitate to call your doctor's office if you have any concerns—they would much rather address a false alarm than have you delay treatment for a serious issue.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
            <p className="mb-6">
              Recovery from cataract surgery is generally smooth and straightforward, with most patients experiencing excellent visual outcomes. By understanding what to expect during each phase of healing, following your doctor's instructions carefully, and staying vigilant for potential complications, you give yourself the best chance for a successful recovery and the clear vision you deserve.
            </p>
            <p className="mb-6">
              Remember that everyone heals at their own pace, and your experience may differ slightly from others. The relationship with your eye care team doesn't end when you leave the operating room—maintaining open communication and attending all follow-up appointments ensures that any issues are caught early and your recovery stays on track.
            </p>
            <p className="text-lg font-medium">
              If you're considering cataract surgery or have questions about the recovery process, our experienced team at Spark Eye Care is here to guide you every step of the way. Contact us today to schedule a consultation and learn more about how we can help restore your vision and your quality of life.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Other Medical
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our clinical team is dedicated to providing evidence-based patient education and compassionate care. We combine years of experience with the latest research to help you make informed decisions about your eye health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Cataracts: Causes, Symptoms, and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about how cataracts develop, warning signs to watch for, and modern treatment approaches.
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Pre-Operative Guide
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preparing for Cataract Surgery: Your Complete Checklist
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Everything you need to know to prepare for a successful surgery day and smooth recovery.
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Long-Term Care
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Life After Cataract Surgery: Maintaining Your Eye Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical tips for protecting your vision and maintaining optimal eye health for years to come.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}