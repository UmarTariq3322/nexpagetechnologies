"use client"

import { useEffect, useRef } from "react"

function CSSConstellationBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const stars: HTMLElement[] = []
    const lines: HTMLElement[] = []

    // Create stars with initial positions and movement data
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div")
      star.className = "absolute rounded-full bg-white/60"
      
      // Random position
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = Math.random() * 3 + 1
      
      // Store movement data
      const starData = {
        element: star,
        baseX: x,
        baseY: y,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
        twinklePhase: Math.random() * Math.PI * 2
      }
      
      star.style.left = `${x}%`
      star.style.top = `${y}%`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.transition = "opacity 0.1s ease-out"
      
      container.appendChild(star)
      stars.push(star)
      
      // Store star data for animation
      ;(star as any).starData = starData
    }

    // Create constellation lines with animation data
    const createConstellationLine = (x1: number, y1: number, x2: number, y2: number) => {
      const line = document.createElement("div")
      line.className = "absolute bg-gradient-to-r from-blue-400/30 to-blue-600/30"
      
      const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)
      
      line.style.left = `${x1}%`
      line.style.top = `${y1}%`
      line.style.width = `${length}%`
      line.style.height = "1px"
      line.style.transform = `rotate(${angle}deg)`
      line.style.transformOrigin = "0 0"
      line.style.transition = "opacity 0.1s ease-out"
      
      // Store line data for animation
      const lineData = {
        element: line,
        baseX1: x1,
        baseY1: y1,
        baseX2: x2,
        baseY2: y2,
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01,
        pulseSpeed: 0.3 + Math.random() * 0.7,
        pulsePhase: Math.random() * Math.PI * 2
      }
      
      container.appendChild(line)
      lines.push(line)
      
      // Store line data for animation
      ;(line as any).lineData = lineData
    }

    // Create some constellation patterns
    const constellationPoints = [
      { x: 20, y: 30 },
      { x: 35, y: 25 },
      { x: 50, y: 20 },
      { x: 65, y: 25 },
      { x: 80, y: 30 },
      { x: 30, y: 50 },
      { x: 45, y: 45 },
      { x: 60, y: 50 },
      { x: 75, y: 45 },
      { x: 25, y: 70 },
      { x: 40, y: 65 },
      { x: 55, y: 70 },
      { x: 70, y: 65 },
      { x: 85, y: 70 }
    ]

    // Connect nearby points
    constellationPoints.forEach((point, i) => {
      constellationPoints.forEach((otherPoint, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            (point.x - otherPoint.x) ** 2 + (point.y - otherPoint.y) ** 2
          )
          if (distance < 25 && Math.random() > 0.7) {
            createConstellationLine(point.x, point.y, otherPoint.x, otherPoint.y)
          }
        }
      })
    })

    // Animation loop
    let time = 0
    const animate = () => {
      time += 0.016 // ~60fps
      
      // Animate stars
      stars.forEach(star => {
        const starData = (star as any).starData
        if (starData) {
          const newX = starData.baseX + Math.sin(time * starData.speedX) * 2
          const newY = starData.baseY + Math.cos(time * starData.speedY) * 2
          const twinkle = 0.3 + 0.7 * (Math.sin(time * starData.twinkleSpeed + starData.twinklePhase) + 1) / 2
          
          star.style.left = `${newX}%`
          star.style.top = `${newY}%`
          star.style.opacity = twinkle.toString()
        }
      })
      
      // Animate lines
      lines.forEach(line => {
        const lineData = (line as any).lineData
        if (lineData) {
          const newX1 = lineData.baseX1 + Math.sin(time * lineData.speedX) * 1
          const newY1 = lineData.baseY1 + Math.cos(time * lineData.speedY) * 1
          const newX2 = lineData.baseX2 + Math.sin(time * lineData.speedX) * 1
          const newY2 = lineData.baseY2 + Math.cos(time * lineData.speedY) * 1
          
          const length = Math.sqrt((newX2 - newX1) ** 2 + (newY2 - newY1) ** 2)
          const angle = Math.atan2(newY2 - newY1, newX2 - newX1) * (180 / Math.PI)
          const pulse = 0.2 + 0.8 * (Math.sin(time * lineData.pulseSpeed + lineData.pulsePhase) + 1) / 2
          
          line.style.left = `${newX1}%`
          line.style.top = `${newY1}%`
          line.style.width = `${length}%`
          line.style.transform = `rotate(${angle}deg)`
          line.style.opacity = pulse.toString()
        }
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start animation
    animate()

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      stars.forEach(star => star.remove())
      lines.forEach(line => line.remove())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 100%)",
        animation: "constellationRotate 120s linear infinite"
      }}
    />
  )
}

export default CSSConstellationBackground
