"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Marketplace } from "@/components/marketplace"
import { Founder } from "@/components/founder"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { AgeGate } from "@/components/age-gate"

// Lazy load components that aren't immediately visible
const Levels = lazy(() => import("@/components/levels").then(m => ({ default: m.Levels })))
const Gallery = lazy(() => import("@/components/gallery").then(m => ({ default: m.Gallery })))
const Vault = lazy(() => import("@/components/vault").then(m => ({ default: m.Vault })))

export default function Page() {
  const [activeTab, setActiveTab] = useState("home")
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already been verified
    const verified = localStorage.getItem("ageVerified")
    if (verified === "true") {
      setIsVerified(true)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!isVerified) {
    return <AgeGate onVerified={() => setIsVerified(true)} />
  }

  return (
    <main className="min-h-screen">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "home" ? (
        <>
          <Hero />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px w-full bg-border" />
          </div>
          <About />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px w-full bg-border" />
          </div>
          <Marketplace />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px w-full bg-border" />
          </div>
          <Founder />
          <FinalCTA />
        </>
      ) : activeTab === "services" ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Levels />
        </Suspense>
      ) : activeTab === "gallery" ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Gallery />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Vault />
        </Suspense>
      )}

      <Footer />
    </main>
  )
}
