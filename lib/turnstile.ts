const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export type TurnstileResult =
  | { success: true }
  | { success: false; reason: string }

/**
 * Verifies a Turnstile token against Cloudflare's siteverify endpoint.
 * Fails closed: any network error, timeout, or missing secret returns failure.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error('[turnstile] TURNSTILE_SECRET_KEY is not set')
    return { success: false, reason: 'not-configured' }
  }
  if (!token) return { success: false, reason: 'missing-token' }

  const body = new URLSearchParams({ secret, response: token })
  // Cloudflare treats remoteip as optional; only send a well-formed value.
  if (remoteIp) body.set('remoteip', remoteIp)

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error('[turnstile] siteverify HTTP', res.status)
      return { success: false, reason: 'verify-unavailable' }
    }
    const data = (await res.json()) as {
      success?: boolean
      'error-codes'?: string[]
    }
    if (data.success) return { success: true }
    const codes = data['error-codes'] ?? []
    console.warn('[turnstile] verification rejected:', codes.join(', ') || 'unknown')
    return { success: false, reason: codes.join(',') || 'rejected' }
  } catch (err) {
    console.error('[turnstile] siteverify request failed:', err)
    return { success: false, reason: 'verify-unavailable' }
  }
}

/** Best-effort client IP from proxy headers, for the optional remoteip field. */
export function clientIpFrom(headers: Headers): string | undefined {
  const cf = headers.get('cf-connecting-ip')
  if (cf) return cf.trim()
  const fwd = headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0]!.trim()
  return undefined
}
