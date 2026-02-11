import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768;

  const [activeSection, setActiveSection] = useState(null);
  const [activeProcess, setActiveProcess] = useState(null);

  const closeTimeout = useRef(null);

  /* ========================= */
  /* FIXED HYBRID INTERACTION */
  /* ========================= */

  const handleEnter = (section) => {
    if (!isMobile) {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
      setActiveSection(section);
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      closeTimeout.current = setTimeout(() => {
        setActiveSection(null);
        setActiveProcess(null);
      }, 180);
    }
  };

  const handleClick = (section) => {
    if (isMobile) {
      setActiveSection(prev =>
        prev === section ? null : section
      );
      setActiveProcess(null);
    }
  };

  /* ========================= */
  /* PREMIUM LIST ANIMATION */
  /* ========================= */

  const renderList = (items) => (
    <motion.ul
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ overflow: "hidden" }}
      className="animated-list"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.07,
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <div className="services">
      <div className="container mt-5 section">

        {/* HERO */}
        <h2 className="text-center">{t('SkillsTitle')}</h2>
        <p className="services-hero text-center mb-5">
          {t('heroDescription')}
        </p>

        {/* WHY */}
        <motion.div
          layout
          className={`interactive-card ${activeSection === 'why' ? 'active' : ''}`}
          onMouseEnter={() => handleEnter('why')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('why')}
        >
          <h3>{t('whyTitle')}</h3>

          <AnimatePresence>
            {activeSection === 'why' &&
              renderList([
                t('why1'),
                t('why2'),
                t('why3'),
                t('why4'),
              ])
            }
          </AnimatePresence>
        </motion.div>

        {/* RESULTS */}
        <motion.div
          layout
          className={`interactive-card ${activeSection === 'results' ? 'active' : ''}`}
          onMouseEnter={() => handleEnter('results')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('results')}
        >
          <h3>{t('resultsTitle')}</h3>

          <AnimatePresence>
            {activeSection === 'results' &&
              renderList([
                t('result1'),
                t('result2'),
                t('result3'),
                t('result4'),
              ])
            }
          </AnimatePresence>
        </motion.div>

        {/* PROCESS */}
        <motion.div
          layout
          className={`interactive-card ${activeSection === 'process' ? 'active' : ''}`}
          onMouseEnter={() => handleEnter('process')}
          onMouseLeave={handleLeave}
          onClick={() => handleClick('process')}
        >
          <h3>{t('processTitle')}</h3>

          <AnimatePresence>
            {activeSection === 'process' && (
              <motion.div layout>
                {[
                  { title: t('process1Title'), desc: t('process1Desc') },
                  { title: t('process2Title'), desc: t('process2Desc') },
                  { title: t('process3Title'), desc: t('process3Desc') },
                  { title: t('process4Title'), desc: t('process4Desc') },
                ].map((step, index) => (
                  <motion.div
                    layout
                    key={index}
                    className={`process-item ${activeProcess === index ? 'active' : ''}`}
                    onMouseEnter={() => !isMobile && setActiveProcess(index)}
                    onClick={() =>
                      isMobile &&
                      setActiveProcess(prev =>
                        prev === index ? null : index
                      )
                    }
                  >
                    <strong>{step.title}</strong>

                    <AnimatePresence>
                      {activeProcess === index && (
                        <motion.p
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h3>{t('ctaTitle')}</h3>
          <p>{t('ctaDesc')}</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate('/contact')}
          >
            {t('ctaButton')}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Services;
