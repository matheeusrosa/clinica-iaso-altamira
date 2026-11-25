/* ==========================================================================
   IASO — INSTITUTO ALTAMIRENSE DE SAÚDE E ODONTOLOGIA
   Interactive Engine: GSAP Animations, Visual Agenda, DSD Slider & Quiz
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

/* ───────── 1. Live Opening Status (Google Maps Verified Hours) ───────── */
function updateLiveStatus() {
  const dot = document.getElementById("liveStatusDot");
  const text = document.getElementById("liveStatusText");
  if (!dot || !text) return;

  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1..5=Mon..Fri, 6=Sat
  const hour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  let msg = "";

  if (day >= 1 && day <= 5) {
    if (hour >= 8 && hour < 18) {
      isOpen = true;
      msg = "Aberto agora em Altamira · Atendimento hoje até 18h";
    } else if (hour < 8) {
      msg = "Abre hoje às 08h00 · Agendamento online disponível";
    } else {
      msg = "Encerrado hoje · Abre amanhã às 08h00";
    }
  } else if (day === 6) {
    if (hour >= 8 && hour < 12.5) {
      isOpen = true;
      msg = "Aberto agora (Sábado) · Atendimento até 12h30";
    } else {
      msg = "Fim de semana · Agendamento online aberto 24h";
    }
  } else {
    msg = "Domingo · Agende online para Segunda-feira às 08h";
  }

  dot.classList.toggle("closed", !isOpen);
  text.textContent = msg;
}

/* ───────── 2. Specialties Grid & Filters ───────── */
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
        <button type="button" class="btn btn-outline btn-sm" onclick="scrollToAgendaWithSpec('${item.title}')">
          Agendar
        </button>
      </div>
    </article>
  `).join("");
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

window.scrollToAgendaWithSpec = function(specTitle) {
  const sel = document.getElementById("agSpecialty");
  if (sel && specTitle) {
    let found = false;
    for (const opt of sel.options) {
      if (opt.value.toLowerCase().includes(specTitle.toLowerCase().slice(0, 8)) ||
          specTitle.toLowerCase().includes(opt.value.toLowerCase().slice(0, 8))) {
        sel.value = opt.value;
        found = true;
        break;
      }
    }
    if (!found) {
      const o = document.createElement("option");
      o.value = specTitle;
      o.textContent = specTitle;
      sel.appendChild(o);
      sel.value = specTitle;
    }
  }
  const agendaEl = document.getElementById("agenda");
  if (agendaEl) {
    agendaEl.scrollIntoView({ behavior: "smooth" });
  } else {
    openBookingModal(specTitle);
  }
};

/* ───────── 3. Protocol Detail Modal ───────── */
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
      <button type="button" class="btn btn-primary btn-sm" onclick="closeProtocolModal(); scrollToAgendaWithSpec('${item.title}')">
        Escolher Horário para este Procedimento
      </button>
    </div>
  `;

  modal.classList.add("open");
};

window.closeProtocolModal = function() {
  const modal = document.getElementById("protocolModal");
  if (modal) modal.classList.remove("open");
};

/* ───────── 4. Interactive DSD Photo Comparator ───────── */
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

/* ───────── 5. Interactive On-Page Visual Agenda & Slot Picker ───────── */
let selectedAgendaDay = "";
let selectedAgendaSlot = "09:30";

function initVisualAgenda() {
  const dayContainer = document.getElementById("agendaDays");
  const slotContainer = document.getElementById("agendaSlots");
  const form = document.getElementById("onPageAgendaForm");
  if (!dayContainer || !slotContainer) return;

  const weekNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const days = [];
  let cursor = new Date();
  while (days.length < 5) {
    if (cursor.getDay() !== 0) { // Skip Sundays
      const w = weekNames[cursor.getDay()];
      const d = String(cursor.getDate()).padStart(2, "0");
      const m = monthNames[cursor.getMonth()];
      days.push({ label: `${w}, ${d} ${m}`, shortWeek: w, dayNum: `${d}/${cursor.getMonth() + 1}` });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  selectedAgendaDay = days[0].label;

  dayContainer.innerHTML = days.map((d, i) => `
    <button type="button" class="day-pill ${i === 0 ? "active" : ""}" data-day="${d.label}">
      <span class="d-week">${i === 0 ? "Hoje/Próx" : d.shortWeek}</span>
      <span class="d-num">${d.dayNum}</span>
    </button>
  `).join("");

  dayContainer.querySelectorAll(".day-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      dayContainer.querySelectorAll(".day-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAgendaDay = btn.dataset.day;
    });
  });

  slotContainer.querySelectorAll(".slot-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      slotContainer.querySelectorAll(".slot-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAgendaSlot = btn.dataset.slot;
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("agName").value.trim();
      const phone = document.getElementById("agPhone").value.trim();
      const spec = document.getElementById("agSpecialty").value;
      const notes = document.getElementById("agNotes").value.trim();

      const protocol = "IASO-" + Math.floor(100000 + Math.random() * 900000);
      const text = `Olá, equipe da Clínica IASO! Fiz meu agendamento na agenda online do site:\n\n` +
        `• *Protocolo:* #${protocol}\n` +
        `• *Paciente:* ${name}\n` +
        `• *WhatsApp:* ${phone}\n` +
        `• *Procedimento:* ${spec}\n` +
        `• *Data solicitada:* ${selectedAgendaDay}\n` +
        `• *Horário preferido:* ${selectedAgendaSlot}\n` +
        (notes ? `• *Observação:* ${notes}\n` : "") +
        `\nAguardo confirmação na unidade Av. Djalma Dutra, 1767.`;

      const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

      const feedback = document.getElementById("agendaFeedback");
      if (feedback) {
        feedback.style.display = "block";
        feedback.innerHTML = `
          <div style="margin-top:1rem;padding:1.25rem;background:var(--emerald-50);border:1px solid var(--emerald-800);border-radius:var(--radius-md);">
            <p style="font-size:0.75rem;font-weight:800;text-transform:uppercase;color:var(--emerald-800);">✓ Horário Pré-Reservado · Protocolo #${protocol}</p>
            <p style="font-size:0.88rem;color:var(--ink-700);margin-top:0.3rem;">
              <strong>${name}</strong>, sua solicitação para <strong>${selectedAgendaDay} às ${selectedAgendaSlot}</strong> (${spec}) está pronta. Clique para enviar à recepção:
            </p>
            <div style="margin-top:0.85rem;display:flex;gap:0.65rem;flex-wrap:wrap;">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                Confirmar no WhatsApp (93) 99162-9079
              </a>
            </div>
          </div>
        `;
      }
      window.open(waUrl, "_blank", "noopener");
    });
  }
}

