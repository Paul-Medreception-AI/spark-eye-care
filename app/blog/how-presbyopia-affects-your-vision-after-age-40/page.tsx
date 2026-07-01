import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Presbyopia Affects Your Vision After Age 40 | Spark Eye Care',
  description: 'Learn about presbyopia, the age-related vision change that affects reading and close-up tasks after 40. Discover symptoms, causes, and effective treatment options.',
  keywords: 'presbyopia, vision after 40, reading glasses, age-related vision, eye health, vision changes, Spark Eye Care',
}

export default function BlogPostPage() {
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant'}}>
            How Presbyopia Affects Your Vision After Age 40
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            You reach for your phone to read a text message and instinctively hold it at arm's length. The restaurant menu seems printed in impossibly small type. Threading a needle has become an exercise in frustration. If you're over 40 and experiencing these challenges, you're not alone—and you're not imagining things. You're likely experiencing presbyopia, a natural age-related change in vision that affects virtually everyone.
          </p>
          <p className="mb-6">
            Understanding presbyopia is the first step toward managing it effectively. This common condition doesn't mean your eyes are failing; rather, it's a predictable part of aging that can be easily addressed with the right approach. Let's explore what presbyopia is, why it happens, and most importantly, what you can do about it.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          What Is Presbyopia?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Presbyopia is the gradual loss of your eyes' ability to focus on nearby objects. The term comes from Greek words meaning "old eye," though it's more accurately described as a mature eye. Unlike farsightedness (hyperopia), which is present from birth due to the shape of your eye, presbyopia is a natural aging process that affects the lens inside your eye.
          </p>
          <p className="mb-6">
            Inside each of your eyes sits a flexible, transparent lens that changes shape to help you focus on objects at varying distances. When you're young, this lens is soft and elastic, easily adjusting its curvature through the action of tiny muscles called ciliary muscles. This focusing ability is called accommodation.
          </p>
          <p className="mb-6">
            As you age, the lens gradually becomes harder and less flexible. By your early to mid-40s, the lens has typically lost enough flexibility that focusing on close objects becomes noticeably difficult. This isn't a disease—it's a universal aspect of aging, much like graying hair or laugh lines.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          Common Signs and Symptoms
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Presbyopia typically develops gradually, and many people don't realize they have it until the symptoms become unmistakable. The hallmark sign is difficulty reading small print, especially in low light conditions. You might find yourself:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Holding reading material at arm's length to see it clearly</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Experiencing eye strain or headaches after reading or doing close work</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Needing brighter lighting for reading or detailed tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Blurred vision at normal reading distance (around 14-16 inches)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty switching focus between near and distant objects</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fatigue from sustained close-up work</span>
            </li>
          </ul>
          <p className="mb-6">
            These symptoms often worsen in low-light situations because your pupils dilate in dim conditions, which reduces depth of focus. Many people first notice presbyopia when trying to read a menu in a dimly lit restaurant or check their phone in the evening.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant'}}>
          "Presbyopia is not a sign that your eyes are failing—it's simply a natural part of aging that affects everyone, regardless of how healthy your eyes are."
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          Who Gets Presbyopia and When?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            The short answer: everyone. Presbyopia is a universal condition that affects all people as they age, typically becoming noticeable between ages 40 and 45. Even if you've had perfect vision your entire life, presbyopia will eventually affect you.
          </p>
          <p className="mb-6">
            The progression follows a fairly predictable pattern. Most people first notice symptoms in their early 40s, and the condition gradually worsens until around age 65, when the lens has lost most of its remaining flexibility. During these years, you may find that you need stronger reading glasses every few years.
          </p>
          <p className="mb-6">
            Certain factors can influence when presbyopia becomes noticeable. People who are farsighted may notice symptoms earlier than those who are nearsighted. In fact, mildly nearsighted individuals sometimes report that presbyopia seems delayed because their natural nearsightedness partially compensates for the condition. Environmental factors like prolonged close-up work or certain medications can also impact when symptoms become apparent.
          </p>
          <p className="mb-6">
            It's worth noting that presbyopia can coexist with other vision conditions. If you already wear glasses for distance vision, you may need bifocals or progressive lenses once presbyopia develops. If you've never needed glasses before, you might start with simple reading glasses.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          The Science Behind the Change
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Understanding why presbyopia happens requires looking at how the eye focuses. The natural lens sits behind your iris and pupil, held in place by tiny fibers called zonules. When you look at something far away, the ciliary muscles relax, the zonules pull tight, and the lens flattens. When you look at something close, the ciliary muscles contract, the zonules relax, and the lens becomes rounder.
          </p>
          <p className="mb-6">
            This process works beautifully when you're young because the lens is soft and pliable. However, the lens continues to grow throughout your life, adding new layers like an onion. As it grows, older layers get compressed toward the center, making the lens progressively denser and less elastic.
          </p>
          <p className="mb-6">
            By your 40s, the lens has become rigid enough that the ciliary muscles can't change its shape sufficiently to focus on nearby objects. The muscles themselves remain strong—the problem lies entirely with the inflexible lens. This is why presbyopia is inevitable: as long as you live, your lens will continue to harden.
          </p>
          <p className="mb-6">
            Research has shown that this process is biologically programmed and occurs regardless of overall health, lifestyle, or whether you've used your eyes extensively for close work. Even people who have lived in cultures with minimal reading or close-up tasks develop presbyopia at the same age and rate as those in industrialized societies.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          Treatment and Management Options
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            The good news is that presbyopia is one of the most easily corrected vision problems. Several effective options are available, and the right choice depends on your lifestyle, visual needs, and personal preferences.
          </p>
          <p className="mb-6">
            <strong>Reading glasses</strong> are the simplest solution for people who don't need vision correction for distance. These single-vision lenses are designed specifically for close-up work and are available in various strengths. Many people keep multiple pairs in convenient locations—one by the bed, one in the car, one at the office.
          </p>
          <p className="mb-6">
            <strong>Bifocals and trifocals</strong> combine distance and near vision correction in a single lens, with a visible line separating the different zones. While some people find these old-fashioned, they remain an effective and economical option.
          </p>
          <p className="mb-6">
            <strong>Progressive lenses</strong> provide a seamless transition between distance, intermediate, and near vision without visible lines. They offer a more natural visual experience and cosmetically appealing appearance, though they require a brief adjustment period.
          </p>
          <p className="mb-6">
            <strong>Contact lenses</strong> are also available for presbyopia. Multifocal contacts work similarly to progressive glasses, while monovision contacts correct one eye for distance and the other for near vision. Your brain learns to use the appropriate eye for each task.
          </p>
          <p className="mb-6">
            <strong>Surgical options</strong> include procedures like monovision LASIK or refractive lens exchange, where the natural lens is replaced with a multifocal artificial lens. These options are more invasive but can reduce or eliminate dependence on glasses.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
          Living Well With Presbyopia
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Beyond corrective lenses, several strategies can help you manage presbyopia and maintain comfortable vision:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Ensure adequate lighting:</strong> Good illumination reduces eye strain and makes close-up tasks easier. Position lights to minimize glare and shadows.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Take regular breaks:</strong> Follow the 20-20-20 rule—every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye fatigue.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Use larger print when possible:</strong> Increase font sizes on digital devices and choose large-print books when available.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Keep your prescription current:</strong> Have your eyes examined regularly, as your presbyopia will progress and require stronger correction over time.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Consider your working distance:</strong> Computer work typically requires an intermediate prescription, different from reading glasses optimized for 14-16 inches.</span>
            </li>
          </ul>
          <p className="mb-6">
            Remember that presbyopia doesn't affect your overall eye health. It won't lead to blindness or other serious eye conditions. However, regular eye exams remain important for detecting other age-related eye problems like cataracts, glaucoma, or macular degeneration, which require different treatments.
          </p>
        </div>

        {/* Closing Paragraph */}
        <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="mb-6">
            Presbyopia is a natural part of aging that affects everyone, but it doesn't have to interfere with your quality of life. With proper correction and a few simple adjustments, you can continue enjoying all your favorite activities—from reading and crafts to using digital devices and appreciating fine details.
          </p>
          <p className="mb-6">
            If you're experiencing difficulty with close-up vision, don't postpone getting help. An eye care professional can perform a comprehensive examination, determine your exact prescription needs, and help you find the correction method that best fits your lifestyle. The sooner you address presbyopia, the sooner you can return to comfortable, clear vision for all your daily tasks.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in comprehensive eye care and patient education. Our team is dedicated to helping you understand your vision and maintaining optimal eye health throughout every stage of life.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>Understanding Age-Related Vision Changes</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about the common vision changes that occur as you age and when to seek professional care.</p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Guide</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>Choosing the Right Reading Glasses</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">A comprehensive guide to selecting reading glasses that fit your lifestyle and visual needs.</p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Vision Care</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>Digital Eye Strain and Screen Time</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover how prolonged screen use affects your eyes and practical tips to reduce digital eye strain.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you find the perfect vision solution.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg">
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}