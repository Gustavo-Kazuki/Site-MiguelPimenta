import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { proposalThemes } from "@/content/campaign";

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__texture" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Paraíba · Eleições 2026</p>
            <h1 id="hero-title">
              <span>Miguel</span>
              <span>Pimenta</span>
            </h1>
            <p className="hero__office">Deputado federal pela Paraíba</p>
            <div className="hero__actions" aria-label="Acessos principais">
              <Link className="button button--yellow" href="/sobre">
                Conheça Miguel <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button--outline" href="/propostas">
                Veja as propostas
              </Link>
            </div>
            <p className="source-note">
              Dados exibidos conforme o material de referência. Publicação sujeita à validação da equipe responsável.
            </p>
          </div>

          <div className="hero__visual" aria-label="Retrato de Miguel Pimenta e número eleitoral de referência">
            <div className="state-mark" aria-hidden="true">
              <span className="state-mark__one" />
              <span className="state-mark__two" />
            </div>
            <div className="portrait-frame">
              <Image
                src="/assets/miguel-reference-portrait.webp"
                alt="Retrato de Miguel Pimenta extraído do material de referência; autorização de uso deve ser confirmada antes da publicação"
                fill
                priority
                sizes="(max-width: 760px) 88vw, 42vw"
              />
              <span className="portrait-frame__flag">Imagem de referência</span>
            </div>
            <div className="hero-number" aria-label="Número eleitoral 2077">
              <span>20</span><span>77</span>
            </div>
            <p className="hero-slogan">Fé que avança<span aria-hidden="true">!</span></p>
          </div>
        </div>

        <a className="hero__scroll" href="#prioridades">
          <span>Role para conhecer</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro" id="prioridades" aria-labelledby="intro-title">
        <div className="shell intro__grid">
          <p className="section-kicker">Uma campanha em construção coletiva</p>
          <div>
            <h2 id="intro-title">Ideias para quem vive a Paraíba todos os dias.</h2>
            <p>
              A equipe ainda vai validar a biografia e o conteúdo integral das propostas. Enquanto isso, o site organiza os temas apresentados no material de referência sem criar promessas ou realizações não confirmadas.
            </p>
          </div>
        </div>
      </section>

      <section className="home-themes" aria-labelledby="themes-title">
        <div className="shell">
          <div className="section-heading section-heading--light" data-reveal>
            <p className="section-kicker">Temas em construção</p>
            <h2 id="themes-title">Cinco frentes para organizar a conversa.</h2>
            <p>As áreas foram extraídas do material de referência. O conteúdo específico será publicado somente após aprovação.</p>
          </div>
          <div className="theme-grid">
            {proposalThemes.map((theme) => (
              <Link className="theme-card" data-reveal key={theme.id} href={`/propostas#${theme.id}`}>
                <span>{theme.index}</span>
                <h3>{theme.title}</h3>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link className="text-link text-link--light" href="/propostas">Ver a estrutura completa das propostas <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-story">
        <div className="shell story-grid">
          <div className="story-number" aria-hidden="true">PB</div>
          <div data-reveal>
            <p className="section-kicker">Conheça Miguel</p>
            <h2>Uma história que precisa ser contada com precisão.</h2>
          </div>
          <div className="story-copy" data-reveal>
            <p>O material de referência sugere vínculos com o campo, a família, a fé e a vida paraibana. A biografia publicada aqui será construída apenas com informações aprovadas pela equipe.</p>
            <Link className="button button--blue" href="/sobre">Abrir trajetória <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="updates-preview" aria-labelledby="updates-title">
        <div className="shell updates-preview__grid">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Notícias e agenda</p>
            <h2 id="updates-title">Acompanhe a campanha.</h2>
            <p>Este espaço está pronto para receber comunicados, vídeos, entrevistas e eventos confirmados.</p>
          </div>
          <div className="empty-editorial" data-reveal>
            <span className="empty-editorial__index">00</span>
            <div><strong>Nenhuma publicação aprovada ainda</strong><p>A equipe poderá atualizar a agenda e as notícias no arquivo central de conteúdo, sem alterar o layout.</p></div>
            <Link href="/noticias">Ver área de notícias <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="shell home-cta__inner" data-reveal>
          <p>Uma Paraíba que avança com diálogo, presença e responsabilidade.</p>
          <Link className="button button--yellow" href="/participe">Quero participar <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
