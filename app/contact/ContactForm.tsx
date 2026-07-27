'use client'
import { useRef, useState } from 'react'
import Turnstile, { type TurnstileHandle } from '@/components/Turnstile'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [token, setToken] = useState('')
  const turnstileRef = useRef<TurnstileHandle | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!token) {
      setStatus('error')
      setErrorMsg('Please complete the verification below.')
      return
    }
    setStatus('sending')
    setErrorMsg('')
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      service: String(data.get('service') || ''),
      message: String(data.get('message') || ''),
      // Optional appointment-request fields (blank = a plain message).
      patientType: String(data.get('patientType') || ''),
      reason: String(data.get('reason') || ''),
      preferredDate: String(data.get('preferredDate') || ''),
      preferredTime: String(data.get('preferredTime') || ''),
      insurance: String(data.get('insurance') || '').trim(),
      dob: String(data.get('dob') || ''),
      turnstileToken: token,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const detail = await res.json().catch(() => null)
        throw new Error(detail?.error || `Submission failed (${res.status})`)
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      // Tokens are single-use — issue a fresh one before the next attempt.
      setToken('')
      turnstileRef.current?.reset()
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Thank you — message received</h3>
        <p className="text-[var(--color-muted)] leading-relaxed">Our team will follow up within one business day. For anything urgent, please call <a href="tel:+15123771076" className="text-[var(--color-primary)] font-semibold hover:underline">(512) 377-1076</a>.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Full Name*</label>
        <input type="text" id="name" name="name" required className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Email*</label>
        <input type="email" id="email" name="email" required className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Phone</label>
        <input type="tel" id="phone" name="phone" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Service Interest</label>
        <select id="service" name="service" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none">
          <option value="">Select a service</option>
          <option value="Cataract Surgery Consultation">Cataract Surgery Consultation</option>
          <option value="Refractive Lens Exchange Evaluation">Refractive Lens Exchange Evaluation</option>
          <option value="Glaucoma Screening and Treatment">Glaucoma Screening and Treatment</option>
          <option value="Dry Eye Evaluation">Dry Eye Evaluation</option>
          <option value="Diabetic Eye Exam">Diabetic Eye Exam</option>
          <option value="General Eye Exam">General Eye Exam</option>
        </select>
      </div>
      {/* ── Optional appointment details ─────────────────────────────────
          Everything below is optional — leave blank to just send a message.
          Mirrors the fields the scheduling widget collects so there's one
          consistent form for both contact and appointment requests. */}
      <div className="pt-2 border-t border-[var(--color-border)]">
        <p className="text-sm font-semibold text-[var(--color-ink)] mt-4 mb-1">Requesting an appointment? <span className="font-normal text-[var(--color-muted)]">(optional)</span></p>
        <p className="text-xs text-[var(--color-muted)] mb-4">Add any of the details below and our team will follow up to confirm. Leave blank to just send a message.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patientType" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Patient status</label>
            <select id="patientType" name="patientType" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none">
              <option value="">Select</option>
              <option value="New patient">New patient</option>
              <option value="Existing patient">Existing patient</option>
            </select>
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Reason for visit</label>
            <input type="text" id="reason" name="reason" placeholder="e.g. cataract consultation" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Preferred date</label>
            <input type="date" id="preferredDate" name="preferredDate" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Preferred time</label>
            <select id="preferredTime" name="preferredTime" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none">
              <option value="">No preference</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
            </select>
          </div>
          <div>
            <label htmlFor="insurance" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Insurance provider</label>
            <input type="text" id="insurance" name="insurance" placeholder="e.g. Blue Cross, Medicare" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Date of birth</label>
            <input type="date" id="dob" name="dob" className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Message</label>
        <textarea id="message" name="message" rows={5} className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"></textarea>
      </div>
      <div>
        <Turnstile
          handleRef={turnstileRef}
          onVerify={(t) => {
            setToken(t)
            if (status === 'error') {
              setStatus('idle')
              setErrorMsg('')
            }
          }}
          onExpire={() => setToken('')}
          onError={() => setToken('')}
        />
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-colors mt-2">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">{errorMsg || 'Something went wrong.'} Please try again or call <a href="tel:+15123771076" className="underline">(512) 377-1076</a>.</p>
      )}
      <p className="text-[var(--color-muted)] text-xs mt-4">Please do not submit protected health information (PHI) through this form. For secure communication regarding your medical records or sensitive health information, please contact our office directly.</p>
    </form>
  )
}
