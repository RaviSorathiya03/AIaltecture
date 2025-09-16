"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function AppPreviewSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950 to-zinc-900" />

      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Experience the Future of
            <span className="text-primary"> Architecture Design</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            See how AItecture transforms complex system design into an intuitive, collaborative experience
          </p>
        </div>

        <div className="relative group">
          {/* Glow effect background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main mockup container */}
          <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
            {/* Mockup header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-700/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-gray-400 text-sm font-medium">AItecture Canvas</span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="text-xs bg-transparent">
                  Export
                </Button>
                <Button size="sm" className="text-xs">
                  Share
                </Button>
              </div>
            </div>

            <div className="relative bg-zinc-950/50 rounded-xl p-8 min-h-[500px] border border-zinc-800/50">
              {/* Canvas grid background */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Load Balancer */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group/node">
                    <div className="w-10 h-6 bg-blue-500/60 rounded mb-2 flex items-center justify-center">
                      <div className="w-6 h-2 bg-blue-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Load Balancer</span>
                  </div>
                </div>

                {/* API Gateway Cluster */}
                <div className="absolute top-24 left-16">
                  <div className="bg-primary/20 border border-primary/40 rounded-lg p-3 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-primary/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">API Gateway</span>
                  </div>
                </div>

                <div className="absolute top-24 right-16">
                  <div className="bg-primary/20 border border-primary/40 rounded-lg p-3 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-primary/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">API Gateway</span>
                  </div>
                </div>

                {/* Microservices Layer */}
                <div className="absolute top-44 left-8">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-emerald-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-emerald-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-emerald-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Auth Service</span>
                  </div>
                </div>

                <div className="absolute top-44 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-emerald-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-emerald-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-emerald-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">User Service</span>
                  </div>
                </div>

                <div className="absolute top-44 right-8">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-emerald-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-emerald-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-emerald-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Order Service</span>
                  </div>
                </div>

                {/* Message Queue */}
                <div className="absolute top-64 left-1/4">
                  <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-orange-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-6 bg-orange-500/60 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-2 bg-orange-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Message Queue</span>
                  </div>
                </div>

                {/* Cache Layer */}
                <div className="absolute top-64 right-1/4">
                  <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-red-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-6 bg-red-500/60 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-2 bg-red-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Redis Cache</span>
                  </div>
                </div>

                {/* Database Cluster */}
                <div className="absolute bottom-16 left-12">
                  <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-purple-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Primary DB</span>
                  </div>
                </div>

                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-purple-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Read Replica</span>
                  </div>
                </div>

                <div className="absolute bottom-16 right-12">
                  <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-purple-500/60 rounded-md mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                    </div>
                    <span className="text-white text-xs font-medium">Analytics DB</span>
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="rgb(0, 191, 255)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="flowGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="rgb(0, 191, 255)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    {/* Arrow marker definitions */}
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgb(0, 191, 255)" opacity="0.8" />
                    </marker>
                    <marker id="arrowheadGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgb(34, 197, 94)" opacity="0.8" />
                    </marker>
                    <marker id="arrowheadPurple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgb(168, 85, 247)" opacity="0.8" />
                    </marker>
                  </defs>

                  {/* Load Balancer to API Gateways with arrows */}
                  <line
                    x1="50%"
                    y1="60"
                    x2="25%"
                    y2="120"
                    stroke="rgb(0, 191, 255)"
                    strokeWidth="2"
                    className="animate-pulse"
                    markerEnd="url(#arrowhead)"
                    opacity="0.8"
                  />
                  <line
                    x1="50%"
                    y1="60"
                    x2="75%"
                    y2="120"
                    stroke="rgb(0, 191, 255)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                    markerEnd="url(#arrowhead)"
                    opacity="0.8"
                  />

                  {/* API Gateways to Microservices with arrows */}
                  <line
                    x1="25%"
                    y1="140"
                    x2="15%"
                    y2="200"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                    markerEnd="url(#arrowheadGreen)"
                    opacity="0.8"
                  />
                  <line
                    x1="25%"
                    y1="140"
                    x2="50%"
                    y2="200"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                    markerEnd="url(#arrowheadGreen)"
                    opacity="0.8"
                  />
                  <line
                    x1="75%"
                    y1="140"
                    x2="50%"
                    y2="200"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                    markerEnd="url(#arrowheadGreen)"
                    opacity="0.8"
                  />
                  <line
                    x1="75%"
                    y1="140"
                    x2="85%"
                    y2="200"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                    markerEnd="url(#arrowheadGreen)"
                    opacity="0.8"
                  />

                  {/* Microservices to Infrastructure with arrows */}
                  <line
                    x1="15%"
                    y1="220"
                    x2="25%"
                    y2="280"
                    stroke="rgb(249, 115, 22)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "2s" }}
                    markerEnd="url(#arrowhead)"
                    opacity="0.8"
                  />
                  <line
                    x1="50%"
                    y1="220"
                    x2="75%"
                    y2="280"
                    stroke="rgb(239, 68, 68)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "2.5s" }}
                    markerEnd="url(#arrowhead)"
                    opacity="0.8"
                  />
                  <line
                    x1="85%"
                    y1="220"
                    x2="75%"
                    y2="280"
                    stroke="rgb(239, 68, 68)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "1.2s" }}
                    markerEnd="url(#arrowhead)"
                    opacity="0.8"
                  />

                  {/* Infrastructure to Databases with arrows */}
                  <line
                    x1="25%"
                    y1="300"
                    x2="20%"
                    y2="360"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "3s" }}
                    markerEnd="url(#arrowheadPurple)"
                    opacity="0.8"
                  />
                  <line
                    x1="50%"
                    y1="220"
                    x2="50%"
                    y2="360"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "3.5s" }}
                    markerEnd="url(#arrowheadPurple)"
                    opacity="0.8"
                  />
                  <line
                    x1="75%"
                    y1="300"
                    x2="80%"
                    y2="360"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{ animationDelay: "2.8s" }}
                    markerEnd="url(#arrowheadPurple)"
                    opacity="0.8"
                  />

                  {/* Animated data flow particles */}
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      r="3"
                      fill={i % 3 === 0 ? "rgb(0, 191, 255)" : i % 3 === 1 ? "rgb(34, 197, 94)" : "rgb(168, 85, 247)"}
                      className="animate-pulse"
                      opacity="0.9"
                      style={{
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: "2s",
                      }}
                    >
                      <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
                        <path d={`M ${20 + i * 60} 60 Q ${50 + i * 30} 200 ${30 + i * 50} 360`} />
                      </animateMotion>
                    </circle>
                  ))}

                  {/* Bidirectional data flow indicators */}
                  <g opacity="0.6">
                    {/* Database replication arrows */}
                    <line
                      x1="20%"
                      y1="380"
                      x2="50%"
                      y2="380"
                      stroke="rgb(168, 85, 247)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "4s" }}
                      markerEnd="url(#arrowheadPurple)"
                    />
                    <line
                      x1="50%"
                      y1="385"
                      x2="20%"
                      y2="385"
                      stroke="rgb(168, 85, 247)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "4.5s" }}
                      markerEnd="url(#arrowheadPurple)"
                    />

                    <line
                      x1="50%"
                      y1="380"
                      x2="80%"
                      y2="380"
                      stroke="rgb(168, 85, 247)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "5s" }}
                      markerEnd="url(#arrowheadPurple)"
                    />
                  </g>
                </svg>

                {/* Floating particles for ambient effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute rounded-full animate-pulse ${
                        i % 4 === 0
                          ? "bg-primary/60"
                          : i % 4 === 1
                            ? "bg-purple-500/60"
                            : i % 4 === 2
                              ? "bg-emerald-500/60"
                              : "bg-orange-500/60"
                      }`}
                      style={{
                        width: `${2 + (i % 3)}px`,
                        height: `${2 + (i % 3)}px`,
                        left: `${10 + i * 6}%`,
                        top: `${15 + ((i * 13) % 70)}%`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${2 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Toolbar mockup */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm rounded-lg p-2">
                <div className="w-6 h-6 bg-zinc-600 rounded hover:bg-primary/60 transition-colors cursor-pointer" />
                <div className="w-6 h-6 bg-zinc-600 rounded hover:bg-primary/60 transition-colors cursor-pointer" />
                <div className="w-6 h-6 bg-zinc-600 rounded hover:bg-primary/60 transition-colors cursor-pointer" />
                <div className="w-px h-6 bg-zinc-600" />
                <div className="w-6 h-6 bg-zinc-600 rounded hover:bg-primary/60 transition-colors cursor-pointer" />
              </div>

              <div className="absolute bottom-4 right-4 w-24 h-16 bg-zinc-800/80 backdrop-blur-sm rounded border border-zinc-700/50 p-2">
                <div className="text-xs text-gray-400 mb-1">Mini Map</div>
                <div className="relative w-full h-8 bg-zinc-900/50 rounded-sm">
                  <div className="absolute inset-1 border border-primary/40 rounded-sm" />
                  <div className="absolute top-1 left-1 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <div
                    className="absolute top-2 right-2 w-1 h-1 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-1 left-1/2 w-1 h-1 bg-emerald-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-700/50">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Connected
                </span>
                <span>3 collaborators</span>
                <span>Auto-saved 2s ago</span>
              </div>
              <div className="text-sm text-gray-400">Zoom: 100%</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Try the Live Demo
          </Button>
          <p className="text-gray-400 text-sm mt-4">No signup required • Start designing in seconds</p>
        </div>
      </div>
    </section>
  )
}
