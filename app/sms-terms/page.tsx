import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms & Conditions | Spark Eye Care',
  description: 'SMS messaging terms and conditions for Spark Eye Care appointment reminders and updates.',
}

export default function SMSTermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-bold mb-4">SMS Terms & Conditions</h1>
          <p className="text-xl text-[var(--color-light)]">
            Important information about our text messaging program
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg animate-fade-up">
          <div className="text-center text-[var(--color-ink)] space-y-2">
            <p className="font-semibold text-lg">Text <span className="font-bold">STOP</span> to unsubscribe</p>
            <p className="font-semibold text-lg">Text <span className="font-bold">HELP</span> for help</p>
            <p className="text-[var(--color-muted)]">Message and data rates may apply</p>
            <p className="text-[var(--color-muted)]">Message frequency varies</p>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none space-y-12">
          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Program Description</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Spark Eye Care offers an SMS messaging program to provide appointment reminders, confirmations, updates about your eye care, and other important notifications related to your visit. This service is designed to help you stay informed and connected with our practice.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Opt-In</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              By providing your mobile phone number and consenting to receive text messages from Spark Eye Care, you are opting in to our SMS messaging program. You may opt in through:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2 ml-4">
              <li>Our website contact forms</li>
              <li>Appointment booking system</li>
              <li>In-office registration</li>
              <li>Phone conversations with our staff</li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Your consent is not a condition of purchase or service. Standard message and data rates may apply.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message Frequency</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Message frequency varies depending on your appointment schedule and communication preferences. You may receive up to 4 messages per month. Messages may include appointment reminders, confirmations, rescheduling notifications, and practice updates.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message & Data Rates</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Standard message and data rates may apply based on your mobile carrier plan. Please contact your wireless provider for information about your specific messaging plan and potential charges.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">How to Opt Out</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              You may opt out of our SMS messaging program at any time by:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2 ml-4">
              <li>Replying <span className="font-semibold">STOP</span>, <span className="font-semibold">END</span>, <span className="font-semibold">CANCEL</span>, <span className="font-semibold">UNSUBSCRIBE</span>, or <span className="font-semibold">QUIT</span> to any message</li>
              <li>Contacting our office directly at (281) 419-0600</li>
              <li>Emailing us at info@sparkeyetx.com</li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              After opting out, you will receive one final confirmation message. You may opt back in at any time by contacting our office.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Help & Support</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              For help or more information about our SMS program, you can:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2 ml-4">
              <li>Reply <span className="font-semibold">HELP</span> to any message</li>
              <li>Call us at (281) 419-0600</li>
              <li>Email us at info@sparkeyetx.com</li>
              <li>Visit us at 15803 Bellaire Blvd, Richmond, TX 77407</li>
            </ul>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Supported Carriers</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our SMS program is supported by all major U.S. wireless carriers, including but not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[var(--color-muted)]">
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">AT&T</div>
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">Verizon</div>
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">T-Mobile</div>
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">Sprint</div>
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">Boost Mobile</div>
              <div className="bg-[var(--color-cream)] rounded-lg p-3 text-center">US Cellular</div>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Carrier charges may apply. Please check with your wireless provider for details.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Privacy Policy</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Your privacy is important to us. We will not share, sell, or distribute your mobile phone number or personal information to third parties for marketing purposes. Your information will only be used to communicate with you about your eye care appointments and services at Spark Eye Care. For more information, please review our full Privacy Policy.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Terms & Conditions Updates</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Spark Eye Care reserves the right to modify these SMS Terms & Conditions at any time. Any changes will be posted on this page and will be effective immediately. Your continued participation in our SMS program after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Contact Information</h2>
            <div className="bg-[var(--color-cream)] rounded-xl p-6 border border-[var(--color-border)]">
              <p className="text-[var(--color-ink)] font-semibold mb-3">Spark Eye Care</p>
              <div className="text-[var(--color-muted)] space-y-2">
                <p>15803 Bellaire Blvd</p>
                <p>Richmond, TX 77407</p>
                <p className="pt-2">Phone: (281) 419-0600</p>
                <p>Email: info@sparkeyetx.com</p>
                <p>Website: sparkeyetx.com</p>
              </div>
            </div>
          </section>

          <section className="animate-fade-up border-t border-[var(--color-border)] pt-8">
            <p className="text-sm text-[var(--color-muted)] italic">
              Last updated: January 2025
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}