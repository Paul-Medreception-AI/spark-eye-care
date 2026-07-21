'use client'
import { useEffect, useRef } from 'react'

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
const SCRIPT_ID = 'cf-turnstile-script'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      reset: (id?: string) => void
      remove: (id?: string) => void
    }
  }
}

function loadScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.turnstile) return Promise.resolve()

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('load-failed')))
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('load-failed'))
    document.head.appendChild(script)
  })
}

export interface TurnstileHandle {
  reset: () => void
}

export default function Turnstile({
  onVerify,
  onExpire,
  onError,
  handleRef,
}: {
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
  handleRef?: React.MutableRefObject<TurnstileHandle | null>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  // Keep the latest callbacks without forcing a re-render of the widget.
  const cbRef = useRef({ onVerify, onExpire, onError })
  cbRef.current = { onVerify, onExpire, onError }

  useEffect(() => {
    let cancelled = false
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

    if (!siteKey) {
      console.error('[turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set')
      cbRef.current.onError?.()
      return
    }

    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          action: 'contact',
          callback: (token: string) => cbRef.current.onVerify(token),
          'expired-callback': () => cbRef.current.onExpire?.(),
          'error-callback': () => cbRef.current.onError?.(),
        })
        if (handleRef) {
          handleRef.current = {
            reset: () => {
              if (widgetIdRef.current && window.turnstile) {
                window.turnstile.reset(widgetIdRef.current)
              }
            },
          }
        }
      })
      .catch(() => {
        if (!cancelled) cbRef.current.onError?.()
      })

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          /* widget already gone */
        }
      }
      widgetIdRef.current = null
      if (handleRef) handleRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} className="min-h-[65px]" />
}
