"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"

const marketData = [
  {
    icon: DollarSign,
    title: "Market Validation",
    value: "$4.2M",
    growth: "Marloo Pre-Seed",
    description: "Direct competitor raised for Australian financial advisors in 2024, proving VC appetite",
  },
  {
    icon: TrendingUp,
    title: "Conversation Intelligence",
    value: "$1.25B → $12B",
    growth: "28.6% CAGR",
    description: "Market growing rapidly as AI meeting tools mainstream",
  },
  {
    icon: Users,
    title: "Australian Advisor Market",
    value: "15,500",
    growth: "Down 42% since 2019",
    description: "Licensed financial advisers remaining after Royal Commission industry consolidation",
  },
  {
    icon: Target,
    title: "Multi-Vertical Expansion",
    value: "Law, Accounting, Health",
    growth: "Template Architecture",
    description: "Platform scales to any regulated industry needing compliant documentation",
  },
]

export function MarketSection() {
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
    <section id="market" ref={sectionRef} className="section-y bg-muted/30">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            Massive <span className="gradient-text">Market Opportunity</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            Post-Royal Commission compliance burden (60% of advice costs) creates massive efficiency opportunity for 
            AI-powered documentation tools in regulated Australian professions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((item, index) => (
            <Card
              key={item.title}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
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
              <h3 className="h3 mb-4">Australia-First Strategy vs. Global Competitors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Market Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Marloo's A$4.2M raise proves VC appetite, but they're spreading across 6 countries while we focus 100% on Australia
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Local Advantage</h4>
                  <p className="text-sm text-muted-foreground">
                    Deep ASIC compliance expertise, Melbourne-based team, direct industry partnerships vs. offshore generalists
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technical Differentiation</h4>
                  <p className="text-sm text-muted-foreground">
                    Client-ready SoA generation (not just file notes), XPLAN-first integration, multi-industry compliance templates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className={`transition-all duration-1000 delay-700 mt-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold">Investor Documentation</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive market research and strategic analysis</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href={`${BASE_PATH}/docs/Australian Financial Planning Documentation Ecosystem.pdf`}
                      download="Reportr-Australian-Financial-Planning-Ecosystem.pdf"
                      className="inline-flex items-center px-4 py-2 text-sm border border-primary/20 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Market Ecosystem Analysis
                    </a>
                    <a 
                      href={`${BASE_PATH}/docs/Go-to-Market Strategy for Reportr (AI Meeting Assistant for Australian Advisers).pdf`}
                      download="Reportr-Go-to-Market-Strategy.pdf"
                      className="inline-flex items-center px-4 py-2 text-sm border border-accent/20 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors text-primary font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      168-Page GTM Strategy
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
