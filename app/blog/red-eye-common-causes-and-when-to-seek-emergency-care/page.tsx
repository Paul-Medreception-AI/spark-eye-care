import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Red Eye: Common Causes and When to Seek Emergency Care | Spark Eye Care',
  description: 'Learn about the common causes of red eyes, warning signs of serious conditions, and when to seek emergency eye care from the experts at Spark Eye Care.',
  openGraph: {
    title: 'Red Eye: Common Causes and When to Seek Emergency Care',
    description: 'Learn about the common causes of red eyes, warning signs of serious conditions, and when to seek emergency eye care from the experts at Spark Eye Care.',
    url: 'https://www.sparkeyetx.com/blog/red-eye-common-causes-and-when-to-seek-emergency-care',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function RedEyeBlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Red Eye: Common Causes and When to Seek Emergency Care
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6 text-lg">
              You wake up, look in the mirror, and notice your eye is bright red. Your heart skips a beat. Is this serious? Should you rush to the emergency room? Red eyes are one of the most common eye complaints, affecting millions of people each year. While most cases are harmless and resolve on their own, some red eyes signal serious conditions that require immediate medical attention. Understanding the difference can protect your vision and give you peace of mind.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              What Causes a Red Eye?
            </h2>
            
            <p className="mb-6">
              Red eye occurs when blood vessels on the surface of your eye become dilated or inflamed. This can happen for dozens of reasons, ranging from benign irritation to vision-threatening emergencies. The eye is a delicate organ with a rich blood supply, making it particularly sensitive to inflammation, infection, injury, and changes in pressure.
            </p>

            <p className="mb-6">
              The redness you see is essentially your eye's alarm system—a visible sign that something has disrupted the normal state of your ocular tissues. Sometimes it's as simple as staying up too late or forgetting to remove your contact lenses. Other times, it's your body signaling that professional intervention is needed immediately.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Common Non-Emergency Causes of Red Eyes
            </h2>

            <p className="mb-6">
              Most red eyes fall into the non-emergency category. These conditions, while uncomfortable, typically don't threaten your vision and often improve with simple home care or over-the-counter treatments:
            </p>

            <div className="mb-6">
              <p className="font-semibold text-[var(--color-ink)] mb-2">Conjunctivitis (Pink Eye)</p>
              <p className="mb-4">
                One of the most common causes of red eye, conjunctivitis can be viral, bacterial, or allergic. Viral and bacterial conjunctivitis are contagious and often accompanied by discharge, while allergic conjunctivitis typically causes itching and watering without fever or significant pain.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Subconjunctival Hemorrhage</p>
              <p className="mb-4">
                This dramatic-looking condition occurs when a small blood vessel breaks beneath the clear surface of your eye, creating a bright red patch. Despite its alarming appearance, it's usually harmless and resolves within one to two weeks. It can happen from sneezing, coughing, straining, or even for no apparent reason.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Dry Eye Syndrome</p>
              <p className="mb-4">
                Chronic dryness leads to inflammation and redness, often worsening throughout the day. This is increasingly common due to prolonged screen time, air conditioning, and aging. Symptoms include burning, grittiness, and paradoxically, excessive watering.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Environmental Irritants</p>
              <p className="mb-4">
                Smoke, chlorine, pollution, wind, dust, and allergens can all cause temporary redness. Contact lens overwear or sleeping in lenses not designed for overnight use commonly triggers red, irritated eyes.
              </p>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Not all red eyes are created equal. While most are minor inconveniences, knowing the warning signs of serious conditions can be the difference between preserving and losing your vision."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Emergency Eye Conditions: When Red Eye Demands Immediate Care
            </h2>

            <p className="mb-6">
              Certain red eye presentations require urgent evaluation by an eye care professional or emergency department. These conditions can lead to permanent vision loss if not treated promptly:
            </p>

            <div className="mb-6">
              <p className="font-semibold text-[var(--color-ink)] mb-2">Acute Angle-Closure Glaucoma</p>
              <p className="mb-4">
                This medical emergency occurs when fluid pressure inside the eye rises rapidly, causing severe pain, blurred vision, seeing halos around lights, nausea, and vomiting. The eye appears red and the pupil may look mid-dilated and non-reactive. Without immediate treatment, permanent vision loss can occur within hours.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Corneal Ulcer or Infection</p>
              <p className="mb-4">
                Bacterial, fungal, or parasitic infections of the cornea cause severe pain, light sensitivity, discharge, and a red eye. Contact lens wearers are at particular risk. Untreated corneal ulcers can perforate the eye or cause permanent scarring and vision loss.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Uveitis (Internal Eye Inflammation)</p>
              <p className="mb-4">
                Inflammation of the middle layer of the eye causes pain, redness, light sensitivity, and blurred vision. Uveitis can be associated with autoimmune diseases, infections, or trauma, and requires prompt treatment to prevent complications including glaucoma and cataracts.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Eye Trauma or Foreign Body</p>
              <p className="mb-4">
                Any significant injury to the eye, chemical exposure, or penetrating foreign body requires immediate evaluation. Even seemingly minor trauma can hide serious internal damage.
              </p>

              <p className="font-semibold text-[var(--color-ink)] mb-2">Scleritis</p>
              <p className="mb-4">
                Deep, severe inflammation of the white part of the eye causes intense, boring pain that may wake you from sleep, along with redness and light sensitivity. Scleritis is often associated with systemic inflammatory diseases and can threaten the structural integrity of the eye.
              </p>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Red Flags: When to Seek Immediate Care
            </h2>

            <p className="mb-6">
              Seek emergency eye care if you experience any of the following with your red eye:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sudden, severe eye pain or headache</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sudden vision loss, significant blurring, or seeing halos around lights</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Eye injury, chemical exposure, or penetrating foreign body</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Light sensitivity so severe you cannot open your eye in normal light</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Nausea or vomiting accompanying eye pain and redness</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Red eye with discharge and contact lens use (especially overnight wear)</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Red eye following recent eye surgery</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Immunocompromised state with red, painful eye</span>
              </div>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Home Care for Mild Red Eye
            </h2>

            <p className="mb-6">
              If your red eye is mild, painless, and not accompanied by vision changes, you may try home remedies for 24-48 hours before seeking care:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Apply cool compresses for 10-15 minutes several times daily</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use preservative-free artificial tears to soothe irritation</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Remove contact lenses immediately and avoid wearing until symptoms resolve</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Avoid rubbing your eyes, which can worsen inflammation</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Wash hands frequently and avoid sharing towels if infection is suspected</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Give your eyes a break from screens and ensure adequate sleep</span>
              </div>
            </div>

            <p className="mb-6">
              However, if symptoms persist beyond two days, worsen, or you develop any of the red flag symptoms listed above, seek professional evaluation promptly.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Protecting Your Vision: The Importance of Professional Evaluation
            </h2>

            <p className="mb-6">
              While it's tempting to diagnose and treat red eye on your own, professional evaluation is invaluable. Eye care providers have specialized equipment to examine structures inside your eye that you cannot see in the mirror. They can detect early signs of serious conditions, prescribe appropriate medications, and provide guidance tailored to your specific situation.
            </p>

            <p className="mb-6">
              Regular comprehensive eye exams are also important for preventing eye problems before they cause symptoms. Many serious eye conditions, including glaucoma and diabetic retinopathy, develop silently without pain or redness until significant damage has occurred.
            </p>

            <p className="mb-6">
              Remember, your eyes are irreplaceable. When in doubt about a red eye, especially if accompanied by pain, vision changes, or light sensitivity, err on the side of caution and seek professional care. Early intervention can prevent complications, preserve your vision, and provide peace of mind. At Spark Eye Care, we're here to help you navigate these concerns with expertise and compassion, ensuring your eyes remain healthy for a lifetime of clear vision.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">
              Written by the Spark Eye Care Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in comprehensive eye care and medical eye conditions
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn about the causes, symptoms, and treatment options for this common condition affecting millions.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Contact Lens Safety Tips
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Essential guidelines for safe contact lens wear to prevent infections and complications.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Eye Emergencies: What You Need to Know
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Recognizing and responding to eye emergencies that require immediate medical attention.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}