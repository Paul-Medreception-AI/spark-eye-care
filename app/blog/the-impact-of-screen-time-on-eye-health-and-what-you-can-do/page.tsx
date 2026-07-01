import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Impact of Screen Time on Eye Health and What You Can Do | Spark Eye Care',
  description: 'Learn how excessive screen time affects your vision and discover practical strategies to protect your eye health in our digital world. Expert guidance from Spark Eye Care.',
  openGraph: {
    title: 'The Impact of Screen Time on Eye Health and What You Can Do',
    description: 'Learn how excessive screen time affects your vision and discover practical strategies to protect your eye health in our digital world.',
    url: 'https://www.sparkeyetx.com/blog/the-impact-of-screen-time-on-eye-health-and-what-you-can-do',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80 mb-8 justify-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span>›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-white/70">Patient Education</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Impact of Screen Time on Eye Health and What You Can Do
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
            If you're reading this article, chances are you're doing so on a screen. Perhaps it's your smartphone during a coffee break, your laptop at work, or your tablet before bed. For most of us, screens have become an inescapable part of modern life—we work on them, socialize through them, and relax with them. But as our digital dependency deepens, a crucial question emerges: what is all this screen time doing to our eyes?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The average American now spends over seven hours daily looking at screens, and this number continues to climb. While technology has revolutionized how we live and work, it's also introducing new challenges for our eye health. The good news? Understanding these impacts and taking proactive steps can help protect your vision for years to come.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Digital Eye Strain
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Digital eye strain, also known as computer vision syndrome, has become one of the most common complaints eye care professionals hear today. This condition encompasses a group of eye and vision-related problems that result from prolonged computer, tablet, e-reader, and cell phone use.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When we look at digital screens, our eyes work harder than they do during other activities. The characters on a screen aren't as sharply defined as printed text, contrast levels are reduced, and the presence of glare and reflections makes viewing more difficult. Additionally, we tend to blink less frequently when focused on screens—about 66% less than normal—which leads to dry, irritated eyes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Symptoms of digital eye strain include eyestrain, headaches, blurred vision, dry eyes, and neck and shoulder pain. If you've ever experienced that gritty, tired feeling in your eyes after a long day at the computer, you've felt the effects of digital eye strain firsthand.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            The Blue Light Question
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Blue light has received significant attention in recent years, and for good reason. Digital devices emit high levels of blue light, which has shorter wavelengths and higher energy than other visible light. While research is ongoing, there are several concerns about prolonged blue light exposure.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            First, blue light penetrates deep into the eye, reaching the retina. Some studies suggest that excessive blue light exposure may contribute to retinal damage over time, though more research is needed to fully understand long-term effects. What we do know with more certainty is that blue light significantly impacts our circadian rhythms—our body's natural sleep-wake cycle.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Blue light suppresses the production of melatonin, the hormone that regulates sleep. This is why scrolling through your phone before bed can make it harder to fall asleep and reduce sleep quality. Poor sleep, in turn, affects overall health and can exacerbate eye strain and dryness.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "The average American now spends over seven hours daily looking at screens. Understanding how this impacts your eyes is the first step toward protecting your vision."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Most at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While excessive screen time can affect anyone, certain groups face heightened risks. Office workers who spend most of their day at computers are particularly vulnerable to digital eye strain. Students, especially with the rise of online learning, face similar challenges.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Children and teenagers deserve special attention. Their eyes are still developing, and they're spending more time on screens than any previous generation. Studies show that increased screen time in childhood correlates with higher rates of myopia (nearsightedness), a trend that has accelerated dramatically in recent decades. Some researchers predict that by 2050, nearly half the world's population could be nearsighted if current trends continue.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            People with existing vision problems, such as uncorrected refractive errors or binocular vision issues, may experience more severe symptoms from screen use. Additionally, as we age, our eyes naturally become less flexible, making it harder to focus on screens and increasing discomfort.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond Eye Strain: Other Concerns
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The impact of excessive screen time extends beyond temporary discomfort. Dry eye disease, a chronic condition where eyes don't produce enough tears or produce poor-quality tears, is becoming increasingly common and is linked to prolonged screen use.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            There's also growing evidence connecting screen time with the progression of myopia, particularly in children. When we focus on near objects for extended periods, our eyes adapt by elongating, which increases nearsightedness. This adaptation appears to be accelerated by screen use combined with reduced time outdoors.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Posture-related issues often accompany screen use. The position we hold our devices can strain not just our eyes but also our necks, shoulders, and backs, creating a cascade of discomfort that affects overall well-being.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Steps to Protect Your Eyes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that there are many effective strategies to minimize the negative effects of screen time on your eye health. Here are evidence-based recommendations you can implement today:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Follow the 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for at least 20 seconds. This simple practice gives your eye muscles a break from constant near-focus work.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Optimize your workspace:</strong> Position your screen about an arm's length away and slightly below eye level. Reduce glare by adjusting lighting and using an anti-glare screen if needed.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Adjust screen settings:</strong> Increase text size, adjust brightness to match your surroundings, and consider using dark mode in low-light conditions.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Blink consciously:</strong> Make a deliberate effort to blink fully and regularly. Consider using artificial tears if your eyes feel dry.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Limit blue light exposure:</strong> Use blue light filters on your devices, especially in the evening. Consider computer glasses with blue light filtering if you spend extensive time on screens.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Take regular breaks:</strong> Step away from your screen every hour. Use this time to stretch, move around, and give your eyes a complete rest.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Encourage outdoor time:</strong> Especially important for children, spending time outdoors has been shown to reduce the risk of myopia progression.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Maintain proper posture:</strong> Sit with your back supported and feet flat on the floor. Your neck should be in a neutral position, not craned forward or tilted.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Help
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While many symptoms of digital eye strain can be managed with lifestyle changes, it's important to know when to consult an eye care professional. Schedule an appointment if you experience persistent eye discomfort, frequent headaches, ongoing blurred vision, or if symptoms interfere with your daily activities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Regular comprehensive eye exams are crucial, especially if you spend significant time on screens. An eye care professional can ensure your prescription is up to date, assess your risk for various eye conditions, and recommend personalized strategies for your specific needs. They can also identify underlying conditions that might be exacerbating your symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            For children, regular eye exams are particularly important as their vision is still developing. Early detection and intervention can prevent long-term vision problems and ensure they have the visual tools they need to succeed in school and life.
          </p>

          {/* Closing Paragraph */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Forward With Healthy Vision Habits
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            We live in a digital world, and screens aren't going anywhere. But that doesn't mean we have to sacrifice our eye health. By understanding how screen time affects our eyes and implementing protective strategies, we can enjoy the benefits of technology while minimizing its drawbacks.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Think of eye care in the digital age as a form of preventive maintenance. Small, consistent actions—taking breaks, adjusting your workspace, being mindful of blue light exposure—add up to significant long-term benefits. Your eyes are irreplaceable, and investing in their health today will pay dividends for years to come.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're experiencing symptoms of digital eye strain or have concerns about how screen time is affecting your vision, we're here to help. Our team can provide comprehensive evaluations, personalized recommendations, and solutions tailored to your lifestyle and needs. Don't wait until discomfort becomes a chronic problem—taking action now can preserve your vision and improve your quality of life.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, committed to delivering compassionate, evidence-based care and empowering patients with knowledge about their eye health.
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
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Common Eye Conditions and When to Seek Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about prevalent eye conditions, their symptoms, and why timely professional evaluation is essential for preserving vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Protecting Your Eyes from UV Damage Year-Round
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover why UV protection matters in every season and how to choose the right eyewear to safeguard your long-term eye health.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness Tips</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Nutrition and Eye Health: Foods That Support Your Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the connection between diet and eye health, and learn which nutrients are essential for maintaining clear, healthy vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help you protect your vision and address any concerns about screen time and eye health.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-up"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}