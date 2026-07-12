import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer-title">{t('footer.title')}</h2>
            <p className="footer-desc">
              {t('footer.description')}
            </p>
            
            <MagneticButton className="footer-cta" href="mailto:seuemail@exemplo.com">
              <span className="cta-content">
                {t('footer.email_label') || "Enviar E-mail"} <ArrowRight size={18} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
