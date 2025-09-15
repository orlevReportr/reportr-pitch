"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Zap, Shield } from "lucide-react"

const milestones = [
  {
    icon: Calendar,
    title: "Product-Market Fit Validation",
    description: "Month 6: 60+ paying seats (120–200 active users), strong engagement, early expansions; targeting 25-35% MoM growth",
  },
  {
    icon: Zap,
    title: "Key Integrations & Partnerships",
    description: "Month 9: Client portal launch, AFSL approved product status achieved",
  },
  {
    icon: Shield,
    title: "Series A Ready Metrics",
    description: "Month 18: $500k+ ARR (≈300+ SMB seats + 2-3 enterprise pilots), proven sales efficiency; sustained 20-25% MoM growth",
  },
]

export function CTASection() {
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
    <section ref={sectionRef} className="section-y bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto container-px">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="h2 mb-6">
              Join Us to Scale <span className="gradient-text">Impact</span>, Not Admin
            </h2>
            <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              Perfect timing: Growing VC interest in compliance AI, advisor shortage creates urgency,
              and new ASIC, FMA, and FCA requirements demand better documentation. Ready to scale beyond financial advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <h3 className="h3 mb-6">The Ask</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">A$350K SAFE</h4>
                      <p className="text-muted-foreground body-sm">
24-month runway with conservative milestones based on realistic development timeline
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Use of Funds</h4>
                      <ul className="text-muted-foreground body-sm space-y-1">
                        <li>• 50% Engineering (Platform features, AI/compliance capabilities)</li>
                        <li>• 25% Customer Acquisition (direct sales, partnerships)</li>
                        <li>• 15% Marketing (content, webinars, industry presence)</li>
                        <li>• 10% Operations (security certifications, legal)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                <h3 className="h3">Milestones to Next Round</h3>

                {milestones.map((milestone, index) => (
                  <Card
                    key={milestone.title}
                    className={`transition-all duration-1000 hover:shadow-lg ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <milestone.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{milestone.title}</h4>
                          <p className="text-muted-foreground body-sm">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground mb-8">
                Reportr turns meetings into <strong>compliant, shippable work</strong> - not just notes.
              </div>

              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl px-8 py-6">
                  <div className="text-center space-y-2">
                    <div className="font-semibold text-primary">Investment Opportunity</div>
                    <div className="h3">A$350K SAFE</div>
                    <div className="body-sm text-muted-foreground">24-month runway • Series A preparation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
