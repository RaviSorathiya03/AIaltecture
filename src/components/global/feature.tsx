"use client"

import { useState } from "react"

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    title: "AI-Generated Diagrams",
    description:
      "Create complex system architecture diagrams instantly with our advanced AI engine. Simply describe your requirements and watch as professional diagrams are generated in seconds.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Collaborative Editing",
    description:
      "Work together in real-time with your team. Share diagrams, leave comments, and iterate on designs with seamless collaboration tools built for modern development teams.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Export to Documentation",
    description:
      "Transform your diagrams into comprehensive documentation. Export to multiple formats including PDF, PNG, SVG, and integrate directly with your existing documentation workflow.",
  },
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,191,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Powerful Features for
            <span className="text-white/50 bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
              Modern Teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to design, collaborate, and document your software architecture with AI-powered
            precision.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glassmorphism card */}
              <div
                className={`
                relative h-full p-8 rounded-2xl border border-border/50 
                bg-gradient-to-br from-card/80 via-card/60 to-card/40 
                backdrop-blur-xl backdrop-saturate-150
                transition-all duration-500 ease-out
                ${
                  hoveredIndex === index
                    ? "transform -translate-y-2 shadow-2xl shadow-primary/20 border-primary/30"
                    : "hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                }
              `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br from-primary/10 via-transparent to-accent/10
                  ${hoveredIndex === index ? "opacity-100" : "group-hover:opacity-50"}
                `}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div
                    className={`
                    inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl
                    bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30
                    transition-all duration-300
                    ${hoveredIndex === index ? "glow-animation" : ""}
                  `}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </div>

                {/* Subtle border glow */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-r from-primary/20 via-transparent to-accent/20
                  ${hoveredIndex === index ? "opacity-100" : ""}
                `}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.1), transparent)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    padding: "1px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
