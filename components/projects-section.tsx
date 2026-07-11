import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    image: "/images/project-residential.png",
    category: "Residencial",
    title: "Edifício Residencial Aurora",
    description: "Projeto estrutural e acompanhamento de obra de condomínio de alto padrão com 18 pavimentos.",
  },
  {
    image: "/images/project-commercial.png",
    category: "Comercial",
    title: "Torre Corporativa Meridian",
    description: "Desenvolvimento de projeto executivo e regularização de edifício comercial de 12 mil m².",
  },
  {
    image: "/images/project-infrastructure.png",
    category: "Infraestrutura",
    title: "Viaduto Integração Norte",
    description: "Projeto e fiscalização de obra de infraestrutura viária com engenharia de estruturas em concreto.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Cases</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">Projetos em Destaque</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Conheça alguns dos empreendimentos que ganharam vida com a expertise da Carvalho Engenharia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
