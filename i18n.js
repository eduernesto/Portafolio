const translations = {
  es: {
    "nav-about": "SOBRE MÍ",
    "nav-stack": "STACK",
    "nav-experience": "EXPERIENCIA",
    "nav-projects": "PROYECTOS",
    "nav-manifesto": "MANIFIESTO",
    "nav-contact": "CONTACTO",
    "player-no-play": "SIN REPRODUCCIÓN",
    "hero-eyebrow": "// software developer · systems engineering · v1.0.0",
    "hero-title-1": "EDUARDO",
    "hero-title-2": "ALVAREZ",
    "hero-title-3": "DESARROLLO Y SOLUCIONO",
    "hero-sub": "// desarrollador de software creativo y profesional, estudiante de Ingeniería de Sistemas<br>// con sede en Miraflores, Lima, Perú<br>// React · Angular · Java · TypeScript · C# · Python · n8n · IA",
    "hero-cv": "DOWNLOAD CV",
    "hero-contact": "CONTACT",
    "hero-github": "GITHUB",
    "stat-age": "EDAD",
    "stat-lang": "IDIOMAS",
    "stat-semester": "SEMESTRE",
    "stat-freq": "FREQ",
    "stat-bpm": "BPM",
    "stat-layers": "CAPAS",
    "scroll-hint": "// SCROLL PARA CONTINUAR ↓",
    "ticker-text": "&nbsp;&nbsp;&nbsp;// BRUTALISMO DIGITAL · ARQUITECTURA SONORA · CÓDIGO VIVO · FRECUENCIA MODULADA · CONCRETO DIGITAL · CAPAS DE SONIDO · BEAT REACTIVO · SISTEMA ACTIVO ·&nbsp;&nbsp;&nbsp;// BRUTALISMO DIGITAL · ARQUITECTURA SONORA · CÓDIGO VIVO · FRECUENCIA MODULADA · CONCRETO DIGITAL · CAPAS DE SONIDO · BEAT REACTIVO · SISTEMA ACTIVO ·",
    "audio-label": "// módulo de audio",
    "audio-title": "MUSICAL<br>EN VIVO",
    "audio-body": "El sistema analiza la música en reproducción usando la Web Audio API. Cada frecuencia se mapea a una capa del edificio. Los bajos mueven la base. Los agudos iluminan la cúpula. El ritmo sacude el concreto.",
    "data-vol": "VOL. PLAYER",
    "data-bpm": "BPM",
    "data-bass": "BAJOS",
    "data-mid": "MEDIOS",
    "data-high": "AGUDOS",
    "data-layers-active": "CAPAS ACT.",
    "stack-label": "// edificio brutalista",
    "stack-title": "STACK",
    "stack-subtitle": "Tecnologías que manejo<br>Frontend moderno, backends robustos, servidores y automatización.",
    "stack-level": "NIVEL:",
    "stack-basic": "▰▱▱▱ Básico",
    "stack-mid": "▰▰▱▱ Intermedio",
    "stack-advanced": "▰▰▰▱ Avanzado",
    "stack-expert": "▰▰▰▰ Experto",
    "wave-label": "// forma de onda",
    "wave-title": "OSCILADOR",
    "wave-ms": "0ms",
    "wave-time": "TIEMPO →",
    "wave-buffer": "BUFFER",
    "exp-label": "// experiencia",
    "exp-title": "TRABAJO<br>RECIENTE",
    "terminal-exp-comment": "// experiencia laboral",
    "terminal-arqky-comment": "/* Grupo Arqky — Nov 2025 – Presente */",
    "terminal-arqky-rol": "Desarrollador Web Full-Stack & Soporte",
    "terminal-arqky-period": "Nov 2025 – Presente",
    "terminal-arqky-t1": "Desarrollé y mantuve aplicaciones web Full-Stack",
    "terminal-arqky-t2": "  (HTML, CSS, JavaScript, Python).",
    "terminal-arqky-t3": "Automaticé procesos clave con N8N,",
    "terminal-arqky-t4": "  reduciendo tareas manuales del equipo.",
    "terminal-arqky-t5": "Consulté y validé datos en SQL",
    "terminal-arqky-t6": "  para soporte y resolución en producción.",
    "terminal-arqky-t7": "Participé en pruebas funcionales (QA)",
    "terminal-arqky-t8": "  y coordiné seguimiento de incidencias.",
    "rain-label": "// código vivo",
    "projects-label": "// proyectos personales",
    "projects-title": "MIS<br>PROYECTOS",
    "projects-body": "Proyectos reales que resuelven problemas reales. De la idea al despliegue, cada línea tiene un propósito.",
    "proj-1-title": "La Chanchita",
    "proj-1-desc": "Divide gastos con amigos y manten cuentas claras en grupo. Creá grupos, registrá gastos con split igual/exacto/porcentaje, marca quién ya pagó, y visualiza balances con gráficos. Invitá por código, sin registro de otros usuarios.",
    "proj-1-btn": "VER PROYECTO →",
    "proj-2-title": "VitalDent",
    "proj-2-desc": "Aplicación web para gestión de citas médicas odontológicas. Los pacientes pueden agendar, consultar y cancelar citas a través de un chatbot o formulario. Los médicos confirman las citas desde su panel. El administrador gestiona doctores, revisa todas las citas y ve métricas del consultorio. El backend usa FastAPI con Supabase para base de datos y autenticación.",
    "proj-2-btn": "VER PROYECTO →",
    "proj-3-title": "Body Doubling",
    "proj-3-desc": "Body Doubling es una skill para Claude Code y OpenCode que actúa como compañero de trabajo virtual para developers con ADHD. Basada en la técnica real de \"body doubling\" — donde la presencia de otra persona ayuda al cerebro a activarse y mantenerse enfocado — le da estructura a tus sesiones de código sin juicio ni presión.",
    "proj-3-btn": "VER PROYECTO →",
    "proj-1-long": "Aplicación web full-stack para administración compartida de gastos grupales con autenticación JWT, registro de grupos, gastos divisibles en modalidades equal, exacto y porcentaje con splits liquidables individualmente, panel de balances con gráfico de dona por categorías y minimización de deudas, invitaciones por código rotativo SHA-256, filtros temporales y edición de perfil. El backend en Go con Gin y GORM sobre PostgreSQL se despliega en Render, y el frontend React 19 con TypeScript y Vite en Vercel, comunicados mediante API REST con CORS restringido en producción.",
    "proj-2-long": "Aplicación web full-stack para gestión de citas odontológicas con arquitectura cliente-servidor. El frontend en React con Vite consume una API REST construida con FastAPI (Python) que se conecta a Supabase para autenticación (JWT), base de datos relacional (PostgreSQL) y políticas de seguridad RLS. Incluye un chatbot con procesamiento de lenguaje natural (spaCy) para agendar citas mediante diálogo, y un modelo de Machine Learning (scikit-learn) que predice probabilidad de no-show del paciente. El panel de administración permite gestionar doctores, visualizar métricas y filtrar citas por estado o médico. El despliegue se realiza en Render (backend) y Vercel (frontend).",
    "proj-3-long": "Body Doubling es una skill para Claude Code y OpenCode que actúa como compañero de trabajo virtual para developers con ADHD. Basada en la técnica real de \"body doubling\" — donde la presencia de otra persona ayuda al cerebro a activarse y mantenerse enfocado — le da estructura a tus sesiones de código sin juicio ni presión.",
    "manifesto-text-1": "CÓDIGO LIMPIO, ",
    "manifesto-text-2": "SOLUCIONES REALES.",
    "manifesto-text-3": "INNOVACIÓN CON",
    "manifesto-text-4": "CADA ",
    "manifesto-text-5": "LÍNEA.",
    "manifesto-sub": "// portfolio · 2026 · eduardo alvarez · desarrollo y soluciono",
    "contact-label": "// contacto",
    "contact-title": "¿TIENES UN<br>PROYECTO?",
    "contact-status": "// estado actual",
    "contact-desc-1": "Abierto a proyectos freelance, colaboraciones<br>y oportunidades full-time o part-time.",
    "contact-desc-2": "Prefiero el contacto directo por WhatsApp o el formulario. Respondo en menos de 24h.",
    "form-title": "nuevo_mensaje.js",
    "form-name": "// nombre *",
    "form-name-placeholder": "Tu nombre",
    "form-email": "// email *",
    "form-email-placeholder": "tu@email.com",
    "form-subject": "// asunto *",
    "form-subject-placeholder": "¿De qué se trata?",
    "form-message": "// mensaje *",
    "form-message-placeholder": "Cuéntame sobre tu proyecto o idea...",
    "form-submit": "ENVIAR MENSAJE →",
    "footer-desc": "// software developer",
    "footer-location": "MIRAFLORES, LIMA · PERU",
    "player-no-files": "SIN ARCHIVOS"
  },
  en: {
    "nav-about": "ABOUT ME",
    "nav-stack": "STACK",
    "nav-experience": "EXPERIENCE",
    "nav-projects": "PROJECTS",
    "nav-manifesto": "MANIFESTO",
    "nav-contact": "CONTACT",
    "player-no-play": "NO PLAYBACK",
    "hero-eyebrow": "// software developer · systems engineering · v1.0.0",
    "hero-title-1": "EDUARDO",
    "hero-title-2": "ALVAREZ",
    "hero-title-3": "DEVELOPING & SOLVING",
    "hero-sub": "// creative and professional software developer, Systems Engineering student<br>// based in Miraflores, Lima, Peru<br>// React · Angular · Java · TypeScript · C# · Python · n8n · AI",
    "hero-cv": "DOWNLOAD CV",
    "hero-contact": "CONTACT",
    "hero-github": "GITHUB",
    "stat-age": "AGE",
    "stat-lang": "LANGUAGES",
    "stat-semester": "SEMESTER",
    "stat-freq": "FREQ",
    "stat-bpm": "BPM",
    "stat-layers": "LAYERS",
    "scroll-hint": "// SCROLL TO CONTINUE ↓",
    "ticker-text": "&nbsp;&nbsp;&nbsp;// DIGITAL BRUTALISM · SOUND ARCHITECTURE · LIVE CODE · FREQUENCY MODULATION · DIGITAL CONCRETE · SOUND LAYERS · REACTIVE BEAT · ACTIVE SYSTEM ·&nbsp;&nbsp;&nbsp;// DIGITAL BRUTALISM · SOUND ARCHITECTURE · LIVE CODE · FREQUENCY MODULATION · DIGITAL CONCRETE · SOUND LAYERS · REACTIVE BEAT · ACTIVE SYSTEM ·",
    "audio-label": "// audio module",
    "audio-title": "LIVE<br>MUSIC",
    "audio-body": "The system analyzes playback music using the Web Audio API. Each frequency is mapped to a building layer. Bass moves the base. Trebles light up the dome. The beat shakes the concrete.",
    "data-vol": "PLAYER VOL.",
    "data-bpm": "BPM",
    "data-bass": "BASS",
    "data-mid": "MIDS",
    "data-high": "TREBLE",
    "data-layers-active": "ACT. LAYERS",
    "stack-label": "// brutalist building",
    "stack-title": "STACK",
    "stack-subtitle": "Technologies I work with<br>Modern frontend, robust backends, servers and automation.",
    "stack-level": "LEVEL:",
    "stack-basic": "▰▱▱▱ Basic",
    "stack-mid": "▰▰▱▱ Intermediate",
    "stack-advanced": "▰▰▰▱ Advanced",
    "stack-expert": "▰▰▰▰ Expert",
    "wave-label": "// waveform",
    "wave-title": "OSCILLATOR",
    "wave-ms": "0ms",
    "wave-time": "TIME →",
    "wave-buffer": "BUFFER",
    "exp-label": "// experience",
    "exp-title": "RECENT<br>WORK",
    "terminal-exp-comment": "// work experience",
    "terminal-arqky-comment": "/* Arqky Group — Nov 2025 – Present */",
    "terminal-arqky-rol": "Full-Stack Web Developer & Support",
    "terminal-arqky-period": "Nov 2025 – Present",
    "terminal-arqky-t1": "Developed and maintained Full-Stack web applications",
    "terminal-arqky-t2": "  (HTML, CSS, JavaScript, Python).",
    "terminal-arqky-t3": "Automated key processes with N8N,",
    "terminal-arqky-t4": "  reducing manual tasks for the team.",
    "terminal-arqky-t5": "Queried and validated data in SQL",
    "terminal-arqky-t6": "  for production support and troubleshooting.",
    "terminal-arqky-t7": "Participated in functional testing (QA)",
    "terminal-arqky-t8": "  and coordinated tracking of incidents.",
    "rain-label": "// live code",
    "projects-label": "// personal projects",
    "projects-title": "MY<br>PROJECTS",
    "projects-body": "Real-world projects solving real-world problems. From concept to deployment, every line has a purpose.",
    "proj-1-title": "La Chanchita",
    "proj-1-desc": "Split expenses with friends and keep group accounts clear. Create groups, log expenses with equal/exact/percentage split, mark who paid, and view balance charts. Invite via code, no registration required for others.",
    "proj-1-btn": "VIEW PROJECT →",
    "proj-2-title": "VitalDent",
    "proj-2-desc": "Web application for dental appointment management. Patients can schedule, check and cancel appointments via chatbot or form. Doctors confirm appointments from their panel. The admin manages doctors, reviews all appointments and views clinic metrics. The backend uses FastAPI with Supabase for database and authentication.",
    "proj-2-btn": "VIEW PROJECT →",
    "proj-3-title": "Body Doubling",
    "proj-3-desc": "Body Doubling is a skill for Claude Code and OpenCode that acts as a virtual work buddy for developers with ADHD. Based on the real \"body doubling\" technique — where another person's presence helps the brain activate and stay focused — it gives structure to your coding sessions without judgment or pressure.",
    "proj-3-btn": "VIEW PROJECT →",
    "proj-1-long": "Full-stack web application for shared group expense management with JWT authentication, group registration, divisible expenses in equal, exact and percentage modes with individually payable splits, balance dashboard with donut chart by category and debt minimization, SHA-256 rotating code invitations, time filters and profile editing. Backend in Go with Gin and GORM on PostgreSQL deployed on Render, and frontend React 19 with TypeScript and Vite on Vercel, communicating via REST API with restricted CORS in production.",
    "proj-2-long": "Full-stack web application for dental appointment management with client-server architecture. The React frontend with Vite consumes a REST API built with FastAPI (Python) that connects to Supabase for authentication (JWT), relational database (PostgreSQL) and RLS security policies. Includes a chatbot with natural language processing (spaCy) for scheduling appointments through dialogue, and a Machine Learning model (scikit-learn) that predicts patient no-show probability. The admin panel allows managing doctors, viewing metrics and filtering appointments by status or doctor. Deployed on Render (backend) and Vercel (frontend).",
    "proj-3-long": "Body Doubling is a skill for Claude Code and OpenCode that acts as a virtual work buddy for developers with ADHD. Based on the real \"body doubling\" technique — where another person's presence helps the brain activate and stay focused — it gives structure to your coding sessions without judgment or pressure.",
    "manifesto-text-1": "CLEAN CODE, ",
    "manifesto-text-2": "REAL SOLUTIONS.",
    "manifesto-text-3": "INNOVATION WITH",
    "manifesto-text-4": "EVERY ",
    "manifesto-text-5": "LINE.",
    "manifesto-sub": "// portfolio · 2026 · eduardo alvarez · developing & solving",
    "contact-label": "// contact",
    "contact-title": "HAVE A<br>PROJECT?",
    "contact-status": "// current status",
    "contact-desc-1": "Open to freelance projects, collaborations<br>and full-time or part-time opportunities.",
    "contact-desc-2": "I prefer direct contact via WhatsApp or the form. I reply in less than 24 hours.",
    "form-title": "new_message.js",
    "form-name": "// name *",
    "form-name-placeholder": "Your name",
    "form-email": "// email *",
    "form-email-placeholder": "your@email.com",
    "form-subject": "// subject *",
    "form-subject-placeholder": "What is it about?",
    "form-message": "// message *",
    "form-message-placeholder": "Tell me about your project or idea...",
    "form-submit": "SEND MESSAGE →",
    "footer-desc": "// software developer",
    "footer-location": "MIRAFLORES, LIMA · PERU",
    "player-no-files": "NO FILES"
  }
};

let currentLanguage = localStorage.getItem('portfolio-lang') || 'es';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('portfolio-lang', lang);
  
  // Translate elements with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (translations[lang][key].indexOf('<') !== -1) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update toggle button text if exists
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  // Update dynamic elements in document if they exist
  const playerSong = document.getElementById('playerSong');
  if (playerSong) {
    if (playerSong.textContent === translations.es['player-no-play'] || playerSong.textContent === translations.en['player-no-play']) {
      playerSong.textContent = translations[lang]['player-no-play'];
    } else if (playerSong.textContent === translations.es['player-no-files'] || playerSong.textContent === translations.en['player-no-files']) {
      playerSong.textContent = translations[lang]['player-no-files'];
    }
  }

  // Dispatch custom event for app.js to handle language updates if needed
  window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
}

function initI18n() {
  setLanguage(currentLanguage);

  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLanguage === 'es' ? 'en' : 'es';
      setLanguage(nextLang);
    });
  }
}

// Auto init on load
window.addEventListener('DOMContentLoaded', initI18n);

// Export for app.js if needed
window.i18n = {
  getLang: () => currentLanguage,
  translate: (key) => translations[currentLanguage][key] || key,
  setLanguage
};
