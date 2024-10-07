import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import animationData from '../json/animation2.json';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

function Main() {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <motion.section
      id="about"
      className="d-flex flex-column align-items-center justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="lottie-animation">
        <Lottie options={defaultOptions} height={100} width={130} />
      </div>
      <h1 className="welcome">{t('welcome')}</h1>
      <br />
      <motion.p
        className="description lead text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {t('description')}
      </motion.p>
      <br />
      
      <div className="social-links">
        <a href="https://github.com/feeoliveira-oficial" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/feeoliveira-oficial/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={40} />
        </a>
        <a href="https://www.instagram.com/feeoliveira.oficial/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={40} />
        </a>
      </div>
    </motion.section>
  );
}

export default Main;
