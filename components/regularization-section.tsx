import { Wrench, Building2, Home, Banknote, EyeOff, Recycle, FileWarning, HelpCircle } from "lucide-react"

const situations = [
  {
    icon: Wrench,
    title: "Construiu sem alvará de construção?",
    description:
      "Obra erguida sem licença pode ser embargada e gera multa. Regularizamos junto à prefeitura, obtendo o alvará retroativo e garantindo a legalidade total da edificação.",
  },
  {
    icon: Building2,
    title: "Fez ampliação ou reforma sem projeto aprovado?",
    description:
      "Ampliações e reformas precisam de aprovação prévia. Elaboramos o projeto de regularização, aprovamos na prefeitura e providenciamos o aditivo ao alvará original.",
  },
  {
    icon: Home,
    title: "Estabelecimento sem Carta de Ocupação ou Habite-se?",
    description:
      "Sem carta de ocupação ou habite-se não é possível renovar o alvará de funcionamento. Obtemos a documentação e garantimos a continuidade da atividade sem riscos.",
  },
  {
    icon: Banknote,
    title: "Quer vender ou financiar o imóvel mas há pendências?",
    description:
      "Bancos exigem documentação regularizada para financiamento. Resolvemos averbação de construção, habite-se e escritura para venda ou refinanciamento sem entraves.",
  },
  {
    icon: EyeOff,
    title: "Muro avançou na calçada ou chanfro de esquina?",
    description:
      "Muros fora do alinhamento são irregulares e impedem a regularização. Elaboramos o projeto de adequação e regularizamos a situação junto ao município.",
  },
  {
    icon: Recycle,
    title: "Imóvel sem área permeável ou fora dos recuos?",
    description:
      "A legislação municipal exige recuos e área permeável mínima. Analisamos a situação, identificamos as adequações necessárias e conduzimos todo o processo.",
  },
  {
    icon: FileWarning,
    title: "Imóvel não confere com a escritura ou matrícula?",
    description:
      "Divergências entre o imóvel físico e os documentos geram problemas em inventários, heranças e vendas. Fazemos a retificação, desmembramento ou remembramento.",
  },
  {
    icon: HelpCircle,
    title: "Precisa do INSS de obra ou de um laudo técnico?",
    description:
      "A regularização fiscal de obras exige cálculo e recolhimento do INSS. Também elaboramos laudos técnicos e perícias para fins jurídicos, bancários ou de segurança.",
  },
]

export function RegularizationSection() {
  return (
    <section id="regularizacao" className="scroll-mt-16 bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Quem deve regularizar</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Seu imóvel se enquadra em alguma dessas situações?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Situações irregulares têm solução. Veja os casos mais comuns que atendemos e como resolvemos cada um.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item) => (
            <div key={item.title} className="glass-card flex flex-col gap-3 rounded-xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
