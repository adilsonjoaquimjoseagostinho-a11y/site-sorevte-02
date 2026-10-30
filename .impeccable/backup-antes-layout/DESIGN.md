---
name: Gelatto Sole
description: Sorveteria artesanal de bairro com acabamento de grande marca; vitrine de gelato ao sol.
colors:
  ameixa-escura: "#2A1740"
  ameixa-suave: "#5C4A74"
  rosa-leite: "#FFF7FB"
  branco-casquinha: "#FFFFFF"
  nevoa-rosa: "#F1DDEB"
  morango: "#FF4D7E"
  morango-escuro: "#E02A62"
  manga: "#FFB81F"
  manga-escura: "#C97800"
  caramelo-estrela: "#A26003"
  maracuja: "#FFC93C"
  laranja-calda: "#FF7A3D"
  baunilha: "#FFE27A"
  pistache-escuro: "#278A3E"
  blueberry: "#6B4DFF"
  ceu-de-coco: "#38C8FF"
  ifood: "#E71729"
  ifood-escuro: "#D3141F"
  framboesa-veu: "rgba(138,18,56,.48)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 7.2vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.8vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.6
  lead:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.1
rounded:
  tag: "10px"
  print: "18px"
  tile: "30px"
  photo: "36px"
  frame: "44px"
  band: "56px"
  pill: "999px"
spacing:
  gap-tight: "10px"
  gap-grid: "20px"
  gap-cta: "18px"
  gutter: "20px"
  head-gap: "40px"
  split-gap: "64px"
  section: "96px"
components:
  button-ifood:
    backgroundColor: "{colors.ifood}"
    textColor: "{colors.branco-casquinha}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "56px"
  button-ifood-hover:
    backgroundColor: "{colors.ifood-escuro}"
  button-ifood-sm:
    backgroundColor: "{colors.ifood}"
    textColor: "{colors.branco-casquinha}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-white:
    backgroundColor: "{colors.branco-casquinha}"
    textColor: "{colors.ameixa-escura}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "56px"
  product-card-link:
    backgroundColor: "rgba(255,255,255,.14)"
    textColor: "{colors.branco-casquinha}"
    rounded: "{rounded.pill}"
    padding: "0 15px"
    height: "38px"
  badge:
    backgroundColor: "{colors.branco-casquinha}"
    textColor: "{colors.ameixa-escura}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  nav-bar:
    backgroundColor: "rgba(255,255,255,.82)"
    textColor: "{colors.ameixa-escura}"
    rounded: "{rounded.pill}"
    padding: "0 12px 0 24px"
    height: "64px"
  product-tile:
    backgroundColor: "#EBDDF0"
    textColor: "{colors.branco-casquinha}"
    rounded: "{rounded.tile}"
    padding: "80px 22px 20px"
  more-flavors-card:
    backgroundColor: "{colors.maracuja}"
    textColor: "{colors.ameixa-escura}"
    rounded: "{rounded.tile}"
    padding: "36px 40px"
  photo-tag:
    backgroundColor: "{colors.manga}"
    textColor: "{colors.ameixa-escura}"
    rounded: "{rounded.tag}"
    padding: "10px 20px"
  band-dark:
    backgroundColor: "{colors.ameixa-escura}"
    textColor: "{colors.branco-casquinha}"
    rounded: "{rounded.band}"
    padding: "96px 0"
---

# Design System: Gelatto Sole

> Documento de **preservação**. Descreve o design tal como ele renderiza hoje (`index.html`, `css/style.css`, `js/main.js`). Refinamentos futuros devem manter esta identidade; não é um convite a redesenhar.

## Overview

**Creative North Star: "A Vitrine de Verão"**

O site se comporta como uma vitrine de gelato numa tarde de sol: um fundo claro, rosado e luminoso, onde a cor vem dos sabores. A interface em volta é limpa e direta; quem chama atenção é a fotografia e o vídeo do sorvete de verdade. A tipografia display é pesada, compacta e calorosa, e fala alto nos títulos; o resto da página fica quieto para deixar o produto brilhar.

A paleta é nomeada por sabores e usada em pequenas doses: morango, manga, céu de coco e blueberry aparecem juntos como uma linha-arco-íris (a onda no fim do hero e a régua de abertura de `#sabores`), e isoladamente como acentos pontuais (aspas, numerais, etiquetas). O vermelho iFood sólido é reservado aos pontos principais de conversão, enquanto os cards fotográficos de sabores usam pílulas translúcidas em vidro fosco (`Pedir no iFood →`) para não competir com as fotos. Superfícies grandes alternam entre o rosa-leite claro, faixas em ameixa escura e blocos de sabor (amarelo, gradiente morango-manga), sempre com cantos muito arredondados.

O movimento é a assinatura de acabamento: vídeo do hero em moldura inclinada que reage ao mouse sobre a fotografia da vitrine suavizada por um véu degradê, faixa de sabores rolando em diagonal, e uma seção de processo (`440vh`) em que o vídeo cresce até ocupar a tela enquanto o scroll avança, com textos que aparecem letra a letra.

