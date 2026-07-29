/* ==================== i18n — PT / EN ==================== */
const i18n = {
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.process': 'Processo',
    'nav.projects': 'Projetos',
    'nav.design': 'Design',
    'nav.skills': 'Skills',
    'nav.contact': 'Contato',
    'nav.available': 'Disponível',

    'hero.pill': 'Disponível para novos projetos · Recife/Natal, BR',
    'hero.h1': 'Design que<br/><span class="brace gradient">entrega.</span>',
    'hero.chip4': '5+ anos',
    'hero.desc': 'Designer híbrido especializado em transformar requisitos de negócio em <strong>produtos digitais funcionais, escaláveis e de alta conversão</strong>. Atualmente na <strong>HeadOffice.ai</strong>, com passagens por <strong>Adobe</strong>, Tangram e LL Imóveis — domino o ciclo completo: pesquisa, prototipagem, design visual e handoff técnico em React.',
    'hero.cta1': 'deploy now ↗',
    'hero.cta2': 'Portfólio Behance <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',

    'about.num': '01 / SOBRE',
    'about.title': 'A ponte entre <span class="brace">design</span> e <span class="brace">engenharia</span>, sem o ruído do meio.',
    'about.p1': 'Sou um <strong>Product Designer híbrido</strong> com 5+ anos transformando requisitos de negócio em produtos digitais funcionais, escaláveis e de alta conversão. Minha jornada começou no design visual e evoluiu para UX/UI orientado por dados, sempre priorizando <strong>consistência</strong>, <strong>acessibilidade</strong> e <strong>usabilidade</strong>.',
    'about.p2': 'Minha formação em <strong>Análise e Desenvolvimento de Sistemas</strong> me permite atravessar a ponte entre a experiência do usuário e a engenharia. Falo a língua dos devs, entrego <span class="hl">handoffs limpos e estruturados</span> e garanto viabilidade técnica em HTML, CSS, JavaScript e React.',
    'about.p3': 'Hoje uso <strong>IA avançada e integrações MCP no Figma</strong> pra automatizar workflows e escalar Design Systems. Já entreguei massivamente pra marcas globais como <strong>Adobe</strong> e aumentei engajamento de clientes em <span class="hl">82%</span> em projetos passados.',
    'about.stat1': 'Anos de experiência em design digital',
    'about.stat2': 'Aumento de engajamento (LL Imóveis)',
    'about.stat3': 'Assets entregues para Adobe Express',
    'about.stat4': 'Crescimento de alcance em campanhas',

    'exp.num': '02 / TRAJETÓRIA',
    'exp.title': 'Onde já <span class="brace">construí</span> coisas.',

    'proc.num': '03 / PROCESSO',
    'proc.title': 'Como eu <span class="brace">trabalho</span>.',
    'proc.intro': 'Quatro fases, uma constante: <strong style="color: var(--text);">decisão informada</strong>. Cada etapa entrega artefato — não slide. Scroll pra navegar.',
    'proc.step1': 'Imersão',
    'proc.step2': 'Estratégia',
    'proc.step3': 'Design',
    'proc.step4': 'Entrega',
    'proc.p1.meta': 'FASE 01 / DISCOVERY',
    'proc.p1.title': 'Imersão',
    'proc.p1.quote': '"Antes do pixel, o contexto."',
    'proc.p1.desc': 'Briefing, stakeholders, pesquisa com usuário, análise competitiva e mapeamento de constraints técnicos. Pra desenhar a solução certa preciso entender o problema certo.',
    'proc.p2.meta': 'FASE 02 / DEFINITION',
    'proc.p2.title': 'Estratégia',
    'proc.p2.quote': '"Síntese antes de tela."',
    'proc.p2.desc': 'Personas, jornadas, fluxos, arquitetura de informação e critérios de sucesso. Aqui é onde signal vira decisão — e onde corto 70% do trabalho que não precisa ser feito.',
    'proc.p3.meta': 'FASE 03 / CONCEPT',
    'proc.p3.title': 'Design',
    'proc.p3.quote': '"Iteração rápida, decisão informada."',
    'proc.p3.desc': 'Wireframes → high-fidelity → protótipo navegável. Design System construído em paralelo. Cada iteração validada com usuário ou time. IA como pair de exploração.',
    'proc.p4.meta': 'FASE 04 / HANDOFF',
    'proc.p4.title': 'Entrega',
    'proc.p4.quote': '"Designer não termina no Figma."',
    'proc.p4.desc': 'Handoff técnico estruturado, specs de acessibilidade, suporte ao time de dev durante implementação e QA visual. Falo a língua dos devs porque sou um deles.',

    'prj.num': '04 / PROJETOS',
    'prj.title': 'Coisas que <span class="brace">levei pro mundo</span>.',
    'prj.cta': 'Ler case study',
    'prj.u.sub': 'Landing page · Agência ágil · HTML/CSS/JS',
    'prj.u.desc': 'Landing page de agência ágil. Prova social no primeiro fold, metodologias como cartas paralelas, FAQ como redutor de fricção. Decisões + processo no case completo.',
    'prj.u.tag3': 'Reveal on scroll',
    'prj.u.tag4': 'Time de 6',
    'prj.c.sub': 'App · Design System · Protótipo · projeto solo',
    'prj.c.desc': 'App de hidratação como projeto de extensão da LIAD UNINASSAU. Projeto solo: Design System próprio, protótipo navegável e site institucional — jornada acessível ponta a ponta.',
    'prj.c.tag1': 'Solo',
    'prj.c.tag4': 'Acessibilidade',

    'bhc.num': '05 / DESIGN VISUAL',
    'bhc.title': 'No Behance há mais. <span class="brace">Bem mais</span>.',
    'bhc.intro': '<strong style="color: var(--text);">+47k visualizações</strong>, <strong style="color: var(--text);">+2.7k apreciações</strong> e <strong style="color: var(--text);">694 seguidores</strong>. Identidade visual, social media e direção de arte pra marcas dos mais variados nichos.',
    'bhc.cta': 'Ver todos no Behance',
    'bhc.hcta': 'VER NO BEHANCE ↗',
    'bhc.h1.type': 'SOCIAL MEDIA · GASTRONOMIA',
    'bhc.h1.desc': 'Identidade visual e feed pra cozinha italiana. Fotografia gastronômica, paleta quente e ritmo editorial pensados pra despertar fome no scroll.',
    'bhc.h2.type': 'SOCIAL MEDIA · TELECOM',
    'bhc.h2.desc': 'Comunicação técnica traduzida em design acessível. Planos, velocidade e atendimento contados de forma direta — sem o jargão habitual do setor.',
    'bhc.h3.type': 'SOCIAL MEDIA · VAREJO',
    'bhc.h3.desc': 'Lifestyle aplicado à venda. Cada peça ganha contexto de ambiente — conteúdo de inspiração com a mesma identidade dos posts de oferta.',
    'bhc.h4.type': 'SOCIAL MEDIA · IMOBILIÁRIO',
    'bhc.h4.desc': 'Lançamentos, dicas de financiamento e prova social. Cada peça pensada pra reduzir a fricção da decisão de compra de um imóvel.',
    'bhc.h5.type': 'SOCIAL MEDIA · WELLNESS',
    'bhc.h5.desc': 'Identidade fluida, paleta serena e tipografia respirável. Posts de aula, retiros e frases que cabem entre uma respiração e outra.',
    'bhc.h6.type': 'SOCIAL MEDIA · MÚSICA',
    'bhc.h6.desc': 'Conteúdo pra quem ama som. Lançamentos, curiosidades e dicas técnicas com direção de arte que carrega energia de palco.',
    'bhc.h7.type': 'SOCIAL MEDIA · TECH/APP',
    'bhc.h7.desc': 'Comunicação de produto digital: funcionalidades, atualizações e launch campaign. Visual moderno, motion-ready, pronto pra rotação alta.',
    'bhc.h8.type': 'SOCIAL MEDIA · SERVIÇO',
    'bhc.h8.desc': 'Serviço urbano, comunicação leve. Dicas de cuidado com tecidos e identidade que foge do clichê azul-branco do setor.',
    'bhc.h9.type': 'SOCIAL MEDIA · LOGÍSTICA',
    'bhc.h9.desc': 'Organização, segurança e conveniência traduzidos em layouts diretos. Identidade industrial sem virar fria — calor onde importa.',
    'bhc.h10.type': 'SOCIAL MEDIA · PET',
    'bhc.h10.desc': 'Produtos, dicas e bem-estar animal. Tom carinhoso sem cair no infantil — o tutor é o cliente, não o pet.',
    'bhc.h11.type': 'SOCIAL MEDIA · VIAGEM',
    'bhc.h11.desc': 'Destinos, pacotes e roteiros embalados pra fazer scroll virar planejamento. Fotografia que ocupa todo o frame.',
    'bhc.h12.type': 'SOCIAL MEDIA · JURÍDICO',
    'bhc.h12.desc': 'Comunicação séria sem ser engessada. Direitos do consumidor, esclarecimento jurídico e posts de autoridade pra escritório local.',

    'skl.num': '06 / TOOLKIT',
    'skl.title': 'O que eu <span class="brace">uso</span> pra construir.',
    'skl.methods': 'Métodos',
    'skl.languages': 'Idiomas',

    'ctc.eyebrow': '07 / VAMOS CONVERSAR',
    'ctc.title': 'Tem uma ideia?<br/>Bora <span class="brace">tirar do papel.</span>',

    'foot.rights': '· todos os direitos reservados',
    'foot.made': 'designed &amp; coded with',
    'foot.place': 'em Recife, BR'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.process': 'Process',
    'nav.projects': 'Projects',
    'nav.design': 'Design',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.available': 'Available',

    'hero.pill': 'Available for new projects · Recife/Natal, BR',
    'hero.h1': 'Design that<br/><span class="brace gradient">ships.</span>',
    'hero.chip4': '5+ years',
    'hero.desc': 'Hybrid designer specialized in turning business requirements into <strong>functional, scalable, high-conversion digital products</strong>. Currently at <strong>HeadOffice.ai</strong>, with previous stints at <strong>Adobe</strong>, Tangram and LL Imóveis — I own the full cycle: research, prototyping, visual design and technical handoff in React.',
    'hero.cta1': 'deploy now ↗',
    'hero.cta2': 'Behance Portfolio <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',

    'about.num': '01 / ABOUT',
    'about.title': 'The bridge between <span class="brace">design</span> and <span class="brace">engineering</span>, without the noise in between.',
    'about.p1': "I'm a <strong>hybrid Product Designer</strong> with 5+ years turning business requirements into functional, scalable, high-conversion digital products. My journey started in visual design and evolved into data-driven UX/UI, always prioritizing <strong>consistency</strong>, <strong>accessibility</strong> and <strong>usability</strong>.",
    'about.p2': 'My background in <strong>Systems Analysis &amp; Development</strong> lets me cross the bridge between user experience and engineering. I speak the devs’ language, deliver <span class="hl">clean, structured handoffs</span> and ensure technical viability in HTML, CSS, JavaScript and React.',
    'about.p3': 'Today I use <strong>advanced AI and MCP integrations in Figma</strong> to automate workflows and scale Design Systems. I’ve shipped massively for global brands like <strong>Adobe</strong> and boosted client engagement by <span class="hl">82%</span> in past projects.',
    'about.stat1': 'Years of experience in digital design',
    'about.stat2': 'Engagement lift (LL Imóveis)',
    'about.stat3': 'Assets shipped for Adobe Express',
    'about.stat4': 'Campaign reach growth',

    'exp.num': '02 / CAREER',
    'exp.title': "Where I've <span class=\"brace\">built</span> things.",

    'proc.num': '03 / PROCESS',
    'proc.title': 'How I <span class="brace">work</span>.',
    'proc.intro': 'Four phases, one constant: <strong style="color: var(--text);">informed decision</strong>. Every stage delivers an artifact — not a slide. Scroll to navigate.',
    'proc.step1': 'Immersion',
    'proc.step2': 'Strategy',
    'proc.step3': 'Design',
    'proc.step4': 'Handoff',
    'proc.p1.meta': 'PHASE 01 / DISCOVERY',
    'proc.p1.title': 'Immersion',
    'proc.p1.quote': '"Context before the pixel."',
    'proc.p1.desc': 'Briefing, stakeholders, user research, competitive analysis and technical constraint mapping. To design the right solution I need to understand the right problem first.',
    'proc.p2.meta': 'PHASE 02 / DEFINITION',
    'proc.p2.title': 'Strategy',
    'proc.p2.quote': '"Synthesis before screens."',
    'proc.p2.desc': 'Personas, journeys, flows, information architecture and success criteria. This is where signal becomes decision — and where I cut 70% of the work that doesn’t need to happen.',
    'proc.p3.meta': 'PHASE 03 / CONCEPT',
    'proc.p3.title': 'Design',
    'proc.p3.quote': '"Fast iteration, informed decision."',
    'proc.p3.desc': 'Wireframes → high-fidelity → navigable prototype. Design System built in parallel. Every iteration validated with user or team. AI as exploration pair.',
    'proc.p4.meta': 'PHASE 04 / HANDOFF',
    'proc.p4.title': 'Handoff',
    'proc.p4.quote': "\"A designer doesn’t stop at Figma.\"",
    'proc.p4.desc': 'Structured technical handoff, accessibility specs, dev team support during implementation and visual QA. I speak the devs’ language because I’m one of them.',

    'prj.num': '04 / PROJECTS',
    'prj.title': 'Things I <span class="brace">shipped to the world</span>.',
    'prj.cta': 'Read case study',
    'prj.u.sub': 'Landing page · Agile agency · HTML/CSS/JS',
    'prj.u.desc': 'Agile agency landing page. Social proof above the fold, methodologies as parallel cards, FAQ as friction reducer. Decisions + process in the full case.',
    'prj.u.tag3': 'Reveal on scroll',
    'prj.u.tag4': 'Team of 6',
    'prj.c.sub': 'App · Design System · Prototype · solo project',
    'prj.c.desc': 'Hydration app as an extension project of LIAD UNINASSAU. Solo project: custom Design System, navigable prototype and institutional site — fully accessible end-to-end journey.',
    'prj.c.tag1': 'Solo',
    'prj.c.tag4': 'Accessibility',

    'bhc.num': '05 / VISUAL DESIGN',
    'bhc.title': "There's more on Behance. <span class=\"brace\">Much more</span>.",
    'bhc.intro': '<strong style="color: var(--text);">+47k views</strong>, <strong style="color: var(--text);">+2.7k appreciations</strong> and <strong style="color: var(--text);">694 followers</strong>. Visual identity, social media and art direction for brands across many niches.',
    'bhc.cta': 'View all on Behance',
    'bhc.hcta': 'VIEW ON BEHANCE ↗',
    'bhc.h1.type': 'SOCIAL MEDIA · GASTRONOMY',
    'bhc.h1.desc': 'Visual identity and feed for an Italian kitchen. Food photography, warm palette and editorial rhythm designed to spark hunger on scroll.',
    'bhc.h2.type': 'SOCIAL MEDIA · TELECOM',
    'bhc.h2.desc': "Technical communication translated into accessible design. Plans, speed and support told directly — without the industry's usual jargon.",
    'bhc.h3.type': 'SOCIAL MEDIA · RETAIL',
    'bhc.h3.desc': 'Lifestyle applied to selling. Each piece gets room context — inspiration content with the same identity as offer posts.',
    'bhc.h4.type': 'SOCIAL MEDIA · REAL ESTATE',
    'bhc.h4.desc': 'Launches, financing tips and social proof. Each piece designed to reduce friction in the home-buying decision.',
    'bhc.h5.type': 'SOCIAL MEDIA · WELLNESS',
    'bhc.h5.desc': 'Fluid identity, calm palette and breathable typography. Class posts, retreats and lines that fit between two breaths.',
    'bhc.h6.type': 'SOCIAL MEDIA · MUSIC',
    'bhc.h6.desc': 'Content for sound lovers. Releases, trivia and technical tips with art direction carrying stage energy.',
    'bhc.h7.type': 'SOCIAL MEDIA · TECH/APP',
    'bhc.h7.desc': 'Digital product communication: features, updates and launch campaign. Modern visual, motion-ready, primed for high rotation.',
    'bhc.h8.type': 'SOCIAL MEDIA · SERVICE',
    'bhc.h8.desc': "Urban service, light communication. Fabric care tips and identity that breaks out of the industry's blue-white cliché.",
    'bhc.h9.type': 'SOCIAL MEDIA · LOGISTICS',
    'bhc.h9.desc': 'Organization, security and convenience translated into direct layouts. Industrial identity without going cold — warmth where it matters.',
    'bhc.h10.type': 'SOCIAL MEDIA · PET',
    'bhc.h10.desc': 'Products, tips and animal well-being. Caring tone without falling childish — the owner is the customer, not the pet.',
    'bhc.h11.type': 'SOCIAL MEDIA · TRAVEL',
    'bhc.h11.desc': 'Destinations, packages and itineraries packed to turn scroll into planning. Photography filling every frame.',
    'bhc.h12.type': 'SOCIAL MEDIA · LEGAL',
    'bhc.h12.desc': 'Serious communication without being stiff. Consumer rights, legal clarification and authority posts for a local firm.',

    'skl.num': '06 / TOOLKIT',
    'skl.title': 'What I <span class="brace">use</span> to build.',
    'skl.methods': 'Methods',
    'skl.languages': 'Languages',

    'ctc.eyebrow': "07 / LET'S TALK",
    'ctc.title': "Got an idea?<br/>Let's <span class=\"brace\">bring it to life.</span>",

    'foot.rights': '· all rights reserved',
    'foot.made': 'designed &amp; coded with',
    'foot.place': 'in Recife, BR'
  }
};

(function () {
  function getStoredLang() {
    try { return localStorage.getItem('mano.lang'); } catch (e) { return null; }
  }
  function storeLang(lang) {
    try { localStorage.setItem('mano.lang', lang); } catch (e) {}
  }

  function setLang(lang) {
    if (!i18n[lang]) lang = 'pt';
    document.documentElement.lang = (lang === 'pt') ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = i18n[lang][el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const isActive = btn.dataset.langSwitch === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    storeLang(lang);
  }

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langSwitch));
  });

  const initial = getStoredLang() || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
  setLang(initial);
})();
