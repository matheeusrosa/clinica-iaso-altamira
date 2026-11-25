/* ==========================================================================
   IASO — INSTITUTO ALTAMIRENSE DE SAÚDE E ODONTOLOGIA
   Interactive Engine: Lenis Smooth Scroll, GSAP, 3D Explorer, Agenda & Quiz
   ========================================================================== */

const IASO_CONFIG = {
  name: "IASO — Instituto Altamirense de Saúde e Odontologia",
  legalName: "IASO Instituto Altamirense de Saúde Odontologia Ltda",
  cnpj: "58.726.876/0001-08",
  address: "Av. Djalma Dutra, 1767 — Centro, Altamira - PA, CEP 68371-163",
  whatsapp: "5593991629079",
  phonePrimary: "(93) 99162-9079",
  phoneSecondary: "(93) 99100-8681",
  email: "iasoodontologia@hotmail.com",
  rating: "4,9",
  reviewsCount: 37
};

const EXPLORER_ITEMS = {
  lentes: {
    badge: "Estética Dental · Alta Naturalidade",
    title: "Lentes em Porcelana & Resina Estratificada",
    img: "assets/tooth-3d.webp",
    desc: "Planejamento Digital do Sorriso (DSD) com teste em boca (Mock-up) antes de iniciar. Corrigimos formato, cor e pequenos espaços preservando a estrutura saudável do dente.",
    meta1: "2 a 3 sessões",
    meta2: "Sem desgaste excessivo",
    meta3: "Brilho biomimético natural",
    specTitle: "Lentes de Contato Dental & Facetas"
  },
  implantes: {
    badge: "Reabilitação Fixa · Laboratório Integrado",
    title: "Implante de Titânio & Coroa em Zircônia",
    img: "assets/spec-implant.webp",
    desc: "Recupere a segurança de mastigar e sorrir. Realizamos a radiografia digital no próprio Instituto e confeccionamos próteses livres de metal com encaixe milimétrico.",
    meta1: "Raio-X no local",
    meta2: "Anestesia confortável",
    meta3: "Zircônia livre de metal",
    specTitle: "Implantes Dentários & Carga Imediata"
  },
  alinhadores: {
    badge: "Ortodontia Digital · Transparente",
    title: "Alinhadores Invisíveis Removíveis",
    img: "assets/spec-aligner.webp",
    desc: "Alinhe seus dentes sem bráquetes metálicos. Placas transparentes sob medida que você remove para comer e higienizar, com acompanhamento mensal rápido.",
    meta1: "Quase imperceptível",
    meta2: "Removível nas refeições",
    meta3: "Sem fios ou aftas",
    specTitle: "Alinhadores Invisíveis & Ortodontia"
  }
};

