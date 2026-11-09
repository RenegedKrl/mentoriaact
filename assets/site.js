// Método ACT — layout e componentes compartilhados
const R = document.body.dataset.root || "";      // prefixo relativo ("", "../", "../../")
const PAGE = document.body.dataset.page || "";
const WA = "https://wa.me/5511918746789?text=" + encodeURIComponent("Olá, Cleber! Vim pelo site e quero saber mais.");

// Programas (fonte única: carrossel, biblioteca e destaques)
const PROGRAMS = [
  {slug:"ipc", cat:"diagnostico", k:"Diagnóstico", t:"IPC Essencial", d:"30 indicadores e plano de ação", img:"assets/ipc/icpaplicacao.webp", tag:"Mais procurado", href:"programas/ipc/"},
  {slug:"ipc", cat:"diagnostico", k:"Diagnóstico + sessão", t:"IPC Completo", d:"Relatório + devolutiva individual de 50 min", img:"assets/stock/mentoria-1a1.webp", href:"programas/ipc/#planos"},
  {slug:"mentoria", cat:"mentoria", k:"Mentoria", t:"Mentoria ACT", d:"Sessões individuais para o seu próximo nível", img:"assets/stock/lider-bracos.webp", href:"programas/mentoria/"},
  {slug:"dobro", cat:"mentoria", k:"Black November", t:"Mentoria em dobro", d:"5+5 ou 10+10 sessões, até 30/11", img:"assets/stock/aperto-mao.webp", tag:"Por tempo limitado", tagO:1, href:"programas/mentoria/#dobro"},
  {slug:"lideranca", cat:"mentoria", k:"Liderança", t:"Primeira liderança", d:"Para quem acabou de assumir um time", img:"assets/stock/reuniao-mesa.webp", href:"programas/mentoria/"},
  {slug:"transicao", cat:"mentoria", k:"Carreira", t:"Transição de carreira", d:"Mudar de área ou de empresa com estratégia", img:"assets/stock/sala-cidade.webp", href:"programas/mentoria/"},
  {slug:"conteudo", cat:"gratuito", k:"Gratuito", t:"Acelera Carreira", d:"Conteúdo semanal no Instagram", img:"assets/stock/trabalho-laptop.webp", href:"conteudo/"},
  {slug:"indique", cat:"gratuito", k:"Indicação", t:"Indique e ganhe", d:"Quem indica ganha um diagnóstico IPC", img:"assets/stock/conversa-mulheres.webp", href:"contato/"}
];
const DEPS = [1,2,3,4,5,6,7].map(n => `assets/ipc/depoimento-ipc-0${n}.webp`);

const NAV = [["","Início"],["sobre/","Sobre"],["programas/","Programas"],["metodo/","Método"],["programas/ipc/","IPC"],["depoimentos/","Depoimentos"],["conteudo/","Conteúdo"],["contato/","Contato"]];
if (document.querySelector(".phero, .hero")) document.body.classList.add("has-phero");
const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>';

