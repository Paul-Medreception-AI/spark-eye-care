import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Spark Eye Care',
  description: 'Terms of Service for Spark Eye Care website and services.',
}

export default function TermsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-lg text-[var(--color-ink)] mb-8">
            Welcome to Spark Eye Care. By accessing or using our website at www.sparkeyetx.com, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-[var(--color-ink)] mb-4">
            By accessing and using the Spark Eye Care website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">2. Description of Services</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Spark Eye Care provides information about our eye care services through this website. The content on this website is for informational purposes only and describes the services we offer at our physical location.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            This website does not provide medical advice, diagnosis, or treatment. All information provided is intended to supplement, not substitute for, the expertise and judgment of your healthcare professional.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">3. Not Emergency Care</h2>
          <p className="text-[var(--color-ink)] mb-4">
            This website is not intended for emergency medical situations. If you are experiencing a medical emergency, including an eye emergency, please call 911 or go to the nearest emergency room immediately.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            Do not use this website to communicate urgent medical needs. Contact our office directly by phone during business hours for time-sensitive matters.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">4. No Insurance Billing</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Spark Eye Care operates on a cash-pay basis and does not bill insurance companies directly. We do not participate in insurance networks or file claims on behalf of patients.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            Patients are responsible for payment at the time of service. We can provide itemized receipts that patients may submit to their insurance companies for potential reimbursement, but we make no guarantees regarding insurance coverage or reimbursement.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">5. HIPAA and Privacy</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Spark Eye Care complies with the Health Insurance Portability and Accountability Act (HIPAA) and maintains strict confidentiality of patient health information. Any protected health information (PHI) collected through appointments or services is handled in accordance with HIPAA regulations.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            For detailed information about how we collect, use, and protect your information, please review our Privacy Policy.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">6. Limitation of Liability</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Spark Eye Care makes no warranties or representations about the accuracy or completeness of the content on this website. We are not liable for any errors or omissions in the content or for any actions taken in reliance on the information provided.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            To the fullest extent permitted by law, Spark Eye Care shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this website.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">7. Governing Law</h2>
          <p className="text-[var(--color-ink)] mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the appropriate courts located in Texas.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">8. Changes to Terms</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Spark Eye Care reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes acceptance of those changes.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">9. Contact Information</h2>
          <p className="text-[var(--color-ink)] mb-4">
            If you have any questions or concerns about these Terms of Service, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mt-6">
            <p className="text-[var(--color-ink)] font-semibold mb-2">Spark Eye Care</p>
            <p className="text-[var(--color-ink)] mb-1">Website: www.sparkeyetx.com</p>
            <p className="text-[var(--color-ink)]">Please visit our Contact page for additional contact options.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-muted)] text-center">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}