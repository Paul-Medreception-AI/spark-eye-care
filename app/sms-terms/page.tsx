import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms & Conditions | Spark Eye Care',
  description: 'SMS messaging terms and conditions for Spark Eye Care text message program.',
}

export default function SMSTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-bold mb-6">SMS Terms & Conditions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Important information about our text message program
          </p>
        </div>
      </section>

      {/* Quick Reference Box */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 max-w-xl mx-auto text-[var(--color-ink)] shadow-lg animate-fade-up">
          <h2 className="font-serif text-2xl font-bold mb-4 text-center">Quick Reference</h2>
          <ul className="space-y-2 text-center">
            <li className="font-semibold">Text STOP to unsubscribe</li>
            <li className="font-semibold">Text HELP for help</li>
            <li>Message & data rates may apply</li>
            <li>Message frequency varies</li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Program Description */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Program Description</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Spark Eye Care's SMS program allows you to receive text messages about appointment reminders, eye care tips, promotions, and important updates about our services. By opting in, you consent to receive recurring automated marketing and informational text messages from Spark Eye Care at the phone number provided.
            </p>
          </div>

          {/* Opt-In */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Opt-In</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              By providing your mobile phone number and opting in to receive SMS messages from Spark Eye Care, you expressly consent to receive recurring automated marketing text messages. Consent is not a condition of purchase.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              You may opt-in by texting a keyword to our short code, completing a web form, or providing consent verbally or in writing at our office.
            </p>
          </div>

          {/* Message Frequency */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message Frequency</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Message frequency varies. You may receive up to 4 messages per month. Additional messages may be sent based on appointment scheduling, confirmations, or time-sensitive updates.
            </p>
          </div>

          {/* Message and Data Rates */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message and Data Rates</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Message and data rates may apply. Please check with your mobile carrier for details on your specific plan. Spark Eye Care is not responsible for any charges incurred from your mobile carrier.
            </p>
          </div>

          {/* Opt-Out */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">How to Opt-Out</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              You may opt-out of receiving SMS messages at any time. To stop receiving messages, reply <strong>STOP</strong> to any text message you receive from us. You will receive a one-time confirmation message that you have been unsubscribed.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              After texting STOP, you will no longer receive SMS messages from Spark Eye Care unless you opt-in again.
            </p>
          </div>

          {/* Help */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Help</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              For help or more information about our SMS program, reply <strong>HELP</strong> to any message, or contact us:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2 ml-4">
              <li>Visit: <a href="https://www.sparkeyetx.com" className="text-[var(--color-primary)] hover:underline">www.sparkeyetx.com</a></li>
              <li>Call our office during business hours</li>
              <li>Email us through our website contact form</li>
            </ul>
          </div>

          {/* Supported Carriers */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Supported Carriers</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              This SMS program is supported by major carriers including but not limited to:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2 ml-4">
              <li>AT&T</li>
              <li>Verizon Wireless</li>
              <li>T-Mobile</li>
              <li>Sprint</li>
              <li>Boost Mobile</li>
              <li>US Cellular</li>
              <li>And other major carriers</li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          {/* Privacy */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Privacy Policy</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We respect your privacy. Your mobile phone number and any information you provide will be used in accordance with our Privacy Policy. We do not sell, rent, or share your personal information with third parties for their marketing purposes. Your information is used solely to provide you with the services you have requested and to improve your experience with Spark Eye Care.
            </p>
          </div>

          {/* Terms Updates */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Changes to Terms</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Spark Eye Care reserves the right to modify or terminate the SMS program or these terms at any time without notice. We will make reasonable efforts to notify subscribers of material changes. Your continued participation in the program after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Contact Us</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              If you have questions about our SMS program or these terms, please contact us:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Spark Eye Care</p>
              <p className="text-[var(--color-muted)]">Website: <a href="https://www.sparkeyetx.com" className="text-[var(--color-primary)] hover:underline">www.sparkeyetx.com</a></p>
              <p className="text-[var(--color-muted)] mt-2">For immediate assistance, please call our office or visit our website for contact information and hours of operation.</p>
            </div>
          </div>

          {/* Effective Date */}
          <div className="animate-fade-up">
            <p className="text-[var(--color-muted)] text-sm italic">
              Last Updated: January 2025
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}