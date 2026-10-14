import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span /> {siteConfig.brandName}</p>
        <h1 id="hero-title">Seu sorriso,<br /><em>no seu tempo.</em></h1>
        <p className="hero__lead">O sorriso que você deseja começa com cuidado. Aqui, a saúde vem em primeiro lugar.</p>
        <div className="hero__actions">
          <Link className="button button--dark" href="#contato">Como agendar <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link className="text-link" href="#sobre">Conheça a profissional</Link>
        </div>
        <div className="hero__signature">
          <span className="signature-line" />
          <span>{siteConfig.professionalTitle}</span>
          <span className="signature-separator">·</span>
          <span>{siteConfig.cro}</span>
        </div>
      </div>
      <figure className="hero__visual">
        <div className="hero__image-wrap">
          <Image src="/images/capa.png" alt="Dra. Luísa Neri em seu consultório odontológico" fill priority sizes="(max-width: 760px) 100vw, 52vw" className="hero__image" />
        </div>
        <figcaption className="hero__caption"><span>01 / 04</span><span className="hero__caption-line" /><span>Cuidado em cada detalhe</span></figcaption>
        <div className="hero__seal" aria-hidden="true"><span>ODONTOLOGIA</span><span className="hero__seal-mark">L</span><span>COM PRESENÇA</span></div>
      </figure>
      <a className="hero__scroll" href="#sobre"><ArrowDown size={15} aria-hidden="true" /><span>Role para conhecer</span></a>
    </section>
  );
}