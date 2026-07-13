import { HeroSection } from "@/components/hero-section"
import { PaymentProcessSection } from "@/components/payment-process-section"
import { RegularizationSection } from "@/components/regularization-section"
import { FeatureSection } from "@/components/feature-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TrustStripSection } from "@/components/trust-strip-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PaymentProcessSection />
      <RegularizationSection />
      <FeatureSection />
      <AdvantagesSection />
      <TrustStripSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
    </main>
  )
}
