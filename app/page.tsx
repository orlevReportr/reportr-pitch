import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { CompetitiveSection } from "@/components/competitive-section"
import { MarketSection } from "@/components/market-section"
import { BusinessSection } from "@/components/business-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { AboutSection } from "@/components/about-section"
import { AskSection } from "@/components/ask-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="problem">
        <ProblemSection />
      </section>
      <section id="solution">
        <SolutionSection />
      </section>
      <section id="competitive">
        <CompetitiveSection />
      </section>
      <section id="market">
        <MarketSection />
      </section>
      <section id="pricing">
        <BusinessSection />
      </section>
      <RoadmapSection />
      <section id="about">
        <AboutSection />
      </section>
      <AskSection />
    </main>
  )
}
