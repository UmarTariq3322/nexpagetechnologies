import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Shamikh Shahid",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 10+ years in digital transformation and business strategy.",
    image: "/professional-ceo-portrait.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "shamikh@digitalacubens.com",
    },
  },
  {
    name: "Wahb Ali",
    role: "Chief Operating Officer",
    bio: "Operations expert focused on scaling businesses and optimizing processes.",
    image: "/professional-coo-portrait.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "wahb@digitalacubens.com",
    },
  },
  {
    name: "Umar Tariq",
    role: "Chief Technology Officer",
    bio: "Technology innovator specializing in AI, cloud architecture, and modern development.",
    image: "/professional-cto-portrait.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "umar@digitalacubens.com",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Leadership
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet the team behind Digital Acubens
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Our experienced leadership team combines decades of expertise in technology, business strategy, and digital
            innovation.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-foreground">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
