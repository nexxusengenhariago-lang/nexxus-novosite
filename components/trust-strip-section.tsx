import Image from "next/image"

// ATENÇÃO: troque os dois arquivos placeholder-*.svg em /public/images pelas fotos reais.
const photos = [
  {
    src: "/images/placeholder-handshake.svg",
    alt: "Aperto de mãos selando o acordo com a Nexxus Engenharia",
    caption: "Um acordo simples, sem letras miúdas",
  },
  {
    src: "/images/project-residencial-2.jpg",
    alt: "Residência com projeto aprovado e entregue pela Nexxus Engenharia",
    caption: "Projeto aprovado, obra realizada",
  },
  {
    src: "/images/placeholder-alvara-aprovado.svg",
    alt: "Cliente recebendo o alvará aprovado",
    caption: "Você só recebe boas notícias",
  },
]

export function TrustStripSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-lg"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
