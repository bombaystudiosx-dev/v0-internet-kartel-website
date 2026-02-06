import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Levels } from "@/components/levels"
import { Marketplace } from "@/components/marketplace"
import { Founder } from "@/components/founder"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
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
      <Footer />
    </main>
  )
}
