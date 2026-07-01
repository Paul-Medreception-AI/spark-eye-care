import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blue Light and Eye Health: Separating Fact from Fiction | Spark Eye Care',
  description: 'Discover the truth about blue light exposure and its effects on your eyes. Evidence-based insights from eye care experts on protecting your vision in the digital age.',
  openGraph: {
    title: 'Blue Light and Eye Health: Separating Fact from Fiction',
    description: 'Evidence-based insights on blue light exposure and eye health from Spark Eye Care specialists.',
    images: [{ url: '/logo.png' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Blue Light and Eye Health: Separating Fact from Fiction
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You've probably heard the warnings: blue light from your screens is damaging your eyes, disrupting your sleep, and threatening your long-term vision. The internet is awash with blue light blocking glasses, screen protectors, and apps promising to save your sight. But how much of this is backed by science, and how much is marketing hype?
            </p>
            <p className="mb-6">
              As eye care professionals, we hear questions about blue light daily. Patients come in concerned, confused, and often overwhelmed by conflicting information. The truth about blue light and eye health is more nuanced than many headlines suggest—and understanding the real story can help you make informed decisions about protecting your vision in our increasingly digital world.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Blue Light, Really?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blue light is part of the visible light spectrum, with wavelengths between 380 and 500 nanometers. It's everywhere—and it's not inherently bad. In fact, blue light is essential for regulating our circadian rhythm, boosting alertness, improving mood, and supporting cognitive function during daylight hours.
            </p>
            <p className="mb-6">
              The sun is actually our primary source of blue light exposure, emitting far more than all our digital devices combined. However, the concern arises from our prolonged, close-range exposure to artificial blue light sources—particularly in the evening hours when our bodies naturally wind down.
            </p>
            <p className="mb-6">
              Digital devices like smartphones, tablets, computers, LED televisions, and energy-efficient lighting all emit blue light. While the intensity from these sources is significantly lower than sunlight, the duration and proximity of exposure—often just inches from our faces for hours at a time—has raised questions about potential cumulative effects.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Claims vs. The Evidence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Let's address the most common concerns with what research actually tells us:
            </p>
            <p className="mb-4 font-semibold text-lg">Claim: Blue light causes permanent eye damage and macular degeneration</p>
            <p className="mb-6">
              <strong>The reality:</strong> Current research does not support the claim that blue light from digital devices causes permanent retinal damage or macular degeneration in humans. While laboratory studies have shown that prolonged exposure to intense blue light can damage retinal cells in controlled conditions, the levels emitted by consumer devices are far below these thresholds. The American Academy of Ophthalmology has stated there is no scientific evidence that blue light from digital devices causes damage to the eye.
            </p>
            <p className="mb-4 font-semibold text-lg">Claim: Blue light is the primary cause of digital eye strain</p>
            <p className="mb-6">
              <strong>The reality:</strong> Digital eye strain—characterized by dry eyes, blurred vision, headaches, and neck pain—is a real phenomenon affecting millions. However, blue light is not the main culprit. The primary causes are reduced blink rate (we blink 66% less when staring at screens), poor posture, improper viewing distances, uncorrected vision problems, and prolonged focusing at near distances without breaks.
            </p>
            <p className="mb-4 font-semibold text-lg">Claim: Blue light exposure disrupts sleep patterns</p>
            <p className="mb-6">
              <strong>The reality:</strong> This one is actually true. Blue light suppresses melatonin production, the hormone that signals our body it's time to sleep. Evening exposure to blue light—particularly in the two to three hours before bedtime—can delay sleep onset, reduce sleep quality, and disrupt circadian rhythms. This is one of the most scientifically supported concerns about blue light exposure.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            "The greatest risk from screen time isn't blue light—it's what we're not doing while staring at screens: blinking regularly, taking breaks, and giving our eyes a chance to focus at different distances."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Should Be Most Concerned?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While blue light from devices doesn't pose the dramatic risks often portrayed in marketing, certain groups should pay closer attention:
            </p>
            <p className="mb-6">
              <strong>Children and adolescents:</strong> Young eyes transmit more blue light to the retina than adult eyes because the lens is clearer. Additionally, children are growing up with unprecedented screen exposure, and the long-term effects of cumulative exposure over a lifetime are still unknown. Establishing healthy screen habits early is crucial.
            </p>
            <p className="mb-6">
              <strong>People with existing eye conditions:</strong> Individuals with macular degeneration, retinal diseases, or those who've had cataract surgery (especially with certain lens types) may be more sensitive to blue light and should discuss protective measures with their eye care provider.
            </p>
            <p className="mb-6">
              <strong>Night shift workers and evening screen users:</strong> Anyone exposed to bright blue light during evening hours faces a higher risk of circadian rhythm disruption, which has been linked to various health issues including sleep disorders, metabolic problems, and mood disturbances.
            </p>
            <p className="mb-6">
              <strong>People experiencing digital eye strain:</strong> While blue light may not be the primary cause, those suffering from computer vision syndrome can benefit from a comprehensive approach to screen time management.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Protection Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Rather than focusing exclusively on blue light blocking, here's what actually helps protect your eyes and overall well-being:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Follow the 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for at least 20 seconds. This simple practice reduces eye strain more effectively than any blue light filter.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Blink consciously:</strong> Make an effort to blink fully and frequently when using screens. Consider artificial tears if you experience dryness.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Optimize your workspace:</strong> Position screens 20-26 inches from your eyes and slightly below eye level. Ensure proper lighting to reduce glare and contrast.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Implement a digital sunset:</strong> Reduce screen use 2-3 hours before bedtime. If screens are necessary, use night mode settings or blue light filters specifically in the evening.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Ensure proper vision correction:</strong> Outdated prescriptions force your eyes to work harder. Regular eye exams ensure you have the appropriate correction for screen work.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Spend time outdoors:</strong> Natural light exposure during the day helps regulate circadian rhythms and has been shown to reduce the risk of myopia progression in children.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What About Blue Light Blocking Glasses?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blue light blocking glasses have become a multi-million dollar industry, but what does the research say?
            </p>
            <p className="mb-6">
              A 2017 systematic review published in Ophthalmic & Physiological Optics found insufficient evidence to support the use of blue-blocking spectacle lenses for the general population to improve visual performance or sleep quality, alleviate eye fatigue, or conserve macular health.
            </p>
            <p className="mb-6">
              That said, some people report subjective improvement in comfort when wearing them, particularly for evening screen use. If you choose to try blue light blocking glasses, consider them as one tool among many—not a complete solution. They should not replace good screen hygiene, regular breaks, and comprehensive eye care.
            </p>
            <p className="mb-6">
              More effective for sleep concerns: use your device's built-in night mode, which is free and adjustable, or consider amber-tinted glasses specifically for evening use, which block more of the sleep-disrupting wavelengths.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While blue light from devices isn't the emergency it's sometimes portrayed to be, certain symptoms warrant professional attention:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Persistent eye discomfort, redness, or pain that doesn't improve with breaks</li>
              <li>Frequent headaches associated with screen use</li>
              <li>Blurred vision that persists after looking away from screens</li>
              <li>Difficulty focusing or eyes feeling "stuck" after prolonged screen time</li>
              <li>Chronic sleep disturbances</li>
              <li>Any sudden changes in vision</li>
            </ul>
            <p className="mb-6">
              These symptoms could indicate underlying vision problems, uncorrected refractive errors, dry eye disease, or other conditions that require proper diagnosis and treatment. A comprehensive eye exam can identify issues that simple blue light protection cannot address.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The conversation around blue light and eye health is often dominated by fear and marketing rather than science. The reality is reassuring: your devices aren't destroying your eyes. However, how we use them—the duration, proximity, and timing of our screen time—does impact our comfort, productivity, and overall well-being.
            </p>
            <p className="mb-6">
              Rather than worrying exclusively about blue light, focus on comprehensive eye wellness: regular professional eye exams, proper vision correction, good screen ergonomics, adequate breaks, and healthy sleep habits. These evidence-based strategies offer far more protection than any single product or quick fix.
            </p>
            <p>
              If you're experiencing eye discomfort, vision changes, or have concerns about your screen time and eye health, we're here to help. Our team can assess your individual situation, identify any underlying issues, and create a personalized plan to keep your eyes healthy and comfortable in our digital world.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 animate-fade-up">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to providing evidence-based care and patient education.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Digital Eye Strain: Prevention and Relief</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how to protect your eyes from the effects of prolonged screen time with practical, evidence-based strategies.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-[var(--color-primary)] mb-2">Sleep Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Connection Between Light Exposure and Sleep Quality</h4>
                <p className="text-[var(--color-muted)] text-sm">Discover how managing your light environment throughout the day can dramatically improve your sleep.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Why Regular Eye Exams Matter More Than You Think</h4>
                <p className="text-[var(--color-muted)] text-sm">Comprehensive eye exams detect more than vision problems—they're essential for your overall health.</p>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you protect your vision and overall eye health.
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