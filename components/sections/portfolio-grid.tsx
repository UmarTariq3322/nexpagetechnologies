"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ExternalLink, Github, Eye, Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
  client: string
  date: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  status: "completed" | "in-progress" | "coming-soon"
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    description: "A comprehensive healthcare analytics platform that helps medical professionals track patient data, monitor trends, and make data-driven decisions.",
    category: "Web Application",
    image: "/healthcare-dashboard.png",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    client: "MedTech Solutions",
    date: "2024",
    liveUrl: "https://healthcare-demo.com",
    featured: true,
    status: "completed",
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce solution with advanced inventory management, payment processing, and customer analytics.",
    category: "E-commerce",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS", "Vercel"],
    client: "RetailMax",
    date: "2024",
    liveUrl: "https://retailmax-demo.com",
    featured: true,
    status: "completed",
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Design System",
    description: "Complete brand identity design including logo, color palette, typography, and comprehensive design system for a tech startup.",
    category: "Branding",
    image: "/modern-brand-identity.png",
    technologies: ["Figma", "Adobe Creative Suite", "Design Systems"],
    client: "TechStart Inc",
    date: "2024",
    featured: true,
    status: "completed",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
    category: "Mobile App",
    image: "/placeholder.jpg",
    technologies: ["React Native", "Expo", "Firebase", "Stripe", "Biometric Auth"],
    client: "SecureBank",
    date: "2024",
    featured: false,
    status: "in-progress",
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support",
    description: "Intelligent chatbot system that provides 24/7 customer support with natural language processing and sentiment analysis.",
    category: "AI/ML",
    image: "/placeholder.jpg",
    technologies: ["Python", "OpenAI API", "FastAPI", "Docker", "Redis"],
    client: "SupportPro",
    date: "2024",
    featured: false,
    status: "completed",
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Management Platform",
    description: "Comprehensive platform for real estate agents to manage properties, clients, and transactions with advanced search and filtering.",
    category: "Web Application",
    image: "/placeholder.jpg",
    technologies: ["Vue.js", "Nuxt.js", "Supabase", "Mapbox", "Stripe"],
    client: "PropertyPro",
    date: "2024",
    featured: false,
    status: "completed",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking Mobile App",
    description: "Personal fitness tracking app with workout plans, nutrition tracking, and social features for fitness enthusiasts.",
    category: "Mobile App",
    image: "/placeholder.jpg",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit", "Stripe"],
    client: "FitLife",
    date: "2024",
    featured: false,
    status: "in-progress",
  },
  {
    id: "sustainability-dashboard",
    title: "Sustainability Impact Dashboard",
    description: "Environmental impact tracking dashboard for businesses to monitor and report their sustainability metrics.",
    category: "Web Application",
    image: "/placeholder.jpg",
    technologies: ["React", "D3.js", "Carbon Footprint API", "MongoDB", "AWS"],
    client: "GreenCorp",
    date: "2024",
    featured: false,
    status: "coming-soon",
  },
]

const categories = ["All", "Web Application", "Mobile App", "E-commerce", "Branding", "AI/ML"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )

  const featuredItems = portfolioItems.filter((item) => item.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "coming-soon":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Projects */}
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our latest and greatest projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Explore our portfolio of successful projects that showcase our expertise across different industries and technologies.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {featuredItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
              <AnimatedCard className="group cursor-pointer">
                <div onClick={() => setSelectedItem(item)} className="cursor-pointer"></div>
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      {item.liveUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.replace("-", " ")}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="mb-4">{item.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {item.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Category Filter */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Projects Grid */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1} direction="up">
              <AnimatedCard className="group cursor-pointer">
                <div onClick={() => setSelectedItem(item)} className="cursor-pointer relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                      {item.status.replace("-", " ")}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm mb-3 line-clamp-2">
                    {item.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.client}</span>
                    <span>{item.date}</span>
                  </div>
                </CardContent>
              </AnimatedCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.8}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/packages">View Packages</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
