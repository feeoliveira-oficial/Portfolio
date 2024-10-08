import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import htmlAnimation from '../json/html.json';
import cssAnimation from '../json/css.json';
import jsAnimation from '../json/js.json';
import reactAnimation from '../json/React.json';
import mysqlAnimation from '../json/MySQL.json';
import cAnimation from '../json/C#.json';

function Skills() {
  const { t } = useTranslation();

  const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <div className="skills">
      <motion.section
        className="container mt-5 section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-center">{t('SkillsTitle')}</h2>
        <br />

        <div className="floating-animations">
          <div className="floating-column left">
            <div className="floating-lottie" style={{ top: '-10%' }}>
            <Lottie options={defaultOptions(htmlAnimation)} height={90} width={90} />
            </div>
            <div className="floating-lottie" style={{ top: '20%' }}>
            <Lottie options={defaultOptions(jsAnimation)} height={60} width={60} />
            </div>
            <div className="floating-lottie" style={{ top: '48%' }}>
            <Lottie options={defaultOptions(mysqlAnimation)} height={100} width={100} />
            </div>
          </div>

          <div className="floating-column right">
            <div className="floating-lottie" style={{ top: '-10%' }}>
            <Lottie options={defaultOptions(cssAnimation)} height={90} width={90} />
            </div>
            <div className="floating-lottie" style={{ top: '20%' }}>
            <Lottie options={defaultOptions(reactAnimation)} height={100} width={100} />
            </div>
            <div className="floating-lottie" style={{ top: '47%' }}>
            <Lottie options={defaultOptions(cAnimation)} height={90} width={90} />
            </div>
          </div>
        </div>

        <div className='skills-text'>
          <div className="row">
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-html5 fa-3x"></i>
                <h3>HTML</h3>
                <p>{t('html')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-css3-alt fa-3x"></i>
                <h3>CSS & Bootstrap</h3>
                <p>{t('css')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-js-square fa-3x"></i>
                <h3>JavaScript</h3>
                <p>{t('javascript')}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-react fa-3x"></i>
                <h3>React</h3>
                <p>{t('React')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-java fa-3x"></i>
                <h3>Java</h3>
                <p>{t('Java')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fab fa-php fa-3x"></i>
                <h3>PHP</h3>
                <p>{t('PHP')}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fas fa-database fa-3x"></i>
                <h3>MySQL</h3>
                <p>{t('SQL')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fas fa-chart-bar fa-3x"></i>
                <h3>Power BI</h3>
                <p>{t('BI')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-box text-center">
                <i className="fas fa-mobile-alt fa-3x"></i>
                <h3>C#</h3>
                <p>{t('Cs')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Skills;
