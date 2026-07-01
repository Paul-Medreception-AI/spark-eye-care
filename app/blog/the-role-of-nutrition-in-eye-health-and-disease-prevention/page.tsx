import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Nutrition in Eye Health and Disease Prevention | Spark Eye Care',
  description: 'Discover how proper nutrition can protect your vision and prevent eye diseases. Learn which nutrients, vitamins, and foods support long-term eye health from our expert care team.',
  openGraph: {
    title: 'The Role of Nutrition in Eye Health and Disease Prevention | Spark Eye Care',
    description: 'Discover how proper nutrition can protect your vision and prevent eye diseases. Learn which nutrients, vitamins, and foods support long-term eye health from our expert care team.',
    type: 'article',
    publishedTime: '2025-01-15T08:00:00Z',
    authors: ['Spark Eye Care Clinical Team'],
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Role of Nutrition in Eye Health and Disease Prevention
          </h1>

          {/* Meta Information */}
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When it comes to maintaining healthy vision, most people think first about regular eye exams and proper eyewear. While these are undeniably important, there's another powerful factor that often goes overlooked: what you put on your plate. The connection between nutrition and eye health is profound, with research consistently showing that certain nutrients can protect against age-related eye diseases, slow the progression of existing conditions, and support optimal visual function throughout your lifetime.
            </p>
            <p className="mb-6">
              Your eyes are complex organs with unique nutritional needs. From the delicate lens to the light-sensitive retina, every component requires specific vitamins, minerals, and antioxidants to function properly and resist disease. Understanding this relationship between diet and vision isn't just about preventing problems—it's about giving your eyes the best possible foundation for lifelong health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding the Eye-Nutrition Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The human eye is constantly exposed to light, oxygen, and environmental stressors—a combination that generates harmful free radicals. These unstable molecules can damage delicate eye tissues over time, contributing to conditions like cataracts, macular degeneration, and diabetic retinopathy. Antioxidants from our diet neutralize these free radicals, providing a critical line of defense.
            </p>
            <p className="mb-6">
              Beyond antioxidant protection, specific nutrients play structural roles in eye tissue. The retina, which converts light into neural signals, has one of the highest metabolic rates in the body and requires constant nutritional support. The macula, responsible for central vision, contains dense concentrations of specific carotenoids that filter harmful blue light. When these nutrients are in short supply, eye health suffers.
            </p>
            <p className="mb-6">
              Research has identified several key nutrients as particularly important for eye health: lutein, zeaxanthin, omega-3 fatty acids, vitamins C and E, zinc, and beta-carotene. Each plays a unique role, and together they form a comprehensive nutritional defense system for your vision.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Essential Nutrients for Eye Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              <strong>Lutein and Zeaxanthin:</strong> These carotenoids accumulate in the macula and act as natural sunglasses, filtering harmful high-energy blue wavelengths. The landmark Age-Related Eye Disease Study 2 (AREDS2) found that supplementation with lutein and zeaxanthin reduced the risk of advanced age-related macular degeneration. Food sources include leafy greens like kale, spinach, and collard greens, as well as egg yolks, corn, and orange peppers.
            </p>
            <p className="mb-6">
              <strong>Omega-3 Fatty Acids:</strong> DHA, a type of omega-3 fat, is a major structural component of the retina. Studies show that adequate omega-3 intake may reduce the risk of macular degeneration and help manage dry eye syndrome by supporting tear production and reducing inflammation. Cold-water fish like salmon, mackerel, and sardines are excellent sources, as are walnuts, flaxseeds, and chia seeds.
            </p>
            <p className="mb-6">
              <strong>Vitamin C:</strong> This powerful antioxidant is found in high concentrations in the eye, particularly in the aqueous humor. It helps maintain the health of blood vessels in the eye and may reduce the risk of cataracts. Citrus fruits, strawberries, bell peppers, and broccoli are rich sources.
            </p>
            <p className="mb-6">
              <strong>Vitamin E:</strong> Working synergistically with other antioxidants, vitamin E protects eye cells from free radical damage. The AREDS study found that vitamin E, combined with other nutrients, reduced the risk of advanced age-related macular degeneration. Nuts, seeds, and vegetable oils are primary sources.
            </p>
            <p className="mb-6">
              <strong>Zinc:</strong> This essential mineral plays a crucial role in transporting vitamin A from the liver to the retina to produce melanin, a protective pigment. Zinc deficiency has been linked to poor night vision and cloudy cataracts. Oysters, beef, pumpkin seeds, and chickpeas provide substantial amounts.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Your eyes have unique nutritional needs. The right combination of vitamins, minerals, and antioxidants can be your most powerful defense against age-related eye disease."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Nutrition and Specific Eye Conditions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              <strong>Age-Related Macular Degeneration (AMD):</strong> AMD is the leading cause of vision loss in adults over 50. The landmark AREDS and AREDS2 studies demonstrated that specific nutrient combinations can reduce the risk of progression to advanced AMD by 25%. These formulations include vitamins C and E, zinc, copper, lutein, and zeaxanthin. While supplements can help those at high risk, a diet rich in leafy greens, fish, and colorful fruits and vegetables provides these nutrients naturally.
            </p>
            <p className="mb-6">
              <strong>Cataracts:</strong> Research suggests that diets high in antioxidants, particularly vitamins C and E, may reduce the risk of cataract formation. One study found that women who consumed the most vitamin C had a 33% lower risk of cataract progression. A Mediterranean-style diet rich in fruits, vegetables, whole grains, and healthy fats appears particularly protective.
            </p>
            <p className="mb-6">
              <strong>Diabetic Retinopathy:</strong> For people with diabetes, maintaining stable blood sugar through balanced nutrition is critical for preventing diabetic eye disease. Additionally, omega-3 fatty acids may offer protective benefits by reducing inflammation and supporting retinal blood vessel health. Managing overall diet quality, emphasizing whole foods and limiting processed carbohydrates, is essential.
            </p>
            <p className="mb-6">
              <strong>Dry Eye Syndrome:</strong> Omega-3 fatty acids have shown promise in managing dry eye symptoms by improving the quality of tears and reducing ocular surface inflammation. Some studies suggest that increasing dietary omega-3 intake or supplementation may reduce dry eye discomfort and improve tear production.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Building an Eye-Healthy Diet
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Creating a diet that supports eye health doesn't require drastic changes or restrictive eating patterns. Instead, focus on incorporating a variety of nutrient-dense whole foods that provide the vitamins, minerals, and antioxidants your eyes need.
            </p>
            
            <div className="my-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Key Dietary Strategies for Optimal Eye Health:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Eat the rainbow:</strong> Different colored fruits and vegetables provide different beneficial compounds. Dark leafy greens offer lutein and zeaxanthin, orange foods provide beta-carotene, and berries deliver vitamin C and other antioxidants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Include omega-3 rich fish:</strong> Aim for at least two servings per week of fatty fish like salmon, mackerel, sardines, or trout. Plant-based sources like walnuts and flaxseeds also contribute beneficial fats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Choose whole grains:</strong> Refined carbohydrates can spike blood sugar and potentially increase risk of AMD. Whole grains provide steady energy and important nutrients like vitamin E and zinc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Include healthy fats:</strong> Nuts, seeds, avocados, and olive oil help your body absorb fat-soluble vitamins like A, E, and the carotenoids that protect your eyes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Stay hydrated:</strong> Proper hydration supports tear production and helps prevent dry eye symptoms. Aim for at least 8 glasses of water daily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Limit processed foods:</strong> Highly processed foods often lack beneficial nutrients and may contain compounds that promote inflammation and oxidative stress.</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Sample eye-healthy meals might include a spinach and salmon salad with walnuts and citrus dressing, or a colorful stir-fry with bell peppers, broccoli, and shrimp served over brown rice. Even small changes—adding a handful of berries to your breakfast or choosing a mixed green salad instead of fries—can make a meaningful difference over time.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Beyond Diet: Lifestyle Factors That Support Eye Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While nutrition is powerful, it works best as part of a comprehensive approach to eye health. Several lifestyle factors work synergistically with good nutrition to protect your vision:
            </p>
            <p className="mb-6">
              <strong>Maintain a healthy weight:</strong> Obesity increases the risk of diabetes and other conditions that can harm eye health. A nutrient-rich diet naturally supports healthy weight management.
            </p>
            <p className="mb-6">
              <strong>Don't smoke:</strong> Smoking dramatically increases the risk of macular degeneration, cataracts, and optic nerve damage. No amount of nutritional supplementation can offset tobacco's harmful effects on the eyes.
            </p>
            <p className="mb-6">
              <strong>Protect against UV exposure:</strong> Wearing sunglasses that block 100% of UV rays helps prevent cumulative light damage, working alongside internal antioxidant protection from your diet.
            </p>
            <p className="mb-6">
              <strong>Manage chronic conditions:</strong> Keeping diabetes, high blood pressure, and high cholesterol under control—often through diet and medication—is critical for preserving vision.
            </p>
            <p className="mb-6">
              <strong>Get regular eye exams:</strong> Comprehensive eye exams can detect problems early when they're most treatable. Your eye care professional can also provide personalized nutritional recommendations based on your specific risk factors.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Consider Supplements
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While a healthy diet should be your primary source of eye-protective nutrients, supplements can play a role in certain situations. The AREDS2 formulation has strong evidence supporting its use in people with intermediate or advanced age-related macular degeneration in one eye. This specific combination of vitamins C and E, zinc, copper, lutein, and zeaxanthin has been shown to slow disease progression.
            </p>
            <p className="mb-6">
              However, supplements are not a substitute for a healthy diet, nor are they necessary or beneficial for everyone. High-dose supplements can interact with medications and may have side effects. Before starting any supplementation regimen, discuss it with your eye care provider. They can assess your individual risk factors, review your current diet, and recommend whether supplements are appropriate for your situation.
            </p>
            <p className="mb-6">
              For most people without existing eye disease, focusing on getting nutrients from whole foods is the safest and most effective approach. The synergistic effects of compounds in whole foods, along with fiber and other beneficial components, cannot be fully replicated in pill form.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The relationship between nutrition and eye health is clear: what you eat matters for your vision. By choosing a varied, nutrient-rich diet filled with colorful fruits and vegetables, omega-3 rich fish, whole grains, and healthy fats, you're providing your eyes with the tools they need to function optimally and resist disease. Combined with other healthy lifestyle choices and regular professional eye care, good nutrition forms the foundation of lifelong vision health.
            </p>
            <p className="mb-6">
              If you have concerns about your eye health, existing risk factors for eye disease, or questions about whether your diet is supporting your vision, our team at Spark Eye Care is here to help. We can assess your individual needs, provide personalized recommendations, and work with you to develop a comprehensive approach to protecting your precious gift of sight. Contact us today to schedule a consultation and take a proactive step toward healthier eyes.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">Written by the Spark Eye Care Clinical Team</div>
            <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Understanding Age-Related Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn about the leading cause of vision loss in older adults and what you can do to protect your sight.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Prevention</div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How to Prevent Digital Eye Strain
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Practical tips for protecting your eyes in our screen-dominated world and reducing digital fatigue.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                The Importance of Regular Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Why comprehensive eye exams are essential for detecting problems early and maintaining healthy vision.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}