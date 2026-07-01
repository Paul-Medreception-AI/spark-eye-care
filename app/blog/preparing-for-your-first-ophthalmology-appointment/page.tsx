import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preparing for Your First Ophthalmology Appointment | Spark Eye Care',
  description: 'Learn how to prepare for your first eye exam with our comprehensive guide. Discover what to bring, questions to ask, and what to expect during your ophthalmology appointment.',
  keywords: 'ophthalmology appointment, first eye exam, eye doctor visit, prepare for eye appointment, eye care',
  openGraph: {
    title: 'Preparing for Your First Ophthalmology Appointment | Spark Eye Care',
    description: 'Learn how to prepare for your first eye exam with our comprehensive guide. Discover what to bring, questions to ask, and what to expect during your ophthalmology appointment.',
    type: 'article',
    url: 'https://sparkeyetx.com/blog/preparing-for-your-first-ophthalmology-appointment',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
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
            <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{fontFamily: 'Cormorant'}}>
              Preparing for Your First Ophthalmology Appointment
            </h1>
            
            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>January 2025</span>
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
                <span>Dr. Care Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
              
              {/* Opening Hook */}
              <p className="text-xl leading-relaxed mb-8" style={{fontFamily: 'Cormorant'}}>
                Your eyes are windows to your health, and taking that first step to schedule an ophthalmology appointment shows you're prioritizing your vision and well-being. Whether you're experiencing vision changes, need a routine eye exam, or have been referred by another healthcare provider, knowing what to expect can help ease any anxiety and ensure you get the most out of your visit.
              </p>

              <p className="mb-6">
                An ophthalmology appointment is more than just reading letters on a chart. It's a comprehensive evaluation of your eye health, visual function, and sometimes even your overall health, as many systemic conditions manifest symptoms in the eyes. Proper preparation can make your appointment more efficient and help your ophthalmologist provide you with the best possible care.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                Understanding What an Ophthalmologist Does
              </h2>

              <p className="mb-6">
                An ophthalmologist is a medical doctor who specializes in eye and vision care. Unlike optometrists who provide vision testing and corrective lenses, ophthalmologists are trained to perform eye surgery, diagnose and treat eye diseases, and manage complex eye conditions. They complete four years of medical school followed by at least four years of specialized ophthalmology training.
              </p>

              <p className="mb-6">
                During your first appointment, your ophthalmologist will conduct a thorough examination of your eyes and vision. This typically includes testing your visual acuity, examining the internal and external structures of your eyes, measuring eye pressure, and assessing how well your eyes work together. Depending on your symptoms or concerns, they may perform additional specialized tests.
              </p>

              {/* Section 2 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                What to Bring to Your Appointment
              </h2>

              <p className="mb-6">
                Being prepared with the right information and materials will help your ophthalmologist understand your eye health history and current concerns. Here's what you should bring:
              </p>

              <div className="space-y-3 mb-6 ml-2">
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><strong>Insurance information:</strong> Your insurance card and any referral forms required by your plan</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><strong>Current eyewear:</strong> Your glasses and contact lenses, including the contact lens prescription and solution you use</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><strong>Medication list:</strong> A complete list of all medications, vitamins, and supplements you're taking, including dosages</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><strong>Medical history:</strong> Information about previous eye conditions, surgeries, injuries, and relevant family eye health history</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><strong>List of concerns:</strong> Written notes about any symptoms, vision changes, or questions you want to discuss</p>
                </div>
              </div>

              <p className="mb-6">
                If you've had recent eye exams or imaging at another facility, try to obtain those records beforehand. Having previous test results can help your ophthalmologist track changes over time and avoid unnecessary duplicate testing.
              </p>

              {/* Pull Quote */}
              <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant'}}>
                "Being prepared with your medical history and a list of questions helps ensure you get the most comprehensive care during your appointment."
              </div>

              {/* Section 3 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                What to Expect During Your Examination
              </h2>

              <p className="mb-6">
                A comprehensive ophthalmology exam typically takes 45 minutes to an hour, though your first appointment may take longer. Here's what generally happens during the visit:
              </p>

              <p className="mb-6">
                <strong>Initial Testing:</strong> A technician will usually start by gathering preliminary information. They'll measure your visual acuity (how clearly you see at various distances), test your current glasses prescription if you wear them, and measure your eye pressure using a tonometer. They may also use an autorefractor to get an objective measurement of your refractive error.
              </p>

              <p className="mb-6">
                <strong>Medical History Review:</strong> Your ophthalmologist will discuss your medical and eye health history, current symptoms, medications, and any family history of eye conditions. Be honest and thorough—even details that seem unrelated might be important.
              </p>

              <p className="mb-6">
                <strong>Comprehensive Eye Exam:</strong> The doctor will examine both the external and internal structures of your eyes. This includes checking your eye alignment and movement, examining your pupils' response to light, and using various instruments to look at the front and back of your eyes. A slit lamp examination allows detailed visualization of your eye's structures, while dilation drops (if needed) enable examination of your retina and optic nerve.
              </p>

              <p className="mb-6">
                <strong>Additional Testing:</strong> Based on your symptoms or findings, your doctor might order specialized tests such as visual field testing, optical coherence tomography (OCT), or retinal photography. These tests provide detailed information about specific aspects of your eye health.
              </p>

              {/* Section 4 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                Important Questions to Ask
              </h2>

              <p className="mb-6">
                Don't hesitate to ask questions during your appointment. Here are some important topics to discuss with your ophthalmologist:
              </p>

              <div className="space-y-3 mb-6 ml-2">
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>What is the current state of my eye health?</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Are there any conditions I'm at risk for based on my age, family history, or health status?</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>If I have a diagnosis, what does it mean for my vision and daily life?</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>What treatment options are available, and what are the benefits and risks of each?</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>How often should I have follow-up appointments?</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Are there lifestyle changes I can make to protect my eye health?</p>
                </div>
              </div>

              {/* Section 5 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                Preparing for Dilation and Other Considerations
              </h2>

              <p className="mb-6">
                Many comprehensive eye exams include pupil dilation, which allows your ophthalmologist to examine the back of your eye more thoroughly. Dilating drops temporarily enlarge your pupils, causing increased light sensitivity and blurred near vision that can last 4-6 hours.
              </p>

              <p className="mb-6">
                If your exam will include dilation, bring sunglasses for the drive home and consider arranging transportation, as some people find it uncomfortable to drive with dilated pupils. You may also want to avoid scheduling important work or activities immediately after your appointment.
              </p>

              <p className="mb-6">
                For contact lens wearers, consider wearing your glasses to the appointment instead. You may need to remove your contacts for certain tests, and if your eyes are dilated, you won't be able to reinsert them for several hours. If you must wear contacts, bring your lens case and solution.
              </p>

              {/* Section 6 */}
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
                After Your Appointment: Next Steps
              </h2>

              <p className="mb-6">
                After your examination, your ophthalmologist will discuss their findings with you and recommend a treatment plan if needed. This might include prescription eyewear, medications, lifestyle modifications, or further testing. Make sure you understand the recommendations before leaving, and don't hesitate to ask for clarification.
              </p>

              <p className="mb-6">
                If you're prescribed new glasses or contact lenses, ask about the timeline for getting them and what to do if they don't feel right. For medications, understand the dosing schedule, potential side effects, and how long you'll need to use them. Many eye drops have specific administration techniques, so ask for a demonstration if you're not familiar with them.
              </p>

              <p className="mb-6">
                Before you leave, schedule any necessary follow-up appointments. For ongoing conditions, consistent monitoring is crucial for preserving your vision. Set reminders for follow-ups, and keep track of any changes in your vision or symptoms between appointments.
              </p>

              {/* Closing */}
              <p className="mt-8 mb-6">
                Your first ophthalmology appointment is an important investment in your long-term eye health. By preparing thoroughly, asking questions, and following through with recommended care, you're taking proactive steps to protect your vision for years to come. Remember that your ophthalmologist is your partner in eye health—open communication and regular check-ups are key to maintaining optimal vision and catching potential problems early.
              </p>

              <p className="mb-6">
                If you're experiencing vision changes, eye discomfort, or it's been more than a year since your last comprehensive eye exam, don't delay in scheduling an appointment. Early detection and treatment of eye conditions can make a significant difference in preserving your vision and quality of life.
              </p>

            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Article 1 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                    Understanding Common Vision Problems
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about myopia, hyperopia, astigmatism, and other refractive errors that affect your vision.</p>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                    How Often Should You Get an Eye Exam?
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover the recommended frequency for eye exams based on your age, health, and risk factors.</p>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Prevention</div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                    Protecting Your Eyes from Digital Strain
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Essential tips for reducing eye fatigue and discomfort from prolonged screen time.</p>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Appointment
            </a>
          </div>
        </section>

      </article>
    </main>
  )
}