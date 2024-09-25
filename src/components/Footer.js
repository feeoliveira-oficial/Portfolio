import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-light text-center p-4">
      <p>{t('copyright')}</p>
      <div className="social-links mt-2">
        <a href="https://github.com/feeoliveira-oficial" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/felipe-oliveira-dos-santos-2612f88/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="mt-2">
        <a href="https://www.privacypolicies.com" target="_blank" rel="noopener noreferrer">{t('PrivacyPolicy')}</a> | 
        <a href="https://www.termsofusegenerator.net" target="_blank" rel="noopener noreferrer">{t('TermsOfUse')}</a>
      </div>
    </footer>
  );
}

export default Footer;
