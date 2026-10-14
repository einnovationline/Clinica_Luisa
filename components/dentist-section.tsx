import Image from "next/image";
import { siteConfig } from "@/config/site";

export function DentistSection() {
  return (
    <section className="dentist section-pad" id="sobre" aria-labelledby="dentist-title">
      <div className="page-shell dentist__grid">
        <div className="dentist__portrait-wrap">
          <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Imagem ilustrativa de ambiente odontológico; fotografia da profissional pendente" width={850} height={1050} sizes="(max-width: 760px) 88vw, 40vw" className="dentist__portrait" />
          <span className="image-caption">Imagem ilustrativa · retrato profissional pendente</span>
        </div>
        <div className="dentist__copy">
          <p className="eyebrow eyebrow--light"><span /> Quem cuida de você</p>
          <h2 id="dentist-title">Uma relação de confiança, <em>desde o primeiro encontro.</em></h2>
          <p className="dentist__name">{siteConfig.dentistName}</p>
          <p className="dentist__role">{siteConfig.professionalTitle} <span>·</span> {siteConfig.cro}</p>
          <p className="dentist__body">Em Brasília, a Dra. Luísa Neri destaca a saúde como prioridade. Informações sobre formação e trajetória poderão ser acrescentadas quando confirmadas.</p>
          {siteConfig.specialties.length > 0 && (
            <ul className="dentist__specialties" aria-label="Especialidades confirmadas">
              {siteConfig.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
            </ul>
          )}
          <a className="light-link" href="#contato">Informações profissionais <span className="arrow-glyph" aria-hidden="true">↗</span></a>
          <span className="dentist__index" aria-hidden="true">01</span>
        </div>
      </div>
    </section>
  );
}