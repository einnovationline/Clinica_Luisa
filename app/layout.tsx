import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Neri Odontologia | Dra. Luísa Neri",
  description:
    "Conheça a Clínica Neri Odontologia e a Dra. Luísa Neri. Informações profissionais e canais de contato serão atualizados após confirmação.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Neri Odontologia",
    title: "Clínica Neri Odontologia | Dra. Luísa Neri",
    description:
      "Uma prévia do site da Clínica Neri Odontologia. Dados profissionais e de contato aguardam confirmação.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
