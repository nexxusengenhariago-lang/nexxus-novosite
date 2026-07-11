import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HousePlus, Hammer, FileKey, Landmark, ArrowRight } from "lucide-react"
import { whatsappLink } from "@/lib/site"

const situations = [
  {
    icon: HousePlus,
    title: "Construiu sem alvará",
    description:
      "Regularizamos construções feitas sem autorização, elaborando o projeto e conduzindo a aprovação junto à prefeitura.",
    message: "Olá! Construí sem alvará e preciso regularizar meu imóvel.",
  },
  {
    icon: Hammer,
    title: "Reforma sem projeto aprovado",
    description:
      "Ampliou ou reformou sem projeto? Fazemos o levantamento, o projeto as-built e a legalização da área modificada.",
    message: "Olá! Fiz uma reforma sem projeto aprovado e preciso de ajuda.",
  },
  {
    icon: FileKey,
    title: "Precisa do Habite-se",
    description:
      "Cuidamos de toda a documentação técnica e vistorias necessárias para obter o Habite-se e a Carta de Conclusão.",
    message: "Olá! Preciso obter o Habite-se do meu imóvel.",
  },
  {
    icon: Landmark,
    title: "Pendência para financiar",
    description:
      "Resolvemos pendências documentais e de averbação que travam o financiamento ou a venda do seu imóvel.",
    message: "Olá! Tenho pendência documental que está travando meu financiamento.",
  },
]

export function RegularizationSection() {
  return (
    <section id="regularizar" className="scroll-mt-16 bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Regularização de Imóveis</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Identifique a sua situação
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Cada imóvel tem uma história. Veja os casos mais comuns que resolvemos e descubra como deixar o seu 100%
            legalizado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item) => (
            <div key={item.title} className="glass-card group flex flex-col gap-4 rounded-xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <Button variant="link" asChild className="h-auto w-fit p-0 text-primary">
                <Link href={whatsappLink(item.message)}>
                  Resolver agora
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
