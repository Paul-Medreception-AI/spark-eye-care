import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preparing for Eye Surgery: What You Need to Know Before Your Procedure | Spark Eye Care',
  description: 'Comprehensive guide to preparing for eye surgery. Learn what to expect, how to prepare, and tips for a smooth recovery from the eye care experts at Spark Eye Care.',
  keywords: 'eye surgery preparation, pre-surgery checklist, cataract surgery prep, LASIK preparation, eye surgery recovery, surgical eye care',
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
          <h1 className="font-['Cormorant',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Preparing for Eye Surgery: What You Need to Know Before Your Procedure
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The decision to undergo eye surgery is often accompanied by a mix of emotions—hope for improved vision, relief that help is available, and perhaps some natural anxiety about the procedure itself. Whether you're preparing for cataract surgery, LASIK, glaucoma treatment, or another eye procedure, knowing what to expect and how to properly prepare can significantly reduce stress and contribute to better outcomes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Eye surgery has advanced dramatically in recent decades. What once required lengthy hospital stays and extended recovery periods can now often be performed as outpatient procedures with minimal discomfort. However, your active participation in the preparation process plays a crucial role in ensuring the best possible results. This comprehensive guide will walk you through everything you need to know before your eye surgery.
          </p>

          {/* Section 1 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Your Procedure
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The first and most important step in preparation is gaining a clear understanding of your specific procedure. Eye surgeries vary widely in their approach, duration, and recovery requirements. Common procedures include cataract removal with intraocular lens implantation, refractive surgeries like LASIK or PRK, glaucoma surgeries to reduce eye pressure, retinal procedures, and corneal transplants.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Don't hesitate to ask your surgeon detailed questions during your pre-operative consultation. Understanding the "why" and "how" of your procedure can significantly reduce anxiety. Ask about the expected duration of surgery, the type of anesthesia that will be used, what sensations you might experience during the procedure, and what vision changes to expect immediately afterward.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your surgical team should provide written instructions specific to your procedure, but understanding the general principles of preparation will help you approach surgery day with confidence rather than worry.
          </p>

          {/* Section 2 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Medical Preparation and Clearance
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Proper medical preparation begins well before surgery day. Your eye surgeon will need a complete picture of your health status, including all current medications, supplements, and vitamins you're taking. Some medications—particularly blood thinners, anti-inflammatory drugs, and certain herbal supplements—may need to be temporarily discontinued before surgery to reduce bleeding risk.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Never stop taking prescribed medications without explicit approval from both your eye surgeon and the physician who prescribed them. For patients with conditions like diabetes, high blood pressure, or heart disease, coordination between your various healthcare providers is essential. Your primary care physician may need to provide medical clearance, especially if you have conditions that could affect healing or anesthesia safety.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant',serif]">
              "Proper preparation isn't just about the day of surgery—it's about creating the optimal conditions for healing that begins weeks before and continues long after your procedure."
            </p>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you have diabetes, maintaining stable blood sugar levels in the weeks leading up to surgery is particularly important, as elevated glucose can impair healing and increase infection risk. Similarly, if you're a smoker, this is an ideal time to quit or at least significantly reduce smoking, as tobacco use restricts blood flow and compromises healing.
          </p>

          {/* Section 3 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Days Before Surgery: Practical Steps
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The week before your surgery requires some practical planning. You'll likely need to begin using prescribed eye drops to prepare your eye for surgery—typically antibiotic drops to reduce infection risk. Follow the dosing schedule precisely, setting phone reminders if needed. Proper technique matters: wash your hands thoroughly, avoid touching the dropper tip to your eye or any surface, and wait at least five minutes between different types of drops if you're using multiple medications.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Arrange for transportation well in advance. You will not be able to drive yourself home after surgery, and depending on your procedure, you may need someone available to drive you to follow-up appointments for several days or weeks. Having a trusted friend or family member accompany you can also provide emotional support and help you remember post-operative instructions when you might be feeling overwhelmed.
          </p>

          <div className="my-8">
            <h3 className="text-[var(--color-ink)] font-semibold mb-4">Pre-Surgery Checklist:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Fill all prescribed medications and have them ready at home</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Prepare a comfortable recovery space with easy access to everything you'll need</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Stock up on recommended supplies: clean tissues, artificial tears, protective eye shield</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Confirm your ride to and from the surgical center</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Prepare easy-to-eat meals or snacks for the first few days of recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Arrange time off work and help with childcare or pet care if needed</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Night Before and Morning of Surgery
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The evening before your procedure, follow your fasting instructions carefully. Most eye surgeries require that you avoid eating or drinking anything after midnight, though specific instructions may vary. Take only approved medications with small sips of water unless otherwise directed. Get a good night's sleep—being well-rested helps your body better handle the stress of surgery and supports healing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            On surgery morning, shower and wash your face and hair thoroughly with antibacterial soap if provided, or regular soap if not. Don't apply any makeup, lotions, creams, or perfumes. These products can introduce bacteria or interfere with surgical equipment. Wear comfortable, loose-fitting clothing that doesn't need to be pulled over your head—a button-up shirt is ideal.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remove contact lenses, jewelry, and dentures if applicable. Bring your insurance cards, identification, and a list of your current medications. Leave valuables at home. Arrive at the surgical center at your scheduled time—arriving too early or too late can disrupt the carefully coordinated surgical schedule.
          </p>

          {/* Section 5 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect During the Procedure
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding what happens during surgery can significantly reduce anxiety. Upon arrival, you'll complete final paperwork and have your vital signs checked. The surgical team will review your procedure and answer any last-minute questions. You'll receive eye drops to dilate your pupil and possibly a mild sedative to help you relax.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most eye surgeries are performed with local anesthesia—numbing drops and possibly an injection around the eye—while you remain awake but comfortable. Some patients receive light sedation so they're drowsy and relaxed. You'll be positioned comfortably, and sterile drapes will be placed around your eye. Your surgeon will talk you through the procedure, letting you know what to expect at each stage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many patients report that the anticipation of surgery was more difficult than the procedure itself. Most eye surgeries are quick—often 15 to 30 minutes—and while you may feel pressure or see lights and movement, properly administered anesthesia ensures you won't feel pain. Communicating with your surgical team about any discomfort is important, as they can provide additional anesthesia or repositioning as needed.
          </p>

          {/* Section 6 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Setting Yourself Up for Successful Recovery
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The preparation process extends into recovery planning. Before surgery, understand your post-operative restrictions. Most patients need to avoid strenuous activity, heavy lifting, swimming, and dusty or dirty environments for a period after surgery. You'll likely need to wear a protective eye shield while sleeping and possibly during the day for the first few days.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Compliance with post-operative eye drop schedules is crucial for preventing infection and inflammation. Set up a system to track your drops—many patients use phone alarms or printed schedules. Keep your follow-up appointments without fail, even if your eye feels fine. These visits allow your surgeon to monitor healing and address any concerns before they become complications.
          </p>

          <div className="my-8">
            <h3 className="text-[var(--color-ink)] font-semibold mb-4">Post-Surgery Success Factors:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Meticulous adherence to eye drop schedules and medication instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Protecting your eye from water, dust, and potential trauma</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Avoiding rubbing or touching your eye, no matter how itchy it feels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Attending all scheduled follow-up appointments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Reporting any unusual symptoms immediately rather than waiting</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-loose">Being patient with the healing process—vision often improves gradually</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Know the warning signs that require immediate attention: sudden vision loss, severe pain not relieved by prescribed medication, increasing redness or swelling, discharge from the eye, flashes of light or new floaters, or the sensation that a curtain is falling over your vision. Having the after-hours contact number for your surgical team readily available provides peace of mind.
          </p>

          {/* Closing */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Preparing for eye surgery is a partnership between you and your surgical team. While it's natural to feel some apprehension, remember that your surgeon has likely performed your procedure hundreds or thousands of times. Modern eye surgery techniques are remarkably safe and effective, with high success rates and low complication rates when patients are properly prepared and follow post-operative instructions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your proactive preparation—educating yourself, following medical instructions, arranging practical support, and committing to careful post-operative care—significantly contributes to optimal outcomes. Most patients are amazed at how manageable the process is and how quickly they return to normal activities with improved vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you have questions or concerns about your upcoming eye surgery, don't hesitate to reach out to your surgical team. Clear communication and thorough preparation are the foundations of successful outcomes and peace of mind throughout your surgical journey.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Common Eye Conditions: A Patient's Guide
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn about the most common eye conditions, their symptoms, and when to seek professional care.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Post-Operative Care: Tips for a Smooth Recovery
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Essential tips and guidelines for caring for your eyes after surgery and ensuring optimal healing.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Questions to Ask Your Eye Surgeon Before Your Procedure
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                A comprehensive list of important questions to discuss with your surgeon during your consultation.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}