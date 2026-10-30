# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, in this order of importance for the site's design:

1. **Visitante final (cliente da sorveteria):** pessoa com vontade de sorvete, majoritariamente no celular, decidindo o que pedir agora. O trabalho dela: ver os sabores, se convencer da qualidade e pedir pelo iFood (ou descobrir onde fica a loja).
2. **Dono de sorveteria (prospect):** o site é um modelo demonstrativo usado para vender sites a sorveterias. O dono avalia se aquilo serviria para o negócio dele: se parece profissional, se vende, se é fácil trocar para a marca dele.

## Product Purpose

Site demonstrativo de uma página para uma sorveteria artesanal fictícia, a **Gelatto Sole**. Serve de vitrine comercial para prospectar sorveterias reais. Sucesso = o visitante final seria levado a pedir no iFood, e o prospect enxerga isso e quer o mesmo para a loja dele.

## Positioning

Uma sorveteria de bairro que se apresenta com padrão de grande marca: produção diária, ingredientes reconhecíveis, pequenos lotes, e pedido em um toque pelo iFood. Para o prospect, o diferencial é um site com acabamento e movimento (vídeo de processo com scroll, hero em vídeo) acima do que sorveterias locais costumam ter.

## Operating Context

- Conversão principal: botão "Pedir no iFood" (link externo). Conversão secundária: visita a uma das lojas físicas.
- Uso dominante em celular, muitas vezes vindo de Instagram ou busca local.
- O modelo é reaproveitado por cliente: nome, sabores, preços, lojas e links são trocados a cada venda.

## Capabilities and Constraints

- Site estático: `index.html`, `css/style.css`, `js/main.js`; sem build, sem framework.
- Os produtos em destaque são renderizados por `js/main.js` a partir de uma lista de dados (nome, descrição, preço, imagem).
- Os dois vídeos (hero e processo com scroll) estão embutidos em base64 dentro de `js/main.js` (~5 MB); isso funciona via `file://` mas pesa no carregamento.
- Idioma: português do Brasil (`pt-BR`).
- Terminologia: "sabores", "casquinha", "copo", "picolé", "gelato", "loja", "pedir no iFood".

## Brand Commitments

- Nome da marca (fictícia): **Gelatto Sole**.
- Voz: calorosa, de vizinho, direta e curta; sem exageros técnicos. Valores declarados no site: Natural, Fresco, Caloroso.

## Evidence on Hand

- **Reais:** fotos dos produtos em `img/` (Trio Colorido, Casquinha Pistache, Morango com Calda, Copo Blueberry, Manga do Sol, vitrine) e os dois vídeos de preparo embutidos em `js/main.js`.
- **Placeholders (não tratar como fato):** endereços e horários das lojas, preços, depoimentos e nomes de clientes, avaliações ★ 5,0, "mais de 40 sabores", perfil @gelattosole no Instagram, links do iFood (apontam para a home do iFood) e botões "Como chegar".
- Não existem: logotipo gráfico, prêmios, imprensa, números de vendas. Não inventar.

## Product Principles

1. **O pedido no iFood está sempre a um toque.** Toda seção conduz para lá; a loja física vem em segundo.
2. **O produto real vende.** Fotos e vídeos verdadeiros do sorvete são a prova principal; nada de prova fabricada apresentada como real.
3. **Feito para ser trocado.** Conteúdo de marca, sabores, preços e lojas devem continuar fáceis de substituir para cada novo cliente.
4. **Celular primeiro.** A experiência precisa convencer e converter numa tela pequena, com carregamento aceitável.
5. **Bairro com padrão de grande marca.** Calor humano na voz, acabamento profissional na execução.

## Accessibility & Inclusion

Nenhum requisito específico do produto foi estabelecido. O site já respeita `prefers-reduced-motion` (desliga tilt e scrub de vídeo); manter isso.

