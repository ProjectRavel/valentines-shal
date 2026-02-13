"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  color: string
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const colors = [
      "hsl(340 65% 62%)",
      "hsl(215 70% 60%)",
      "hsl(340 65% 75%)",
      "hsl(215 60% 75%)",
      "hsl(280 40% 70%)",
    ]
    const generated: Heart[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 8,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 14,
      opacity: Math.random() * 0.25 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            bottom: "-24px",
            width: heart.size,
            height: heart.size,
            ["--duration" as string]: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            filter: `drop-shadow(0 0 ${heart.size / 2}px ${heart.color})`,
          }}
          viewBox="0 0 24 24"
          fill={heart.color}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ))}
    </div>
  )
}
