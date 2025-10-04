import { TeamSection } from "@/components/sections/team"
import { Timeline } from "@/components/sections/timeline"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              About Digital Acubens
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Shaping brands in the digital constellations
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              We are a cutting-edge digital agency that transforms businesses through innovative technology, creative
              design, and AI-powered solutions. Our mission is to guide brands through the vast digital universe,
              helping them shine brighter than ever before.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Empowering businesses through digital transformation
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              At Digital Acubens, we believe every business has the potential to become a guiding star in their
              industry. We combine cutting-edge technology with creative excellence to deliver solutions that don't just
              meet expectations—they exceed them.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  </div>
                  Innovation First
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We stay ahead of the curve, implementing the latest technologies and methodologies to give our clients
                  a competitive edge.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  Client-Centric Approach
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Every solution is tailored to our clients' unique needs, ensuring maximum impact and return on
                  investment.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  Rapid Execution
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We deliver high-quality solutions quickly without compromising on excellence or attention to detail.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 7.478a12.06 12.06 0 004.5 0m-3.75 7.478V21a2.25 2.25 0 003.75 0V8.197a2.25 2.25 0 00-1.5-2.122L12 4.5l-2.25 1.575A2.25 2.25 0 008.25 8.197V21a2.25 2.25 0 003.75 0z"
                      />
                    </svg>
                  </div>
                  Excellence Guaranteed
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We maintain the highest standards in everything we do, from code quality to customer service.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <TeamSection />
      <Timeline />
      <Footer />
    </>
  )
}
