"use client"

import { useState } from "react"

const vaultItems: {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  downloadUrl?: string
  comingSoon?: boolean
  originalPrice?: string
  salePrice?: string
  credits?: string
}[] = [
  {
    title: "Street Operations",
    category: "Merch",
    description:
      "Hand-painted Internet Kartel Air Force 1s. Purple Reign and Mexican Flag editions. One-of-one pieces built for the culture.",
    image: "/images/street-operations-trunk.png",
    tags: ["Limited", "Custom", "1 of 1"],
    comingSoon: true,
  },

  {
    title: "Dope Sellers",
    category: "Music",
    description:
      "Darkness. Chains. Flames. The original crew photo that started a movement. Loyalty over everything.",
    image: "/images/dope-sellers.jpeg",
    tags: ["OG", "Archive"],
    comingSoon: true,
  },
  {
    title: "This Is How I Unfuck Myself",
    category: "Free E-Book",
    description:
      "Written by Cali_Bombay. Voted best book of the summer. Sold over 1,000 ebooks first week of release. A book every young entrepreneur should read.",
    image: "/images/ebook-cover.jpeg",
    tags: ["Free", "Best Seller", "Entrepreneurship"],
    downloadUrl: "https://drive.google.com/file/d/11CWowbJVyVUCJjTrGthn26s2fp9lztAK/view?usp=drivesdk",
  },
  {
    title: "Kartel Developer",
    category: "Apps",
    description:
      "Your one-stop shop for building websites, apps, and everything digital\u2014all under one umbrella. The Kartel Developer gives you the tools to build, launch, and scale your vision with 20,000 credits to get started.",
    image: "/images/kartel-developer-app.png",
    tags: ["App Builder", "Websites", "One-Stop Shop"],
    originalPrice: "$100",
    salePrice: "$50",
    credits: "+20,000 credits to build on",
  },
]

const categories = ["All", "Music", "Merch", "Free E-Book", "Apps"]

export function Vault() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof vaultItems)[0] | null>(null)

  const filtered =
    activeFilter === "All"
      ? vaultItems
      : vaultItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen pb-24 pt-28 md:pt-32">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-kartel-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-kartel-gold">
              Exclusive Access
            </span>
            <div className="h-px w-8 bg-kartel-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl lg:text-7xl text-balance">
            Cali_Bombay Vault
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            The archive. Unreleased drops, behind-the-scenes moments, and pieces that built the empire.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 scrollbar-none md:mx-0 md:flex-wrap md:justify-center md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`flex min-h-[44px] shrink-0 items-center px-5 py-2 font-display text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                activeFilter === cat
                  ? "border border-kartel-gold bg-kartel-gold/10 text-kartel-gold"
                  : "border border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Vault grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) =>
            item.salePrice ? (
              <div
                key={item.title}
                className="group relative flex flex-col overflow-hidden border border-border bg-card text-left transition-all hover:border-kartel-gold/40"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute left-3 top-3 bg-kartel-gold/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-background backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-bold text-muted-foreground line-through decoration-red-500 decoration-2">
                      {item.originalPrice}
                    </span>
                    <span className="font-display text-2xl font-black text-foreground">
                      {item.salePrice}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                      First Month
                    </span>
                  </div>
                  {/* Credits */}
                  {item.credits && (
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-[#39ff14]">
                      {item.credits}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.downloadUrl ? (
              <a
                key={item.title}
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden border border-border bg-card text-left transition-all hover:border-kartel-gold/40"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute left-3 top-3 bg-kartel-gold/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-background backdrop-blur-sm">
                    {item.category}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-kartel-gold">
                      Click to Download
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {item.title}
                  </h3>
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-kartel-gold">
                    Free Download
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ) : (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col overflow-hidden border border-border bg-card text-left transition-all hover:border-kartel-gold/40"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute left-3 top-3 bg-secondary/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
                    {item.category}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-kartel-gold">
                      View
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {item.title}
                  </h3>
                  {item.comingSoon && (
                    <span className="font-display text-2xl font-black uppercase tracking-wider text-yellow-400">
                      Coming Soon
                    </span>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            )
          )}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <span className="font-display text-lg font-bold uppercase tracking-wider text-muted-foreground/40">
              No items in this category yet
            </span>
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-kartel-gold transition-colors hover:text-kartel-gold/80"
            >
              View all
            </button>
          </div>
        )}
      </section>

      {/* Lightbox modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          onClick={() => setSelectedItem(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedItem(null)
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="flex w-full max-w-3xl flex-col overflow-hidden border border-border bg-card"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
            role="document"
          >
            {/* Close button */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-kartel-gold">
                {selectedItem.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 2L14 14M14 2L2 14" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 p-6">
              <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground md:text-2xl">
                {selectedItem.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
