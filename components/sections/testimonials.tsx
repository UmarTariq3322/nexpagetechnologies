"use client"
"use client"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Sparkles, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "Digital Acubens transformed our entire digital presence. Their AI-powered solutions increased our efficiency by 300% and their team was incredible to work with.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    metrics: "+300% Efficiency",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    company: "InnovateLab",
    content:
      "The quality of their work is exceptional. They delivered our SaaS platform ahead of schedule and it has been performing flawlessly. Highly recommended!",
    rating: 5,
    avatar: "/professional-man-cto.png",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    metrics: "Ahead of Schedule",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    content:
      "Their branding and web development services helped us achieve a 250% increase in lead generation. The team truly understands modern digital marketing.",
    rating: 5,
    avatar: "/professional-woman-marketing-director.jpg",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    metrics: "+250% Lead Gen",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/20 mb-6 backdrop-blur-sm shadow-lg shadow-primary/5">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Client Reviews</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance mb-4">
            What our{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              clients say
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Digital Acubens.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="group relative hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl rounded-3xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  {/* Quote icon */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${testimonial.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Metrics badge */}
                  <div className="flex items-center gap-2">
                    <div className={`px-4 py-1.5 bg-gradient-to-r ${testimonial.gradient} text-white text-sm font-semibold rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                      {testimonial.metrics}
                    </div>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="relative group/avatar">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover/avatar:ring-4 group-hover/avatar:ring-primary/30 transition-all duration-300"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full border-2 border-background shadow-lg`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primary font-medium mt-0.5">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover overlay with shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border border-border/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <div className="h-6 w-px bg-border/50" />
            <span className="text-sm font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Average Rating: 5.0/5.0
            </span>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <TrendingUp className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">98%</h3>
            <p className="text-sm text-muted-foreground font-medium">Client Satisfaction</p>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Users className="h-10 w-10 text-green-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">50+</h3>
            <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Award className="h-10 w-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">100%</h3>
            <p className="text-sm text-muted-foreground font-medium">Project Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}