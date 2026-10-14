import { ArrowUpRight } from "lucide-react";

const principles = [
  { number: "01", title: "Escuta", copy: "Uma conversa aberta para compreender o que importa para você." },
  { number: "02", title: "Clareza", copy: "Informações acessíveis para que cada decisão seja bem compreendida." },
  { number: "03", title: "Cuidado", copy: "A atenção ao detalhe faz parte de cada etapa da experiência." },
];

export function ApproachSection() {
  return (
    <section className="approach section-pad" id="abordagem" aria-labelledby="approach-title">
      <div className="page-shell">
        <div className="approach__topline"><p className="eyebrow eyebrow--light"><span /> Nossa maneira de cuidar</p><span className="approach__index">02 — 04</span></div>
        <div className="approach__intro"><h2 id="approach-title">Acolher também<br />é <em>cuidar.</em></h2><p>Princípios de atendimento provisórios, sujeitos à confirmação pela profissional.</p></div>
        <div className="approach__list">{principles.map((principle) => (
          <article className="principle" key={principle.number}>
            <span className="principle__number">{principle.number}</span><h3>{principle.title}</h3><p>{principle.copy}</p><ArrowUpRight size={17} strokeWidth={1.4} aria-hidden="true" />
          </article>
        ))}</div>
      </div>
    </section>
  );
}