**Key Characteristics:**
- Fundo claro rosa-leite com brilhos radiais suaves (rosa, céu, baunilha); nunca branco puro chapado.
- Fotografia e vídeo reais do produto como protagonistas (incluindo `img/vitrine.jpg` sob véu degradê no Hero); UI discreta em volta.
- Display Bricolage Grotesque 800, apertado (-0.025em nos H1/H2 e -0.015em nos H3), entrelinha calibrada (1.02 no H1, 1.06 nos H2, 1.12 nos H3) e quebras equilibradas (`text-wrap: balance`).
- Cantos generosos em todo lugar: pílulas (999px) para controles, 30–56px para superfícies.
- Sombras difusas, deslocadas para baixo e tingidas de ameixa (nunca preto neutro).
- Linha-arco-íris de sabores reservada à onda do hero e ao cabeçalho de `#sabores`, com divisores contextuais subtis nas demais seções.
- Vermelho iFood sólido reservado aos CTAs principais (Header, Hero e card "Mais sabores") e pílula translúcida `.pk-link` nos cards fotográficos.

## Colors

Uma paleta doce e luminosa: neutros rosados e ameixa, sabores saturados como acento, e um vermelho de ação emprestado do iFood.

### Primary
- **Ameixa Escura** (`ameixa-escura`): a cor da tinta. Todo texto principal, títulos, logotipo; fundo das faixas escuras (faixa de sabores, bloco "Como pedir", rodapé). É o "preto" do sistema; não usar #000.
- **Vermelho iFood** (`ifood`, hover `ifood-escuro`): exclusivamente botões principais de pedido no iFood (header, hero e card "Ver cardápio completo"). Nos 5 cards fotográficos de produto usa-se a pílula translúcida `.pk-link` sobre o degradê escuro para preservar o protagonismo das fotos. No CTA final o botão é branco com texto em vermelho iFood. Contraste validado: branco sobre `ifood` 4,61:1 (e o inverso, vermelho sobre branco, 4,61:1); hover `ifood-escuro` 5,40:1.

