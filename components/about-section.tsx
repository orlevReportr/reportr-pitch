"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Oren Levy",
    role: "Founder & CEO",
    bio: "Product architect and technical lead. Built Reportr MVP and drives product vision. Background in sales and engineering with deep understanding of AI-powered solutions.",
    image: "/placeholder.svg",
    linkedin: "#",
    twitter: "#",
    email: "oren@reportr.ai",
  },
  {
    name: "Adam Shuvalov",
    role: "Technical Co-Founder",
    bio: "Software Engineer with NSW Government and former Technical Intelligence Officer. Security and engineering specialist with background in Security. Cellebrite Certified Operator and Cellebrite Certified Physical Analyst.",
    image: "/placeholder.svg",
    linkedin: "#",
    twitter: "#",
    email: "adam@reportr.ai",
  },
  {
    name: "Tzvi Balbin",
    role: "Strategic Advisor - Marketing & Growth",
    bio: "Founder & Head of Digital at DataSauce. 11+ years scaling digital marketing campaigns with 100M+ ad spend across platforms. Leads sales, marketing, and partnership strategy.",
    image: "/placeholder.svg",
    linkedin: "#",
    twitter: "#",
    email: "tzvi@reportr.ai",
  },
  {
    name: "Moshe Goldsmith",
    role: "Strategic Advisor - Financial Services",
    bio: "Director - Principal Adviser at Safety Nest. 10+ years as Financial Advisor navigating Australia's regulatory environment. Deep expertise in ASIC compliance, file notes, SoA/RoA documentation, and audit requirements.",
    image: "/placeholder.svg",
    linkedin: "#",
    twitter: "#",
    email: "moshe@reportr.ai",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section-y bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            About <span className="gradient-text">Our Team</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            A world-class team combining deep financial services expertise with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="h4 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium body-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground body-sm leading-relaxed">{member.bio}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="h3 mb-4">Why We Built Reportr</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed mb-6">
                After witnessing Australian financial advisors struggle with post-Royal Commission compliance burdens,
                we knew AI could transform how regulated professionals handle documentation. Our team combines deep
                Australia regulatory expertise with proven technical execution to build the compliance-first AI co-pilot solution
                that turns conversations into compliant documentation ready for client delivery and audit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
