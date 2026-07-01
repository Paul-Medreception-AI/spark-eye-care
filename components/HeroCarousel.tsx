'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export type HeroSlide = {
  src: string
  alt: string
  /** object-position, e.g. '50% 40%' */
  position?: string
  /** optional caption overlaid in the bottom-right of the slide, e.g. a name label */
  caption?: string
  /** optional scale (1 = fill). e.g. 0.93 shrinks the image ~7% so nothing is cropped off the edge */
  scale?: number
}

/**
 * Rotating hero banner. Designed for no more than three high-resolution images:
 *   1. The overall practice / team (not sports-specific)
 *   2. An active adult or joint-replacement patient
 *   3. A sports or athletic image
 *
 * Replace the placeholder slides in app/page.tsx with real, high-resolution
 * practice photography when available. The component auto-rotates and supports
 * swipe/keyboard via the dot controls.
 */
export default function HeroCarousel({
  slides,
  intervalMs = 6000,
}: {
  slides: HeroSlide[]
  intervalMs?: number
}) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  useEffect(() => {
    if (count <= 1) return
    const id = setInterval(() => setIndex(i => (i + 1) % count), intervalMs)
    return () => clearInterval(id)
  }, [count, intervalMs])

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={i === index ? slide.alt : ''}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: slide.position ?? '50% 40%',
              transform: slide.scale ? `scale(${slide.scale})` : undefined,
            }}
          />
          {slide.caption && (
            <span className="absolute bottom-3 right-3 z-10 rounded-md bg-[#0d1f3c]/85 px-3 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm">
              {slide.caption}
            </span>
          )}
        </div>
      ))}

      {count > 1 && (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? '1.75rem' : '0.5rem',
                backgroundColor: i === index ? '#ffffff' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
