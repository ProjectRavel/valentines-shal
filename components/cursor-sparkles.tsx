"use client"

import { useEffect, useRef, useCallback } from "react"

interface Sparkle {
  x: number
  y: number
  id: number
  color: string
}

export function CursorSparkles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sparkleIdRef = useRef(0)

  const colors = [
    "hsl(340 65% 62%)", // pink
    "hsl(215 70% 60%)", // blue
    "hsl(340 65% 75%)", // light pink
    "hsl(215 70% 75%)", // light blue
  ]

  const createSparkle = useCallback((x: number, y: number) => {
    const container = containerRef.current
    if (!container) return

    const count = 3
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div")
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
      const distance = 20 + Math.random() * 30
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = 4 + Math.random() * 4

      sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.6s ease-out;
        opacity: 1;
      `

      container.appendChild(sparkle)

      requestAnimationFrame(() => {
        sparkle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`
        sparkle.style.opacity = "0"
      })

      setTimeout(() => sparkle.remove(), 600)
    }
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY)
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [createSparkle])

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50" aria-hidden="true" />
}
