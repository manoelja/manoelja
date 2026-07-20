import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronDown, User, Target, Globe } from 'lucide-react';
import './About.css';
import { useLongPress } from '../../hooks/useLongPress';

const About = () => {
  const { t } = useTranslation();
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [showBirthDate, setShowBirthDate] = useState(false);
  const [showNaturality, setShowNaturality] = useState(false);

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge('2005-03-27');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const toggleEdu = (id: string) => {
    setExpandedEdu(expandedEdu === id ? null : id);
  };

  const mainCardLongPress = useLongPress({
    onClick: () => setIsMainExpanded(!isMainExpanded),
    delay: 500
  });

  const ufgCardLongPress = useLongPress({
    onClick: () => toggleEdu('ufg'),
    delay: 500
  });

  const uniCardLongPress = useLongPress({
    onClick: () => toggleEdu('uni'),
    delay: 500
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="about-info">
            <div
              className="about-card-main"
              style={{ cursor: 'pointer' }}
              {...mainCardLongPress}
            >
              <div className="about-card-header">
                <User size={24} className="header-icon" opacity={0.4} />
              </div>

              <div className="about-content-wrapper">
                <AnimatePresence mode="wait">
                  {!isMainExpanded ? (
                    <motion.p
                      key="description"
                      className="about-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t('about.description')}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="detailed"
                      className="about-details-expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="deep-text">{t('about.detailed_profile')}</p>
                      <div className="mission-box">
                        <div className="mission-header">
                          <Target size={18} color="var(--accent-color)" />
                          <span>{t('about.mission_label')}</span>
                        </div>
                        <p>{t('about.mission_text')}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="about-details-list">
                <div
                  className="detail-item-modern"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBirthDate(!showBirthDate);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="detail-icon-wrap">
                    <Calendar size={20} />
                  </div>
                  <div className="detail-info-wrap">
                    <span className="detail-label">{t('about.age_label')}</span>
                    <span className="detail-value">
                      {showBirthDate ? '27/03/2005' : t('about.age', { count: age })}
                    </span>
                  </div>
                </div>
                <div
                  className="detail-item-modern"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNaturality(!showNaturality);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="detail-icon-wrap">
                    <Globe size={20} />
                  </div>
                  <div className="detail-info-wrap">
                    <span className="detail-label">{showNaturality ? t('about.naturality_label') : t('about.nationality_label')}</span>
                    <span className="detail-value">
                      {showNaturality ? 'Goiatuba-Goiás' : 'Brasil'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-education">
            {/* Pós-Graduação UFG */}
            <div
              className={`edu-card-modern ${expandedEdu === 'ufg' ? 'expanded' : ''}`}
              style={{ cursor: 'pointer' }}
              {...ufgCardLongPress}
            >
              <div className="edu-card-glow"></div>
              <div className="edu-header-row">
                <div className="edu-icon-container ufg-theme">
                  <img src="/UFG_logo.svg.webp" alt="UFG Logo" className="edu-logo-img" />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.postgrad_label')}</span>
                  <h3 className="edu-title">{t('about.postgrad_title')}</h3>
                </div>
                <motion.div
                  className="expand-arrow"
                  animate={{ rotate: expandedEdu === 'ufg' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedEdu === 'ufg' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="edu-details-expanded"
                  >
                    <div className="edu-institution">
                      <span className="inst-name">UFG</span>
                      <span className="inst-full">{t('about.postgrad_inst')}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!expandedEdu && <div className="edu-badge">UFG</div>}
            </div>

            {/* Graduação UniCerrado */}
            <div
              className={`edu-card-modern ${expandedEdu === 'uni' ? 'expanded' : ''}`}
              style={{ cursor: 'pointer' }}
              {...uniCardLongPress}
            >
              <div className="edu-card-glow"></div>
              <div className="edu-header-row">
                <div className="edu-icon-container uni-theme">
                  <img src="/unicerrado_logo.png" alt="UniCerrado Logo" className="edu-logo-img" />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.graduation_label')}</span>
                  <h3 className="edu-title">{t('about.graduation_title')}</h3>
                </div>
                <motion.div
                  className="expand-arrow"
                  animate={{ rotate: expandedEdu === 'uni' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedEdu === 'uni' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="edu-details-expanded"
                  >
                    <div className="edu-institution">
                      <span className="inst-full">CENTRO UNIVERSITÁRIO DE GOIATUBA</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!expandedEdu && <div className="edu-badge">Uni</div>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
