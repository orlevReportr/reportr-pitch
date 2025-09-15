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
    description: "Perfect for trying Reportr with minimal commitment",
    features: ["1 document per day", "Basic compliance templates", "Calendar integration", "Community support", "No credit card required"],
    icon: Zap,
    popular: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "+ usage-based pricing",
    description: "Flexible pricing for solo advisors and growing practices",
    features: ["Base plan + pay-per-document", "All compliance templates", "Priority email support", "Advanced analytics", "Cost scales with usage"],
    icon: Building,
    popular: false,
  },
  {
    name: "Professional",
    price: "$89",
    period: "per advisor/month",
    description: "Unlimited documents for busy advisors and established firms",
    features: [
      "Unlimited documents",
      "All compliance templates",
      "Priority support",
      "Team management",
      "Advanced analytics",
      "Predictable monthly costs",
    ],
    icon: Crown,
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "negotiated pricing",
    description: "Tailored solutions for large firms and dealerships",
    features: [
      "Everything in Professional",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Volume discounts",
    ],
    icon: Building,
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
    <section id="pricing" ref={sectionRef} className="section-y">
      <div className="container mx-auto container-px">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="h2 mb-6">
            Planned <span className="gradient-text">Pricing Strategy</span>
          </h2>
          <p className="lead text-muted-foreground max-w-3xl mx-auto text-pretty">
            Start free, scale affordably: from 1 document per day forever free, to usage-based pricing for solos, to unlimited plans for established practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  <h3 className="h3 mb-2">{tier.name}</h3>
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
        {/*<div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>*/}
        {/*  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">*/}
        {/*    <CardContent className="p-8">*/}
        {/*      <h3 className="h3 mb-6 text-center">Why Our Pricing Works</h3>*/}
        {/*      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">*/}
        {/*        <div>*/}
        {/*          <div className="text-3xl font-bold text-primary mb-2">Free</div>*/}
        {/*          <div className="text-sm text-muted-foreground">Start with 1 document/day forever</div>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <div className="text-3xl font-bold text-primary mb-2">$49</div>*/}
        {/*          <div className="text-sm text-muted-foreground">Base price + usage-based scaling</div>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <div className="text-3xl font-bold text-primary mb-2">36%</div>*/}
        {/*          <div className="text-sm text-muted-foreground">Cheaper than Claras unlimited ($139)</div>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <div className="text-3xl font-bold text-primary mb-2">Custom</div>*/}
        {/*          <div className="text-sm text-muted-foreground">Enterprise solutions & volume pricing</div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="mt-6 text-center">*/}
        {/*        <p className="text-sm text-muted-foreground italic">*/}
        {/*          Usage-based pricing details determined by operational costs and user psychology research*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </CardContent>*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}
