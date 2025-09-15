"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="min-h-screen section-y flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto container-px relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="h1 mb-6 text-balance">
                Turn <span className="gradient-text">Conversations</span> into{" "}
                <span className="gradient-text">Compliant Documents</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <p className="lead text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                We're building an AI co-pilot solution designed to transform client conversations into
                compliance ready documentation for financial advisors.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex justify-center">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
                  <p className="text-primary font-semibold">Investment Opportunity</p>
                  <p className="text-sm text-muted-foreground">Pre-Revenue • Seeking $350K SAFE</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="mt-12 text-sm text-muted-foreground">
                Pre-revenue startup • MVP built • Multi-country expansion strategy
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
