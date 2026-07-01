import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Early Warning Signs of Glaucoma You Shouldn\'t Ignore | Spark Eye Care',
  description: 'Learn to recognize the subtle early warning signs of glaucoma before vision loss occurs. Expert guidance from Spark Eye Care on protecting your sight.',
  openGraph: {
    title: '5 Early Warning Signs of Glaucoma You Shouldn\'t Ignore',
    description: 'Learn to recognize the subtle early warning signs of glaucoma before vision loss occurs.',
    type: 'article',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            5 Early Warning Signs of Glaucoma You Shouldn't Ignore
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine slowly losing your peripheral vision without even noticing. One day you're driving and nearly miss a car in your blind spot. Another day, you bump into a door frame you thought you'd cleared. These seemingly minor incidents could be your eyes sending an urgent message: glaucoma may be silently stealing your sight.
            </p>
            <p className="mb-6">
              Often called the "silent thief of sight," glaucoma is one of the leading causes of irreversible blindness worldwide, affecting more than 3 million Americans. The devastating reality? Up to 40% of vision can be lost before most people even notice symptoms. But here's the empowering truth: when caught early, glaucoma can be managed effectively, preserving your vision for decades to come.
            </p>
            <p>
              Understanding the early warning signs isn't just about knowledge—it's about protecting one of your most precious senses. Let's explore the five critical signals your eyes may be sending you right now.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Glaucoma: The Silent Thief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Glaucoma isn't a single disease but rather a group of eye conditions that damage the optic nerve—the vital connection between your eye and brain. This damage typically occurs when fluid builds up in the front of your eye, increasing intraocular pressure (IOP). Think of it like a garden hose: when pressure builds beyond what the hose can handle, damage occurs.
            </p>
            <p className="mb-6">
              The most common form, open-angle glaucoma, progresses so gradually that you may not experience any symptoms until the disease has reached an advanced stage. Your brain is remarkably good at compensating for small changes, filling in the gaps in your vision until the damage becomes too extensive to ignore.
            </p>
            <p>
              According to the American Academy of Ophthalmology, approximately 50% of people with glaucoma don't even know they have it. This underscores why recognizing subtle warning signs and maintaining regular eye exams is absolutely critical—especially if you're over 40, have a family history of glaucoma, or are of African, Hispanic, or Asian descent.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Sign #1: Gradual Peripheral Vision Loss
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The hallmark early symptom of glaucoma is the slow erosion of your peripheral (side) vision. You might find yourself:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Missing objects or people approaching from the side</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bumping into door frames or furniture more frequently</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty judging distances while driving, especially when changing lanes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Needing to turn your head more to see things that should be in your field of vision</span>
              </li>
            </ul>
            <p>
              This type of vision loss typically affects both eyes but may progress at different rates. Because your central vision remains clear for quite some time, many people don't realize anything is wrong until significant damage has occurred. This is why comprehensive eye exams that include peripheral vision testing are so important—they can catch these changes before you notice them yourself.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The most dangerous thing about glaucoma is that it doesn't hurt. By the time people notice vision loss, irreversible damage has already occurred. Early detection through regular eye exams is your best defense."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Sign #2: Seeing Halos Around Lights
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've noticed rainbow-colored circles or halos around lights—especially at night—this could be an important warning sign. This phenomenon occurs when increased eye pressure affects how light passes through your eye, causing it to scatter and create these distinctive halos.
            </p>
            <p className="mb-6">
              While halos can occasionally result from other conditions like cataracts or simply from having dilated pupils in low light, their presence—particularly when combined with other symptoms—warrants immediate attention. Halos that appear suddenly and are accompanied by eye pain or headache could indicate acute angle-closure glaucoma, a medical emergency requiring immediate treatment.
            </p>
            <p>
              Pay attention to when these halos appear. Are they constant or intermittent? Do they occur more frequently at certain times of day? Documenting these patterns can provide valuable information to your eye care provider.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Sign #3: Difficulty Adjusting to Darkness
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Do you find it increasingly challenging to see when entering a dark room or movie theater? Does it take longer for your eyes to adjust when driving at night? While some difficulty with dark adaptation is normal as we age, glaucoma can significantly worsen this problem.
            </p>
            <p className="mb-6">
              The optic nerve damage caused by glaucoma affects the specialized cells in your retina responsible for low-light vision. As these cells become compromised, your ability to see in dimly lit environments diminishes. You might notice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased difficulty reading in low light conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hesitation when moving from bright sunlight into shaded areas</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Needing more time to navigate unfamiliar spaces in low light</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Anxiety about driving at dusk or after dark</span>
              </li>
            </ul>
            <p>
              This symptom often develops so gradually that you may unconsciously adapt your behavior—avoiding night driving, increasing indoor lighting, or staying home after dark—without recognizing the underlying vision problem.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Sign #4: Frequent Prescription Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you find yourself needing new glasses or contact lens prescriptions more frequently than before—particularly if each change seems significant—this could signal glaucoma-related changes in your eye structure. As intraocular pressure fluctuates or increases, it can alter the shape of your eye, affecting your vision quality.
            </p>
            <p className="mb-6">
              You might experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Blurry vision that doesn't improve with your current prescription</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty focusing on close-up or distant objects</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eyes that feel "different" even with corrected vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>New glasses that only seem effective for a short period</span>
              </li>
            </ul>
            <p>
              While vision changes can result from many causes, rapid or unusual fluctuations should always be evaluated comprehensively. Your eye care provider can measure your intraocular pressure and assess your optic nerve to determine if glaucoma might be contributing to these prescription changes.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Sign #5: Eye Pain and Redness (Acute Symptoms)
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While most glaucoma types develop silently, acute angle-closure glaucoma announces itself dramatically. This medical emergency occurs when the drainage angle in your eye becomes suddenly blocked, causing rapid pressure buildup. Symptoms include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Severe eye pain that may radiate to your head</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Intense redness in the affected eye</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudden blurred or hazy vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nausea and vomiting accompanying the eye pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Seeing rainbow-colored halos around lights</span>
              </li>
            </ul>
            <p className="mb-6">
              This condition requires immediate emergency care—within hours, not days. Permanent vision loss can occur quickly if left untreated. If you experience these symptoms, go to an emergency room or contact an eye care provider immediately. Don't wait to see if symptoms improve on their own.
            </p>
            <p>
              Even chronic glaucoma can occasionally cause mild discomfort, a feeling of pressure behind the eyes, or subtle redness. While these symptoms are less dramatic, they still warrant prompt evaluation, especially if accompanied by any of the other warning signs discussed in this article.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Do If You Notice These Warning Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing these early warning signs is the first step; taking action is what protects your vision. Here's what you should do:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule a comprehensive eye exam:</strong> Don't wait for your next routine appointment if you're experiencing symptoms. Request a comprehensive dilated eye exam that includes tonometry (pressure measurement), ophthalmoscopy (optic nerve examination), perimetry (visual field test), and gonioscopy (drainage angle examination).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Document your symptoms:</strong> Keep a log of when symptoms occur, their severity, and any patterns you notice. This information helps your eye care provider make an accurate diagnosis.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Know your family history:</strong> Glaucoma has a strong hereditary component. Inform your provider if parents, siblings, or other close relatives have been diagnosed with glaucoma.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain regular screening schedules:</strong> Even without symptoms, adults should have comprehensive eye exams every 1-2 years after age 40, or more frequently if you have risk factors for glaucoma.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Don't ignore subtle changes:</strong> Your instincts about your vision are valuable. If something feels "off," even if you can't precisely articulate what, it deserves professional evaluation.</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember, glaucoma treatment is most effective when started early. While damage that has already occurred cannot be reversed, appropriate treatment can slow or halt further progression, preserving your remaining vision for life. Treatment options range from daily eye drops to laser procedures and surgery, all designed to lower intraocular pressure and protect your optic nerve.
            </p>
            <p>
              The good news is that with consistent treatment and monitoring, most people with glaucoma maintain useful vision throughout their lives. The key is catching it before significant damage occurs—which is exactly why recognizing these early warning signs is so crucial.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Your vision is irreplaceable, and glaucoma doesn't have to mean inevitable blindness. By staying informed about these early warning signs and maintaining regular eye care, you're taking powerful steps to protect your sight for the decades ahead.
            </p>
            <p>
              If you've noticed any of these symptoms—or if it's simply been too long since your last comprehensive eye exam—don't wait. Early detection truly is the difference between preserving your vision and living with preventable vision loss. Your future self will thank you for taking action today.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based patient education and comprehensive eye care for the communities we serve.
              </p>
            </div>
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
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Often Should You Get Your Eyes Checked?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn the recommended eye exam schedule for every age and risk level to maintain optimal vision health.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Your Risk Factors for Eye Disease
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover which factors increase your risk for common eye conditions and what you can do to protect your vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect During Your First Glaucoma Appointment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A comprehensive guide to glaucoma testing, diagnosis, and treatment options available to protect your vision.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help. Schedule a comprehensive eye exam to protect your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule an Appointment
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Learn About Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}