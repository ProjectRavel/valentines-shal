"use client"

import { Music } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DXcBWIGoYBM5M"

export function SpotifySection() {
  const { ref, isVisible } = useInView(0.2)

  return (
    <section className="relative flex flex-col items-center px-6 py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(240 20% 96%) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`mb-10 flex flex-col items-center gap-3 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div
          className="flex items-center justify-center rounded-full p-3"
          style={{ background: "hsl(215 70% 60% / 0.1)" }}
        >
          <Music size={20} strokeWidth={1.5} style={{ color: "hsl(215 70% 60%)" }} aria-hidden="true" />
        </div>
        <h2
          className="font-serif text-2xl font-semibold tracking-tight md:text-3xl text-balance"
          style={{ color: "hsl(220 25% 18%)" }}
        >
          lagu-lagu yang entah kenapa selalu bawa aku ke kamu
        </h2>
        <p className="text-xs text-muted-foreground">playlist di Spotify (yang baru saja aku publik)</p>
      </div>

      <div
        className={`w-full max-w-md overflow-hidden rounded-2xl border bg-primary-foreground/60 p-3 backdrop-blur-md transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        style={{
          borderColor: "hsl(215 70% 60% / 0.2)",
          boxShadow: "0 8px 32px hsl(215 70% 60% / 0.08)",
          animationDelay: "200ms",
          animationFillMode: "both",
        }}
      >
        <iframe
          title="Spotify Playlist"
          src={`https://open.spotify.com/embed/playlist/4LOzXibDCRIEIWFagblDdi?utm_source=generator`}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
          style={{ border: 0 }}
        />
      </div>
    </section>
  )
}