const SPECIALTIES = [
  {
    id: "lentes-porcelana",
    category: "estetica",
    categoryLabel: "Estética Dental",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>`,
    title: "Lentes de Contato Dental & Facetas",
    duration: "2 a 3 sessões · Planejamento DSD",
    summary: "Lâminas ultrafinas em porcelana ou resina de alta estética para corrigir cor, formato e alinhamento com naturalidade.",
    highlights: [
      "Teste do sorriso (Mock-up) antes de iniciar",
      "Preservação máxima da estrutura dental",
      "Brilho e translucidez idênticos ao esmalte natural"
    ],
    protocolSteps: [
      "Fotografia clínica e planejamento digital das proporções faciais.",
      "Ensaio estético em boca (Mock-up) para aprovação prévia do formato.",
      "Cimentação adesiva de alta precisão sob isolamento absoluto."
    ],
    indication: "Dentes desgastados, espaços (diastemas), alteração de cor ou rejuvenescimento do sorriso."
  },
  {
    id: "implantes-carga-imediata",
    category: "implantes",
    categoryLabel: "Implantes & Prótese",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6M9 4h6M8 8h8l-1 12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2L8 8z"/><path d="M9 12h6M9.5 16h5"/></svg>`,
    title: "Implantes Dentários & Carga Imediata",
    duration: "Planejamento Digital · Reabilitação Fixa",
    summary: "Reposição segura de um ou mais dentes com implantes de titânio e coroas em zircônia, devolvendo mastigação firme.",
    highlights: [
      "Raio-X digital realizado na própria clínica",
      "Técnica minimamente invasiva e anestesia confortável",
      "Laboratório de prótese integrado ao Instituto"
    ],
    protocolSteps: [
      "Avaliação clínica e exame radiográfico digital no próprio IASO.",
      "Instalação atraumática do implante com protocolo anestésico seguro.",
      "Reabilitação com coroa ou prótese fixa de ajuste milimétrico."
    ],
    indication: "Perda de um dente, múltiplos dentes ou substituição de dentadura por protocolo fixo."
  },
  {
    id: "protese-zirconia",
    category: "implantes",
    categoryLabel: "Implantes & Prótese",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Prótese Dentária & Reabilitação Oral",
    duration: "Laboratório Próprio · Alta Precisão",
    summary: "Coroas livres de metal (zircônia e porcelana) e próteses projetadas para devolver conforto ao mastigar e segurança ao falar.",
    highlights: [
      "Sem bordas metálicas escuras na gengiva",
      "Integração direta entre dentista e protético",
      "Ajuste anatômico da mordida (oclusão)"
    ],
    protocolSteps: [
      "Análise funcional da mordida e escaneamento/moldagem de precisão.",
      "Prova estética e funcional para validação do conforto e da cor.",
      "Instalação definitiva e orientação de manutenção preventiva."
    ],
    indication: "Troca de próteses antigas, dentes fraturados ou reabilitação completa da mastigação."
  },
  {
    id: "alinhadores-ortodontia",
    category: "ortodontia",
    categoryLabel: "Ortodontia",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M8 8v8M12 8v8M16 8v8"/></svg>`,
    title: "Alinhadores Invisíveis & Ortodontia",
    duration: "Transparente · Removível · Rápido",
    summary: "Alinhamento dental com placas transparentes removíveis ou aparelhos autoligados estéticos em safira.",
    highlights: [
      "Quase imperceptível no dia a dia e no trabalho",
      "Removível para comer e passar fio dental",
      "Documentação radiográfica feita no próprio Instituto"
    ],
    protocolSteps: [
      "Exame clínico e radiográfico digital na própria consulta.",
      "Planejamento sequencial das movimentações dentárias.",
      "Acompanhamento mensal objetivo e sem urgências com fios."
    ],
    indication: "Dentes desalinhados, apinhados, mordida cruzada ou preparo estético do sorriso."
  },
  {
    id: "clareamento-laser",
    category: "estetica",
    categoryLabel: "Estética Dental",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    title: "Clareamento Clínico a Laser & Combinado",
    duration: "1 a 2 sessões · Baixa Sensibilidade",
    summary: "Protocolo de clareamento com proteção gengival e controle de sensibilidade para um sorriso mais jovem e iluminado.",
    highlights: [
      "Dessensibilizante aplicado antes do gel clareador",
      "Resultado visível já na primeira sessão clínica",
      "Branco natural sem agredir o esmalte"
    ],
    protocolSteps: [
      "Limpeza ultrassônica prévia e avaliação da saúde do esmalte.",
      "Aplicação de barreira gengival protetora e sessão clínica assistida.",
      "Polimento de alto brilho e protocolo de manutenção."
    ],
    indication: "Dentes amarelados por café, vinho, idade ou preparo antes de restaurações estéticas."
  },
  {
    id: "harmonizacao-orofacial",
    category: "harmonizacao",
    categoryLabel: "Harmonização",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    title: "Harmonização Orofacial & Botox",
    duration: "45 min · Resultados Naturais",
    summary: "Equilíbrio entre o sorriso e os traços do rosto com toxina botulínica, preenchimento labial e bioestimuladores de colágeno.",
    highlights: [
      "Botox estético e terapêutico (alívio de bruxismo)",
      "Preenchimento labial delicado com ácido hialurônico",
      "Bioestimuladores para firmeza e viço da pele"
    ],
    protocolSteps: [
      "Mapeamento anatômico facial e alinhamento de expectativas.",
      "Aplicação com anestesia local/tópica e microcânulas atraumáticas.",
      "Retorno de avaliação em 15 dias incluído no atendimento."
    ],
    indication: "Linhas de expressão, sorriso gengival, bruxismo/apertamento, contorno labial e facial."
  },
  {
    id: "diagnostico-imagem",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    title: "Radiologia & Diagnóstico por Imagem",
    duration: "Na própria consulta · 100% Digital",
    summary: "Exames radiográficos digitais de alta definição e câmera intraoral HD realizados dentro da própria clínica.",
    highlights: [
      "Sem deslocamento para laboratórios externos",
      "Menor dose de radiação com sensores digitais",
      "Você vê o diagnóstico ampliado no monitor"
    ],
    protocolSteps: [
      "Posicionamento rápido com proteção radiológica completa.",
      "Captura digital instantânea em alta resolução.",
      "Análise conjunta entre paciente e especialista no consultório."
    ],
    indication: "Check-up preventivo, estudo para implantes, avaliação de canais, raízes e sisos."
  },
  {
    id: "endodontia-clinica",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    title: "Tratamento de Canal Mecanizado (Sem Dor)",
    duration: "Rápido · Frequentemente em 1 Sessão",
    summary: "Endodontia com tecnologia rotatória e localizador digital, aliviando a dor de forma rápida, segura e silenciosa.",
    highlights: [
      "Instrumentação mecanizada que reduz o tempo na cadeira",
      "Anestesia profunda e atendimento acolhedor",
      "Raio-X digital imediato durante o procedimento"
    ],
    protocolSteps: [
      "Diagnóstico digital preciso e anestesia local de alta eficácia.",
      "Desinfecção mecanizada sob isolamento absoluto.",
      "Restauração protetora imediata do dente tratado."
    ],
    indication: "Dor aguda, sensibilidade intensa ao frio/calor, cáries profundas ou traumas dentários."
  },
  {
    id: "saude-ambulatorial",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    title: "Check-up, Limpeza Ultrassônica & Saúde",
    duration: "Prevenção Completa · Atendimento Familiar",
    summary: "Profilaxia com ultrassom, saúde da gengiva, remoção segura de sisos e consultas ambulatoriais integradas.",
    highlights: [
      "Limpeza profunda com ultrassom e jato suave",
      "Prevenção de gengivite, tártaro e mau hálito",
      "Cuidado humanizado para adultos, crianças e idosos"
    ],
    protocolSteps: [
      "Inspeção completa com câmera intraoral e avaliação gengival.",
      "Remoção atraumática de tártaro e polimento coronário.",
      "Plano preventivo semestral personalizado."
    ],
    indication: "Manutenção a cada 6 meses, sangramento gengival, cirurgia de siso e saúde bucal familiar."
  }
];

