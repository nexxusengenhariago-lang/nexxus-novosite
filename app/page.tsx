import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <AdvantagesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
