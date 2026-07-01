import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'New Patients | Spark Eye Care',
  description: 'Everything you need to know before your first visit to Spark Eye Care. Learn what to expect, what to bring, and how to prepare for your comprehensive eye exam with Dr. Plummer.',
}

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            New Patients
          </h1>
          <p className="text-xl text-white/90">
            Everything you need to know before your first visit
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_447730359.jpeg"
                alt="Smiling new patient"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            Your First Visit
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-xl">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Schedule
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our contact form or call our office directly. We'll find a time that works best for your schedule.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-xl">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Complete Paperwork
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete patient forms, or access them online ahead of time to streamline your visit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-xl">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Initial Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive assessment including advanced diagnostic testing and thorough examination. Plan for 60-90 minutes for your first visit.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up transition-all duration-300 hover:shadow-xl">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light mb-4">
                04
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dr. Plummer will discuss findings and create a personalized care plan tailored to your specific needs and vision goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            What to Bring
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Photo ID & Insurance */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                    Photo ID & Insurance Card
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Bring a valid government-issued ID and your current vision and medical insurance cards. We'll verify your coverage and benefits.
                  </p>
                </div>
              </div>
            </div>

            {/* Medication List */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                    Medication List
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Include all current medications, supplements, and vitamins with dosages. Many medications can affect eye health and surgical planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Prior Records */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                    Prior Records
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    If available, bring previous eye exam records, surgical reports, or diagnostic test results. This helps us understand your eye health history.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                    Emergency Contact
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Provide name and phone number of someone we can contact in case of emergency. Required for surgical procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
              Patient Forms
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Forms are available at our office or can be completed during your first appointment. Arriving early allows extra time to complete paperwork comfortably.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                <p className="text-[var(--color-ink)]">Patient Information and Medical History</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                <p className="text-[var(--color-ink)]">HIPAA Privacy Authorization</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                <p className="text-[var(--color-ink)]">Insurance and Financial Responsibility</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                <p className="text-[var(--color-ink)]">Consent for Treatment and Examination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Information */}
      <section className="bg-white py-24 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            Telehealth Visits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                When Telehealth is Available
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Select follow-up appointments and consultations can be conducted via secure video call. This option provides convenient access to Dr. Plummer's expertise without traveling to the office.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Initial comprehensive evaluations and surgical consultations require an in-person visit for proper examination and diagnostic testing.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                What You Need
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-muted)]">Computer, tablet, or smartphone with camera and microphone</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-muted)]">Reliable internet connection</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-muted)]">Private, quiet space for your appointment</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-muted)]">Good lighting so Dr. Plummer can see you clearly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            Office Policies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Cancellation Policy
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer your time to other patients.
              </p>
            </div>

            {/* Late Arrivals */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Late Arrivals
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arriving more than 15 minutes late may require rescheduling to ensure adequate time for your examination and avoid delays for other patients.
              </p>
            </div>

            {/* No-Show Policy */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                Missed Appointments
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Missed appointments without prior notice may result in a fee. Multiple no-shows may affect future scheduling priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule your comprehensive eye examination with Dr. Plummer today
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}