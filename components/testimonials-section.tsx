import { Star } from "lucide-react"
import { siteConfig } from "@/lib/site"

const testimonials = [
  {
    name: "Marina Alves",
    role: "Proprietária - Residência unifamiliar",
    rating: 5,
    text: "Regularizei minha casa que estava sem Habite-se há anos. A Nexxus cuidou de tudo com clareza e resolveu em menos tempo do que eu esperava.",
  },
  {
    name: "Carlos Mendes",
    role: "Investidor - Prédio comercial",
    rating: 5,
    text: "Contratei o projeto estrutural e o acompanhamento da obra. Profissionalismo do início ao fim, com relatórios técnicos impecáveis.",
  },
  {
    name: "Juliana Prado",
    role: "Síndica - Condomínio residencial",
    rating: 5,
    text: "A perícia técnica foi decisiva para resolver um problema estrutural. Equipe atenciosa e laudo muito bem fundamentado.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Prova Social</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            O que nossos clientes dizem
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">{siteConfig.googleRating.score}</span>
            <span className="text-sm text-muted-foreground">
              {siteConfig.googleRating.reviews} avaliações no Google
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="glass-card flex flex-col gap-4 rounded-xl p-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {`"${item.text}"`}
              </blockquote>
              <figcaption>
                <div className="font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
