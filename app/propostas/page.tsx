import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { ProposalTabs } from "../components/proposal-tabs";

export const metadata: Metadata = {
  title: "Propostas",
  description: "Conheça os temas prioritários da campanha de Miguel Pimenta. Conteúdo detalhado sujeito à aprovação da equipe.",
  openGraph: { title: "Propostas | Miguel Pimenta 2077", description: "Temas prioritários organizados por problema, ação proposta e impacto esperado." },
};

export default function ProposalsPage() {
  return (
    <main>
      <PageHero eyebrow="Propostas" title="Compromissos claros começam com escuta." intro="Os temas abaixo vieram do material de referência. Cada proposta será publicada com diagnóstico, ação e impacto somente depois da validação integral pela equipe." />
      <section className="proposals-section">
        <div className="shell">
          <ProposalTabs />
        </div>
      </section>
      <section className="proposal-method">
        <div className="shell proposal-method__grid" data-reveal>
          <p className="section-kicker">Método editorial</p>
          <h2>Do tema à proposta completa.</h2>
          <p>Cada publicação deve explicar o problema, indicar uma ação compatível com o mandato de deputado federal e apresentar o impacto esperado. Fontes, custos, competências e prazos devem ser revisados antes da publicação.</p>
        </div>
      </section>
    </main>
  );
}
