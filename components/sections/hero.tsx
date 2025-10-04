"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Shield, Users, Award, TrendingUp, Star, Rocket } from "lucide-react"
import { ParticleField } from "@/components/3d/particle-field"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [activeService, setActiveService] = useState(0)

  const services = [
    { icon: Zap, text: "Web & Mobile Development", color: "primary" },
    { icon: Sparkles, text: "AI Automation Tools", color: "blue-500" },
    { icon: Rocket, text: "SaaS Products", color: "purple-500" },
    { icon: Star, text: "Branding & Design", color: "green-500" }
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section">
      {/* Enhanced multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      {/* Three.js Particle Field */}
      <ParticleField className="opacity-70" />

      {/* Enhanced floating elements with improved animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float-reverse" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500/10 rounded-full blur-lg animate-pulse" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float-reverse" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:bg-primary/20 hover:border-primary/30 transition-all hover:scale-105 cursor-default backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Welcome to NexPage Technologies</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Shaping brands in the{" "}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                digital constellations
              </span>
            </h1>

            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
              Transform your business with cutting-edge web development, AI automation, and innovative digital solutions.
              Let us guide your brand to shine brighter in the digital universe.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild className="group h-12 px-8 text-lg relative overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="relative z-10">Get a Free Demo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-shimmer" />
                </Link>
              </Button>
              <Button
                asChild
                className="group h-12 px-8 text-lg border border-border bg-transparent hover:bg-muted hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 group hover:text-foreground transition-colors cursor-default">
                <Shield className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span>Trusted by 50+ companies</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-foreground transition-colors cursor-default">
                <Award className="h-4 w-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                <span>Industry leading quality</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-foreground transition-colors cursor-default">
                <Zap className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <span>Fast delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main card with enhanced effects */}
              <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 border border-border/50 shadow-2xl hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm hover:shadow-primary/10 group">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                
                {/* Floating stats cards with improved animations */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-4 shadow-xl hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-default backdrop-blur-sm border border-primary/20">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Satisfaction</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-xl hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default backdrop-blur-sm border border-blue-400/20">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs opacity-90">Projects</div>
                </div>

                {/* Content inside card */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center group-hover/item:rotate-12 transition-transform shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AI-Powered Solutions</h3>
                      <p className="text-sm text-muted-foreground">Intelligent automation for your business</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {services.map((service, index) => {
                      const Icon = service.icon
                      const isActive = index === activeService
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-500 ${
                            isActive ? 'bg-primary/10 scale-105' : 'hover:bg-muted/50'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full transition-all ${
                            isActive ? 'scale-150 bg-primary shadow-lg shadow-primary/50' : `bg-${service.color}`
                          }`} />
                          <span className={`text-sm transition-colors ${isActive ? 'text-foreground font-medium' : ''}`}>
                            {service.text}
                          </span>
                          {isActive && <Icon className="h-4 w-4 ml-auto text-primary animate-pulse" />}
                        </div>
                      )
                    })}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Client Success Rate</span>
                      <span className="font-semibold text-primary">98%</span>
                    </div>
                    <div className="relative w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] h-2 rounded-full animate-shimmer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced background decorative elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-float-slow" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-reverse" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom stats section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: "50+", label: "Projects Completed", icon: Rocket },
            { value: "98%", label: "Client Satisfaction", icon: Star },
            { value: "24/7", label: "AI Support", icon: Zap },
            { value: "3x", label: "Faster Delivery", icon: TrendingUp }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300 p-4 rounded-xl hover:bg-muted/50 cursor-default"
              >
                <Icon className="h-6 w-6 mx-auto mb-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
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

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(20px) translateX(10px) scale(1.1); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}