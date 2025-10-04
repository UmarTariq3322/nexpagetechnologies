"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  Moon,
  Sun,
  ChevronDown,
  X,
  Star,
  Phone,
  Mail,
  Zap,
  Sparkles,
  ArrowRight,
  Code,
  Cpu,
  Box,
  Palette,
  BarChart3,
  Workflow
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { trackCTAClick } from "@/lib/analytics"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { 
        name: "Web Development", 
        href: "/services#web-development",
        icon: Code,
        description: "Custom websites & web apps",
        badge: "Popular"
      },
      { 
        name: "AI Automation", 
        href: "/services#ai-automation",
        icon: Cpu,
        description: "Smart process automation",
        badge: "Hot"
      },
      { 
        name: "SaaS Products", 
        href: "/services#saas-products",
        icon: Box,
        description: "Cloud-based solutions"
      },
      { 
        name: "Branding & Design", 
        href: "/services#branding",
        icon: Palette,
        description: "Visual identity & design"
      },
      { 
        name: "Data Analytics", 
        href: "/services#analytics",
        icon: BarChart3,
        description: "Insights & reporting"
      },
      { 
        name: "Digital Transformation", 
        href: "/services#transformation",
        icon: Workflow,
        description: "End-to-end modernization"
      },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages", highlight: true },
  { name: "Blog", href: "/blog" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (action: string) => {
    trackCTAClick(action)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg border-border/60"
          : "bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 border-border/40"
      )}
      role="banner"
    >
      {/* Announcement Bar */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] animate-[gradient_8s_ease_infinite] text-primary-foreground text-xs py-2 text-center">
          <div className="container flex items-center justify-center gap-2">
            <Sparkles className="h-3 w-3" />
            <span className="font-medium">
              Special Offer: Get 20% off on all packages this month!
            </span>
            <Link 
              href="/packages" 
              className="underline hover:no-underline font-semibold"
              onClick={() => handleCTAClick('announcement_bar_click')}
            >
              Learn More →
            </Link>
          </div>
        </div>
      )}

      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => handleCTAClick('logo_click')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/nexpage logo.jpg" 
                  alt="Nexpage Logo" 
                  width={44} 
                  height={44} 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="font-bold text-lg group-hover:text-primary transition-colors">
                Nexpage Technologies
              </div>
              <div className="text-[10px] text-muted-foreground -mt-0.5">
                Shaping Digital Futures
              </div>
            </div>
            <span className="hidden sm:inline-block lg:hidden font-bold group-hover:text-primary transition-colors">
              Nexpage Technologies
            </span>
          </Link>
        </div>

        {/* Main Navigation - Center */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <div className="hover:-translate-y-0.5 transition-transform duration-200">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      pathname === item.href 
                        ? "text-foreground bg-muted/50" 
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/30",
                      item.highlight && "text-primary hover:text-primary"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                    {item.highlight && (
                      <Zap className="h-3 w-3 fill-current" />
                    )}
                    {item.submenu && (
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        activeSubmenu === item.name && "rotate-180"
                      )} />
                    )}
                    {pathname === item.href && (
                      <div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </div>

                {/* Enhanced Submenu Dropdown */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl p-3 z-50 transition-all duration-300 origin-top",
                      activeSubmenu === item.name
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {/* Dropdown Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border/60 rotate-45" />
                    
                    <div className="relative grid grid-cols-1 gap-1">
                      {item.submenu.map((subItem, index) => {
                        const Icon = subItem.icon
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="group/item flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {Icon && (
                              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors mt-0.5">
                                <Icon className="h-4 w-4" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                                  {subItem.name}
                                </span>
                                {subItem.badge && (
                                  <Badge 
                                    variant={subItem.badge === "Hot" ? "default" : "secondary"}
                                    className={cn(
                                      "text-[10px] h-4 px-1.5",
                                      subItem.badge === "Hot" && "bg-orange-500 hover:bg-orange-600"
                                    )}
                                  >
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {subItem.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        )
                      })}
                    </div>
                    
                    {/* Dropdown Footer */}
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all group/view"
                      >
                        View All Services
                        <ArrowRight className="h-4 w-4 group-hover/view:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden hover:bg-muted/50"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] sm:w-96 p-0">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={() => setIsOpen(false)}
              >
                <Image 
                  src="/nexpage logo.jpg" 
                  alt="Nexpage Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-lg"
                />
                <div>
                  <div className="font-bold">Nexpage Technologies</div>
                  <div className="text-[10px] text-muted-foreground">Shaping Digital Futures</div>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-muted/50"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium",
                        pathname === item.href 
                          ? "text-foreground bg-muted/50" 
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/30",
                        item.highlight && "text-primary hover:text-primary"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.name}
                        {item.highlight && <Zap className="h-3.5 w-3.5 fill-current" />}
                      </span>
                      {item.submenu && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => {
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-muted/30 transition-colors group"
                            >
                              {Icon && (
                                <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5">
                                  <Icon className="h-3.5 w-3.5" />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                                    {subItem.name}
                                  </span>
                                  {subItem.badge && (
                                    <Badge 
                                      variant={subItem.badge === "Hot" ? "default" : "secondary"}
                                      className="text-[9px] h-4 px-1.5"
                                    >
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-border/50 space-y-3 bg-muted/20">
              <Button
                asChild
                className="w-full h-12 text-base font-semibold"
                onClick={() => {
                  handleCTAClick('mobile_contact_us')
                  setIsOpen(false)
                }}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@nexpagetechnologies.com" className="hover:text-foreground transition-colors">
                  hello@nexpagetechnologies.com
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <div className="hover:scale-110 transition-transform">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="rounded-full hover:bg-muted/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {mounted && (
                <>
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Contact Us Button */}
          <div className="hover:scale-105 transition-transform hidden md:block">
            <Button
              asChild
              className="rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              onClick={() => handleCTAClick('contact_us')}
            >
              <Link href="/contact" className="flex items-center gap-2">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]" />
                <span className="relative flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </span>
              </Link>
            </Button>
          </div>

         
        </div>
      </div>
    </header>
  )
}