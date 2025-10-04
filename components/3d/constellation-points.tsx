"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export function ConstellationPoints() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.Group>(null)

  // Generate constellation points and line geometry
  const { positions, linePositions } = useMemo(() => {
    const positions = new Float32Array(60) // 20 points * 3 coordinates
    const linePositions = new Float32Array(120) // 20 connections * 2 points * 3 coordinates
    let lineIndex = 0

    // Create constellation points in a pattern
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const radius = 2 + Math.random() * 2
      const height = (Math.random() - 0.5) * 2

      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = height
      positions[i * 3 + 2] = Math.sin(angle) * radius

      // Connect to nearby points
      if (i > 0 && Math.random() > 0.3) {
        const prevIndex = i - 1
        linePositions[lineIndex * 3] = positions[prevIndex * 3]
        linePositions[lineIndex * 3 + 1] = positions[prevIndex * 3 + 1]
        linePositions[lineIndex * 3 + 2] = positions[prevIndex * 3 + 2]
        lineIndex++
        linePositions[lineIndex * 3] = positions[i * 3]
        linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1]
        linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2]
        lineIndex++
      }
      if (i > 2 && Math.random() > 0.7) {
        const prevIndex = i - 3
        linePositions[lineIndex * 3] = positions[prevIndex * 3]
        linePositions[lineIndex * 3 + 1] = positions[prevIndex * 3 + 1]
        linePositions[lineIndex * 3 + 2] = positions[prevIndex * 3 + 2]
        lineIndex++
        linePositions[lineIndex * 3] = positions[i * 3]
        linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1]
        linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2]
        lineIndex++
      }
    }

    return { positions, linePositions: linePositions.slice(0, lineIndex * 3) }
  }, [])

  // Animate the constellation
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group>
      {/* Constellation points */}
      <Points ref={pointsRef} positions={positions}>
        <PointMaterial size={0.05} color="#3b82f6" transparent opacity={0.8} sizeAttenuation={true} />
      </Points>

      {/* Connection lines */}
      <group ref={linesRef}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </lineSegments>
      </group>
    </group>
  )
}
