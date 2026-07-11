import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react"

export function HeroSection() {
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
              Da concepção do projeto ao acompanhamento da obra, a Carvalho Engenharia entrega resultados com rigor
              técnico, segurança e total conformidade legal para transformar a sua visão em estruturas sólidas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#projetos">
                  Conheça nossos Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#contato">Fale com um Especialista</Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Segurança certificada
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Award className="h-5 w-5 text-primary" />
                {"+200 projetos entregues"}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="h-5 w-5 text-primary" />
                Prazos garantidos
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-construction.png"
                alt="Obra de engenharia civil moderna com estrutura em concreto e guindaste"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
