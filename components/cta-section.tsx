"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Zap, Shield } from "lucide-react"

const milestones = [
  {
    icon: Calendar,
    title: "Product-Market Fit Validation",
    description: "Month 6: ~50 active users, strong engagement, early paying conversions",
  },
  {
    icon: Zap,
    title: "Key Integrations & Partnerships",
    description: "Month 9: XPLAN integration, 1-2 AFSL partnerships for distribution",
  },
  {
    icon: Shield,
    title: "Series A Ready Metrics",
    description: "Month 18: $500k+ ARR, enterprise pilots, proven sales efficiency",
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
              Perfect timing: Marloo validated the market with A$4.2M raise, advisor shortage creates urgency,
              and new ASIC requirements demand better documentation. Ready to scale beyond financial advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <h3 className="h3 mb-6">The Ask</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">A$350K SAFE (A$3M cap)</h4>
                      <p className="text-muted-foreground body-sm">
24-month runway with conservative milestones based on realistic development timeline
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Use of Funds</h4>
                      <ul className="text-muted-foreground body-sm space-y-1">
                        <li>• 50% Engineering (CRM integrations, AI/compliance features)</li>
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
                Reportr turns meetings into <strong>compliant, shippable work</strong>—not just notes.
              </div>

              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl px-8 py-6">
                    <div className="text-center space-y-2">
                      <div className="font-semibold text-primary">Investment Opportunity</div>
                      <div className="h3">A$350K SAFE @ A$3M Cap</div>
                      <div className="body-sm text-muted-foreground">24-month runway • Series A preparation</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href={`${BASE_PATH}/docs/Australian Financial Planning Documentation Ecosystem.pdf`}
                    download="Reportr-Australian-Financial-Planning-Ecosystem.pdf"
                    className="inline-flex items-center px-6 py-3 border border-primary/20 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Market Research Report
                  </a>
                  <a 
                    href={`${BASE_PATH}/docs/Go-to-Market Strategy for Reportr (AI Meeting Assistant for Australian Advisers).pdf`}
                    download="Reportr-Go-to-Market-Strategy.pdf"
                    className="inline-flex items-center px-6 py-3 border border-accent/20 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors text-primary font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Go-to-Market Strategy
                  </a>
                </div>
              </div>

              <div className="body-sm text-muted-foreground space-y-2">
                <div>Ready to transform how regulated industries handle documentation?</div>
                <div className="text-xs italic border-t pt-2 max-w-2xl mx-auto">
                  *Forward-looking statements. Compliance features in development. Final product subject to regulatory review. 
                  Individual advisors remain responsible for all regulatory compliance and document accuracy.
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
