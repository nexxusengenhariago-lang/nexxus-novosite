import { CheckCircle2 } from "lucide-react"

const advantages = [
  {
    title: "Rigor Técnico",
    description: "Equipe de engenheiros especializados com metodologia comprovada em cada entrega.",
  },
  {
    title: "Conformidade Legal",
    description: "Todos os projetos seguem as normas técnicas ABNT e a legislação vigente.",
  },
  {
    title: "Transparência Total",
    description: "Relatórios periódicos e comunicação clara em todas as fases do projeto.",
  },
  {
    title: "Prazos Garantidos",
    description: "Planejamento detalhado e gestão eficiente para cumprir cada cronograma.",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Uso de softwares BIM e ferramentas modernas de modelagem e cálculo.",
  },
  {
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos rígidos de segurança do trabalho em todos os canteiros de obra.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="vantagens" className="scroll-mt-16 bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vantagens</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Por que escolher a Carvalho Engenharia
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Combinamos experiência, tecnologia e compromisso para entregar resultados que superam expectativas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="glass-card flex items-start gap-4 rounded-xl p-6">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
