export interface Project {
  id: number;
  title: Record<string, string>;
  category: Record<string, string>;
  description: Record<string, string>;
  problem: Record<string, string>;
  solution: Record<string, string>;
  result: Record<string, string>;
  tags: string[];
  githubUrl: string;
  caseStudyUrl?: string;
  image?: string;
  imageDark?: string;
  imageLight?: string;
  hasPngStep?: boolean;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "DB Analysis",
      en: "DB Analysis",
      es: "DB Analysis"
    },
    category: {
      pt: "DB Analysis",
      en: "DB Analysis",
      es: "DB Analysis"
    },
    description: {
      pt: "Dashboard interativo que visualiza dados de nascidos vivos no Brasil (2019–2023) com dados reais do SINASC/DataSUS, tornando indicadores de saúde pública acessíveis.",
      en: "Interactive dashboard visualizing Brazilian live birth data (2019–2023) from real SINASC/DataSUS records, making public health indicators accessible.",
      es: "Dashboard interactivo que visualiza datos de nacidos vivos en Brasil (2019–2023) con datos reales del SINASC/DataSUS, haciendo accesibles los indicadores de salud pública."
    },
    problem: {
      pt: "Dados brutos de saúde pública são difíceis de analisar: planilhas enormes, registros inconsistentes e ausência de visualizações acessíveis.",
      en: "Raw public health data is hard to analyze: massive spreadsheets, inconsistent records, and a lack of truly accessible visualizations.",
      es: "Los datos brutos de salud pública son difíciles de analizar: hojas de cálculo enormes, registros inconsistentes y falta de visualizaciones accesibles."
    },
    solution: {
      pt: "Dashboard interativo construído com React + TypeScript, processamento de dados em R com persistência em SQLite, e limpeza rigorosa removendo 9,4% de registros inconsistentes.",
      en: "Interactive dashboard built with React + TypeScript, data processing in R with SQLite persistence, and rigorous cleaning removing 9.4% of inconsistent records.",
      es: "Dashboard interactivo construido con React + TypeScript, procesamiento de datos en R con persistencia en SQLite, y limpieza rigurosa eliminando el 9,4% de registros inconsistentes."
    },
    result: {
      pt: "5.510 registros limpos analisados em 7 tipos de gráficos interativos, com suporte a 3 idiomas e cobertura de todos os 27 estados brasileiros.",
      en: "5,510 clean records analyzed across 7 interactive chart types, with support for 3 languages and full coverage of all 27 Brazilian states.",
      es: "5.510 registros limpios analizados en 7 tipos de gráficos interactivos, con soporte a 3 idiomas y cobertura de los 27 estados brasileños."
    },
    tags: ["React", "TypeScript", "R", "SQLite", "DataSUS"],
    githubUrl: "https://github.com/manoelja/data-base-analysis",
    caseStudyUrl: "https://data-base-analysis.vercel.app",
    image: "/svg/data-base-analysis.svg",
    imageDark: "/dark/data-base-analysis-dark.png",
    imageLight: "/light/data-base-analysis-light.png",
    hasPngStep: true
  },
  {
    id: 2,
    title: {
      pt: "About LogosAI",
      en: "About LogosAI",
      es: "About LogosAI"
    },
    category: {
      pt: "About LogosAI",
      en: "About LogosAI",
      es: "About LogosAI"
    },
    description: {
      pt: "Plataforma multiplataforma (Mobile e Web) de personalização espiritual com IA Generativa: o usuário define duração e tema, e a IA gera devocionais bíblicos.",
      en: "Cross-platform (Mobile & Web) spiritual personalization app with Generative AI: users set duration and theme, and AI writes Bible-based devotionals.",
      es: "Plataforma multiplataforma (Mobile y Web) de personalización espiritual con IA Generativa: el usuario define duración y tema, y la IA genera devocionales bíblicos."
    },
    problem: {
      pt: "Falta de devocionais personalizados que se adaptem ao momento emocional e à duração desejada pelo usuário, com fundamentação bíblica confiável.",
      en: "Difficulty finding personalized devotionals that fit the user's emotional moment and desired duration, with reliable biblical grounding.",
      es: "Dificultad para encontrar devocionales personalizados que se adapten al momento emocional y a la duración deseada por el usuario, con fundamento bíblico confiable."
    },
    solution: {
      pt: "Plataforma com backend FastAPI + Python, frontend Next.js + TypeScript + Redux, mobile em React Native e arquitetura RAG para gerar devocionais personalizados.",
      en: "Platform with a FastAPI + Python backend, Next.js + TypeScript + Redux frontend, React Native mobile app, and RAG architecture to generate personalized devotionals.",
      es: "Plataforma con backend FastAPI + Python, frontend Next.js + TypeScript + Redux, mobile en React Native y arquitectura RAG para generar devocionales personalizados."
    },
    result: {
      pt: "Aplicação multiplataforma completa com API REST, web app e mobile, gerando devocionais personalizados por IA com base teológica sólida.",
      en: "Complete multiplatform application with REST API, web app, and mobile, generating AI-powered personalized devotionals with solid theological foundation.",
      es: "Aplicación multiplataforma completa con API REST, web app y mobile, generando devocionales personalizados por IA con base teológica sólida."
    },
    tags: ["FastAPI", "Python", "Next.js", "TypeScript", "RAG", "AI"],
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "/svg/About-LogosAI.svg",
    imageDark: "/dark/About-LogosAI-dark.png",
    imageLight: "/light/About-LogosAI-light.png",
    hasPngStep: true
  },
  {
    id: 3,
    title: {
      pt: "Dataguia",
      en: "Dataguia",
      es: "Dataguia"
    },
    category: {
      pt: "Dataguia",
      en: "Dataguia",
      es: "Dataguia"
    },
    description: {
      pt: "Plataforma educacional gratuita que mapeia todo o universo da área de dados — história, subáreas, profissões, ferramentas e tecnologias — em português brasileiro.",
      en: "Free educational platform that maps the entire data universe — history, subareas, careers, tools and technologies — in Brazilian Portuguese.",
      es: "Plataforma educativa gratuita que mapea todo el universo del área de datos — historia, subáreas, profesiones, herramientas y tecnologías — en portugués brasileño."
    },
    problem: {
      pt: "A área de dados é enorme, fragmentada e intimidadora para quem está começando, e conteúdos desatualizados e dispersos dificultam o aprendizado.",
      en: "The data field is vast, fragmented, and intimidating for beginners, and outdated, scattered content makes learning harder than it should be.",
      es: "El área de datos es enorme, fragmentada e intimidante para quienes empiezan, y contenidos desactualizados y dispersos dificultan el aprendizaje."
    },
    solution: {
      pt: "Recurso centralizado e curado com mais de 15 artigos sobre a história dos dados, perfis de subáreas, guias de carreira, filtro por trilha, tema claro/escuro e animações suaves.",
      en: "Centralized, curated resource with over 15 articles on data history, subarea profiles, career guides, trail filtering, light/dark theme, and smooth animations.",
      es: "Recurso centralizado y curado con más de 15 artículos sobre la historia de los datos, perfiles de subáreas, guías de carrera, filtro por trilha y tema claro/oscuro."
    },
    result: {
      pt: "Plataforma completa com 15+ artigos, 7+ guias de profissões, cobertura da evolução dos dados (estatística à IA) e experiência responsiva.",
      en: "Complete platform with 15+ articles, 7+ career guides, coverage of data evolution (from statistics to AI), and a fully responsive experience.",
      es: "Plataforma completa con 15+ artículos, 7+ guías de profesiones, cobertura de la evolución de los datos (estadística a IA) y experiencia responsiva."
    },
    tags: ["React", "TypeScript", "Vite", "Framer Motion", "SEO"],
    githubUrl: "https://github.com/manoelja/dataguia",
    caseStudyUrl: "https://dataguia.vercel.app",
    image: "/svg/dataguia.svg",
    imageDark: "/dark/dataguia-dark.png",
    imageLight: "/light/dataguia-light.png",
    hasPngStep: true
  },
  {
    id: 4,
    title: {
      pt: "Cyber Data Security",
      en: "Cyber Data Security",
      es: "Cyber Data Security"
    },
    category: {
      pt: "Cyber Data Security",
      en: "Cyber Data Security",
      es: "Cyber Data Security"
    },
    description: {
      pt: "Hub educacional que explora a dualidade entre cibersegurança e ciência de dados — inteligência defensiva, criptografia, detecção de ameaças e ética digital.",
      en: "Educational hub exploring the duality between cybersecurity and data science — defensive intelligence, cryptography, threat detection, and digital ethics.",
      es: "Hub educativo que explora la dualidad entre ciberseguridad y ciencia de datos — inteligencia defensiva, criptografía, detección de amenazas y ética digital."
    },
    problem: {
      pt: "Falta de conhecimento acessível sobre cibersegurança e análise de dados em um mundo digital onde a informação é o ativo mais valioso e vulnerável.",
      en: "Lack of accessible knowledge about cybersecurity and data analysis in a digital world where information is the most valuable and vulnerable asset.",
      es: "Falta de conocimiento accesible sobre ciberseguridad y análisis de datos en un mundo digital donde la información es el activo más valioso y vulnerable."
    },
    solution: {
      pt: "Site educativo com design imersivo cyberpunk, módulos sobre fundamentos digitais, simbiose entre dados e segurança, currículo educacional e casos de estudo práticos.",
      en: "Educational site with immersive cyberpunk design, modules on digital fundamentals, data-security symbiosis, educational curriculum, and practical case studies.",
      es: "Sitio educativo con diseño inmersivo cyberpunk, módulos sobre fundamentos digitales, simbiosis entre datos y seguridad, currículo educativo y casos de estudio prácticos."
    },
    result: {
      pt: "Plataforma educacional bilíngue com design imersivo, tema claro/escuro, animações fluidas e conteúdo acessível sobre segurança digital e análise de dados.",
      en: "Bilingual educational platform with immersive design, light/dark theme, smooth animations, and accessible content on digital security and data analysis.",
      es: "Plataforma educativa bilingüe con diseño inmersivo, tema claro/oscuro, animaciones fluidas y contenido accesible sobre seguridad digital y análisis de datos."
    },
    tags: ["React", "TypeScript", "Cyber Security", "Data Science", "Education"],
    githubUrl: "https://github.com/manoelja/cyber-data-security",
    caseStudyUrl: "https://cyber-data-security.vercel.app",
    image: "/svg/cyber-data-security.svg",
    imageDark: "/dark/cyber-data-security-dark.png",
    imageLight: "/light/cyber-data-security-light.png",
    hasPngStep: true
  },
  {
    id: 9,
    title: {
      pt: "DATAONE",
      en: "DATAONE",
      es: "DATAONE"
    },
    category: {
      pt: "DATAONE",
      en: "DATAONE",
      es: "DATAONE"
    },
    description: {
      pt: "Plataforma web que transforma dados brutos em informações úteis — upload de CSV/Excel, limpeza, formatação, análise automática e exportação com poucos cliques.",
      en: "Web platform that turns raw data into useful information — upload CSV/Excel, clean, format, auto-analyze, and export everything in a few clicks.",
      es: "Plataforma web que convierte datos brutos en información útil — carga de CSV/Excel, limpieza, formato, análisis automático y exportación rápida con pocos clics."
    },
    problem: {
      pt: "Dados brutos são difíceis de tratar — planilhas desorganizadas, formatação inconsistente e falta de ferramentas acessíveis para limpeza e análise.",
      en: "Raw data is hard to process — messy spreadsheets, inconsistent formatting, and lack of accessible tools for cleaning and analysis.",
      es: "Los datos brutos son difíciles de procesar — hojas de cálculo desorganizadas, formato inconsistente y falta de herramientas accesibles para limpieza y análisis."
    },
    solution: {
      pt: "Plataforma web com upload inteligente, limpeza de dados, formatação de texto, análise automática com Plotly, central de fórmulas Excel e exportação formatada.",
      en: "Web platform with smart upload, data cleaning, text formatting, automatic analysis with Plotly, an Excel formula hub, and formatted export options for teams.",
      es: "Plataforma web con carga inteligente, limpieza de datos, formato de texto, análisis automático con Plotly, centro de fórmulas Excel y exportación formateada para compartir."
    },
    result: {
      pt: "Ferramenta completa de tratamento de dados que democratiza o acesso à limpeza, formatação e análise para profissionais e empresas brasileiras.",
      en: "Complete data-processing tool that democratizes access to cleaning, formatting, and analysis for Brazilian professionals and businesses.",
      es: "Herramienta completa de tratamiento de datos que democratiza el acceso a la limpieza, el formato y el análisis para profesionales y empresas brasileñas."
    },
    tags: ["Streamlit", "Python", "Pandas", "Plotly", "Data Processing"],
    githubUrl: "https://github.com/manoelja/dataone",
    caseStudyUrl: "https://dataone.streamlit.app",
    image: "/svg/dataone.svg",
    imageDark: "/dark/dataone-dark.png",
    imageLight: "/light/dataone-light.png",
    hasPngStep: true
  },
  {
    id: 10,
    title: {
      pt: "SAAU",
      en: "SAAU",
      es: "SAAU"
    },
    category: {
      pt: "SAAU",
      en: "SAAU",
      es: "SAAU"
    },
    description: {
      pt: "Sistema de Agendamento de Avaliações Universitárias — plataforma web para gerenciar provas e avaliações acadêmicas com integração institucional e notificações.",
      en: "University Exam Scheduling System — a web platform to manage exams and academic evaluations with institutional integration and notifications.",
      es: "Sistema de Programación de Evaluaciones Universitarias — plataforma web para gestionar exámenes y evaluaciones académicas con integración institucional y notificaciones."
    },
    problem: {
      pt: "Universidades enfrentam dificuldades no gerenciamento de calendários de provas: conflitos de horário, falta de comunicação e processos manuais.",
      en: "Universities struggle to manage exam calendars: schedule conflicts, a lack of centralized communication, and inefficient manual processes.",
      es: "Las universidades tienen dificultades para gestionar calendarios de exámenes: conflictos de horario, falta de comunicación centralizada y procesos manuales."
    },
    solution: {
      pt: "Plataforma web moderna com sistema de agendamento inteligente, notificações automáticas, dashboard administrativo e interface intuitiva para alunos e professores.",
      en: "Modern web platform with intelligent scheduling system, automatic notifications, administrative dashboard, and intuitive interface for students and faculty.",
      es: "Plataforma web moderna con sistema de programación inteligente, notificaciones automáticas, panel administrativo e interfaz intuitiva para estudiantes y profesores."
    },
    result: {
      pt: "Sistema completo de gestão acadêmica com eliminação de conflitos de horário, comunicação automatizada e redução significativa da carga administrativa.",
      en: "Complete academic management system eliminating schedule conflicts, automated communication, and significant reduction in administrative workload.",
      es: "Sistema completo de gestión académica que elimina conflictos de horario, automatiza la comunicación y reduce la carga administrativa de la institución."
    },
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "UI/UX"],
    githubUrl: "https://github.com/manoelja/agendamento-avaliacoes",
    caseStudyUrl: "https://agendamento-avaliacoes-xujc.vercel.app/login",
    image: "/svg/agendamento-avaliacoes.svg",
    imageDark: "/dark/agendamento-avaliacoes-dark.png",
    imageLight: "/light/agendamento-avaliacoes-light.png",
    hasPngStep: true
  },
  {
    id: 11,
    title: {
      pt: "COVID Goiânia Dashboard",
      en: "COVID Goiânia Dashboard",
      es: "COVID Goiânia Dashboard"
    },
    category: {
      pt: "COVID Goiânia",
      en: "COVID Goiânia",
      es: "COVID Goiânia"
    },
    description: {
      pt: "Dashboard interativo que conta a história da COVID-19 em Goiânia em 2021 a partir de dados oficiais do Ministério da Saúde — quase 290 mil registros de casos e óbitos.",
      en: "Interactive dashboard telling the story of COVID-19 in Goiânia in 2021 using official Ministry of Health data — nearly 290,000 case and death records.",
      es: "Dashboard interactivo que cuenta la historia de la COVID-19 en Goiânia en 2021 a partir de datos oficiales del Ministerio de Salud — casi 290.000 registros de casos y óbitos."
    },
    problem: {
      pt: "Dados reais de saúde chegam com imperfeições: foram corrigidos 6.683 registros (2,3%) sem município, semanas fora do calendário e valores negativos.",
      en: "Real health data arrives with flaws: 6,683 records (2.3%) were fixed for missing municipality, weeks outside the calendar, and negative values.",
      es: "Los datos reales de salud llegan con imperfecciones: se corrigieron 6.683 registros (2,3%) sin municipio, semanas fuera del calendario y valores negativos."
    },
    solution: {
      pt: "Limpeza e organização por município e semana epidemiológica em R, exportadas por Node.js ao navegador, sem backend. A interface React traz 7 gráficos e filtros combináveis.",
      en: "Cleaning and organization by municipality and epidemiological week in R, exported by Node.js to the browser with no backend. The React interface offers 7 charts and filters.",
      es: "Limpieza y organización por municipio y semana epidemiológica en R, exportados por Node.js al navegador, sin backend. La interfaz React ofrece 7 gráficos y filtros combinables."
    },
    result: {
      pt: "289.640 registros limpos em uma base leve que carrega na hora, com terminal interativo, 3 idiomas, tema claro/escuro e layout responsivo.",
      en: "289,640 clean records in a lightweight dataset that loads instantly, with an interactive terminal, 3 languages, light/dark theme, and a responsive layout.",
      es: "289.640 registros limpios en una base ligera que carga al instante, con terminal interactivo, 3 idiomas, tema claro/oscuro y diseño responsivo."
    },
    tags: ["React", "TypeScript", "R", "Data Viz", "COVID-19", "Saúde Pública"],
    githubUrl: "https://github.com/manoelja/r-introducion",
    caseStudyUrl: "https://r-introducion.vercel.app",
    image: "/svg/r-introduction.svg",
    imageDark: "/dark/r-introducion-dark.jpg",
    imageLight: "/light/r-introducion-light.png",
    hasPngStep: true
  },
  {
    id: 12,
    title: {
      pt: "SRAG 2026 — Estatística Descritiva",
      en: "SRAG 2026 — Descriptive Statistics",
      es: "SRAG 2026 — Estadística Descriptiva"
    },
    category: {
      pt: "Estatística Descritiva",
      en: "Descriptive Statistics",
      es: "Estadística Descriptiva"
    },
    description: {
      pt: "Site de análise descritiva das notificações de SRAG no Brasil em 2026, com dados oficiais do SIVEP-Gripe (SUS) — 170.328 registros em gráficos e filtros acessíveis.",
      en: "Descriptive analysis site for SRAG notifications in Brazil in 2026, using official SIVEP-Gripe (SUS) data — 170,328 records as accessible charts.",
      es: "Sitio de análisis descriptivo de las notificaciones de SRAG en Brasil en 2026, con datos oficiales del SIVEP-Gripe (SUS) — 170.328 registros en gráficos y filtros accesibles."
    },
    problem: {
      pt: "Planilhas gigantes cheias de números soltos dificultam entender como as internações e óbitos por vírus respiratórios se comportaram em 2026.",
      en: "Giant spreadsheets full of disconnected numbers make it hard to understand how hospitalizations and deaths from respiratory viruses behaved in 2026.",
      es: "Hojas de cálculo gigantes llenas de números sueltos dificultan entender cómo se comportaron las internaciones y óbitos por virus respiratorios en 2026."
    },
    solution: {
      pt: "Pipeline sem backend: um script em Node.js lê o CSV bruto e gera os dados consumidos pelo React. São 8 itens de análise descritiva, de tabelas de frequência a box-plots.",
      en: "Backend-free pipeline: a Node.js script reads the raw CSV and generates the data React consumes. There are 8 descriptive analysis items, from frequencies to box-plots.",
      es: "Pipeline sin backend: un script en Node.js lee el CSV bruto y genera los datos que consume React. Son 8 ítems de análisis descriptivo, de tablas de frecuencia a box-plots."
    },
    result: {
      pt: "Análise completa com exportação de relatórios em PDF, laboratório de fórmulas com mini-visualizações SVG, 3 idiomas e tema claro/escuro.",
      en: "Complete analysis with PDF report export, a formula lab with SVG mini-visualizations, 3 languages, and a responsive light/dark theme.",
      es: "Análisis completo con exportación de informes en PDF, laboratorio de fórmulas con mini-visualizaciones SVG, 3 idiomas y tema claro/oscuro."
    },
    tags: ["React", "TypeScript", "Vite", "Data Viz", "Estatística Descritiva", "SIVEP-Gripe"],
    githubUrl: "https://github.com/manoelja/descriptive-statistics",
    caseStudyUrl: "https://descriptive-statistics.vercel.app",
    image: "/svg/descriptive-statistics.svg",
    imageDark: "/dark/descriptive-statistics-dark.jpg",
    imageLight: "/light/descriptive-statistics-light.jpg",
    hasPngStep: true
  }
];