let lenisInstance = null;
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Current wall-clock time in Altamira/PA (UTC-3, no DST), regardless of the visitor's timezone */
function altamiraNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Belem",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false
  }).formatToParts(new Date()).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});
  return new Date(+parts.year, +parts.month - 1, +parts.day, +parts.hour % 24, +parts.minute);
}

/* Agenda options, used to map any treatment name to a real <option> */
const SPEC_ALIASES = [
  { match: ["lente", "faceta", "estética", "estetica"], value: "Lentes de Contato Dental & Facetas" },
  { match: ["clareamento"], value: "Clareamento Clínico a Laser" },
  { match: ["implante"], value: "Implantes Dentários & Carga Imediata" },
  { match: ["prótese", "protese", "reabilitação"], value: "Prótese Dentária & Reabilitação Oral" },
  { match: ["alinha", "ortodon"], value: "Alinhadores Invisíveis & Ortodontia" },
  { match: ["harmoniza", "botox"], value: "Harmonização Orofacial & Botox" },
  { match: ["canal", "dor", "urgência", "endodon"], value: "Tratamento de Canal / Alívio de Dor" },
  { match: ["radiolog", "imagem"], value: "Radiologia & Diagnóstico por Imagem" },
  { match: ["check-up", "limpeza", "avaliação"], value: "Avaliação Geral & Check-up Digital" }
];

function resolveSpecOption(specTitle) {
  const t = (specTitle || "").toLowerCase();
  const exact = SPEC_ALIASES.find(a => a.value.toLowerCase() === t);
  if (exact) return exact.value;
  const hit = SPEC_ALIASES.find(a => a.match.some(m => t.includes(m)));
  return hit ? hit.value : "Avaliação Geral & Check-up Digital";
}

/* ───────── 1. Buttery-Smooth Lenis Scroll + Top Progress Bar ───────── */
function initLenisSmoothScroll() {
  const progressBar = document.getElementById("scrollProgressBar");

  const updateProgress = () => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  if (typeof Lenis === "undefined" || prefersReducedMotion) return;

  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5
  });

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    lenisInstance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Smooth anchor scrolling via Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl && lenisInstance) {
        e.preventDefault();
        lenisInstance.scrollTo(targetEl, { offset: headerOffset(), duration: 1.3 });
      }
    });
  });
}

