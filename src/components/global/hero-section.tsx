"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ArchitectureVisualization } from "../ui/architecture-visualization"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0F0F0F] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 pulse-glow" />
                <span className="text-sm text-muted-foreground font-medium">AI-Powered Architecture Design</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                <span className="text-foreground">Design</span>{" "}
                <span className="text-primary glow-animation">Software</span>{" "}
                <span className="text-foreground">Architecture</span> <span className="text-primary">with AI</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Generate, visualize, and collaborate on system architecture diagrams instantly. Transform complex ideas
                into clear, professional diagrams with the power of AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl glow-animation transition-all duration-300 hover:scale-105"
              >
                Start Designing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm text-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-card/70"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Diagrams Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <ArchitectureVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
