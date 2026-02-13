"use client"

import { useInView } from "@/hooks/use-in-view"

interface RevealLineProps {
  children: React.ReactNode
  delay?: number
  direction?: "left" | "right" | "up"
}

function RevealLine({ children, delay = 0, direction = "up" }: RevealLineProps) {
  const { ref, isVisible } = useInView(0.3)

  const animClass =
    direction === "left"
      ? "animate-slide-in-left"
      : direction === "right"
        ? "animate-slide-in-right"
        : "animate-fade-in-up"

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${isVisible ? animClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  )
}

export function MainMessage() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-24">
      {/* Subtle bg gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(240 20% 96%) 50%, hsl(320 20% 96%) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-lg">
        <RevealLine delay={0} direction="left">
          <h2 className="mb-10 font-serif text-2xl font-semibold tracking-tight md:text-3xl text-balance" style={{ color: "hsl(220 25% 18%)" }}>
            {"Untuk kamu \u2014 Alexa Shalom or Shal?"}
          </h2>
        </RevealLine>

        <div className="space-y-6 text-sm leading-relaxed md:text-base md:leading-relaxed" style={{ color: "hsl(220 20% 35%)" }}>
          <RevealLine delay={100} direction="right">
            <p>
              aku jujur ga jago bikin kata-kata indah,
              <br />
              dan ini juga bukan sesuatu yang dibuat biar terdengar puitis.
            </p>
          </RevealLine>

          <RevealLine delay={200} direction="left">
            <p>
              tapi sejak kamu ada di timeline hidupku,
              <br />
              banyak hal kecil jadi lebih kerasa.
            </p>
          </RevealLine>

          <RevealLine delay={300}>
            <p>hari biasa kadang jadi ga biasa.</p>
            <br />
            <p>Setiap hari hidup aku rasanya lebih bewarna?</p>
          </RevealLine>

          <RevealLine delay={400} direction="right">
            <p>
              dan entahlah aku juga bingung kenapa,
              <br />
              banyak momen random selalu terasa seperti:
              <br />
              <span className="mt-2 inline-block font-serif text-base italic md:text-lg" style={{ color: "hsl(340 65% 55%)" }}>
                {"\u2018ini bakal lucu kalau diceritain ke Shal.\u2019"}
              </span>
            </p>
          </RevealLine>

          <RevealLine delay={500} direction="left">
            <p>
              bukan karena kamu sempurna,
              <br />
              tapi karena kamu yaa.. <em className="font-serif not-italic font-semibold" style={{ color: "hsl(215 70% 50%)" }}>kamu</em>.
            </p>
          </RevealLine>

          <RevealLine delay={600}>
            <p className="text-base font-semibold md:text-lg" style={{ color: "hsl(220 25% 18%)" }}>
              dan itu cukup.
            </p>
          </RevealLine>
        </div>
      </div>
    </section>
  )
}