/* ───────── 2. Live Opening Status (Altamira/PA Verified Hours) ───────── */
function updateLiveStatus() {
  const dot = document.getElementById("liveStatusDot");
  const text = document.getElementById("liveStatusText");
  if (!dot || !text) return;

  const now = altamiraNow();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  let msg = "";

  if (day >= 1 && day <= 5) {
    if (hour >= 8 && hour < 18) {
      isOpen = true;
      msg = "Aberto agora · Atendimento hoje até 18h";
    } else if (hour < 8) {
      msg = "Abre hoje às 08h · Agende online agora";
    } else {
      msg = day === 5
        ? "Encerrado agora · Abre sábado às 08h"
        : "Encerrado agora · Abre amanhã às 08h";
    }
  } else if (day === 6) {
    if (hour >= 8 && hour < 12.5) {
      isOpen = true;
      msg = "Aberto agora (sábado) · Atendimento até 12h30";
    } else if (hour < 8) {
      msg = "Abre hoje às 08h · Agende online agora";
    } else {
      msg = "Encerrado agora · Abre segunda às 08h";
    }
  } else {
    msg = "Domingo · Abre segunda às 08h · Agende online";
  }

  dot.classList.toggle("closed", !isOpen);
  text.textContent = msg;
}

/* ───────── 3. Interactive 3D Tooth & Treatment Explorer ───────── */
window.selectExplorerTab = function(key) {
  const data = EXPLORER_ITEMS[key];
  if (!data) return;

  document.querySelectorAll(".exp-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });

  const img = document.getElementById("explorerImg");
  const badge = document.getElementById("explorerBadge");
  const title = document.getElementById("explorerTitle");
  const desc = document.getElementById("explorerDesc");
  const m1 = document.getElementById("explorerMeta1");
  const m2 = document.getElementById("explorerMeta2");
  const m3 = document.getElementById("explorerMeta3");
  const cta = document.getElementById("explorerCta");

  if (typeof gsap !== "undefined" && img) {
    gsap.fromTo(img, { scale: 0.88, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.6)" });
  }

  if (img) img.src = data.img;
  if (badge) badge.textContent = data.badge;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.desc;
  if (m1) m1.textContent = "✓ " + data.meta1;
  if (m2) m2.textContent = "✓ " + data.meta2;
  if (m3) m3.textContent = "✓ " + data.meta3;
  if (cta) cta.dataset.spec = data.specTitle;
};

/* Pillar cards switch the explorer and bring it into view so the change is visible */
window.openExplorer = function(key) {
  selectExplorerTab(key);
  smoothScrollTo(document.querySelector(".explorer-card"));
};

/* ───────── 4. Specialties Grid, Cursor Spotlight & Filters ───────── */
function renderSpecialties(filter = "todos") {
  const grid = document.getElementById("specialtiesGrid");
  if (!grid) return;

  const list = filter === "todos"
    ? SPECIALTIES
    : SPECIALTIES.filter(item => item.category === filter);

  grid.innerHTML = list.map((item) => `
    <article class="spec-card" data-category="${item.category}">
      <div>
        <div class="spec-header">
          <div class="spec-icon-box" aria-hidden="true">${item.icon}</div>
          <span class="spec-badge">${item.categoryLabel}</span>
        </div>
        <h3 class="spec-title">${item.title}</h3>
        <p class="spec-desc">${item.summary}</p>
        <ul class="spec-bullets">
          ${item.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
      <div class="spec-footer">
        <button type="button" class="link-btn" onclick="openProtocolModal('${item.id}')">
          Como funciona
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
        <button type="button" class="btn btn-outline btn-sm" data-spec="${item.title}" onclick="scrollToAgendaWithSpec(this.dataset.spec)">
          Agendar
        </button>
      </div>
    </article>
  `).join("");

  // Attach cursor spotlight tracking to cards
  grid.querySelectorAll(".spec-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  });
}

function initSpecialtyFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderSpecialties(tab.dataset.filter);
    });
  });
}

function headerOffset() {
  const header = document.getElementById("siteHeader");
  return -((header ? header.offsetHeight : 80) + 12);
}

function smoothScrollTo(el) {
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: headerOffset(), duration: 1.2 });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY + headerOffset();
    window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }
}

window.scrollToAgendaWithSpec = function(specTitle) {
  const sel = document.getElementById("agSpecialty");
  if (sel && specTitle) sel.value = resolveSpecOption(specTitle);
  smoothScrollTo(document.getElementById("agenda"));
};

