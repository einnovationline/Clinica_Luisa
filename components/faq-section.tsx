import { frequentlyAskedQuestions } from "@/config/experience";

export function FaqSection() {
  return (
    <section className="faq section-pad" id="duvidas" aria-labelledby="faq-title">
      <div className="page-shell faq__grid">
        <div className="faq__heading">
          <p className="eyebrow"><span /> Antes de entrar em contato</p>
          <h2 id="faq-title">Dúvidas<br /><em>frequentes.</em></h2>
          <p>As respostas gerais não substituem uma avaliação profissional. Informações específicas serão confirmadas pela clínica.</p>
        </div>
        <div className="faq__list">
          {frequentlyAskedQuestions.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-item__toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}