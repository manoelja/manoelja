import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';
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

          <MagneticButton className="footer-cta" href="mailto:manoel.ds@exemplo.com">
            <span className="cta-content">
              <Mail size={18} />
              {t('footer.email_label')}
              <ArrowRight size={16} />
            </span>
          </MagneticButton>
        </motion.div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
