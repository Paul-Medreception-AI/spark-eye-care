import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presbyopia: Why Everyone Eventually Needs Reading Glasses | Spark Eye Care',
  description: 'Discover why presbyopia affects everyone after age 40, how the aging eye loses focusing power, and what solutions work best for near vision correction.',
  openGraph: {
    title: 'Presbyopia: Why Everyone Eventually Needs Reading Glasses',
    description: 'Discover why presbyopia affects everyone after age 40, how the aging eye loses focusing power, and what solutions work best for near vision correction.',
    url: 'https://www.sparkeyetx.com/blog/presbyopia-why-everyone-eventually-needs-reading-glasses',
    siteName: 'Spark Eye Care',
    type: 'article',
    images: [
      {
        url: 'https://www.sparkeyetx.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spark Eye Care'
      }
    ]
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-center text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>
          
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Presbyopia: Why Everyone Eventually Needs Reading Glasses
          </h1>
          
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

      <article className="bg-white py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              You're sitting at your favorite restaurant, excited to order, when you realize the menu is just slightly too close to read comfortably. You extend your arm—once, twice—trying to find that sweet spot where the words come into focus. If this sounds familiar, you're not alone. Welcome to presbyopia, the universal aging process that eventually affects every human eye.
            </p>

            <p className="mb-6">
              The moment when you first hold reading material at arm's length is often met with surprise, frustration, or even denial. "I've always had perfect vision," many patients tell us. "Why is this happening now?" The truth is both humbling and reassuring: presbyopia isn't a disease or a failure of your eyes—it's a natural part of the aging process that affects everyone, typically beginning in the early to mid-40s.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              What Is Presbyopia?
            </h2>

            <p className="mb-6">
              Presbyopia comes from the Greek words "presbys" (old man) and "opia" (eye), but don't let the name fool you—this condition has nothing to do with being "old." It's simply the gradual loss of your eye's ability to focus on nearby objects, a process that begins in childhood and becomes noticeable around age 40.
            </p>

            <p className="mb-6">
              Inside your eye sits a remarkable structure called the crystalline lens. This lens is flexible and changes shape to help you focus on objects at varying distances—a process called accommodation. When you're young, the lens is soft and elastic, easily adjusting from distance vision to reading a text message. But as you age, the lens gradually becomes less flexible, like a rubber band losing its stretch over time.
            </p>

            <p className="mb-6">
              By your early 40s, the lens has stiffened enough that the ciliary muscles surrounding it can no longer squeeze it into the shape needed for clear near vision. The result? Blurred vision when reading, working on a computer, or doing close-up tasks. This is presbyopia—not a disease, but an inevitable biological change.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Presbyopia affects 100% of people by age 50. It's not a matter of if, but when—and being prepared makes all the difference in maintaining quality of life."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              The Science Behind the Inevitable
            </h2>

            <p className="mb-6">
              Research has shown that the lens of the eye grows throughout life, adding layers like tree rings. Each year, new lens fibers are laid down on top of older ones, gradually compacting the center and reducing flexibility. By age 40, the cumulative effect becomes functionally significant.
            </p>

            <p className="mb-6">
              Studies published in ophthalmology journals have documented this progression with remarkable consistency across populations. One landmark study found that accommodation amplitude—the eye's focusing power—decreases linearly with age, from about 15 diopters at age 10 to less than 2 diopters by age 50. This decline continues throughout life, which is why your first pair of reading glasses likely won't be your last.
            </p>

            <p className="mb-6">
              Interestingly, presbyopia affects everyone regardless of whether they were previously nearsighted, farsighted, or had perfect vision. However, the way it manifests can differ. Someone who was nearsighted their whole life might suddenly find they can see up close without glasses—but only if they remove their distance glasses. Meanwhile, someone with lifelong perfect distance vision will notice near blur more acutely.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Common Signs and Symptoms
            </h2>

            <p className="mb-6">
              Presbyopia typically announces itself gradually, then suddenly. Many people experience these telltale signs:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Holding reading material at arm's length to see it clearly</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Eyestrain or headaches after reading or doing close work</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Needing brighter light when reading or working up close</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Difficulty reading small print, such as medication labels or restaurant menus</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fatigue from activities that require near focus, like sewing or smartphone use</span>
              </div>
            </div>

            <p className="mb-6">
              These symptoms often worsen in dim lighting or when you're tired. Many people first notice the problem when trying to read in bed at night or checking their phone first thing in the morning.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Your Options: From Simple to Sophisticated
            </h2>

            <p className="mb-6">
              The good news? Presbyopia is one of the most easily corrected vision problems. Today's solutions range from simple and affordable to technologically advanced, depending on your lifestyle and preferences.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Reading Glasses:</strong> The classic solution—inexpensive, effective, and available everywhere. Over-the-counter readers work well if you only need them occasionally and don't have other vision issues. However, a prescription pair from your eye care provider ensures proper lens quality, accurate power for each eye, and correct pupillary distance.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Bifocals and Trifocals:</strong> These lenses have distinct zones for different distances. While they've been around for centuries (Benjamin Franklin invented bifocals in the 1780s), they're still effective for people who need correction at multiple distances throughout the day.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Progressive Lenses:</strong> The modern alternative to lined bifocals, progressives provide a smooth transition between distance, intermediate, and near vision. There's a learning curve, but most people adapt within a few days and appreciate the seamless vision correction.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Multifocal Contact Lenses:</strong> Yes, contacts for presbyopia exist! These work through various optical designs that allow simultaneous or alternating vision at different distances. Success rates vary, but they're worth exploring if you prefer contacts.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Monovision:</strong> This approach corrects one eye for distance and the other for near. It can be achieved with contact lenses or even laser surgery. The brain learns to select the appropriate eye for each task. While it's not for everyone, about 60-70% of people adapt successfully.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Surgical Options:</strong> For those seeking a more permanent solution, procedures like refractive lens exchange or corneal inlays offer alternatives. These are typically considered for people over 50 who also have early cataracts or other refractive errors.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Living Well with Presbyopia
            </h2>

            <p className="mb-6">
              Accepting that you need reading glasses doesn't mean accepting limitations. With proper correction and some practical adjustments, most people find presbyopia has minimal impact on their daily life. Here are strategies that make a difference:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Optimize lighting:</strong> Good illumination reduces eyestrain and can partially compensate for focusing difficulties. Use task lighting for reading and close work.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Keep multiple pairs handy:</strong> Stash reading glasses in your car, bedside table, office, and favorite reading chair. Inexpensive backup pairs prevent frustration.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Adjust screen settings:</strong> Increase font size on your devices, adjust screen brightness, and maintain proper viewing distance (20-26 inches for computers).</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Take regular breaks:</strong> Follow the 20-20-20 rule—every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye fatigue.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Schedule regular eye exams:</strong> Your prescription will likely change every few years as presbyopia progresses. Annual comprehensive exams ensure optimal correction and eye health monitoring.</span>
              </div>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Seek Professional Help
            </h2>

            <p className="mb-6">
              While presbyopia itself is harmless, it's important to have a comprehensive eye examination rather than simply buying drugstore readers. Here's why professional evaluation matters:
            </p>

            <p className="mb-6">
              First, over-the-counter readers provide the same power in both eyes and don't account for astigmatism or differences between your eyes. A prescription ensures each eye receives the precise correction it needs. Second, symptoms that seem like simple presbyopia could indicate other conditions—cataracts, glaucoma, or retinal issues—that require treatment. Third, a comprehensive exam includes important health screenings that can detect diabetes, high blood pressure, and other systemic conditions visible in the eye.
            </p>

            <p className="mb-6">
              Schedule an eye exam if you're experiencing near vision difficulties, especially if you're over 40 and haven't had an exam in more than two years. It's also important to seek care if you experience sudden changes in vision, eye pain, seeing flashes of light or floaters, or double vision—these symptoms may indicate something beyond presbyopia.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Getting your first pair of reading glasses is a rite of passage, not a failing. It's your eyes' way of telling you they've served you faithfully for four decades—and with a little help, they'll continue serving you well for decades more."
            </div>

            <p className="mb-6">
              Presbyopia is one of the great equalizers of human experience. CEOs and construction workers, marathon runners and couch potatoes, people who've cared meticulously for their eyes and those who've taken them for granted—all eventually reach for reading glasses. Rather than seeing it as a limitation, consider it an opportunity to optimize your vision for the next chapter of life.
            </p>

            <p className="mb-6">
              The technology and options available today mean that presbyopia doesn't have to slow you down or compromise your lifestyle. With the right correction and professional guidance, you can continue doing everything you love—reading, working, crafting, using technology—with comfort and clarity.
            </p>

            <p className="mb-6">
              If you're noticing the telltale signs of presbyopia, don't wait until frustration peaks or eyestrain becomes chronic. Schedule a comprehensive eye examination to explore your options and find the solution that best fits your life. Our team specializes in helping patients navigate this transition with expertise, empathy, and personalized care.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
              Written by the Spark Eye Care Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based patient education and compassionate care.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16 animate-fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn what happens during a complete eye examination and why regular checkups matter at every age.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Choosing the Right Eyeglasses for Your Lifestyle
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Navigate lens options, frame styles, and coatings to find eyewear that matches your daily activities.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Protecting Your Eyes as You Age
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover proactive strategies for maintaining optimal eye health and preventing age-related vision conditions.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Our team is here to help you find the perfect vision solution for your lifestyle.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}