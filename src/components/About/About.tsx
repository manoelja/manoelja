import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronDown, User, Target, Globe, ChevronLeft, ChevronRight, ExternalLink, FileText, GraduationCap } from 'lucide-react';
import './About.css';
import { useLongPress } from '../../hooks/useLongPress';

interface Certificate {
  id: string;
  nameKey: string;
  pdf: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 'data-science-ia',
    nameKey: 'about.certificates.data-science-ia',
    pdf: 'certificate fundamentos de data science e inteligencia artificial 66bd6436f1588081cb08a019.pdf',
    image: 'certificate fundamentos de data science e inteligencia artificial 66bd6436f1588081cb08a019_page-0001.jpg'
  },
  {
    id: 'eng-dados',
    nameKey: 'about.certificates.eng-dados',
    pdf: 'certificate fundamentos de engenharia de dados 6400288ed95562f1e20b5169.pdf',
    image: 'certificate fundamentos de engenharia de dados 6400288ed95562f1e20b5169_page-0001.jpg'
  },
  {
    id: 'python',
    nameKey: 'about.certificates.python',
    pdf: 'certificate fundamentos de linguagem python do basico a aplicacoes de ia 68f6fc1a9f4ceb0a650689b4.pdf',
    image: 'certificate fundamentos de linguagem python do basico a aplicacoes de ia 68f6fc1a9f4ceb0a650689b4_page-0001.jpg'
  },
  {
    id: 'power-bi',
    nameKey: 'about.certificates.power-bi',
    pdf: 'certificate microsoft power bi para business intelligence e data science 6462fe1b2bb04988150abc99.pdf',
    image: 'certificate microsoft power bi para business intelligence e data science 6462fe1b2bb04988150abc99_page-0001.jpg'
  },
  {
    id: 'python-2',
    nameKey: 'about.certificates.python-2',
    pdf: 'certificate-fundamentos-de-linguagem-python-do-basico-a-aplicacoes-de-ia-691bd6233a89051b69065cba (1).pdf',
    image: 'certificate-fundamentos-de-linguagem-python-do-basico-a-aplicacoes-de-ia-691bd6233a89051b69065cba (1)_page-0001.jpg'
  }
];

const getUrl = (file: string) => `/certificados-dsa/${encodeURIComponent(file)}`;

