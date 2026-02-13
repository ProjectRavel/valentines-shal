"use client"

import { useState } from "react"
import { Send, Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function WhatsAppSection() {
  const [message, setMessage] = useState("")
  const { ref: titleRef, isVisible: titleVisible } = useInView(0.3)
  const { ref: formRef, isVisible: formVisible } = useInView(0.2)

  const PHONE = "6285111321101"

  const handleSend = () => {
    const text = encodeURIComponent(message.trim())
    if (!text) return
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank")
  }

  return (
    <section className="relative flex flex-col items-center px-6 py-20">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(320 20% 95%) 0%, hsl(215 30% 95%) 50%, hsl(220 30% 97%) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={titleRef}
        className={`max-w-sm text-center transition-all duration-700 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <p
          className="text-sm leading-relaxed md:text-base md:leading-relaxed"
          style={{ color: "hsl(220 20% 35%)" }}
        >
          Eummm maaf aku baru bisa ngasih ini{" "}
          <span className="font-serif italic" style={{ color: "hsl(340 65% 55%)" }}>
            {"'untuk sekarang'"}
          </span>
          ..
        </p>
        <p
          className="mt-4 text-sm leading-relaxed md:text-base md:leading-relaxed"
          style={{ color: "hsl(220 20% 35%)" }}
        >
          ayoo kita lanjut di whatsapp lagi?
        </p>
        <p
          className="mt-2 font-serif text-base font-medium md:text-lg"
          style={{ color: "hsl(220 25% 18%)" }}
        >
          tapi sebelum itu ada yang mau kamu sampaikan?
        </p>
      </div>

      {/* Freetext + WhatsApp button */}
      <div
        ref={formRef}
        className={`mt-10 w-full max-w-md transition-all duration-700 ${formVisible ? "animate-scale-in" : "opacity-0"}`}
        style={{ animationDelay: "200ms", animationFillMode: "both" }}
      >
        <div
          className="overflow-hidden rounded-2xl border bg-primary-foreground/60 backdrop-blur-md"
          style={{
            borderColor: "hsl(215 70% 60% / 0.2)",
            boxShadow:
              "0 8px 32px hsl(215 70% 60% / 0.06), 0 2px 8px hsl(340 65% 62% / 0.04)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-3.5"
            style={{
              background:
                "linear-gradient(135deg, hsl(215 55% 50%) 0%, hsl(215 65% 45%) 100%)",
            }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
              <Heart size={14} strokeWidth={2} style={{ color: "white" }} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "white" }}>
                Alexa ShaaallOom
              </p>
              <p className="text-[11px]" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
                tulis pesanmu di sini..
              </p>
            </div>
          </div>

          {/* Chat bubble area */}
          <div className="px-4 py-5" style={{ background: "hsl(220 25% 96% / 0.5)" }}>
            {/* Decorative bubble */}
            <div className="mb-4 ml-auto max-w-[75%]">
              <div
                className="rounded-2xl rounded-br-md px-4 py-2.5"
                style={{
                  background: "linear-gradient(135deg, hsl(215 55% 50%) 0%, hsl(215 65% 45%) 100%)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "white" }}>
                  HAYY, janlups chat aku. jangan kirim stiker pinjol LAH WEH
                </p>
              </div>
              <p
                className="mt-1 text-right text-[10px]"
                style={{ color: "hsl(220 15% 60%)" }}
              >
                you
              </p>
            </div>

            {/* Input area */}
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesanmu..."
                  rows={3}
                  className="w-full resize-none rounded-2xl border bg-primary-foreground px-4 py-3 text-sm leading-relaxed outline-none transition-all duration-300 placeholder:text-muted-foreground focus:ring-2"
                  style={{
                    borderColor: "hsl(220 20% 88%)",
                    color: "hsl(220 25% 18%)",
                    ["--tw-ring-color" as string]: "hsl(215 70% 60% / 0.3)",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 disabled:opacity-40"
                style={{
                  background: message.trim()
                    ? "linear-gradient(135deg, hsl(142 70% 45%) 0%, hsl(142 60% 40%) 100%)"
                    : "hsl(220 20% 90%)",
                  boxShadow: message.trim()
                    ? "0 4px 15px hsl(142 70% 45% / 0.3)"
                    : "none",
                  color: message.trim() ? "white" : "hsl(220 15% 60%)",
                }}
                aria-label="Kirim pesan ke WhatsApp"
              >
                <Send size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          pesanmu akan dikirim via WhatsApp
        </p>
      </div>
    </section>
  )
}
