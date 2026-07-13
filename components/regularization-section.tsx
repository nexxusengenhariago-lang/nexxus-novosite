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
    title: "Sua construção é anterior a 19/10/1995?",
    description:
      "Imóveis construídos até essa data podem ser regularizados pelo Alvará de Aceite, um processo mais simples. Comprovamos a época da construção e cuidamos de toda a documentação junto à Prefeitura.",
    modalKey: "aceite",
  },
  {
    icon: FileCheck2,
    title: "Sua construção é posterior a 19/10/1995?",
    description:
      "Edificações levantadas após essa data e sem alvará, ou em desacordo com o Plano Diretor, são regularizadas pelo Alvará de Regularização. Cuidamos do levantamento arquitetônico, ART e todo o processo.",
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

const modalContent = {
  aceite: {
    title: "Alvará de Aceite",
    subtitle: "Para construções realizadas até 19/10/1995",
    intro:
      "Criado pela Lei Complementar nº 314/2018 do município de Goiânia, o Alvará de Aceite é o caminho mais simples e rápido para regularizar imóveis antigos, já que a legislação urbanística vigente na época era mais flexível.",
    sections: [
      {
        icon: FileText,
        heading: "Documentos exigidos",
        items: [
          "Comprovação da época da construção (conta de luz, água, IPTU antigo, foto aérea ou declaração)",
          "Croqui simplificado do imóvel (dispensa projeto de arquitetura completo em edificações de até 200 m²)",
          "Cópia da matrícula ou escritura do imóvel",
          "Documentos pessoais do proprietário e, se houver, do responsável técnico",
        ],
      },
      {
        icon: Ruler,
        heading: "Quando o processo é ainda mais simples",
        items: [
          "Até 200 m² de área construída: dispensa projeto de arquitetura, bastando um croqui",
          "Acima de 200 m²: é necessário levantamento arquitetônico completo com ART",
        ],
      },
      {
        icon: Clock,
        heading: "Prazos",
        items: [
          "Análise inicial da prefeitura: costuma variar entre 30 e 60 dias, conforme demanda",
          "Prazo pode ser maior se houver pendências fundiárias ou de documentação",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Multas e custas",
        items: [
          "Como a construção é anterior à legislação atual, geralmente não há multa por irregularidade em si",
          "Podem incidir apenas taxas administrativas do processo junto à prefeitura",
        ],
      },
    ],
    footer:
      "Cada caso tem particularidades. Fazemos uma avaliação inicial gratuita para confirmar se o seu imóvel se enquadra no Alvará de Aceite.",
  },
  regularizacao: {
    title: "Alvará de Regularização",
    subtitle: "Para construções realizadas após 19/10/1995",
    intro:
      "Regido pela Lei Complementar nº 314/2018, o Alvará de Regularização se aplica a construções mais recentes que estão sem licença ou em desacordo com o Plano Diretor e o Código de Obras de Goiânia. O processo é mais completo, pois a legislação atual exige mais critérios técnicos.",
    sections: [
      {
        icon: FileText,
        heading: "Documentos exigidos",
        items: [
          "Levantamento arquitetônico completo da edificação (plantas atualizadas)",
          "ART (Anotação de Responsabilidade Técnica) do profissional responsável",
          "Cópia da matrícula ou escritura do imóvel",
          "Comprovante de IPTU e documentos pessoais do proprietário",
          "Consulta prévia de viabilidade junto à Prefeitura, quando exigida",
        ],
      },
      {
        icon: Ruler,
        heading: "Adequação ao Plano Diretor",
        items: [
          "A edificação é analisada quanto a recuos, taxa de ocupação, gabarito (altura/pavimentos) e área permeável",
          "Pode ser necessário ajuste no projeto para atender aos parâmetros vigentes",
        ],
      },
      {
        icon: Clock,
        heading: "Prazos",
        items: [
          "Análise técnica costuma levar entre 45 e 90 dias, a depender da complexidade",
          "Processos com pendências de adequação ao Plano Diretor podem levar mais tempo",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Multas e custas",
        items: [
          "Incide multa proporcional à área irregular construída, conforme tabela da Prefeitura de Goiânia",
          "Quanto maior o tempo de irregularidade e a área construída, maior tende a ser o valor",
          "É possível, em alguns casos, negociar parcelamento da multa junto ao município",
        ],
      },
    ],
    footer:
      "Fazemos o levantamento técnico completo e simulamos o valor estimado da multa antes de dar entrada no processo, para você decidir com segurança.",
  },
}

export function RegularizationSection() {
  const [openModal, setOpenModal] = useState<keyof typeof modalContent | null>(null)

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
          {situations.map((item) => {
            const isClickable = Boolean(item.modalKey)
            const Wrapper = isClickable ? "button" : "div"

            return (
              <Wrapper
                key={item.title}
                type={isClickable ? "button" : undefined}
                onClick={isClickable ? () => setOpenModal(item.modalKey as keyof typeof modalContent) : undefined}
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
              {modalContent[openModal].subtitle}
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
              {modalContent[openModal].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{modalContent[openModal].intro}</p>

            <div className="mt-6 flex flex-col gap-5">
              {modalContent[openModal].sections.map((section) => (
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
