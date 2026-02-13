"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface LandingSectionProps {
  onOpen: () => void
}

export function LandingSection({ onOpen }: LandingSectionProps) {
  const [showSubtext, setShowSubtext] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtext(true), 600)
    const t2 = setTimeout(() => setShowButton(true), 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const handleOpen = () => {
    setIsPressed(true)
    // Dispatch custom event to start music (Safari needs user gesture)
    window.dispatchEvent(new Event("valentine-play-music"))
    setTimeout(onOpen, 400)
  }

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      {/* Blue-pink gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, hsl(215 50% 92%) 0%, hsl(240 25% 90%) 30%, hsl(300 25% 90%) 60%, hsl(340 40% 89%) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative blurred orbs */}
      <div
        className="absolute -z-[5] rounded-full"
        style={{
          width: 280,
          height: 280,
          top: "12%",
          left: "-8%",
          background: "hsl(215 70% 80% / 0.3)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -z-[5] rounded-full"
        style={{
          width: 220,
          height: 220,
          bottom: "15%",
          right: "-6%",
          background: "hsl(340 65% 75% / 0.3)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative flex max-w-sm flex-col items-center gap-5 rounded-3xl border border-accent/30 bg-primary-foreground/50 px-8 py-12 text-center shadow-xl shadow-accent/10 backdrop-blur-xl md:max-w-md md:px-14 md:py-16">
        <Heart
          className="animate-pulse-soft"
          style={{ color: "hsl(340 65% 62%)" }}
          size={28}
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <h1
          className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
          style={{ color: "hsl(220 25% 18%)" }}
        >
          Happy Valentine{"'"}s Day, Shal.
        </h1>

        <div
          className="transition-all duration-700"
          style={{
            opacity: showSubtext ? 1 : 0,
            transform: showSubtext ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cuma sesuatu yang 'kecil kecilan dulu' yang sengaja aku buat untuk kamu.
          </p>
          <p
            className="mt-2 font-serif text-sm italic"
            style={{ color: "hsl(340 65% 62%)" }}
          >
            semoga jadi sesuatu yang unik, yang belom pernah di dapatkan sebelumnya ya?
          </p>
        </div>

        <button
          onClick={handleOpen}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          className="mt-4 rounded-full px-10 py-3.5 text-sm font-medium transition-all duration-500"
          style={{
            opacity: showButton ? 1 : 0,
            transform: showButton
              ? isPressed
                ? "translateY(0) scale(0.95)"
                : "translateY(0) scale(1)"
              : "translateY(15px) scale(0.95)",
            background:
              "linear-gradient(135deg, hsl(340 65% 62%) 0%, hsl(280 40% 60%) 50%, hsl(215 70% 60%) 100%)",
            color: "white",
            boxShadow: isPressed
              ? "0 2px 10px hsl(340 65% 62% / 0.2)"
              : "0 8px 30px hsl(340 65% 62% / 0.25), 0 4px 15px hsl(215 70% 60% / 0.15)",
            pointerEvents: showButton ? "auto" : "none",
          }}
        >
          Buka
        </button>
      </div>
    </section>
  )
}
