import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { firstVisitSteps } from "@/config/experience";

export function FirstVisitSection() {
  return (
    <section className="first-visit section-pad" id="primeira-consulta" aria-labelledby="first-visit-title">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow"><span /> Um começo sem pressa</p>
            <h2 id="first-visit-title">O primeiro passo<br /><em>é uma conversa.</em></h2>
          </div>
          <p className="section-intro">Cada atendimento é individual. Este fluxo é uma orientação geral e será ajustado para refletir o processo confirmado pela clínica.</p>
        </div>
        <ol className="first-visit__steps">
          {firstVisitSteps.map((step) => (
            <li className="first-visit-step" key={step.number}>
              <span className="first-visit-step__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="first-visit-step__rule" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <Link className="first-visit__link" href="#contato">Ver opções de contato <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}