import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";

export function ServicesSection() {
  return (
    <section className="services section-pad" id="servicos" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow"><span /> O que fazemos</p><h2 id="services-title">Cuidado pensado<br /><em>para você.</em></h2></div>
          <p className="section-intro">Serviços informados nos destaques do perfil. Indicação e planejamento dependem de avaliação profissional individual.</p>
        </div>
        {services.length > 0 ? (
          <ul className="service-list">{services.map((service, index) => (
            <li className="service-row" key={service.name}>
              <span className="service-row__number">0{index + 1}</span><h3>{service.name}</h3><p>{service.description}</p>
              <a href="#contato" aria-label={`Consultar sobre ${service.name}`}><ArrowUpRight size={20} aria-hidden="true" /></a>
            </li>
          ))}</ul>
        ) : (
          <div className="empty-note"><span className="empty-note__rule" /><p>Tratamentos confirmados serão adicionados aqui.</p><span className="empty-note__label">Lista em atualização</span></div>
        )}
      </div>
    </section>
  );
}