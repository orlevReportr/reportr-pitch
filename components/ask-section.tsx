"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Target, Users } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Perfect Market Timing",
    description: "Growing VC interest in compliance AI + advisor shortage creates urgency for documentation automation"
  },
  {
    icon: Users,
    title: "Proven Market Demand",
    description: "23,972 advisors in ANZ market, $28.5M ARR potential, with clear regulatory pain points driving adoption"
  },
  {
    icon: TrendingUp,
    title: "Clear Path to $500K ARR",
    description: "Conservative 18-month roadmap to 300+ SMB + 8 enterprise customers through proven SaaS growth model"
  },
  {
    icon: DollarSign,
    title: "Seed Ready Platform",
    description: "18-month runway to build defensible moats: SOC 2, AFSL partnerships, enterprise features, UK expansion"
  }
]

export function AskSection() {
  const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="ask" ref={sectionRef} className="section-y bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            The <span className="gradient-text">Investment Opportunity</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            Join us in building the compliance documentation platform that transforms how financial advisors work —
            turning regulatory burden into competitive advantage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">A$350K</div>
                    <div className="text-sm text-muted-foreground">SAFE Investment</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-border"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">18 Months</div>
                    <div className="text-sm text-muted-foreground">Seed Runway</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-border"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$500K</div>
                    <div className="text-sm text-muted-foreground">Target ARR</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-background rounded-lg border p-4">
                    <div className="text-sm font-medium mb-1">Engineering</div>
                    <div className="text-xl font-bold text-primary">50%</div>
                    <div className="text-xs text-muted-foreground">Platform & AI</div>
                  </div>
                  <div className="bg-background rounded-lg border p-4">
                    <div className="text-sm font-medium mb-1">Sales</div>
                    <div className="text-xl font-bold text-primary">25%</div>
                    <div className="text-xs text-muted-foreground">Customer Acquisition</div>
                  </div>
                  <div className="bg-background rounded-lg border p-4">
                    <div className="text-sm font-medium mb-1">Marketing</div>
                    <div className="text-xl font-bold text-primary">15%</div>
                    <div className="text-xs text-muted-foreground">Content & Events</div>
                  </div>
                  <div className="bg-background rounded-lg border p-4">
                    <div className="text-sm font-medium mb-1">Operations</div>
                    <div className="text-xl font-bold text-primary">10%</div>
                    <div className="text-xs text-muted-foreground">Legal & Compliance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className={`transition-all duration-1000 hover:shadow-lg ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Card className="bg-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="h3 mb-4">Ready to Transform Compliance?</h3>
              <p className="text-muted-foreground mb-6">
                Reportr turns regulatory burden into competitive advantage.
                Join us in building the platform that lets advisors focus on clients, not paperwork.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl px-6 py-4">
                <div className="text-center space-y-1">
                  <div className="font-semibold text-primary text-sm">Let's discuss the opportunity</div>
                  <div className="text-2xl font-bold">A$350K SAFE Investment</div>
                  <div className="text-sm text-muted-foreground">Seed ready in 18 months</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}