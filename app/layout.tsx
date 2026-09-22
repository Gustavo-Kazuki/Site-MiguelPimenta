import type { Metadata } from "next";
import Link from "next/link";
import { MotionOrchestrator } from "./components/motion-orchestrator";
import { SiteFooter } from "./components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://miguel-pimenta-2077.studiovexio.chatgpt.site"),
  title: {
    default: "Miguel Pimenta 2077 | Deputado Federal pela Paraíba",
    template: "%s | Miguel Pimenta 2077",
  },
  description: "Site de campanha de Miguel Pimenta, candidato a deputado federal pela Paraíba, número 2077. Dados sujeitos à validação oficial da equipe.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Miguel Pimenta 2077",
    description: "Deputado federal pela Paraíba. Conheça a trajetória, os temas prioritários e as formas de participar.",
  },
  twitter: {
    card: "summary",
    title: "Miguel Pimenta 2077",
    description: "Deputado federal pela Paraíba. Conteúdo sujeito à validação oficial da equipe.",
  },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const navigation = [
  ["Início", "/"],
  ["Conheça Miguel", "/sobre"],
  ["Propostas", "/propostas"],
  ["Notícias", "/noticias"],
  ["Participe", "/participe"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <div className="validation-bar" role="note">
          <span>Prévia privada</span>
          <p>Nome eleitoral, partido, número e situação da candidatura aguardam confirmação oficial.</p>
        </div>
        <header className="site-header">
          <div className="shell site-header__inner">
            <Link className="brand" href="/" aria-label="Miguel Pimenta 2077 — página inicial">
              <span className="brand__name">Miguel Pimenta</span>
              <span className="brand__number">2077</span>
            </Link>
            <nav className="desktop-nav" aria-label="Navegação principal">
              {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
            <Link className="header-cta desktop-cta" href="/participe">Participe <span aria-hidden="true">↗</span></Link>
            <details className="mobile-menu">
              <summary>Menu <span aria-hidden="true">＋</span></summary>
              <nav aria-label="Navegação móvel">
                {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                <Link href="/transparencia">Transparência</Link>
              </nav>
            </details>
          </div>
        </header>
        <div id="conteudo">{children}</div>
        <SiteFooter />
        <MotionOrchestrator />
      </body>
    </html>
  );
}
