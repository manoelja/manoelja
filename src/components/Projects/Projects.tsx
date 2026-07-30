import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { projects, type Project } from '../../data/projects';
import { Github, ExternalLink, ChevronDown, Clock } from 'lucide-react';
import { useLongPress } from '../../hooks/useLongPress';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  clickStep: 0 | 1 | 2;
  onToggle: () => void;
  setClickStep: (step: 0 | 1 | 2) => void;
  currentLang: string;
  t: (key: string) => string;
}

const ProjectCard = ({ project, isExpanded, clickStep, onToggle, setClickStep, currentLang, t }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => typeof document !== 'undefined' && !document.documentElement.classList.contains('light-theme')
  );

  // IntersectionObserver: só carrega o SVG animado quando o card está perto do viewport
  useEffect(() => {
    const card = cardRef.current;
    if (!card || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(card);
        }
      },
      { rootMargin: '150px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkTheme(!document.documentElement.classList.contains('light-theme'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    if (project.hasPngStep && !isExpanded) {
      if (clickStep === 0) {
        setClickStep(1);
      } else {
        setClickStep(2);
        onToggle();
      }
    } else {
      onToggle();
    }
  };

  const longPressHandlers = useLongPress({
    onClick: handleCardClick,
    delay: 500
  });

  const showPng = project.hasPngStep && clickStep >= 1;
  const currentPng = isDarkTheme ? project.imageDark : project.imageLight;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  if (project.comingSoon) {
    return (
      <motion.div className="project-card coming-soon">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            <Clock size={32} />
          </div>
          <span className="coming-soon-text">
            {project.title[currentLang] || project.title['pt']}
          </span>
          <span className="coming-soon-sub">
            Em Desenvolvimento
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...longPressHandlers}
    >
      {/* SVG Background - ocupa todo o card */}
      {project.image && (
        <div className="project-card-bg">
          {isInView ? (
            <AnimatePresence mode="wait">
              {!showPng ? (
                <motion.img
                  key="svg"
                  src={project.image}
                  alt={project.title[currentLang] || project.title['pt']}
                  className="project-bg-image"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              ) : (
                <motion.img
                  key="png"
                  src={currentPng}
                  alt={project.title[currentLang] || project.title['pt']}
                  className="project-bg-image project-bg-png"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          ) : (
            <div className="project-bg-placeholder" />
          )}
          <div className="project-bg-overlay"></div>
        </div>
      )}

      {/* Botões sobrepostos no topo */}
      <div className="project-overlay-buttons">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="overlay-btn github-btn"
          onPointerDown={(e) => e.stopPropagation()}
          onPointerUp={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={20} />
        </a>

        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Projeto"
            className="overlay-btn link-btn"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      {/* Conteúdo inferior - categoria e seta */}
      <div className="project-card-footer">
        <span className="project-category-badge">
          {project.category[currentLang] || project.category['pt']}
        </span>
        <motion.div
          className="expand-indicator"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </div>

      {/* Detalhes expandidos com transição */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            key="details"
            className="project-expanded-content"
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="project-details-inner">
              <h3 className="project-title-expanded">
                {project.title[currentLang] || project.title['pt']}
              </h3>
              <p className="project-desc-expanded">
                {project.description[currentLang] || project.description['pt']}
              </p>
              <div className="project-details-grid">
                <div className="detail-block">
                  <span className="detail-label">{t('projects.challenge')}</span>
                  <span className="detail-value">
                    {project.problem[currentLang] || project.problem['pt']}
                  </span>
                </div>
                <div className="detail-block highlight-block">
                  <span className="detail-label">{t('projects.impact')}</span>
                  <span className="detail-value highlight">
                    {project.result[currentLang] || project.result['pt']}
                  </span>
                </div>
              </div>
              <div className="project-tags-expanded">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-expanded">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [clickSteps, setClickSteps] = useState<Record<number, 0 | 1 | 2>>({});

  const toggleProject = (id: number) => {
    setClickSteps(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(key => {
        if (Number(key) !== id) next[Number(key)] = 0;
      });
      // Se estiver colapsando, reseta o clickStep deste card também
      if (expandedId === id) {
        next[id] = 0;
      }
      return next;
    });
    
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                project={project}
                isExpanded={expandedId === project.id}
                clickStep={clickSteps[project.id] || 0}
                onToggle={() => toggleProject(project.id)}
                setClickStep={(step: 0 | 1 | 2) => setClickSteps(prev => ({ ...prev, [project.id]: step }))}
                currentLang={currentLang}
                t={t}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
