import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { DentistSection } from "@/components/dentist-section";
import { FaqSection } from "@/components/faq-section";
import { FirstVisitSection } from "@/components/first-visit-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <div className="preview-banner" role="status">
        <span className="preview-banner__dot" aria-hidden="true" />
        Prévia visual: contatos, endereço completo e fotografias ainda estão em atualização
      </div>
      <SiteHeader />
      <main>
        <HeroSection />
        <DentistSection />
        <ServicesSection />
        <FirstVisitSection />
        <ApproachSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <a className="back-to-top" href="#inicio" aria-label="Voltar ao início">
        <span aria-hidden="true">↑</span>
      </a>
      <p className="sr-only">{siteConfig.previewNotice}</p>
    </>
  );
}
