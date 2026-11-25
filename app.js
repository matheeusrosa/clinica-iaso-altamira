/* ==========================================================================
   IASO — INSTITUTO ALTAMIRENSE DE SAÚDE E ODONTOLOGIA
   Interactive Clinical Engine: Specialties, DSD Comparator, Quiz & Booking
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
    categoryLabel: "Estética & Sorriso",
    title: "Lentes de Contato Dental & Facetas Cerâmicas",
    duration: "2 a 3 sessões · Planejamento DSD",
    summary: "Lâminas ultradelgadas em porcelana pura ou resina nanoparticulada de alta translucidez, desenhadas digitalmente para harmonizar cor, forma e proporção áurea do sorriso.",
    highlights: [
      "Ensaio estético (Mock-up) antes de iniciar",
      "Preservação máxima da estrutura dental sadia",
      "Naturalidade óptica e estabilidade de cor a longo prazo"
    ],
    protocolSteps: [
      "Escaneamento fotográfico facial e intraoral com estudo de visagismo.",
      "Teste do novo sorriso em boca (Mock-up) para aprovação estética prévia.",
      "Cimentação adesiva sob isolamento absoluto e microscopia/lupas de magnificação."
    ],
    indication: "Fechamento de diastemas, dentes desgastados, alterações de forma ou rejuvenescimento do sorriso."
  },
  {
    id: "implantes-carga-imediata",
    category: "implantes",
    categoryLabel: "Implantes & Prótese",
    title: "Implantodontia Guiada & Carga Imediata",
    duration: "Planejamento 3D · Reabilitação fixa",
    summary: "Reposição de um ou múltiplos dentes com implantes de titânio de grau médico e coroas em zircônia ou porcelana, devolvendo segurança mastigatória e estética natural.",
    highlights: [
      "Radiologia digital no próprio Instituto para avaliação óssea",
      "Cirurgia minimamente invasiva e pós-operatório confortável",
      "Laboratório de prótese integrado (CNAE 3250-7/06)"
    ],
    protocolSteps: [
      "Avaliação clínica e exame radiográfico digital realizado na própria clínica.",
      "Planejamento cirúrgico individualizado com anestesia local de alta eficácia.",
      "Instalação da prótese provisória ou definitiva com ajuste oclusal milimétrico."
    ],
    indication: "Ausência unitária, parcial ou reabilitação total com protocolo fixo sobre implantes."
  },
  {
    id: "protese-zirconia",
    category: "implantes",
    categoryLabel: "Implantes & Prótese",
    title: "Prótese Dentária & Reabilitação Oral Completa",
    duration: "Laboratório Integrado · Alta Precisão",
    summary: "Coroas livres de metal (metal-free), próteses fixas, sobre implantes e reabilitações oclusais desenhadas para restituir a dimensão vertical e o conforto ao sorrir e mastigar.",
    highlights: [
      "Integração direta entre cirurgião-dentista e laboratório protético",
      "Materiais cerâmicos biocompatíveis sem bordas escuras",
      "Ajuste anatômico personalizado para fonética e conforto"
    ],
    protocolSteps: [
      "Diagnóstico funcional da mordida (oclusão) e articulação (ATM).",
      "Provas estéticas e funcionais intermediárias para validação do paciente.",
      "Entrega definitiva com protocolo de manutenção preventiva semestral."
    ],
    indication: "Substituição de próteses antigas, dentes extensamente restaurados ou reabilitação mastigatória."
  },
  {
    id: "alinhadores-ortodontia",
    category: "ortodontia",
    categoryLabel: "Ortodontia",
    title: "Alinhadores Invisíveis & Ortodontia Autoligada",
    duration: "Acompanhamento mensal · Estético",
    summary: "Correção do alinhamento dental e da mordida através de alinhadores transparentes removíveis ou aparelhos autoligados estéticos em safira, com previsibilidade e higiene facilitada.",
    highlights: [
      "Documentação e radiografia digital sem deslocamentos externos",
      "Opções quase imperceptíveis para adultos e executivos",
      "Menor tempo de cadeira e forças biológicas suaves"
    ],
    protocolSteps: [
      "Levantamento radiográfico e fotográfico completo no núcleo de imagem IASO.",
      "Apresentação do plano de movimentação ortodôntica e cronograma estimado.",
      "Consultas periódicas pontuais de evolução e profilaxia."
    ],
    indication: "Apinhamento dental, mordida cruzada, sobremordida ou alinhamento pré-reabilitação estética."
  },
  {
    id: "clareamento-laser",
    category: "estetica",
    categoryLabel: "Estética & Sorriso",
    title: "Clareamento Dental Clínico & Combinado",
    duration: "1 a 2 sessões + protocolo assistido",
    summary: "Protocolo seguro de clareamento com controle rigoroso de sensibilidade, combinando tecnologia de ativação em consultório e moldeiras personalizadas de alta adaptação.",
    highlights: [
      "Dessensibilização prévia e proteção gengival fotopolimerizável",
      "Branco luminoso e natural, respeitando a vitalidade do esmalte",
      "Kit personalizado com supervisão clínica direta"
    ],
    protocolSteps: [
      "Profilaxia ultrassônica com jato de bicarbonato/glicina e avaliação do esmalte.",
      "Sessão clínica com barreira gengival protetora e gel clareador de pH neutro.",
      "Acompanhamento de matiz e polimento final de alto brilho."
    ],
    indication: "Escurecimento dental por pigmentos alimentares, idade ou preparo para lentes e restaurações."
  },
  {
    id: "harmonizacao-orofacial",
    category: "harmonizacao",
    categoryLabel: "Harmonização Facial",
    title: "Harmonização Orofacial & Estética Integrada",
    duration: "Sessão de 45 a 60 min · Resultados sutis",
    summary: "Procedimentos estéticos e terapêuticos faciais que equilibram o sorriso e as proporções do rosto com naturalidade, elegância e respeito à anatomia individual.",
    highlights: [
      "Toxina botulínica estética e funcional (bruxismo e sorriso gengival)",
      "Preenchimento labial e estrutural com ácido hialurônico premium",
      "Bioestimuladores de colágeno para firmeza e qualidade da pele"
    ],
    protocolSteps: [
      "Mapeamento anatômico facial e análise dinâmica da expressão.",
      "Aplicação confortável sob anestesia tópica/local com microcânulas atraumáticas.",
      "Consulta de revisão em 15 dias incluída no protocolo."
    ],
    indication: "Linhas de expressão, assimetria ou perda de volume labial, bruxismo, cefaleia tensional e contorno facial."
  },
  {
    id: "diagnostico-imagem",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    title: "Diagnóstico por Imagem & Radiologia Digital",
    duration: "Resultado imediato · No próprio Instituto",
    summary: "Exames radiográficos digitais de alta definição com baixa dose de radiação realizados dentro da própria clínica, agilizando diagnósticos precisos na mesma consulta.",
    highlights: [
      "CNAE habilitado para diagnóstico por imagem (8640-2/05)",
      "Sensores digitais instantâneos sem espera de revelação química",
      "Câmera intraoral HD para o paciente visualizar cada detalhe na tela"
    ],
    protocolSteps: [
      "Posicionamento ergonômico com proteção radiológica completa.",
      "Captura digital instantânea com processamento de contraste em alta resolução.",
      "Explicação visual do exame pelo especialista diretamente no monitor clínico."
    ],
    indication: "Check-up preventivo, planejamento de implantes, avaliação de canais, sisos e cáries ocultas."
  },
  {
    id: "endodontia-clinica",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    title: "Endodontia Mecanizada & Alívio Imediato da Dor",
    duration: "Frequentemente em sessão única",
    summary: "Tratamento e retratamento de canal com instrumentação rotatória mecanizada e localizador apical eletrônico, proporcionando rapidez, precisão e total conforto ao paciente.",
    highlights: [
      "Tecnologia rotatória que reduz drasticamente o tempo de consulta",
      "Protocolo anestésico profundo para atendimento sem dor",
      "Radiografia digital periapical imediata em cada etapa"
    ],
    protocolSteps: [
      "Diagnóstico radiográfico digital e anestesia local de ação rápida.",
      "Desinfecção mecanizada dos canais radiculares sob isolamento absoluto.",
      "Blindagem coronária imediata para proteger o dente reabilitado."
    ],
    indication: "Dor de dente aguda, sensibilidade prolongada ao frio/calor, fraturas ou infecções endodônticas."
  },
  {
    id: "saude-ambulatorial",
    category: "imagem",
    categoryLabel: "Imagem & Saúde",
    title: "Prevenção, Periodontia & Saúde Integrada",
    duration: "Check-up completo · Atendimento humanizado",
    summary: "Cuidado integral da saúde gengival, profilaxia ultrassônica, cirurgia oral menor (sisos) e atendimento ambulatorial multiprofissional em ambiente clínico acolhedor.",
    highlights: [
      "Atendimento médico ambulatorial e multiprofissional integrado",
      "Tratamento especializado de gengivite, periodontite e halitose",
      "Programa de manutenção preventiva para famílias em Altamira"
    ],
    protocolSteps: [
      "Anamnese integral de saúde sistêmica e inspeção clínica detalhada.",
      "Remoção atraumática de tártaro e biofilme por ultrassom odontológico.",
      "Orientação personalizada de higiene e plano preventivo anual."
    ],
    indication: "Check-up semestral, sangramento gengival, extração segura de sisos e acompanhamento familiar."
  }
];

const DSD_CASES = [
  {
    id: "reabilitacao",
    title: "Reabilitação Estética com Lentes Cerâmicas",
    subtitle: "Simulação ilustrativa de Planejamento Digital do Sorriso (DSD)",
    beforeLabel: "Fase 01 · Estudo Inicial & Desgaste Natural",
    afterLabel: "Fase 02 · Harmonia, Proporção Áurea & Luminosidade",
    metrics: "Proporção 80% central · Cor Natural B1/BL4 · Gengiva Saudável"
  },
  {
    id: "alinhamento",
    title: "Alinhamento Ortodôntico + Clareamento Clínico",
    subtitle: "Simulação ilustrativa de Nivelamento de Arco e Matiz",
    beforeLabel: "Fase 01 · Assimetria de Corredor Bucal",
    afterLabel: "Fase 02 · Arco Alinhado & Matiz Equilibrado",
    metrics: "Simetria de linha média · Curva do sorriso harmônica"
  }
];

/* ───────── 1. Live Opening Status (Altamira/PA UTC-3) ───────── */
function updateLiveStatus() {
  const dot = document.getElementById("liveStatusDot");
  const text = document.getElementById("liveStatusText");
  if (!dot || !text) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1..5 = Mon..Fri, 6 = Sat
  const hour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  let statusMsg = "";

  if (day >= 1 && day <= 5) {
    if (hour >= 8 && hour < 19) {
      isOpen = true;
      statusMsg = "Aberto agora em Altamira · Atendimento hoje até 19h";
    } else if (hour < 8) {
      statusMsg = "Abre hoje às 08h00 · Agendamento online 24h";
    } else {
      statusMsg = "Atendimento encerrado hoje · Abre amanhã às 08h00";
    }
  } else if (day === 6) {
    if (hour >= 8 && hour < 13) {
      isOpen = true;
      statusMsg = "Aberto agora (Sábado) · Atendimento até 13h";
    } else {
      statusMsg = "Fim de semana · Pré-agendamento online aberto 24h";
    }
  } else {
    statusMsg = "Domingo · Pré-agendamento online aberto para Segunda às 08h";
  }

  dot.classList.toggle("closed", !isOpen);
  text.textContent = statusMsg;
}

