import { NextResponse } from 'next/server'
import { verifyTurnstileToken, clientIpFrom } from '@/lib/turnstile'

// Verification must run per-request; never prerender or cache this handler.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const GHL_WEBHOOK_URL =
  process.env.GHL_CONTACT_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/FNmX2NMfjDQvjNI0pnhO/webhook-trigger/qLlcGZiCgQKZOlfU5bfK'

const MAX_LEN = 5000

function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // 1. Verify the Turnstile token BEFORE touching the lead payload.
  const token = clean(body.turnstileToken, MAX_LEN)
  const verdict = await verifyTurnstileToken(token, clientIpFrom(request.headers))
  if (!verdict.success) {
    const configError = verdict.reason === 'not-configured'
    return NextResponse.json(
      {
        error: configError
          ? 'Form is temporarily unavailable. Please call our office.'
          : 'Verification failed. Please refresh the page and try again.',
      },
      { status: configError ? 503 : 403 },
    )
  }

  // 2. Only now do we accept and normalize the submission.
  const name = clean(body.name)
  const email = clean(body.email)
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const [firstName, ...rest] = name.split(/\s+/)

  // Optional appointment-request fields (blank when it's just a message).
  const patientType = clean(body.patientType, 40)
  const reason = clean(body.reason, 200)
  const preferredDate = clean(body.preferredDate, 40)
  const preferredTime = clean(body.preferredTime, 40)
  const insurance = clean(body.insurance, 100)
  const dob = clean(body.dob, 40)
  // If any appointment detail was provided, tag it as an appointment request so
  // the front desk can triage it differently from a plain contact message.
  const isAppointment = Boolean(patientType || reason || preferredDate || preferredTime || insurance || dob)

  const payload = {
    firstName: firstName || name,
    lastName: rest.join(' '),
    email,
    phone: clean(body.phone, 50),
    service: clean(body.service),
    message: clean(body.message, MAX_LEN),
    patientType,
    reason,
    preferredDate,
    preferredTime,
    insurance,
    dob,
    requestType: isAppointment ? 'Appointment Request' : 'Contact Message',
    source: isAppointment ? 'Website Appointment Request' : 'Website Contact Form',
    submittedAt: new Date().toISOString(),
  }

  // 3. Forward to GoHighLevel from the server, so the webhook URL is never exposed.
  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error('[contact] GHL webhook returned', res.status)
      return NextResponse.json(
        { error: 'We could not deliver your message. Please try again or call us.' },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('[contact] GHL webhook request failed:', err)
    return NextResponse.json(
      { error: 'We could not deliver your message. Please try again or call us.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
