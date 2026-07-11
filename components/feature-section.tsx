import { DraftingCompass, FileCheck, ClipboardCheck, HardHat } from "lucide-react"

const services = [
  {
    icon: DraftingCompass,
    title: "Projetos de Engenharia",
    description:
      "Projetos estruturais, arquitetônicos e complementares desenvolvidos com tecnologia BIM e precisão técnica.",
  },
  {
    icon: FileCheck,
    title: "Alvarás e Regularização",
    description:
      "Aprovação de projetos junto aos órgãos competentes, regularização de imóveis e emissão de documentação legal.",
  },
  {
    icon: ClipboardCheck,
    title: "Perícias e Vistorias",
    description:
      "Laudos técnicos, perícias judiciais e vistorias detalhadas para garantir a segurança e conformidade das edificações.",
  },
  {
    icon: HardHat,
    title: "Acompanhamento de Obras",
    description:
      "Gerenciamento e fiscalização de obras com controle de cronograma, custos e qualidade em todas as etapas.",
  },
]

export function FeatureSection() {
  return (
    <section id="servicos" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Nossos Serviços</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Pilares que sustentam cada projeto
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Atuamos em todo o ciclo da engenharia civil, oferecendo soluções completas e integradas para o seu
            empreendimento.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="glass-card group flex flex-col gap-4 rounded-xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
