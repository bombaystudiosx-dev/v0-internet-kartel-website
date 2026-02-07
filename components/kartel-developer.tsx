"use client"

import { useState, useEffect, useCallback } from "react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function KartelDeveloper() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [a2hsStatus, setA2hsStatus] = useState<"idle" | "installed" | "dismissed">("idle")
  const [showIOSModal, setShowIOSModal] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check localStorage for existing status
    try {
      const stored = localStorage.getItem("kartelDeveloper_a2hs")
      if (stored === "installed" || stored === "dismissed") {
        setA2hsStatus(stored)
      }
    } catch {
      // localStorage not available
    }

    // Detect iOS
    const ua = navigator.userAgent
    const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    setIsIOS(ios)

    // Listen for Android/Chromium install prompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleAddToHomeScreen = useCallback(async () => {
    if (isIOS) {
      setShowIOSModal(true)
      return
    }

    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      const status = outcome === "accepted" ? "installed" : "dismissed"
      setA2hsStatus(status)
      try {
        localStorage.setItem("kartelDeveloper_a2hs", status)
      } catch {
        // localStorage not available
      }
      setDeferredPrompt(null)
    }
  }, [deferredPrompt, isIOS])

  const dismissIOSModal = useCallback(() => {
    setShowIOSModal(false)
    setA2hsStatus("dismissed")
    try {
      localStorage.setItem("kartelDeveloper_a2hs", "dismissed")
    } catch {
      // localStorage not available
    }
  }, [])

  return (
    <section className="relative min-h-screen pt-24 md:pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Icon */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
            <img
              src="/images/kartel-developer-icon.png"
              alt="Kartel Developer"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                New Module
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>

            <h1 className="font-display text-4xl font-bold uppercase tracking-wider md:text-6xl text-foreground text-balance">
              Kartel Developer
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Build websites, apps, and everything under one umbrella.
              Your one-stop shop for digital creation, powered by Internet Kartel.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            {a2hsStatus !== "installed" && (
              <button
                type="button"
                onClick={handleAddToHomeScreen}
                className="flex min-h-[52px] items-center justify-center gap-2 border border-primary bg-primary/10 px-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Add to Home Screen
              </button>
            )}

            {a2hsStatus === "installed" && (
              <div className="flex min-h-[52px] items-center justify-center gap-2 border border-[#39ff14]/40 bg-[#39ff14]/10 px-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#39ff14]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Installed
              </div>
            )}

            <button
              type="button"
              className="flex min-h-[52px] items-center justify-center px-8 border border-border bg-secondary font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-all hover:border-muted-foreground/40 hover:bg-secondary/80"
            >
              Open Module
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Websites", desc: "Build full custom sites" },
              { label: "Apps", desc: "Mobile & web applications" },
              { label: "One Umbrella", desc: "Everything in one place" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 border border-border bg-card p-6"
              >
                <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                  {feature.label}
                </span>
                <span className="text-xs text-muted-foreground">{feature.desc}</span>
              </div>
            ))}
          </div>

          {/* Sale pricing */}
          <div className="mt-4 flex flex-col items-center gap-2 border border-border bg-card p-8 w-full max-w-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Launch Price
            </span>
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-bold text-muted-foreground line-through decoration-red-500 decoration-2">
                $100
              </span>
              <span className="font-display text-4xl font-black text-foreground">
                $50
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                First Month
              </span>
            </div>
            <span className="mt-1 font-display text-sm font-bold uppercase tracking-wider text-[#39ff14]">
              +20,000 credits to build on
            </span>
          </div>
        </div>
      </div>

      {/* iOS Add to Home Screen Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="mx-6 flex max-w-sm flex-col gap-6 border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground text-center">
              Add to Home Screen
            </h3>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-secondary font-display text-xs font-bold text-foreground">
                  1
                </span>
                <p>
                  {"Tap the "}
                  <strong className="text-foreground">Share</strong>
                  {" button at the bottom of Safari"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-secondary font-display text-xs font-bold text-foreground">
                  2
                </span>
                <p>
                  {"Scroll down and tap "}
                  <strong className="text-foreground">Add to Home Screen</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-secondary font-display text-xs font-bold text-foreground">
                  3
                </span>
                <p>
                  {"Tap "}
                  <strong className="text-foreground">Add</strong>
                  {" to confirm"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissIOSModal}
              className="flex min-h-[48px] w-full items-center justify-center border border-primary bg-primary/10 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
