import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { patientComments } from "@/config/reviews";

export function ReviewsSection() {
  return (
    <section className="reviews section-pad" aria-labelledby="reviews-title">
      <div className="page-shell reviews__inner">
        <div className="reviews__heading">
          <p className="eyebrow"><span /> A experiência de quem passou por aqui</p>
          <h2 id="reviews-title">Palavras que<br /><em>fazem sorrir.</em></h2>
          <p className="reviews__intro">Comentários sobre o atendimento, conforme as imagens compartilhadas pela clínica.</p>
          {siteConfig.contact.googleReviewsUrl ? (
            <a className="text-link" href={siteConfig.contact.googleReviewsUrl} target="_blank" rel="noreferrer">
              Ver avaliações no Google <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="reviews__pending">Link do perfil do Google pendente</span>
          )}
        </div>
        <div className="reviews__gallery">
          {patientComments.map((comment) => (
            <figure className="review-photo" key={comment.src}>
              <Image
                src={comment.src}
                alt={comment.alt}
                width={comment.width}
                height={comment.height}
                sizes="(max-width: 700px) 44vw, 22vw"
                loading="eager"
              />
              <figcaption>{comment.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}