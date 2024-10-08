import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-light text-center p-4">
      <div className="mt-2">
        <a href="https://www.privacypolicies.com" target="_blank" rel="noopener noreferrer">{t('PrivacyPolicy')}</a> | 
        <a href="https://www.termsofusegenerator.net" target="_blank" rel="noopener noreferrer">{t('TermsOfUse')}</a>
      </div>
    </footer>
  );
}

export default Footer;
