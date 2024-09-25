import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Projects() {

  const { t } = useTranslation();

  return (
    <motion.section
      id="projects"
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-center">{t('ProjectsTitle')}</h2>
      <br />
      <div className="row">
        {/* Primeiro projeto */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title1">{t('cardtitle1')}</h5>
              <p className="card-text">{t('project1')}</p>
              <a href="https://github.com/feeoliveira-oficial/Manage-Book-System.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Check Project
              </a>
            </div>
          </div>
        </div>

        {/* Segundo projeto */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title2">{t('cardtitle2')}</h5>
              <p className="card-text">{t('project2')}</p>
              <a href="https://github.com/feeoliveira-oficial/PythonQualityAnalisys" target="_blank" className="btn btn-primary">
                Check Project
              </a>
            </div>
          </div>
        </div>

        {/* Terceiro projeto */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title3">{t('cardtitle3')}</h5>
              <p className="card-text">{t('project3')}</p>
              <a href="https://github.com/feeoliveira-oficial/Insurance.git" target="_blank" className="btn btn-primary">
                Check Project
              </a>
            </div>
          </div>
        </div>

        {/* Adicione novos projetos aqui da mesma forma */}
      </div>
    </motion.section>
  );
}

export default Projects;
