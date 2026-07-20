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
  ageText: string;
  location: string;
  email: string;
  website: string;
}

export const cvData: Record<string, CVData> = {
  pt: {
    name: "Manoel",
    title: "Cientista de Dados & Engenheiro de ML",
    summary: "Profissional de tecnologia focado em gerar valor de negócio através de inteligência de dados. Especialista em construir modelos preditivos, pipelines de dados robustos e análises estatísticas para resolver problemas operacionais complexos. Combina uma base sólida em gestão de TI com especialização avançada em ciência de dados pela UFG.",
    experienceTitle: "Projetos de Destaque / Experiência",
    experiences: [
      {
        role: "Líder de Desenvolvimento - Soluções de IA",
        period: "2024 - Presente",
        description: "Desenvolvimento de modelos de ponta a ponta para otimização de negócios.",
        bullets: [
          "Previsão de Churn: Implementação de modelo Random Forest com redução de 20% projetada no cancelamento de clientes.",
          "Otimização de Estoque: Redução de 12% nos níveis de estoque de produtos perecíveis com modelo Prophet.",
          "Detecção de Fraude: Sistema utilizando Isolation Forest e Autoencoders com redução de 30% em perdas."
        ]
      },
      {
        role: "Pesquisador & Desenvolvedor NLP / Vision",
        period: "2023 - 2024",
        description: "Aplicações de Deep Learning para dados não estruturados.",
        bullets: [
          "Análise de Sentimento: Pipeline BERT em tempo real com dashboard e 92% de precisão.",
          "Visão Computacional: Segmentação semântica U-Net para monitoramento ambiental via satélite, com aumento de 400% na velocidade de análise."
        ]
      }
    ],
    skillsList: {
      languages: "Linguagens: Python, R, SQL, TypeScript",
      ml: "Machine Learning: Scikit-Learn, XGBoost, Prophet",
      dl: "Deep Learning & NLP: PyTorch, TensorFlow, Keras, BERT, OpenCV",
      data: "Engenharia de Dados: Spark, Kafka, Redis, SQL Server",
      viz: "Visualização: Tableau, Streamlit, Pandas, Matplotlib"
    },
    additional: "Informações Adicionais",
    ageText: "21 anos",
    location: "Goiatuba, Goiás - Brasil",
    email: "manoel.ds@exemplo.com",
    website: "dsmanoel.dev"
  },
  en: {
    name: "Manoel",
    title: "Data Scientist & ML Engineer",
    summary: "Technology professional focused on generating business value through data intelligence. Specialist in building predictive models, robust data pipelines, and statistical analyses to solve complex operational problems. Combines a solid foundation in IT management with advanced specialization in Data Science from UFG.",
    experienceTitle: "Key Projects / Experience",
    experiences: [
      {
        role: "Lead Developer — AI Solutions",
        period: "2024 - Present",
        description: "End-to-end development of predictive and optimization machine learning models.",
        bullets: [
          "Churn Prediction: Implemented a Random Forest model projecting a 20% reduction in customer churn.",
          "Inventory Optimization: 12% reduction in perishable inventory levels utilizing seasonal Prophet models.",
          "Fraud Detection: System utilizing Isolation Forest and Autoencoders resulting in a 30% loss reduction."
        ]
      },
      {
        role: "NLP & Computer Vision Researcher",
        period: "2023 - 2024",
        description: "Applied Deep Learning applications for unstructured text and image datasets.",
        bullets: [
          "Sentiment Analysis: Real-time BERT pipeline and dashboard achieving 92% classification accuracy.",
          "Computer Vision: Semantic segmentation U-Net model for environmental satellite monitoring, accelerating analysis by 400%."
        ]
      }
    ],
    skillsList: {
      languages: "Languages: Python, R, SQL, TypeScript",
      ml: "Machine Learning: Scikit-Learn, XGBoost, Prophet",
      dl: "Deep Learning & NLP: PyTorch, TensorFlow, Keras, BERT, OpenCV",
      data: "Data Engineering: Spark, Kafka, Redis, SQL Server",
      viz: "Visualization: Tableau, Streamlit, Pandas, Matplotlib"
    },
    additional: "Additional Info",
    ageText: "21 years old",
    location: "Goiatuba, Goiás - Brazil",
    email: "manoel.ds@exemplo.com",
    website: "dsmanoel.dev"
  },
  es: {
    name: "Manoel",
    title: "Científico de Datos & Ingeniero de ML",
    summary: "Profesional de tecnología enfocado en generar valor comercial a través de la inteligencia de datos. Especialista en la construcción de modelos predictivos, pipelines de datos robustos y análisis estadísticos para resolver problemas operativos complejos. Combina una sólida base en gestión de TI con especialización avanzada en Ciencia de Datos por la UFG.",
    experienceTitle: "Proyectos Destacados / Experiencia",
    experiences: [
      {
        role: "Desarrollador Líder - Soluciones de IA",
        period: "2024 - Presente",
        description: "Desarrollo de extremo a extremo de modelos de aprendizaje automático predictivos y de optimización.",
        bullets: [
          "Predicción de Churn: Implementación de modelo Random Forest con reducción proyectada de 20% en cancelaciones.",
          "Optimización de Inventario: Reducción de 12% en inventario perecedero utilizando modelos estacionales Prophet.",
          "Detección de Fraude: Sistema utilizando Isolation Forest y Autoencoders resultando en reducción de 30% en pérdidas."
        ]
      },
      {
        role: "Desarrollador NLP & Visión / Investigador",
        period: "2023 - 2024",
        description: "Aplicación de redes neuronales profundas para procesamiento de textos e imágenes.",
        bullets: [
          "Análisis de Sentimiento: Pipeline BERT en tiempo real con panel de control y 92% de precisión.",
          "Visión por Computador: Segmentación semántica U-Net para monitoreo ambiental satelital, acelerando el análisis en 400%."
        ]
      }
    ],
    skillsList: {
      languages: "Idiomas: Python, R, SQL, TypeScript",
      ml: "Machine Learning: Scikit-Learn, XGBoost, Prophet",
      dl: "Deep Learning & NLP: PyTorch, TensorFlow, Keras, BERT, OpenCV",
      data: "Ingeniería de Datos: Spark, Kafka, Redis, SQL Server",
      viz: "Visualización: Tableau, Streamlit, Pandas, Matplotlib"
    },
    additional: "Información Adicional",
    ageText: "21 años",
    location: "Goiatuba, Goiás - Brasil",
    email: "manoel.ds@exemplo.com",
    website: "dsmanoel.dev"
  }
};
