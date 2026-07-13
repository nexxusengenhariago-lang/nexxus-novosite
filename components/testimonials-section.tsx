import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Cliente Residencial",
    role: "Alvará de construção",
    rating: 5,
    quote:
      "Substitua por um depoimento real de cliente. Ex.: eu não fazia ideia de quantos documentos a prefeitura pedia — a Nexxus assumiu tudo e só me avisava quando precisava assinar algo.",
  },
  {
    name: "Cliente Comercial",
    role: "Aprovação de projeto",
    rating: 5,
    quote:
      "Substitua por um depoimento real de cliente. Ex.: o que mais me convenceu foi só pagar a última parte quando o alvará saiu de fato — o risco ficou com eles, não comigo.",
  },
  {
    name: "Cliente Incorporador",
    role: "Regularização de imóvel",
    rating: 5,
    quote:
      "Substitua por um depoimento real de cliente. Ex.: já tinha tentado resolver sozinho e travei em pendências. Com a Nexxus, em poucas semanas o processo estava andando.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Depoimentos</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Resultados que geram confiança — veja a experiência de quem já regularizou ou construiu com a Nexxus.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-card flex flex-col gap-4 rounded-xl p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{testimonial.quote}</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * Textos de exemplo — substitua pelos depoimentos reais dos seus clientes (Google, WhatsApp, etc.).
        </p>
      </div>
    </section>
  )
}
