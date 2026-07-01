import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Vision Syndrome: Protecting Your Eyes in the Digital Age | Spark Eye Care',
  description: 'Learn about computer vision syndrome, its symptoms, causes, and evidence-based strategies to protect your eyes from digital eye strain in our screen-dominated world.',
  keywords: 'computer vision syndrome, digital eye strain, eye health, screen time, eye care, blue light, eye fatigue, Spark Eye Care',
  openGraph: {
    title: 'Computer Vision Syndrome: Protecting Your Eyes in the Digital Age',
    description: 'Expert guidance on preventing and managing digital eye strain from the team at Spark Eye Care.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Computer Vision Syndrome: Protecting Your Eyes in the Digital Age
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              By the time you finish reading this article, you'll have spent another seven minutes looking at a screen. For most Americans, that's just a tiny fraction of the 10 to 12 hours per day we spend staring at digital devices. Our eyes, however, weren't designed for this marathon of focused screen time—and they're letting us know.
            </p>
            <p className="mb-6">
              If you've ever ended a workday with tired, dry, or burning eyes, blurred vision, or a nagging headache, you're not alone. You're experiencing Computer Vision Syndrome (CVS), a modern epidemic affecting an estimated 60 million people worldwide. The good news? Understanding what's happening to your eyes is the first step toward meaningful relief.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Computer Vision Syndrome?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Computer Vision Syndrome, also called Digital Eye Strain, is a collection of eye and vision problems that result from prolonged use of computers, tablets, smartphones, and other digital devices. Unlike traditional reading materials, digital screens present unique challenges for our visual system.
            </p>
            <p className="mb-6">
              When we look at screens, our eyes work harder than usual. The letters on a screen aren't as sharply defined as printed text, the contrast between text and background is reduced, and the presence of glare and reflections makes viewing more difficult. Additionally, the distance and angle at which we view screens is often less than ideal for our eyes' natural focusing ability.
            </p>
            <p className="mb-6">
              The American Optometric Association recognizes CVS as a significant occupational health concern, particularly as remote work and digital learning have intensified our screen dependence. Studies show that between 50% and 90% of people who work at computers experience at least some symptoms of eye strain.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Symptoms: Is Your Digital Life Taking a Toll?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Computer Vision Syndrome manifests through a variety of symptoms that can range from mildly annoying to significantly disruptive. The intensity typically correlates with the amount of screen time—the longer you look at digital devices, the more pronounced the symptoms become.
            </p>
            <p className="mb-6">
              The most commonly reported symptoms include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eye strain or fatigue that worsens as the day progresses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dry, burning, or itchy eyes due to reduced blink rate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Blurred vision when looking at the screen or after looking away</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Headaches, particularly around the temples or forehead</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Neck, shoulder, and back pain from poor posture</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty focusing or double vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased sensitivity to light</span>
              </li>
            </ul>
            <p className="mb-6">
              These symptoms often improve with rest away from screens, but for many people, avoiding digital devices simply isn't realistic given work and lifestyle demands. That's why prevention and management strategies are essential.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Studies show that between 50% and 90% of people who work at computers experience at least some symptoms of eye strain. The digital age has created a new category of occupational health concern."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Screens Are So Hard on Your Eyes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding the underlying causes of Computer Vision Syndrome can help you appreciate why simple interventions make such a difference. Several factors contribute to digital eye strain:
            </p>
            <p className="mb-6">
              <strong>Reduced Blink Rate:</strong> Normally, we blink about 15 to 20 times per minute, which keeps our eyes lubricated and comfortable. Research shows that when looking at screens, our blink rate can drop by as much as 50%, leading to dry, irritated eyes. This reduction occurs partly because we're concentrating intensely and partly because we tend to open our eyes wider when viewing screens.
            </p>
            <p className="mb-6">
              <strong>Focusing Demand:</strong> Your eyes contain muscles that adjust the lens to focus on objects at varying distances. When you stare at a screen for extended periods, these muscles must maintain constant contraction, leading to fatigue. This is similar to how your arm would feel if you held it in one position for hours.
            </p>
            <p className="mb-6">
              <strong>Blue Light Exposure:</strong> Digital devices emit high-energy visible (HEV) blue light, which has a shorter wavelength and higher energy than other visible light. While research is ongoing, some studies suggest that prolonged exposure to blue light may contribute to eye strain and potentially affect sleep patterns when exposure occurs in the evening.
            </p>
            <p className="mb-6">
              <strong>Screen Characteristics:</strong> Unlike printed pages with crisp, black letters on white backgrounds, screens display images made up of pixels that are brightest at the center and dimmer on the edges. This makes it harder for your eyes to maintain focus, forcing them to work harder and causing more fatigue.
            </p>
            <p className="mb-6">
              <strong>Poor Ergonomics:</strong> The position of your screen, your posture, and your workspace lighting all play crucial roles in visual comfort. Improper setup forces your eyes and body into unnatural positions, compounding strain.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Strategies for Relief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that Computer Vision Syndrome is highly preventable and manageable with the right strategies. Here are evidence-based approaches recommended by eye care professionals:
            </p>
            
            <p className="mb-4 font-semibold">Follow the 20-20-20 Rule</p>
            <p className="mb-6">
              Every 20 minutes, take a 20-second break and look at something 20 feet away. This simple exercise relaxes your focusing muscles and reduces fatigue. Set a timer or use an app to remind yourself—it's easy to get absorbed in work and forget.
            </p>

            <p className="mb-4 font-semibold">Optimize Your Workspace</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Position your screen 20 to 26 inches from your eyes, slightly below eye level</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduce glare by adjusting lighting or using an anti-glare screen filter</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Adjust screen brightness to match your surrounding environment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increase text size to reduce focusing effort</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep reference materials at the same distance and height as your screen</span>
              </li>
            </ul>

            <p className="mb-4 font-semibold">Blink More Often and Keep Eyes Moist</p>
            <p className="mb-6">
              Make a conscious effort to blink fully and regularly while using screens. Consider using artificial tears or lubricating eye drops, especially if you're in a dry environment or have underlying dry eye issues. Position air vents away from your face to prevent airflow from drying your eyes further.
            </p>

            <p className="mb-4 font-semibold">Consider Computer Glasses</p>
            <p className="mb-6">
              Even if you don't normally wear glasses, computer glasses with specialized lenses can reduce eye strain. These lenses are optimized for the intermediate distance of computer screens and may include anti-reflective coatings and blue light filters. If you wear corrective lenses, consider getting a prescription specifically for computer work.
            </p>

            <p className="mb-4 font-semibold">Get Regular Eye Exams</p>
            <p className="mb-6">
              Annual comprehensive eye exams ensure that your prescription is current and allow your eye care professional to assess your visual demands and recommend appropriate solutions. Be sure to mention how much time you spend on digital devices during your exam.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Most at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone who uses digital devices regularly can develop Computer Vision Syndrome, certain groups face higher risk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Office workers and students</strong> who spend multiple hours daily on computers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>People with uncorrected vision problems</strong> who strain harder to see clearly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Individuals over 40</strong> experiencing presbyopia (age-related difficulty focusing up close)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Those with existing eye conditions</strong> such as dry eye or binocular vision problems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>People in poor lighting conditions</strong> or with improperly positioned workstations</span>
              </li>
            </ul>
            <p className="mb-6">
              Children and teenagers are increasingly at risk as digital learning and recreational screen time have surged. Research shows that childhood screen habits may contribute to progressive myopia (nearsightedness) and establish patterns of eye strain that continue into adulthood.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While many cases of Computer Vision Syndrome respond well to self-care measures, certain situations warrant a professional evaluation:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms persist despite implementing preventive strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You experience worsening or sudden changes in vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eye strain significantly affects your work performance or quality of life</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You haven't had a comprehensive eye exam in over a year</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You develop persistent headaches or neck pain</span>
              </li>
            </ul>
            <p className="mb-6">
              An eye care professional can conduct a comprehensive evaluation that goes beyond a standard vision screening. This examination assesses how well your eyes focus, move, and work together, as well as evaluating the health of your eyes and your need for corrective lenses optimized for computer work.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              In our increasingly digital world, Computer Vision Syndrome is not just an inconvenience—it's a health concern that affects millions of people daily. The demands we place on our eyes have never been greater, but neither has our understanding of how to protect them.
            </p>
            <p className="mb-6">
              You don't have to accept digital eye strain as an inevitable part of modern life. With awareness, preventive strategies, and professional guidance when needed, you can maintain comfortable, healthy vision even in our screen-dominated age. Your eyes work hard for you every day—taking steps to care for them is an investment in your long-term wellbeing and quality of life.
            </p>
            <p className="mb-6 font-semibold">
              If you're experiencing symptoms of Computer Vision Syndrome, our team at Spark Eye Care is here to help. We offer comprehensive evaluations and personalized recommendations to keep your eyes comfortable and healthy in the digital age.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based patient education and exceptional eye care to our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Dry Eye: Causes and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the common causes of dry eye syndrome and discover effective treatment strategies for lasting relief.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Blue Light and Your Eyes: Separating Fact from Fiction
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the science behind blue light exposure and learn evidence-based strategies to protect your vision.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Workplace Health</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Setting Up an Eye-Healthy Workspace
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical tips for optimizing your workstation ergonomics and lighting to reduce eye strain and improve comfort.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you maintain healthy, comfortable vision in the digital age.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}