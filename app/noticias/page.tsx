import type { Metadata } from "next";
import { CalendarDays, Newspaper, PlayCircle } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { agendaItems, newsItems } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Notícias e agenda",
  description: "Comunicados, vídeos, entrevistas e eventos confirmados da campanha de Miguel Pimenta.",
  openGraph: { title: "Notícias e agenda | Miguel Pimenta 2077", description: "Acompanhe comunicados e eventos confirmados da campanha." },
};

export default function NewsPage() {
  return (
    <main>
      <PageHero eyebrow="Notícias e agenda" title="A campanha, dia após dia." intro="Apenas conteúdos, entrevistas e eventos confirmados serão publicados aqui. A equipe atualiza esta página pelo arquivo central de conteúdo." />
      <section className="news-section">
        <div className="shell">
          <div className="content-toolbar">
            <div><Newspaper aria-hidden="true" /><span>{newsItems.length} notícias aprovadas</span></div>
            <div><CalendarDays aria-hidden="true" /><span>{agendaItems.length} eventos confirmados</span></div>
          </div>
          <div className="news-layout">
            <div>
              <div className="section-heading"><p className="section-kicker">Comunicados</p><h2>Últimas notícias</h2></div>
              {newsItems.length === 0 && (
                <div className="empty-state" data-reveal>
                  <span>00</span><Newspaper aria-hidden="true" /><h3>Aguardando conteúdo aprovado</h3>
                  <p>Inclua título, resumo, data, categoria, mídia autorizada e texto integral no arquivo de conteúdo.</p>
                </div>
              )}
            </div>
            <aside className="agenda-panel" aria-labelledby="agenda-title" data-reveal>
              <div className="agenda-panel__heading"><CalendarDays aria-hidden="true" /><div><p className="section-kicker">Próximos encontros</p><h2 id="agenda-title">Agenda</h2></div></div>
              {agendaItems.length === 0 && <div className="agenda-empty"><strong>Nenhum evento confirmado</strong><p>Data, horário, local e orientações de participação serão exibidos após validação.</p></div>}
              <div className="media-placeholder"><PlayCircle aria-hidden="true" /><p>Vídeos e entrevistas aprovados também aparecerão nesta página.</p></div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
