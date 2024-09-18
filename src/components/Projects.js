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
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Techbooks</h5>
              <p className="card-text">{t('project1')}</p>
              <a href="https://localhost:44350/Default.aspx" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Check Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tim Horton`s quality Analysis</h5>
              <p className="card-text">{t('project2')}</p>
              <a href="http://127.0.0.1:5000/" target="_blank" className="btn btn-primary">
                Check Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