function header(){
  const links = NAV.map(([h,l]) => `<a href="${R}${h}" class="${PAGE===(h||"inicio")?"on":""}">${l}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
  <nav class="nav" id="nav"><div class="wrap nav-in">
    <a href="${R}" class="logo dp">Método <span>ACT</span></a>
    <div class="pill" id="pill">${links}</div>
    <a href="${R}programas/ipc/" class="btn btn-o nav-cta">Fazer o IPC</a>
    <button class="burger" id="burger" aria-label="Abrir menu"><span></span><span></span></button>
  </div></nav>
  <div class="mnav" id="mnav" aria-hidden="true">
    <div class="mnav-links">${NAV.map(([h,l],i) => `<a href="${R}${h}" style="--i:${i}" class="${PAGE===(h||"inicio")?"on":""}"><small>0${i+1}</small>${l}</a>`).join("")}</div>
    <div class="mnav-foot"><a href="${R}programas/ipc/" class="btn btn-o arr">Fazer o IPC</a><span>@acelera.carreira</span></div>
  </div>`);
}
function footer(){
  document.body.insertAdjacentHTML("beforeend", `
  <section class="lead-sec light"><div class="wrap split">
    <div>
      <div class="eyebrow">Fale com o Cleber</div>
      <h2 class="dp">Vamos conversar sobre a sua <em>carreira?</em></h2>
      <p class="lead">Deixe seus dados e continue a conversa pelo WhatsApp. Resposta direta, sem robô.</p>
      <ul class="lead-list"><li>Dúvidas sobre o IPC</li><li>Como funciona a mentoria</li><li>Condições da Black November</li></ul>
    </div>
    <div class="lead-card"><div data-pinas-form></div></div>
  </div></section>
  <footer class="foot"><div class="wrap">
    <div class="foot-big">Método <em>ACT</em></div>
    <div class="foot-g">
      <div><div class="logo dp" style="color:#EEF0F2;margin-bottom:12px">Método <span style="color:var(--or)">ACT</span></div>
        <p style="max-width:300px">Diagnóstico e mentoria de carreira com Cleber Mello, 20 anos de liderança em multinacionais.</p></div>
      <div><h5>Site</h5><ul><li><a href="${R}sobre/">Sobre</a></li><li><a href="${R}metodo/">Método ACT</a></li><li><a href="${R}depoimentos/">Depoimentos</a></li><li><a href="${R}conteudo/">Conteúdo</a></li></ul></div>
      <div><h5>Programas</h5><ul><li><a href="${R}programas/ipc/">Diagnóstico IPC</a></li><li><a href="${R}programas/mentoria/">Mentoria ACT</a></li><li><a href="${R}programas/">Todos os programas</a></li></ul></div>
      <div><h5>Contato</h5><ul><li><a href="${WA}" target="_blank" rel="noopener">WhatsApp</a></li><li><a href="https://www.instagram.com/acelera.carreira/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.linkedin.com/in/clebersonmello" target="_blank" rel="noopener">LinkedIn</a></li></ul></div>
    </div>
    <div class="foot-b"><span>© 2026 Método ACT · metodoact.com</span><span>Todos os direitos reservados</span></div>
  </div></footer>
  <div class="lb" id="lb"><button class="arrow lb-x" aria-label="Fechar">✕</button><button class="arrow lb-p" aria-label="Anterior">←</button><img alt="Depoimento"><button class="arrow lb-n" aria-label="Próximo">→</button></div>`);
}

// Carrossel 3D: centro em destaque, vizinhos padrão, pontas menores
function carousel(el){
  const N = PROGRAMS.length; let cur = 0;
  PROGRAMS.forEach((p,i) => {
    const a = document.createElement("a"); a.className = "card"; a.href = R + p.href;
    a.innerHTML = `<img src="${R}${p.img}" alt="" loading="lazy"><div class="in"><small>${p.k}</small><h3 class="dp">${p.t}</h3><p>${p.d}</p></div>`;
    a.addEventListener("click", e => { if (i !== cur){ e.preventDefault(); go(i); } });
    el.appendChild(a);
  });
  const cards = [...el.children], t = document.getElementById("ci-t"), s = document.getElementById("ci-s");
  function render(){
    const m = innerWidth < 640, gap = m ? Math.min(120, innerWidth*.28) : Math.min(250, innerWidth*.18);
    cards.forEach((c,i) => {
      let d = ((i-cur)%N+N)%N; if (d > N/2) d -= N; const a = Math.abs(d);
      // centro grande, ±1 padrão, ±2 menor
      const sc = a===0 ? 1.12 : a===1 ? .9 : .72, rot = -Math.sign(d)*(a===0?0:a===1?18:30);
      const x = Math.sign(d) * (a===0 ? 0 : a===1 ? gap*1.05 : gap*1.85);
      c.style.transform = `translate(-50%,-50%) translateX(${x}px) rotateY(${rot}deg) scale(${sc})`;
      c.style.zIndex = 10-a; c.style.opacity = a>2 ? 0 : a===2 ? .55 : 1; c.style.pointerEvents = a>2 ? "none" : "auto";
      c.classList.toggle("c", a===0);
    });
    if (t){ t.textContent = PROGRAMS[cur].t; s.textContent = PROGRAMS[cur].d; }
  }
  const go = i => { cur = (i+N)%N; render(); restart(); };
  // autoplay lento, pausa no hover e quando fora da tela
  let timer = null, vis = false;
  const bar = document.querySelector("#car-bar i");
  const runBar = on => { if (!bar) return; bar.classList.remove("run"); void bar.offsetWidth; if (on) bar.classList.add("run"); };
  const restart = () => {
    clearInterval(timer); const on = vis && !matchMedia("(prefers-reduced-motion: reduce)").matches;
    runBar(on); if (on) timer = setInterval(() => { cur = (cur+1)%N; render(); runBar(true); }, 5000);
  };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; restart(); }).observe(el);
  el.addEventListener("mouseenter", () => { clearInterval(timer); runBar(false); }); el.addEventListener("mouseleave", restart);
  document.getElementById("car-p").onclick = () => go(cur-1);
  document.getElementById("car-n").onclick = () => go(cur+1);
  let sx = null;
  el.addEventListener("pointerdown", e => sx = e.clientX);
  addEventListener("pointerup", e => { if (sx===null) return; const dx = e.clientX-sx; if (Math.abs(dx)>40) go(cur+(dx<0?1:-1)); sx = null; });
  addEventListener("resize", render); render();
}

