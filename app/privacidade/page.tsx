import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";

export const metadata: Metadata = { title: "Política de privacidade", description: "Política de privacidade da prévia do site de Miguel Pimenta." };

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="Privacidade" title="Respeito aos seus dados." intro="Esta política descreve a versão atual da prévia privada. Ela deve ser revisada quando formulários, métricas ou integrações forem ativados." />
      <article className="legal-page shell">
        <section><span>01</span><div><h2>Dados coletados nesta prévia</h2><p>Esta versão não possui formulário ativo, não envia dados a uma equipe de campanha e não inscreve visitantes em listas de comunicação. Os botões de compartilhamento usam recursos do próprio dispositivo quando disponíveis.</p></div></section>
        <section><span>02</span><div><h2>Cookies e métricas</h2><p>Não foram adicionados cookies de publicidade, ferramentas de perfil comportamental ou métricas de terceiros. Caso a equipe ative uma ferramenta de análise, esta política deverá informar finalidade, base legal e prazo de retenção.</p></div></section>
        <section><span>03</span><div><h2>Formulário de colaboração</h2><p>O formulário permanece desativado. Antes de ativá-lo, a equipe deverá definir os dados necessários, responsável pelo tratamento, canal de contato, prazo de retenção e opção separada de consentimento para comunicações.</p></div></section>
        <section><span>04</span><div><h2>Seus direitos e contato</h2><p>O contato do responsável por privacidade ainda deve ser confirmado. Após a validação, esta seção indicará como solicitar acesso, correção e exclusão de dados.</p></div></section>
        <p className="legal-page__date">Versão desta política: 22 de setembro de 2026 · Prévia não pública.</p>
      </article>
    </main>
  );
}
