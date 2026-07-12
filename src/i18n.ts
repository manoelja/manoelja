import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        menu_open: "Open menu",
        menu_close: "Close menu",
        change_language: "Change Language"
      },
      about: {
        title: "About Me",
        description: "I transform raw data into strategic intelligence. Combining a solid foundation in IT with specialization in Data Science, I focus on solving complex problems through analytics and predictive models that generate real business value.",
        age: "{{count}} years old",
        age_label: "Age",
        birth_date: "Birth Date",
        nationality_label: "Nationality",
        naturality_label: "Place of Birth",
        detailed_profile: "Passionate about the intersection of technology and business. My approach combines rigorous statistical modeling with a keen eye for operational efficiency. Expert in building data pipelines that drive real-world impact.",
        graduation_label: "Technologist",
        graduation_title: "Information Technology Management",
        graduation_inst: "UniCerrado",
        postgrad_label: "Postgraduate",
        postgrad_title: "Postgraduate in Data Science and Applied Statistics",
        postgrad_inst: "UFG - Federal University of Goiás"
      },
      hero: {
        badge: "Available for new projects",
        greeting: "Hi, I'm",
        title_pre: "",
        title_highlight: "Data Scientist",
        description: "Specialized in transforming large volumes of data into business intelligence through Machine Learning and advanced statistical modeling.",
        about_me: "Dedicated to solving complex problems through data analysis and specialized in Data Science.",
        view_projects: "View Projects",
        scroll: "Scroll"
      },
      skills: {
        title: "Tech Stack",
        categories: {
          languages: "Languages",
          databases: "Databases",
          ml: "Machine Learning",
          data_manipulation: "Data Manipulation",
          deep_learning: "Deep Learning",
          visualization: "Visualization",
          cloud: "Cloud",
          mlops: "MLOps",
          tools: "Tools"
        }
      },
      projects: {
        title: "Selected Projects",
        view_code: "View Code",
        challenge: "Challenge",
        impact: "Impact"
      },
      footer: {
        title: "Let's talk?",
        description: "I'm always open to new projects and collaborations in Data Science.",
        email_label: "Send Email",
        copyright: "© 2026 DS.Manoel. All rights reserved.",
        rights: "All rights reserved.",
        developed_with: "Developed with"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        contact: "Contato",
        menu_open: "Abrir menu",
        menu_close: "Fechar menu",
        change_language: "Mudar Idioma"
      },
      about: {
        title: "Sobre Mim",
        description: "Transformo dados brutos em inteligência estratégica. Unindo uma sólida base em TI com a especialização em Data Science, foco em resolver problemas complexos através de analytics e modelos preditivos que geram valor real para o negócio.",
        age: "{{count}} anos",
        age_label: "Idade",
        birth_date: "Data de Nascimento",
        nationality_label: "Nacionalidade",
        naturality_label: "Naturalidade",
        detailed_profile: "Apaixonado pela intersecção entre tecnologia e negócios. Minha abordagem combina modelagem estatística rigorosa com um olhar atento à eficiência operacional. Especialista em construir pipelines de dados que geram impacto real.",
        mission_label: "Minha Missão",
        mission_text: "Conectar o abismo entre dados brutos e inteligência acionável, capacitando organizações a tomarem decisões baseadas em dados com total confiança.",
        graduation_label: "Tecnólogo",
        graduation_title: "Gestão da Tecnologia da Informação",
        graduation_inst: "UniCerrado",
        postgrad_label: "Lato Sensu",
        postgrad_title: "Pós-Graduação em Data Science e Estatística Aplicada",
        postgrad_inst: "UFG - Universidade Federal de Goiás"
      },
      hero: {
        badge: "Disponível para novos projetos",
        title_pre: "Manoel",
        title_highlight: "Cientista de Dados",
        description: "Especializado em transformar grandes volumes de dados em inteligência de negócio através de Machine Learning e modelagem estatística avançada.",
        about_me: "Dedicado a resolver problemas complexos através da análise de dados e especializado em Data Science.",
        view_projects: "Ver Projetos",
        scroll: "Role para baixo"
      },
      skills: {
        title: "Tech Stack",
        categories: {
          languages: "Linguagens",
          databases: "Banco de Dados",
          ml: "Machine Learning",
          data_manipulation: "Manipulação de Dados",
          deep_learning: "Deep Learning",
          visualization: "Visualização",
          cloud: "Cloud",
          mlops: "MLOps",
          tools: "Ferramentas"
        }
      },
      projects: {
        title: "Projetos Selecionados",
        view_code: "Ver Código",
        challenge: "Desafio",
        impact: "Impacto"
      },
      footer: {
        title: "Vamos conversar?",
        description: "Estou sempre aberto a novos projetos e colaborações em Ciência de Dados.",
        email_label: "Enviar E-mail",
        copyright: "© 2026 DS.Manoel. Todos os direitos reservados.",
        rights: "Todos os direitos reservados.",
        developed_with: "Desenvolvido com"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        menu_open: "Abrir menú",
        menu_close: "Cerrar menú",
        change_language: "Cambiar Idioma"
      },
      about: {
        title: "Sobre Mí",
        description: "Transformo datos brutos en inteligencia estratégica. Combinando una base sólida en TI con la especialización en Ciencia de Datos, me enfoco en resolver problemas complejos a través de analítica y modelos predictivos que generan valor real para el negocio.",
        age: "{{count}} años",
        age_label: "Edad",
        birth_date: "Fecha de Nacimiento",
        nationality_label: "Nacionalidad",
        naturality_label: "Naturalidad",
        graduation_label: "Tecnólogo",
        graduation_title: "Gestión de la Tecnología de la Información",
        graduation_inst: "UniCerrado",
        postgrad_label: "Postgrado",
        postgrad_title: "Postgrado en Ciencia de Datos y Estadística Aplicada",
        postgrad_inst: "UFG - Universidad Federal de Goiás"
      },
      hero: {
        badge: "Disponible para nuevos proyectos",
        title_pre: "Manoel",
        title_highlight: "Científico de Dados",
        description: "Especializado en transformar grandes volúmenes de datos en inteligencia de negocio a través de Machine Learning y modelado estatístico avanzado.",
        about_me: "Dedicado a resolver problemas complejos a través del análisis de datos y especializado en Ciencia de Datos.",
        view_projects: "Ver Proyectos",
        scroll: "Desplázate"
      },
      skills: {
        title: "Tech Stack",
        categories: {
          languages: "Idiomas",
          databases: "Bases de Datos",
          ml: "Machine Learning",
          data_manipulation: "Manipulación de Dados",
          deep_learning: "Deep Learning",
          visualization: "Visualización",
          cloud: "Cloud",
          mlops: "MLOps",
          tools: "Herramientas"
        }
      },
      projects: {
        title: "Proyectos Seleccionados",
        view_code: "Ver Código",
        challenge: "Desafío",
        impact: "Impacto"
      },
      footer: {
        title: "¿Hablamos?",
        description: "Siempre estoy abierto a novos proyectos y colaboraciones en Ciencia de Dados.",
        email_label: "Enviar E-mail",
        copyright: "© 2026 DS.Manoel. Todos los derechos reservados.",
        rights: "Todos los derechos reservados.",
        developed_with: "Desarrollado con"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