// Slider com setas e pontos
function slider(root){
  const tr = root.querySelector(".track"), dots = root.querySelector(".dots");
  const step = () => tr.firstElementChild.getBoundingClientRect().width + 20;
  root.querySelector("[data-p]").onclick = () => tr.scrollBy({left:-step()});
  root.querySelector("[data-n]").onclick = () => tr.scrollBy({left:step()});
  if (!dots) return;
  const pages = () => Math.max(1, Math.round((tr.scrollWidth - tr.clientWidth)/step()) + 1);
  const draw = () => {
    const n = pages(), i = Math.round(tr.scrollLeft/step());
    dots.innerHTML = Array.from({length:n},(_,k)=>`<button class="${k===i?"on":""}" aria-label="Ir para ${k+1}"></button>`).join("");
    [...dots.children].forEach((b,k)=>b.onclick=()=>tr.scrollTo({left:k*step()}));
  };
  tr.addEventListener("scroll", () => requestAnimationFrame(draw)); addEventListener("resize", draw); draw();
}

// Lightbox dos depoimentos
function lightbox(){
  const lb = document.getElementById("lb"), img = lb.querySelector("img"); let i = 0;
  const show = k => { i = (k+DEPS.length)%DEPS.length; img.src = R + DEPS[i]; lb.classList.add("open"); };
  document.querySelectorAll("[data-dep]").forEach(el => el.onclick = () => show(+el.dataset.dep));
  lb.querySelector(".lb-p").onclick = e => { e.stopPropagation(); show(i-1); };
  lb.querySelector(".lb-n").onclick = e => { e.stopPropagation(); show(i+1); };
  lb.onclick = e => { if (e.target===lb || e.target.classList.contains("lb-x")) lb.classList.remove("open"); };
  addEventListener("keydown", e => { if (!lb.classList.contains("open")) return; if (e.key==="Escape") lb.classList.remove("open"); if (e.key==="ArrowLeft") show(i-1); if (e.key==="ArrowRight") show(i+1); });
}
// Preenche trilhos de depoimentos
function depTracks(){
  document.querySelectorAll("[data-deps]").forEach(tr => {
    tr.innerHTML = DEPS.map((d,k)=>`<div class="dep" data-dep="${k}"><img src="${R}${d}" alt="Depoimento de cliente do IPC" loading="lazy"></div>`).join("");
  });
}
// Biblioteca de programas com filtro
function library(){
  const grid = document.getElementById("lib-grid"); if (!grid) return;
  const draw = cat => {
    grid.innerHTML = PROGRAMS.filter(p => cat==="todos" || p.cat===cat).map(p => `
      <a class="card-g prog" href="${R}${p.href}"><div class="th"><img src="${R}${p.img}" alt="" loading="lazy">${p.tag?`<span class="${p.tagO?"o":""}">${p.tag}</span>`:""}</div>
      <div class="bd"><div class="eyebrow" style="font-size:11px">${p.k}</div><h3 style="margin-top:6px">${p.t}</h3><p>${p.d}</p></div></a>`).join("");
  };
  document.querySelectorAll(".side button").forEach(b => b.onclick = () => {
    document.querySelectorAll(".side button").forEach(x=>x.classList.remove("on")); b.classList.add("on"); draw(b.dataset.cat);
  });
  document.querySelectorAll("[data-count]").forEach(el => { const c = el.dataset.count; el.textContent = PROGRAMS.filter(p=>c==="todos"||p.cat===c).length; });
  draw("todos");
}

