export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div className="relative w-full max-w-xs shrink-0 md:max-w-sm">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/acf62aef-7e71-47fe-9d32.jpeg"
                alt="Internet Kartel street culture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 h-full w-full border border-primary/20 -z-10" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
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
