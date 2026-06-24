import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Spark Eye Care',
  description: 'Privacy Policy for Spark Eye Care - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-[var(--color-light)]">Effective Date: January 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] text-lg mb-8">
            At Spark Eye Care, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Who We Are</h2>
          <p className="text-[var(--color-ink)] mb-6">
            Spark Eye Care is a comprehensive eye care practice located in Texas. We provide professional eye care services and are committed to maintaining the privacy and security of our patients' information in compliance with all applicable laws and regulations.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Information We Collect</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Through our website contact forms and appointment request system, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, and phone number</li>
            <li><strong>Service Interest:</strong> Type of appointment or service you're interested in</li>
            <li><strong>Message Content:</strong> Any additional information you choose to provide in contact forms</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6">
            <strong>Important:</strong> We do NOT collect Protected Health Information (PHI) through our website. All medical records and protected health information are maintained separately in our secure, HIPAA-compliant patient portal system.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">SMS Messaging</h2>
          <p className="text-[var(--color-ink)] mb-4">
            If you opt-in to receive text messages from Spark Eye Care:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>You consent to receive appointment reminders, practice updates, and promotional messages via SMS</li>
            <li>Message frequency varies based on your appointment schedule and preferences</li>
            <li>Message and data rates may apply from your mobile carrier</li>
            <li>You can opt-out at any time by replying <strong>STOP</strong> to any message</li>
            <li>Reply <strong>HELP</strong> for assistance or contact us directly</li>
            <li>Carriers are not liable for delayed or undelivered messages</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6">
            For complete SMS terms and conditions, please visit our <Link href="/sms-terms" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] underline transition-colors">SMS Terms page</Link>.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">How We Use Your Information</h2>
          <p className="text-[var(--color-ink)] mb-4">
            We use the information collected through our website to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Respond to your inquiries and appointment requests</li>
            <li>Communicate with you about our services</li>
            <li>Send appointment reminders and practice updates (if you opt-in)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Data Security</h2>
          <p className="text-[var(--color-ink)] mb-6">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">HIPAA Notice</h2>
          <p className="text-[var(--color-ink)] mb-6">
            Spark Eye Care is committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA). All Protected Health Information (PHI) is maintained in our secure, HIPAA-compliant patient portal system and is NOT collected through this website. For information about how we handle your medical records and PHI, please request our Notice of Privacy Practices at your next appointment or contact our office directly.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Third-Party Services</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Our website may use third-party services for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Website hosting and performance</li>
            <li>Analytics to understand how visitors use our site</li>
            <li>Communication tools for contact forms and appointment requests</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6">
            These third parties have their own privacy policies and we encourage you to review them.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Cookies and Tracking Technologies</h2>
          <p className="text-[var(--color-ink)] mb-6">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Your Rights</h2>
          <p className="text-[var(--color-ink)] mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt-out of marketing communications at any time</li>
            <li>Withdraw consent for SMS messaging by texting STOP</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Children's Privacy</h2>
          <p className="text-[var(--color-ink)] mb-6">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13 through our website.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Changes to This Privacy Policy</h2>
          <p className="text-[var(--color-ink)] mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">Contact Us</h2>
          <p className="text-[var(--color-ink)] mb-4">
            If you have questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-6">
            <p className="text-[var(--color-ink)] mb-2"><strong>Spark Eye Care</strong></p>
            <p className="text-[var(--color-ink)] mb-2">Website: <a href="https://www.sparkeyetx.com" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors">www.sparkeyetx.com</a></p>
            <p className="text-[var(--color-ink)]">For medical records or HIPAA-related inquiries, please contact our office directly during business hours.</p>
          </div>
        </div>
      </div>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-cream)] py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-muted)]">
            <Link href="/privacy" className="hover:text-[var(--color-primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">
              Terms of Service
            </Link>
            <Link href="/sms-terms" className="hover:text-[var(--color-primary)] transition-colors">
              SMS Terms
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-4">
            © {new Date().getFullYear()} Spark Eye Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}