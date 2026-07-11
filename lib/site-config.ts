// Dados reais da empresa — usados em todo o site (header, hero, contato, footer)
export const siteConfig = {
  phoneDisplay: "(62) 9 9643-9366",
  whatsappNumber: "5562996439366",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento com a Nexxus Engenharia.",
  email: "contato@nexxusengenharia.eng.br",
  address: "Edifício Office Flamboyant — Av. Dep. Jamel Cecílio, 3310, Sala 301, Jardim Goiás — Goiânia/GO",
  region: "Goiânia, Aparecida de Goiânia, e Região Metropolitana",
  crea: "CREA 1017786453D-GO",
  responsibleEngineer: "Eng° Civil Caio Maracaípe",
  cnpj: "36.075.475/0001-94",
  yearsExperience: "10+",
}

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}
