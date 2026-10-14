import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const address = siteConfig.contact.address;
  const mapUrl = address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : null;
  const contactItems = [
    { icon: Phone, label: "Telefone", value: siteConfig.contact.phone },
    { icon: MapPin, label: "Cidade", value: siteConfig.city },
    ...(siteConfig.contact.address
      ? [{ icon: MapPin, label: "Endereço", value: siteConfig.contact.address }]
      : []),
    { icon: Clock3, label: "Horários", value: siteConfig.contact.hours },
  ];
  return (
    <section className="contact section-pad" id="contato" aria-labelledby="contact-title">
      <div className="page-shell contact__grid">
        <div className="contact__copy">
          <p className="eyebrow eyebrow--light"><span /> Estamos por aqui</p><h2 id="contact-title">Vamos conversar<br /><em>sobre seu sorriso?</em></h2>
          <p className="contact__note">Os canais de contato e agendamento serão ativados assim que forem confirmados.</p>
          {siteConfig.contact.whatsapp ? (
            <a className="button button--light" href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Olá! Gostaria de informações sobre uma consulta odontológica.")}`} target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Falar pelo WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : <span className="contact__pending"><MessageCircle size={16} aria-hidden="true" /> WhatsApp pendente de confirmação</span>}
        </div>
        <div className="contact__details">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div className="contact-detail" key={label}>
              <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <span>{label}</span>
                <p>{value ? label === "Telefone" ? <a href={`tel:${value.replace(/[^\d+]/g, "")}`}>{value}</a> : value : "Informação pendente"}</p>
              </div>
            </div>
          ))}
          {mapUrl ? (
            <a className="contact__map-link" href={mapUrl} target="_blank" rel="noreferrer">Ver rota no Google Maps <ArrowUpRight size={14} aria-hidden="true" /></a>
          ) : (
            <p className="contact__map-note">Mapa e rota serão incluídos quando o endereço estiver disponível.</p>
          )}
        </div>
      </div>
    </section>
  );
}