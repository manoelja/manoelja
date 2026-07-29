import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-header">
            <span className="footer-label">{t('nav.contact')}</span>
            <h2 className="footer-title">{t('footer.title')}</h2>
            <p className="footer-desc">{t('footer.description')}</p>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
