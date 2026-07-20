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
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "Previsão de Churn de Clientes",
      en: "Customer Churn Prediction",
      es: "Predicción de Churn de Clientes"
    },
    category: {
      pt: "Machine Learning",
      en: "Machine Learning",
      es: "Aprendizaje Automático"
    },
    description: {
      pt: "Modelo preditivo para identificar clientes com alta probabilidade de cancelamento.",
      en: "Predictive model to identify at-risk customers before churn occurs.",
      es: "Modelo predictivo para identificar clientes con alta probabilidad de cancelación."
    },
    problem: {
      pt: "A empresa estava perdendo 15% da base de clientes mensalmente sem entender os motivos.",
      en: "The company was losing 15% of its customer base monthly with no visibility into the root causes.",
      es: "La empresa perdía el 15% de su base de clientes mensualmente sin entender los motivos."
    },
    solution: {
      pt: "Desenvolvimento de um modelo Random Forest com engenharia de atributos focada em comportamento de uso.",
      en: "Development of a Random Forest model with feature engineering focused on usage behavior.",
      es: "Desarrollo de un modelo de Random Forest con ingeniería de atributos centrada en el comportamiento de uso."
    },
    result: {
      pt: "Redução projetada de 20% no churn através de campanhas de retenção direcionadas.",
      en: "Projected 20% reduction in churn through targeted retention campaigns.",
      es: "Reducción proyectada del 20% en el churn a través de campañas de retención dirigidas."
    },
    tags: ["Python", "Scikit-Learn", "Pandas"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: {
      pt: "Análise de Sentimento em Tempo Real",
      en: "Real-time Sentiment Analysis",
      es: "Análisis de Sentimiento en Tempo Real"
    },
    category: {
      pt: "NLP",
      en: "NLP",
      es: "PLN"
    },
    description: {
      pt: "Monitoramento de redes sociais para análise de percepção de marca.",
      en: "Real-time social media monitoring for brand sentiment analysis.",
      es: "Monitoreo de redes sociales para el análisis de la percepción de marca."
    },
    problem: {
      pt: "Dificuldade em reagir rapidamente a crises de imagem no Twitter/X.",
      en: "Slow response time to brand reputation crises on social media platforms.",
      es: "Dificultad para reaccionar rápidamente a las crisis de imagen en Twitter/X."
    },
    solution: {
      pt: "Pipeline de dados com extração via API e processamento usando BERT para classificação de sentimento.",
      en: "Data pipeline with API extraction and processing using BERT for sentiment classification.",
      es: "Pipeline de datos con extracción vía API y procesamiento utilizando BERT para la clasificación de sentimientos."
    },
    result: {
      pt: "Dashboard com 92% de precisão na detecção de sentimentos negativos.",
      en: "Dashboard with 92% accuracy in negative sentiment detection.",
      es: "Dashboard con 92% de precisión en la detección de sentimientos negativos."
    },
    tags: ["NLP", "PyTorch", "Streamlit"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    title: {
      pt: "Otimização de Estoque",
      en: "Inventory Optimization",
      es: "Optimización de Inventario"
    },
    category: {
      pt: "Time Series",
      en: "Time Series",
      es: "Series Temporales"
    },
    description: {
      pt: "Previsão de demanda para redução de custos operacionais.",
      en: "Demand forecasting for operational cost reduction.",
      es: "Previsión de demanda para la reducción de costes operativos."
    },
    problem: {
      pt: "Excesso de estoque gerando prejuízo de R$ 50k/mês em produtos perecíveis.",
      en: "Excess inventory causing R$ 50k/month in losses on perishable goods.",
      es: "Exceso de stock generando pérdidas de R$ 50k/mes en productos perecederos."
    },
    solution: {
      pt: "Implementação de modelo Prophet para previsão de demanda sazonal.",
      en: "Implementation of Prophet model for seasonal demand forecasting.",
      es: "Implementación del modelo Prophet para la previsión de la demanda estacional."
    },
    result: {
      pt: "Otimização de 12% nos níveis de estoque no primeiro trimestre.",
      en: "12% optimization in inventory levels in the first quarter.",
      es: "Optimización del 12% en los niveles de stock en el primer trimestre."
    },
    tags: ["Forecasting", "Prophet", "SQL"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    title: {
      pt: "Sistema de Recomendação Híbrido",
      en: "Hybrid Recommendation System",
      es: "Sistema de Recomendación Híbrido"
    },
    category: {
      pt: "Data Engineering",
      en: "Data Engineering",
      es: "Ingeniería de Datos"
    },
    description: {
      pt: "Mecanismo de recomendação para e-commerce baseado em filtragem colaborativa e conteúdo.",
      en: "E-commerce recommendation engine combining collaborative filtering with content-based approaches.",
      es: "Motor de recomendación de comercio electrónico baseado en filtrado colaborativo y contenido."
    },
    problem: {
      pt: "Baixa taxa de conversão em produtos recomendados na página inicial.",
      en: "Low conversion rate on homepage product recommendations.",
      es: "Baja tasa de conversión en produtos recomendados en la página de inicio."
    },
    solution: {
      pt: "Arquitetura Lambda para processamento batch e real-time com Spark.",
      en: "Lambda architecture for batch and real-time processing with Spark.",
      es: "Arquitectura Lambda para procesamiento batch y en tiempo real con Spark."
    },
    result: {
      pt: "Aumento de 18% no Ticket Médio através de recomendações precisas.",
      en: "18% increase in Average Ticket through precise recommendations.",
      es: "Aumento del 18% en o Ticket Médio através de recomendaciones precisas."
    },
    tags: ["Spark", "TensorFlow", "Redis"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 5,
    title: {
      pt: "Detecção de Fraudes Bancárias",
      en: "Fraud Detection System",
      es: "Sistema de Detección de Fraudes"
    },
    category: {
      pt: "Cybersecurity",
      en: "Cybersecurity",
      es: "Ciberseguridad"
    },
    description: {
      pt: "Identificação de transações suspeitas em tempo real usando Anomaly Detection.",
      en: "Identification of suspicious transactions in real-time using Anomaly Detection.",
      es: "Identificación de transacciones sospechosas en tiempo real usando Detección de Anomalías."
    },
    problem: {
      pt: "Alta incidência de estornos e fraudes não detectadas em cartões de crédito.",
      en: "High incidence of chargebacks and undetected fraud on credit cards.",
      es: "Alta incidencia de contracargos y fraudes no detectados en tarjetas de crédito."
    },
    solution: {
      pt: "Modelagem com Isolation Forest e Autoencoders para detecção de anomalias.",
      en: "Modeling with Isolation Forest and Autoencoders for anomaly detection.",
      es: "Modelado con Isolation Forest y Autoencoders para detección de anomalías."
    },
    result: {
      pt: "Redução de 30% em perdas por fraude nos primeiros 6 meses.",
      en: "30% reduction in fraud losses in the first 6 months.",
      es: "Reducción del 30% en pérdidas por fraude en los primeros 6 meses."
    },
    tags: ["XGBoost", "Keras", "Kafka"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 6,
    title: {
      pt: "Segmentação de Clientes LTV",
      en: "Customer Lifetime Value Segmentation",
      es: "Segmentación de Valor de Vida del Cliente"
    },
    category: {
      pt: "Marketing Analytics",
      en: "Marketing Analytics",
      es: "Analítica de Marketing"
    },
    description: {
      pt: "Clustering de base de clientes para otimização de investimento em marketing.",
      en: "Customer base clustering to optimize marketing investment.",
      es: "Clustering de base de clientes para optimización de inversión en marketing."
    },
    problem: {
      pt: "Investimento de marketing distribuído de forma ineficiente entre clientes.",
      en: "Marketing investment inefficiently distributed among customers.",
      es: "Inversión de marketing distribuida de forma ineficiente entre clientes."
    },
    solution: {
      pt: "Algoritmo K-Means aplicado a métricas RFM (Recência, Frequência e Valor).",
      en: "K-Means algorithm applied to RFM metrics (Recency, Frequency, and Monetary).",
      es: "Algoritmo K-Means aplicado a métricas RFM (Recencia, Frecuencia y Valor)."
    },
    result: {
      pt: "Melhoria de 25% no ROI das campanhas de marketing.",
      en: "25% improvement in marketing campaign ROI.",
      es: "Mejora del 25% en o ROI de las campañas de marketing."
    },
    tags: ["K-Means", "RFM", "Tableau"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 7,
    title: {
      pt: "Monitoramento Ambiental via Satélite",
      en: "Environmental Satellite Monitoring",
      es: "Monitoreo Ambiental por Satélite"
    },
    category: {
      pt: "Computer Vision",
      en: "Computer Vision",
      es: "Visión por Computador"
    },
    description: {
      pt: "Detecção automática de áreas desmatadas usando imagens de satélite.",
      en: "Automatic detection of deforested areas using satellite imagery.",
      es: "Detección automática de áreas deforestadas usando imágenes de satélite."
    },
    problem: {
      pt: "Lentidão no processo manual de fiscalização de grandes extensões de terra.",
      en: "Manual inspection processes were too slow to cover large land areas effectively.",
      es: "Lentitud en el proceso manual de fiscalización de grandes extensiones de tierra."
    },
    solution: {
      pt: "Rede Neural U-Net para segmentação semântica de imagens multiespectrais.",
      en: "U-Net Neural Network for semantic segmentation of multispectral images.",
      es: "Red Neuronal U-Net para segmentación semántica de imágenes multiespectrales."
    },
    result: {
      pt: "Aumento de 400% na velocidade de identificação de focos de desmatamento.",
      en: "400% increase in the speed of identifying deforestation hotspots.",
      es: "Aumento del 400% en la velocidad de identificación de focos de deforestación."
    },
    tags: ["Deep Learning", "PyTorch", "OpenCV"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 8,
    title: {
      pt: "Analytics de Saúde Preventiva",
      en: "Healthcare Preventive Analytics",
      es: "Analítica de Salud Preventiva"
    },
    category: {
      pt: "Health Tech",
      en: "Health Tech",
      es: "Tecnología de la Salud"
    },
    description: {
      pt: "Triagem automatizada baseada em históricos clínicos para prever riscos crônicos.",
      en: "Automated clinical screening to predict chronic disease risks from patient history.",
      es: "Triaje automatizado basado en historiales clínicos para predecir riesgos crónicos."
    },
    problem: {
      pt: "Sobrecarga no sistema de saúde devido a diagnósticos tardios de doenças crônicas.",
      en: "Healthcare system overload caused by late-stage diagnoses of chronic conditions.",
      es: "Sobrecarga en el sistema de salud debido a diagnósticos tardíos de enfermedades crónicas."
    },
    solution: {
      pt: "Modelagem estatística avançada e Gradient Boosting para análise de risco populacional.",
      en: "Advanced statistical modeling and Gradient Boosting for population risk analysis.",
      es: "Modelado estadístico avanzado y Gradient Boosting para el análisis de riesgo poblacional."
    },
    result: {
      pt: "Redução de 15% nas internações de emergência através de prevenção.",
      en: "15% reduction in emergency hospitalizations through prevention.",
      es: "Reducción del 15% en las hospitalizaciones de emergencia a través de la prevención."
    },
    tags: ["Statistical Modeling", "R", "SQL"],
    githubUrl: "#",
    caseStudyUrl: "#"
  }
];
