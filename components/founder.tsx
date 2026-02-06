export function Founder() {
  return (
    <section id="founder" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Image */}
          <div className="relative w-full max-w-xs shrink-0 md:max-w-sm">
            <div className="aspect-square overflow-hidden">
              <img
                src="/images/0fd273d7-809c-4567-8e85.jpeg"
                alt="Cali_Bombay - Founder of Internet Kartel"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 h-full w-full border border-accent/20 -z-10" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                The Architect
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold uppercase tracking-wider md:text-5xl text-foreground">
              Cali_Bombay
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Founder of Internet Kartel. Visionary. Already operating on levels most people discuss. Built this world from nothing and turned ambition into an empire.
            </p>

            <div className="flex items-center justify-center gap-6 md:justify-start">
              <div className="flex flex-col items-center gap-1 md:items-start">
                <span className="font-display text-2xl font-bold text-foreground">IK</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Internet Kartel</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col items-center gap-1 md:items-start">
                <span className="font-display text-2xl font-bold text-foreground">BH</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bombay Hustle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
