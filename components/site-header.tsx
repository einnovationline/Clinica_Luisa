import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#sobre", label: "A profissional" },
  { href: "#servicos", label: "Atuação" },
  { href: "#primeira-consulta", label: "Primeira consulta" },
  { href: "#espaco", label: "O espaço" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="site-header" id="inicio">
      <Link className="wordmark" href="#inicio" aria-label={`${siteConfig.brandName}, início`}>
        <span className="wordmark__symbol" aria-hidden="true">L</span>
        <span className="wordmark__text">
          <span>{siteConfig.brandName}</span>
          <small>ODONTOLOGIA</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="header-appointment" href="#contato">
        <span>Agendamento</span>
        <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
      </Link>
      <details className="mobile-nav">
        <summary aria-label="Abrir menu de navegação">
          <Menu size={23} strokeWidth={1.6} aria-hidden="true" />
        </summary>
        <nav aria-label="Navegação móvel">
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="#contato">Agendamento <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>
      </details>
    </header>
  );
}