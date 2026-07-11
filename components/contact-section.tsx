import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-16 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contato</span>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Solicite seu orçamento
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Preencha o formulário ou entre em contato pelos nossos canais. Nossa equipe responderá o mais breve
                possível.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefone</div>
                  <div className="font-medium text-foreground">(62) 3000-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <div className="font-medium text-foreground">contato@nexxusengenharia.eng.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Endereço</div>
                  <div className="font-medium text-foreground">Av. Central, 1500 - Centro, Goiânia - GO</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 md:p-8">
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="voce@email.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Serviço de interesse</Label>
                <Input id="service" placeholder="Ex.: Projeto estrutural, regularização..." />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva o seu projeto ou necessidade" rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Solicitar Orçamento
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
