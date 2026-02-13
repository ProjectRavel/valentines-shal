"use client"

import { Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ClosingSection() {
  const { ref: ref1, isVisible: v1 } = useInView(0.3)
  const { ref: ref2, isVisible: v2 } = useInView(0.3)
  const { ref: ref3, isVisible: v3 } = useInView(0.3)

  return (
    <section className="relative flex min-h-[70dvh] flex-col items-center justify-center px-6 py-24 text-center">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(260 20% 95%) 40%, hsl(320 25% 94%) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute -z-[5] rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "hsl(340 65% 70% / 0.12)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div
        className="max-w-md space-y-6 text-sm leading-relaxed md:text-base md:leading-relaxed"
        style={{ color: "hsl(220 20% 35%)" }}
      >
        <div
          ref={ref1}
          className={`transition-all duration-700 ${v1 ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p>
            aku ga tau masa depan bakal bakal di bawa kemana
            <br />
            atau se-chaos apa nanti
          </p>
        </div>

        <div
          ref={ref2}
          className={`transition-all duration-700 ${v2 ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <p>but for now,</p>
          <p className="mt-4">i'll just wanna say:</p>
        </div>

        <div
          ref={ref3}
          className={`transition-all duration-700 ${v3 ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <p
            className="font-serif text-xl font-semibold md:text-2xl"
            style={{ color: "hsl(340 65% 55%)" }}
          >
            aku bahagia ketika kamu ada.
          </p>
        </div>
      </div>

      <div
        className={`mt-14 flex flex-col items-center gap-3 transition-all duration-700 ${v3 ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "600ms", animationFillMode: "both" }}
      >
        <Heart
          size={16}
          strokeWidth={1.5}
          className="animate-pulse-soft"
          style={{ color: "hsl(340 65% 62%)" }}
          aria-hidden="true"
        />
        <p
          className="font-serif text-sm italic"
          style={{ color: "hsl(340 65% 62%)" }}
        >
          untuk mu valentine
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{"\u2014 r"}</p>
      </div>
    </section>
  )
}
