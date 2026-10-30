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
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.02
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
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1
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
  step-count:
    backgroundColor: "{colors.baunilha}"
    textColor: "{colors.ameixa-escura}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
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

A paleta é nomeada por sabores e usada em pequenas doses: morango, manga, céu de coco e blueberry aparecem juntos como uma linha-arco-íris (a régua sob os títulos, a onda no fim do hero), e isoladamente como acentos pontuais (aspas, numerais, selos). O vermelho iFood é exclusivo da ação de pedir. Superfícies grandes alternam entre o rosa-leite claro, faixas em ameixa escura e blocos de sabor (amarelo, gradiente morango-manga), sempre com cantos muito arredondados.

O movimento é a assinatura de acabamento: vídeo do hero em moldura inclinada que reage ao mouse, faixa de sabores rolando em diagonal, e uma seção de processo em que o vídeo cresce até ocupar a tela enquanto o scroll avança, com textos que aparecem letra a letra.

**Key Characteristics:**
- Fundo claro rosa-leite com brilhos radiais suaves (rosa, céu, baunilha); nunca branco puro chapado.
- Fotografia e vídeo reais do produto como protagonistas; UI discreta em volta.
- Display Bricolage Grotesque 800, apertado (-0.025em), entrelinha 1.02.
- Cantos generosos em todo lugar: pílulas (999px) para controles, 30–56px para superfícies.
- Sombras difusas, deslocadas para baixo e tingidas de ameixa (nunca preto neutro).
- Linha-arco-íris de sabores como único ornamento recorrente.
- Vermelho iFood reservado para "Pedir no iFood".

## Colors

Uma paleta doce e luminosa: neutros rosados e ameixa, sabores saturados como acento, e um vermelho de ação emprestado do iFood.

### Primary
- **Ameixa Escura** (`ameixa-escura`): a cor da tinta. Todo texto principal, títulos, logotipo; fundo das faixas escuras (faixa de sabores, bloco "Como pedir", rodapé). É o "preto" do sistema; não usar #000.
- **Vermelho iFood** (`ifood`, hover `ifood-escuro`): exclusivamente botões de pedido no iFood (header, hero, cards de produto, "Ver cardápio completo"). No CTA final o botão é branco com texto em vermelho iFood. Contraste validado: branco sobre `ifood` 4,61:1 (e o inverso, vermelho sobre branco, 4,61:1); hover `ifood-escuro` 5,40:1.

