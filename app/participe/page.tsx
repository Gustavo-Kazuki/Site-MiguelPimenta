import type { Metadata } from "next";
import { AtSign, Mail, MessageCircle, Users } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { ShareActions } from "../components/share-actions";
import { campaign } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Participe",
  description: "Acompanhe, compartilhe e manifeste interesse em colaborar com a campanha de Miguel Pimenta.",
  openGraph: { title: "Participe | Miguel Pimenta 2077", description: "Caminhos para acompanhar, compartilhar e colaborar com a campanha." },
};

export default function ParticipatePage() {
  return (
    <main>
      <PageHero eyebrow="Participe" title="Campanha se faz com gente." intro="Acompanhe os canais oficiais, compartilhe o site e encontre a forma de colaboração que combina com você. Links e contatos serão ativados após validação." />
      <section className="participate-section">
        <div className="shell participate-grid">
          <article className="participate-card participate-card--yellow" data-reveal>
            <span>01</span><AtSign aria-hidden="true" /><h2>Acompanhe</h2><p>Os links das redes oficiais serão disponibilizados assim que a equipe confirmar os perfis.</p>
            <div className="pending-links">{campaign.social.map((item) => <span key={item.label}>{item.label} · pendente</span>)}</div>
          </article>
          <article className="participate-card" data-reveal>
            <span>02</span><MessageCircle aria-hidden="true" /><h2>Compartilhe</h2><p>Envie este site a pessoas que queiram conhecer a campanha e seus temas prioritários.</p><ShareActions />
          </article>
          <article className="participate-card" data-reveal>
            <span>03</span><Users aria-hidden="true" /><h2>Colabore</h2><p>O canal de colaboração será aberto quando a equipe definir responsável, finalidade e rotina de atendimento.</p>
            <button className="disabled-action" type="button" disabled>Formulário em validação</button>
          </article>
          <article className="participate-card participate-card--blue" data-reveal>
            <span>04</span><Mail aria-hidden="true" /><h2>Fale com a equipe</h2><p>{campaign.contact.email ?? "E-mail e WhatsApp oficiais aguardam confirmação."}</p><p className="privacy-inline">Nenhum visitante é inscrito automaticamente para receber comunicações.</p>
          </article>
        </div>
      </section>
      <section className="form-blueprint">
        <div className="shell form-blueprint__grid" data-reveal>
          <div><p className="section-kicker">Formulário futuro</p><h2>Coletar apenas o necessário.</h2></div>
          <div><p>Quando ativado, o formulário pedirá somente nome, cidade, meio de contato e área de interesse. O consentimento para comunicações será opcional, destacado e não pré-marcado.</p><p>Antes disso, a equipe deverá definir canal de recebimento, prazo de retenção, responsáveis e procedimento para exclusão dos dados.</p></div>
        </div>
      </section>
    </main>
  );
}
