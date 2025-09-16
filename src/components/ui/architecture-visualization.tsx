"use client"

import { useEffect, useRef } from "react"

export function ArchitectureVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const nodes = [
      { x: 150, y: 100, size: 12, type: "api", label: "API Gateway" },
      { x: 300, y: 80, size: 10, type: "service", label: "Auth Service" },
      { x: 450, y: 120, size: 14, type: "database", label: "Database" },
      { x: 200, y: 200, size: 11, type: "service", label: "User Service" },
      { x: 350, y: 220, size: 13, type: "cache", label: "Redis Cache" },
      { x: 500, y: 200, size: 10, type: "service", label: "Analytics" },
      { x: 250, y: 320, size: 12, type: "queue", label: "Message Queue" },
      { x: 400, y: 300, size: 11, type: "service", label: "Notification" },
    ]

    const connections = [
      [0, 1],
      [0, 3],
      [1, 2],
      [3, 4],
      [4, 2],
      [3, 6],
      [6, 7],
      [5, 2],
      [4, 5],
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      time += 0.02

      connections.forEach(([from, to], index) => {
        const fromNode = nodes[from]
        const toNode = nodes[to]

        // Animated glow effect
        const glowIntensity = 0.5 + 0.3 * Math.sin(time * 2 + index * 0.5)

        ctx.strokeStyle = `rgba(0, 191, 255, ${glowIntensity * 0.3})`
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.stroke()

        // Core line
        ctx.strokeStyle = `rgba(0, 191, 255, ${glowIntensity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.stroke()

        // Animated data flow particles
        const progress = (time * 0.5 + index * 0.3) % 1
        const particleX = fromNode.x + (toNode.x - fromNode.x) * progress
        const particleY = fromNode.y + (toNode.y - fromNode.y) * progress

        ctx.fillStyle = "#00bfff"
        ctx.beginPath()
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      nodes.forEach((node, index) => {
        const pulse = 1 + 0.1 * Math.sin(time * 3 + index * 0.5)
        const size = node.size * pulse

        // Node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 2)
        gradient.addColorStop(0, "rgba(0, 191, 255, 0.4)")
        gradient.addColorStop(1, "rgba(0, 191, 255, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Node core
        ctx.fillStyle =
          node.type === "database"
            ? "#a855f7"
            : node.type === "api"
              ? "#00bfff"
              : node.type === "cache"
                ? "#10b981"
                : "#ffffff"
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Node border
        ctx.strokeStyle = "#00bfff"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.stroke()

        // Node labels
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px system-ui"
        ctx.textAlign = "center"
        ctx.fillText(node.label, node.x, node.y + size + 20)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden float-animation bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0F0F0F]">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />

      <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full pulse-glow" />
          <span className="text-sm text-foreground font-medium">Live System</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
        <span className="text-sm text-muted-foreground">Auto-generated by AI</span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
