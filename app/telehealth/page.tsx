import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Telehealth Services</h1>
          <p className="text-xl text-white/90">Expert eye care consultations from the comfort of your home</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">How Telehealth Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Schedule</h3>
              <p className="text-[var(--color-muted)]">Request an appointment online or call our office. We'll send you a secure video link and instructions.</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Connect</h3>
              <p className="text-[var(--color-muted)]">Click the secure link at your appointment time. Connect from your phone, tablet, or computer.</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 bg-[var(--color-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Get Care</h3>
              <p className="text-[var(--color-muted)]">Meet with Dr. Plummer to discuss your concerns, review symptoms, and receive expert guidance.</p>
            </div>
          </div>

          {/* Available Services */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Available via Telehealth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Post-operative follow-up consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Dry eye symptom review and treatment adjustment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Medication management and prescription refills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">General eye health questions and concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Second opinion consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Educational consultations about procedures</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Requires In-Person Visit</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Comprehensive eye examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Cataract surgery evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Laser vision correction candidacy testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Glaucoma pressure checks and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Diabetic retinopathy screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Any surgical procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">Benefits of Telehealth</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">No Commute Required</h3>
              <p className="text-[var(--color-muted)]">Save time and gas by connecting from home, work, or anywhere with internet access.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Same-Day Availability</h3>
              <p className="text-[var(--color-muted)]">Get care when you need it with flexible scheduling and faster appointment times.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Private & Discreet</h3>
              <p className="text-[var(--color-muted)]">Meet with Dr. Plummer in complete privacy without waiting rooms or busy offices.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Works on Any Device</h3>
              <p className="text-[var(--color-muted)]">Connect from your smartphone, tablet, laptop, or desktop computer with ease.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Covered by Insurance</h3>
              <p className="text-[var(--color-muted)]">Most insurance plans cover telehealth visits the same way they cover in-person appointments.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">HIPAA-Compliant Platform</h3>
              <p className="text-[var(--color-muted)]">Your health information is protected with bank-level encryption and secure video technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] text-center mb-8">What You Need for Your Telehealth Visit</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <ul className="space-y-2 ml-9 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Smartphone, tablet, laptop, or desktop computer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Built-in or external camera and microphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Speakers or headphones for audio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Updated web browser (Chrome, Safari, Firefox, or Edge)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Internet Connection
                </h3>
                <ul className="space-y-2 ml-9 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Stable broadband internet or 4G/5G cellular connection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Minimum 5 Mbps download speed recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>WiFi connection preferred for best video quality</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Environment
                </h3>
                <ul className="space-y-2 ml-9 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Quiet, private space where you can speak freely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Good lighting so Dr. Plummer can see you clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Minimize background noise and distractions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3">Supported Platforms</h3>
                <p className="text-[var(--color-muted)] mb-4">Our secure telehealth platform works seamlessly across all major devices and operating systems:</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-[var(--color-muted)]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>iOS (iPhone/iPad)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Android</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Windows PC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mac</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Schedule your telehealth consultation today and experience convenient, expert eye care from home.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}