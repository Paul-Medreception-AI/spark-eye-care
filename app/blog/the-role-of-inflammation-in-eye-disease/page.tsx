import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Inflammation in Eye Disease | Spark Eye Care',
  description: 'Learn how inflammation affects eye health, common inflammatory eye conditions, and evidence-based strategies to protect your vision from chronic inflammation.',
  keywords: 'eye inflammation, uveitis, dry eye disease, inflammatory eye conditions, eye health, chronic inflammation, ocular inflammation',
  openGraph: {
    title: 'The Role of Inflammation in Eye Disease | Spark Eye Care',
    description: 'Learn how inflammation affects eye health, common inflammatory eye conditions, and evidence-based strategies to protect your vision from chronic inflammation.',
    type: 'article',
    url: 'https://sparkeyetx.com/blog/the-role-of-inflammation-in-eye-disease',
  }
}

export default function BlogPost() {
  return (
    <main>
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
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            The Role of Inflammation in Eye Disease
          </h1>

          {/* Meta Info */}
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
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Your eyes are more than windows to your soul—they're sensitive organs constantly working to process the world around you. When inflammation strikes, it can disrupt this delicate system, leading to discomfort, vision changes, and in some cases, permanent damage. Understanding how inflammation affects your eyes is the first step toward protecting your vision and maintaining optimal eye health.
            </p>
            <p>
              Inflammation is your body's natural defense mechanism, but when it occurs in the eyes, it requires careful attention. From common conditions like dry eye to more serious diseases like uveitis, inflammation plays a central role in many ocular disorders. Let's explore what you need to know about this critical aspect of eye health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Ocular Inflammation?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Ocular inflammation refers to the swelling and irritation of various structures within and around the eye. When your immune system detects a threat—whether from infection, injury, autoimmune response, or environmental irritants—it triggers an inflammatory response designed to protect and heal the affected tissue.
            </p>
            <p className="mb-4">
              In the eyes, this response can manifest in multiple ways. The conjunctiva (the clear membrane covering the white of your eye) may become red and swollen. The uvea (the middle layer of the eye containing blood vessels) can become inflamed, a condition known as uveitis. Even the cornea, the clear front surface of your eye, can experience inflammatory damage.
            </p>
            <p>
              While acute inflammation is typically a helpful healing response, chronic inflammation can cause lasting damage to delicate eye tissues. The key is recognizing when inflammation requires professional intervention and understanding the underlying causes that may be driving the inflammatory process.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Inflammatory Eye Conditions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Several eye conditions are directly linked to inflammatory processes. Understanding these can help you recognize symptoms and seek timely care:
            </p>
            <p className="mb-4">
              <strong>Dry Eye Disease</strong> is one of the most prevalent inflammatory eye conditions. When your tears don't provide adequate lubrication, the surface of your eye becomes irritated and inflamed. This creates a vicious cycle: inflammation reduces tear quality, which causes more inflammation. Millions of Americans experience this condition, often exacerbated by screen time, environmental factors, and aging.
            </p>
            <p className="mb-4">
              <strong>Uveitis</strong> involves inflammation of the uvea, the pigmented middle layer of the eye. This serious condition can result from autoimmune disorders, infections, or trauma. Left untreated, uveitis can lead to complications including glaucoma, cataracts, and permanent vision loss. Symptoms often include eye redness, pain, light sensitivity, and blurred vision.
            </p>
            <p className="mb-4">
              <strong>Blepharitis</strong> is inflammation of the eyelids, typically affecting the area where eyelashes grow. This chronic condition causes red, swollen eyelids and can lead to uncomfortable crusting along the lash line. Bacterial overgrowth and dysfunction of the oil glands in the eyelids drive the inflammatory response.
            </p>
            <p>
              <strong>Keratitis</strong> refers to inflammation of the cornea, often triggered by infection, injury, or prolonged contact lens wear. Because the cornea is crucial for focusing light, inflammation here can significantly impact vision quality and requires prompt medical attention.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Chronic inflammation in the eyes isn't just uncomfortable—it can progressively damage delicate structures responsible for clear vision. Early intervention makes all the difference."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Connection Between Systemic Inflammation and Eye Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Your eyes don't exist in isolation—they're part of your overall health system. Chronic systemic inflammation from conditions like rheumatoid arthritis, lupus, inflammatory bowel disease, and diabetes can all manifest in the eyes.
            </p>
            <p className="mb-4">
              Research shows that people with autoimmune conditions have significantly higher rates of inflammatory eye disease. The inflammatory markers circulating in your bloodstream can affect the delicate blood vessels and tissues in your eyes, making them more vulnerable to damage.
            </p>
            <p className="mb-4">
              Diabetic retinopathy, one of the leading causes of blindness in working-age adults, is fundamentally an inflammatory disease. High blood sugar triggers inflammatory pathways that damage the small blood vessels in the retina, leading to leakage, swelling, and eventually vision loss if not properly managed.
            </p>
            <p>
              This connection underscores the importance of a holistic approach to eye care. Managing your overall health—including chronic conditions, diet, and lifestyle factors—directly impacts your eye health and can help reduce inflammatory burden throughout your body, including your eyes.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Approaches to Managing Eye Inflammation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Modern eye care offers multiple strategies for managing inflammatory conditions, tailored to the specific type and severity of inflammation you're experiencing.
            </p>
            <p className="mb-4">
              <strong>Medical treatments</strong> often include anti-inflammatory eye drops, which may contain corticosteroids or non-steroidal anti-inflammatory drugs (NSAIDs). For more severe or chronic conditions, your eye care provider might recommend immunosuppressive medications, biologic therapies, or specialized procedures to manage inflammation and prevent complications.
            </p>
            <p className="mb-4">
              <strong>Lifestyle modifications</strong> play a crucial role in managing inflammatory eye conditions. Research demonstrates that omega-3 fatty acids, found in fish oil and certain plant sources, can help reduce ocular surface inflammation. Adequate hydration, limiting screen time with regular breaks, and using humidifiers in dry environments can all help reduce inflammatory triggers.
            </p>
            <p className="mb-4">
              <strong>Advanced therapies</strong> continue to emerge based on our growing understanding of inflammatory pathways. Punctal plugs for severe dry eye, intense pulsed light therapy for meibomian gland dysfunction, and targeted biologic medications for uveitis represent just some of the innovative approaches now available.
            </p>
            <p>
              The most effective approach combines professional medical care with consistent self-management. Your eye care team can develop a personalized treatment plan that addresses your specific inflammatory condition while considering your overall health and lifestyle.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing Warning Signs: When to Seek Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              Knowing when to seek professional help can prevent minor inflammation from progressing to serious complications. Watch for these warning signs:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Persistent redness</strong> that doesn't improve after a day or two, especially if accompanied by discharge</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Eye pain</strong> that is moderate to severe, or pain that worsens with eye movement</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Light sensitivity</strong> that makes it difficult to be in normally lit environments</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Vision changes</strong> including blurriness, floaters, or decreased visual clarity</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Chronic symptoms</strong> like dryness, irritation, or burning that persist despite over-the-counter treatments</p>
              </div>
            </div>

            <p>
              If you have an existing autoimmune condition or diabetes, regular comprehensive eye exams are essential even without symptoms. Many inflammatory eye conditions can develop silently, and early detection through professional screening offers the best chance for successful treatment and vision preservation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Prevention Strategies: Protecting Your Eyes from Inflammation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              While not all inflammatory eye conditions can be prevented, you can take proactive steps to reduce your risk and minimize inflammatory triggers:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Practice good hygiene:</strong> Wash your hands frequently and avoid touching your eyes unnecessarily</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Follow contact lens care guidelines:</strong> Never overwear lenses or sleep in them unless specifically designed for extended wear</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Protect your eyes from UV exposure:</strong> Wear quality sunglasses with UV protection when outdoors</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Manage screen time:</strong> Follow the 20-20-20 rule—every 20 minutes, look at something 20 feet away for 20 seconds</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain a healthy diet:</strong> Include anti-inflammatory foods rich in omega-3s, vitamins A, C, and E</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Stay hydrated:</strong> Adequate water intake supports healthy tear production</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Manage systemic conditions:</strong> Control diabetes, autoimmune disorders, and other health conditions that can affect eye health</p>
              </div>
            </div>

            <p>
              Remember that prevention is a partnership between you and your eye care team. Regular comprehensive eye exams allow your provider to detect early signs of inflammation before they become symptomatic, giving you the best opportunity for effective intervention.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              Inflammation in the eyes is more than just an inconvenience—it's a signal that something requires attention. Whether you're dealing with chronic dry eye, recovering from an eye injury, or managing an inflammatory condition, understanding the role of inflammation empowers you to take appropriate action.
            </p>
            <p className="mb-4">
              The good news is that with proper diagnosis and treatment, most inflammatory eye conditions can be effectively managed. Advances in medical therapies, combined with lifestyle modifications and preventive care, offer real hope for preserving vision and maintaining comfortable, healthy eyes throughout your lifetime.
            </p>
            <p>
              If you're experiencing symptoms of eye inflammation or have concerns about your eye health, don't wait. Early intervention is key to preventing complications and protecting your vision. Our team at Spark Eye Care is here to provide the specialized care you need, with a comprehensive approach that considers your unique health situation and visual needs.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Dry Eye Disease: Causes and Solutions
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore the underlying causes of dry eye and discover effective treatment options for lasting relief.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Nutrition for Healthy Eyes: Foods That Protect Your Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn which nutrients and foods support long-term eye health and may help prevent inflammatory conditions.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  When to See an Eye Doctor: Signs You Shouldn't Ignore
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Recognize the warning signs that indicate it's time to schedule a comprehensive eye examination.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
            >
              View All Resources
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}