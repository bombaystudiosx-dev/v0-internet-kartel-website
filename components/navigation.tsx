"use client"

import { useEffect, useState } from "react"

const tabs = [
  { label: "Internet Kartel", id: "home" },
  { label: "Gallery", id: "gallery" },
  { label: "Cali_Bombay Vault", id: "vault" },
]

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Levels", href: "#levels" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Founder", href: "#founder" },
]

export function Navigation({
  activeTab,
  onTabChange,
}: {
  activeTab: string
  onTabChange: (tab: string) => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sectionLinks = activeTab === "home" ? homeLinks : []

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            onTabChange("home")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-2"
        >
          <svg width="20" height="16" viewBox="0 0 32 24" fill="none" className="text-primary">
            <path d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z" fill="currentColor" />
            <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
          </svg>
          <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground">
            IK
          </span>
        </button>

        {/* Desktop: Tabs + section links */}
        <div className="hidden items-center gap-8 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                onTabChange(tab.id)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className={`font-display text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="mt-1 h-0.5 w-full bg-primary" />
              )}
            </button>
          ))}
          {sectionLinks.length > 0 && (
            <div className="mx-2 h-4 w-px bg-border" />
          )}
          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-foreground transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6">
          {/* Tab switches */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                onTabChange(tab.id)
                setMenuOpen(false)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className={`flex min-h-[48px] items-center font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === tab.id && (
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              )}
              {tab.label}
            </button>
          ))}

          {sectionLinks.length > 0 && (
            <div className="my-2 h-px w-full bg-border" />
          )}

          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] items-center pl-4 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
