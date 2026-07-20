import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, MousePointer2, ChevronDown, FileText } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';
import CVModal from '../Common/CVModal';
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [isCVOpen, setIsCVOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 50]);

  const words = t('hero.typewriter_words', { returnObjects: true }) as string[];
  const typewriterText = useTypewriter(words, 80, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="pulse-dot"></span>
              {t('hero.badge')}
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              {t('hero.title_pre')} <br />
              <span className="highlight">
                {typewriterText}<span className="cursor">|</span>
              </span>
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              {t('hero.description')}
            </motion.p>

            <motion.div className="hero-btns" variants={itemVariants}>
              <MagneticButton href="#projects" className="btn btn-primary">
                {t('hero.view_projects')} <MousePointer2 size={18} />
              </MagneticButton>

              <MagneticButton className="btn btn-secondary" onClick={() => setIsCVOpen(true)}>
                {t('hero.view_cv')} <FileText size={18} />
              </MagneticButton>

              <div className="hero-socials">
                <a href="#" aria-label="Github" className="social-link">
                  <Github size={24} />
                </a>
                <a href="#" aria-label="Linkedin" className="social-link">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="hero-visual-spacer"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        style={{ opacity, y }}
      >
        <span>{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} color="var(--accent-color)" />
        </motion.div>
      </motion.div>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
};

export default Hero;
