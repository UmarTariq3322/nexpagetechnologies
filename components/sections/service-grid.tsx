import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Bot, Palette, BarChart3, Zap, Globe, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    price: "Starting at $5,000",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "Starting at $8,000",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions to streamline your business processes.",
    features: ["ChatGPT Integration", "Workflow Automation", "Data Processing", "Smart Analytics"],
    price: "Starting at $3,000",
  },
  {
    icon: Globe,
    title: "SaaS Development",
    description: "Scalable software-as-a-service solutions for modern businesses.",
    features: ["Cloud Architecture", "Multi-tenant", "API Integration", "Real-time Updates"],
    price: "Starting at $15,000",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Comprehensive branding solutions that make your business stand out.",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
    price: "Starting at $2,500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights and strategic advantages.",
    features: ["Business Intelligence", "Custom Dashboards", "Predictive Analytics", "Reporting"],
    price: "Starting at $4,000",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Complete digital transformation services to modernize your business.",
    features: ["Process Optimization", "Technology Migration", "Training & Support", "Strategy Consulting"],
    price: "Custom Quote",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: ["Security Audits", "GDPR Compliance", "Data Protection", "Penetration Testing"],
    price: "Starting at $3,500",
  },
]

export function ServiceGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="text-sm font-semibold text-primary">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
