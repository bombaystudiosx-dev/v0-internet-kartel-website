export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="20" height="16" viewBox="0 0 32 24" fill="none" className="text-primary">
              <path d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z" fill="currentColor" />
              <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
            </svg>
            <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Internet Kartel
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#levels" className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground">Levels</a>
            <a href="#marketplace" className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground">Marketplace</a>
            <a href="#founder" className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground">Founder</a>
            <span className="text-xs uppercase tracking-[0.15em] text-kartel-gold/60">Vault</span>
          </div>

          {/* Divider */}
          <div className="h-px w-16 bg-border" />

          {/* Copyright */}
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50">
            Internet Kartel. All Rights Reserved. Founded by Cali_Bombay.
          </p>
        </div>
      </div>
    </footer>
  )
}
