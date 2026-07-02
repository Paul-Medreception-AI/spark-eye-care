'use client'
import { useState } from 'react'

type Props = {
  videoId: string
  title: string
  /** Optional aspect ratio; defaults to 16:9 */
  aspect?: '16-9' | '4-3'
}

/**
 * Lightweight YouTube embed — shows the thumbnail with a play button until
 * clicked, then swaps in the real iframe. Saves ~600KB of player JS per
 * video for anyone who doesn't press play. Standard performance pattern
 * for content-heavy pages.
 */
export default function YouTubeEmbed({ videoId, title, aspect = '16-9' }: Props) {
  const [activated, setActivated] = useState(false)

  const aspectClass = aspect === '4-3' ? 'aspect-[4/3]' : 'aspect-video'
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  if (activated) {
    return (
      <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-lg bg-black`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block w-full ${aspectClass} rounded-2xl overflow-hidden shadow-lg bg-black cursor-pointer`}
    >
      <img
        src={thumb}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-700 group-hover:scale-110 shadow-2xl transition-all">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-semibold text-sm sm:text-base line-clamp-2 text-left">{title}</p>
      </div>
    </button>
  )
}
