import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macular Degeneration: Risk Factors and Prevention Strategies | Spark Eye Care',
  description: 'Learn about age-related macular degeneration risk factors, warning signs, and evidence-based prevention strategies to protect your vision and eye health.',
  keywords: 'macular degeneration, AMD, age-related macular degeneration, vision loss, eye health, retina health, vision prevention',
  openGraph: {
    title: 'Macular Degeneration: Risk Factors and Prevention Strategies',
    description: 'Learn about age-related macular degeneration risk factors, warning signs, and evidence-based prevention strategies to protect your vision and eye health.',
    url: 'https://www.sparkeyetx.com/blog/macular-degeneration-risk-factors-and-prevention-strategies',
    type: 'article',
    images: ['/logo.png']
  }
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Macular Degeneration: Risk Factors and Prevention Strategies
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Imagine looking at the face of someone you love and seeing only their outline—the center where their smile should be is blurred or missing entirely. For millions of people living with age-related macular degeneration (AMD), this isn't imagination; it's everyday reality. As the leading cause of vision loss in adults over 50, macular degeneration affects more than 11 million Americans, with that number expected to double by 2050.
            </p>
            <p className="mb-6">
              But here's the encouraging news: while we can't prevent all cases of macular degeneration, understanding your risk factors and taking proactive steps can significantly slow its progression and, in some cases, reduce your risk of developing it altogether. Let's explore what you need to know to protect your precious gift of sight.
            </p>
          </div>

          {/* Section 1 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding Macular Degeneration
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Age-related macular degeneration is a progressive eye condition that affects the macula—the small, central portion of your retina responsible for sharp, detailed central vision. The macula is what allows you to read, recognize faces, drive, and perform detailed tasks that require seeing what's directly in front of you.
              </p>
              <p className="mb-6">
                AMD comes in two forms: dry and wet. Dry AMD accounts for about 85-90% of cases and progresses more slowly, involving the gradual breakdown of light-sensitive cells in the macula. Wet AMD is less common but more aggressive, occurring when abnormal blood vessels grow under the retina and leak fluid or blood, causing rapid damage to the macula.
              </p>
              <p className="mb-6">
                The impact of AMD extends far beyond the clinical definition. It affects independence, safety, mental health, and quality of life. Early detection and intervention can make a profound difference in outcomes, which is why understanding your risk factors is so crucial.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Key Risk Factors You Should Know
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                While age is the most significant risk factor for AMD—hence the name—numerous other factors increase your likelihood of developing this condition. Understanding these risk factors empowers you to take preventive action where possible.
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">Non-Modifiable Risk Factors:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Age:</strong> Risk increases significantly after age 50, with the highest rates occurring after age 60</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Family history:</strong> Having a first-degree relative with AMD doubles or triples your risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Genetics:</strong> Specific gene variants, particularly in the CFH and ARMS2 genes, increase susceptibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Race:</strong> Caucasians have higher rates of AMD compared to other ethnic groups</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">Modifiable Risk Factors:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Smoking:</strong> Current smokers have 2-4 times the risk of AMD; former smokers remain at elevated risk for years</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Cardiovascular disease:</strong> High blood pressure, heart disease, and high cholesterol increase AMD risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Obesity:</strong> Being overweight doubles the risk of progression from early to advanced AMD</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Sun exposure:</strong> Chronic, unprotected UV light exposure may contribute to retinal damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Diet:</strong> Poor nutrition lacking in antioxidants and omega-3 fatty acids increases risk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "The most powerful tool we have in fighting macular degeneration is early detection. Regular eye exams can catch changes years before symptoms appear, giving us the best chance to preserve vision."
            </p>
          </div>

          {/* Section 3 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Evidence-Based Prevention Strategies
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                While you can't change your age or genetics, research has identified several lifestyle modifications and interventions that can reduce your risk of developing AMD or slow its progression if you already have early signs.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">1. Quit Smoking—Immediately</h3>
              <p className="mb-6">
                If you smoke, quitting is the single most important action you can take to reduce your AMD risk. Studies show that smoking cessation can reduce risk to near-baseline levels within 20 years. Every smoke-free day benefits your eyes and overall health.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">2. Adopt an Eye-Healthy Diet</h3>
              <p className="mb-6">
                The landmark Age-Related Eye Disease Study (AREDS and AREDS2) demonstrated that specific nutrients can slow AMD progression. Focus on:
              </p>
              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Leafy green vegetables:</strong> Spinach, kale, and collard greens rich in lutein and zeaxanthin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Fatty fish:</strong> Salmon, tuna, and mackerel containing omega-3 fatty acids (DHA and EPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Colorful fruits and vegetables:</strong> Carrots, peppers, berries rich in antioxidants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Nuts and legumes:</strong> Sources of vitamin E and zinc</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">3. Consider AREDS2 Supplementation</h3>
              <p className="mb-6">
                For people with intermediate AMD or advanced AMD in one eye, the AREDS2 formula has been proven to reduce the risk of progression by about 25%. This includes vitamin C, vitamin E, lutein, zeaxanthin, zinc, and copper. Always consult with your eye care provider before starting supplements, as they're not appropriate for everyone.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">4. Protect Your Eyes from UV Light</h3>
              <p className="mb-6">
                Wear sunglasses that block 99-100% of UVA and UVB radiation whenever you're outdoors. Consider wraparound styles for maximum protection. A wide-brimmed hat provides additional shielding.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">5. Maintain Cardiovascular Health</h3>
              <p className="mb-6">
                What's good for your heart is good for your eyes. Regular exercise, maintaining healthy blood pressure and cholesterol levels, and managing conditions like diabetes all contribute to retinal health. Aim for at least 150 minutes of moderate aerobic activity weekly.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">6. Maintain a Healthy Weight</h3>
              <p className="mb-6">
                Studies suggest that obesity, particularly abdominal obesity, is associated with progression of AMD. Even modest weight loss can reduce inflammation and improve overall health markers that benefit eye health.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Warning Signs to Watch For
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Early AMD often has no symptoms, which is why regular eye exams are crucial. As the condition progresses, you might notice:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Gradual loss of central vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Distortion of straight lines (they appear wavy or bent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Blurry or fuzzy vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Dark, blurry areas or "white-out" in the center of vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Difficulty recognizing faces</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Need for brighter light when reading or doing close work</span>
                </li>
              </ul>
              <p className="mb-6">
                If you experience any sudden vision changes, particularly distortion or a dark spot in your central vision, seek immediate eye care evaluation. These could indicate wet AMD, which requires urgent treatment to prevent permanent vision loss.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              The Critical Role of Regular Eye Exams
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Perhaps the most important prevention strategy is also the simplest: schedule and keep regular comprehensive eye exams. During these exams, your eye care provider can detect early signs of AMD before you notice any symptoms.
              </p>
              <p className="mb-6">
                Recommended screening frequency:
              </p>
              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Age 40-54:</strong> Every 2-4 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Age 55-64:</strong> Every 1-3 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>Age 65 and older:</strong> Every 1-2 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] font-bold">•</span>
                  <span><strong>High-risk individuals:</strong> Annually or as recommended by your provider</span>
                </li>
              </ul>
              <p className="mb-6">
                During these exams, your provider will dilate your pupils to examine your retina and macula, checking for drusen (yellow deposits under the retina), pigment changes, or other early signs of AMD. Advanced imaging techniques like optical coherence tomography (OCT) provide detailed cross-sectional images of the retina, allowing detection of subtle changes.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Living with Purpose: Managing Your Eye Health
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Knowledge about macular degeneration risk factors and prevention strategies empowers you to take control of your eye health. While the prospect of vision loss can feel overwhelming, remember that most people with early or intermediate AMD do not progress to advanced stages, especially with proper management and lifestyle modifications.
              </p>
              <p className="mb-6">
                If you've been diagnosed with AMD, work closely with your eye care team to develop a personalized management plan. New treatments continue to emerge, offering hope for better outcomes. For wet AMD, anti-VEGF injections have revolutionized treatment, helping many people maintain their vision. For dry AMD, researchers are investigating stem cell therapy, gene therapy, and other innovative approaches.
              </p>
              <p className="mb-6">
                Beyond medical treatment, low vision rehabilitation services can help maximize your remaining vision and maintain independence. Occupational therapists, vision rehabilitation specialists, and assistive technology can make a tremendous difference in quality of life.
              </p>
              <p className="mb-6">
                Your vision is precious. By understanding your risk factors, adopting healthy lifestyle habits, and staying vigilant with regular eye exams, you're taking powerful steps to protect it. Don't wait for symptoms to appear—proactive care today can preserve your sight for tomorrow.
              </p>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12 animate-fade-up">
            <h3 className="text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Take Action for Your Eye Health
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              If you're over 50, have risk factors for macular degeneration, or are experiencing any vision changes, don't delay scheduling a comprehensive eye exam. Early detection and intervention are your best defenses against vision loss. Our experienced team at Spark Eye Care is here to provide expert evaluation, personalized recommendations, and compassionate care.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-dark)] transition-all duration-300"
            >
              Schedule Your Eye Exam
            </a>
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Diabetic Retinopathy: Prevention and Treatment
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Learn how diabetes affects your eyes and what you can do to protect your vision with proper management and care.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Glaucoma: The Silent Thief of Sight
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Discover why glaucoma is called the "silent" eye disease and how regular screenings can save your vision.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Cataracts: When and Why to Consider Surgery
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Understanding cataract development, symptoms, and how modern surgery can restore clear vision safely and effectively.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </main>
  )
}