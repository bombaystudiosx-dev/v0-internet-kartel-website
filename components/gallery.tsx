"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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

            {/* Description */}
            <div className="mb-12 rounded-none border border-border bg-secondary/10 p-6 md:p-8">
              <p className="text-center text-sm leading-relaxed text-foreground md:text-base">
                100% authentic design, designs creations, and intellectual properties owned
                rightfully by Internet Kartel. If you would like to own one of these
                designs or would like a custom, please submit your information for
                consulting.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    // Scroll to the contact/final CTA section
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    // Switch to home tab to access contact
                    const homeTab = document.querySelector('[data-tab="home"]') as HTMLButtonElement
                    if (homeTab) homeTab.click()
                  }}
                  className="flex min-h-[48px] items-center justify-center border border-primary bg-primary/10 px-8 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Image 1 - IK Map Design */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/790f563c-ac6e-4eb4-b240.jpeg"
                    alt="IK Map Design - Street layout with Internet Kartel branding"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Image 2 - Hunna Dolla Sips */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/6dca1a6c-3f7f-4595-9d7d.jpeg"
                    alt="Hunna Dolla Sips - Creative beverage can design"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Image 3 - Lucky Licks */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/395f0347-6d85-49a1-834d.jpeg"
                    alt="Lucky Licks - Surreal ice cream design"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Image 4 - Bombay Hustle */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/50892217-cde4-43be-af18.jpeg"
                    alt="Bombay Hustle Company - Dice logo design"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Image 5 - IK Neon Logo */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/bd85773b-f8e9-447c-8be4.jpeg"
                    alt="Internet Kartel Neon Logo - Brand identity"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Image 6 - Stop Snitching */}
              <div className="group relative overflow-hidden rounded-none border border-border bg-secondary/20 transition-all hover:border-primary/50">
                <div className="aspect-square">
                  <img
                    src="/images/ba68826b-7b5a-460b-8cce.jpeg"
                    alt="Stop Snitching - Las Vegas Police design"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
