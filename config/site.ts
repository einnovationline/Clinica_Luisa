export const siteConfig = {
  brandName: "Clínica Neri Odontologia",
  dentistName: "Dra. Luísa Neri",
  professionalTitle: "Cirurgiã-dentista",
  cro: "CRO-DF 16447",
  city: "Brasília - DF",
  specialties: [] as string[],
  previewNotice:
    "Prévia visual. Horários, avaliações, formação e fotografias ainda aguardam confirmação.",
  contact: {
    whatsapp: "+55 61 9561-7671" as string | null,
    phone: "+55 61 9561-7671" as string | null,
    address: "Águas Claras Shopping, sala 551, Águas Claras, Brasília - DF" as string | null,
    hours: null as string | null,
    googleReviewsUrl: null as string | null,
  },
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/dra.luisaneri/" },
  ],
} as const;