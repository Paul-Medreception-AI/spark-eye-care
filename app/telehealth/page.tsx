import Link from 'next/link'
import Image from 'next/image'

export default function TelehealthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-serif text-5xl font-light mb-6">Telehealth Services</h1>
          <p className="text-xl text-white/90">Expert eye care guidance from the comfort of your home</p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_24432882.jpeg"
                alt="Texas hill country wildflowers near Kyle, TX"
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

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">How Telehealth Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your telehealth appointment online or call our office. Choose a time that fits your schedule.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Connect</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Join your video visit from any device with our secure platform. No downloads or technical expertise required.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Get Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Receive expert consultation, guidance, and follow-up care from Dr. Plummer and our team.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-10 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-6">Available via Telehealth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Post-operative follow-up consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Dry eye symptom evaluation and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Medication adjustments and prescription renewals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Review of test results and treatment plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">General eye health questions and concerns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-6">Requires In-Person Visit</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Comprehensive eye examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Surgical evaluations and pre-operative assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Diagnostic testing and imaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Urgent eye conditions requiring immediate examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">First-time patient consultations</span>
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
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">No Commute Required</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Save time and eliminate travel stress. Connect with us from the comfort of your home, office, or anywhere you have privacy.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Flexible Scheduling</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Same-day and next-day appointments often available. Schedule visits that work around your busy life and commitments.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Complete Privacy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Discuss your eye health concerns in a private, comfortable setting where you feel most at ease.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Any Device Works</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Join from your smartphone, tablet, or computer. Our platform is designed to work seamlessly across all devices.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Insurance Accepted</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Most insurance plans cover telehealth visits the same as in-person appointments. We handle the billing seamlessly.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">HIPAA-Compliant Platform</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Your privacy and security are our priority. All video visits are encrypted and fully compliant with healthcare regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] text-center mb-10">What You Need for Your Visit</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Compatible Device
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-3">Any smartphone, tablet, laptop, or desktop computer with a camera and microphone</p>
                <p className="text-sm text-[var(--color-muted)]">Works with iOS, Android, Mac, Windows, and most modern web browsers</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Reliable Internet Connection
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-3">Minimum 1 Mbps download speed recommended for smooth video quality</p>
                <p className="text-sm text-[var(--color-muted)]">WiFi or cellular data both work well</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Private, Quiet Space
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-3">Find a comfortable location where you can speak freely without interruptions</p>
                <p className="text-sm text-[var(--color-muted)]">Good lighting helps us see you clearly during the consultation</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  Medical Information Ready
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Have your current medications list, recent test results, and insurance information available</p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-[var(--color-border)]">
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 text-center">Supported Platforms</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">iOS (iPhone/iPad)</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">Android</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">Windows</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">Mac</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">Web Browser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10">Schedule your telehealth consultation today and experience convenient, expert eye care from home.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Telehealth Visit
          </Link>
        </div>
      </section>
    </main>
  )
}