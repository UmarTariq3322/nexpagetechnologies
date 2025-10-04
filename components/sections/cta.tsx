"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Star, CheckCircle, Users, Award, TrendingUp, Rocket, Shield } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Top and bottom decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/30 mb-8 backdrop-blur-sm shadow-lg shadow-primary/5 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Ready to Get Started?</span>
            <Rocket className="h-4 w-4 text-primary animate-bounce" />
          </div>

          {/* Enhanced main heading */}
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance mb-6">
            Ready to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                transform
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full blur-sm" />
            </span>{" "}
            your business?
          </h2>

          {/* Enhanced subheading */}
          <p className="mt-8 text-xl leading-8 text-muted-foreground text-pretty max-w-3xl mx-auto">
            Join the constellation of successful businesses that have chosen Digital Acubens.
            Let's start your digital transformation journey today.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <Button asChild className="relative group h-14 px-10 text-lg font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            <div className="relative group">
              <Button asChild className="group h-14 px-10 text-lg font-semibold border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <Link href="/packages" className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-colors group">
              <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground">Free consultation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 transition-colors group">
              <Zap className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground">Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/5 border border-yellow-500/20 hover:bg-yellow-500/10 transition-colors group">
              <Award className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground">Quality guaranteed</span>
            </div>
          </div>
        </div>

        {/* Enhanced stats section with premium cards */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">50+</h3>
              <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl border border-border/50 hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">150%</h3>
              <p className="text-sm text-muted-foreground font-medium">Average ROI</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl border border-border/50 hover:border-purple-500/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Award className="h-10 w-10 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">98%</h3>
              <p className="text-sm text-muted-foreground font-medium">Success Rate</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl border border-border/50 hover:border-yellow-500/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Zap className="h-10 w-10 text-yellow-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">24/7</h3>
              <p className="text-sm text-muted-foreground font-medium">AI Support</p>
            </div>
          </div>
        </div>

        {/* Enhanced Additional CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-muted/80 via-muted/50 to-muted/80 border border-border/50 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
            <div className="relative flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Join 50+ companies already transforming with Digital Acubens
            </span>
            <Shield className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}