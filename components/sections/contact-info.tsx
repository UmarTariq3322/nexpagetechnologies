import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    details: "hello@digitalacubens.com",
    action: "mailto:hello@digitalacubens.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    details: "03095424857",
    action: "tel:03095424857",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    details: "123 Digital Street, Tech City, TC 12345",
    action: "https://maps.google.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us instantly",
    details: "Available 24/7",
    action: "#",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Get in Touch
            </CardTitle>
            <CardDescription>
              We're here to help you succeed. Reach out to us through any of these channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1} direction="up">
                <a
                  href={method.action}
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className="text-sm font-medium text-primary mt-1">{method.details}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Business Hours
            </CardTitle>
            <CardDescription>
              Our team is available during these hours to assist you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div key={schedule.day} className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-foreground">{schedule.day}</span>
                  <Badge variant={schedule.hours === "Closed" ? "secondary" : "outline"}>
                    {schedule.hours}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <Card>
          <CardHeader>
            <CardTitle>Why Choose Digital Acubens?</CardTitle>
            <CardDescription>
              We're committed to delivering exceptional results for every client.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">
                    Our experienced developers and designers bring years of expertise to every project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Fast Response</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to inquiries within 2-4 hours during business hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Custom Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Every project is tailored to your specific needs and business goals.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
