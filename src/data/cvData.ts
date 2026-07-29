export interface CVExperience {
  role: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface CVData {
  name: string;
  title: string;
  summary: string;
  experienceTitle: string;
  experiences: CVExperience[];
  skillsList: {
    languages: string;
    ml: string;
    dl: string;
    data: string;
    viz: string;
  };
  additional: string;
  additionalItems: string[];
  ageText: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export const cvData: Record<string, CVData> = {
  pt: {
    name: "Manoel",
    title: "Analista de TI | Pós-Graduando em Data Science & Estatística Aplicada",
    summary: "Tecnólogo em Gestão da TI e pós-graduando em Data Science e Estatística Aplicada pela UFG. Possui experiência prática em análise de dados, administração e infraestrutura de TI no setor público, além de desenvolvimento de sistemas web, automação de processos e suporte. Atuação destacada na gestão tecnológica municipal, na liderança e criação de sistemas de agendamento acadêmico e na participação em projetos governamentais de Saúde Digital e Inovação Tecnológica.",
    experienceTitle: "Experiência Profissional",
    experiences: [
      {
        role: "Analista de TI",
        period: "Fev 2026 - Dez 2026",
        description: "Prefeitura Municipal de Edealina — Edealina, GO",
        bullets: [
          "Gestão de Infraestrutura e Sistemas: Atuação no suporte, gerenciamento e otimização dos sistemas de informação e da infraestrutura tecnológica municipal.",
          "Análise de Dados e Processos: Implementação de rotinas para controle de dados operacionais e melhoria de fluxos de trabalho administrativos.",
          "Suporte Técnico e Soluções: Atendimento especializado aos setores governamentais, garantindo a continuidade, segurança e eficiência dos serviços tecnológicos públicos."
        ]
      },
      {
        role: "Estagiário de TI / Desenvolvedor de Sistemas",
        period: "Mar 2025 - Dez 2025",
        description: "FESG / UniCerrado — Goiatuba, GO",
        bullets: [
          "Desenvolvimento de Software: Idealizou e desenvolveu o novo Sistema de Agendamento de Avaliações da UniCerrado (SAAU), aplicando boas práticas de desenvolvimento de código para atender aos requisitos operacionais da instituição.",
          "Gestão & Cronogramas: Realizou o planejamento e controle do cronograma do projeto, definindo etapas, metas e datas limite para assegurar a entrega da solução rigorosamente dentro do prazo.",
          "Garantia de Qualidade (QA): Monitorou a qualidade do trabalho executado, sugerindo melhorias de processos e intervenções técnicas para otimizar o desempenho das equipes."
        ]
      },
      {
        role: "Estagiário de TI/Suporte e Analise de TI",
        period: "Mar 2025 - Dez 2025",
        description: "IEL — Edealina, GO",
        bullets: [
          "Gestão de Dados: Elaborou e atualizou planilhas de controle e registro de informações essenciais, otimizando a consulta rápida de contatos e dados organizacionais.",
          "Organização Documental: Responsável pela padronização, arquivamento e organização de documentos físicos e digitais para fácil rastreabilidade e consulta."
        ]
      }
    ],
    skillsList: {
      languages: "Linguagens: Python, SQL, TypeScript",
      ml: "Machine Learning & Analytics: Power BI, Scikit-Learn, Estatística Aplicada",
      dl: "Deep Learning & NLP: Fundamentos de IA e Data Science",
      data: "Engenharia de Dados: SQL, Fundamentos de Engenharia de Dados, Automação",
      viz: "Visualização: Power BI, Streamlit, Python (Matplotlib)"
    },
    additional: "Projetos & Publicações",
    additionalItems: [
      "PET - Saúde Digital: Do Cerrado à Nuvem — Projeto aprovado pelo Ministério da Saúde, atuando no desenvolvimento de ferramentas digitais e soluções baseadas em computação em nuvem para o SUS (Ago 2025 - Dez 2025).",
      "Artigo Publicado: \"Os Impactos Socioeconômicos das Criptomoedas e da Tecnologia Blockchain no Futuro do Brasil: Desafios e Oportunidades\" — Revista FOCO."
    ],
    ageText: "21 anos",
    location: "Edealina, Goiás - Brasil",
    linkedin: "linkedin.com/in/manoelja",
    github: "github.com/manoelja",
    website: "https://manoelja.vercel.app"
  },
  en: {
    name: "Manoel",
    title: "IT Analyst | Postgraduate Student in Data Science & Applied Statistics",
    summary: "IT Management Technologist and postgraduate student in Data Science and Applied Statistics at UFG. Has practical experience in data analysis, IT administration and infrastructure in the public sector, as well as web systems development, process automation and support. Notable work in municipal technology management, leading the creation of academic scheduling systems, and participating in government Digital Health and Technological Innovation projects.",
    experienceTitle: "Professional Experience",
    experiences: [
      {
        role: "IT Analyst",
        period: "Feb 2026 - Dec 2026",
        description: "Municipal Government of Edealina — Edealina, GO",
        bullets: [
          "Infrastructure & Systems Management: Support, management and optimization of municipal information systems and technological infrastructure.",
          "Data Analysis & Processes: Implementation of routines for operational data control and improvement of administrative workflows.",
          "Technical Support & Solutions: Specialized service to government sectors, ensuring continuity, security and efficiency of public technology services."
        ]
      },
      {
        role: "IT Intern / Systems Developer",
        period: "Mar 2025 - Dec 2025",
        description: "FESG / UniCerrado — Goiatuba, GO",
        bullets: [
          "Software Development: Conceived and developed the new UniCerrado Exam Scheduling System (SAAU), applying good coding practices to meet the institution's operational requirements.",
          "Project Management: Planned and controlled the project schedule, defining stages, goals and deadlines to ensure delivery strictly on time.",
          "Quality Assurance: Monitored work quality, suggesting process improvements and technical interventions to optimize team performance."
        ]
      },
      {
        role: "IT/Support Intern and IT Analysis",
        period: "Mar 2025 - Dec 2025",
        description: "IEL — Edealina, GO",
        bullets: [
          "Data Management: Created and updated control spreadsheets and records of essential information, optimizing quick consultation of contacts and organizational data.",
          "Document Organization: Responsible for standardization, filing and organization of physical and digital documents for easy traceability and consultation."
        ]
      }
    ],
    skillsList: {
      languages: "Languages: Python, SQL, TypeScript",
      ml: "Machine Learning & Analytics: Power BI, Scikit-Learn, Applied Statistics",
      dl: "Deep Learning & NLP: AI and Data Science Fundamentals",
      data: "Data Engineering: SQL, Data Engineering Fundamentals, Automation",
      viz: "Visualization: Power BI, Streamlit, Python (Matplotlib)"
    },
    additional: "Projects & Publications",
    additionalItems: [
      "PET - Digital Health: From the Cerrado to the Cloud — Project approved by the Ministry of Health, working on digital tools and cloud-based solutions for the public health system (SUS) (Aug 2025 - Dec 2025).",
      "Published Article: \"The Socioeconomic Impacts of Cryptocurrencies and Blockchain Technology on the Future of Brazil: Challenges and Opportunities\" — FOCO Journal."
    ],
    ageText: "21 years old",
    location: "Edealina, Goiás - Brazil",
    linkedin: "linkedin.com/in/manoelja",
    github: "github.com/manoelja",
    website: "https://manoelja.vercel.app"
  },
  es: {
    name: "Manoel",
    title: "Analista de TI | Estudiante de Posgrado en Ciencia de Datos y Estadística Aplicada",
    summary: "Tecnólogo en Gestión de TI y estudiante de posgrado en Ciencia de Datos y Estadística Aplicada en la UFG. Tiene experiencia práctica en análisis de datos, administración e infraestructura de TI en el sector público, así como desarrollo de sistemas web, automatización de procesos y soporte. Actuación destacada en la gestión tecnológica municipal, liderando la creación de sistemas de programación académica y participando en proyectos gubernamentales de Salud Digital e Innovación Tecnológica.",
    experienceTitle: "Experiencia Profesional",
    experiences: [
      {
        role: "Analista de TI",
        period: "Feb 2026 - Dic 2026",
        description: "Gobierno Municipal de Edealina — Edealina, GO",
        bullets: [
          "Gestión de Infraestructura y Sistemas: Soporte, gestión y optimización de sistemas de información e infraestructura tecnológica municipal.",
          "Análisis de Datos y Procesos: Implementación de rutinas para control de datos operativos y mejora de flujos de trabajo administrativos.",
          "Soporte Técnico y Soluciones: Atención especializada a sectores gubernamentales, garantizando continuidad, seguridad y eficiencia de los servicios tecnológicos públicos."
        ]
      },
      {
        role: "Pasante de TI / Desarrollador de Sistemas",
        period: "Mar 2025 - Dic 2025",
        description: "FESG / UniCerrado — Goiatuba, GO",
        bullets: [
          "Desarrollo de Software: Concibió y desarrolló el nuevo Sistema de Programación de Exámenes de UniCerrado (SAAU), aplicando buenas prácticas de codificación.",
          "Gestión de Proyectos: Planificó y controló el cronograma del proyecto, definiendo etapas, metas y plazos para garantizar la entrega a tiempo.",
          "Aseguramiento de Calidad (QA): Monitoreó la calidad del trabajo, sugiriendo mejoras de procesos e intervenciones técnicas."
        ]
      },
      {
        role: "Pasante de TI/Soporte y Análisis de TI",
        period: "Mar 2025 - Dic 2025",
        description: "IEL — Edealina, GO",
        bullets: [
          "Gestión de Datos: Creó y actualizó hojas de cálculo de control y registro de información esencial.",
          "Organización Documental: Responsable de estandarización, archivo y organización de documentos físicos y digitales."
        ]
      }
    ],
    skillsList: {
      languages: "Idiomas: Python, SQL, TypeScript",
      ml: "Machine Learning y Analytics: Power BI, Scikit-Learn, Estadística Aplicada",
      dl: "Deep Learning y NLP: Fundamentos de IA y Ciencia de Datos",
      data: "Ingeniería de Datos: SQL, Fundamentos de Ingeniería de Datos, Automatización",
      viz: "Visualización: Power BI, Streamlit, Python (Matplotlib)"
    },
    additional: "Proyectos y Publicaciones",
    additionalItems: [
      "PET - Salud Digital: Del Cerrado a la Nube — Proyecto aprobado por el Ministerio de Salud, trabajando en herramientas digitales y soluciones basadas en la nube para el SUS (Ago 2025 - Dic 2025).",
      "Artículo Publicado: \"Los Impactos Socioeconómicos de las Criptomonedas y la Tecnología Blockchain en el Futuro de Brasil: Desafíos y Oportunidades\" — Revista FOCO."
    ],
    ageText: "21 años",
    location: "Edealina, Goiás - Brasil",
    linkedin: "linkedin.com/in/manoelja",
    github: "github.com/manoelja",
    website: "https://manoelja.vercel.app"
  }
};
