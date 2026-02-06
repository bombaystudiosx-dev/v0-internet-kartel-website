"use client"

import { useState } from "react"
import { ServiceCheckoutModal } from "@/components/service-checkout-modal"

const levels = [
  {
    name: "Mixtape Cover Express",
    price: "$50",
    description: "Custom mixtape cover. 24-hour turnaround. Two revisions.",
    tier: 1,
  },
  {
    name: "Influencer Package",
    price: "$100",
    description: "Brand skeleton, logo direction, social layout blueprint, website direction.",
    tier: 2,
  },
  {
    name: "Superstar Bundle",
    price: "$250",
    description: "One month Instagram promotion, four custom exotic graphics, brand organization structure.",
    tier: 3,
  },
  {
    name: "Store Package",
    price: "$350",
    description: "Full Shopify store build, product layout, brand-ready structure.",
    tier: 4,
  },
  {
    name: "General",
    price: "$500",
    description: "Two months Instagram promotion, advanced graphics, live store deployment, growth setup.",
    tier: 5,
  },
  {
    name: "Kingpin",
    price: "Elite",
    description: "Maximum level. Full brand elevation, custom art direction, priority execution. By invitation only.",
    tier: 6,
    elite: true,
  },
]

export function Levels() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<{
    name: string
    price: string
    description: string
  } | null>(null)

  return (
    <section id="levels" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Ranks
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider md:text-5xl text-foreground">
            Choose Your Level
          </h2>
          <p className="max-w-md text-muted-foreground">
            Every move has a level. Where you start determines how fast you rise.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, index) => (
            <div
              key={level.name}
              className={`group relative flex flex-col gap-4 border p-6 transition-all duration-300 md:p-8 ${
                level.elite
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card hover:border-muted-foreground/30"
              } ${hoveredIndex === index ? "scale-[1.02]" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tier indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {Array.from({ length: level.tier }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        level.elite ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                {level.elite && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    By Invitation
                  </span>
                )}
              </div>

              {/* Name & price */}
              <div className="flex flex-col gap-1">
                <h3 className={`font-display text-xl font-bold uppercase tracking-wider ${
                  level.elite ? "text-primary" : "text-foreground"
                }`}>
                  {level.name}
                </h3>
                <span className={`font-display text-2xl font-bold ${
                  level.elite ? "text-primary" : "text-foreground"
                }`}>
                  {level.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {level.description}
              </p>

              {/* CTA */}
              <div className="mt-auto pt-4">
                <button
                  type="button"
                  onClick={() => {
                    // Only open modal for services (not the $50 Mixtape Cover Express)
                    if (level.name !== "Mixtape Cover Express") {
                      setSelectedService({
                        name: level.name,
                        price: level.price,
                        description: level.description,
                      })
                    }
                  }}
                  className={`flex min-h-[48px] w-full items-center justify-center font-display text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                    level.elite
                      ? "border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "border border-border bg-secondary text-foreground hover:border-muted-foreground/40 hover:bg-secondary/80"
                  }`}
                >
                  {level.elite ? "Request Access" : "Select Level"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Checkout Modal */}
      {selectedService && (
        <ServiceCheckoutModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceName={selectedService.name}
          servicePrice={selectedService.price}
          serviceDescription={selectedService.description}
        />
      )}
    </section>
  )
}
