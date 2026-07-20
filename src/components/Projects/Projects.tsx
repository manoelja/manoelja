import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { projects } from '../../data/projects';
import { Github, Plus, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
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
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -3 }}
              onClick={() => toggleProject(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-header">
                <span className="project-category">{project.category[currentLang] || project.category['pt']}</span>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
                  >
                    <Github size={20} />
                  </motion.a>

                  {project.caseStudyUrl && (
                    <motion.a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-link-btn"
                      aria-label="View Project"
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: '#000' }}
                    >
                      <Plus size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="project-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedId !== project.id ? (
                    <motion.div
                      key="preview"
                      className="project-preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="project-title">{project.title[currentLang] || project.title['pt']}</h3>
                      <p className="project-desc">
                        {project.description[currentLang] || project.description['pt']}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      className="project-details-expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="project-title-expanded">{project.title[currentLang] || project.title['pt']}</h3>
                      <div className="project-details">
                        <div className="detail-item">
                          <strong>{t('projects.challenge')}:</strong> {project.problem[currentLang] || project.problem['pt']}
                        </div>
                        <div className="detail-item">
                          <strong>{t('projects.impact')}:</strong> <span className="highlight">{project.result[currentLang] || project.result['pt']}</span>
                        </div>

                        {project.caseStudyUrl && (
                          <motion.a
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-site-link"
                            whileHover={{ x: 5 }}
                          >
                            {t('projects.view_site') || "Ver Site do Projeto"} <ExternalLink size={14} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
