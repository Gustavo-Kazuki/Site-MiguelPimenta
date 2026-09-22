import type { Metadata } from "next";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { campaign, publicationChecklist } from "@/content/campaign";

export const metadata: Metadata = { title: "Contato e transparência", description: "Dados de contato, identificação e pendências editoriais da campanha de Miguel Pimenta." };

export default function TransparencyPage() {
  return (
    <main>
      <PageHero eyebrow="Contato e transparência" title="Informação clara, antes e depois da publicação." intro="Esta página concentra os dados que precisam de validação jurídica e editorial antes de o site se tornar público." />
      <section className="transparency-section">
        <div className="shell transparency-grid">
          <article className="identity-card" data-reveal>
            <p className="section-kicker">Identificação da campanha</p><h2>{campaign.candidate.displayName} <span>{campaign.candidate.number}</span></h2>
            <dl>
              <div><dt>Cargo e estado</dt><dd>{campaign.candidate.office} · {campaign.candidate.state} <small>referência</small></dd></div>
              <div><dt>Partido</dt><dd>Pendente de confirmação</dd></div>
              <div><dt>Situação da candidatura</dt><dd>Pendente de confirmação</dd></div>
              <div><dt>Identificação legal</dt><dd>Pendente de validação jurídica</dd></div>
              <div><dt>Contato oficial</dt><dd>Pendente de confirmação</dd></div>
            </dl>
          </article>
          <div className="checklist" data-reveal>
            <p className="section-kicker">Checklist de publicação</p>
            {publicationChecklist.map((item) => <div key={item}><CircleDashed aria-hidden="true" /><span>{item}</span><strong>Pendente</strong></div>)}
            <div className="checklist__ready"><CheckCircle2 aria-hidden="true" /><span>Estrutura, acessibilidade básica e páginas editoriais</span><strong>Pronto</strong></div>
          </div>
        </div>
      </section>
    </main>
  );
}
