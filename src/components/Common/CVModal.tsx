import { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Download, Mail, Briefcase, GraduationCap, Code2, Award, Calendar, MapPin, Globe, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { cvData } from '../../data/cvData';
import './CVModal.css';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const normalizeLang = (lang: string): string => {
  const base = lang.split('-')[0].toLowerCase();
  return base in cvData ? base : 'pt';
};

const CV_PDF_STYLES = `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: white;
    color: #1a1a2e;
    -webkit-font-smoothing: antialiased;
    width: 794px;
  }
  .cv-pdf-container {
    width: 794px;
    padding: 40px 50px;
    background: white;
  }
  .cv-paper-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 2px solid #00d4aa;
  }
  .cv-name-section h1 {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 8px;
    color: #1a1a2e;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: initial;
    background-clip: unset;
  }
  .cv-name-section h2 {
    font-size: 12px;
    font-weight: 700;
    color: #00d4aa;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .cv-contact-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 10px;
    color: #475569;
    background: #f8fafc;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  .cv-contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cv-contact-item svg {
    width: 14px;
    height: 14px;
    color: #00d4aa;
    flex-shrink: 0;
  }
  .cv-contact-item span {
    text-align: left;
    font-size: 11px;
    color: #334155;
    font-weight: 500;
  }
  .cv-divider {
    height: 0;
    border: none;
    margin: 0;
  }
  .cv-paper-grid {
    display: flex;
    gap: 30px;
  }
  .cv-main-column {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .cv-side-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .cv-section { display: flex; flex-direction: column; gap: 10px; }
  .cv-section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px solid #00d4aa;
    padding-bottom: 6px;
  }
  .cv-section-title svg {
    width: 16px;
    height: 16px;
    color: #00d4aa;
    flex-shrink: 0;
  }
  .cv-section-title h3 {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #1a1a2e;
  }
  .cv-summary-text {
    font-size: 10px;
    color: #475569;
    line-height: 1.6;
    text-align: justify;
  }
  .cv-timeline { display: flex; flex-direction: column; gap: 14px; }
  .cv-timeline-item {
    padding-left: 14px;
    border-left: 2px solid #e2e8f0;
    position: relative;
  }
  .cv-timeline-item::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00d4aa;
  }
  .cv-timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
  }
  .cv-timeline-header h4 {
    font-size: 10px;
    font-weight: 800;
    color: #1a1a2e;
  }
  .cv-timeline-date {
    font-size: 9px;
    font-weight: 700;
    color: #00d4aa;
  }
  .cv-timeline-desc {
    font-size: 9px;
    color: #64748b;
    font-style: italic;
    margin-bottom: 6px;
    text-align: justify;
  }
  .cv-timeline-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .cv-timeline-bullets li {
    font-size: 9px;
    color: #475569;
    line-height: 1.5;
    padding-left: 12px;
    position: relative;
    text-align: justify;
  }
  .cv-timeline-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #00d4aa;
    font-weight: bold;
  }
  .cv-education-list { display: flex; flex-direction: column; gap: 12px; }
  .cv-edu-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
  }
  .cv-edu-header { display: contents; }
  .cv-edu-header h4 {
    grid-column: 1;
    font-size: 10px;
    font-weight: 800;
    color: #1a1a2e;
  }
  .cv-edu-date {
    grid-column: 2;
    grid-row: 1;
    font-size: 9px;
    font-weight: 700;
    color: #64748b;
    white-space: nowrap;
    align-self: start;
  }
  .cv-edu-inst {
    grid-column: 1;
    font-size: 9px;
    color: #00d4aa;
  }
  .cv-skills-group { display: flex; flex-direction: column; gap: 10px; }
  .cv-skill-tag-group { display: flex; flex-direction: column; gap: 2px; }
  .cv-skill-tag-group strong {
    font-size: 8px;
    text-transform: uppercase;
    color: #00d4aa;
    letter-spacing: 0.3px;
  }
  .cv-skill-tag-group p {
    font-size: 9px;
    color: #475569;
    line-height: 1.4;
  }
  .cv-additional-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 9px;
    color: #475569;
  }
  .cv-additional-content strong { color: #1a1a2e; }
`;

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const { t, i18n } = useTranslation();
  const cvPaperRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.scrollTo(0, 0);
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  const activeLang = normalizeLang(i18n.language);
  const cvFileName = `cv-${activeLang}.pdf`;

  const currentCV = cvData[activeLang] || cvData.pt;

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!cvPaperRef.current || isGenerating) return;

    setIsGenerating(true);

    try {
      const container = document.createElement('div');
      container.className = 'cv-pdf-container';
      container.innerHTML = cvPaperRef.current.innerHTML;

      const style = document.createElement('style');
      style.textContent = CV_PDF_STYLES;

      const wrapper = document.createElement('div');
      wrapper.appendChild(style);
      wrapper.appendChild(container);

      document.body.appendChild(wrapper);
      wrapper.style.position = 'absolute';
      wrapper.style.left = '-9999px';
      wrapper.style.top = '0';

      const opt = {
        margin: 0,
        filename: cvFileName,
        image: { type: 'jpeg' as const, quality: 0.95 },
        html2canvas: {
          scale: 2,
          width: 794,
          windowWidth: 794,
          useCORS: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const
        }
      };

      await html2pdf().set(opt).from(container).save();

      document.body.removeChild(wrapper);
    } catch {
      alert(t('cv.download_error', 'Erro ao baixar o CV. Tente novamente.'));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cv-modal-portal">
          <motion.div
            className="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="cv-modal-container"
            role="dialog"
            aria-modal="true"
            aria-label={t('cv.title')}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            <div className="cv-modal-header">
              <div className="header-left">
                <h3>{t('cv.title')}</h3>
                <span className="cv-lang-tag">{activeLang.toUpperCase()}</span>
              </div>
              <div className="header-right">
                <a
                  href="#"
                  className={`cv-control-btn download-btn ${isGenerating ? 'generating' : ''}`}
                  title={t('cv.download')}
                  onClick={handleDownload}
                >
                  {isGenerating ? <Loader2 size={18} className="spin" /> : <Download size={18} />}
                  <span>{isGenerating ? t('cv.generating', 'Gerando...') : t('cv.download')}</span>
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

            <div className="cv-modal-body">
              <div className="cv-paper" ref={cvPaperRef}>
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

                <div className="cv-paper-grid">
                  <div className="cv-main-column">
                    <div className="cv-section">
                      <div className="cv-section-title">
                        <Briefcase size={16} />
                        <h3>{t('cv.profile')}</h3>
                      </div>
                      <p className="cv-summary-text">{currentCV.summary}</p>
                    </div>

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

                  <div className="cv-side-column">
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
