"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Clock, FileText, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Post-Royal Commission Impact",
    description: "Australia lost 42% of advisers (26.5k→15.5k) due to increased compliance burden and higher professional standards.",
    stat: "42%",
    statLabel: "adviser decline since 2019",
  },
  {
    icon: FileText,
    title: "ASIC Documentation Requirements",
    description: "FSG, SoA, RoA, PDS, and file notes must be retained for 7 years with strict record-keeping under new 2024 instrument.",
    stat: "7 years",
    statLabel: "mandatory retention period",
  },
  {
    icon: Clock,
    title: "Documentation Time Drain",
    description: "Up to 60% of the total cost of providing financial advice is now consumed by administration and compliance tasks.",
    stat: "60%",
    statLabel: "of advice costs are admin",
  },
  {
    icon: AlertTriangle,
    title: "Generic AI Tools Miss the Mark",
    description: "Otter and similar tools create meeting transcripts, but advisors need compliant SoA and RoA documents ready for audit.",
    stat: "0%",
    statLabel: "regulatory compliance built-in",
  },
]

export function ProblemSection() {
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
    <section id="problem" ref={sectionRef} className="section-y bg-muted/30">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            Documentation Is the <span className="gradient-text">Bottleneck</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            Post-Royal Commission Australia: remaining advisors face unprecedented documentation requirements while 
            generic AI tools ignore regulatory realities of financial services compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <problem.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="h4 mb-3">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 body-sm">{problem.description}</p>
                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-1">{problem.stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{problem.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