### Secondary (sabores de acento)
- **Morango** (`morango`): aspas gigantes do depoimento principal, início dos gradientes da régua de `#sabores` e do bloco CTA final, sombra colorida do CTA.
- **Manga** (`manga`): etiqueta inclinada "Nossa vitrine do dia" sobre a foto da vitrine em `#sobre`; numerais sólidos 1-2-3 em "Como pedir" (`.f3 b`); ponto final do gradiente CTA.
- **Blueberry** (`blueberry`): anel de foco do teclado, hover dos links do menu, sombra arroxeada da moldura do vídeo no hero, fim da régua-arco-íris.
- **Céu de Coco** (`ceu-de-coco`): terceira parada da régua-arco-íris e da onda do hero.
- **Baunilha** (`baunilha`): o "amarelo sobre escuro". Títulos dos passos sobre o vídeo, preços nos cards de produto, barra de progresso (baunilha → rosa #FF8FB1).
- **Maracujá** (`maracuja`): fundo sólido do card "Mais de 40 sabores no cardápio".
- **Laranja Calda** (`laranja-calda`): parada central do gradiente morango → laranja → manga do CTA final.
- **Véu Framboesa** (`framboesa-veu`): camada translúcida de framboesa escura (#8A1238 a 48%) sobreposta ao gradiente do CTA final, só na zona do texto, para o branco ser legível. Não é uma cor de superfície própria; ver o CTA final em Components.

### Tertiary (sabores escuros, legíveis sobre claro)
- **Pistache Escuro**, **Morango Escuro**, **Manga Escura** (`pistache-escuro`, `morango-escuro`, `manga-escura`): versões com contraste para texto. Usadas nos três valores da seção Sobre (Natural / Fresco / Caloroso, nessa ordem).
- **Caramelo Estrela** (`caramelo-estrela`): manga levada a caramelo, mesmo matiz da Manga Escura com menos luminosidade. Usada na avaliação em destaque "★ 5,0" do depoimento principal `.q1` (texto pequeno, 15px/800). Contraste validado sobre rosa-leite: 4,74:1.

### Neutral
- **Rosa-Leite** (`rosa-leite`): fundo base da página, sob três brilhos radiais (rosa #FFD3E4 no topo-esquerda, céu #CFF1FF no topo-direita, baunilha #FFF0B8 embaixo).
- **Branco Casquinha** (`branco-casquinha`): botões secundários, selo do hero, barra de navegação (82% opaca com desfoque), moldura do vídeo e bordas das fotos "impressas".
- **Ameixa Suave** (`ameixa-suave`): parágrafos de apoio (`lead`), legendas, descrições, nomes nos depoimentos.
- **Névoa Rosa** (`nevoa-rosa`): borda de 2px do botão branco.
- **Divisores contextuais:** ameixa a 14–16% de opacidade (`rgba(42,23,64,.14)` no cabeçalho de Depoimentos; `rgba(42,23,64,.16)` nos valores de `#sobre`, no cabeçalho e linhas de `#unidades`; `rgba(42,23,64,.15)` entre depoimentos laterais); branco a 18–20% sobre fundos escuros (`rgba(255,255,255,.18)` no cabeçalho de `.flow` e `rgba(255,255,255,.2)` entre as 3 colunas de `.f3`); marca d'água tonal no rodapé em `rgba(255,243,250,.07)`.

### Named Rules
**The iFood Only Rule.** O vermelho iFood significa "pedir". Nunca usá-lo em decoração, títulos ou estados de outros controles, e reservar o botão vermelho sólido aos pontos principais de conversão (Header, Hero e card "Mais sabores").

**The Rainbow Line Rule.** Os sabores aparecem juntos apenas como uma linha contínua morango → manga → céu → blueberry na onda do hero (`5px`) e na régua de abertura da seção `#sabores` (`4px`). As demais seções usam divisores contextuais subtis para não banalizar a assinatura cromática.

**The Plum Ink Rule.** Texto e sombras são tingidos de ameixa (#2A1740 / rgba(42,23,64,…)). Nada de preto ou cinza neutro.

## Typography

**Display Font:** Bricolage Grotesque (com `system-ui, sans-serif`), tamanhos óticos `12..96`, pesos `600` e `800` via Google Fonts.
**Body Font:** Manrope (com `system-ui, -apple-system, "Segoe UI", sans-serif`), pesos `500`, `700` e `800` carregados nativamente via Google Fonts (o peso `400` não é utilizado; o peso `800` é baixado diretamente para eliminar síntese *faux-bold* em botões, links de card, preços, etiquetas e avaliação).

**Character:** Um grotesco display encorpado e um pouco excêntrico, apertado e de entrelinha curta, que soa caloroso e confiante; uma sans geométrica e arejada para o texto, que não compete.

### Hierarchy
- **Display** (`800`, `clamp(2.7rem, 7.2vw, 5.6rem)`, `line-height: 1.02`, `letter-spacing: -0.025em`): exclusivo do `H1` do hero (`.hero h1`).
- **Headline** (`800`, `clamp(2.1rem, 4.8vw, 3.6rem)`, `line-height: 1.06`, `letter-spacing: -0.025em`, `text-wrap: balance`): `H2` padrão de seção (`.sec-h h2`). Variantes fluidas por seção:
  - **CTA final (`.cta-txt h2`):** `clamp(2.25rem, 5.8vw, 4.8rem)`, `line-height: 1.04`.
  - **Seção de processo (`.intro h2` / `#ttl`):** `clamp(2rem, 4.6vw, 3.6rem)` no desktop; `clamp(1.7rem, 4.8vw, 2.35rem)` em `≤ 860px` (preserva 1 linha em `390px` com `27,2px` e escala para `36,9px` em `768px`).
  - **Seção Sobre (`.about2 h2`):** `clamp(1.85rem, 4.1vw, 3.35rem)`, `line-height: 1.06`, `text-wrap: pretty` (quebra natural na vírgula em 2 linhas em `390px`, `1100px` e `1440px`, e 1 linha em `768px`).
- **Title** (`800`, base `1.4rem`, `line-height: 1.12`, `letter-spacing: -0.015em`, `text-wrap: balance`): `H3` base e passos de "Como pedir" (`.f3 h3`). Escalas fluidas para manter a hierarquia `H1 > H2 de seção > H3 de destaque > H3 de card > Corpo` em celular, tablet e desktop:
  - **Card "Mais de 40 sabores" (`.pk-more h3`):** `clamp(1.55rem, 3vw, 2.5rem)`, `line-height: 1.08` (`24,8px` em `390px`/`768px` → `40px` em `1440px`).
  - **Passos sobre o vídeo (`.step h3`):** `clamp(1.5rem, 2.6vw, 2.3rem)`, `line-height: 1.08` no desktop; `clamp(1.35rem, 3.2vw, 1.65rem)` em `≤ 860px`.
  - **Card de produto grande "Trio Colorido" (`.pk.big h3`):** `clamp(1.5rem, 2.5vw, 2.2rem)`, `line-height: 1.06` (`24px` em `390px`/`768px`, sempre abaixo do `H2` de seção de `33,6px`, chegando a `35,2px` em `1440px`).
  - **Lojas (`.stores h3`):** `clamp(1.5rem, 2.4vw, 2rem)`, `line-height: 1.08` (`24px` em `390px`/`768px` → `32px` em `1440px`).
  - **Pilares da seção Sobre (`.vals dt`):** `clamp(1.55rem, 2.2vw, 1.8rem)`, `line-height: 1.12`, `letter-spacing: -0.02em` (`24,8px` em `390px`/`768px` → `28,8px` em `1440px`).
  - **Cards de produto padrão (`.pk h3`):** `clamp(1.25rem, 1.8vw, 1.4rem)`, `line-height: 1.12` no grid de 12 colunas (`20px` em `1100px` para caber em 1 linha, `22,4px` em `1440px`); `1.35rem` (`21,6px`) em `≤ 980px` quando os cards empilham em largura total.
- **Quote** (`600`, `1.15rem`, `line-height: 1.45`, `letter-spacing: -0.01em`, `text-wrap: pretty`): depoimentos laterais (`.qs blockquote`). O depoimento em destaque (`.q1 blockquote`) sobe para `clamp(1.65rem, 3.4vw, 2.7rem)`, `line-height: 1.16`, `letter-spacing: -0.02em`, `text-wrap: pretty`, com aspas de `7rem/0.7` em morango.
- **Body** (`500`, `18px`, `line-height: 1.6`, `text-wrap: pretty`): texto corrido padrão (`body`, `p`, `dd`). Ajustes locais de entrelinha, largura de bloco (`max-width`) e espaçamento entre letras:
  - **Descrições dos pilares (`.vals dd`):** `18px`, `line-height: 1.55`, `max-width: 38ch`.
  - **Endereços e horários das lojas (`.stores p`):** `18px`, `line-height: 1.55`, `font-variant-numeric: tabular-nums`.
  - **Card "Mais de 40 sabores" (`.pk-more p`):** `18px`, `line-height: 1.5`, `max-width: 42ch`.
  - **Passos de "Como pedir" (`.f3 p`):** `18px`, `line-height: 1.5`, `letter-spacing: 0.005em`, `max-width: 28ch`.
  - **Descrições nos cards de produto (`.pk p`):** `1rem` (`16px`), `line-height: 1.45`, `letter-spacing: 0.005em`, `max-width: 34ch`.
  - **Texto dos passos no vídeo (`.step p`):** `1.25rem` (`20px`), `line-height: 1.45`, `letter-spacing: 0.005em`, `max-width: 34ch` no desktop; `1rem` (`16px`), `line-height: 1.45` em `≤ 860px`.
  - **Parágrafo do CTA final (`.cta-txt p`):** `clamp(1.0625rem, 1.5vw, 1.2rem)`, `line-height: 1.5`, `letter-spacing: 0.005em`, `max-width: 27ch`.
  - **Rodapé:** frase da marca (`.fcols p`) com `line-height: 1.5`, `letter-spacing: 0.005em`, `opacity: 0.82`; links (`.foot2 a`) com `letter-spacing: 0.005em`; copyright (`.foot2 .small`) em `0.9rem` (`14,4px`), `line-height: 1.5`, `font-variant-numeric: tabular-nums`.
- **Lead** (`500`, `1.15rem`, `ameixa-suave`): parágrafo de apoio sob títulos. No hero (`.hero .lead`): `line-height: 1.6`, `max-width: 52ch`. Nos cabeçalhos de seção (`.sec-h .lead`): `line-height: 1.55`, `max-width: 42ch` (em `.flow .lead` sobre fundo escuro usa `rgba(255,255,255,.78)` e `letter-spacing: 0.005em`). Na seção Sobre (`.about2 .lead`): `line-height: 1.55`, `max-width: 48ch`.
- **Label** (`Manrope 800` e `700` nativos):
  - **Botões principais (`.btn`):** `800 1rem/1.1` (`0.95rem` em `.btn-sm`).
  - **Pílula translúcida dos cards (`.pk-link`):** `800 0.9rem/1.1`.
  - **Preços nos cards (`.pk .price`):** `800 0.95rem/1.2`, `letter-spacing: -0.01em`, `font-variant-numeric: tabular-nums`.
  - **Etiqueta sobre foto (`.ph figcaption`):** `800 1rem/1.2`, `white-space: nowrap`.
  - **Trilho de passos (`.rail li`):** `700 0.85rem/1.1` (`0.78rem` em `≤ 860px`).
  - **Selo do hero (`.badge`):** `700 0.95rem`.
  - **Links do menu (`nav a`):** `700 0.97rem`.
  - **Assinatura de depoimentos (`.qs figcaption`):** `0.95rem`, `line-height: 1.4`, `letter-spacing: 0.005em`; nome (`b`) em `700` seguido de `·`; avaliação (`span`) exclusiva do destaque `.q1` em `800`, `#A26003`, `font-variant-numeric: tabular-nums`.
- **Gráficos tipográficos (`Bricolage Grotesque 800`):**
  - Logotipo do topo (`.logo`): `800 1.45rem/1`, `letter-spacing: -0.03em`.
  - Logotipo do rodapé (`.flogo`): `800 1.6rem/1.05`, `letter-spacing: -0.025em`.
  - Faixa de sabores (`.track`): `800 1.6rem`.
  - Numerais 1-2-3 sólidos em "Como pedir" (`.f3 b`): `800 clamp(3.2rem, 6vw, 4.5rem)/1`, `letter-spacing: -0.03em`, cor sólida `var(--mango)` (`#FFB81F`), `margin-bottom: 14px`.
  - Marca d'água "Gelatto Sole" no rodapé (`.mark`): `800 clamp(3.2rem, 13.5vw, 12rem)/0.85`, `letter-spacing: -0.04em`, preenchimento sólido tonal `rgba(255,243,250,.07)`.

### Quebras de Texto e Alinhamento Numérico
- **`text-wrap: balance`** em `h2, h3` para equilibrar títulos de múltiplas linhas e evitar palavras isoladas (ex.: *"Os queridinhos / da casa"*).
- **`text-wrap: pretty`** em `p, dd`, `.qs blockquote` e `.about2 h2` para eliminar palavras órfãs na última linha dos parágrafos e preservar pausas sintáticas naturais (como a quebra na vírgula em *"Sorveteria de bairro, / padrão de grande marca."*).
- **`font-variant-numeric: tabular-nums`** em `.pk .price`, `.qs figcaption span`, `.stores p` e `.foot2 .small`.

### Named Rules
**The Heavy Display Rule.** Títulos sempre em Bricolage 800 com tracking negativo (`-0.025em` em `H1`/`H2`, `-0.015em` em `H3`) e entrelinha compacta (`1.02` a `1.12`). Manrope nunca é usada para títulos.

**The Solid & Tonal Display Rule.** Numerais gigantes (`.f3 b`) usam preenchimento sólido manga (`#FFB81F`) em escala `clamp(3.2rem, 6vw, 4.5rem)` e a marca gigante do rodapé (`.mark`) usa preenchimento tonal suave (`rgba(255,243,250,.07)`). Nunca usar `-webkit-text-stroke` vazado em Bricolage Grotesque, pois expõe as costuras internas dos contornos da fonte variável.

## Layout

- **Container:** largura `min(1180px, 100% - 40px)`, centralizado. A seção de processo é a exceção: largura total da viewport.
- **Ritmo vertical:** seções com 96px em cima e embaixo. O hero tem 56px em cima e 170px embaixo (espaço para a onda). O CTA final tem 90px / 40px.
- **Cabeçalho de seção (`.sec-h`):** grade de 2 colunas (1.1fr título / 0.9fr lead, alinhados pela base), 30px de respiro, 40px até o conteúdo. O divisor inferior (`.sec-h::after`) adapta-se ao contexto:
  - Em `#sabores`: régua-arco-íris de `4px` (`linear-gradient(90deg, var(--straw), var(--mango), var(--sky), var(--blue))`).
  - Em Depoimentos (fundo claro): linha ameixa subtil de `2px` (`rgba(42,23,64,.14)`).
  - Em `.flow` ("Como pedir", fundo ameixa escura): linha branca translúcida de `1px` (`rgba(255,255,255,.18)`).
  - Em `.stores-sec` ("Venha nos visitar", faixa amarela): linha ameixa de `2px` (`rgba(42,23,64,.16)`).
- **Sequência de seções:** header flutuante → hero (texto + vídeo inclinado sobre foto `img/vitrine.jpg` e véu degradê, 1.05fr / 1fr) → faixa de sabores diagonal (-2°, escura, rolando) → processo em scroll (`440vh`, vídeo sticky que cresce) → sabores (grade bento de 12 colunas) → sobre (foto em arco + valores, 0.9fr / 1.1fr) → "Como pedir" (faixa escura arredondada, 3 colunas) → depoimentos (destaque 1.3fr + coluna 0.9fr) → lojas (faixa amarela arredondada, lista) → CTA final (bloco em gradiente com fotos "impressas" inclinadas) → rodapé escuro com marca d'água tonal.
- **Grade de sabores:** 12 colunas, linhas de 270px, gap 20px. Trio Colorido 5 col × 2 linhas; Pistache 4 × 2; Morango e Blueberry 3 × 1; Manga 4 × 1; card "Mais de 40 sabores" 8 × 1.
- **Faixas (bands):** "Como pedir" e "Lojas" ficam fora do container, com 20px de margem lateral e cantos de 56px, flutuando sobre o fundo.

### Comportamento responsivo
Dois pontos de quebra efetivos:
- **≤ 980px (metade inferior):** sabores, sobre, depoimentos, cabeçalhos de seção e CTA final viram uma coluna. Cards de produto ocupam a largura toda com linhas de 360px, títulos `.pk h3` a `1.35rem` (exceto `.pk.big h3` em `clamp(1.5rem, 2.5vw, 2.2rem)`) e todas as descrições visíveis. "Como pedir" empilha sem divisórias. Lojas empilham. Faixas e CTA: cantos de 36px, margem lateral de 12px; CTA com padding de 40px / 26px; fotos impressas reposicionadas.
- **≤ 860px (topo):** links do menu somem (fica logotipo + botão iFood; não há menu hambúrguer). Hero em uma coluna, vídeo abaixo do texto (cena com min. 420px). Seção de processo: o vídeo parte de uma caixa mais larga (inset 30% / 6% / 12%), sombra vem de baixo, título `clamp(1.7rem, 4.8vw, 2.35rem)`, passos `clamp(1.35rem, 3.2vw, 1.65rem)` / `1rem` (`line-height: 1.45`), texto colado à base.
- Safe areas do iOS respeitadas (`env(safe-area-inset-*)`) no topo, base e scroll-padding de 84px para âncoras.

## Elevation & Depth

Sistema em camadas suaves: superfícies brancas e fotos flutuam sobre o rosa-leite com sombras longas, deslocadas para baixo e com spread negativo, sempre tingidas (ameixa, blueberry, morango ou vermelho iFood), nunca cinza. Profundidade extra vem de perspectiva 3D real (moldura do hero), de vidro fosco (barra de navegação e pílulas `.pk-link` nos cards) e de sobreposição (etiqueta e fotos impressas inclinadas sobre as bordas).

### Shadow Vocabulary
- **Nav flutuante** (`box-shadow: 0 12px 30px -14px rgba(42,23,64,.35), inset 0 0 0 1px rgba(255,255,255,.9)`): barra de navegação em vidro.
- **Botão iFood** (`0 10px 20px -12px rgba(234,29,44,.7)`; hover `0 12px 22px -12px`): brilho vermelho sob o CTA.
- **Botão branco** (`0 8px 18px -12px rgba(42,23,64,.35)`).
- **Selo** (`0 8px 20px -10px rgba(42,23,64,.4)`): "Feito hoje, na loja" no hero.
- **Moldura do hero** (`-30px 40px 60px -20px rgba(107,77,255,.45)`): halo blueberry deslocado para a esquerda, reforça a inclinação.
- **Foto em arco** (`0 40px 60px -34px rgba(42,23,64,.5)`): foto da vitrine em "Sobre".
- **Vídeo do processo** (`0 30px 60px -30px rgba(42,23,64,.45)`).
- **Faixa de sabores** (`0 20px 40px -20px rgba(42,23,64,.6)`).
- **Etiqueta manga** (`0 14px 24px -12px rgba(42,23,64,.5)`).
- **CTA final** (`0 40px 70px -36px #FF4D7E`): brilho morango sob o bloco.
- **Fotos impressas** (`0 30px 40px -20px rgba(80,10,30,.6)`): sombra vinho sobre o gradiente quente.

### Named Rules
**The Tinted Shadow Rule.** Toda sombra é colorida com a cor do contexto e tem spread negativo (fica sob o objeto, não à volta). Sombras cinzentas ou em halo uniforme quebram a vitrine.

**The Light Overlays Rule.** Sobre fotografia, a legibilidade vem de um degradê ameixa-noite de baixo para cima (rgba(22,8,40,.92) → 0), não de caixas opacas.

## Shapes

Linguagem macia e generosa, como bolas de sorvete e vidro de vitrine:
- **Pílula (999px):** todos os botões, pílulas `.pk-link`, selo do hero, barra de navegação e pílulas do trilho `.rail`.
- **Tile (30px):** cards de produto e card "Mais de 40 sabores".
- **Foto (36px):** cantos inferiores da foto em arco.
- **Moldura (44px):** vídeo do hero, com borda branca de 10px.
- **Band (56px):** faixas "Como pedir" e "Lojas", bloco CTA final (36px abaixo de 980px). O vídeo do processo começa com 40px e perde o arredondamento conforme cresce.
- **Arco:** foto da vitrine com `999px 999px 36px 36px`, formato de janela/arco de 4:5.
- **Pequenos (10–18px):** etiqueta manga (10px, girada -4°), fotos impressas (18px, borda branca 8px, giradas ±5°).
- **Onda:** a base do hero é uma curva SVG suave em camadas (rosa a 45%, rosa-leite sólido, traço arco-íris de 5px).
- **Inclinações:** elementos "colados" são levemente girados (faixa -2°, etiqueta -4°, fotos ±5°, moldura do hero em 3D -12°/5°/1°). Nunca mais do que isso.

## Components

### Buttons
Limpos e diretos: pílulas planas, sem relevo, com uma leve elevação ao passar o mouse.
- **Shape:** pílula (999px), altura 56px (46px na versão pequena `.btn-sm`), borda de 2px.
- **Primário iFood (`.btn-ifood`):** fundo vermelho iFood sólido (`#E71729`), texto branco Manrope 800, padding horizontal de 30px (22px em `.btn-sm`). Sombra vermelha difusa. Usado no Header, Hero e card "Mais de 40 sabores".
- **Hover / Active:** fundo escurece para iFood escuro (`#D3141F`) e sobe 1px (transição de 0.12s); ao pressionar volta à posição.
- **Secundário branco (`.btn-white`):** fundo branco, texto ameixa escura, borda névoa rosa, sombra ameixa leve; hover sobe 1px. Usado em "Ver sabores" e "Como chegar". No CTA final, é o branco com texto vermelho iFood.
- **Ação translúcida de card (`.pk-link`):** pílula compacta (`min-height: 38px`, `padding: 0 15px`, `gap: 6px`, `border-radius: 999px`) em vidro fosco (`background: rgba(255,255,255,.14)`, `border: 1px solid rgba(255,255,255,.32)`, `backdrop-filter: blur(8px)`), texto branco Manrope `800 0.9rem/1.1` com seta (`Pedir no iFood →`). No hover, sobe `1px` e ilumina o fundo (`rgba(255,255,255,.24)`) e a borda (`rgba(255,255,255,.55)`).
- **Foco:** anel blueberry de 3px com 3px de afastamento, cantos de 10px (global).

### Chips / Pílulas
- **Selo do hero (`.badge`):** pílula branca (`"Feito hoje, na loja"`), Manrope 700, 0.95rem, padding 8px 18px, sombra ameixa.
- **Etiqueta sobre foto (`.ph figcaption`):** etiqueta manga (`"Nossa vitrine do dia"`), Manrope 800, 1rem/1.2, cantos de 10px, girada `-4°`, posicionada na base esquerda da foto em arco em `#sobre`.
- **Trilho de passos (`.rail li`):** 4 pílulas (`Fruta · Preparo · Montagem · Entrega`) com contorno branco a 45%; concluído (`.done`) = fundo branco a 22%; atual (`.on`) = branco sólido com texto roxo `#4B2FD6`.

### Cards / Containers
- **Card de produto (`.pk`):** foto em tela cheia (cover, com ponto focal por produto), cantos de 30px, fundo lilás #EBDDF0 enquanto carrega. Legenda sobreposta embaixo sobre degradê ameixa-noite: título branco, descrição branca a 88% (só nos cards grandes `.big` e `.tall` no desktop; em todos em `≤ 980px`), preço em baunilha 800 e pílula translúcida `.pk-link` (`Pedir no iFood →`). Hover: foto amplia 5% em 0.7s. Sem sombra, sem borda.
- **Card "Mais de 40 sabores" (`.pk-more`):** bloco maracujá sólido, texto ameixa, título `clamp(1.55rem, 3vw, 2.5rem)` (`line-height: 1.08`), descrição `max-width: 42ch` (`line-height: 1.5`), botão `.btn-ifood` sólido; padding 36px 40px.
- **Valores (Sobre):** lista sem caixa, linhas separadas por divisor ameixa 16%; termo em display `clamp(1.55rem, 2.2vw, 1.8rem)/1.12` (`letter-spacing: -0.02em`) colorido por sabor escuro, descrição em ameixa suave (`line-height: 1.55`, `max-width: 38ch`, coluna de 150px + texto).
- **Depoimentos (`.qs`):** sem cartões; tipografia display com divisórias de 2px (`rgba(42,23,64,.15)`). Subtítulo `.lead` explicita o caráter demonstrativo (*"Relatos ilustrativos da experiência na loja e nos pedidos pelo iFood."*). Destaque grande à esquerda (`clamp(1.65rem, 3.4vw, 2.7rem)/1.16`) com aspas morango e avaliação `★ 5,0` em caramelo-estrela (`#A26003`); os dois relatos laterais (`.qside`) trazem apenas `Nome · contexto` sem repetir estrelas.
- **Lojas (`.stores`):** linhas de lista (nome `clamp(1.5rem, 2.4vw, 2rem)/1.08` / endereço e horário `line-height: 1.55` com `tabular-nums` / botão branco) sobre faixa amarela em gradiente #FFF1B8 → #FFE08A.

### Navigation
- **Barra:** flutuante e sticky, 12px do topo, 64px de altura, pílula branca a 82% com desfoque de 14px e sombra ameixa.
- **Conteúdo:** logotipo em texto (Bricolage 800, `1.45rem/1`, `-0.03em`), quatro links Manrope 700 (Processo, Sabores, Sobre, Lojas), botão iFood pequeno à direita.
- **Estados:** hover nos links muda a cor para blueberry.
- **Celular (≤ 860px):** só logotipo e botão iFood; sem menu.

### Hero (assinatura)
Texto à esquerda (selo `"Feito hoje, na loja"`, H1 display, lead, dois botões com 18px de espaço) e vídeo do preparo (`videos/hero.mp4`) à direita numa moldura branca de 10px, 44px de canto, proporção 1:1.12, inclinada em 3D (rotateY -12°, rotateX 5°, rotateZ 1°) com perspectiva de 1100px. A moldura segue o mouse (até ±7° extra) em 0.15s ease-out.
- **Fundo fotográfico + véu degradê:** `.hero::before` (`z-index: -2`) exibe a fotografia `url(../img/vitrine.jpg) center/cover no-repeat` com `filter: saturate(1.15)`; `.hero::after` (`z-index: -1`) sobrepõe o véu degradê diagonal (`97% → 90%` rosa-leite à esquerda, protegendo o contraste do título e dos botões, abrindo para `62%` rosa e `50%` azul-céu à direita, deixando a vitrine translúcida atrás da moldura 3D). A base termina numa onda SVG (`.edge`) com traço arco-íris de 5px.

### Faixa de sabores (assinatura)
Faixa ameixa escura girada -2°, texto branco display 800 1.6rem, nomes de sabores separados por traços verticais brancos a 35% (2 × 24px), rolando em loop contínuo de 32s.

### Processo em scroll (assinatura)
Seção de `440vh` (`.scrolly`) com palco sticky de `100svh`. O título `"Do ingrediente à casquinha."` aparece letra a letra (desfoque 8px + giro 4° → nítido, 18ms entre letras) e some ao avançar. O vídeo (`videos/processo.mp4`) começa numa caixa central arredondada e cresce até ocupar a tela toda; ao mesmo tempo um degradê escuro (`.shade`) aparece pela esquerda (por baixo no celular). Os passos aparecem sobre o vídeo, sem caixa, em texto branco com sombra: trilho de 4 pílulas (`.rail`: `Fruta · Preparo · Montagem · Entrega`), título baunilha e texto que entram letra a letra e palavra a palavra, e uma barra de progresso (`.bar`: baunilha → rosa). O vídeo é controlado pelo scroll com interpolação suave (`0.12`).

### CTA final (assinatura)
Bloco com cantos de 56px em gradiente 120° morango → laranja calda → manga, texto branco, título grande, botão branco com texto iFood. À direita, duas fotos de produto "impressas" (borda branca 8px, 18px de canto, giradas +5° / -5°) que saem pela borda superior do bloco.

**Véu Framboesa (legibilidade).** Por cima do gradiente há uma segunda camada, também a 120°, em framboesa escura translúcida (`framboesa-veu`). Ela escurece a zona do texto e desaparece em direção às fotos, deixando o laranja e a manga intactos no lado direito:
- **Desktop (> 980px):** véu pleno de 0% a 50% do gradiente, desvanecendo até 0 em 88%.
- **Celular e tablet (≤ 980px):** o texto ocupa quase toda a largura, por isso o véu é pleno de 0% a 70% e desvanece até 0 em 92%; a manga continua visível no canto inferior direito.

Contraste validado pixel a pixel (pior pixel atrás de cada linha) a 390, 768, 1100 e 1440px: título 4,63–4,87:1 (mínimo 3:1 para texto grande) e parágrafo 4,70–4,94:1 (mínimo 4,5:1). Sem o véu, o mesmo texto ficava entre 2,59:1 e 2,93:1. Qualquer alteração ao gradiente ou ao véu exige medir de novo.

### Rodapé
Fundo ameixa escura, texto rosa muito claro (#FFF3FA), três colunas (marca + frase, links internos, links externos), marca d'água `"Gelatto Sole"` gigante em preenchimento sólido tonal a 7% (`rgba(255,243,250,.07)`), copyright a 65%.

### Motion e acessibilidade
- Durações: botões 0.12s; pílula `.pk-link` 0.15s; moldura 3D 0.15s ease-out; trilho 0.3s; passos 0.4s; letras 0.5s com escalonamento de 26ms (títulos) e 45ms (textos); zoom de foto 0.7s; faixa 32s linear.
- `prefers-reduced-motion`: todas as transições e animações desligadas, sem inclinação no hero, vídeo do hero pausado e processo mostrado em modo estático (`.static`: vídeo 16:9 com cantos de 28px e todos os passos visíveis, títulos dos passos em blueberry, trilho `.rail` e barra `.bar` ocultos).
- Modo estático também é o fallback quando o vídeo falha.

## Do's and Don'ts

### Do:
- **Do** manter o fundo rosa-leite (#FFF7FB) com os três brilhos radiais; a página nunca é branca chapada.
- **Do** preservar a fotografia `../img/vitrine.jpg` em `.hero::before` sob o véu degradê `.hero::after` no Hero.
- **Do** deixar a fotografia e o vídeo reais do sorvete liderarem cada seção de produto; usar `.pk-link` translúcido nos cards fotográficos e reservar `.btn-ifood` sólido para Header, Hero e card "Mais sabores".
- **Do** usar Bricolage Grotesque 800 com tracking -0.025em (H1/H2) e -0.015em (H3) e entrelinha compacta em todos os títulos.
- **Do** usar pílulas (999px) para todo controle e 30–56px para superfícies.
- **Do** tingir sombras com ameixa ou com a cor do elemento, sempre com spread negativo.
- **Do** reservar a régua-arco-íris (morango → manga → céu → blueberry) para a onda do hero e o cabeçalho de `#sabores`, usando divisores contextuais subtis nas demais seções.
- **Do** manter o fallback estático e o respeito a `prefers-reduced-motion` em qualquer novo movimento.

### Don't:
- **Don't** reintroduzir código legado removido na etapa Distill (botões 3D com sombra sólida, esferas `.orb`/`.scoop`, casquinhas CSS, contador redundante `.count` sobre o vídeo ou `-webkit-text-stroke` vazado em `.f3 b` e `.mark`).
- **Don't** usar preto (#000) ou cinza neutro em texto ou sombras.
- **Don't** usar o vermelho iFood em decoração ou repetir botões vermelhos sólidos dentro dos 5 cards fotográficos.
- **Don't** espalhar os sabores como blocos de cor lado a lado ou repetir a régua-arco-íris em todos os cabeçalhos de seção.
- **Don't** colocar caixas opacas sobre fotos e vídeos; legibilidade vem do degradê ameixa-noite.
- **Don't** girar elementos além de ±5° (exceto a moldura 3D do hero).
- **Don't** usar Manrope em títulos ou Bricolage em parágrafos corridos.

> [!NOTE]
> **Estado sincronizado (pós-Impeccable Distill):**
> - O caminho da foto de fundo do Hero em `css/style.css` está corrigido para `url(../img/vitrine.jpg)` e carrega normalmente sob o véu degradê `.hero::after`.
> - O código CSS e JS foi consolidado numa única camada limpa (`198` linhas em `css/style.css` e `69` linhas em `js/main.js`), sem seletores mortos ou regras duplicadas.
