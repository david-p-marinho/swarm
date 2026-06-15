/* ════════════════════════════════════════
   SWARM 79 — Scripts
   ════════════════════════════════════════ */

/* ─── Utilitário: scroll suave para um ID ─── */
function rolarPara(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}


/* ─── Sobre Nós: expandir/recolher texto ─── */
function toggleSobre(btn) {
  const expanded = document.getElementById('sobre-expanded');
  const isOpen = expanded.classList.toggle('is-open');
  btn.textContent = isOpen ? 'Fechar ←' : 'Sobre nós →';
}

/* ─── Notícias: expandir/recolher card ─── */
function toggleNews(id, btn) {
  const el = document.getElementById(id);
  const isOpen = el.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', isOpen);
  btn.innerHTML = isOpen
    ? 'Ver menos <i class="ti ti-arrow-up"></i>'
    : 'Ver mais <i class="ti ti-arrow-right"></i>';
}

/* ─── Carrossel de anúncios ─── */
const ADS = [
  { tag:"Parceiro",  title:"Sua empresa aqui",             desc:"Apoie a Swarm 79 e apareça para centenas de estudantes de tecnologia.",              cta:"Fale conosco", link:"mailto:equipeswarm79@gmail.com" },
  { tag:"Evento",    title:"Workshop de drones — Jul 2025",desc:"Inscreva-se no workshop prático de montagem e programação de drones da equipe.",    cta:"Inscreva-se",  link:"#" },
  { tag:"Loja",      title:"Camiseta oficial Swarm 79",    desc:"Camisetas e bonés com o logo oficial disponíveis por encomenda.",                    cta:"Encomendar",   link:"#" },
  { tag:"Parceiro",  title:"Patrocine um componente",      desc:"Seu logo no drone em competição. Apoie com peças ou financiamento direto.",          cta:"Entre em contato", link:"#" },
];

function buildCarousel() {
  const track = document.getElementById('cs-track');
  if (!track) return;
  [...ADS,...ADS,...ADS].forEach(ad => {         // duplica para loop infinito
    const c = document.createElement('div');
    c.className = 'cs-card';
    c.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px">
        <div class="cs-dot"></div>
        <span class="cs-tag">${ad.tag}</span>
      </div>
      <div class="cs-title">${ad.title}</div>
      <p class="cs-desc">${ad.desc}</p>
      <span class="cs-cta">${ad.cta} →</span>`;
    c.onclick = () => window.open(ad.link, '_blank');
    track.appendChild(c);
  });
}

document.addEventListener('DOMContentLoaded', buildCarousel);

/* ─── Hero background carousel ─── */
function initHeroBg() {
  const track = document.getElementById('hero-bg-track');
  if (!track) return;
  const imgs = track.querySelectorAll('img');
  let current = 0;
  setInterval(() => {
    current = (current + 1) % imgs.length;
    track.style.transform = `translateX(-${current * 100}%)`;
  }, 5000);// troca a cada 5s
}
document.addEventListener('DOMContentLoaded', initHeroBg);

const NEWS = [
  { id:1, tag:"Competição · 2025", title:"SAE Brasil Eletroquad 2025",    excerpt:"A equipe Swarm 79 se prepara para a edição 2025 do SAE Brasil Eletroquad, representando a UFS." },
  { id:2, tag:"Processo Seletivo", title:"PSEL 2026 — Vagas Abertas",     excerpt:"O processo seletivo da Swarm 79 para 2026 está aberto para estudantes da UFS." },
  { id:3, tag:"Tecnologia",        title:"Novo sistema de visão embarcado",excerpt:"A sub-área de Visão Computacional finalizou a integração do módulo de detecção em tempo real." },
  { id:4, tag:"Evento",            title:"Workshop de drones — Jul 2025",  excerpt:"Inscreva-se no workshop prático de montagem e programação de drones promovido pela equipe." },
  { id:5, tag:"Equipe",            title:"Novos membros no time 2025",     excerpt:"Após o PSEL, a Swarm 79 recebe 8 novos membros distribuídos entre as sub-áreas técnicas." },
];

function buildNews() {
  const list = document.getElementById('news-list');
  if (!list) return;
  NEWS.forEach(n => {
    const a = document.createElement('article');
    a.className = 'news-card';
    a.innerHTML = `
      <div class="news-img"><i class="ti ti-drone" aria-hidden="true"></i></div>
      <div class="news-body">
        <div class="news-tag">${n.tag}</div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-excerpt">${n.excerpt}</p>
        <a class="news-link" href="blog.html#noticia-${n.id}">
          Ver mais <i class="ti ti-arrow-right" aria-hidden="true"></i>
        </a>
      </div>`;
    list.appendChild(a);
  });
}
document.addEventListener('DOMContentLoaded', buildNews);

/* ─── Calendário / Agenda ─── */
const EVENTS = [
  { day:10, month:8,  year:2025, name:"SAE Brasil Eletroquad", desc:"Competição nacional de drones autônomos — São Paulo." },
  { day:15, month:3,  year:2026, name:"PSEL 2026 — Início",    desc:"Abertura do processo seletivo para novos membros da Swarm 79." },
  { day:20, month:7,  year:2025, name:"Workshop de Drones",    desc:"Evento prático de montagem e programação aberto à comunidade UFS." },
];

let calDate = new Date();

function renderCal() {
  const year  = calDate.getFullYear();
  const month = calDate.getMonth();
  const label = calDate.toLocaleDateString('pt-BR', { month:'long', year:'numeric' });
  document.getElementById('cal-label').textContent = label.charAt(0).toUpperCase() + label.slice(1);

  const grid  = document.getElementById('cal-grid');
  grid.innerHTML = '';

  const first     = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today     = new Date();

  // Dias do mês anterior
  const prevDays  = new Date(year, month, 0).getDate();
  for (let i = first - 1; i >= 0; i--) {
    const d = document.createElement('div');
    d.className = 'cal-day other-month';
    d.textContent = prevDays - i;
    grid.appendChild(d);
  }

  // Dias do mês atual
  for (let d = 1; d <= daysInMonth; d++) {
    const el    = document.createElement('div');
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const hasEv = EVENTS.some(e => e.day === d && e.month === month + 1 && e.year === year);
    el.className = 'cal-day' + (isToday ? ' today' : '') + (hasEv ? ' has-event' : '');
    el.textContent = d;
    if (hasEv) el.onclick = () => highlightEvent(d, month + 1, year);
    grid.appendChild(el);
  }
}

function renderEvents() {
  const container = document.getElementById('cal-events');
  const year  = calDate.getFullYear();
  const month = calDate.getMonth() + 1;
  const visible = EVENTS.filter(e => e.month === month && e.year === year);
  const list  = visible.length ? visible : EVENTS;

  container.innerHTML = list.map(e => `
    <div class="cal-event-card" id="ev-${e.day}-${e.month}-${e.year}">
      <div class="cal-event-date">
        <div class="day">${String(e.day).padStart(2,'0')}</div>
        <div class="mon">${new Date(e.year, e.month-1).toLocaleDateString('pt-BR',{month:'short'})}</div>
      </div>
      <div class="cal-event-body">
        <div class="name">${e.name}</div>
        <div class="desc">${e.desc}</div>
      </div>
    </div>`).join('');
}

function highlightEvent(day, month, year) {
  const el = document.getElementById(`ev-${day}-${month}-${year}`);
  if (el) el.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function calNav(dir) {
  calDate.setMonth(calDate.getMonth() + dir);
  renderCal();
  renderEvents();
}

document.addEventListener('DOMContentLoaded', () => { renderCal(); renderEvents(); });