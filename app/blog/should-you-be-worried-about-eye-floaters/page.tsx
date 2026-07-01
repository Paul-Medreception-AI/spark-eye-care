import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Should You Be Worried About Eye Floaters? | Spark Eye Care',
  description: 'Learn when eye floaters are harmless and when they require immediate medical attention. Expert guidance from Spark Eye Care on recognizing warning signs and protecting your vision.',
  openGraph: {
    title: 'Should You Be Worried About Eye Floaters? | Spark Eye Care',
    description: 'Learn when eye floaters are harmless and when they require immediate medical attention. Expert guidance from Spark Eye Care on recognizing warning signs and protecting your vision.',
    url: 'https://sparkeyetx.com/blog/should-you-be-worried-about-eye-floaters',
    siteName: 'Spark Eye Care',
    type: 'article',
    images: [
      {
        url: 'https://sparkeyetx.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spark Eye Care',
      },
    ],
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
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Should You Be Worried About Eye Floaters?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
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
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You're reading a book on a sunny afternoon when suddenly, tiny specks drift across your vision like microscopic swimmers. You blink, rub your eyes, but they're still there—those strange shadows floating through your field of view. If you've experienced eye floaters, you're not alone. These mysterious spots affect millions of people, and while they're usually harmless, knowing when to seek help can be crucial for protecting your vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Understanding eye floaters—what causes them, when they're normal, and when they signal something serious—empowers you to make informed decisions about your eye health. Let's explore everything you need to know about these common yet often misunderstood visual phenomena.
          </p>

          {/* Section 1 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Eye Floaters?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Eye floaters are small spots, specks, strands, or cobweb-like shapes that drift through your visual field. They're most noticeable when looking at plain, bright backgrounds like a clear sky, white wall, or blank computer screen. These shadows move as your eyes move and seem to dart away when you try to look at them directly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Floaters are actually tiny clumps of cells or gel-like material inside the vitreous—the clear, jelly-like substance that fills the inside of your eye. As light enters your eye, these clumps cast shadows on your retina (the light-sensitive tissue at the back of your eye), creating the appearance of floating objects in your vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The vitreous humor makes up about 80% of your eye's volume and helps maintain the eye's round shape. As we age, this gel-like substance begins to liquefy and shrink, causing microscopic fibers within the vitreous to clump together. This natural aging process is the most common cause of floaters and typically begins in middle age, though younger people can experience them too.
          </p>

          {/* Section 2 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Do Eye Floaters Happen?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While aging is the primary cause of eye floaters, several factors can contribute to their development. Understanding these causes helps you assess whether your floaters are likely benign or potentially concerning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="font-semibold">Common causes of eye floaters include:</strong>
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Age-related changes:</strong> The vitreous naturally becomes more liquid with age, typically beginning after age 50, though changes can start earlier in nearsighted individuals</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Posterior vitreous detachment (PVD):</strong> When the vitreous separates from the retina, a common occurrence as we age that can cause a sudden increase in floaters</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Inflammation:</strong> Uveitis and other inflammatory conditions in the eye can release inflammatory debris into the vitreous</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Bleeding in the eye:</strong> Conditions like diabetic retinopathy or injury can cause blood cells to leak into the vitreous</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Eye surgeries or medications:</strong> Certain procedures or medications injected into the eye can introduce air bubbles that appear as floaters</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="font-semibold">Myopia (nearsightedness):</strong> People with significant nearsightedness are at higher risk for developing floaters at a younger age</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant'] leading-relaxed">
              "Most eye floaters are harmless and simply a natural part of aging. However, a sudden increase in floaters, especially when accompanied by flashes of light or vision loss, requires immediate medical attention."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Eye Floaters Are Normal
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For most people, eye floaters are completely benign and require no treatment. If you've had a few floaters for months or years that haven't changed significantly, they're likely harmless. Your brain often adapts to them over time, and you may notice them less frequently as weeks pass.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Benign floaters typically have these characteristics: they've been present for a while without significant changes, they move smoothly with eye movement, they're more noticeable in certain lighting conditions but don't interfere with daily activities, and they aren't accompanied by other symptoms like flashes, vision loss, or eye pain.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If your floaters fit this description, you can generally observe them without worry. However, it's still important to mention them during regular eye exams so your eye care provider can monitor any changes and ensure your retina remains healthy.
          </p>

          {/* Section 4 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Warning Signs: When to Seek Immediate Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While most floaters are harmless, certain symptoms indicate a potentially serious problem that requires prompt evaluation. These warning signs suggest possible retinal tears, retinal detachment, or bleeding inside the eye—conditions that can lead to permanent vision loss if not treated quickly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="font-semibold">Seek immediate medical attention if you experience:</strong>
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">A sudden, significant increase in floaters:</strong> Especially if dozens appear at once, resembling a shower or swarm of spots</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">Flashes of light:</strong> Bright streaks or lightning-like flashes in your peripheral vision, which may indicate retinal traction</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">A shadow or curtain:</strong> Darkness spreading across your peripheral or central vision, suggesting retinal detachment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">Loss of peripheral vision:</strong> The sides of your visual field appear to be closing in or missing</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">Eye pain accompanied by floaters:</strong> While floaters alone don't cause pain, pain with floaters could indicate inflammation or other serious conditions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span><strong className="font-semibold">Floaters after eye injury or surgery:</strong> New floaters following trauma to the eye warrant immediate examination</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            These symptoms may indicate retinal detachment, a medical emergency that requires prompt treatment to prevent permanent vision loss. If you experience any combination of these warning signs, contact an eye care professional immediately or visit an emergency department. Time is critical when it comes to preserving vision in these situations.
          </p>

          {/* Section 5 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Your Eye Doctor Will Do
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you schedule an appointment for eye floaters, your eye care provider will perform a comprehensive dilated eye examination. This involves using special drops to widen your pupils, allowing a clear view of the vitreous and retina. The examination is painless, though your vision may be blurry for several hours afterward and you'll be sensitive to light.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During the exam, your doctor will look for signs of retinal tears, detachment, inflammation, bleeding, or other abnormalities. They'll map out where your floaters are located and assess whether they pose any risk to your vision. In most cases, the exam reveals that floaters are benign and require no treatment other than periodic monitoring.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If your doctor discovers a retinal tear, they may perform laser treatment or cryotherapy (freezing) to seal the tear and prevent retinal detachment. If a retinal detachment is found, surgical repair is necessary and should be performed as soon as possible. Early detection and treatment significantly improve outcomes for these serious conditions.
          </p>

          {/* Section 6 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Living With Benign Eye Floaters
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If your floaters are determined to be harmless, you'll likely need to adapt to living with them. While this can be frustrating initially, most people find that floaters become less bothersome over time as the brain learns to ignore them—a process called neuroadaptation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="font-semibold">Strategies for coping with benign floaters:</strong>
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Move your eyes to shift the floaters out of your direct line of sight—looking up and down quickly can sometimes help</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduce bright backgrounds when possible, as floaters are more noticeable against white or light-colored surfaces</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Adjust lighting to minimize the appearance of floaters—sometimes softer, indirect lighting is more comfortable</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Stay hydrated and maintain overall eye health through a balanced diet rich in antioxidants</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Give yourself time—neuroadaptation usually occurs within weeks to months, making floaters less noticeable</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Continue regular eye exams to monitor for any changes that might indicate a new problem</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Treatment for benign floaters is rarely necessary, though in severe cases where floaters significantly impair vision and quality of life, procedures like vitrectomy (surgical removal of the vitreous) or laser vitreolysis (using a laser to break up floaters) may be considered. However, these procedures carry risks and are typically reserved for extreme situations. Most people find that floaters become manageable without intervention.
          </p>

          {/* Closing */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Bottom Line: Stay Informed and Vigilant
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Eye floaters are an incredibly common experience, particularly as we age. The vast majority are harmless and simply reflect normal changes in the vitreous gel inside our eyes. Understanding what's normal versus what requires immediate attention empowers you to protect your vision while avoiding unnecessary anxiety.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember the key distinction: longstanding, stable floaters are usually benign, while sudden increases in floaters—especially when accompanied by flashes, vision loss, or shadows—warrant immediate medical evaluation. Early detection of serious conditions like retinal tears or detachment dramatically improves treatment outcomes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're experiencing eye floaters for the first time or notice any changes in existing floaters, scheduling a comprehensive eye examination provides peace of mind and ensures your eyes remain healthy. Our team at Spark Eye Care is here to evaluate your symptoms, provide expert guidance, and help you maintain optimal vision throughout your life.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based eye care and patient education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-semibold">Eye Health</div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Understanding Dry Eye Syndrome</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Learn about the causes, symptoms, and treatment options for this common condition affecting millions.</p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-semibold">Vision Care</div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Protecting Your Eyes From UV Damage</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Discover why UV protection is essential year-round and how to choose the right eyewear.</p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2 font-semibold">Prevention</div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">How Often Should You Get an Eye Exam?</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Learn the recommended schedule for comprehensive eye exams based on age and risk factors.</p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Our team is here to help with all your eye care needs.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] hover:scale-105 transition-all duration-300 shadow-lg">
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}