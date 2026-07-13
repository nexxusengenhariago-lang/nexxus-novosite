import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "@/lib/site-config"

export function CtaBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="glass-card flex flex-col items-start gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Avaliação gratuita</span>
            <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Não sabe se o seu caso se encaixa no pagamento por etapa?
            </h3>
            <p className="mt-3 text-pretty text-muted-foreground">
              Solicite uma avaliação gratuita da situação do seu imóvel ou projeto. Analisamos o caso e explicamos
              exatamente como funcionariam as 3 etapas de pagamento no seu processo — sem compromisso.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" asChild>
              <Link
                href={getWhatsAppLink("Olá! Gostaria de solicitar uma avaliação gratuita do meu imóvel.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar avaliação gratuita
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contato">
                Ou envie uma mensagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
