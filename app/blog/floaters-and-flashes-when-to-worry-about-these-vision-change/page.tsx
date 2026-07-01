import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Floaters and Flashes: When to Worry About These Vision Changes | Spark Eye Care',
  description: 'Learn when eye floaters and flashes are harmless and when they signal a serious problem requiring urgent care. Expert guidance from Spark Eye Care.',
  keywords: 'eye floaters, flashes of light, vision changes, retinal detachment, vitreous detachment, eye health, when to see eye doctor',
  openGraph: {
    title: 'Floaters and Flashes: When to Worry About These Vision Changes',
    description: 'Learn when eye floaters and flashes are harmless and when they signal a serious problem requiring urgent care.',
    url: 'https://www.sparkeyetx.com/blog/floaters-and-flashes-when-to-worry-about-these-vision-change',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/60">Article</span>
          </nav>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Floaters and Flashes: When to Worry About These Vision Changes
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p className="text-xl leading-relaxed font-light">
              You're reading a book when suddenly, tiny specks drift across your vision like dust motes in sunlight. Or perhaps you've noticed brief flashes of light in your peripheral vision, like someone briefly turned on a camera flash. These experiences—floaters and flashes—are surprisingly common, yet they can trigger immediate concern. Are they harmless quirks of aging eyes, or warning signs of something more serious? Understanding the difference could protect your sight.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Are Eye Floaters and Flashes?
            </h2>

            <p>
              Eye floaters are small spots, threads, or cobweb-like shapes that drift through your field of vision. They're most noticeable when looking at plain, bright backgrounds like a clear sky or white wall. Despite appearing to be in front of your eye, floaters actually exist inside it, casting shadows on your retina.
            </p>

            <p>
              Floaters are caused by tiny clumps of cells or gel-like material within the vitreous—the clear, jelly-like substance that fills the inside of your eye. As we age, the vitreous slowly shrinks and becomes more liquid, allowing these microscopic fibers to clump together and cast shadows.
            </p>

            <p>
              Flashes, on the other hand, appear as brief streaks or arcs of light, typically in your peripheral vision. They occur when something stimulates the retina, the light-sensitive tissue at the back of your eye. This stimulation can be mechanical (like tugging from a shrinking vitreous) or can result from actual retinal damage.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Do Floaters and Flashes Happen?
            </h2>

            <p>
              The most common cause is a natural process called posterior vitreous detachment (PVD). As we age—typically after age 50—the vitreous gel begins to liquefy and pull away from the retina. This is usually harmless and happens to most people eventually. When the vitreous separates, it can cause both floaters (from the cellular debris) and flashes (from the tugging sensation on the retina).
            </p>

            <p>
              Other factors can increase your likelihood of experiencing these symptoms:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nearsightedness (myopia)</strong> — elongated eye shape increases risk of vitreous changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Eye surgery or injury</strong> — trauma can accelerate vitreous changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diabetic eye disease</strong> — bleeding in the eye can cause sudden floaters</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Inflammation inside the eye</strong> — can release inflammatory debris</span>
              </li>
            </ul>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-serif">
                "While most floaters and flashes are benign, they can sometimes signal a sight-threatening emergency. Knowing the warning signs can mean the difference between preserving your vision and permanent loss."
              </p>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When Floaters and Flashes Become Serious
            </h2>

            <p>
              The critical distinction is between gradual, age-related changes and sudden, dramatic symptoms. Certain patterns indicate potential emergencies that require immediate medical attention—ideally within 24 hours.
            </p>

            <p>
              <strong>Seek urgent eye care if you experience:</strong>
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Sudden shower of new floaters</strong> — especially dozens appearing at once</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Frequent flashes of light</strong> — particularly if they persist or increase</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Shadow or curtain across your vision</strong> — may indicate retinal detachment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Loss of peripheral vision</strong> — like looking through a tunnel</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Gray curtain or veil moving across your field of vision</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong>Sudden decrease in vision</strong></span>
              </li>
            </ul>

            <p>
              These symptoms can indicate serious conditions including retinal tear, retinal detachment, or bleeding inside the eye. Retinal detachment is a medical emergency—the retina is being pulled away from its blood supply, and without prompt treatment (often surgery within days), permanent vision loss can result.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Retinal Tears and Detachment
            </h2>

            <p>
              When the vitreous pulls away from the retina during posterior vitreous detachment, it sometimes tears the retina in the process. Think of it like pulling sticky tape off paper—sometimes it takes a piece with it. A retinal tear doesn't always cause immediate vision loss, but fluid can seep through the tear and lift the retina away from the eye wall, causing detachment.
            </p>

            <p>
              Retinal detachment affects approximately 1 in 10,000 people annually, with higher rates among those who are highly nearsighted, have had cataract surgery, or experienced eye trauma. The good news is that when caught early, retinal tears can often be treated with laser surgery or freezing treatment (cryopexy) before detachment occurs. Even retinal detachment can frequently be repaired if addressed promptly.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When Floaters Are Probably Harmless
            </h2>

            <p>
              Not every floater signals disaster. You can feel more reassured if your symptoms have these characteristics:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You've had the same few floaters for years without change</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>New floaters appeared gradually, one or two at a time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No accompanying flashes, vision loss, or shadow</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're over 50 and have been examined by an eye doctor</span>
              </li>
            </ul>

            <p>
              Even benign floaters can be annoying. Most people adapt over time as the brain learns to ignore them. The floaters may also settle toward the bottom of the eye or become less dense over months. While there are surgical procedures to remove floaters (vitrectomy), these carry risks and are typically reserved for severe cases where floaters significantly impair vision.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Expect During Your Eye Examination
            </h2>

            <p>
              If you develop concerning symptoms, your eye care provider will perform a dilated eye examination. After administering eye drops to widen your pupils, they'll use specialized instruments to examine your entire retina, looking for tears, detachment, bleeding, or other abnormalities.
            </p>

            <p>
              This examination is painless but requires about 2-4 hours for the dilation drops to wear off, during which your vision will be blurry and light-sensitive. Bring sunglasses and arrange transportation if needed. The examination is crucial—it's the only way to definitively determine if your floaters and flashes are benign or require treatment.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Action: Your Vision Matters
            </h2>

            <p>
              The bottom line is this: new or suddenly worsening floaters and flashes deserve prompt evaluation, even if they turn out to be harmless. Your vision is irreplaceable, and the conditions that cause alarming symptoms are often treatable when caught early.
            </p>

            <p>
              Don't wait or dismiss symptoms, hoping they'll resolve on their own. A simple examination can provide peace of mind or catch a problem while it's still treatable. When it comes to sudden vision changes, it's always better to err on the side of caution.
            </p>

            <p>
              If you're experiencing new floaters, frequent flashes, or any vision changes that concern you, contact an eye care provider immediately. Many practices accommodate urgent appointments for these symptoms, understanding the time-sensitive nature of retinal problems.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Age-Related Vision Changes</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn what vision changes are normal with aging and when to seek professional care.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Protecting Your Retinal Health</h4>
                <p className="text-[var(--color-muted)] text-sm">Essential steps to maintain healthy retinas and reduce your risk of vision-threatening conditions.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Guide</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">When to Schedule an Eye Exam</h4>
                <p className="text-[var(--color-muted)] text-sm">Guidelines for routine eye care and warning signs that require immediate attention.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </main>
  )
}