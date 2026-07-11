import Image from "next/image"
import { BadgeCheck } from "lucide-react"
import { siteConfig } from "@/lib/site"

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "200+", label: "Projetos entregues" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "50+", label: "Profissionais" },
]

export function AboutSection() {
  return (
    <section id="quem-somos" className="scroll-mt-16 bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-lg">
              <Image
                src="/images/project-commercial.png"
                alt="Equipe de engenharia da Nexxus Engenharia em projeto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Quem Somos</span>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Engenharia construída sobre confiança
              </h2>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              A Nexxus Engenharia nasceu do compromisso de entregar soluções técnicas de excelência. Ao longo de mais
              de uma década, consolidamos uma reputação sólida no mercado de engenharia civil, atendendo clientes
              residenciais, comerciais e de infraestrutura.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Nossa equipe multidisciplinar une conhecimento técnico, inovação e atenção aos detalhes para transformar
              desafios em estruturas seguras, funcionais e duradouras.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/responsavel-tecnico.png"
                alt={`Foto de ${siteConfig.responsavelTecnico.name}, responsável técnico da Nexxus Engenharia`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
                <h3 className="text-xl font-bold text-foreground">{siteConfig.responsavelTecnico.name}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {siteConfig.responsavelTecnico.crea}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {siteConfig.responsavelTecnico.title} · Engenharia Civil
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Engenheiro civil com mais de 15 anos de experiência em projetos estruturais, regularização de imóveis e
                perícias técnicas. Responsável por conduzir cada projeto com rigor normativo (ABNT) e total conformidade
                legal, assinando tecnicamente todos os trabalhos entregues pela Nexxus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
