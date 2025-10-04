"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { ParticleField } from "@/components/3d/particle-field"

function ConstellationBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: "transparent" }}>
        {/* Ambient lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {/* Background stars */}
        <Stars radius={300} depth={60} count={1000} factor={4} saturation={0} fade speed={0.5} />

        {/* Floating particles */}
        <ParticleField />

        {/* Subtle camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default ConstellationBackground
