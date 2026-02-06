export function About() {
  return (
    <section id="about" className="relative py-0 md:py-0">
      {/* Full-width hero image with fade */}
      <div className="relative w-full">
        <img
          src="/images/ik-sneakers-showcase.jpeg"
          alt="Internet Kartel sneakers showcase"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-6 -mt-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                The Movement
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl text-foreground">
              Ambition Becomes Presence
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Internet Kartel is where ambition becomes presence. Built for artists, creators, and entrepreneurs ready to move different.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              No agencies. No fake hype. Just elevation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
