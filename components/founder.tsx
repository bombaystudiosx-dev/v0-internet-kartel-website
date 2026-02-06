export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden">
      {/* Full-width background image - Command Center */}
      <div className="relative w-full">
        <img
          src="/images/bombay-command-center.jpeg"
          alt=""
          className="w-full object-cover min-h-[60vh] md:min-h-[70vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>

      {/* Content overlaid on bottom portion */}
      <div className="relative -mt-40 md:-mt-56 z-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-10">
            {/* Portrait photo - small, overlaid with shadow */}
            <div className="relative">
              <div className="h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src="/images/bombay-portrait.jpeg"
                  alt="Bombay - Founder of Internet Kartel"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  The Architect
                </span>
                <div className="h-px w-8 bg-accent" />
              </div>

              <h2 className="font-display text-4xl font-bold uppercase tracking-wider md:text-6xl text-foreground text-balance">
                {'I Go By Bombay'}
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {"I'm an entrepreneur, a creator, and a builder. I founded Internet Kartel not just to push a brand\u2014but to push a movement. I'm here to help people, develop artists, and elevate anyone willing to put in the work. I'm developing myself right alongside them."}
              </p>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {"Growth is a process. I've learned that the only way to truly experience life is through trials and tribulations\u2014the sleepless nights, the setbacks, the moments where most people quit. The only reason I'm standing here today is because I refused to give up. I kept going when it didn't make sense. I kept building when nobody believed in it."}
              </p>

              <p className="max-w-2xl text-xl font-semibold leading-relaxed text-foreground">
                {"This isn't just a brand. This is a movement built on relentless ambition, loyalty, and the belief that where you start doesn't define where you finish."}
              </p>

              <div className="flex items-center justify-center gap-6 pt-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-2xl font-bold text-foreground">IK</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Internet Kartel</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-2xl font-bold text-foreground">BH</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bombay Hustle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
