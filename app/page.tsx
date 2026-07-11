import { HeroSection } from "@/components/hero-section"
import { RegularizationSection } from "@/components/regularization-section"
import { FeatureSection } from "@/components/feature-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBand } from "@/components/cta-band"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <RegularizationSection />
      <FeatureSection />
      <AdvantagesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaBand />
      <AboutSection />
      <ContactSection />
      <WhatsappFloat />
    </main>
  )
}
