import Link from "next/link";
import { campaign } from "@/content/campaign";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div>
          <p className="brand brand--footer"><span className="brand__name">Miguel Pimenta</span><span className="brand__number">2077</span></p>
          <p className="footer-summary">Prévia editorial privada. Todos os dados eleitorais e materiais de imagem devem ser validados antes da publicação pública.</p>
        </div>
        <div>
          <h2>Navegação</h2>
          <Link href="/sobre">Conheça Miguel</Link>
          <Link href="/propostas">Propostas</Link>
          <Link href="/noticias">Notícias e agenda</Link>
          <Link href="/participe">Participe</Link>
        </div>
        <div>
          <h2>Transparência</h2>
          <Link href="/transparencia">Dados da campanha</Link>
          <Link href="/privacidade">Política de privacidade</Link>
          <span>{campaign.contact.email ?? "E-mail oficial — pendente"}</span>
          <span>{campaign.contact.phone ?? "Telefone oficial — pendente"}</span>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© 2026 Miguel Pimenta. Conteúdo sujeito à aprovação da equipe responsável.</p>
        <p className="legal-placeholder">Identificação legal da campanha — PENDENTE DE VALIDAÇÃO</p>
      </div>
    </footer>
  );
}
