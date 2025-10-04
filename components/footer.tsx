"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Send,
  Heart,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  CheckCircle2,
  Sparkles,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { trackCTAClick } from "@/lib/analytics"

const socialLinks = [
  
  { name: "LinkedIn", href: "https://linkedin.com/company/digital-acubens", icon: Linkedin, color: "hover:text-blue-600" },
  { name: "GitHub", href: "https://github.com/digital-acubens", icon: Github, color: "hover:text-purple-600" },
  { name: "Instagram", href: "https://instagram.com/digitalacubens", icon: Instagram, color: "hover:text-pink-600" },
  { name: "YouTube", href: "https://youtube.com/@digitalacubens", icon: Youtube, color: "hover:text-red-600" },
  { name: "Facebook", href: "https://facebook.com/digitalacubens", icon: Facebook, color: "hover:text-blue-500" },
]

const serviceLinks = [
  { name: "Web Development", href: "/services#web-development", tag: "Popular" },
  { name: "AI Automation", href: "/services#ai-automation", tag: "New" },
  { name: "SaaS Products", href: "/services#saas-products", tag: "Trending" },
  { name: "Branding & Design", href: "/services#branding" },
  { name: "Data Analytics", href: "/services#analytics" },
  { name: "Digital Transformation", href: "/services#transformation" },
]

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Careers", href: "/careers", badge: "We're hiring!" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
]

const supportLinks = [
  { name: "Help Center", href: "/help" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Support", href: "/contact" },
  { name: "Documentation", href: "/docs" },
  { name: "API Reference", href: "/api-docs" },
  { name: "Status", href: "/status", indicator: "operational" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "GDPR", href: "/gdpr" },
  { name: "Accessibility", href: "/accessibility" },
]

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "300+" },
  { label: "Team Members", value: "50+" },
  { label: "Countries Served", value: "25+" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    trackCTAClick('newsletter_signup_footer', 'footer')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleSocialClick = (platform: string) => {
    trackCTAClick(`social_${platform.toLowerCase()}_footer`, 'footer')
  }

  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/20 to-muted/40 border-t overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      

      {/* Newsletter Section */}
      <div className="relative border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Join 10,000+ subscribers</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Stay Ahead of the Curve
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Get exclusive insights on digital transformation, AI trends, and actionable strategies delivered straight to your inbox.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    className="sm:w-auto h-12 px-8 font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Subscribe Now
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 max-w-md mx-auto">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    Successfully subscribed! Check your inbox.
                  </p>
                </div>
              )}
              
              <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                No spam ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link 
                href="/" 
                className="flex items-center space-x-3 group w-fit"
                onClick={() => trackCTAClick('footer_logo_click')}
              >
                <div className="relative group-hover:scale-105 transition-all duration-300">
                  <Image 
                    src="/nexpage logo.jpg" 
                    alt="Nexpage Logo" 
                    width={56} 
                    height={56} 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </div>
                <div>
                  <span className="text-xl font-bold block group-hover:text-primary transition-colors">
                    Nexpage Technologies
                  </span>
                  <span className="text-xs text-muted-foreground">Shaping Digital Constellations</span>
                </div>
              </Link>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              We transform businesses through innovative technology, creative design, and AI-powered solutions 
              that drive sustainable growth and long-term success in the digital age.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                ISO Certified
              </Badge>
              <Badge variant="outline" className="text-xs">
                <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-primary" />
                Industry Leader
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@nexpagetechnologies.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="group-hover:underline">hello@nexpagetechnologies.com</span>
              </a>
              <a 
                href="tel:03095424857"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="group-hover:underline">03095424857</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-muted/50 hover:bg-muted hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-border/50 hover:border-primary/50 ${social.color}`}
                      onClick={() => handleSocialClick(social.name)}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground mb-6 flex items-center">
              Services
              <div className="ml-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <ul role="list" className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all flex items-center justify-between group hover:translate-x-1"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                      {link.name}
                    </span>
                    {link.tag && (
                      <Badge 
                        variant="secondary" 
                        className="text-[10px] h-5 px-2"
                      >
                        {link.tag}
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground mb-6 flex items-center">
              Company
              <div className="ml-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <ul role="list" className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all flex items-center justify-between group hover:translate-x-1"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                      {link.name}
                    </span>
                    {link.badge && (
                      <Badge 
                        variant="default" 
                        className="text-[10px] h-5 px-2 bg-green-500 hover:bg-green-600"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground mb-6 flex items-center">
              Support
              <div className="ml-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <ul role="list" className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all flex items-center justify-between group hover:translate-x-1"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                      {link.name}
                    </span>
                    {link.indicator === "operational" && (
                      <span className="flex items-center gap-1 text-[10px] text-green-500">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-border/50 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                &copy; {new Date().getFullYear()} Nexpage Technologies. All rights reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex flex-wrap items-center justify-center gap-4">
                {legalLinks.map((link, index) => (
                  <span key={link.name} className="flex items-center gap-4">
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors text-xs"
                    >
                      {link.name}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-border">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by the Nexpage Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}