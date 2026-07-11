// Edite aqui os dados reais da empresa — usados em todo o site (header, hero, contato, footer)
export const siteConfig = {
  phoneDisplay: "(62) 3000-0000",
  // Apenas números, com DDI 55 + DDD, sem espaços/símbolos (para o link do WhatsApp)
  whatsappNumber: "5562300000000",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento com a Nexxus Engenharia.",
  email: "contato@nexxusengenharia.eng.br",
  address: "Av. Central, 1500 - Centro, Goiânia - GO",
  region: "Goiânia e Região Metropolitana - GO",
  crea: "CREA-GO 000000/D",
  cnpj: "00.000.000/0001-00",
  yearsExperience: "15+",
}

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}
