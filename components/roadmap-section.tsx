"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const timelineItems = [
  {
    month: "Month 3",
    title: "SOC 2 Type I & Direct Sales Launch",
    description: "Security certification + 15 pilot customers through direct outreach to mid-tier advisory firms (Target: $5K MRR)",
    type: "customer",
    target: "15 paying customers, $5K MRR"
  },
  {
    month: "Month 6",
    title: "AFSL Partnership & Product-Market Fit",
    description: "AFSL approved status + channel partnerships driving 60+ seats (Target: 70 customers, $25K MRR)",
    type: "customer",
    target: "70 customers, $25K MRR"
  },
  {
    month: "Month 9",
    title: "Client Portal & Channel Expansion",
    description: "Self-service platform launch + 3 AFSL distribution partnerships (Target: 140 customers, $50K MRR)",
    type: "customer",
    target: "140 customers, $50K MRR"
  },
  {
    month: "Month 12",
    title: "AI Monitoring & Enterprise Pipeline",
    description: "Regulatory automation + enterprise pilot program with 2-3 large firms (Target: 200+ SMB + 2 Enterprise, $75K MRR)",
    type: "customer",
    target: "200+ SMB, 2 Enterprise, $75K MRR"
  },
  {
    month: "Month 15",
    title: "Enterprise Sales & Platform Maturity",
    description: "SOC 2 Type II + dedicated enterprise sales: white-label deals (Target: 250+ SMB + 5 Enterprise, $100K MRR)",
    type: "customer",
    target: "250+ SMB, 5 Enterprise, $100K MRR"
  },
  {
    month: "Month 18",
    title: "UK Launch & Series A Readiness",
    description: "FCA compliance + UK market entry with proven sales model (Target: 300+ SMB + 8 Enterprise, $42K MRR)",
    type: "expansion",
    target: "$500K ARR ($42K MRR)"
  }
]

export function RoadmapSection() {
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
    <section id="roadmap" ref={sectionRef} className="section-y bg-muted/30">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            18-Month <span className="gradient-text">Development Roadmap</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            Strategic feature releases and platform development designed to capture market share and build defensible competitive advantages in the compliance documentation space.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.month}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    <Card className="bg-card border-primary/20 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'customer' ? 'bg-green-500/10 text-green-600' :
                            item.type === 'expansion' ? 'bg-orange-500/10 text-orange-600' :
                            'bg-primary/10 text-primary'
                          }`}>
                            {item.type === 'customer' ? 'Customer Growth' :
                             item.type === 'expansion' ? 'Market Expansion' :
                             item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{item.month}</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                          <div className="text-xs font-medium text-primary mb-1">Revenue Target</div>
                          <div className="text-sm font-semibold">{item.target}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="h3 mb-6 text-center">Go-to-Market Strategy & Revenue Model</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Customer Acquisition Channels</h4>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg border p-4">
                      <div className="font-medium text-sm mb-1">Phase 1: Direct Sales (Months 1-6)</div>
                      <div className="text-xs text-muted-foreground">Target: Mid-tier advisory firms (5-15 advisors)</div>
                      <div className="text-xs text-green-600 font-medium">Expected: 70 customers, $25K MRR</div>
                    </div>
                    <div className="bg-background rounded-lg border p-4">
                      <div className="font-medium text-sm mb-1">Phase 2: AFSL Partnerships (Months 6-12)</div>
                      <div className="text-xs text-muted-foreground">Channel sales through 3-5 AFSL distributors</div>
                      <div className="text-xs text-green-600 font-medium">Expected: 200+ SMB customers, $75K MRR</div>
                    </div>
                    <div className="bg-background rounded-lg border p-4">
                      <div className="font-medium text-sm mb-1">Phase 3: Enterprise Sales (Months 12-18)</div>
                      <div className="text-xs text-muted-foreground">Dedicated enterprise team, white-label deals</div>
                      <div className="text-xs text-green-600 font-medium">Expected: 8 enterprise accounts, $42K MRR</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Revenue Breakdown by Month 18</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">300 SMB @ $89/month</span>
                      <span className="font-medium">$26,700 MRR</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">8 Enterprise @ $2,000/month avg</span>
                      <span className="font-medium">$16,000 MRR</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold text-primary">
                      <span>Total Monthly Recurring Revenue</span>
                      <span>$42,700 MRR</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Annual Recurring Revenue</span>
                      <span>$512K ARR</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-accent/10 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">Market Penetration</div>
                    <div className="text-xs text-muted-foreground">308 customers of 23,972 total ANZ advisors = 1.3% market share</div>
                    <div className="text-xs text-muted-foreground">Validates $28.5M total addressable market</div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground italic">
                  Conservative projections based on 3% monthly churn, 25% average growth rate, and proven SaaS benchmarks in vertical software
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}