"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, Eye, Sparkles, TrendingUp, Users, Zap, Award, Star, Heart } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-powered recommendations and seamless user experience",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "AI", "Stripe", "TypeScript"],
    metrics: "+150% Sales",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    delay: 0.1,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    views: "12.5k",
    likes: "890"
  },
  {
    title: "Healthcare SaaS",
    category: "SaaS Product",
    description: "Patient management system with telemedicine capabilities and real-time monitoring",
    image: "/healthcare-dashboard.png",
    tags: ["React", "Node.js", "HIPAA", "WebRTC"],
    metrics: "10k+ Users",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    delay: 0.2,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    views: "8.2k",
    likes: "654"
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete rebrand for tech startup including logo, guidelines, and digital presence",
    image: "/modern-brand-identity.png",
    tags: ["Logo", "Guidelines", "Web Design", "Brand Strategy"],
    metrics: "+200% Recognition",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    delay: 0.3,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    views: "15.3k",
    likes: "1.2k"
  },
]

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [likedProjects, setLikedProjects] = useState(new Set())

  const toggleLike = (title: string) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(title)) {
        newSet.delete(title)
      } else {
        newSet.add(title)
      }
      return newSet
    })
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:bg-primary/20 hover:border-primary/30 transition-all hover:scale-105 cursor-default backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              projects
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">
            Discover how we've helped businesses achieve remarkable results through innovative digital solutions.
          </p>
        </div>

        {/* Enhanced projects grid */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${project.delay}s` }}
              onMouseEnter={() => setHoveredProject(index as any)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105`} />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
              
              <div className="relative transform group-hover:-translate-y-4 transition-all duration-500">
                <Card className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-background/95 to-background/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  {/* Image section with enhanced overlay */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Multiple gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Enhanced action buttons overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-xl group/button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-6 w-6 text-white group-hover/button:rotate-12 transition-transform" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-xl group/button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-6 w-6 text-white group-hover/button:rotate-12 transition-transform" />
                      </a>
                    </div>

                    {/* Enhanced category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg backdrop-blur-sm px-4 py-1.5 text-sm font-semibold`}>
                        {project.category}
                      </Badge>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                        <Badge className="bg-yellow-500/90 text-white border-0 shadow-lg backdrop-blur-sm flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Enhanced metrics badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20 shadow-lg">
                        {project.metrics}
                      </div>
                    </div>

                    {/* View count overlay - appears on hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleLike(project.title)
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                      >
                        <Heart className={`h-4 w-4 transition-all ${likedProjects.has(project.title) ? 'fill-red-500 text-red-500' : ''}`} />
                        <span>{project.likes}</span>
                      </button>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4 relative z-10">
                    {/* Title and description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground transition-colors">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced tags with stagger animation */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className={`text-xs hover:bg-primary/10 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 cursor-default`}
                          style={{ transitionDelay: `${tagIndex * 50 + 200}ms` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Enhanced progress indicator */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">Project Success</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold text-primary">100%</span>
                        </div>
                      </div>
                      <div className="relative w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} h-2 rounded-full transition-all duration-1000 ${hoveredProject === index ? 'w-full' : 'w-0'}`}
                        />
                        {/* Shimmer on progress bar */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-300`} />
                      </div>
                    </div>

                    {/* View project button */}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/button mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 hover:bg-primary/10"
                      asChild
                    >
                      <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span>View Case Study</span>
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>

                  {/* Animated corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-tl ${project.gradient} opacity-10 rounded-tl-[100px]`} />
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
            
            <Button asChild className="relative group/button shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg">
              <Link href="/portfolio" className="flex items-center gap-3">
                <span>View All Projects</span>
                <ArrowRight className="h-5 w-5 group-hover/button:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Want to see more?{" "}
            <Link href="/portfolio" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
              Explore our complete portfolio
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>

        {/* Enhanced stats section */}
        <div className="mt-24 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border border-border/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                value: "150%",
                label: "Average ROI Increase",
                gradient: "from-primary to-blue-500",
                bgGradient: "from-primary/10 to-blue-500/10"
              },
              {
                icon: Users,
                value: "50+",
                label: "Happy Clients",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-500/10 to-emerald-500/10"
              },
              {
                icon: Zap,
                value: "98%",
                label: "Success Rate",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10"
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={stat.label}
                  className="relative text-center group hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-muted/30"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.bgGradient} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <Icon className={`h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Client testimonial snippet */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-background/50 backdrop-blur-sm border border-border/50 overflow-hidden group hover:border-primary/30 transition-all">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">"</div>
            
            <div className="relative z-10">
              <p className="text-lg text-muted-foreground italic mb-4">
                "Working with Digital Acubens transformed our business. Their innovative approach and attention to detail delivered results beyond our expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500" />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-[100px] group-hover:scale-110 transition-transform duration-500" />
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