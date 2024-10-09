import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import brazilFlag from '../assets/brazil.png';
import franceFlag from '../assets/france.png';
import spainFlag from '../assets/spain.png';
import unitedKignomFlag from '../assets/gb.png';

function Header() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Language changed to:', lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="nav-link" to="/">{t('Home')}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/skills">{t('Skills')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">{t('Projects')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">{t('Blog')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/techbuddy">{t('TechBuddy')}</Link>
            </li>
          </ul>
          <div className="language-select ms-auto">
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
        </div>
      </div>
    </nav>
  );
}

export default Header;