/* ───────── 6. Interactive 3-Step Triage Quiz ───────── */
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
          <button type="button" class="btn btn-outline btn-sm" onclick="scrollToAgendaWithSpec('${a1.title}')">
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
  `;
}

window.selectQuizOption = function(idx) {
  quizState.answers.push(QUIZ_QUESTIONS[quizState.step].options[idx]);
  quizState.step += 1;
  renderQuiz();
};

window.resetQuiz = function() {
  quizState = { step: 0, answers: [] };
  renderQuiz();
};

/* ───────── 7. Modal Booking & Quick Bar ───────── */
window.openBookingModal = function(specialty = "", shift = "") {
  const modal = document.getElementById("bookingModal");
  const specSelect = document.getElementById("bookSpecialty");
  const shiftSelect = document.getElementById("bookShift");
  if (!modal) return;

  if (specSelect && specialty) {
    for (const opt of specSelect.options) {
      if (opt.value.toLowerCase().includes(specialty.toLowerCase().slice(0, 8))) {
        specSelect.value = opt.value;
        break;
      }
    }
  }
  if (shiftSelect && shift) {
    for (const opt of shiftSelect.options) {
      if (shift.toLowerCase().includes(opt.value.toLowerCase().slice(0, 5))) {
        shiftSelect.value = opt.value;
        break;
      }
    }
  }
  modal.classList.add("open");
};

window.closeBookingModal = function() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove("open");
};

window.triggerQuickBooking = function() {
  const spec = document.getElementById("qbSpecialty")?.value || "";
  scrollToAgendaWithSpec(spec);
};

function initModalForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bookName").value.trim();
    const phone = document.getElementById("bookPhone").value.trim();
    const spec = document.getElementById("bookSpecialty").value;
    const shift = document.getElementById("bookShift").value;

    const protocol = "IASO-" + Math.floor(100000 + Math.random() * 900000);
    const waText = `Olá, Clínica IASO! Gostaria de agendar uma consulta:\n• Protocolo: #${protocol}\n• Paciente: ${name}\n• Telefone: ${phone}\n• Especialidade: ${spec}\n• Turno: ${shift}`;
    const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener");
    closeBookingModal();
  });
}

/* ───────── 8. Elegant GSAP + ScrollTrigger Animations ───────── */
function initGsapAnimations() {
  if (typeof gsap === "undefined") return;
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero entrance timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.85 } });
  tl.from(".gsap-hero-badge", { y: 18, opacity: 0 })
    .from(".hero-title", { y: 26, opacity: 0 }, "-=0.6")
    .from(".hero-lead", { y: 20, opacity: 0 }, "-=0.6")
    .from(".hero-cta-group", { y: 18, opacity: 0 }, "-=0.6")
    .from(".hero-social-proof", { y: 16, opacity: 0 }, "-=0.6")
    .from(".hero-main-card", { scale: 0.96, opacity: 0, duration: 1 }, "-=0.8")
    .from(".hero-float-card", { y: 20, opacity: 0, stagger: 0.15 }, "-=0.6")
    .from(".quick-bar", { y: 24, opacity: 0 }, "-=0.5");

  // Subtle floating motion for 3D cutouts
  gsap.to(".gsap-float", {
    y: -7,
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.3
  });

  // ScrollTrigger section reveals
  if (typeof ScrollTrigger !== "undefined") {
    gsap.utils.toArray(".gsap-reveal").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          toggleActions: "play none none none"
        },
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }
}

/* ───────── 9. Navigation & Modals ───────── */
function initNavigation() {
  const header = document.getElementById("siteHeader");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => navLinks.classList.toggle("mobile-open"));
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  document.querySelectorAll(".modal-backdrop").forEach(b => {
    b.addEventListener("click", (e) => {
      if (e.target === b) b.classList.remove("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateLiveStatus();
  renderSpecialties("todos");
  initSpecialtyFilters();
  initDsdSlider();
  initVisualAgenda();
  renderQuiz();
  initModalForm();
  initNavigation();
  initGsapAnimations();
});
