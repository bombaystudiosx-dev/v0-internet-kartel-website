"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ee6d2e42-b9ef-4824-ae11.jpeg"
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Crown icon */}
        <div className="flex items-center gap-1">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-primary">
            <path d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z" fill="currentColor" />
            <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
          </svg>
        </div>

        <h1 className="font-display text-6xl font-bold uppercase tracking-wider md:text-8xl lg:text-9xl">
          <span className="text-foreground">Internet</span>{" "}
          <span className="text-accent">Kartel</span>
        </h1>

        <p className="max-w-md text-lg font-medium tracking-wide text-muted-foreground md:text-xl">
          Street hustle. Real ambition. Kingpin energy.
        </p>

        <p className="text-sm tracking-widest uppercase text-muted-foreground/60">
          Founded by Cali_Bombay
        </p>

        <a
          href="#levels"
          className="mt-4 inline-flex min-h-[48px] items-center gap-2 border border-foreground/20 bg-foreground/5 px-8 py-3 font-display text-sm font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-95"
        >
          Enter Internet Kartel
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">Scroll</span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
