import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Work
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Portfolio & Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Explore our latest projects and discover how we've helped businesses across industries achieve remarkable
              digital transformations.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />
      <Footer />
    </>
  )
}
