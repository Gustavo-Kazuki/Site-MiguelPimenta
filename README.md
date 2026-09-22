# Site de campanha — Miguel Pimenta

Prévia privada do site de campanha. Os dados eleitorais, textos, contatos e direitos de imagem ainda precisam de validação antes da publicação pública.

## Atualização de conteúdo

O arquivo `content/campaign.ts` concentra:

- dados do candidato e da campanha;
- contatos e links oficiais;
- temas e textos integrais das propostas;
- notícias e agenda;
- checklist editorial para publicação.

Atualizações nesses dados não exigem alterações no layout. As páginas ficam em `app/` e os componentes compartilhados em `app/components/`.

## Campos que não devem ser publicados sem validação

- partido, federação/coligação e situação da candidatura;
- biografia, cargos, realizações e apoios;
- propostas completas, estatísticas, fontes, custos e prazos;
- fotos, vídeos e depoimentos sem autorização de uso;
- contatos, identificação jurídica e texto legal da campanha;
- formulários ou ferramentas de métricas sem política de privacidade revisada.

## Desenvolvimento local

```sh
npm install
npm run dev
```

O site usa Vinext/Next.js e GSAP. A versão final deve continuar respeitando `prefers-reduced-motion`, navegação por teclado, textos alternativos e contraste.
