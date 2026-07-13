"use client"

import { useState } from "react"
import {
  Wrench,
  Building2,
  Home,
  Banknote,
  CalendarClock,
  FileCheck2,
  FileWarning,
  HelpCircle,
  X,
  FileText,
  Clock,
  AlertTriangle,
  Ruler,
  MapPin,
} from "lucide-react"

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
    icon: CalendarClock,
    title: "Sua construção é antiga e nunca teve alvará?",
    description:
      "Imóveis construídos há mais tempo podem ser regularizados pelo Alvará de Aceite, um processo mais simples. A data de corte varia entre Goiânia e Aparecida de Goiânia — veja qual se aplica ao seu caso.",
    modalKey: "aceite",
  },
  {
    icon: FileCheck2,
    title: "Sua construção é recente e está em desacordo com o projeto?",
    description:
      "Edificações mais novas, sem alvará ou em desacordo com o Plano Diretor, são regularizadas pelo Alvará de Regularização. Cuidamos do levantamento técnico, ART e todo o processo.",
    modalKey: "regularizacao",
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

type CityKey = "goiania" | "aparecida"

const cityLabels: Record<CityKey, string> = {
  goiania: "Goiânia",
  aparecida: "Aparecida de Goiânia",
}

const modalContent = {
  aceite: {
    title: "Alvará de Aceite",
    tagline: "O caminho mais simples para regularizar construções mais antigas",
    byCity: {
      goiania: {
        marco: "Construções concluídas até 19/10/1995",
        lei: "Regulamentado pela Lei Complementar nº 314/2018 (Prefeitura de Goiânia), com base na Lei Orgânica do Município.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Comprovação da época da construção (foto aérea, IPTU antigo, conta de luz/água antiga ou outro documento idôneo)",
              "Croqui simplificado do imóvel para edificações menores, dispensando projeto de arquitetura completo",
              "Cópia da matrícula ou escritura do imóvel",
              "Certidão de remembramento, desmembramento ou remanejamento, caso o imóvel ocupe mais de um lote",
            ],
          },
          {
            icon: Ruler,
            heading: "Pontos de atenção",
            items: [
              "O Alvará de Aceite é concedido uma única vez por imóvel",
              "Não é concedido para construções que obstruam área pública, logradouro ou Área de Preservação Permanente (APP)",
              "Imóveis em áreas aeroportuárias dependem de autorização prévia do Departamento de Aviação Civil",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Custas",
            items: [
              "Como a construção é anterior à legislação vigente, normalmente não há multa por irregularidade em si",
              "Incidem apenas as taxas administrativas do processo junto à Seplanh",
            ],
          },
        ],
      },
      aparecida: {
        marco: "Construções concluídas com data anterior a 09/10/2018",
        lei: "Previsto no Código de Obras e Edificações do Município (Lei Complementar nº 171/2019, art. 80), que atualizou a LC 105/2015.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Certidão de uso do solo",
              "Projeto de levantamento em escala mínima de 1:100, com elevação da fachada frontal indicando o nome da via",
              "Documento idôneo que comprove a existência e a época da edificação",
            ],
          },
          {
            icon: Ruler,
            heading: "Como o processo tramita",
            items: [
              "Solicitação feita pelo Portal Vapt Vupt ou diretamente na Secretaria de Planejamento e Regulação Urbana",
              "Imóveis acima de 5.000 m² podem usar a tramitação híbrida prevista na Resolução CGPD nº 001/2025",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Taxas",
            items: [
              "Receita 22590 — Alvará de Aceite: 16,00 UVFA/m² para a área em desacordo + 0,40 UVFA/m² para a área já em conformidade",
              "Valor gerado após a análise técnica do processo pela Secretaria de Regulação Urbana",
            ],
          },
        ],
      },
    },
    footer:
      "A data de corte é diferente em cada município. Fazemos uma avaliação inicial gratuita para confirmar se o seu imóvel se enquadra no Alvará de Aceite de Goiânia ou de Aparecida de Goiânia.",
  },
  regularizacao: {
    title: "Alvará de Regularização",
    tagline: "Para construções mais recentes, sem alvará ou em desacordo com o projeto aprovado",
    byCity: {
      goiania: {
        marco: "Edificações estruturalmente definidas após 19/10/1995, em desacordo com o Plano Diretor (LC 349/2022) e o Código de Obras (LC 364/2023)",
        lei: "Instituído pela Lei Complementar nº 314/2018, com atualizações trazidas pelas LC 349/2022, LC 364/2023 e LC 368/2023.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Levantamento arquitetônico completo (plantas e elevações atualizadas)",
              "ART do responsável técnico",
              "Imagem de cobertura do imóvel via Google Earth com data compatível, ou documento equivalente que comprove a edificação",
              "Certidão de remembramento, desmembramento ou remanejamento, se o imóvel ocupar mais de um lote",
            ],
          },
          {
            icon: Ruler,
            heading: "Critérios técnicos",
            items: [
              "Só podem ser regularizados imóveis com até 7 pavimentos e altura máxima de 21 metros",
              "Edificações acima de 250 m² que não ocupem toda a área do terreno precisam de poço de infiltração ou caixa de recarga para permeabilidade do solo",
              "Não é concedido para construções em vias não oficializadas sem prévia regularização do parcelamento do solo, nem em áreas que obstruam logradouro público ou APP",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Multas e taxas",
            items: [
              "Cobrança composta por taxa de aprovação de projetos + multa formal por descumprimento do Plano Diretor e Código de Obras",
              "Para área entre 200 m² e 500 m², a multa formal de ofício corresponde a 400% do valor da taxa de aprovação de projetos",
              "Áreas de até 200 m² podem ter isenção da multa em situações específicas, como imóveis de Planta Popular ou localizados em Áreas Especiais de Interesse Social (AEIS I e II)",
            ],
          },
        ],
      },
      aparecida: {
        marco: "Construções posteriores a 09/10/2018, em desacordo com o Código de Obras e Edificações (LC 171/2019) e a Lei de Uso e Ocupação do Solo",
        lei: "Regido pela Lei Complementar nº 171/2019 (Código de Obras e Edificações de Aparecida de Goiânia).",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Certidão de uso do solo",
              "Projeto de levantamento em escala mínima de 1:100, com elevação da fachada frontal",
              "Documentação que comprove a existência da edificação, conforme exigido pelo Código de Obras",
            ],
          },
          {
            icon: Ruler,
            heading: "Como o processo tramita",
            items: [
              "Análise feita pela Secretaria de Planejamento e Regulação Urbana, com possibilidade de protocolo pelo Portal Vapt Vupt",
              "Imóveis acima de 5.000 m² podem seguir o rito de tramitação híbrida da Resolução CGPD nº 001/2025",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Taxas",
            items: [
              "Receita 22590: 16,00 UVFA/m² para a área em desacordo + 0,40 UVFA/m² para a área já em conformidade",
              "Valor final apurado após análise técnica do processo",
            ],
          },
        ],
      },
    },
    footer:
      "Fazemos o levantamento técnico completo e simulamos o custo estimado antes de dar entrada no processo, já considerando as regras específicas de Goiânia ou de Aparecida de Goiânia.",
  },
}

