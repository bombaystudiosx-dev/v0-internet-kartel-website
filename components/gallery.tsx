"use client"

import { useEffect, useState } from "react"

export function Gallery() {
  const [showCopyright, setShowCopyright] = useState(false)
  const [hasAgreed, setHasAgreed] = useState(false)

  useEffect(() => {
    // Check if user has already agreed to copyright terms
    const agreed = sessionStorage.getItem("copyrightAgreed")
    if (agreed === "true") {
      setHasAgreed(true)
    } else {
      setShowCopyright(true)
    }
  }, [])

  const handleAgree = () => {
    sessionStorage.setItem("copyrightAgreed", "true")
    setHasAgreed(true)
    setShowCopyright(false)
  }

  return (
    <>
      {/* Copyright Agreement Modal */}
      {showCopyright && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-none border border-border bg-background p-8 md:p-12">
            {/* Crown Logo */}
            <div className="mb-6 flex justify-center">
              <svg
                width="40"
                height="32"
                viewBox="0 0 32 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z"
                  fill="currentColor"
                />
                <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="mb-8 text-center font-display text-2xl font-bold uppercase tracking-[0.15em] text-foreground md:text-3xl">
              Copyright Notice
            </h2>

            {/* Content */}
            <div className="mb-8 space-y-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              <p className="text-foreground">
                All work displayed in this gallery is copyrighted and protected under
                intellectual property laws.
              </p>
              <p>
                <strong className="text-foreground">
                  This work is owned by Internet Kartel.
                </strong>
              </p>
              <p>
                You <strong className="text-foreground">must ask permission</strong>{" "}
                before taking screenshots, downloading, or reusing any work displayed in
                this gallery.
              </p>
              <p className="text-primary">
                Any plagiarism or unauthorized use will be taken very seriously and may
                result in legal action.
              </p>
            </div>

            {/* Divider */}
            <div className="mb-8 h-px w-full bg-border" />

            {/* Agreement Button */}
            <button
              type="button"
              onClick={handleAgree}
              className="flex min-h-[56px] w-full items-center justify-center border border-primary bg-primary/10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              I Understand & Agree
            </button>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      {hasAgreed && (
        <div className="min-h-screen pt-32 pb-16">
          <div className="mx-auto max-w-6xl px-6">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z"
                    fill="currentColor"
                  />
                  <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
                </svg>
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold uppercase tracking-[0.15em] text-foreground md:text-5xl lg:text-6xl">
                Gallery
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Showcasing our finest work and creative excellence
              </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[400px] items-center justify-center rounded-none border border-border bg-secondary/20 p-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-muted-foreground"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Coming Soon
                </p>
                <p className="mt-2 text-xs text-muted-foreground/70">
                  Work will be showcased here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
