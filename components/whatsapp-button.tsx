import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const phone = siteConfig.contact.whatsapp;

  if (!phone) return null;

  const message = encodeURIComponent("Olá! Gostaria de informações sobre uma consulta odontológica.");
  const phoneNumber = phone.replace(/\D/g, "");
  if (phoneNumber.length < 10) return null;

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a clínica pelo WhatsApp"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}