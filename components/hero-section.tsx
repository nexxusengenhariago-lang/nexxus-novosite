"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, MapPin, Clock } from "lucide-react"
import { siteConfig, getWhatsAppLink } from "@/lib/site-config"

const heroImages = [
  {
    src: "/images/hero-residencial.jpg",
    alt: "Residência de alto padrão com projeto e acompanhamento de obra da Nexxus Engenharia",
  },
  {
    src: "/images/project-residencial-1.jpg",
    alt: "Sobrado residencial finalizado pela Nexxus Engenharia",
  },
  {
    src: "/images/project-comercial-1.jpg",
    alt: "Galpão comercial construído e regularizado pela Nexxus Engenharia",
  },
  {
    src: "/images/project-comercial-2.jpg",
    alt: "Galpão industrial com estrutura metálica executado pela Nexxus Engenharia",
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--navy))] text-[hsl(var(--navy-foreground))]">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--navy))]/85 to-[hsl(var(--navy))]/40"
        aria-hidden="true"
      />

      <div className="container relative px-4 py-20 md:px-6 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              Engenharia Civil de Precisão
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Soluções de Engenharia de Alta Performance
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              Da concepção do projeto ao acompanhamento da obra, a Nexxus Engenharia entrega resultados com rigor
              técnico, segurança e total conformidade legal para transformar a sua visão em estruturas sólidas.
            </p>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-white/60 md:text-base">
              Projetos de engenharia, alvarás e regularização, perícias, vistorias e acompanhamento de obras em{" "}
              <span className="font-medium text-primary">{siteConfig.region}</span>.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento no WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#projetos">Conheça nossos projetos</Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="h-5 w-5 text-primary" />
                {siteConfig.yearsExperience} anos de experiência
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Responsável técnico {siteConfig.crea}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-5 w-5 text-primary" />
                {siteConfig.region}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:aspect-[4/5]">
              {heroImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Mostrar imagem ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
