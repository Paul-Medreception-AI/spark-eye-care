import Link from 'next/link'

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">New Patients</h1>
          <p className="text-xl text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      {/* What to Expect - Timeline */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">Your First Visit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-7xl font-light text-[var(--color-primary)] mb-6">01</div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your appointment online or call our office. We offer flexible scheduling to accommodate your needs.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-7xl font-light text-[var(--color-primary)] mb-6">02</div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Arrive 15 minutes early to complete forms, or access them online beforehand to save time.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-7xl font-light text-[var(--color-primary)] mb-6">03</div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Comprehensive eye assessment using advanced diagnostic technology. Plan for 60-90 minutes.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-7xl font-light text-[var(--color-primary)] mb-6">04</div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Dr. Plummer creates a personalized care plan with you, discussing all options and answering questions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-ink)]">What to Bring</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Photo ID</h3>
                <p className="text-[var(--color-muted)]">Valid driver's license or government-issued identification for verification and records.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Insurance Card</h3>
                <p className="text-[var(--color-muted)]">Bring your current medical and vision insurance cards so we can verify coverage and benefits.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Medication List</h3>
                <p className="text-[var(--color-muted)]">Complete list of current medications, supplements, and dosages, including eye drops.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Prior Eye Records</h3>
                <p className="text-[var(--color-muted)]">Previous eye exam results, surgical records, or glasses/contact lens prescriptions if available.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Emergency Contact</h3>
                <p className="text-[var(--color-muted)]">Name and phone number of someone we can contact in case of an emergency during your visit.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Current Eyewear</h3>
                <p className="text-[var(--color-muted)]">Bring your glasses and contact lenses so we can evaluate your current prescription.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Patient Forms */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl mb-6 text-[var(--color-ink)]">Patient Forms</h2>
          <p className="text-lg text-[var(--color-muted)] mb-8">To expedite your visit, forms are available at our office or can be completed during your first appointment. You are welcome to arrive 15 minutes early to fill them out.</p>
          
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Patient Intake Form</h3>
                <p className="text-[var(--color-muted)]">Medical history, current symptoms, and vision concerns</p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Consent for Treatment</h3>
                <p className="text-[var(--color-muted)]">Authorization for examination and procedures</p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">HIPAA Authorization</h3>
                <p className="text-[var(--color-muted)]">Privacy practices and protected health information</p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Insurance Information</h3>
                <p className="text-[var(--color-muted)]">Coverage details and payment responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Information */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-ink)]">Telehealth Appointments</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
                <div className="mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">How Telehealth Works</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">Select telehealth appointments are available for follow-up consultations, post-operative check-ins, and medication management discussions.</p>
                <p className="text-[var(--color-muted)] leading-relaxed">You will receive a secure video link before your appointment. Join from any private location with internet access.</p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
                <div className="mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">What You Need</h3>
                <ul className="space-y-3 text-[var(--color-muted)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>Computer, tablet, or smartphone with camera and microphone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>Reliable internet connection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>Private, quiet location for your appointment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>Good lighting so Dr. Plummer can see you clearly</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-8 bg-[var(--color-light)] border border-[var(--color-border)] rounded-lg p-6 animate-fade-up">
              <p className="text-[var(--color-muted)] text-center"><strong className="text-[var(--color-ink)]">Please Note:</strong> Initial comprehensive eye exams and surgical evaluations require an in-person visit for thorough assessment and diagnostic testing.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Office Policies */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-ink)]">Office Policies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">We kindly request 24-hour notice for appointment cancellations or rescheduling. This allows us to offer your time to another patient in need.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Late Arrivals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Please arrive 15 minutes early for new patient appointments. If you arrive late, we will accommodate you as best we can, but may need to reschedule.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Missed Appointments</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">No-show appointments without prior notice may result in a fee and could affect future scheduling. We value your time and appreciate the same courtesy.</p>
            </div>

          </div>

          <div className="mt-12 bg-white border-l-4 border-[var(--color-primary)] rounded-lg p-8 animate-fade-up">
            <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Payment & Insurance</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">We accept most major insurance plans and will verify your benefits before your visit. Payment for copays, deductibles, and non-covered services is due at the time of service.</p>
            <p className="text-[var(--color-muted)] leading-relaxed">For patients without insurance or those seeking elective procedures, we offer flexible payment options. Our team will discuss all costs upfront so there are no surprises.</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Schedule your first appointment with Dr. Plummer and experience the difference of personalized, advanced eye care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300">
              Schedule Your Consultation
            </Link>
            <Link href="/services" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}