/* ───────── 5. Protocol Detail Modal ───────── */
window.openProtocolModal = function(specId) {
  const item = SPECIALTIES.find(s => s.id === specId);
  if (!item) return;

  const modal = document.getElementById("protocolModal");
  const content = document.getElementById("protocolModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="eyebrow">${item.categoryLabel} · Protocolo IASO</span>
    <h3 style="font-size:1.65rem;font-weight:800;line-height:1.2;margin-top:0.75rem;">${item.title}</h3>
    <p style="margin-top:0.35rem;font-size:0.84rem;color:var(--gold-700);font-weight:700;">⏱ ${item.duration}</p>
    <p style="margin-top:0.85rem;color:var(--ink-500);font-size:0.94rem;">${item.summary}</p>

    <div style="margin-top:1.25rem;padding:1.15rem;background:var(--bg-soft);border-radius:var(--radius-md);border:1px solid var(--border-subtle);">
      <h4 style="font-size:0.75rem;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--emerald-800);margin-bottom:0.75rem;">Passo a Passo Clínico</h4>
      <ol style="padding-left:1.15rem;display:flex;flex-direction:column;gap:0.5rem;font-size:0.88rem;color:var(--ink-700);">
        ${item.protocolSteps.map(step => `<li>${step}</li>`).join("")}
      </ol>
    </div>

    <div style="margin-top:1rem;padding:0.95rem 1.15rem;background:var(--gold-50);border-radius:var(--radius-md);border:1px solid var(--border-gold);font-size:0.84rem;color:var(--ink-700);">
      <strong>Quando é indicado:</strong> ${item.indication}
    </div>

    <div style="margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:0.65rem;justify-content:flex-end;">
      <button type="button" class="btn btn-outline btn-sm" onclick="closeProtocolModal()">Fechar</button>
      <button type="button" class="btn btn-primary btn-sm" data-spec="${item.title}" onclick="closeProtocolModal(); scrollToAgendaWithSpec(this.dataset.spec)">
        Escolher Horário para este Procedimento
      </button>
    </div>
  `;

  modal.classList.add("open");
  if (lenisInstance) lenisInstance.stop();
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
};

window.closeProtocolModal = function() {
  const modal = document.getElementById("protocolModal");
  if (!modal || !modal.classList.contains("open")) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (lenisInstance) lenisInstance.start();
};

/* ───────── 6. Interactive DSD Photo Comparator ───────── */
function initDsdSlider() {
  const range = document.getElementById("dsdRange");
  const beforeLayer = document.getElementById("dsdBeforeLayer");
  const handleLine = document.getElementById("dsdHandleLine");
  const handleKnob = document.getElementById("dsdHandleKnob");

  if (!range || !beforeLayer || !handleLine || !handleKnob) return;

  const updateSlider = (val) => {
    const pct = Math.max(5, Math.min(95, Number(val)));
    beforeLayer.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handleLine.style.left = `${pct}%`;
    handleKnob.style.left = `${pct}%`;
  };

  range.addEventListener("input", (e) => updateSlider(e.target.value));
  updateSlider(50);
}

/* ───────── 7. Interactive On-Page Visual Agenda & Slot Picker ───────── */
let selectedAgendaDay = "";
let selectedAgendaSlot = "09:30";

function initVisualAgenda() {
  const dayContainer = document.getElementById("agendaDays");
  const slotContainer = document.getElementById("agendaSlots");
  const form = document.getElementById("onPageAgendaForm");
  if (!dayContainer || !slotContainer) return;

  const weekNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const now = altamiraNow();
  const nowHour = now.getHours() + now.getMinutes() / 60;
  const days = [];
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let offset = 0;
  while (days.length < 6) {
    const dow = cursor.getDay();
    const closesAt = dow === 6 ? 12.5 : 18;
    // Skip Sundays and today when the clinic has already closed (no bookable slot left)
    const isToday = offset === 0;
    if (dow !== 0 && !(isToday && nowHour >= closesAt - 1)) {
      const w = weekNames[dow];
      const d = String(cursor.getDate()).padStart(2, "0");
      const mm = String(cursor.getMonth() + 1).padStart(2, "0");
      const m = monthNames[cursor.getMonth()];
      const tag = isToday ? "Hoje" : (offset === 1 ? "Amanhã" : w);
      days.push({ label: `${w}, ${d} ${m}`, tag, dayNum: `${d}/${mm}`, isToday, isSaturday: dow === 6 });
    }
    cursor.setDate(cursor.getDate() + 1);
    offset += 1;
  }

  const slotNote = document.getElementById("slotNote");

  const refreshSlots = (day) => {
    let firstEnabled = null;
    let activeStillValid = false;
    slotContainer.querySelectorAll(".slot-pill").forEach(btn => {
      const [h, m] = btn.dataset.slot.split(":").map(Number);
      const t = h + m / 60;
      const closedSaturday = day.isSaturday && t >= 12;
      const past = day.isToday && t <= nowHour + 0.5;
      btn.disabled = closedSaturday || past;
      btn.title = closedSaturday ? "Sábado: atendimento até 12h30" : (past ? "Horário já passou" : "");
      if (!btn.disabled && !firstEnabled) firstEnabled = btn;
      if (!btn.disabled && btn.dataset.slot === selectedAgendaSlot) activeStillValid = true;
    });
    if (!activeStillValid && firstEnabled) selectedAgendaSlot = firstEnabled.dataset.slot;
    slotContainer.querySelectorAll(".slot-pill").forEach(b => b.classList.toggle("active", b.dataset.slot === selectedAgendaSlot));
    if (slotNote) {
      slotNote.textContent = day.isSaturday
        ? "Aos sábados o atendimento é das 08h às 12h30."
        : "Horários sujeitos à confirmação da recepção.";
    }
  };

  selectedAgendaDay = days[0].label;

  dayContainer.innerHTML = days.map((d, i) => `
    <button type="button" class="day-pill ${i === 0 ? "active" : ""}" data-index="${i}" data-sat="${d.isSaturday}" aria-pressed="${i === 0}">
      <span class="d-week">${d.tag}</span>
      <span class="d-num">${d.dayNum}</span>
    </button>
  `).join("");

  dayContainer.querySelectorAll(".day-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      dayContainer.querySelectorAll(".day-pill").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      const day = days[Number(btn.dataset.index)];
      selectedAgendaDay = day.label;
      refreshSlots(day);
    });
  });

  slotContainer.querySelectorAll(".slot-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      slotContainer.querySelectorAll(".slot-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAgendaSlot = btn.dataset.slot;
    });
  });

  refreshSlots(days[0]);

  // Brazilian phone mask: (93) 99999-9999
  const phoneInput = document.getElementById("agPhone");
  const phoneHint = document.getElementById("agPhoneHint");
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      const digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
      let out = digits;
      if (digits.length > 2) out = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length > 7) out = `(${digits.slice(0, 2)}) ${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
      phoneInput.value = out;
      phoneInput.classList.remove("invalid");
      if (phoneHint) phoneHint.textContent = "";
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("agName").value.trim();
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const spec = document.getElementById("agSpecialty").value;
      const notes = document.getElementById("agNotes").value.trim();

      if (phone.replace(/\D/g, "").length < 10) {
        if (phoneInput) { phoneInput.classList.add("invalid"); phoneInput.focus(); }
        if (phoneHint) phoneHint.textContent = "Informe o WhatsApp com DDD, ex.: (93) 99999-9999";
        return;
      }

      const text = `Olá, equipe do IASO! Gostaria de agendar pelo site:\n\n` +
        `• *Paciente:* ${name}\n` +
        `• *WhatsApp:* ${phone}\n` +
        `• *Procedimento:* ${spec}\n` +
        `• *Data desejada:* ${selectedAgendaDay}\n` +
        `• *Horário preferido:* ${selectedAgendaSlot}\n` +
        (notes ? `• *Observação:* ${notes}\n` : "") +
        `\nAguardo a confirmação. Obrigado(a)!`;

      const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

      const feedback = document.getElementById("agendaFeedback");
      if (feedback) {
        const safeName = name.replace(/[<>&"]/g, "");
        feedback.style.display = "block";
        feedback.innerHTML = `
          <div role="status" style="margin-top:1rem;padding:1.25rem;background:var(--emerald-50);border:1px solid var(--emerald-800);border-radius:var(--radius-md);">
            <p style="font-size:0.75rem;font-weight:800;text-transform:uppercase;color:var(--emerald-800);">✓ Pedido pronto para envio</p>
            <p style="font-size:0.88rem;color:var(--ink-700);margin-top:0.3rem;">
              <strong>${safeName}</strong>, abrimos o WhatsApp com o seu pedido para <strong>${selectedAgendaDay} às ${selectedAgendaSlot}</strong>. É só tocar em enviar. Se não abriu, use o botão abaixo:
            </p>
            <div style="margin-top:0.85rem;display:flex;gap:0.65rem;flex-wrap:wrap;">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
                Enviar no WhatsApp (93) 99162-9079
              </a>
            </div>
          </div>
        `;
      }
      window.open(waUrl, "_blank", "noopener");
    });
  }
}

/* ───────── 8. Interactive 3-Step Triage Quiz ───────── */
const QUIZ_QUESTIONS = [
  {
    step: 1,
    title: "1. Qual é o seu objetivo principal hoje?",
    options: [
      { title: "Estética, Lentes ou Clareamento", sub: "Transformar a cor e harmonia do sorriso", rec: "Estética Dental & Planejamento DSD" },
      { title: "Implantes ou Prótese Fixa", sub: "Repor dentes com segurança e mastigação firme", rec: "Implantodontia & Prótese Integrada" },
      { title: "Alinhar Dentes (Ortodontia)", sub: "Alinhadores invisíveis ou aparelho estético", rec: "Ortodontia Digital IASO" },
      { title: "Harmonização Facial & Botox", sub: "Rejuvenescimento, lábios ou alívio de bruxismo", rec: "Harmonização Orofacial" },
      { title: "Dor de Dente, Canal ou Urgência", sub: "Alívio imediato com anestesia sem dor", rec: "Endodontia Mecanizada & Urgência" },
      { title: "Check-up, Limpeza & Raio-X", sub: "Prevenção completa e exames no mesmo local", rec: "Prevenção & Diagnóstico por Imagem" }
    ]
  },
  {
    step: 2,
    title: "2. Como prefere realizar sua avaliação?",
    options: [
      { title: "Consulta + Raio-X no Mesmo Dia", sub: "Já quero fazer exames na clínica e sair com o plano" },
      { title: "Atendimento Calmo (Tenho Receio)", sub: "Passo a passo gentil e tempo estendido" },
      { title: "Avaliação Executiva Objetiva", sub: "Pontualidade máxima para rotina corrida" }
    ]
  },
  {
    step: 3,
    title: "3. Qual o melhor turno para você?",
    options: [
      { title: "Manhã (08h às 12h)", sub: "Segunda a Sábado" },
      { title: "Tarde (14h às 18h)", sub: "Segunda a Sexta-feira" },
      { title: "Primeiro Horário Disponível", sub: "Prioridade na agenda da semana" }
    ]
  }
];

let quizState = { step: 0, answers: [] };

function renderQuiz() {
  const container = document.getElementById("quizBody");
  const badge = document.getElementById("quizStepBadge");
  if (!container) return;

  if (quizState.step >= QUIZ_QUESTIONS.length) {
    const [a1, a2, a3] = quizState.answers;
    if (badge) badge.textContent = "Resultado da Triagem";
    const msg = `Olá, Clínica IASO! Fiz a triagem rápida no site:\n• Objetivo: ${a1.title}\n• Núcleo indicado: ${a1.rec}\n• Formato: ${a2.title}\n• Turno: ${a3.title}\nGostaria de agendar minha avaliação na Av. Djalma Dutra, 1767.`;
    const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

    container.innerHTML = `
      <div style="background:var(--emerald-50);border:1px solid rgba(15,61,53,0.2);border-radius:var(--radius-lg);padding:1.5rem;">
        <span class="eyebrow">Indicação Clínica Personalizada</span>
        <h3 style="font-size:1.5rem;font-weight:800;margin-top:0.65rem;">Núcleo Recomendado: <span class="text-gradient-emerald">${a1.rec}</span></h3>
        <p style="font-size:0.9rem;color:var(--ink-700);margin-top:0.4rem;">
          Você pode realizar a avaliação clínica e os exames de imagem necessários no mesmo endereço (Av. Djalma Dutra, 1767 — Centro).
        </p>
        <div style="margin-top:1.15rem;display:flex;flex-wrap:wrap;gap:0.65rem;">
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            Agendar pelo WhatsApp com este Resumo
          </a>
          <button type="button" class="btn btn-outline btn-sm" data-spec="${a1.title}" onclick="scrollToAgendaWithSpec(this.dataset.spec)">
            Escolher Dia e Horário na Agenda
          </button>
          <button type="button" class="link-btn" style="margin-left:auto;" onclick="resetQuiz()">
            Refazer
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[quizState.step];
  if (badge) badge.textContent = `Passo ${q.step} de 3`;

  container.innerHTML = `
    <h3 style="font-size:1.35rem;font-weight:800;">${q.title}</h3>
    <div class="quiz-options-grid">
      ${q.options.map((opt, idx) => `
        <button type="button" class="quiz-opt" onclick="selectQuizOption(${idx})">
          <span style="font-size:0.92rem;font-weight:800;color:var(--ink-950);">${opt.title}</span>
          <span style="font-size:0.78rem;color:var(--ink-500);">${opt.sub}</span>
        </button>
      `).join("")}
    </div>
    ${quizState.step > 0 ? `<button type="button" class="link-btn" style="margin-top:1rem;" onclick="quizBack()">← Voltar</button>` : ""}
  `;
}

window.quizBack = function() {
  if (quizState.step === 0) return;
  quizState.step -= 1;
  quizState.answers.pop();
  renderQuiz();
};

window.selectQuizOption = function(idx) {
  quizState.answers.push(QUIZ_QUESTIONS[quizState.step].options[idx]);
  quizState.step += 1;
  renderQuiz();
};

window.resetQuiz = function() {
  quizState = { step: 0, answers: [] };
  renderQuiz();
};

/* ───────── 9. Floating Concierge Drawer & Quick Booking ───────── */
window.toggleConcierge = function(force) {
  const popup = document.getElementById("conciergePopup");
  const fab = document.getElementById("conciergeFab");
  if (!popup) return;
  const open = typeof force === "boolean" ? force : !popup.classList.contains("open");
  popup.classList.toggle("open", open);
  if (fab) fab.setAttribute("aria-expanded", String(open));
};

window.sendQuickConcierge = function(topic) {
  const msg = `Olá, recepção do IASO! Estou no site e gostaria de informações/agendamento sobre: ${topic}.`;
  window.open(`https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
};

window.triggerQuickBooking = function() {
  const spec = document.getElementById("qbSpecialty")?.value || "";
  const shift = document.getElementById("qbShift")?.value || "";
  // Carry the preferred period into the agenda: pick a Saturday if asked, then the first free slot in that period
  const dayPills = [...document.querySelectorAll("#agendaDays .day-pill")];
  if (shift.startsWith("Sábado")) {
    dayPills.find(b => b.dataset.sat === "true")?.click();
  } else if (shift.startsWith("Tarde")) {
    // Afternoons exist only Mon–Fri: move to the first weekday that still has an afternoon slot
    const active = dayPills.find(b => b.classList.contains("active"));
    const hasAfternoon = () => [...document.querySelectorAll("#agendaSlots .slot-pill")]
      .some(b => !b.disabled && parseInt(b.dataset.slot, 10) >= 14);
    if (active?.dataset.sat === "true" || !hasAfternoon()) {
      for (const pill of dayPills) {
        if (pill.dataset.sat === "true") continue;
        pill.click();
        if (hasAfternoon()) break;
      }
    }
  }
  const wantAfternoon = shift.startsWith("Tarde");
  const slot = [...document.querySelectorAll("#agendaSlots .slot-pill")]
    .find(b => !b.disabled && (wantAfternoon ? parseInt(b.dataset.slot, 10) >= 14 : parseInt(b.dataset.slot, 10) < 12));
  if (slot) slot.click();
  scrollToAgendaWithSpec(spec);
};

/* ───────── 10. Elegant GSAP + ScrollTrigger Animations ───────── */
function initGsapAnimations() {
  if (typeof gsap === "undefined") return;
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.85 } });
  tl.from(".gsap-hero-badge", { y: 18, opacity: 0 })
    .from(".hero-title", { y: 26, opacity: 0 }, "-=0.6")
    .from(".hero-lead", { y: 20, opacity: 0 }, "-=0.6")
    .from(".hero-cta-group", { y: 18, opacity: 0 }, "-=0.6")
    .from(".hero-social-proof", { y: 16, opacity: 0 }, "-=0.6")
    .from(".hero-main-card", { scale: 0.96, opacity: 0, duration: 1 }, "-=0.8")
    .from(".hero-float-card", { y: 20, opacity: 0, stagger: 0.15 }, "-=0.6")
    .from(".quick-bar", { y: 24, opacity: 0 }, "-=0.5");

  if (!prefersReducedMotion) gsap.to(".gsap-float", {
    y: -6,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.25
  });

  if (typeof ScrollTrigger !== "undefined") {
    gsap.utils.toArray(".gsap-reveal").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 87%",
          toggleActions: "play none none none"
        },
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }
}

