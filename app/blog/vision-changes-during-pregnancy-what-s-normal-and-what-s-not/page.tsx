import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vision Changes During Pregnancy: What\'s Normal and What\'s Not | Spark Eye Care',
  description: 'Learn about common vision changes during pregnancy, warning signs to watch for, and when to seek professional eye care. Expert guidance from Spark Eye Care.',
  keywords: 'pregnancy vision changes, blurred vision pregnancy, eye health pregnancy, gestational diabetes vision, preeclampsia vision symptoms',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Vision Changes During Pregnancy: What's Normal and What's Not
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pregnancy brings countless changes to your body—some expected, others surprising. Among the lesser-known transformations are the changes to your vision. While many pregnant individuals experience some degree of visual change, knowing what's normal and what requires immediate attention can help protect both your eye health and overall wellbeing during this important time.
            </p>
            <p className="mb-6">
              If you've noticed that your glasses don't seem quite right, your eyes feel drier than usual, or you're experiencing occasional blurriness, you're not alone. Hormonal shifts, fluid retention, and increased blood volume all play a role in how your eyes function during pregnancy. Understanding these changes empowers you to distinguish between typical pregnancy-related vision fluctuations and symptoms that warrant professional evaluation.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Does Pregnancy Affect Vision?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              During pregnancy, your body undergoes profound hormonal changes that affect virtually every system, including your eyes. Increased levels of estrogen and progesterone can alter the thickness and curvature of your cornea—the clear front surface of your eye. These changes can temporarily shift your prescription, making your current glasses or contact lenses feel less effective.
            </p>
            <p className="mb-6">
              Additionally, fluid retention doesn't just affect your ankles. The extra fluid circulating through your body can cause slight swelling in your eyes, changing their shape and focusing ability. Blood volume increases by up to 50% during pregnancy, which can affect the tiny blood vessels in your eyes and lead to changes in visual clarity.
            </p>
            <p className="mb-6">
              These physiological adaptations are your body's way of supporting your growing baby, but they can have temporary side effects on your vision. Most of these changes are benign and resolve within a few months after delivery, though some may persist while breastfeeding due to continued hormonal influences.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Normal Vision Changes During Pregnancy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Several vision changes are considered normal and expected during pregnancy. Recognizing these can help you feel confident that what you're experiencing is part of the natural process:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Mild blurriness or prescription changes:</strong> Your cornea may thicken slightly, temporarily changing your refractive error. This is why eye care professionals typically recommend waiting until after pregnancy to update prescriptions or undergo vision correction surgery.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Dry eyes:</strong> Hormonal changes can reduce tear production, leading to discomfort, a gritty sensation, or intermittent blurred vision. This is especially common during the third trimester.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Increased light sensitivity:</strong> Many pregnant individuals notice they're more sensitive to bright lights or glare, particularly in the later stages of pregnancy.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Contact lens discomfort:</strong> Changes in corneal shape and decreased tear production can make contact lenses feel uncomfortable. Many people switch to glasses during pregnancy.
                </div>
              </div>
            </div>

            <p className="mb-6">
              These changes typically begin in the first or second trimester and gradually resolve after delivery. If you're breastfeeding, some changes may persist until you wean, as hormones continue to fluctuate during lactation.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <blockquote className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "While many vision changes during pregnancy are temporary and benign, some symptoms can signal serious conditions that require immediate attention. Knowing the difference can protect both you and your baby."
            </blockquote>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Warning Signs That Require Immediate Attention
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While most pregnancy-related vision changes are harmless, certain symptoms can indicate serious complications such as preeclampsia, gestational diabetes, or other conditions that require urgent medical care. Contact your healthcare provider immediately if you experience any of these warning signs:
            </p>
            
            <div className="space-y-4 my-6 bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <strong>Sudden vision loss or significant blurring</strong>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <strong>Seeing spots, floaters, or flashing lights</strong>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <strong>Double vision or loss of peripheral vision</strong>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <strong>Vision changes accompanied by severe headache, facial swelling, or upper abdominal pain</strong>
                </div>
              </div>
            </div>

            <p className="mb-6">
              These symptoms can indicate preeclampsia, a serious pregnancy complication characterized by high blood pressure and potential organ damage. Preeclampsia affects approximately 5-8% of pregnancies and can develop suddenly, even in individuals with no prior risk factors. Visual symptoms often include seeing spots or sparkles, temporary vision loss, light sensitivity, or blurred vision.
            </p>
            <p className="mb-6">
              Gestational diabetes can also affect vision by causing blood sugar fluctuations that lead to temporary changes in lens shape. If you have gestational diabetes and notice vision changes, contact your healthcare provider to ensure your blood sugar is well-controlled.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Managing Common Vision Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For typical pregnancy-related vision changes, several strategies can help you maintain comfort and clarity throughout your pregnancy:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Use preservative-free artificial tears</strong> to combat dry eyes. Apply them regularly throughout the day, especially if you work on a computer.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Switch to glasses</strong> if contact lenses become uncomfortable. This temporary change can significantly improve comfort.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Stay hydrated</strong> by drinking plenty of water. Proper hydration supports tear production and overall eye health.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Take frequent breaks</strong> from screens using the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Use a humidifier</strong> in your bedroom or workspace to add moisture to the air and reduce eye dryness.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Wear sunglasses</strong> outdoors to protect against increased light sensitivity and harmful UV rays.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Schedule an Eye Exam
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most pregnant individuals don't need special eye exams beyond their regular routine checkups unless they experience concerning symptoms or have pre-existing eye conditions. However, certain situations warrant a professional evaluation:
            </p>
            <p className="mb-6">
              If you have diabetes (Type 1, Type 2, or gestational), comprehensive dilated eye exams are essential. Pregnancy can accelerate diabetic retinopathy, so early detection and monitoring are crucial. Your eye care provider may recommend more frequent exams throughout your pregnancy.
            </p>
            <p className="mb-6">
              If you experience persistent vision changes that interfere with daily activities—such as difficulty reading, driving, or recognizing faces—schedule an appointment. While these changes may be temporary, your eye care provider can ensure there are no underlying issues and may provide temporary corrective lenses if needed.
            </p>
            <p className="mb-6">
              Finally, if you're planning major vision decisions—like getting new glasses or considering vision correction surgery—discuss timing with your provider. Most experts recommend waiting until several months postpartum when your prescription has stabilized.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            After Delivery: What to Expect
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that most pregnancy-related vision changes resolve on their own within a few months after delivery. As your hormones stabilize and fluid retention decreases, your corneal thickness and shape typically return to their pre-pregnancy state, restoring your previous visual acuity.
            </p>
            <p className="mb-6">
              If you're breastfeeding, be aware that hormonal fluctuations continue during lactation, which may prolong some vision changes. Dry eyes, in particular, may persist while nursing. This is normal and doesn't require intervention unless symptoms are severe.
            </p>
            <p className="mb-6">
              If you wore glasses or contacts before pregnancy and experienced prescription changes, wait at least six to nine months postpartum—or until after you've finished breastfeeding—before getting a new prescription. This ensures your vision has fully stabilized, saving you from needing multiple updates.
            </p>
            <p className="mb-6">
              Should any vision changes persist beyond the postpartum period, or if you develop new symptoms after delivery, schedule a comprehensive eye exam. While rare, some conditions can develop or worsen during pregnancy and require ongoing management.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Pregnancy is a time of profound transformation, and your eyes are part of that journey. While most vision changes are temporary and harmless, staying informed about what's normal—and what's not—empowers you to seek help when needed and ensures both your health and your baby's wellbeing are protected.
            </p>
            <p className="mb-6">
              If you're experiencing vision changes during pregnancy and have questions or concerns, our team at Spark Eye Care is here to provide expert guidance and compassionate care. We understand the unique challenges of pregnancy and can help you navigate any visual symptoms with confidence.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based patient education and compassionate care.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Dry Eye: Causes and Solutions
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about the common causes of dry eye and effective treatment strategies for lasting relief.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Regular Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover why routine eye examinations are essential for maintaining long-term vision health.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Digital Eye Strain: Tips for Screen Users
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Protect your eyes from digital fatigue with practical strategies for modern life.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}