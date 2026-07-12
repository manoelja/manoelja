import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Python', category: t('skills.categories.languages'), detail: 'Especialista em automação, análise e scripts complexos.' },
    { name: 'SQL', category: t('skills.categories.databases'), detail: 'Consultas avançadas, otimização e modelagem relacional.' },
    { name: 'R', category: t('skills.categories.languages'), detail: 'Análise estatística profunda e visualização científica.' },
    { name: 'Scikit-Learn', category: t('skills.categories.ml'), detail: 'Construção de pipelines de ML e modelos preditivos.' },
    { name: 'Pandas / NumPy', category: t('skills.categories.data_manipulation'), detail: 'Manipulação massiva de dataframes e matrizes.' },
    { name: 'PyTorch / TensorFlow', category: t('skills.categories.deep_learning'), detail: 'Desenvolvimento de Redes Neurais e Deep Learning.' },
    { name: 'PowerBI / Tableau', category: t('skills.categories.visualization'), detail: 'Dashboards executivos e storytelling de dados.' },
    { name: 'AWS / Azure', category: t('skills.categories.cloud'), detail: 'Deploy e gerenciamento de infraestrutura DS em nuvem.' },
    { name: 'Docker', category: t('skills.categories.mlops'), detail: 'Containerização de ambientes de desenvolvimento e produção.' },
    { name: 'Git', category: t('skills.categories.tools'), detail: 'Versionamento e colaboração em times técnicos.' },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
          {skills.map((skill) => (
            <motion.div 
              layout
              key={skill.name} 
              className={`skill-badge ${expandedSkill === skill.name ? 'expanded' : ''}`}
              variants={itemVariants}
              onClick={() => toggleSkill(skill.name)}
              whileHover={expandedSkill === skill.name ? {} : { y: -3 }}
              style={{ cursor: 'pointer' }}
            >
              <div className="skill-header">
                <div className="skill-main-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <motion.div 
                  className="skill-expand-icon"
                  animate={{ rotate: expandedSkill === skill.name ? 180 : 0 }}
                >
                  <ChevronDown size={16} opacity={0.4} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSkill === skill.name && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="skill-detail-text"
                  >
                    <p>{skill.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