export function RegularizationSection() {
  const [openModal, setOpenModal] = useState<keyof typeof modalContent | null>(null)
  const [activeCity, setActiveCity] = useState<CityKey>("goiania")

  return (
    <section id="regularizacao" className="scroll-mt-16 bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Quem deve regularizar</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Seu imóvel se enquadra em alguma dessas situações?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Situações irregulares têm solução. Veja os casos mais comuns que atendemos em Goiânia e Aparecida de
            Goiânia, e como resolvemos cada um.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item) => {
            const isClickable = Boolean(item.modalKey)
            const Wrapper = isClickable ? "button" : "div"

            return (
              <Wrapper
                key={item.title}
                type={isClickable ? "button" : undefined}
                onClick={
                  isClickable
                    ? () => {
                        setActiveCity("goiania")
                        setOpenModal(item.modalKey as keyof typeof modalContent)
                      }
                    : undefined
                }
                className={`glass-card flex flex-col gap-3 rounded-xl p-6 text-left ${
                  isClickable ? "cursor-pointer transition hover:-translate-y-0.5 hover:shadow-lg" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {isClickable && (
                  <span className="mt-1 text-xs font-semibold text-primary">Ver detalhes completos →</span>
                )}
              </Wrapper>
            )
          })}
        </div>
      </div>

      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-muted/80"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {modalContent[openModal].tagline}
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
              {modalContent[openModal].title}
            </h3>

            {/* City tabs */}
            <div className="mt-5 flex gap-2 rounded-lg bg-muted p-1">
              {(Object.keys(cityLabels) as CityKey[]).map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                    activeCity === city
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {cityLabels[city]}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-foreground">
                {modalContent[openModal].byCity[activeCity].marco}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {modalContent[openModal].byCity[activeCity].lei}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {modalContent[openModal].byCity[activeCity].sections.map((section) => (
                <div key={section.heading} className="rounded-xl border border-border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <section.icon className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">{section.heading}</h4>
                  </div>
                  <ul className="ml-1 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl bg-primary/10 p-4 text-sm leading-relaxed text-foreground">
              {modalContent[openModal].footer}
            </p>

            <a
              href="#contato"
              onClick={() => setOpenModal(null)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Solicitar avaliação gratuita
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
