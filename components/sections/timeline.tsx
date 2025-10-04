import { Badge } from "@/components/ui/badge"

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Digital Acubens was born with a vision to transform businesses through innovative digital solutions.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Successfully delivered our first enterprise-level project, establishing our reputation for excellence.",
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Pioneered AI-powered solutions, becoming early adopters of cutting-edge automation technologies.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    description: "Grew our team to 25+ experts across development, design, and strategy disciplines.",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded internationally, serving clients across North America, Europe, and Asia.",
  },
]

export function Timeline() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Milestones that shaped us
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            From a small startup to a leading digital agency, here's how we've grown and evolved over the years.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <Badge variant="secondary">{milestone.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && <div className="absolute left-6 top-12 h-8 w-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