const DSALogo3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={logoRef}
      className="dsa-logo-3d"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? mousePos.y * -30 : [3, -3, 3],
        rotateY: isHovered ? mousePos.x * 30 : [-3, 3, -3],
        scale: isHovered ? 1.15 : 1,
      }}
      transition={{
        rotateX: isHovered ? { type: 'spring', stiffness: 200, damping: 15 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotateY: isHovered ? { type: 'spring', stiffness: 200, damping: 15 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{ perspective: 800 }}
    >
      <div className="dsa-logo-3d-inner">
        <img src="/svg/Data-Science-Academy.svg" alt="Data Science Academy" className="dsa-logo-img" />
      </div>
      <div className="dsa-logo-glow" />
    </motion.div>
  );
};

const CertificatesCarousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Manual wheel listener on the stable parent container (never unmounts)
  // { passive: false } ensures preventDefault() is respected by the browser
  useEffect(() => {
    const container = slideContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events over the image area
      const target = e.target as HTMLElement;
      if (!target.closest('.cert-image-wrapper')) return;

      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      setZoom((prev) => {
        const newZoom = Math.max(1, Math.min(5, prev + delta));
        if (newZoom === 1) {
          setPan({ x: 0, y: 0 });
        }
        return newZoom;
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startAutoPlay]);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setImgLoaded(false);
    if (!isPaused) startAutoPlay();
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    setImgLoaded(false);
    if (!isPaused) startAutoPlay();
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    setImgLoaded(false);
    if (!isPaused) startAutoPlay();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const current = certificates[currentIndex];
  const imgUrl = getUrl(current.image);

  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * (zoom - 1) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * (zoom - 1) * 100;
    setPan({ x, y });
  };

  const handleImageMouseLeave = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      className="certificates-carousel-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="certificates-header">
        <DSALogo3D />
        <h3 className="certificates-title">{t('about.certificates_title')}</h3>
      </div>

      <div className="carousel-viewport">
        <button className="carousel-nav-btn carousel-prev" onClick={goPrev} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>

        <div ref={slideContainerRef} className={`carousel-slide-container ${zoom > 1 ? 'zoom-active' : ''}`}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              className="carousel-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              <div
                ref={imageWrapperRef}
                className={`cert-image-wrapper ${zoom > 1 ? 'zoomed' : ''}`}
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                style={{ cursor: zoom > 1 ? 'grab' : 'pointer' }}
              >
                {!imgLoaded && (
                  <div className="cert-image-loading" />
                )}
                <img
                  src={imgUrl}
                  alt={t(current.nameKey)}
                  className={`cert-image ${imgLoaded ? 'loaded' : ''} ${zoom > 1 ? 'zoomed' : ''}`}
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                    transition: zoom === 1 && pan.x === 0 && pan.y === 0 ? 'transform 0.3s ease' : 'none',
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-nav-btn carousel-next" onClick={goNext} aria-label="Próximo">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="carousel-dots">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Ir para certificado ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ARTICLE_URL = 'https://ojs.focopublicacoes.com.br/foco/article/view/10668';

interface Extension {
  id: string;
  name: string;
  image: string;
  institution: string;
}

const extensions: Extension[] = [
  {
    id: 'hype-data-ai',
    name: 'Hype Data AI',
    image: '/extensao/hype-data-ai.jpg',
    institution: 'Data Science Academy'
  },
  {
    id: 'pet-saude',
    name: 'Pet Saúde',
    image: '/extensao/pet-saude.png',
    institution: 'UniCerrado'
  }
];

const ExtensionsCard = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const goTo = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
    setImgLoaded(false);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % extensions.length);
    setImgLoaded(false);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + extensions.length) % extensions.length);
    setImgLoaded(false);
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % extensions.length);
      setImgLoaded(false);
    }, 4000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (imgLoaded) {
      // Clear and restart the timer once image is loaded
      resetAutoPlay();
    }
  }, [imgLoaded]);

  const current = extensions[currentIndex];
  const nextIndex = (currentIndex + 1) % extensions.length;
  const next = extensions[nextIndex];

  return (
    <motion.div
      className="extensions-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="extensions-card-header">
        <div className="extensions-icon-wrap">
          <GraduationCap size={22} />
        </div>
        <h3 className="extensions-card-title">{t('about.extensions_title')}</h3>
      </div>

      <div className="extensions-showcase">
        <div className="extensions-images">
          <button className="ext-nav-btn ext-prev" onClick={goPrev} aria-label="Anterior">
            <ChevronLeft size={18} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="extensions-image-wrapper"
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {!imgLoaded && (
                <div className="ext-image-loading" />
              )}
              <img
                src={current.image}
                alt={current.name}
                className={`ext-image ${imgLoaded ? 'loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="ext-image-overlay">
                <span className="ext-image-name">{current.name}</span>
                <span className="ext-image-institution">{current.institution}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="ext-nav-btn ext-next" onClick={goNext} aria-label="Próximo">
            <ChevronRight size={18} />
          </button>

          {/* Scrolling preview of next card */}
          <div className="ext-next-preview">
            <img
              src={next.image}
              alt={next.name}
              className="ext-next-image"
            />
          </div>
        </div>

        <div className="extensions-dots">
          {extensions.map((ext, index) => (
            <button
              key={ext.id}
              className={`ext-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Ver ${ext.name}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PublishedArticleCard = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="published-article-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="article-card-header">
        <div className="article-icon-wrap">
          <FileText size={22} />
        </div>
        <h3 className="article-card-title">{t('about.published_article.title')}</h3>
      </div>

      <h4 className="article-subtitle">{t('about.published_article.article_title')}</h4>

      <div className={`article-summary ${expanded ? 'expanded' : ''}`}>
        <p>{t('about.published_article.summary')}</p>
      </div>

      <button className="article-toggle-summary" onClick={() => setExpanded(!expanded)}>
        {expanded ? `▲  ${t('about.published_article.show_less')}` : `▼  ${t('about.published_article.show_more')}`}
      </button>

      <a
        href={ARTICLE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="article-read-btn"
      >
        <ExternalLink size={16} />
        {t('about.published_article.read_article')}
      </a>
    </motion.div>
  );
};

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
                  onPointerDown={(e) => e.stopPropagation()}
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
                  onPointerDown={(e) => e.stopPropagation()}
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

            {/* Certificates Carousel */}
            <CertificatesCarousel />
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
                  <img src="/svg/UFG_logo.svg.webp" alt="UFG Logo" className="edu-logo-img" />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.postgrad_label')}</span>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={expandedEdu === 'ufg' ? 'inst' : 'title'}
                      className="edu-title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      {expandedEdu === 'ufg' ? 'UFG - Universidade Federal de Goiás' : t('about.postgrad_title')}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <motion.div
                  className="expand-arrow"
                  animate={{ rotate: expandedEdu === 'ufg' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

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
                  <img src="/svg/unicerrado_logo.png" alt="UniCerrado Logo" className="edu-logo-img" />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.graduation_label')}</span>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={expandedEdu === 'uni' ? 'inst' : 'title'}
                      className="edu-title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      {expandedEdu === 'uni' ? 'Centro Universitário de Goiatuba - UniCerrado' : t('about.graduation_title')}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <motion.div
                  className="expand-arrow"
                  animate={{ rotate: expandedEdu === 'uni' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              {!expandedEdu && <div className="edu-badge">Uni</div>}
            </div>

            {/* Published Article */}
            <PublishedArticleCard />

            {/* Extensions */}
            <ExtensionsCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
