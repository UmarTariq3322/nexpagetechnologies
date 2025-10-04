"use client"

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface ParticleFieldProps {
  className?: string
}

export function ParticleField({ className }: ParticleFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    // Setup
    const scene = new THREE.Scene()
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    
    // Add renderer to DOM
    containerRef.current.appendChild(renderer.domElement)
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30
    
    // Responsive handling
    const handleResize = () => {
      if (!containerRef.current) return
      
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    
    // Initial size
    handleResize()
    window.addEventListener('resize', handleResize)
    
    // Create particles
    const particlesCount = 1000
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x3b82f6, // Blue color matching the brand
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    })
    
    // Create positions for particles
    const positions = new Float32Array(particlesCount * 3)
    const velocities = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 50
      positions[i3 + 1] = (Math.random() - 0.5) * 50
      positions[i3 + 2] = (Math.random() - 0.5) * 50
      
      // Velocity
      velocities[i3] = (Math.random() - 0.5) * 0.05
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.05
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.05
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    // Create particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particleSystem)
    
    // Create connections between particles
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2
    })
    
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(particlesCount * 2 * 3) // For lines between particles
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Update particles
      const positions = particlesGeometry.attributes.position.array as Float32Array
      let lineIndex = 0
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        
        // Move particles
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]
        
        // Boundary check
        if (Math.abs(positions[i3]) > 25) velocities[i3] *= -1
        if (Math.abs(positions[i3 + 1]) > 25) velocities[i3 + 1] *= -1
        if (Math.abs(positions[i3 + 2]) > 25) velocities[i3 + 2] *= -1
        
        // Create connections between nearby particles
        for (let j = i + 1; j < particlesCount; j++) {
          const j3 = j * 3
          
          // Calculate distance between particles
          const dx = positions[i3] - positions[j3]
          const dy = positions[i3 + 1] - positions[j3 + 1]
          const dz = positions[i3 + 2] - positions[j3 + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
          
          // If particles are close, draw a line between them
          if (distance < 5 && lineIndex < linePositions.length - 6) {
            // First point
            linePositions[lineIndex++] = positions[i3]
            linePositions[lineIndex++] = positions[i3 + 1]
            linePositions[lineIndex++] = positions[i3 + 2]
            
            // Second point
            linePositions[lineIndex++] = positions[j3]
            linePositions[lineIndex++] = positions[j3 + 1]
            linePositions[lineIndex++] = positions[j3 + 2]
          }
        }
      }
      
      // Clear remaining line positions
      for (let i = lineIndex; i < linePositions.length; i++) {
        linePositions[i] = 0
      }
      
      particlesGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.position.needsUpdate = true
      
      // Rotate the entire scene slightly
      particleSystem.rotation.y += 0.001
      lines.rotation.y += 0.001
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      scene.remove(particleSystem)
      scene.remove(lines)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 ${className || ''}`}
      aria-hidden="true"
    />
  )
}