import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Spark Eye Care',
  description: 'Privacy Policy for Spark Eye Care - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Privacy Policy</h1>
          <p className="text-lg text-[var(--color-light)]">Effective Date: January 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">
            At Spark Eye Care, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or interact with our services.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Who We Are</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Spark Eye Care is a comprehensive eye care provider located in Texas. Our website, sparkeyetx.com, serves as an informational resource and appointment request platform for prospective and current patients.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Information We Collect</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            When you submit an appointment request or contact form through our website, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service of interest</li>
            <li>Preferred appointment times</li>
            <li>General inquiries or messages</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            <strong>Important:</strong> We do NOT collect Protected Health Information (PHI) through our website. Medical records and health information are handled exclusively through our secure patient portal and in-office systems.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">SMS Messaging</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            By providing your mobile phone number and submitting an appointment request, you consent to receive SMS text messages from Spark Eye Care regarding:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Appointment confirmations and reminders</li>
            <li>Service updates and notifications</li>
            <li>General practice communications</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            <strong>Opt-Out:</strong> You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any text message. Message and data rates may apply depending on your mobile carrier plan.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            For detailed information about our SMS communications, please review our{' '}
            <Link href="/sms-terms" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors underline">
              SMS Terms and Conditions
            </Link>.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">How We Use Your Information</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            The information we collect through our website is used solely for:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Responding to your appointment requests and inquiries</li>
            <li>Scheduling and confirming appointments</li>
            <li>Communicating about our services</li>
            <li>Improving our website and patient experience</li>
          </ul>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Data Security</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">HIPAA Notice</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            As a healthcare provider, Spark Eye Care complies with the Health Insurance Portability and Accountability Act (HIPAA) regarding the protection of Protected Health Information (PHI).
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            <strong>Important Distinction:</strong> Information submitted through our website contact forms is NOT considered PHI and is not transmitted through HIPAA-compliant channels. All medical records, health information, and PHI are managed exclusively through our secure patient portal and electronic health record systems that meet HIPAA security standards.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            For questions about how we handle your protected health information, please contact our office directly.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Third-Party Services</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Our website may use third-party services for analytics, hosting, and communication purposes. These service providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information in accordance with this Privacy Policy.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Cookies and Tracking</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Your Rights</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of SMS communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Changes to This Policy</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Contact Us</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you have questions or concerns about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 my-6">
            <p className="text-[var(--color-ink)] font-semibold mb-2">Spark Eye Care</p>
            <p className="text-[var(--color-muted)]">Website: sparkeyetx.com</p>
            <p className="text-[var(--color-muted)]">Email: info@sparkeyetx.com</p>
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-ink)] text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-[var(--color-light)] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[var(--color-muted)]">|</span>
            <Link href="/terms" className="text-[var(--color-light)] hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-[var(--color-muted)]">|</span>
            <Link href="/sms-terms" className="text-[var(--color-light)] hover:text-white transition-colors">
              SMS Terms
            </Link>
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-4">
            © 2025 Spark Eye Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}