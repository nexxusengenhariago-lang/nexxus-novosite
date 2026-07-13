import Link from "next/link"
import { Logo } from "@/components/logo"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const quickLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#regularizacao", label: "Regularização" },
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#contato", label: "Contato" },
]

const services = [
  "Aprovação de Projetos",
  "Alvarás e Regularização",
  "INSS de Obras",
  "Perícias e Vistorias",
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[hsl(var(--navy))] text-[hsl(var(--navy-foreground))]">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo asLink variant="light" />
            <p className="text-sm leading-relaxed text-white/70">
              Alvarás, aprovações e regularização de imóveis — você só paga quando cada etapa é entregue.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-primary"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Links Rápidos</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Serviços</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Nexxus Engenharia. Todos os direitos reservados. · {siteConfig.crea} ·
            CNPJ: {siteConfig.cnpj}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <Link href="#" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
