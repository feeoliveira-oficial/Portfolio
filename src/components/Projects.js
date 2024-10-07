import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

//function to fetch the projects from the GitHub API
  useEffect(() => {
    fetch('https://api.github.com/users/feeoliveira-oficial/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.section
      id="projects"
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-center">{t('ProjectsTitle')}</h2>
      <br />

      {loading ? (
        <div className="text-center"></div>
      ) : (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">
                    {project.description ? project.description : 'No description available'}
                  </p>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {t('ProjectsButton')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}

export default Projects;
