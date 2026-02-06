"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Levels } from "@/components/levels"
import { Marketplace } from "@/components/marketplace"
import { Founder } from "@/components/founder"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Vault } from "@/components/vault"
import { Gallery } from "@/components/gallery"
import { AgeGate } from "@/components/age-gate"

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
    return null
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
          <Levels />
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
      ) : activeTab === "gallery" ? (
        <Gallery />
      ) : (
        <Vault />
      )}

      <Footer />
    </main>
  )
}
