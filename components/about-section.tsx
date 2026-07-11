import Image from "next/image"

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
                alt="Equipe de engenharia da Carvalho Engenharia em projeto"
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
              A Carvalho Engenharia nasceu do compromisso de entregar soluções técnicas de excelência. Ao longo de mais
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
      </div>
    </section>
  )
}
