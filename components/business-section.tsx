"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap, Building, Crown } from "lucide-react"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Planned free tier to validate product-market fit",
    features: ["10 meetings per week", "Basic SoA templates", "Standard exports", "Email support"],
    icon: Zap,
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per user/month",
    description: "Target pricing for individual advisors and small teams",
    features: [
      "Unlimited meetings",
      "All compliance templates",
      "CRM integrations",
      "Priority support",
      "Custom branding",
      "Advanced analytics",
    ],
    icon: Building,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "custom quote",
    description: "Enterprise pricing model for large organizations",
    features: [
      "Everything in Professional",
      "SAML SSO",
      "Data residency options",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
    ],
    icon: Crown,
    popular: false,
  },
]

export function BusinessSection() {
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
    <section id="pricing" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Planned <span className="gradient-text">Pricing Strategy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our pricing strategy based on GTM research: accessible for solo advisors, efficient for mid-size firms, enterprise-ready compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                tier.popular ? "border-primary shadow-lg scale-105" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`p-3 rounded-full ${tier.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}
                    >
                      <tier.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">/{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`w-full text-center py-3 rounded-md border ${
                    tier.popular ? "border-primary bg-primary/5 text-primary" : "border-muted bg-muted/50 text-muted-foreground"
                  }`}>
                  <span className="font-medium">Planned Pricing Model</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1-2 hrs</div>
                  <div className="text-sm text-muted-foreground">Per client SoA creation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$300-800</div>
                  <div className="text-sm text-muted-foreground">Current outsourcing cost per SoA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$39 AUD</div>
                  <div className="text-sm text-muted-foreground">Lower than Claras ($139)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
