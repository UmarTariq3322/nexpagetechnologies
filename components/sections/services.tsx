"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Smartphone, Bot, Palette, BarChart3, Zap, ArrowRight, CheckCircle, Sparkles, Star, Award, TrendingUp } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Code,
    title: "Web & Mobile Development",
    description: "Custom web applications and mobile apps built with cutting-edge technologies.",
    features: ["React/Next.js", "TypeScript", "Mobile-First Design", "Performance Optimized"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    delay: 0.1,
    badge: "Most Popular",
    rating: 4.9
  },
  {
    icon: Bot,
    title: "AI Automation Tools",
    description: "Intelligent automation solutions to streamline your business processes.",
    features: ["ChatGPT Integration", "Workflow Automation", "Data Processing", "Smart Analytics"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    delay: 0.2,
    badge: "Trending",
    rating: 5.0
  },
  {
    icon: Smartphone,
    title: "SaaS Products",
    description: "Scalable software-as-a-service solutions for modern businesses.",
    features: ["Cloud Architecture", "Multi-tenant", "API Integration", "Real-time Updates"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    delay: 0.3,
    badge: "Enterprise",
    rating: 4.8
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    description: "Comprehensive branding solutions that make your business stand out.",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    delay: 0.4,
    badge: "Creative",
    rating: 4.9
  },
  {
    icon: BarChart3,
    title: "Data Insights & Analytics",
    description: "Transform your data into actionable insights and strategic advantages.",
    features: ["Business Intelligence", "Custom Dashboards", "Predictive Analytics", "Reporting"],
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
    delay: 0.5,
    badge: "Advanced",
    rating: 4.7
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Complete digital transformation services to modernize your business.",
    features: ["Process Optimization", "Technology Migration", "Training & Support", "Strategy Consulting"],
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    delay: 0.6,
    badge: "Premium",
    rating: 4.9
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-green-500/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:bg-primary/20 hover:border-primary/30 transition-all hover:scale-105 cursor-default backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              digital solutions
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">
            From concept to deployment, we provide end-to-end digital services that drive growth and innovation.
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${service.delay}s` }}
              onMouseEnter={() => setHoveredIndex(index as any)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Enhanced glow effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100`}
              />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
              
              <div className="relative transform group-hover:-translate-y-2 transition-all duration-500">
                <Card className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-background/95 to-background/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-lg text-xs`}>
                      {service.badge}
                    </Badge>
                  </div>

                  <CardHeader className="relative pb-4">
                    {/* Icon container with enhanced effects */}
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className={`relative p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <service.icon className="h-8 w-8 text-white relative z-10" />
                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                      </div>
                      
                      {/* Arrow with enhanced animation */}
                      <div className="opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20">
                          <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground/30'}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{service.rating}</span>
                    </div>

                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative">
                    {/* Features list with stagger animation */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 shadow-lg group-hover:scale-150 transition-transform duration-300`} />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced progress bar */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">Service Quality</span>
                        <span className="font-semibold text-primary">100%</span>
                      </div>
                      <div className="relative w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${service.gradient} h-2 rounded-full transition-all duration-1000 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}
                        />
                        {/* Shimmer on progress bar */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-300`} />
                      </div>
                    </div>

                    {/* Learn more link */}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/button mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      asChild
                    >
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>

                  {/* Animated corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-tl ${service.gradient} opacity-10 rounded-tl-[100px]`} />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="mt-24 text-center">
          <div className="relative inline-block group">
            {/* Multiple glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:scale-110 transition-transform" />
            
            <Button asChild size="lg" className="relative group/button shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-base">
              <Link href="/services" className="flex items-center gap-3">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5 group-hover/button:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Ready to transform your business?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Let's discuss your project
            </Link>
          </p>
        </div>

        {/* Enhanced additional info section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Quality Assured",
              description: "Every project undergoes rigorous testing and quality checks",
              color: "primary",
              gradient: "from-primary to-blue-500"
            },
            {
              icon: Zap,
              title: "Fast Delivery",
              description: "Agile development process ensures timely project completion",
              color: "blue-500",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Award,
              title: "Innovation First",
              description: "Cutting-edge technologies and modern development practices",
              color: "green-500",
              gradient: "from-green-500 to-emerald-500"
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="group text-center p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:scale-105 cursor-default"
            >
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-${item.color}/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-8 w-8 text-${item.color} relative z-10`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`} />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border border-border/50 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Delivered", icon: TrendingUp },
              { value: "98%", label: "Client Satisfaction", icon: Star },
              { value: "50+", label: "Team Members", icon: Sparkles },
              { value: "24/7", label: "Support Available", icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="group hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 mx-auto mb-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}