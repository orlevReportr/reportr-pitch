"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Users, Zap, Shield, Target } from "lucide-react"

const competitors = [
  {
    name: "Generic AI Transcription",
    description: "Otter, Fireflies, Rev.ai - basic transcription",
    strengths: ["Easy setup", "Mass market", "Low cost"],
    weaknesses: ["No compliance", "Generic output", "No regulatory templates", "No ASIC understanding"],
    icon: Users,
    color: "text-muted-foreground",
  },
  {
    name: "Manual Documentation",
    description: "Current state - Word docs, typing notes",
    strengths: ["Full control", "No setup required"],
    weaknesses: ["Time intensive", "Error prone", "No compliance guidance", "Not scalable"],
    icon: Target,
    color: "text-accent",
  },
  {
    name: "Virtual Assistants/Outsourcing",
    description: "Hiring VAs to write compliance documents",
    strengths: ["Human review", "Custom work"],
    weaknesses: ["Expensive", "Slow turnaround", "Quality inconsistency", "No real-time help"],
    icon: Zap,
    color: "text-primary",
  },
]

const reportrAdvantages = [
  "Complete financial planning ecosystem",
  "Regulatory compliant documentation workflow",
  "Automated client workflow management",
  "Built-in regulatory monitoring",
  "7-year audit trail & compliance",
  "Next-gen compliance documentation platform",
]

export function CompetitiveSection() {
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
    <section id="competitive" ref={sectionRef} className="section-y">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            <span className="gradient-text">Competitive</span> Landscape
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're a purpose-built vertical AI solution for financial advisor compliance — competing against generic tools and manual
            processes that can't handle regulatory complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {competitors.map((competitor, index) => (
            <Card
              key={competitor.name}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-muted ${competitor.color}`}>
                    <competitor.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="h4">{competitor.name}</h3>
                    <p className="text-xs text-muted-foreground">{competitor.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="text-xs mb-2">Strengths</Badge>
                    {competitor.strengths.map((strength) => (
                      <div key={strength} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Badge variant="destructive" className="text-xs mb-2">Gaps</Badge>
                    {competitor.weaknesses.map((weakness) => (
                      <div key={weakness} className="flex items-center space-x-2 text-sm">
                        <XCircle className="h-3 w-3 text-destructive flex-shrink-0" />
                        <span>{weakness}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary rounded-lg">
                        <Shield className="h-6 w-6 text-primary-foreground" />
                      </div>
                    <h3 className="h3">Reportr's Planned Positioning</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Purpose-built vertical AI solution that transforms conversations regulatory compliant documentation —
                    competing against generic tools and manual processes that can't handle regulatory complexity.
                  </p>
                  <Badge className="bg-primary/10 text-primary">In Development: Compliance-First</Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {reportrAdvantages.map((advantage, index) => (
                    <div
                      key={advantage}
                      className="flex items-center space-x-2 p-3 bg-background rounded-lg border"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
