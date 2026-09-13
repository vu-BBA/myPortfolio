import React, { useEffect, useRef } from 'react'

/**
 * JavaScript-driven marquee. Moves regardless of CSS animation support,
 * battery-saver modes or "reduce motion" OS settings.
 * speed = pixels per second (content always moves right-to-left).
 */
export default function MarqueeRow({ speed = 60, className = '', children }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf
    let last = performance.now()
    let offset = 0
    const step = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      const half = track.scrollWidth / 2
      offset -= speed * dt
      if (half > 0 && -offset >= half) offset += half
      track.style.transform = `translateX(${offset}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex gap-4 will-change-transform">
        {children}
        {children}
      </div>
    </div>
  )
}
