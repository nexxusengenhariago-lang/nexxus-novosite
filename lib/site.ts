export const siteConfig = {
  name: "Nexxus Engenharia",
  // Região de atuação (SEO local)
  region: "Goiânia e Região Metropolitana - GO",
  crea: "CREA-GO 000000/D",
  cnpj: "00.000.000/0001-00",
  responsavelTecnico: {
    name: "Eng. Civil Rafael Nexxus",
    title: "Responsável Técnico",
    crea: "CREA-GO 000000/D",
  },
  phone: "(62) 3000-0000",
  email: "contato@nexxusengenharia.eng.br",
  address: "Av. Central, 1500 - Sala 302, Setor Central, Goiânia - GO, CEP 74000-000",
  // Número no formato internacional para links do WhatsApp (55 + DDD + número)
  whatsappNumber: "5562999999999",
  googleRating: {
    score: "4.9",
    reviews: 87,
  },
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