/* ───────── 2. Render Specialties Grid & Filter ───────── */
function renderSpecialties(filter = "todos") {
  const grid = document.getElementById("specialtiesGrid");
  if (!grid) return;

  const list = filter === "todos"
    ? SPECIALTIES
    : SPECIALTIES.filter(item => item.category === filter);

  grid.innerHTML = list.map((item, idx) => `
    <article class="spec-card" data-category="${item.category}">
      <div>
        <div class="spec-top">
          <div class="spec-icon-wrap" aria-hidden="true">
            <span class="font-mono" style="font-size:0.78rem;font-weight:700;">0${idx + 1}</span>
          </div>
          <span class="spec-tag">${item.categoryLabel}</span>
        </div>
        <h3 class="spec-title">${item.title}</h3>
        <p class="spec-desc">${item.summary}</p>
        <ul class="spec-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
      <div class="spec-actions">
        <button type="button" class="link-btn" onclick="openProtocolModal('${item.id}')">
          Ver protocolo clínico
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
        <button type="button" class="btn btn-outline btn-sm" onclick="openBookingModal('${item.title}')">
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

/* ───────── 3. Protocol Detail Modal ───────── */
window.openProtocolModal = function(specId) {
  const item = SPECIALTIES.find(s => s.id === specId);
  if (!item) return;

  const modal = document.getElementById("protocolModal");
  const content = document.getElementById("protocolModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="eyebrow">${item.categoryLabel} · Protocolo Clínico IASO</span>
    <h3 class="font-serif" style="font-size:2.2rem;line-height:1.12;margin-top:0.6rem;">${item.title}</h3>
    <p style="margin-top:0.4rem;font-size:0.84rem;color:var(--gold-700);font-weight:600;">⏱ ${item.duration}</p>
    <p style="margin-top:1rem;color:var(--ink-500);font-size:0.96rem;line-height:1.7;">${item.summary}</p>

    <div style="margin-top:1.5rem;padding:1.25rem;background:var(--bg-alabaster);border-radius:var(--radius-md);border:1px solid var(--line-subtle);">
      <h4 style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--emerald-800);margin-bottom:0.85rem;">Etapas do Atendimento no Instituto</h4>
      <ol style="padding-left:1.2rem;display:flex;flex-direction:column;gap:0.6rem;font-size:0.9rem;color:var(--ink-700);">
        ${item.protocolSteps.map(step => `<li>${step}</li>`).join("")}
      </ol>
    </div>

    <div style="margin-top:1.15rem;padding:1rem 1.25rem;background:var(--gold-soft);border-radius:var(--radius-md);border:1px solid var(--line-gold);font-size:0.86rem;color:var(--ink-700);">
      <strong>Indicação Clínica:</strong> ${item.indication}
    </div>

    <div style="margin-top:1.75rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:flex-end;">
      <button type="button" class="btn btn-outline" onclick="closeProtocolModal()">Fechar</button>
      <button type="button" class="btn btn-primary" onclick="closeProtocolModal(); openBookingModal('${item.title}')">
        Agendar Avaliação deste Protocolo
      </button>
    </div>
  `;

  modal.classList.add("open");
};

window.closeProtocolModal = function() {
  const modal = document.getElementById("protocolModal");
  if (modal) modal.classList.remove("open");
};

/* ───────── 4. Interactive DSD Comparator Slider ───────── */
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

/* ───────── 5. Interactive Clinical Quiz (3 Steps) ───────── */
const QUIZ_QUESTIONS = [
  {
    step: 1,
    title: "Qual é a sua principal prioridade para o seu sorriso ou saúde hoje?",
    subtitle: "Selecione a opção que melhor descreve o que você deseja conquistar no IASO:",
    options: [
      { id: "estetica", title: "Estética, Lentes ou Clareamento", sub: "Quero um sorriso mais branco, harmônico e alinhado ao meu rosto", rec: "Estética Dental & Planejamento Digital (DSD)" },
      { id: "implante", title: "Implantes ou Prótese Fixa", sub: "Repor dentes ausentes ou substituir prótese antiga com segurança", rec: "Implantodontia & Laboratório de Prótese IASO" },
      { id: "ortodontia", title: "Alinhar os Dentes (Ortodontia)", sub: "Alinhadores transparentes ou aparelhos estéticos modernos", rec: "Ortodontia Digital & Ortopedia Facial" },
      { id: "harmonizacao", title: "Harmonização Orofacial", sub: "Botox, preenchimento labial, bioestimuladores ou bruxismo", rec: "Núcleo de Estética & Harmonização Orofacial" },
      { id: "dor", title: "Alívio de Dor, Canal ou Urgência", sub: "Sensibilidade, dor aguda, fratura ou dente do siso", rec: "Endodontia Mecanizada & Urgência Odontológica" },
      { id: "checkup", title: "Check-up, Limpeza & Raio-X Digital", sub: "Prevenção completa, saúde gengival e exames no mesmo local", rec: "Prevenção Integrada & Diagnóstico por Imagem" }
    ]
  },
  {
    step: 2,
    title: "Como você prefere que seja conduzida a sua avaliação inicial?",
    subtitle: "No IASO, adaptamos o ritmo da consulta à sua rotina e conforto:",
    options: [
      { id: "completo", title: "Avaliação + Raio-X no Mesmo Dia", sub: "Já quero realizar exames necessários na própria clínica e sair com o plano" },
      { id: "conversa", title: "Escuta Acolhedora (Tenho Receio)", sub: "Prefiro um atendimento calmo, passo a passo e sem pressa" },
      { id: "objetivo", title: "Planejamento Executivo Rápido", sub: "Tenho agenda corrida e busco pontualidade máxima" }
    ]
  },
  {
    step: 3,
    title: "Qual o melhor período para agendarmos a sua visita na Av. Djalma Dutra?",
    subtitle: "Nossa recepção confirmará o horário mais próximo dentro da sua preferência:",
    options: [
      { id: "manha", title: "Período da Manhã (08h às 12h)", sub: "Ideal para iniciar o dia com tranquilidade" },
      { id: "tarde", title: "Período da Tarde (14h às 18h)", sub: "Horário amplo durante a semana" },
      { id: "flexivel", title: "Horário Especial / Sábado Manhã", sub: "Final de tarde (18h-19h) ou sábado pela manhã" }
    ]
  }
];

let quizState = {
  currentStep: 0,
  answers: []
};

function renderQuiz() {
  const container = document.getElementById("quizBody");
  const stepLabel = document.getElementById("quizStepLabel");
  const dots = document.querySelectorAll(".quiz-dot");
  if (!container) return;

  dots.forEach((d, idx) => {
    d.classList.remove("active", "done");
    if (idx < quizState.currentStep) d.classList.add("done");
    else if (idx === quizState.currentStep) d.classList.add("active");
  });

  if (quizState.currentStep >= QUIZ_QUESTIONS.length) {
    const a1 = quizState.answers[0];
    const a2 = quizState.answers[1];
    const a3 = quizState.answers[2];

    if (stepLabel) stepLabel.textContent = "Recomendação Clínica Concluída";

    const msg = `Olá, equipe da Clínica IASO! Fiz o diagnóstico rápido no site:\n• Objetivo: ${a1.title}\n• Núcleo recomendado: ${a1.rec}\n• Formato preferido: ${a2.title}\n• Turno: ${a3.title}\nGostaria de verificar os horários disponíveis na Av. Djalma Dutra, 1767.`;
    const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

    container.innerHTML = `
      <div class="quiz-result-box">
        <span class="eyebrow">Plano de Triagem Personalizado IASO</span>
        <h3 class="font-serif" style="font-size:2.1rem;margin-top:0.5rem;color:var(--ink-900);">
          Núcleo Recomendado: <span class="emerald-italic">${a1.rec}</span>
        </h3>
        <p style="margin-top:0.75rem;font-size:0.95rem;color:var(--ink-500);max-width:65ch;">
          Com base nas suas respostas, preparamos sua recomendação para atendimento na nossa unidade central (Av. Djalma Dutra, 1767 — Altamira/PA), com suporte do nosso núcleo próprio de diagnóstico por imagem e protocolo de conforto individualizado.
        </p>
        <div style="margin-top:1.25rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0.85rem;">
          <div style="background:var(--bg-pure);padding:0.95rem 1.1rem;border-radius:12px;border:1px solid var(--line-subtle);">
            <span style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--ink-400);font-weight:700;">Foco Principal</span>
            <p style="font-weight:700;font-size:0.9rem;margin-top:0.2rem;">${a1.title}</p>
          </div>
          <div style="background:var(--bg-pure);padding:0.95rem 1.1rem;border-radius:12px;border:1px solid var(--line-subtle);">
            <span style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--ink-400);font-weight:700;">Abordagem</span>
            <p style="font-weight:700;font-size:0.9rem;margin-top:0.2rem;">${a2.title}</p>
          </div>
          <div style="background:var(--bg-pure);padding:0.95rem 1.1rem;border-radius:12px;border:1px solid var(--line-subtle);">
            <span style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--ink-400);font-weight:700;">Período Preferido</span>
            <p style="font-weight:700;font-size:0.9rem;margin-top:0.2rem;">${a3.title}</p>
          </div>
        </div>
        <div style="margin-top:1.75rem;display:flex;flex-wrap:wrap;gap:0.85rem;align-items:center;">
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-emerald">
            Enviar Triagem para a Recepção no WhatsApp
          </a>
          <button type="button" class="btn btn-outline" onclick="openBookingModal('${a1.rec}', '${a3.title}')">
            Preencher Pré-Agendamento no Site
          </button>
          <button type="button" class="link-btn" style="margin-left:auto;" onclick="resetQuiz()">
            Refazer simulação
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[quizState.currentStep];
  if (stepLabel) stepLabel.textContent = `Etapa 0${q.step} de 03 · Triagem Inteligente`;

  container.innerHTML = `
    <h3 class="font-serif" style="font-size:1.95rem;line-height:1.18;">${q.title}</h3>
    <p style="margin-top:0.4rem;font-size:0.92rem;color:var(--ink-500);">${q.subtitle}</p>
    <div class="quiz-options-grid">
      ${q.options.map((opt, i) => `
        <button type="button" class="quiz-opt" onclick="selectQuizOption(${i})">
          <span class="font-mono" style="font-size:0.72rem;color:var(--gold-600);font-weight:700;">OPÇÃO 0${i + 1}</span>
          <span class="quiz-opt-title">${opt.title}</span>
          <span class="quiz-opt-sub">${opt.sub}</span>
        </button>
      `).join("")}
    </div>
  `;
}

window.selectQuizOption = function(optIndex) {
  const q = QUIZ_QUESTIONS[quizState.currentStep];
  quizState.answers.push(q.options[optIndex]);
  quizState.currentStep += 1;
  renderQuiz();
};

window.resetQuiz = function() {
  quizState.currentStep = 0;
  quizState.answers = [];
  renderQuiz();
};

/* ───────── 6. Booking Modal & Quick Triage Bar ───────── */
window.openBookingModal = function(specialty = "", shift = "") {
  const modal = document.getElementById("bookingModal");
  const specSelect = document.getElementById("bookSpecialty");
  const shiftSelect = document.getElementById("bookShift");
  const resultArea = document.getElementById("bookingConfirmation");
  const form = document.getElementById("bookingForm");

  if (!modal) return;
  if (resultArea) resultArea.style.display = "none";
  if (form) form.style.display = "grid";

  if (specSelect && specialty) {
    let matched = false;
    for (const opt of specSelect.options) {
      if (opt.value.toLowerCase().includes(specialty.toLowerCase().slice(0, 10)) ||
          specialty.toLowerCase().includes(opt.value.toLowerCase().slice(0, 10))) {
        specSelect.value = opt.value;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const customOpt = document.createElement("option");
      customOpt.value = specialty;
      customOpt.textContent = specialty;
      specSelect.appendChild(customOpt);
      specSelect.value = specialty;
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
  const shift = document.getElementById("qbShift")?.value || "";
  openBookingModal(spec, shift);
};

function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bookName").value.trim();
    const phone = document.getElementById("bookPhone").value.trim();
    const specialty = document.getElementById("bookSpecialty").value;
    const shift = document.getElementById("bookShift").value;
    const visitType = document.getElementById("bookType").value;
    const notes = document.getElementById("bookNotes").value.trim();

    const protocolCode = "IASO-" + Math.floor(100000 + Math.random() * 900000);
    const waText = `Olá, recepção do IASO! Gostaria de confirmar meu pré-agendamento pelo site:\n\n` +
      `• *Protocolo:* #${protocolCode}\n` +
      `• *Paciente:* ${name}\n` +
      `• *Telefone:* ${phone}\n` +
      `• *Especialidade:* ${specialty}\n` +
      `• *Modalidade:* ${visitType}\n` +
      `• *Período preferido:* ${shift}\n` +
      (notes ? `• *Observações:* ${notes}\n` : "") +
      `\nAguardo a confirmação de data e horário na Av. Djalma Dutra, 1767.`;

    const waUrl = `https://wa.me/${IASO_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`;

    form.style.display = "none";
    const conf = document.getElementById("bookingConfirmation");
    if (conf) {
      conf.style.display = "block";
      conf.innerHTML = `
        <div style="padding:1.75rem;background:var(--emerald-50);border:1px solid var(--emerald-800);border-radius:var(--radius-lg);">
          <span class="eyebrow">Solicitação Pronta · Protocolo #${protocolCode}</span>
          <h4 class="font-serif" style="font-size:1.85rem;margin-top:0.5rem;">Tudo pronto, ${name.split(" ")[0]}!</h4>
          <p style="margin-top:0.5rem;font-size:0.92rem;color:var(--ink-700);">
            Sua ficha de pré-agendamento para <strong>${specialty}</strong> (${shift}) foi estruturada. Clique abaixo para enviar diretamente ao WhatsApp oficial da recepção do IASO em Altamira:
          </p>
          <div style="margin-top:1.35rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-emerald">
              Confirmar Agora no WhatsApp (93) 99162-9079
            </a>
            <button type="button" class="btn btn-outline" onclick="closeBookingModal()">
              Concluir
            </button>
          </div>
        </div>
      `;
    }
  });
}

/* ───────── 7. Header Scroll & Mobile Menu ───────── */
function initNavigation() {
  const header = document.getElementById("siteHeader");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  // Close modals on backdrop click or Escape
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.remove("open");
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateLiveStatus();
  renderSpecialties("todos");
  initSpecialtyFilters();
  initDsdSlider();
  renderQuiz();
  initBookingForm();
  initNavigation();
});
