import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Download, ExternalLink, Mail, Briefcase, GraduationCap, Code2, Award, Calendar, MapPin, Globe } from 'lucide-react';
import './CVModal.css';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const { t, i18n } = useTranslation();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const activeLang = i18n.language;
  const cvFileName = `cv-${activeLang}.pdf`;
  const cvPath = `/${cvFileName}`;

  // Content data for CV based on language
  const cvData = {
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
        languages: "Linguagens: Python, R, SQL",
        ml: "Machine Learning: Scikit-Learn, XGBoost, Prophet",
        dl: "Deep Learning & NLP: PyTorch, TensorFlow, Keras, BERT, OpenCV",
        data: "Engenharia de Dados: Spark, Kafka, Redis, SQL Server",
        viz: "Visualização: Tableau, Streamlit, Pandas, Matplotlib"
      },
      additional: "Informações Adicionais",
      ageText: "21 anos",
      location: "Goiatuba, Goiás - Brasil",
      email: "manoel.ds@exemplo.com", // Placeholder
      website: "dsmanoel.dev"
    },
    en: {
      name: "Manoel",
      title: "Data Scientist & ML Engineer",
      summary: "Technology professional focused on generating business value through data intelligence. Specialist in building predictive models, robust data pipelines, and statistical analyses to solve complex operational problems. Combines a solid foundation in IT management with advanced specialization in Data Science from UFG.",
      experienceTitle: "Key Projects / Experience",
      experiences: [
        {
          role: "Lead Developer - AI Solutions",
          period: "2024 - Present",
          description: "End-to-end development of predictive and optimization machine learning models.",
          bullets: [
            "Churn Prediction: Implemented a Random Forest model projecting a 20% reduction in customer cancellation.",
            "Inventory Optimization: 12% reduction in perishable inventory levels utilizing seasonal Prophet models.",
            "Fraud Detection: System utilizing Isolation Forest and Autoencoders resulting in a 30% loss reduction."
          ]
        },
        {
          role: "NLP & Vision Developer / Researcher",
          period: "2023 - 2024",
          description: "Applied Deep Learning applications for unstructured text and image datasets.",
          bullets: [
            "Sentiment Analysis: Real-time BERT pipeline and dashboard with 92% classification accuracy.",
            "Computer Vision: Semantic segmentation U-Net model for environmental satellite monitoring, accelerating analysis by 400%."
          ]
        }
      ],
      skillsList: {
        languages: "Languages: Python, R, SQL",
        ml: "Machine Learning: Scikit-Learn, XGBoost, Prophet",
        dl: "Deep Learning & NLP: PyTorch, TensorFlow, Keras, BERT, OpenCV",
        data: "Data Engineering: Spark, Kafka, Redis, SQL Server",
        viz: "Visualization: Tableau, Streamlit, Pandas, Matplotlib"
      },
      additional: "Additional Info",
      ageText: "21 years old",
      location: "Goiatuba, Goias - Brazil",
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
        languages: "Idiomas: Python, R, SQL",
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

  const currentCV = cvData[activeLang as keyof typeof cvData] || cvData.pt;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cv-modal-portal">
          {/* Backdrop Overlay */}
          <motion.div
            className="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="cv-modal-container"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Header controls */}
            <div className="cv-modal-header">
              <div className="header-left">
                <h3>{t('cv.title')}</h3>
                <span className="cv-lang-tag">{activeLang.toUpperCase()}</span>
              </div>
              <div className="header-right">
                <a
                  href={cvPath}
                  download={cvFileName}
                  className="cv-control-btn download-btn"
                  title={t('cv.download')}
                >
                  <Download size={18} />
                  <span>{t('cv.download')}</span>
                </a>
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-control-btn view-btn"
                  title={t('cv.open_new_tab')}
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  className="cv-control-btn close-btn"
                  onClick={onClose}
                  aria-label={t('cv.close')}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable CV Document Body */}
            <div className="cv-modal-body">
              <div className="cv-paper">
                {/* CV Main Header */}
                <div className="cv-paper-header">
                  <div className="cv-name-section">
                    <h1>{currentCV.name}</h1>
                    <h2>{currentCV.title}</h2>
                  </div>
                  
                  <div className="cv-contact-info">
                    <div className="cv-contact-item">
                      <MapPin size={14} />
                      <span>{currentCV.location}</span>
                    </div>
                    <div className="cv-contact-item">
                      <Calendar size={14} />
                      <span>{currentCV.ageText}</span>
                    </div>
                    <div className="cv-contact-item">
                      <Mail size={14} />
                      <span>{currentCV.email}</span>
                    </div>
                    <div className="cv-contact-item">
                      <Globe size={14} />
                      <span>{currentCV.website}</span>
                    </div>
                  </div>
                </div>

                <div className="cv-divider"></div>

                {/* CV Grid Layout */}
                <div className="cv-paper-grid">
                  {/* Left Column: Summary, Experience, Education */}
                  <div className="cv-main-column">
                    {/* Summary Section */}
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <Briefcase size={16} />
                        <h3>{t('cv.profile')}</h3>
                      </div>
                      <p className="cv-summary-text">{currentCV.summary}</p>
                    </div>

                    {/* Experience Section */}
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <Briefcase size={16} />
                        <h3>{currentCV.experienceTitle}</h3>
                      </div>
                      <div className="cv-timeline">
                        {currentCV.experiences.map((exp, idx) => (
                          <div key={idx} className="cv-timeline-item">
                            <div className="cv-timeline-header">
                              <h4>{exp.role}</h4>
                              <span className="cv-timeline-date">{exp.period}</span>
                            </div>
                            <p className="cv-timeline-desc">{exp.description}</p>
                            <ul className="cv-timeline-bullets">
                              {exp.bullets.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education Section */}
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <GraduationCap size={16} />
                        <h3>{t('cv.education')}</h3>
                      </div>
                      <div className="cv-education-list">
                        <div className="cv-edu-item">
                          <div className="cv-edu-header">
                            <h4>{t('about.postgrad_title')}</h4>
                            <span className="cv-edu-date">2025 - 2026</span>
                          </div>
                          <p className="cv-edu-inst">{t('about.postgrad_inst')} (UFG)</p>
                        </div>
                        <div className="cv-edu-item">
                          <div className="cv-edu-header">
                            <h4>{t('about.graduation_title')}</h4>
                            <span className="cv-edu-date">2021 - 2024</span>
                          </div>
                          <p className="cv-edu-inst">{t('about.graduation_inst')} (UniCerrado)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Skills, Languages */}
                  <div className="cv-side-column">
                    {/* Technical Skills */}
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <Code2 size={16} />
                        <h3>{t('cv.skills')}</h3>
                      </div>
                      <div className="cv-skills-group">
                        <div className="cv-skill-tag-group">
                          <strong>{t('skills.categories.languages') || "Languages"}:</strong>
                          <p>Python, R, SQL, TypeScript</p>
                        </div>
                        <div className="cv-skill-tag-group">
                          <strong>{t('skills.categories.ml') || "Machine Learning"}:</strong>
                          <p>Scikit-Learn, XGBoost, Prophet, RFM Clustering</p>
                        </div>
                        <div className="cv-skill-tag-group">
                          <strong>{t('skills.categories.deep_learning') || "Deep Learning"}:</strong>
                          <p>PyTorch, TensorFlow, Keras, BERT, U-Net, OpenCV</p>
                        </div>
                        <div className="cv-skill-tag-group">
                          <strong>{t('skills.categories.databases') || "Databases"}:</strong>
                          <p>PostgreSQL, SQL Server, Redis</p>
                        </div>
                        <div className="cv-skill-tag-group">
                          <strong>{t('skills.categories.mlops') || "MLOps"}:</strong>
                          <p>Git, Docker, Linux, Apache Spark, Kafka</p>
                        </div>
                      </div>
                    </div>

                    {/* Certifications / Interests */}
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <Award size={16} />
                        <h3>{currentCV.additional}</h3>
                      </div>
                      <div className="cv-additional-content">
                        <p><strong>{activeLang === 'pt' ? 'Estatística e Análise' : activeLang === 'es' ? 'Estadística' : 'Statistics'}:</strong> UFG Postgrad Focus</p>
                        <p><strong>{activeLang === 'pt' ? 'Idiomas' : activeLang === 'es' ? 'Idiomas' : 'Languages'}:</strong> Português (Native), English, Español</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
