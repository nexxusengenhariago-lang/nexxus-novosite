import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function CtaBand() {
  return (
    <section className="bg-[hsl(var(--navy))] text-[hsl(var(--navy-foreground))]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
        <div className="container relative flex flex-col items-center gap-6 px-4 py-14 text-center md:px-6 md:py-16">
          <h2 className="max-w-2xl text-balance text-2xl font-bold tracking-tight text-white md:text-3xl">
            Não sabe se o seu imóvel precisa de regularização?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-white/70">
            Fale com nossa equipe e solicite uma avaliação gratuita. Analisamos a sua situação e indicamos o melhor
            caminho, sem compromisso.
          </p>
          <Button size="lg" asChild>
            <Link
              href={whatsappLink("Olá! Gostaria de uma avaliação gratuita da situação do meu imóvel.")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar avaliação gratuita
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
