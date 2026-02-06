const products = [
  {
    name: "Bombay Hustle Pendant Tee",
    category: "Bombay Hustle",
    price: "$65",
    image: "/images/e6fa4b8b-934a-446c-845f.jpeg",
  },
  {
    name: "Internet Kartel AF1 - Purple Reign",
    category: "Internet Kartel",
    price: "$280",
    image: "/images/043e4302-8193-46a3-b31e.jpeg",
  },
  {
    name: "IK Street Crop Top",
    category: "Internet Kartel",
    price: "$45",
    image: "/images/acf62aef-7e71-47fe-9d32.jpeg",
  },
  {
    name: "Bombay Command Hoodie",
    category: "Bombay Hustle",
    price: "$120",
    image: "/images/0fd273d7-809c-4567-8e85.jpeg",
  },
]

export function Marketplace() {
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

        {/* Product grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all hover:border-muted-foreground/30"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute left-3 top-3 bg-secondary/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-sm font-semibold text-foreground">{product.name}</h3>
                <span className="font-display text-lg font-bold text-foreground">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
