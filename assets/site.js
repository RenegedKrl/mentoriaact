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
const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>';

function header(){
  const links = NAV.map(([h,l]) => `<a href="${R}${h}" class="${PAGE===(h||"inicio")?"on":""}">${l}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
  <nav class="nav" id="nav"><div class="wrap nav-in">
    <a href="${R}" class="logo dp">Método <span>ACT</span></a>
    <div class="pill" id="pill">${links}</div>
    <a href="${R}programas/ipc/" class="btn btn-o nav-cta">Fazer o IPC</a>
    <button class="burger" id="burger" aria-label="Abrir menu">Menu</button>
  </div></nav>`);
}
function footer(){
  document.body.insertAdjacentHTML("beforeend", `
  <footer class="foot"><div class="wrap">
    <div class="foot-g">
      <div><div class="logo dp" style="color:var(--tx);margin-bottom:12px">Método <span style="color:var(--or)">ACT</span></div>
        <p style="max-width:300px">Diagnóstico e mentoria de carreira com Cleber Mello, 20 anos de liderança em multinacionais.</p></div>
      <div><h5>Site</h5><ul><li><a href="${R}sobre/">Sobre</a></li><li><a href="${R}metodo/">Método ACT</a></li><li><a href="${R}depoimentos/">Depoimentos</a></li><li><a href="${R}conteudo/">Conteúdo</a></li></ul></div>
      <div><h5>Programas</h5><ul><li><a href="${R}programas/ipc/">Diagnóstico IPC</a></li><li><a href="${R}programas/mentoria/">Mentoria ACT</a></li><li><a href="${R}programas/">Todos os programas</a></li></ul></div>
      <div><h5>Contato</h5><ul><li><a href="${WA}" target="_blank" rel="noopener">WhatsApp</a></li><li><a href="https://www.instagram.com/acelera.carreira/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.linkedin.com/in/clebersonmello" target="_blank" rel="noopener">LinkedIn</a></li></ul></div>
    </div>
    <div class="foot-b"><span>© 2026 Método ACT · metodoact.com</span><span>Todos os direitos reservados</span></div>
  </div></footer>
  <a class="wa-f" href="${WA}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ICON_WA}</a>
  <div class="lb" id="lb"><button class="arrow lb-x" aria-label="Fechar">✕</button><button class="arrow lb-p" aria-label="Anterior">←</button><img alt="Depoimento"><button class="arrow lb-n" aria-label="Próximo">→</button></div>`);
}

// Carrossel 3D: centro menor, pontas maiores
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
    const m = innerWidth < 640, gap = m ? Math.min(140, innerWidth*.32) : Math.min(270, innerWidth*.19);
    cards.forEach((c,i) => {
      let d = ((i-cur)%N+N)%N; if (d > N/2) d -= N; const a = Math.abs(d);
      const sc = a===0 ? .72 : a===1 ? .9 : 1.08, rot = -Math.sign(d)*(a===0?0:a===1?22:34);
      c.style.transform = `translate(-50%,-50%) translateX(${d*gap*(a>1?.92:1)}px) rotateY(${rot}deg) scale(${sc})`;
      c.style.zIndex = 10-a; c.style.opacity = a>2 ? 0 : 1; c.style.pointerEvents = a>2 ? "none" : "auto";
      c.classList.toggle("c", a===0);
    });
    if (t){ t.textContent = PROGRAMS[cur].t; s.textContent = PROGRAMS[cur].d; }
  }
  const go = i => { cur = (i+N)%N; render(); };
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
  const step = () => tr.firstElementChild.getBoundingClientRect().width + 16;
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

const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("solid", scrollY > 30); addEventListener("scroll", onScroll); onScroll();
document.getElementById("burger").onclick = () => document.getElementById("pill").classList.toggle("open");
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll(".rv").forEach(el => io.observe(el));
