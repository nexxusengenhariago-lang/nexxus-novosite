import { Ruler, FileStack, BadgeCheck } from "lucide-react"
import { getWhatsAppLink } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Levantamento e Croqui",
    payment: "1ª parte do pagamento",
    description:
      "Visitamos o local, fazemos a medição e elaboramos o croqui do projeto. É aqui que tudo começa a sair do papel.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Protocolo na Prefeitura",
    payment: "2ª parte do pagamento",
    description:
      "Organizamos toda a documentação exigida e damos entrada no processo junto à Prefeitura. Você não precisa entender de burocracia — a gente entende por você.",
    icon: FileStack,
  },
  {
    number: "03",
    title: "Alvará Aprovado",
    payment: "3ª e última parte — só aqui",
    description:
      "Acompanhamos o processo até a aprovação final. Você só paga essa etapa quando o alvará estiver, de fato, em suas mãos.",
    icon: BadgeCheck,
  },
]

export function PaymentProcessSection() {
  return (
    <section id="como-funciona" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Como Funciona</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Você paga pelo que já foi entregue
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Dividimos o processo em 3 etapas, com pagamento vinculado a cada entrega. Nada de pagar tudo
            adiantado e torcer para o alvará sair — o risco é compartilhado com a gente.
          </p>
        </div>

        <div className="mx-auto mb-12 flex max-w-xl items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-center">
          <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm font-medium text-foreground">
            A última parcela só é cobrada quando o seu alvará é aprovado.
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="glass-card group flex flex-col gap-4 rounded-xl p-6 text-center items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs font-semibold text-primary">{step.number}</span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {step.payment}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild>
            <Link
              href={getWhatsAppLink("Olá! Quero entender como funciona o pagamento por etapa da Nexxus Engenharia.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero saber mais sobre esse modelo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
