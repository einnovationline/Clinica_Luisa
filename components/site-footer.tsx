import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__main">
        <Link className="wordmark wordmark--footer" href="#inicio"><span className="wordmark__symbol" aria-hidden="true">L</span><span className="wordmark__text"><span>{siteConfig.brandName}</span><small>ODONTOLOGIA</small></span></Link>
        <p className="site-footer__phrase">Cuidado que começa<br /><em>na escuta.</em></p>
        <div className="site-footer__links">
          <a href="#sobre">A profissional</a><a href="#servicos">Atuação</a><a href="#primeira-consulta">Primeira consulta</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato <ArrowUpRight size={13} aria-hidden="true" /></a>
          {siteConfig.socialLinks.map((social) => <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={13} aria-hidden="true" /></a>)}
        </div>
      </div>
      <div className="page-shell site-footer__bottom"><span>{siteConfig.brandName}</span><span>{siteConfig.professionalTitle} · {siteConfig.cro}</span><span>Prévia do site · dados em atualização</span></div>
    </footer>
  );
}