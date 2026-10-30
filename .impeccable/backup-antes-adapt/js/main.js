
(function(){
  var IMG={"vitrine":"img/vitrine.jpg","trio":"img/trio.jpg","pistache":"img/pistache.jpg","morango":"img/morango.jpg","blueberry":"img/blueberry.jpg","manga":"img/manga.jpg"};
  var P=[
   {k:"trio",n:"Trio Colorido",d:"Três bolas na mesma casquinha. Escolha seus sabores favoritos.",pr:"A partir de R$ 18,90",c:"big",op:"50% 40%"},
   {k:"pistache",n:"Casquinha Pistache",d:"Pistache cremoso com castanhas e farelo crocante por cima.",pr:"A partir de R$ 12,90",c:"tall",op:"50% 40%"},
   {k:"morango",n:"Morango com Calda",d:"Sorvete cremoso com pedaços de morango e calda.",pr:"A partir de R$ 14,90",c:"",op:"50% 62%"},
   {k:"blueberry",n:"Copo Blueberry",d:"Copo cremoso com cobertura de chocolate e castanhas.",pr:"A partir de R$ 16,90",c:"",op:"50% 68%"},
   {k:"manga",n:"Manga do Sol",d:"Doce, suave e refrescante, com manga madura e calda.",pr:"A partir de R$ 12,90",c:"w4",op:"50% 36%"}
  ];
  var h="";
  P.forEach(function(x){
    h+='<article class="pk '+x.c+'"><img src="'+IMG[x.k]+'" alt="'+x.n+'" loading="lazy" decoding="async" style="object-position:'+x.op+'"><div class="cap"><h3>'+x.n+'</h3><p>'+x.d+'</p><div class="meta"><span class="price">'+x.pr+'</span><a class="pk-link" href="https://www.ifood.com.br/" target="_blank" rel="noopener">Pedir no iFood <span aria-hidden="true">→</span></a></div></div></article>';
  });
  h+='<aside class="pk-more"><h3>Mais de 40 sabores no cardápio</h3><p>Coco, chocolate belga, doce de leite, limão siciliano e muito mais. Veja todos no iFood.</p><a class="btn btn-ifood" href="https://www.ifood.com.br/" target="_blank" rel="noopener">Ver cardápio completo</a></aside>';
  document.getElementById("grid-pk").innerHTML=h;
  [].slice.call(document.querySelectorAll("[data-img]")).forEach(function(i){var s=IMG[i.getAttribute("data-img")];if(s&&i.getAttribute("src")!==s)i.src=s});

  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if(!reduce&&canHover){
    var hs=document.getElementById("heroScene"),fr=document.getElementById("tiltFrame");
    hs.addEventListener("mousemove",function(e){
      var r=hs.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      fr.style.transition="transform .15s ease-out";
      fr.style.transform="rotateY("+(-12+x*14)+"deg) rotateX("+(5-y*12)+"deg) rotateZ(1deg)";
    });
    hs.addEventListener("mouseleave",function(){
      fr.style.transition="transform .42s cubic-bezier(.22,1,.36,1)";
      fr.style.transform="";
    });
  }

  var BH="videos/hero.mp4";
  var B64="videos/processo.mp4";
  var hero=document.getElementById("heroVid"),v=document.getElementById("scrubVid");
  var sec=document.getElementById("processo"),steps=[].slice.call(sec.querySelectorAll(".step")),prog=document.getElementById("prog");
  var url=B64;
  function fallback(){document.documentElement.classList.add("static");steps.forEach(function(s){s.classList.add("on")});}
  /* Vídeos agora são arquivos em videos/. O hero (acima da dobra) carrega já; o vídeo do processo (abaixo da dobra, 3,3 MB)
       só começa a baixar depois do evento load, para não disputar banda com a grade de sabores e as fotos. */
  hero.addEventListener("error",function(){if(hero.getAttribute("src")===BH)hero.src=url});
  hero.src=BH;
  function loadProcess(){v.src=url}
  if(document.readyState==="complete")loadProcess();else window.addEventListener("load",loadProcess);
  if(reduce){hero.removeAttribute("autoplay");hero.pause();fallback();v.addEventListener("loadedmetadata",function(){v.currentTime=v.duration-0.2});return}
  hero.play&&hero.play().catch(function(){});
  v.addEventListener("error",fallback);
  var cur=0,target=0,dur=0;
  var rail=[].slice.call(sec.querySelectorAll(".rail li")),ttl=document.getElementById("ttl");
  function split(el,mode,cls){var txt=el.textContent,sr=document.createElement("span"),g=document.createElement("span"),i=0;sr.className="sr";sr.textContent=txt;g.setAttribute("aria-hidden","true");el.textContent="";txt.split(" ").forEach(function(w){var s=document.createElement("span");s.className="wd";if(mode==="c"){w.split("").forEach(function(c){var q=document.createElement("span");q.className=cls;q.style.setProperty("--i",i++);q.textContent=c;s.appendChild(q)})}else{s.className="wd "+cls;s.style.setProperty("--i",i++);s.textContent=w}g.appendChild(s);g.appendChild(document.createTextNode(" "))});el.appendChild(sr);el.appendChild(g)}
  steps.forEach(function(s){split(s.querySelector("h3"),"c","ch");split(s.querySelector("p"),"w","ch")});
  split(ttl,"c","tc");
  var tcs=[].slice.call(ttl.querySelectorAll(".tc"));
  var stage=sec.querySelector(".stage"),card=sec.querySelector(".stage-text"),intro=document.getElementById("intro");
  function calc(){
    var r=sec.getBoundingClientRect(),total=sec.offsetHeight-window.innerHeight;
    var p=total>0?Math.min(1,Math.max(0,-r.top/total)):0;target=p;
    var e=Math.min(1,p/0.2);e=e*e*(3-2*e);stage.style.setProperty("--e",e);
    var ci=Math.min(1,Math.max(0,(p-0.16)/0.06));
    card.style.opacity=ci;card.style.transform="translateY("+((1-ci)*24)+"px)";
    intro.style.opacity=1-Math.min(1,p/0.14);
    var p2=Math.min(1,Math.max(0,(p-0.2)/0.8)),idx=Math.min(steps.length-1,Math.floor(p2*steps.length));
    steps.forEach(function(s,k){s.classList.toggle("on",k===idx)});
    rail.forEach(function(l,k){l.classList.toggle("on",k===idx);l.classList.toggle("done",k<idx)});
    var q=Math.min(1,Math.max(0,1-r.top/window.innerHeight));
    tcs.forEach(function(c,k){c.classList.toggle("in",q>=0.1+0.8*k/tcs.length);c.style.transitionDelay=(k*18)+"ms"});
    prog.style.width=(p2*100)+"%";
  }
  function tick(){cur+=(target-cur)*0.12;if(dur&&Math.abs(v.currentTime-cur*dur)>0.02){try{v.currentTime=Math.min(dur-0.05,cur*dur)}catch(e){}}requestAnimationFrame(tick)}
  v.addEventListener("loadedmetadata",function(){dur=v.duration;v.pause();calc()});
  window.addEventListener("scroll",calc,{passive:true});window.addEventListener("resize",calc);
  calc();requestAnimationFrame(tick);
})();
