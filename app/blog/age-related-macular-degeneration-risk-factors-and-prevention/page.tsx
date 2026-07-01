import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age-Related Macular Degeneration: Risk Factors and Prevention | Spark Eye Care',
  description: 'Learn about AMD risk factors, warning signs, and evidence-based prevention strategies to protect your vision as you age. Expert guidance from Spark Eye Care.',
  keywords: 'macular degeneration, AMD, age-related eye disease, vision loss prevention, eye health, retina health, Spark Eye Care',
  openGraph: {
    title: 'Age-Related Macular Degeneration: Risk Factors and Prevention',
    description: 'Learn about AMD risk factors, warning signs, and evidence-based prevention strategies to protect your vision as you age.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Spark Eye Care Clinical Team'],
  }
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
            Age-Related Macular Degeneration: Risk Factors and Prevention
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine looking at your grandchild's face and seeing only a blur where their smile should be. Or trying to read a book, only to find the center of every page obscured by a dark spot. For millions of Americans over 50, this isn't imagination—it's the reality of age-related macular degeneration (AMD), the leading cause of vision loss in older adults.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? While AMD is common, understanding your risk factors and taking preventive measures can significantly slow its progression or even help prevent it altogether. Whether you're concerned about your own vision or caring for an aging loved one, this guide will help you understand what AMD is, who's at risk, and most importantly—what you can do about it.
          </p>

          {/* What is AMD */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Age-Related Macular Degeneration
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Age-related macular degeneration is a progressive eye condition that affects the macula, the central portion of the retina responsible for sharp, detailed vision. The macula is what allows you to read, recognize faces, drive, and perform any task that requires fine detail. When AMD develops, cells in the macula begin to deteriorate, causing central vision to become blurry, distorted, or even completely lost.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            There are two types of AMD: dry and wet. Dry AMD, which accounts for about 85-90% of cases, develops slowly as the macula thins with age. Wet AMD is less common but more severe, occurring when abnormal blood vessels grow under the retina and leak fluid, causing rapid damage. While peripheral vision typically remains intact, the loss of central vision can profoundly impact quality of life and independence.
          </p>

          {/* Risk Factors */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is at Risk? Understanding Your Vulnerability
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Age-related macular degeneration doesn't affect everyone equally. Certain factors significantly increase your likelihood of developing this condition. Understanding your personal risk profile is the first step toward prevention.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Major Risk Factors for AMD:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Age:</strong> Risk increases dramatically after age 50, with those over 75 at highest risk</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Family History:</strong> Having a close relative with AMD increases your risk by 50%</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Smoking:</strong> Current smokers are 2-4 times more likely to develop AMD than non-smokers</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Race:</strong> Caucasians are at higher risk than African Americans or Hispanics</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Cardiovascular Disease:</strong> High blood pressure, high cholesterol, and heart disease are linked to AMD</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Obesity:</strong> Being significantly overweight doubles the risk of AMD progression</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Light Eye Color:</strong> Those with light-colored eyes may be at slightly higher risk</span>
              </li>
            </ul>
          </div>

          {/* Warning Signs */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Early Warning Signs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Early detection of AMD is crucial because treatment is most effective in the early stages. Unfortunately, many people don't notice symptoms until the disease has progressed significantly, particularly because AMD typically affects only one eye at first, and the other eye compensates.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Pay attention to these potential warning signs: difficulty reading or doing close-up work, needing brighter light for detailed tasks, trouble recognizing faces, straight lines appearing wavy or distorted, dark or empty areas in the center of your vision, or colors appearing less vivid than before. If you notice any of these changes, schedule an eye exam immediately—even if you had one recently.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The most powerful tool we have against AMD isn't a medication or surgery—it's early detection. Regular comprehensive eye exams can catch changes years before you notice symptoms, when prevention strategies are most effective."
          </blockquote>

          {/* Prevention Strategies */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Prevention Strategies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While you can't change your age or genetics, research has identified several lifestyle modifications and interventions that can significantly reduce your risk of developing AMD or slow its progression if you already have early-stage disease.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">1. Quit Smoking (or Never Start)</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Smoking is the single most modifiable risk factor for AMD. Studies show that smokers have up to four times the risk of developing AMD compared to people who have never smoked. The good news? Quitting at any age reduces your risk, though former smokers may still have elevated risk for years after quitting. If you smoke, quitting is the most important step you can take to protect your vision.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">2. Eat a Vision-Healthy Diet</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Nutrition plays a powerful role in eye health. The landmark Age-Related Eye Disease Study (AREDS and AREDS2) demonstrated that specific nutrients can reduce the risk of AMD progression by about 25%. Focus on foods rich in omega-3 fatty acids (salmon, tuna, sardines), leafy green vegetables like spinach and kale, colorful vegetables and fruits, nuts and legumes, and whole grains. These foods are packed with antioxidants, lutein, zeaxanthin, and other nutrients that protect the macula from oxidative damage.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">3. Consider AREDS2 Supplements</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For people with intermediate AMD or advanced AMD in one eye, the AREDS2 formula—containing vitamin C, vitamin E, zinc, copper, lutein, and zeaxanthin—has been proven to slow disease progression. However, these supplements aren't recommended for everyone and should only be taken under professional guidance, as they contain high doses that may interact with other medications or conditions.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">4. Manage Cardiovascular Health</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What's good for your heart is good for your eyes. Regular exercise, maintaining healthy blood pressure and cholesterol levels, and managing diabetes all contribute to better retinal health. Aim for at least 150 minutes of moderate aerobic activity per week, and work with your healthcare provider to keep cardiovascular risk factors under control.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">5. Protect Your Eyes from UV Light</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While the link between UV exposure and AMD isn't as definitively proven as with cataracts, there's evidence that long-term UV exposure may contribute to macular damage. Wear sunglasses that block 99-100% of UVA and UVB rays whenever you're outdoors, even on cloudy days.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">6. Maintain a Healthy Weight</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Obesity is associated with increased risk of AMD progression. Studies suggest that people who are obese are more than twice as likely to develop advanced AMD compared to people at a healthy weight. Even modest weight loss can reduce risk, particularly when combined with increased physical activity.
          </p>

          {/* Regular Screening */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Critical Role of Regular Eye Exams
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Even if you have perfect vision and no symptoms, regular comprehensive eye exams are essential for AMD prevention and early detection. The American Academy of Ophthalmology recommends that adults with no risk factors get a baseline eye exam at age 40, then follow their eye doctor's recommendations for follow-up—typically every 2-4 years until age 55, then every 1-3 years until age 64, and every 1-2 years after 65.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you have risk factors for AMD—family history, smoking history, cardiovascular disease, or early signs of AMD—your eye doctor will likely recommend more frequent exams. These comprehensive exams can detect drusen (yellow deposits under the retina that are an early sign of AMD) years before you notice any vision changes, allowing for earlier intervention.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">At-Home Monitoring: The Amsler Grid</h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              If you've been diagnosed with AMD or are at high risk, your eye doctor may recommend daily self-monitoring using an Amsler grid—a simple pattern of horizontal and vertical lines with a dot in the center. By covering one eye at a time and looking at the dot, you can detect changes like wavy lines, blurry areas, or dark spots that might indicate AMD progression. This simple tool can help catch rapid changes, particularly the conversion from dry to wet AMD, which requires urgent treatment.
            </p>
          </div>

          {/* Living with AMD */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What If You're Already Diagnosed?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A diagnosis of AMD isn't a death sentence for your vision. For dry AMD, the prevention strategies outlined above—particularly AREDS2 supplements, diet, exercise, and smoking cessation—can significantly slow progression. For wet AMD, treatments like anti-VEGF injections have revolutionized outcomes, stabilizing vision or even improving it in many patients.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond medical treatment, low vision aids and rehabilitation can help you maintain independence and quality of life. Magnifiers, special lighting, large-print materials, and assistive technology can compensate for vision loss. Many communities offer vision rehabilitation services specifically designed to help people with AMD adapt and thrive.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking Control of Your Vision Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Age-related macular degeneration is one of the most common threats to vision in older adults, but it doesn't have to rob you of your independence or quality of life. By understanding your risk factors, making evidence-based lifestyle changes, and committing to regular eye exams, you can significantly reduce your risk or slow the disease's progression.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember: the earlier AMD is detected, the more options you have to protect your vision. Don't wait for symptoms to appear. If you're over 50, have risk factors for AMD, or haven't had a comprehensive eye exam in more than a year, now is the time to schedule one. Your future self—reading, driving, and recognizing the faces of loved ones—will thank you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Vision is precious, and protecting it is one of the most important investments you can make in your health and independence. Take that first step today.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and comprehensive eye care to our community.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Diabetic Retinopathy: What Every Patient Should Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how diabetes affects your vision and what steps you can take to protect your eyes from this leading cause of blindness.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Glaucoma: The Silent Thief of Sight and How to Catch It Early
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover why glaucoma often goes unnoticed until significant vision loss occurs, and why regular screening is essential.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Nutrition</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Nutrition and Eye Health: Foods That Protect Your Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the powerful connection between diet and eye health, and learn which foods can help prevent vision problems.
                </p>
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you protect your vision and maintain your eye health for years to come.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Exam
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}