export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/043e4302-8193-46a3-b31e.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <svg width="24" height="18" viewBox="0 0 32 24" fill="none" className="text-primary">
              <path d="M16 0L20 8L28 4L24 16H8L4 4L12 8L16 0Z" fill="currentColor" />
              <rect x="7" y="18" width="18" height="4" rx="1" fill="currentColor" />
            </svg>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="font-display text-3xl font-bold uppercase tracking-wider md:text-5xl lg:text-6xl text-foreground text-balance">
            Ready to Move Different?
          </h2>

          <p className="text-lg text-muted-foreground">
            The door is open. What you do next decides everything.
          </p>

          <a
            href="#levels"
            className="mt-2 inline-flex min-h-[52px] items-center gap-2 bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
          >
            Enter Internet Kartel
          </a>
        </div>
      </div>
    </section>
  )
}
