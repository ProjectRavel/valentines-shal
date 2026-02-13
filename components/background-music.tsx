"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = new Audio("/music/valentine.mp3")
    audio.loop = true
    audio.volume = 0.4
    audio.preload = "auto"
    audioRef.current = audio

    audio.addEventListener("canplaythrough", () => setReady(true))

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [playing])

  // Expose play function via a custom event listener so landing can trigger it
  useEffect(() => {
    const handler = () => play()
    window.addEventListener("valentine-play-music", handler)
    return () => window.removeEventListener("valentine-play-music", handler)
  }, [play])

  return (
    <button
      onClick={toggle}
      className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full border border-accent/40 bg-primary-foreground/70 p-3 backdrop-blur-md transition-all duration-300 hover:scale-105"
      style={{
        boxShadow: playing
          ? "0 0 20px hsl(340 65% 62% / 0.2)"
          : "0 2px 8px hsl(220 20% 50% / 0.08)",
        opacity: ready ? 1 : 0.5,
      }}
      aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
    >
      {playing ? (
        <Volume2 size={18} strokeWidth={1.5} style={{ color: "hsl(340 65% 62%)" }} />
      ) : (
        <VolumeX size={18} strokeWidth={1.5} style={{ color: "hsl(220 15% 55%)" }} />
      )}
    </button>
  )
}
