import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Spark Eye Care',
  description: 'Terms of Service for Spark Eye Care website and services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Please read these Terms of Service carefully before using the Spark Eye Care website. By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Acceptance of Terms</h2>
            <p className="text-[var(--color-muted)] mb-4">
              By accessing and using sparkeyetx.com (the "Website"), you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Description of Services</h2>
            <p className="text-[var(--color-muted)] mb-4">
              The Website provides information about Spark Eye Care's optometry services, including comprehensive eye exams, contact lens fittings, and eyewear selection. The content on this Website is for informational purposes only and is intended to describe the services we offer at our physical practice location.
            </p>
            <p className="text-[var(--color-muted)] mb-4">
              <strong>This Website does not provide medical advice, diagnosis, or treatment.</strong> All information presented is general in nature and should not be considered a substitute for professional medical consultation. Any specific questions about your eye health should be directed to a qualified eye care professional.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Not Emergency Care</h2>
            <p className="text-[var(--color-muted)] mb-4">
              <strong>This Website is not intended for emergency use.</strong> If you are experiencing a medical emergency or urgent eye condition (such as sudden vision loss, eye injury, severe pain, or flashes of light), please call 911 or go to your nearest emergency room immediately.
            </p>
            <p className="text-[var(--color-muted)] mb-4">
              Do not use this Website to communicate time-sensitive or urgent matters. Appointment requests and contact form submissions are reviewed during normal business hours only.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Insurance and Billing</h2>
            <p className="text-[var(--color-muted)] mb-4">
              Spark Eye Care does not bill insurance directly. We operate as a fee-for-service practice. Payment is due at the time of service, and we can provide you with an itemized receipt (superbill) that you may submit to your insurance company for potential out-of-network reimbursement.
            </p>
            <p className="text-[var(--color-muted)] mb-4">
              Information about pricing and payment options provided on this Website is subject to change. Please contact our office directly for current pricing information.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">HIPAA Compliance and Privacy</h2>
            <p className="text-[var(--color-muted)] mb-4">
              Spark Eye Care is committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and all applicable privacy laws. Our Notice of Privacy Practices is available at our office and describes how medical information about you may be used and disclosed.
            </p>
            <p className="text-[var(--color-muted)] mb-4">
              <strong>Do not transmit protected health information through unsecured contact forms or email.</strong> The contact forms on this Website are intended for appointment requests and general inquiries only, not for sharing detailed medical information.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Limitation of Liability</h2>
            <p className="text-[var(--color-muted)] mb-4">
              To the fullest extent permitted by law, Spark Eye Care and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use this Website, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-[var(--color-muted)] mb-4">
              The information on this Website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Intellectual Property</h2>
            <p className="text-[var(--color-muted)] mb-4">
              All content on this Website, including text, graphics, logos, images, and software, is the property of Spark Eye Care or its content suppliers and is protected by United States and international copyright laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">External Links</h2>
            <p className="text-[var(--color-muted)] mb-4">
              This Website may contain links to third-party websites. These links are provided for your convenience only. Spark Eye Care has no control over the content of these sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Modifications to Terms</h2>
            <p className="text-[var(--color-muted)] mb-4">
              Spark Eye Care reserves the right to revise these Terms of Service at any time without prior notice. By using this Website, you agree to be bound by the current version of these terms. We encourage you to review this page periodically for any changes.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Governing Law</h2>
            <p className="text-[var(--color-muted)] mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts located in Texas.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Contact Information</h2>
            <p className="text-[var(--color-muted)] mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 my-6">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Spark Eye Care</p>
              <p className="text-[var(--color-muted)]">Website: sparkeyetx.com</p>
              <p className="text-[var(--color-muted)]">Email: info@sparkeyetx.com</p>
              <p className="text-[var(--color-muted)]">Phone: Available on our website</p>
            </div>

            <p className="text-sm text-[var(--color-muted)] mt-12 pt-8 border-t border-[var(--color-border)]">
              By using the Spark Eye Care website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}