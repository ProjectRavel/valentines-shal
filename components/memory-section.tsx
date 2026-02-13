"use client"

import { useState } from "react"
import { MessageCircle, Laugh, Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface MemoryItem {
  icon: LucideIcon
  text: string
  detail: string
  color: string
  glowColor: string
}

const memories: MemoryItem[] = [
  {
    icon: MessageCircle,
    text: "YAPPINGAN yang GA PENTING",
    detail: "Semuanya yappingan kamu bener-bener aku suka, like really!",
    color: "hsl(215 70% 60%)",
    glowColor: "hsl(215 70% 60% / 0.15)",
  },
  {
    icon: Laugh,
    text: "Even baru dipertemukan akhir akhir ini",
    detail: "walau baru bertemu beberapa waktu, but you sooOOO special",
    color: "hsl(340 65% 62%)",
    glowColor: "hsl(340 65% 62% / 0.15)",
  },
  {
    icon: Clock,
    text: "Kebetulan atau.. Destiny?",
    detail: "u are first person i met on tele, and i hope being the last one too",
    color: "hsl(260 45% 62%)",
    glowColor: "hsl(260 45% 62% / 0.15)",
  },
]

function MemoryCard({ item, index }: { item: MemoryItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)
  const { ref, isVisible } = useInView(0.2)
  const Icon = item.icon

  const active = isHovered || isTapped

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? "animate-scale-in" : ""}`}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsTapped(false)
        }}
        onClick={() => setIsTapped(!isTapped)}
        className="group relative cursor-pointer flex flex-col items-center gap-3 rounded-2xl border bg-primary-foreground/60 px-5 py-7 text-center backdrop-blur-md transition-all duration-500"
        style={{
          borderColor: active ? `${item.color}40` : "hsl(220 20% 88% / 0.5)",
          boxShadow: active
            ? `0 8px 32px ${item.glowColor}, 0 0 0 1px ${item.color}20`
            : "0 2px 8px hsl(220 20% 50% / 0.06)",
          transform: active ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        <div
          className="flex items-center justify-center rounded-xl p-2.5 transition-all duration-500"
          style={{
            background: active ? `${item.color}18` : "hsl(220 20% 95%)",
          }}
        >
          <Icon
            size={22}
            strokeWidth={1.5}
            className="transition-all duration-500"
            style={{ color: active ? item.color : "hsl(220 15% 55%)" }}
            aria-hidden="true"
          />
        </div>

        <p
          className="text-sm font-medium leading-relaxed transition-colors duration-500"
          style={{ color: active ? item.color : "hsl(220 20% 30%)" }}
        >
          {item.text}
        </p>

        {/* Reveal detail on hover/tap */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: active ? 40 : 0,
            opacity: active ? 1 : 0,
          }}
        >
          <p className="text-xs leading-relaxed text-muted-foreground">
            {item.detail}
          </p>
        </div>
      </div>
    </div>
  )
}

export function MemorySection() {
  const { ref, isVisible } = useInView(0.15)

  return (
    <section className="relative flex flex-col items-center px-6 py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(320 20% 96%) 0%, hsl(220 30% 97%) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`mb-12 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h2
          className="font-serif text-2xl font-semibold tracking-tight md:text-3xl text-balance"
          style={{ color: "hsl(220 25% 18%)" }}
        >
          Hal-hal kecil yang jadi berarti
        </h2>
        <p className="mt-3 text-xs text-muted-foreground">
          tap atau hover untuk lihat lebih
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {memories.map((item, i) => (
          <MemoryCard key={item.text} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
