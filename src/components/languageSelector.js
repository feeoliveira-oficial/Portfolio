import React from 'react';
import { useTranslation } from 'react-i18next';
import brazilFlag from '../assets/brazil.png';
import unitedKignomFlag from '../assets/gb.png';
import franceFlag from '../assets/france.png';
import spainFlag from '../assets/spain.png';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-select">
      <img
        src={brazilFlag}
        alt="PT-BR"
        onClick={() => changeLanguage('pt')}
        className="flag-icon"
      />
      <img
        src={unitedKignomFlag}
        alt="EN-CA"
        onClick={() => changeLanguage('en')}
        className="flag-icon"
      />
      <img
        src={franceFlag}
        alt="FR-CA"
        onClick={() => changeLanguage('fr')}
        className="flag-icon"
      />
      <img
        src={spainFlag}
        alt="ES"
        onClick={() => changeLanguage('es')}
        className="flag-icon"
      />
    </div>
  );
}

export default LanguageSelector;
