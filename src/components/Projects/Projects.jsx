// Carrousel cyclique : trois fiches visibles sur desktop, une fiche sur mobile.
// La modale de détails se ferme aussi avec Échap.
import { useEffect, useState } from 'react'
import { projects } from '../../data/projects.js'
import Reveal from '../Reveal.jsx'
import githubIcon from '../../assets/icons/github-project.svg'
import eyeIcon from '../../assets/icons/eye.svg'
import leftIcon from '../../assets/icons/arrow-left.svg'
import rightIcon from '../../assets/icons/arrow-right.svg'
import './Projects.css'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)
  // `selectedProject` contient la fiche affichée dans la fenêtre de détails.
  const [selectedProject, setSelectedProject] = useState(null)
  const current = projects[activeIndex]

  useEffect(() => {
    // Échap ferme la fenêtre ; l'écouteur n'existe que pendant son ouverture.
    if (!selectedProject) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  const move = (step) => {
    // Le modulo rend le carrousel cyclique dans les deux sens.
    setActiveIndex((index) => (index + step + projects.length) % projects.length)
  }

  // Les offsets permettent de mettre la fiche active au centre sans changer
  // les données source du projet.
  const visibleProjects = [-1, 0, 1].map((offset) => ({
    ...projects[(activeIndex + offset + projects.length) % projects.length],
    offset,
  }))

  return (
    <section id="realisations" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-inner">
        <h2 id="projects-title" className="section-title">Mes projets</h2>
        <Reveal className="projects-carousel">
          {/* Les boutons déplacent la sélection ; la piste affiche les fiches voisines. */}
          <button className="carousel-arrow carousel-previous" type="button" onClick={() => move(-1)} aria-label="Projet précédent">
            <img src={leftIcon} alt="" />
          </button>
          <div className="projects-track" aria-live="polite">
            {visibleProjects.map((project) => (
              <article key={`${project.id}-${project.offset}`} className={`project-card project-card--${project.theme} ${project.offset === 0 ? 'is-active' : ''}`}>
                <div className="project-cover" aria-hidden="true">
                  <span className="cover-sun" />
                  <span className="cover-grid" />
                  <span className="project-badge">À compléter</span>
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label="Technologies">
                    {project.technologies.length > 0 ? project.technologies.map((technology) => <li key={technology}>{technology}</li>) : <li>Technologies à ajouter</li>}
                  </ul>
                  <div className="project-actions">
                    {project.githubUrl ? (
                      <a className="project-icon-button" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Dépôt GitHub de ${project.title}`}>
                        <img src={githubIcon} alt="" />
                      </a>
                    ) : (
                      <button className="project-icon-button is-disabled" type="button" disabled aria-label="Lien GitHub à ajouter">
                        <img src={githubIcon} alt="" />
                      </button>
                    )}
                    <button className="project-icon-button" type="button" onClick={() => setSelectedProject(project)} aria-label={`Détails de ${project.title}`}>
                      <img src={eyeIcon} alt="" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="carousel-arrow carousel-next" type="button" onClick={() => move(1)} aria-label="Projet suivant">
            <img src={rightIcon} alt="" />
          </button>
        </Reveal>
        <div className="carousel-pagination" aria-label={`Projet ${activeIndex + 1} sur ${projects.length}`}>
          <span className="pagination-current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="pagination-separator">/</span>
          <span>{String(projects.length).padStart(2, '0')}</span>
          <div className="pagination-dots">
            {projects.map((project, index) => (
              <button key={project.id} type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} aria-label={`Afficher le projet ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} />
            ))}
          </div>
        </div>
      </div>

      {/* Cliquer sur le voile ferme la fenêtre ; le clic dans la boîte est capturé. */}
      {selectedProject && (
        <div className="project-dialog-backdrop" onClick={() => setSelectedProject(null)}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Fermer les détails">×</button>
            <span className="eyebrow">{selectedProject.category}</span>
            <h3 id="project-dialog-title">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h4>Fonctionnalités principales</h4>
            <ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <p className="placeholder-note">Cette fiche est un emplacement temporaire. Remplacez-la par les informations d’une réalisation réelle.</p>
          </section>
        </div>
      )}
      <span className="sr-only" aria-live="polite">Projet {activeIndex + 1} sur {projects.length} : {current.title}</span>
    </section>
  )
}

export default Projects