/* ───────── 11. Navigation & Modals ───────── */
function initNavigation() {
  const header = document.getElementById("siteHeader");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });

  const setMenu = (open) => {
    if (!navLinks || !mobileBtn) return;
    navLinks.classList.toggle("mobile-open", open);
    mobileBtn.setAttribute("aria-expanded", String(open));
    mobileBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenu(!navLinks.classList.contains("mobile-open"));
    });
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  }

  // Close menus/popups when clicking elsewhere
  document.addEventListener("click", (e) => {
    if (navLinks && navLinks.classList.contains("mobile-open") && !navLinks.contains(e.target)) setMenu(false);
    const widget = document.querySelector(".concierge-widget");
    if (widget && !widget.contains(e.target)) toggleConcierge(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    setMenu(false);
    toggleConcierge(false);
    closeProtocolModal();
  });

  // Highlight the menu item of the section in view
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));
  }

  document.querySelectorAll(".modal-backdrop").forEach(b => {
    b.addEventListener("click", (e) => {
      if (e.target === b) closeProtocolModal();
    });
  });

  // Keyboard support for clickable cards
  document.querySelectorAll('[role="button"][tabindex="0"]').forEach(el => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLenisSmoothScroll();
  updateLiveStatus();
  renderSpecialties("todos");
  initSpecialtyFilters();
  initDsdSlider();
  initVisualAgenda();
  renderQuiz();
  initNavigation();
  initGsapAnimations();
});