header(); footer();
const car = document.getElementById("car"); if (car) carousel(car);
depTracks(); document.querySelectorAll(".slider").forEach(slider); lightbox(); library();

// ===== animações =====
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

// nav (ideia do Pinas Portfolio): barra larga sobre o topo; depois vira pílula flutuante centralizada
const nav = document.getElementById("nav");
const topEl = document.querySelector(".hero, .phero");
const onScroll = () => {
  const lim = topEl ? topEl.offsetHeight - 90 : 40;
  const pill = scrollY > lim;
  nav.classList.toggle("solid", pill); nav.classList.toggle("float", pill);
  // sobre seção escura: menu com fundo escuro e textos brancos
  const r = nav.getBoundingClientRect(), y = r.top + r.height/2;
  const under = document.elementsFromPoint(innerWidth/2, y).find(el => !nav.contains(el) && !el.closest("#mnav"));
  nav.classList.toggle("on-dark", !!(under && under.closest(".dark,.band,.cta-box,.foot,.phero,.hero,.plan.hl2")));
};
addEventListener("scroll", onScroll, {passive:true}); addEventListener("resize", onScroll); onScroll();
// menu móvel em tela cheia
const mnav = document.getElementById("mnav"), burger = document.getElementById("burger");
const setMenu = open => {
  document.body.classList.toggle("menu-open", open); mnav.setAttribute("aria-hidden", !open);
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
burger.onclick = () => setMenu(!document.body.classList.contains("menu-open"));
mnav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// títulos: quebra em palavras preservando <em>/<span>
function splitWords(el){
  let i = 0;
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3){
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(" ")); return; }
        const w = document.createElement("span"); w.className = "w";
        w.innerHTML = `<span style="--i:${i++}">${part}</span>`; frag.appendChild(w);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  walk(el); el.classList.add("sw");
}
document.querySelectorAll("h1.dp, h2.dp").forEach(h => { h.classList.remove("rv"); splitWords(h); });

// imagens com máscara
document.querySelectorAll("img.ph, .prog .th").forEach(el => { el.classList.remove("rv"); el.classList.add("rv-img"); });

// stagger entre irmãos (grids, listas)
document.querySelectorAll(".grid2,.grid3,.grid4,.tl,.steps").forEach(g => [...g.children].forEach((c,k) => c.style.setProperty("--d", (k*0.09)+"s")));

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
}), {threshold:0, rootMargin:"0px 0px 12% 0px"}); // dispara um pouco antes de entrar na tela
const observeAll = () => document.querySelectorAll(".rv,.sw,.rv-img").forEach(el => { if (!el.classList.contains("in")) io.observe(el); });
observeAll();
// itens criados depois (biblioteca filtrada) entram já visíveis
new MutationObserver(observeAll).observe(document.getElementById("lib-grid") || document.createElement("i"), {childList:true});

// contadores
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, m = el.textContent.match(/^(\d+)(.*)$/); if (!m || RM) return;
  const end = +m[1], suf = m[2], t0 = performance.now(), dur = 1400;
  const tick = t => { const p = Math.min(1,(t-t0)/dur), v = Math.round(end*(1-Math.pow(1-p,3))); el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}), {threshold:.6});
document.querySelectorAll(".nums .dp").forEach(el => cio.observe(el));

// parallax leve na foto do hero
const hi = document.querySelector(".hero-img");
if (hi && !RM) addEventListener("scroll", () => { if (scrollY < innerHeight) hi.style.translate = `0 ${scrollY*0.15}px`; }, {passive:true});
// parallax nas faixas de imagem
const bands = [...document.querySelectorAll(".band img")];
if (bands.length && !RM) addEventListener("scroll", () => bands.forEach(img => {
  const r = img.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
  img.style.translate = `0 ${(r.top + r.height/2 - innerHeight/2) * -0.12}px`;
}), {passive:true});