### Secondary (sabores de acento)
- **Morango** (`morango`): aspas gigantes do depoimento principal, início dos gradientes da régua de seção e do bloco CTA final, sombra colorida do CTA.
- **Manga** (`manga`): etiqueta inclinada "Feito hoje, na loja" sobre a foto da vitrine; contorno dos numerais 1-2-3 em "Como pedir"; ponto final do gradiente CTA.
- **Blueberry** (`blueberry`): anel de foco do teclado, hover dos links do menu, sombra arroxeada da moldura do vídeo no hero, fim da régua-arco-íris.
- **Céu de Coco** (`ceu-de-coco`): terceira parada da régua-arco-íris e da onda do hero.
- **Baunilha** (`baunilha`): o "amarelo sobre escuro". Títulos dos passos sobre o vídeo, preços nos cards de produto, pílula "Passo X de 4", barra de progresso (baunilha → rosa #FF8FB1).
- **Maracujá** (`maracuja`): fundo sólido do card "Mais de 40 sabores no cardápio".
- **Laranja Calda** (`laranja-calda`): parada central do gradiente morango → laranja → manga do CTA final.
- **Véu Framboesa** (`framboesa-veu`): camada translúcida de framboesa escura (#8A1238 a 48%) sobreposta ao gradiente do CTA final, só na zona do texto, para o branco ser legível. Não é uma cor de superfície própria; ver o CTA final em Components.

### Tertiary (sabores escuros, legíveis sobre claro)
- **Pistache Escuro**, **Morango Escuro**, **Manga Escura** (`pistache-escuro`, `morango-escuro`, `manga-escura`): versões com contraste para texto. Usadas nos três valores da seção Sobre (Natural / Fresco / Caloroso, nessa ordem).
- **Caramelo Estrela** (`caramelo-estrela`): manga levada a caramelo, mesmo matiz da Manga Escura com menos luminosidade. Usada nas estrelas "★ 5,0" dos depoimentos (texto pequeno, 15px/800). Contraste validado sobre rosa-leite: 4,74:1.

### Neutral
- **Rosa-Leite** (`rosa-leite`): fundo base da página, sob três brilhos radiais (rosa #FFD3E4 no topo-esquerda, céu #CFF1FF no topo-direita, baunilha #FFF0B8 embaixo).
- **Branco Casquinha** (`branco-casquinha`): botões secundários, selo do hero, barra de navegação (82% opaca com desfoque), moldura do vídeo e bordas das fotos "impressas".
- **Ameixa Suave** (`ameixa-suave`): parágrafos de apoio (`lead`), legendas, descrições, nomes nos depoimentos.
- **Névoa Rosa** (`nevoa-rosa`): borda de 2px do botão branco.
- Divisores: ameixa a 15–16% de opacidade (linhas entre valores, depoimentos, lojas); branco a 20% sobre fundos escuros.

### Named Rules
**The iFood Only Rule.** O vermelho iFood significa "pedir". Nunca usá-lo em decoração, títulos ou estados de outros controles.

**The Rainbow Line Rule.** Os sabores aparecem juntos apenas como uma linha contínua morango → manga → céu → blueberry (régua de 4px sob cabeçalhos de seção, traço de 5px na onda do hero). Não espalhar os quatro como blocos de cor lado a lado.

**The Plum Ink Rule.** Texto e sombras são tingidos de ameixa (#2A1740 / rgba(42,23,64,…)). Nada de preto ou cinza neutro.

## Typography

**Display Font:** Bricolage Grotesque (com system-ui, sans-serif), pesos 600 e 800 via Google Fonts.
**Body Font:** Manrope (com system-ui, -apple-system, Segoe UI, sans-serif), pesos 400, 500 e 700 carregados; 800 usado em botões e preços (sintetizado a partir do 700).

**Character:** Um grotesco display encorpado e um pouco excêntrico, apertado e de entrelinha curta, que soa caloroso e confiante; uma sans geométrica e arejada para o texto, que não compete.

### Hierarchy
- **Display** (800, clamp(2.7rem → 5.6rem), 1.02, -0.025em): só o H1 do hero.
- **Headline** (800, clamp(2.1rem → 3.6rem), 1.02): H2 de seção. Variantes: CTA final maior (clamp(2.4rem → 4.8rem)); título da seção de processo clamp(2rem → 3.6rem), 1.7rem no celular.
- **Title** (800, 1.4rem, -0.015em): H3 de cards e passos. Escala para 2rem nas lojas, 2.2rem no card de produto grande, 2.3rem nos passos sobre vídeo.
- **Quote** (600, 1.15rem/1.45): depoimentos laterais. O depoimento principal sobe para clamp(1.7rem → 2.7rem)/1.15, com aspas de 7rem em morango.
- **Body** (500, 18px/1.6): texto corrido.
- **Lead** (500, 1.15rem, ameixa suave, máx. 52ch): parágrafo de apoio sob títulos.
- **Label** (800, 1rem; 0.95rem no tamanho pequeno): botões, preços, etiquetas. Links do menu em 700, 0.97rem. Pílulas de passo em 700–800, 0.85–0.9rem.
- **Gráficos tipográficos:** numerais 1-2-3 vazados (contorno 2px manga, clamp(4.5rem → 7rem)); marca "Gelatto Sole" gigante vazada no rodapé (clamp(3.2rem → 12rem), contorno branco a 22%); faixa de sabores em display 800, 1.6rem.

### Named Rules
**The Heavy Display Rule.** Títulos sempre em Bricolage 800 com tracking negativo e entrelinha ~1. Manrope nunca é usada para títulos.

**The Outline Numeral Rule.** Números e marcas decorativas gigantes são vazados (só contorno), nunca preenchidos, para serem presença sem peso.

## Layout

- **Container:** largura `min(1180px, 100% - 40px)`, centralizado. A seção de processo é a exceção: largura total da viewport.
- **Ritmo vertical:** seções com 96px em cima e embaixo. O hero tem 56px em cima e 170px embaixo (espaço para a onda). O CTA final tem 90px / 40px.
- **Cabeçalho de seção:** grade de 2 colunas (1.1fr título / 0.9fr lead, alinhados pela base), 30px de respiro, régua-arco-íris de 4px por baixo, 40px até o conteúdo.
- **Sequência de seções:** header flutuante → hero (texto + vídeo inclinado, 1.05fr / 1fr) → faixa de sabores diagonal (-2°, escura, rolando) → processo em scroll (520vh, vídeo sticky que cresce) → sabores (grade bento de 12 colunas) → sobre (foto em arco + valores, 0.9fr / 1.1fr) → "Como pedir" (faixa escura arredondada, 3 colunas) → depoimentos (destaque 1.3fr + coluna 0.9fr) → lojas (faixa amarela arredondada, lista) → CTA final (bloco em gradiente com fotos "impressas" inclinadas) → rodapé escuro com marca gigante.
- **Grade de sabores:** 12 colunas, linhas de 270px, gap 20px. Trio Colorido 5 col × 2 linhas; Pistache 4 × 2; Morango e Blueberry 3 × 1; Manga 4 × 1; card "Mais de 40 sabores" 8 × 1.
- **Faixas (bands):** "Como pedir" e "Lojas" ficam fora do container, com 20px de margem lateral e cantos de 56px, flutuando sobre o fundo.

### Comportamento responsivo
Dois pontos de quebra efetivos:
- **≤ 980px (metade inferior):** sabores, sobre, depoimentos, cabeçalhos de seção e CTA final viram uma coluna. Cards de produto ocupam a largura toda com linhas de 360px e todas as descrições visíveis. "Como pedir" empilha sem divisórias. Lojas empilham. Faixas e CTA: cantos de 36px, margem lateral de 12px; CTA com padding de 40px / 26px; fotos impressas reposicionadas.
- **≤ 860px (topo):** links do menu somem (fica logotipo + botão iFood; não há menu hambúrguer). Hero em uma coluna, vídeo abaixo do texto (cena com min. 420px). Seção de processo: o vídeo parte de uma caixa mais larga (inset 30% / 6% / 12%), sombra vem de baixo, título 1.7rem, passos 1.3rem / 0.95rem, texto colado à base.
- Safe areas do iOS respeitadas (`env(safe-area-inset-*)`) no topo, base e scroll-padding de 84px para âncoras.

## Elevation & Depth

Sistema em camadas suaves: superfícies brancas e fotos flutuam sobre o rosa-leite com sombras longas, deslocadas para baixo e com spread negativo, sempre tingidas (ameixa, blueberry, morango ou vermelho iFood), nunca cinza. Profundidade extra vem de perspectiva 3D real (moldura do hero), de vidro fosco (barra de navegação) e de sobreposição (etiqueta e fotos impressas inclinadas sobre as bordas).

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
- **Pílula (999px):** todos os botões, selo do hero, barra de navegação, pílulas de passo.
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
- **Shape:** pílula (999px), altura 56px (46px na versão pequena), borda de 2px.
- **Primário iFood:** fundo vermelho iFood sólido, texto branco Manrope 800, padding horizontal de 30px (22px pequeno). Sombra vermelha difusa.
- **Hover / Active:** fundo escurece para iFood escuro e sobe 1px (transição de 0.12s); ao pressionar volta à posição.
- **Secundário branco:** fundo branco, texto ameixa escura, borda névoa rosa, sombra ameixa leve; hover sobe 1px. Usado em "Ver sabores" e "Como chegar". No CTA final, é o branco com texto vermelho iFood.
- **Foco:** anel blueberry de 3px com 3px de afastamento, cantos de 10px (global).

### Chips / Pílulas
- **Selo do hero:** pílula branca, Manrope 700, 0.95rem, padding 8px 18px, sombra ameixa.
- **Contador "Passo X de 4":** pílula baunilha, texto ameixa 800, pulso de brilho baunilha a cada 2s.
- **Trilho de passos:** pílulas com contorno branco a 45%; concluído = fundo branco a 22%; atual = branco sólido com texto roxo #4B2FD6.

### Cards / Containers
- **Card de produto:** foto em tela cheia (cover, com ponto focal por produto), cantos de 30px, fundo lilás #EBDDF0 enquanto carrega. Legenda sobreposta embaixo sobre degradê ameixa-noite: título branco, descrição branca a 88% (só nos cards grandes no desktop), preço em baunilha 800 e botão iFood pequeno. Hover: foto amplia 5% em 0.7s. Sem sombra, sem borda.
- **Card "Mais de 40 sabores":** bloco maracujá sólido, texto ameixa, título clamp(1.7rem → 2.5rem), botão iFood; padding 36px 40px.
- **Valores (Sobre):** lista sem caixa, linhas separadas por divisor ameixa 16%; termo em display 1.8rem colorido por sabor escuro, descrição em ameixa suave (coluna de 150px + texto).
- **Depoimentos:** sem cartões; tipografia display com divisórias de 2px. Destaque grande à esquerda com aspas morango.
- **Lojas:** linhas de lista (nome 2rem / endereço e horário / botão branco) sobre faixa amarela em gradiente #FFF1B8 → #FFE08A.

### Navigation
- **Barra:** flutuante e sticky, 12px do topo, 64px de altura, pílula branca a 82% com desfoque de 14px e sombra ameixa.
- **Conteúdo:** logotipo em texto (Bricolage 800, 1.45rem, -0.03em), quatro links Manrope 700 (Processo, Sabores, Sobre, Lojas), botão iFood pequeno à direita.
- **Estados:** hover nos links muda a cor para blueberry.
- **Celular (≤ 860px):** só logotipo e botão iFood; sem menu.

### Hero (assinatura)
Texto à esquerda (selo, H1 display, lead, dois botões com 18px de espaço) e vídeo do preparo à direita numa moldura branca de 10px, 44px de canto, proporção 1:1.12, inclinada em 3D (rotateY -12°, rotateX 5°, rotateZ 1°) com perspectiva de 1100px. A moldura segue o mouse (até ±7° extra) em 0.15s ease-out. Fundo: véu degradê rosa-leite → rosa → céu sobre o rosa-leite da página; termina numa onda com traço arco-íris.

### Faixa de sabores (assinatura)
Faixa ameixa escura girada -2°, texto branco display 800 1.6rem, nomes de sabores separados por traços verticais brancos a 35% (2 × 24px), rolando em loop contínuo de 32s.

### Processo em scroll (assinatura)
Seção de 520vh com palco sticky de 100svh. O título "Do ingrediente à casquinha." aparece letra a letra (desfoque 8px + giro 4° → nítido, 18ms entre letras) e some ao avançar. O vídeo começa numa caixa central arredondada e cresce até ocupar a tela toda; ao mesmo tempo um degradê escuro aparece pela esquerda (por baixo no celular). Os passos aparecem sobre o vídeo, sem caixa, em texto branco com sombra: contador baunilha, trilho de pílulas, título baunilha e texto que entram letra a letra e palavra a palavra, e uma barra de progresso baunilha → rosa. O vídeo é "esfregado" pelo scroll com suavização.

### CTA final (assinatura)
Bloco com cantos de 56px em gradiente 120° morango → laranja calda → manga, texto branco, título grande, botão branco com texto iFood. À direita, duas fotos de produto "impressas" (borda branca 8px, 18px de canto, giradas +5° / -5°) que saem pela borda superior do bloco.

**Véu Framboesa (legibilidade).** Por cima do gradiente há uma segunda camada, também a 120°, em framboesa escura translúcida (`framboesa-veu`). Ela escurece a zona do texto e desaparece em direção às fotos, deixando o laranja e a manga intactos no lado direito:
- **Desktop (> 980px):** véu pleno de 0% a 50% do gradiente, desvanecendo até 0 em 88%.
- **Celular e tablet (≤ 980px):** o texto ocupa quase toda a largura, por isso o véu é pleno de 0% a 70% e desvanece até 0 em 92%; a manga continua visível no canto inferior direito.

Contraste validado pixel a pixel (pior pixel atrás de cada linha) a 390, 768, 1100 e 1440px: título 4,63–4,87:1 (mínimo 3:1 para texto grande) e parágrafo 4,70–4,94:1 (mínimo 4,5:1). Sem o véu, o mesmo texto ficava entre 2,59:1 e 2,93:1. Qualquer alteração ao gradiente ou ao véu exige medir de novo.

### Rodapé
Fundo ameixa escura, texto rosa muito claro (#FFF3FA), três colunas (marca + frase, links internos, links externos), marca "Gelatto Sole" gigante vazada a 22%, copyright a 65%.

### Motion e acessibilidade
- Durações: botões 0.12s; passos 0.4s; letras 0.5s com escalonamento de 26ms (títulos) e 45ms (textos); zoom de foto 0.7s; faixa 32s linear.
- `prefers-reduced-motion`: todas as transições e animações desligadas, sem inclinação no hero, vídeo do hero pausado e processo mostrado em modo estático (vídeo 16:9 com cantos de 28px e todos os passos visíveis, títulos dos passos em blueberry).
- Modo estático também é o fallback quando o vídeo falha.

## Do's and Don'ts

### Do:
- **Do** manter o fundo rosa-leite (#FFF7FB) com os três brilhos radiais; a página nunca é branca chapada.
- **Do** deixar a fotografia e o vídeo reais do sorvete liderarem cada seção de produto; a UI em volta fica discreta.
- **Do** usar Bricolage Grotesque 800 com tracking -0.025em e entrelinha ~1 em todos os títulos.
- **Do** usar pílulas (999px) para todo controle e 30–56px para superfícies.
- **Do** tingir sombras com ameixa ou com a cor do elemento, sempre com spread negativo.
- **Do** reservar o vermelho iFood (#E71729) para "Pedir no iFood".
- **Do** usar a linha-arco-íris (morango → manga → céu → blueberry) como único ornamento recorrente.
- **Do** manter o fallback estático e o respeito a `prefers-reduced-motion` em qualquer novo movimento.

### Don't:
- **Don't** reintroduzir botões em relevo 3D (sombra sólida embaixo), esferas/bolas 3D desenhadas em CSS, casquinhas ilustradas ou cards de "bento" com ilustração: são camadas antigas que ainda estão no CSS mas foram substituídas e não fazem parte da identidade.
- **Don't** usar preto (#000) ou cinza neutro em texto ou sombras.
- **Don't** usar o vermelho iFood em decoração ou em controles que não sejam pedido.
- **Don't** espalhar os sabores como blocos de cor lado a lado ou em ícones coloridos; eles aparecem como linha contínua ou como acento pontual.
- **Don't** colocar caixas opacas sobre fotos e vídeos; legibilidade vem do degradê ameixa-noite.
- **Don't** girar elementos além de ±5° (exceto a moldura 3D do hero).
- **Don't** usar Manrope em títulos ou Bricolage em parágrafos corridos.

> [!NOTE]
> **Observações de estado (não alteradas nesta etapa):**
> - O hero declara uma foto de fundo (`url(img/vitrine.jpg)` dentro de `css/style.css`), mas o caminho é relativo à pasta `css/` e a imagem não carrega. O visual atual, que este documento preserva, é só o véu degradê rosa → céu. Corrigir o caminho mudaria o hero visivelmente; decidir antes de mexer.
> - `--pist` (#7ED26B) e as cores inline das bolinhas da faixa estão definidas mas não aparecem (substituídas pelos traços brancos).
> - Há CSS morto de iterações anteriores (`.orb`, `.scoop`, `.cone`, `.cup`, `.card`, `.bento`, `.tile`, `.how`, `.bubble`, `.units`, `.final`, `.stage-video`, botões 3D). Os valores efetivos documentados aqui são os que vencem na cascata.

