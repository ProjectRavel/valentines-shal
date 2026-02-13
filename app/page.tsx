"use client"

import { useState, useRef, useEffect } from "react"
import { LandingSection } from "@/components/landing-section"
import { MainMessage } from "@/components/main-message"
import { MemorySection } from "@/components/memory-section"
import { SpotifySection } from "@/components/spotify-section"
import { ClosingSection } from "@/components/closing-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { FloatingHearts } from "@/components/floating-hearts"
import { CursorSparkles } from "@/components/cursor-sparkles"
import { BackgroundMusic } from "@/components/background-music"

export default function Page() {
  const [opened, setOpened] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => setShowContent(true), 100)
      return () => clearTimeout(timer)
    }
  }, [opened])

  return (
    <main ref={mainRef} className="relative overflow-x-hidden">
      {/* Background music toggle — always present */}
      {opened && <BackgroundMusic />}

      {/* Landing screen */}
      <div
        className="transition-all duration-1000 ease-in-out"
        style={{
          opacity: opened ? 0 : 1,
          pointerEvents: opened ? "none" : "auto",
          position: opened ? "absolute" : "relative",
          inset: 0,
          zIndex: opened ? -1 : 10,
          transform: opened ? "scale(1.05)" : "scale(1)",
        }}
      >
        <LandingSection onOpen={() => setOpened(true)} />
      </div>

      {/* Main content */}
      {opened && (
        <div
          className="transition-all duration-1000 ease-in-out"
          style={{ opacity: showContent ? 1 : 0 }}
        >
          <FloatingHearts />
          <CursorSparkles />

          <MainMessage />
          <MemorySection />
          <SpotifySection />
          <ClosingSection />
          <WhatsAppSection />
        </div>
      )}
    </main>
  )
}
