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
      pt: "Dashboard interativo que visualiza dados de nascidos vivos no Brasil (2019–2023) usando informações reais do SINASC/DataSUS, permitindo explorar indicadores de saúde pública de forma acessível.",
      en: "Interactive dashboard visualizing Brazilian live birth data (2019–2023) using real SINASC/DataSUS data, enabling accessible exploration of public health indicators.",
      es: "Dashboard interactivo que visualiza datos de nacidos vivos en Brasil (2019–2023) usando datos reales del SINASC/DataSUS, permitiendo explorar indicadores de salud pública de forma accesible."
    },
    problem: {
      pt: "Dados brutos de saúde pública são difíceis de analisar — planilhas enormes, registros inconsistentes e ausência de visualizações acessíveis dificultam a tomada de decisão.",
      en: "Raw public health data is hard to analyze — massive spreadsheets, inconsistent records, and lack of accessible visualizations hinder decision-making.",
      es: "Los datos brutos de salud pública son difíciles de analizar — hojas de cálculo enormes, registros inconsistentes y falta de visualizaciones accesibles dificultan la toma de decisiones."
    },
    solution: {
      pt: "Dashboard interativo construído com React + TypeScript, processamento de dados em R com persistência em SQLite, e limpeza rigorosa removendo 9,4% de registros inconsistentes.",
      en: "Interactive dashboard built with React + TypeScript, data processing in R with SQLite persistence, and rigorous cleaning removing 9.4% of inconsistent records.",
      es: "Dashboard interactivo construido con React + TypeScript, procesamiento de datos en R con persistencia en SQLite, y limpieza rigurosa eliminando el 9,4% de registros inconsistentes."
    },
    result: {
      pt: "5.510 registros limpos analisados com 7 tipos de gráficos interativos, suporte a 3 idiomas e análise de 27 estados brasileiros.",
      en: "5,510 cleaned records analyzed with 7 interactive chart types, 3-language support, and analysis across all 27 Brazilian states.",
      es: "5.510 registros limpios analizados con 7 tipos de gráficos interactivos, soporte a 3 idiomas y análisis de los 27 estados brasileños."
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
      pt: "Plataforma multiplataforma (Mobile e Web) de personalização espiritual com IA Generativa — o usuário define duração e tema do devocional e a IA gera conteúdo teologicamente fundamentado na Bíblia via arquitetura RAG.",
      en: "Multiplatform (Mobile & Web) spiritual personalization platform with Generative AI — users set duration and theme, and AI generates theologically grounded Bible content via RAG architecture.",
      es: "Plataforma multiplataforma (Mobile y Web) de personalización espiritual con IA Generativa — el usuario define duración y tema, y la IA genera contenido teológicamente fundamentado en la Biblia via arquitectura RAG."
    },
    problem: {
      pt: "Dificuldade em encontrar devocionais personalizados que se adaptem ao momento emocional e à duração desejada pelo usuário.",
      en: "Difficulty finding personalized devotionals that adapt to the user's emotional state and desired duration.",
      es: "Dificultad para encontrar devocionales personalizados que se adapten al momento emocional y a la duración deseada por el usuario."
    },
    solution: {
      pt: "Plataforma com backend FastAPI + Python, frontend Next.js + TypeScript + Redux, mobile React Native e arquitetura RAG para gerar devocionais personalizados com fundamentação bíblica.",
      en: "Platform with FastAPI + Python backend, Next.js + TypeScript + Redux frontend, React Native mobile, and RAG architecture to generate personalized devotionals with biblical foundation.",
      es: "Plataforma con backend FastAPI + Python, frontend Next.js + TypeScript + Redux, mobile React Native y arquitectura RAG para generar devocionales personalizados con fundamentación bíblica."
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
      pt: "A área de dados é enorme, fragmentada e intimidadora para iniciantes. Conteúdos desatualizados e dispersos dificultam o aprendizado.",
      en: "The data field is vast, fragmented, and intimidating for beginners. Outdated and scattered content makes learning difficult.",
      es: "El área de datos es enorme, fragmentada e intimidante para principiantes. Contenidos desactualizados y dispersos dificultan el aprendizaje."
    },
    solution: {
      pt: "Recurso centralizado e curado com mais de 15 artigos sobre a história dos dados, perfis de subáreas, guias de carreira, filtro por trilha, tema claro/escuro e animações suaves.",
      en: "Centralized, curated resource with over 15 articles on data history, subarea profiles, career guides, trail filtering, light/dark theme, and smooth animations.",
      es: "Recurso centralizado y curado con más de 15 artículos sobre la historia de los datos, perfiles de subáreas, guías de carrera, filtro por trilha, tema claro/oscuro y animaciones suaves."
    },
    result: {
      pt: "Plataforma educacional completa com 15+ artigos, 7+ guias de profissões, cobertura da evolução dos dados (da estatística antiga à IA generativa) e experiência responsiva.",
      en: "Complete educational platform with 15+ articles, 7+ career guides, coverage of data evolution (from ancient statistics to generative AI), and responsive experience.",
      es: "Plataforma educativa completa con 15+ artículos, 7+ guías de profesiones, cobertura de la evolución de los datos (de la estadística antigua a la IA generativa) y experiencia responsiva."
    },
    tags: ["React", "TypeScript", "Vite", "Framer Motion", "SEO"],
    githubUrl: "https://github.com/manoelja/dataguia",
    caseStudyUrl: "https://dataguia.vercel.app/",
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
      pt: "Falta de conhecimento acessível sobre cibersegurança e análise de dados em um mundo digital onde a informação é o ativo mais valioso.",
      en: "Lack of accessible knowledge about cybersecurity and data analysis in a digital world where information is the most valuable asset.",
      es: "Falta de conocimiento accesible sobre ciberseguridad y análisis de datos en un mundo digital donde la información es el activo más valioso."
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
    caseStudyUrl: "https://cyber-data-security.vercel.app/",
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
      en: "Web platform that turns raw data into useful information — upload CSV/Excel, clean, format, auto-analyze, and export in just a few clicks.",
      es: "Plataforma web que convierte datos brutos en información útil — carga de CSV/Excel, limpieza, formato, análisis automático y exportación con pocos clics."
    },
    problem: {
      pt: "Dados brutos são difíceis de tratar — planilhas desorganizadas, formatação inconsistente e falta de ferramentas acessíveis para limpeza e análise.",
      en: "Raw data is hard to process — messy spreadsheets, inconsistent formatting, and lack of accessible tools for cleaning and analysis.",
      es: "Los datos brutos son difíciles de procesar — hojas de cálculo desorganizadas, formato inconsistente y falta de herramientas accesibles para limpieza y análisis."
    },
    solution: {
      pt: "Plataforma web com upload inteligente, limpeza de dados, formatação de texto, análise automática com Plotly, central de fórmulas Excel e exportação formatada.",
      en: "Web platform with smart upload, data cleaning, text formatting, automatic analysis with Plotly, Excel formula hub, and formatted export.",
      es: "Plataforma web con carga inteligente, limpieza de datos, formato de texto, análisis automático con Plotly, centro de fórmulas Excel y exportación formateada."
    },
    result: {
      pt: "Ferramenta completa de tratamento de dados que democratiza o acesso à limpeza e análise para profissionais e empresas brasileiras.",
      en: "Complete data processing tool that democratizes access to data cleaning and analysis for Brazilian professionals and businesses.",
      es: "Herramienta completa de procesamiento de datos que democratiza el acceso a la limpieza y análisis para profesionales y empresas brasileñas."
    },
    tags: ["Streamlit", "Python", "Pandas", "Plotly", "Data Processing"],
    githubUrl: "https://github.com/manoelja/dataone",
    caseStudyUrl: "https://dataone.streamlit.app/",
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
      pt: "Sistema de Agendamento de Avaliações Universitárias — plataforma web para gerenciamento de provas e avaliações acadêmicas com integração institucional.",
      en: "University Exam Scheduling System — web platform for managing exams and academic evaluations with institutional integration.",
      es: "Sistema de Programación de Evaluaciones Universitarias — plataforma web para gestión de exámenes y evaluaciones académicas con integración institucional."
    },
    problem: {
      pt: "Universidades enfrentam dificuldades no gerenciamento de calendários de provas — conflitos de horário, falta de comunicação centralizada e processos manuais ineficientes.",
      en: "Universities face difficulties managing exam calendars — schedule conflicts, lack of centralized communication, and inefficient manual processes.",
      es: "Las universidades enfrentan dificultades en la gestión de calendarios de exámenes — conflictos de horario, falta de comunicación centralizada y procesos manuales ineficientes."
    },
    solution: {
      pt: "Plataforma web moderna com sistema de agendamento inteligente, notificações automáticas, dashboard administrativo e interface intuitiva para alunos e professores.",
      en: "Modern web platform with intelligent scheduling system, automatic notifications, administrative dashboard, and intuitive interface for students and faculty.",
      es: "Plataforma web moderna con sistema de programación inteligente, notificaciones automáticas, panel administrativo e interfaz intuitiva para estudiantes y profesores."
    },
    result: {
      pt: "Sistema completo de gestão acadêmica com eliminação de conflitos de horário, comunicação automatizada e redução significativa da carga administrativa.",
      en: "Complete academic management system eliminating schedule conflicts, automated communication, and significant reduction in administrative workload.",
      es: "Sistema completo de gestión académica con eliminación de conflictos de horario, comunicación automatizada y reducción significativa de la carga administrativa."
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
      pt: "Em Breve",
      en: "Coming Soon",
      es: "Próximamente"
    },
    category: {
      pt: "Em Breve",
      en: "Coming Soon",
      es: "Próximamente"
    },
    description: {
      pt: "",
      en: "",
      es: ""
    },
    problem: {
      pt: "",
      en: "",
      es: ""
    },
    solution: {
      pt: "",
      en: "",
      es: ""
    },
    result: {
      pt: "",
      en: "",
      es: ""
    },
    tags: [],
    githubUrl: "#",
    comingSoon: true
  },
  {
    id: 12,
    title: {
      pt: "Em Breve",
      en: "Coming Soon",
      es: "Próximamente"
    },
    category: {
      pt: "Em Breve",
      en: "Coming Soon",
      es: "Próximamente"
    },
    description: {
      pt: "",
      en: "",
      es: ""
    },
    problem: {
      pt: "",
      en: "",
      es: ""
    },
    solution: {
      pt: "",
      en: "",
      es: ""
    },
    result: {
      pt: "",
      en: "",
      es: ""
    },
    tags: [],
    githubUrl: "#",
    comingSoon: true
  }
];
