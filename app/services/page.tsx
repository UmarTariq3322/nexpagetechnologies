import { ServiceGrid } from "@/components/sections/service-grid"
import { ServiceRecommender } from "@/components/sections/service-recommender"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Comprehensive digital solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              From web development to AI automation, we offer a full spectrum of digital services designed to transform
              your business and accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      <ServiceGrid />
      <ServiceRecommender />
      <Footer />
    </>
  )
}
