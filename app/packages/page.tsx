import { PricingTable } from "@/components/sections/pricing-table"
import { PackageQuiz } from "@/components/sections/package-quiz"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function PackagesPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Pricing & Packages
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Choose your perfect plan
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Flexible pricing options designed to scale with your business. From startups to enterprises, we have the
              right package for your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      <PricingTable />
      <PackageQuiz />
      <Footer />
    </>
  )
}
