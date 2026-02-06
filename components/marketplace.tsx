"use client"

import { useState } from "react"

const featuredProduct = {
  name: "The Original InternetKartel Hoodie",
  category: "Elite Exclusive",
  price: "$75",
  fit: "Unisex",
  tagline: "Precision-Embroidered Front. DGT-Printed Back. Built for Royalty.",
  description:
    "Crafted from heavyweight premium fleece, the Original InternetKartel Hoodie is the cornerstone of the empire. Front chest features meticulous raised embroidery of the full Internet Kartel insignia. The reverse unveils a commanding oversized IK monogram rendered in proprietary DGT print technology. This is not merchandise. This is armor.",
  details: [
    "Hand-finished embroidered front crest",
    "Oversized IK DGT-printed back graphic",
    "380 GSM heavyweight fleece construction",
    "Unisex silhouette, true to size",
    "Limited production, elite access only",
  ],
  images: [
    "/images/marketplace-hero.jpeg",
    "/images/ik-hoodie-flatlay.jpeg",
    "/images/ik-hoodie-front.jpeg",
    "/images/ik-hoodie-back.jpeg",
    "/images/ik-hoodie-back-dark.jpeg",
  ],
}

const products = [
  {
    name: "Full Court Press - Internet Kartel Jeans",
    category: "Limited Archive Series",
    price: "$125",
    image: "/images/full-court-press-box.jpeg",
    tagline: "State of Emergency: Newspaper Asset Fade Edition",
    description: "Born from chaos, refined through artistry. These aren't just jeans—they're wearable journalism. Hand-crafted premium denim featuring our signature newspaper asset fade gradient, each pair uniquely distressed with archival print overlays and flame-kissed orange accents. Reinforced with industrial-grade stretch technology for uncompromising durability and all-day comfort. Machine washable without fade deterioration. Delivered in a signature Internet Kartel presentation box. Belt sold separately. This is archival streetwear. This is Full Court Press.",
    isPremium: true,
    features: [
      "Signature newspaper asset fade gradient",
      "Hand-applied distressing & archival print overlay",
      "Military-grade stretch denim construction",
      "Fade-resistant wash technology",
      "Gold 'Full Court Press' embroidered lettering",
      "Numbered limited edition run",
      "Luxury IK box presentation"
    ]
  },
  {
    name: "30 Days Straight - Leather Varsity Jacket",
    category: "Custom Limited Edition",
    price: "$300",
    image: "/images/30-days-jacket-box.jpeg",
    tagline: "Eviction Notice: When You Were Really Living in the Trenches",
    description: "An ode to survival. A masterpiece born from struggle. This hand-crafted premium leather varsity jacket immortalizes the 30-day eviction notice—a symbol of resilience when you were really living in the trenches. Black and royal blue genuine leather construction with hand-embroidered gold lettering on the chest, featuring an artistically rendered eviction notice collage on the back. Each jacket tells a story of turning hardship into heritage. Presented in an exclusive Internet Kartel luxury box with tissue wrapping.",
    isPremium: true,
  },
  {
    name: "Bombay Hustle - Street Hustle Essential",
    category: "Eau De Parfum",
    price: "$65",
    image: "/images/bombay-hustle-fragrance.jpeg",
    tagline: "Late-Night City Energy. Underground Hustle Culture.",
    description: "The scent of power and ambition bottled. A luxury streetwear fragrance that merges graffiti-inspired aesthetics with premium perfumery. Dark gradient glass (black to red) symbolizes the relentless late-night grind. Cityscape artwork wraps the bottle, capturing urban authenticity and hustle mentality. Delivered in a signature Internet Kartel presentation box with white satin lining. This isn't just a scent—it's a lifestyle statement.",
    isPremium: true,
    isSoldOut: true,
  },
  {
    name: "IK Street Crop Top",
    category: "Internet Kartel",
    price: "$45",
    image: "/images/acf62aef-7e71-47fe-9d32.jpeg",
  },
]

export function Marketplace() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section id="marketplace" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Culture
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider md:text-5xl text-foreground">
            Kartel Marketplace
          </h2>
          <p className="max-w-md text-muted-foreground">
            Merch, music, and creative products from one world.
          </p>
        </div>

        {/* Featured Product: The Original InternetKartel Hoodie */}
        <div className="mb-16 border border-border bg-card">
          <div className="flex flex-col lg:flex-row">
            {/* Image gallery */}
            <div className="flex flex-col lg:w-3/5">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square lg:aspect-[4/5]">
                <img
                  src={featuredProduct.images[activeImage] || "/placeholder.svg"}
                  alt={`${featuredProduct.name} - View ${activeImage + 1}`}
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <span className="absolute left-4 top-4 bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  {featuredProduct.category}
                </span>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-1 overflow-x-auto p-2">
                {featuredProduct.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative min-h-[64px] min-w-[64px] flex-shrink-0 overflow-hidden transition-all ${
                      activeImage === i
                        ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${featuredProduct.name} thumbnail ${i + 1}`}
                      className="h-16 w-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col justify-center gap-6 p-6 lg:w-2/5 lg:p-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Signature Collection
                </p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl text-balance">
                  {featuredProduct.name}
                </h3>
                <p className="text-sm italic text-muted-foreground">
                  {featuredProduct.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-foreground">
                  {featuredProduct.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {featuredProduct.fit}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {featuredProduct.description}
              </p>

              <ul className="flex flex-col gap-2.5">
                {featuredProduct.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-2 flex min-h-[48px] w-full items-center justify-center bg-primary px-8 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Remaining product grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`group relative flex flex-col overflow-hidden border transition-all ${
                product.isPremium
                  ? "border-primary/50 bg-card shadow-lg shadow-primary/10 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {product.isSoldOut && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                    <span className="bg-destructive px-4 py-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-destructive-foreground">
                      Sold Out
                    </span>
                  </div>
                )}
                <span
                  className={`absolute left-3 top-3 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm ${
                    product.isPremium
                      ? "bg-primary/90 text-primary-foreground"
                      : "bg-secondary/90 text-muted-foreground"
                  }`}
                >
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className={`flex flex-col gap-2 ${product.isPremium ? "p-6" : "p-4"}`}>
                <h3 className="text-sm font-semibold text-foreground text-balance">{product.name}</h3>
                {product.tagline && (
                  <p className="text-xs italic leading-relaxed text-muted-foreground">
                    {product.tagline}
                  </p>
                )}
                {product.description && (
                  <p className="text-xs leading-relaxed text-muted-foreground/80 line-clamp-3">
                    {product.description}
                  </p>
                )}
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-foreground">{product.price}</span>
                  {product.isPremium && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Limited
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
