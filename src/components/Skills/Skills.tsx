import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills } from '../../data/skills';
import './Skills.css';
import { useLongPress } from '../../hooks/useLongPress';

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const currentLang = i18n.language.split('-')[0] as keyof typeof skills[0]['detail'];

  const toggleSkill = (name: string) => {
    setExpandedSkill(expandedSkill === name ? null : name);
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => {
            const longPressHandlers = useLongPress({
              onClick: () => toggleSkill(skill.name),
              delay: 500
            });

            return (
              <div
                key={skill.name}
                className={`skill-badge ${expandedSkill === skill.name ? 'expanded' : ''}`}
                style={{ cursor: 'pointer' }}
                {...longPressHandlers}
              >
              <div className="skill-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedSkill !== skill.name ? (
                    <motion.div
                      key="header"
                      className="skill-header"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="skill-main-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-category">{t(skill.categoryKey)}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="detail"
                      className="skill-detail-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="skill-name-detail">{skill.name}</span>
                      <p>{skill.detail[currentLang] || skill.detail.pt}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
