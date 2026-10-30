
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
  if(!reduce&&"IntersectionObserver" in window){
    var rvs=[];
    var sh=document.querySelector("#sabores .sec-h"),pm=document.querySelector("#sabores .pk-more"),as=document.querySelector("#sobre .about-stage"),al=document.querySelector("#sobre .about-body .lead");
    if(sh){sh.classList.add("rv");rvs.push(sh)}
    [].slice.call(document.querySelectorAll("#sabores .pk")).forEach(function(el,k){
      el.classList.add("rv","rv-mask");
      el.style.setProperty("--rv-d",((k<2?k:k-2)*90)+"ms");
      rvs.push(el);
    });
    if(pm){pm.classList.add("rv");rvs.push(pm)}
    if(as){as.classList.add("rv","rv-mask");rvs.push(as)}
    if(al){al.classList.add("rv");rvs.push(al)}
    [].slice.call(document.querySelectorAll("#sobre .vals div")).forEach(function(el,k){
      el.classList.add("rv");
      el.style.setProperty("--rv-d",(k*90)+"ms");
      rvs.push(el);
    });
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add("in");
          setTimeout(function(){e.target.style.removeProperty("--rv-d")},900);
          io.unobserve(e.target);
          if(e.target===al){
            [].slice.call(document.querySelectorAll("#sobre .vals div")).forEach(function(v){
              v.classList.add("in");
              setTimeout(function(){v.style.removeProperty("--rv-d")},950);
              io.unobserve(v);
            });
          }
        }
      });
    },{threshold:.08,rootMargin:"0px 0px -2% 0px"});
    rvs.forEach(function(el){
      if(el.getBoundingClientRect().top<window.innerHeight*.92){el.classList.add("in");el.style.removeProperty("--rv-d")}
      else io.observe(el);
    });
  }
  if(!reduce&&canHover){
    var hs=document.getElementById("heroScene"),fr=document.getElementById("tiltFrame");
    hs.addEventListener("mousemove",function(e){
      var r=hs.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      hs.style.setProperty("--mx",x.toFixed(3));
      hs.style.setProperty("--my",y.toFixed(3));
      fr.style.transition="transform .15s ease-out";
      fr.style.transform="rotateY("+(-12+x*14)+"deg) rotateX("+(5-y*12)+"deg) rotateZ(1deg)";
    });
    hs.addEventListener("mouseleave",function(){
      hs.style.setProperty("--mx","0");
      hs.style.setProperty("--my","0");
      fr.style.transition="transform .42s cubic-bezier(.22,1,.36,1)";
      fr.style.transform="";
    });
    [].slice.call(document.querySelectorAll(".pk")).forEach(function(c){
      c.addEventListener("mousemove",function(e){
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.transition="transform .12s ease-out,box-shadow .25s ease-out";
        c.style.setProperty("--rx",x.toFixed(3));
        c.style.setProperty("--ry",y.toFixed(3));
      });
      c.addEventListener("mouseleave",function(){
        c.style.transition="";
        c.style.setProperty("--rx","0");
        c.style.setProperty("--ry","0");
      });
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
  v.muted=true;v.playsInline=true;v.setAttribute("playsinline","");v.setAttribute("webkit-playsinline","");
  function setDirectSrc(){if(!v.getAttribute("src")){v.src=url;try{v.load()}catch(e){}}}
  function loadProcess(){
    if(window.fetch&&location.protocol!=="file:"){
      fetch(url).then(function(r){if(!r.ok)throw 0;return r.blob()}).then(function(b){
        v.src=URL.createObjectURL(b);
        try{v.load()}catch(e){}
      }).catch(setDirectSrc);
    }else{
      setDirectSrc();
    }
  }
  if(document.readyState==="complete")loadProcess();else window.addEventListener("load",loadProcess);
  if(reduce){hero.removeAttribute("autoplay");hero.pause();fallback();v.addEventListener("loadedmetadata",function(){v.currentTime=v.duration-0.2});return}
  hero.play&&hero.play().catch(function(){});
  v.addEventListener("error",fallback);
  var cur=0,target=0,dur=0,primed=false,unlocked=false,seeking=false,seekTimer=0;
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
  function primeFrame(){
    try{v.pause()}catch(e){}
    if(dur>0){
      try{v.currentTime=Math.min(dur-0.05,Math.max(0.001,cur*dur))}catch(e){}
    }
    calc();
  }
  function unlockVideo(){
    if( v.duration&&isFinite(v.duration))dur=v.duration;
    if(!dur||primed)return;
    primed=true;
    var p=v.play&&v.play();
    if(p&&p.then){
      p.then(function(){
        unlocked=true;
        primeFrame();
      }).catch(function(){
        primeFrame();
      });
    }else{
      unlocked=true;
      primeFrame();
    }
  }
  window.addEventListener("touchstart",function(){
    if(dur>0&&!unlocked){
      var p=v.play&&v.play();
      if(p&&p.then)p.then(function(){unlocked=true;primeFrame()}).catch(function(){});
    }
  },{passive:true,once:true});
  v.addEventListener("loadedmetadata",unlockVideo);
  v.addEventListener("loadeddata",unlockVideo);
  v.addEventListener("canplay",unlockVideo);
  v.addEventListener("seeked",function(){seeking=false;clearTimeout(seekTimer)});
  var coarse=window.matchMedia("(pointer:coarse)").matches;
  var lastSeek=0;
  var seekDelay=coarse?40:16;
  var seekThreshold=coarse?0.03:0.015;
  function tick(now){
    var t=now||performance.now();
    cur+=(target-cur)*0.12;
    var next=Math.min(dur-0.05,Math.max(0.001,cur*dur));
    if(dur>0&&primed&&!seeking&&!v.seeking&&(t-lastSeek>=seekDelay)&&Math.abs(v.currentTime-next)>seekThreshold){
      try{
        seeking=true;
        v.currentTime=next;
        lastSeek=t;
        clearTimeout(seekTimer);
        seekTimer=setTimeout(function(){seeking=false},120);
      }catch(e){
        seeking=false;
      }
    }
    requestAnimationFrame(tick);
  }
  window.addEventListener("scroll",calc,{passive:true});window.addEventListener("resize",calc);
  calc();requestAnimationFrame(tick);
})();
