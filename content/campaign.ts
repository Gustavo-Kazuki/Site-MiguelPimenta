export type PendingField = {
  label: string;
  status: "pendente";
  guidance: string;
};

export const campaign = {
  candidate: {
    displayName: "Miguel Pimenta",
    office: "Deputado federal",
    state: "Paraíba",
    number: "2077",
    party: null,
    candidacyStatus: null,
    slogan: "Fé que avança",
    sloganApproved: false,
    portrait: "/assets/miguel-reference-portrait.webp",
    portraitAuthorized: false,
  },
  contact: {
    email: null,
    phone: null,
    whatsapp: null,
    address: null,
  },
  social: [
    { label: "Instagram", url: null },
    { label: "Facebook", url: null },
    { label: "YouTube", url: null },
    { label: "WhatsApp", url: null },
  ],
  legal: {
    campaignIdentification: null,
    responsibleEntity: null,
    taxId: null,
    legalText: null,
  },
} as const;

export const pendingBiography: PendingField[] = [
  { label: "Origens e família", status: "pendente", guidance: "Fornecer texto aprovado, nomes autorizados e cidades que podem ser citadas." },
  { label: "Atuação como produtor rural", status: "pendente", guidance: "Descrever período, atividades e experiências que podem ser publicadas." },
  { label: "Trajetória pública e profissional", status: "pendente", guidance: "Listar somente cargos e atuações comprovados e aprovados." },
  { label: "Motivação para a candidatura", status: "pendente", guidance: "Enviar declaração integral aprovada pelo candidato e pela coordenação." },
];

export const proposalThemes = [
  {
    id: "agro",
    index: "01",
    short: "Agro",
    title: "Agro e produção rural",
    description: "Espaço editorial para propostas voltadas à produção rural, ao trabalho no campo e às cadeias produtivas da Paraíba.",
    problem: "A equipe deve descrever o problema com base em diagnóstico e fontes validadas.",
    action: "A equipe deve inserir a ação proposta, sua competência legislativa e a forma de execução.",
    impact: "A equipe deve indicar o impacto esperado sem estatísticas ou metas não comprovadas.",
  },
  {
    id: "agua",
    index: "02",
    short: "Água",
    title: "Água e semiárido",
    description: "Espaço editorial para medidas relacionadas à segurança hídrica e à convivência com o semiárido.",
    problem: "A equipe deve apresentar o recorte territorial e o diagnóstico aprovado.",
    action: "A equipe deve detalhar a medida, os instrumentos públicos envolvidos e os limites do mandato.",
    impact: "A equipe deve indicar resultados esperados com linguagem responsável e verificável.",
  },
  {
    id: "desenvolvimento",
    index: "03",
    short: "Desenvolvimento",
    title: "Desenvolvimento regional",
    description: "Espaço editorial para propostas de geração de oportunidades, trabalho e fortalecimento dos municípios.",
    problem: "A equipe deve fornecer o contexto regional que pode ser publicado.",
    action: "A equipe deve inserir iniciativas concretas compatíveis com a atuação parlamentar.",
    impact: "A equipe deve explicar quem será beneficiado e como o resultado será acompanhado.",
  },
  {
    id: "inclusao",
    index: "04",
    short: "Inclusão",
    title: "Pessoas com deficiência e famílias atípicas",
    description: "Espaço editorial para propostas de inclusão, cuidado, acesso a direitos e apoio às famílias.",
    problem: "A equipe deve definir os desafios prioritários com escuta e terminologia revisadas.",
    action: "A equipe deve apresentar a ação proposta e os atores responsáveis por sua implementação.",
    impact: "A equipe deve descrever o efeito esperado sem prometer serviços fora das competências do mandato.",
  },
  {
    id: "liberdade",
    index: "05",
    short: "Liberdade",
    title: "Liberdade religiosa",
    description: "Espaço editorial para compromissos relacionados ao respeito à fé e à liberdade de consciência.",
    problem: "A equipe deve apresentar o tema com base constitucional e linguagem inclusiva.",
    action: "A equipe deve inserir o compromisso ou iniciativa legislativa aprovada.",
    impact: "A equipe deve explicar como a proposta protege direitos de todas as pessoas.",
  },
] as const;

export const newsItems: Array<{
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}> = [];

export const agendaItems: Array<{
  date: string;
  time: string;
  title: string;
  location: string;
  details?: string;
}> = [];

export const publicationChecklist = [
  "Nome eleitoral, partido, federação/coligação e situação atual da candidatura",
  "Biografia integral revisada e aprovada",
  "Fotografias em alta resolução com autorização de uso",
  "Texto completo de cada proposta e fontes dos diagnósticos",
  "Contatos, endereços e links oficiais das redes sociais",
  "Agenda, notícias, vídeos e entrevistas autorizados",
  "Identificação jurídica e textos exigidos pela legislação eleitoral",
  "Canal de recebimento do formulário e política de retenção dos dados",
] as const;