// transição entre páginas
setTimeout(() => document.body.classList.add("ready"), 20); // setTimeout: rAF não roda em aba oculta
addEventListener("pageshow", e => { if (e.persisted) document.body.classList.remove("leaving"); });
document.addEventListener("click", e => {
  const a = e.target.closest("a"); if (!a || e.defaultPrevented || a.target === "_blank" || e.metaKey || e.ctrlKey) return;
  const u = new URL(a.href, location.href);
  if (u.origin !== location.origin || (u.pathname === location.pathname && u.hash)) return;
  e.preventDefault(); document.body.classList.add("leaving"); setTimeout(() => location.href = a.href, 230);
});

// ===== Pinas Kit: aplica a estética do site (botão verde de WhatsApp + formulário nas cores da marca) =====
const PK_BTN_CSS = `.fab{background:#25D366!important;width:56px!important;height:56px!important;right:22px!important;bottom:22px!important;box-shadow:0 10px 26px rgba(26,23,20,.25)!important;transition:transform .3s cubic-bezier(.2,.7,.1,1)}
.fab:hover{transform:scale(1.07)}.dot{display:none}
.bal{right:22px!important;bottom:92px!important;border-radius:20px!important;background:#FBF8F3!important;font-family:Inter,system-ui,sans-serif}
.c{background:#FBF8F3!important;color:#1A1714!important}
.at img,.at span{background:#E7E0D4!important;color:#1A1714}
a.cta{background:#25D366!important}
input:focus,select:focus,textarea:focus{border-color:#C9531C!important;box-shadow:0 0 0 3px rgba(201,83,28,.18)!important}
@media(max-width:640px){.fab{right:16px!important;bottom:16px!important;width:52px!important;height:52px!important}}`;
const PK_FORM_CSS = `:host{font-family:Inter,system-ui,sans-serif!important}
.c{background:transparent!important;color:#1A1714!important;padding:0!important;font-family:Inter,system-ui,sans-serif}
h3{font-family:Fraunces,Georgia,serif!important;font-weight:400!important;font-size:30px!important;letter-spacing:-.02em;margin-bottom:6px!important}
p{color:#6B635A!important}
label{font-weight:500!important;color:#1A1714}
input,select,textarea{border:1px solid #DED5C7!important;border-radius:12px!important;background:#fff!important;color:#1A1714!important;font-family:Inter,system-ui,sans-serif}
input:focus,select:focus,textarea:focus{border-color:#C9531C!important;box-shadow:0 0 0 3px rgba(201,83,28,.18)!important}
.ck{color:#6B635A!important}.ck input{accent-color:#C9531C}
button.s{background:#C9531C!important;font-weight:500!important;font-family:Inter,system-ui,sans-serif;transition:background .25s,transform .3s}
button.s:hover{background:#E06A2E!important;transform:translateY(-2px)}
.g{display:block!important}`;
function themePinas(){
  [["pinas-btn",PK_BTN_CSS],["pinas-form",PK_FORM_CSS]].forEach(([id,css]) => {
    const host = document.getElementById(id), sr = host && host.shadowRoot;
    if (!sr || sr.querySelector("style[data-act]")) return;
    const st = document.createElement("style"); st.dataset.act = ""; st.textContent = css; sr.appendChild(st);
  });
}
const pkTimer = setInterval(themePinas, 300); setTimeout(() => clearInterval(pkTimer), 15000);
new MutationObserver(themePinas).observe(document.body, {childList:true});

// ===== animações por seção =====
const sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("sec-in"); sio.unobserve(e.target); } }), {threshold:.18});
document.querySelectorAll("section, .band, .brands, .foot, .marquee").forEach(s => sio.observe(s));
// citação da faixa e nome do rodapé: palavras sobem
document.querySelectorAll(".band .quote, .foot-big").forEach(el => { el.classList.remove("rv"); splitWords(el); io.observe(el); });
// depoimentos entram em cascata pela direita
document.querySelectorAll(".track").forEach(t => [...t.children].forEach((c,k) => c.style.setProperty("--k", k)));
// marquee acelera com a velocidade da rolagem
const mq = document.querySelector(".marquee-in");
if (mq && !RM){
  let ly = scrollY, v = 0;
  const anim = () => { const a = mq.getAnimations()[0]; v *= .9; if (a) a.playbackRate = 1 + Math.min(v, 6); requestAnimationFrame(anim); };
  addEventListener("scroll", () => { v = Math.abs(scrollY - ly) / 12; ly = scrollY; }, {passive:true}); anim();
}
