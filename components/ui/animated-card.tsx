"use client"

import type React from "react"
import { Card } from "./card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300">
      <Card className={`hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}>
        {children}
      </Card>
    </div>
  )
}