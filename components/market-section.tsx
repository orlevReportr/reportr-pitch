"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"

const marketData = [
  {
    icon: DollarSign,
    title: "Market Validation",
    value: "$1.25B+",
    growth: "Industry Funding",
    description: "Growing investor interest in vertical AI for regulated industries",
  },
  {
    icon: TrendingUp,
    title: "Conversation Intelligence",
    value: "$1.25B → $12B",
    growth: "28.6% CAGR",
    description: "Category expanding rapidly as AI meeting tools mainstream",
  },
  {
    icon: Users,
    title: "Australia + New Zealand Focus",
    value: "23,972",
    growth: "$28.5M ARR Potential",
    description: "Australia (15,500) and New Zealand (8,472) targeted first for clear documentation and record-keeping rules in adviser workflows",
  },
  {
    icon: Target,
    title: "Regulatory-Driven Expansion",
    value: "Phase 2+",
    growth: "Similar Regulatory Pressures",
    description: "UK and other markets show comparable regulatory burdens across adviser documentation and retention requirements",
  },
]

export function MarketSection() {
  const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true)
        },
        { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
      <section id="market" ref={sectionRef} className="section-y bg-muted/30">
        <div className="container mx-auto container-px">
          <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="h2 mb-6">
              Massive <span className="gradient-text">Market Opportunity</span>
            </h2>
            <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
              Across major markets, tightening regulations push compliance to as much as 60% of advice delivery — creating
              a massive efficiency opportunity for AI co-pilots built for regulated advice workflows (not generic note-takers).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketData.map((item, index) => (
                <Card
                    key={item.title}
                    className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="h4 mb-2">{item.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                    <div className="body-sm font-medium text-primary mb-2">{item.growth}</div>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </CardContent>
                </Card>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="h3 mb-4">Platform Expansion Strategy</h3>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-center text-primary">ANZ Market Development</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-xs font-bold text-primary mb-1">PHASE 1</div>
                      <h5 className="font-semibold text-sm mb-2">Compliance-First Entry</h5>
                      <p className="text-xs text-muted-foreground">
                        Localised, audit-ready document generation that solves the immediate compliance burden.
                      </p>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-xs font-bold text-primary mb-1">PHASE 2</div>
                      <h5 className="font-semibold text-sm mb-2">Workflow & Platform Stickiness</h5>
                      <p className="text-xs text-muted-foreground">
                        Client profiles, scheduling and e-signature, tasks and audit trails - embedding daily workflows to drive retention.
                      </p>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-primary/20">
                      <div className="text-xs font-bold text-primary mb-1">Repeatable Model</div>
                      <h5 className="font-semibold text-sm mb-2">Next Market Expansion: UK, Germany, Canada</h5>
                      <p className="text-xs text-muted-foreground">
                        Reapply Phases 1 – 2 with FCA localisation: Consumer duty aligned templates and suitability records, regional hosting, and priority workflow feature development.
                      </p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>
      </section>
  )
}
