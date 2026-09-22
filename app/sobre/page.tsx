import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { pendingBiography } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Conheça Miguel",
  description: "Trajetória de Miguel Pimenta, organizada para receber a biografia integral aprovada pela equipe de campanha.",
  openGraph: { title: "Conheça Miguel Pimenta", description: "História, motivações e vínculo com a Paraíba — conteúdo sujeito à validação da equipe." },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Conheça Miguel" title="Uma trajetória contada com verdade." intro="A narrativa desta página será preenchida com a biografia aprovada, sem antecipar cargos, realizações ou detalhes pessoais não confirmados.">
        <Link className="text-link text-link--light" href="/transparencia">Veja o que ainda precisa ser validado <ArrowUpRight aria-hidden="true" /></Link>
      </PageHero>

      <section className="story-intro">
        <div className="shell story-intro__grid">
          <p className="section-kicker">Raízes paraibanas</p>
          <blockquote data-reveal>
            <p>“Espaço reservado para uma declaração integral de Miguel sobre suas origens, sua família e o que o move a servir à Paraíba.”</p>
            <footer>— Declaração pendente de aprovação</footer>
          </blockquote>
        </div>
      </section>

      <section className="timeline-section" data-timeline aria-labelledby="timeline-title">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Trajetória</p>
            <h2 id="timeline-title">Os capítulos que formam uma história.</h2>
          </div>
          <div className="timeline">
            <span className="timeline__track" aria-hidden="true"><span data-timeline-line /></span>
            {pendingBiography.map((item, index) => (
              <article className="timeline__item" data-reveal key={item.label}>
                <span className="timeline__index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="pending-chip">Conteúdo pendente</p>
                  <h3>{item.label}</h3>
                  <p>{item.guidance}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-note">
        <div className="shell editorial-note__inner" data-reveal>
          <div><span>Nota editorial</span><h2>Biografia não é espaço para improviso.</h2></div>
          <p>A equipe deve revisar nomes, datas, vínculos familiares, cargos e atividades profissionais antes de substituir estes campos. Nenhum apoio ou realização será publicado sem comprovação e autorização.</p>
        </div>
      </section>
    </main>
  );
}
