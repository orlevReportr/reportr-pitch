"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react"

const timelineItems = [
  {
    month: "Month 3",
    title: "AU/NZ CRM Integrations",
    description: "XPLAN (AU) and Conquest (NZ) integrations for Phase 1 market penetration",
    type: "integration"
  },
  {
    month: "Month 6", 
    title: "Multi-Jurisdiction Compliance",
    description: "ASIC (AU) and FMA (NZ) compliant templates with localized regulatory requirements",
    type: "feature"
  },
  {
    month: "Month 9",
    title: "Multi-CRM Support", 
    description: "Expand to Salesforce, HubSpot, and other major CRM platforms",
    type: "integration"
  },
  {
    month: "Month 12",
    title: "AI-Powered Risk Assessment",
    description: "Automated compliance risk scoring and regulatory alert system",
    type: "feature"
  },
  {
    month: "Month 15",
    title: "Enterprise Security Suite",
    description: "SOC2 compliance, SSO, advanced audit trails, and white-label options", 
    type: "feature"
  },
  {
    month: "Month 18",
    title: "UK Market Entry",
    description: "FCA regulatory framework integration and UK-specific compliance templates",
    type: "expansion"
  }
]

const milestones = [
  {
    icon: Calendar,
    title: "Product-Market Fit Validation",
    description: "Month 6: 60+ paying seats (120–200 active users), strong engagement, early expansions; targeting 25-35% MoM growth",
  },
  {
    icon: Zap,
    title: "Key Integrations & Partnerships",
    description: "Month 9: XPLAN integration, 1-2 AFSL partnerships for distribution",
  },
  {
    icon: Shield,
    title: "Series A Ready Metrics",
    description: "Month 18: $500k+ ARR (≈300+ SMB seats + 2-3 enterprise pilots), proven sales efficiency; sustained 20-25% MoM growth",
  },
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
            and new ASIC requirements demand better documentation. Ready to scale beyond financial advice.
          </p>
        </div>

        {/* 18-Month Development Timeline */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h3 className="h3 mb-4">18-Month Development Roadmap</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic feature releases and integrations designed to capture market share and build defensible moats
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
                              item.type === 'integration' ? 'bg-accent/10 text-accent' :
                              item.type === 'feature' ? 'bg-primary/10 text-primary' :
                              'bg-orange-500/10 text-orange-600'
                            }`}>
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">{item.month}</span>
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Reportr turns meetings into <strong>compliant, shippable work</strong> - not just notes.
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