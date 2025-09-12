"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, FileCheck, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Meeting Processing",
    description: "Planned: Calendar-integrated system to process meeting recordings with speaker identification",
  },
  {
    icon: FileCheck,
    title: "Compliance-Focused Templates",
    description: "In development: SoA, RoA, and file note templates designed to meet ASIC regulatory standards",
  },
  {
    icon: Zap,
    title: "CRM Integration (Planned)",
    description: "Phase 1 roadmap: XPLAN integration for client record management and automated workflow",
  },
  {
    icon: Shield,
    title: "Compliance Infrastructure",
    description: "Architecture designed for secure document storage, encryption, and audit trails per ASIC requirements",
  },
]

export function SolutionSection() {
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
    <section id="solution" ref={sectionRef} className="section-y">
      <div className="container mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="h2 mb-6">
              Meet <span className="gradient-text">Reportr</span>
            </h2>
            <p className="lead text-muted-foreground mb-8 text-pretty">
              Building the first AI meeting assistant designed specifically for Australian financial advisors—our MVP 
              will transform client conversations into ASIC-compliant document drafts for advisor review and finalization.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Meeting → Statement of Advice</h4>
                  <p className="text-muted-foreground body-sm">
                    Planned: AI-assisted draft SoA generation with client goals, recommendations, and ASIC disclosure templates
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Compliance Template Engine</h4>
                  <p className="text-muted-foreground body-sm">
                    In development: Template library for FSG delivery, fact-finding, advice presentation, and RoA documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">XPLAN CRM Integration</h4>
                  <p className="text-muted-foreground body-sm">
                    Roadmap priority: Direct integration with XPLAN for seamless client data sync and workflow automation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 border border-accent/40 rounded-lg px-4 py-3 inline-block">
              <p className="body-sm font-medium text-primary">MVP Development Timeline: Q2 2025</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="h4 mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground body-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
