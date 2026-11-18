// Section de présentation : les séparateurs et illustrations sont des assets
// Figma importés localement ; les textes se modifient directement dans ce JSX.
import profile from '../../assets/images/profile.webp'
import profileOverlay from '../../assets/images/profile-overlay.webp'
import profileBlob from '../../assets/icons/profile-blob.svg'
import separatorProfile from '../../assets/icons/separator-profile.svg'
import separatorAboutHeader from '../../assets/icons/separator-about-header.svg'
import separatorAboutCopy from '../../assets/icons/separator-about-copy.svg'
import separatorEducationLinks from '../../assets/icons/separator-education-links.svg'
import educationUnderline from '../../assets/icons/education-underline.svg'
import timelineMarker from '../../assets/icons/timeline-marker.svg'
import Reveal from '../Reveal.jsx'
import './About.css'

const githubUrl = 'https://github.com/MilesM1392'
const githubLabel = 'www.github.io/MilesM392/'
const linkedinUrl = 'https://www.linkedin.com/in/aaron-fahrasmane-275ba4388/'

function About() {
  return (
    <section id="a-propos" className="about-section" aria-labelledby="about-title">
      <h2 id="about-title" className="about-title">A propos de moi</h2>
      <img className="about-header-divider" src={separatorAboutHeader} alt="" aria-hidden="true" />
      <img className="about-profile-divider" src={separatorProfile} alt="" aria-hidden="true" />

      {/* Colonne identité à gauche et présentation/parcours à droite. */}
      <Reveal as="div" className="about-layout">
        <div className="about-profile">
          <div className="portrait-frame">
            <img className="portrait-blob" src={profileBlob} alt="" aria-hidden="true" />
            <div className="portrait-photo">
              <img className="portrait-base" src={profile} alt="Aaron Fahrasmane" />
              <img className="portrait-overlay" src={profileOverlay} alt="" aria-hidden="true" />
            </div>
          </div>

          <article className="internship-card">
            <h3>Aaron Fahrasmane</h3>
            <p>Actuellement en 2ème année de BUT MMI, je suis à la recherche d’un stage de minimum 3 mois en tant que développeur web full-stack.</p>
          </article>
        </div>

        <div className="about-content">
          <article className="about-intro">
            <h3>Enchanté !</h3>
            <p>
              Je suis un <strong>apprenti développeur web</strong> qui cherche à donner vie à ses idées, aussi inédites soient elles et créer des expériences au service de ceux qui les utilisent.
            </p>
            <p>
              Ce qui me caractérise, être cet <strong>éternel insatisfait</strong> qui va toujours chercher à faire mieux que ce qui est déjà là. Je veille donc à ce que tous les détails soient travaillés et ne laisse rien au détail, autant sur le plan technique que créatif.
            </p>
          </article>
          <img className="about-copy-divider" src={separatorAboutCopy} alt="" aria-hidden="true" />

          <div className="about-lower">
            <img className="education-links-divider" src={separatorEducationLinks} alt="" aria-hidden="true" />
            <article className="education-block">
              <img className="education-underline" src={educationUnderline} alt="" aria-hidden="true" />
              <h3>Formation</h3>
              <ol className="education-list">
                <li className="education-item education-item--but">
                  <img className="timeline-marker" src={timelineMarker} alt="" aria-hidden="true" />
                  <div>
                    <strong>BUT - Métiers du multimédia et de l’internet</strong>
                    <span className="education-school">IUT de Bobigny - Université Sorbonne Paris Nord</span>
                    <p>Parcours <strong>Développement web et dispositifs intéractifs</strong><br />formation pluridisciplinaire autour du développement web, du design, de la communication et de l’audiovisuel.</p>
                  </div>
                </li>
                <li className="education-item education-item--bac">
                  <img className="timeline-marker" src={timelineMarker} alt="" aria-hidden="true" />
                  <div>
                    <strong>Baccalauréat général (2025)</strong>
                    <span className="education-school">Lycée GT Michel-Ange (92)</span>
                    <p>Spécialités mathématiques et SES</p>
                  </div>
                </li>
              </ol>
            </article>

            <article className="professional-links">
              <h3>Liens</h3>
              <a className="professional-link professional-link--github" href={githubUrl} target="_blank" rel="noreferrer">
                <strong>GitHub</strong>
                <span>{githubLabel}</span>
              </a>
              <a className="professional-link professional-link--linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
                <strong>LinkedIn</strong>
                <span>{linkedinUrl}</span>
              </a>
              <div className="cv-block">
                <strong>Mon CV</strong>
                <a href={`${import.meta.env.BASE_URL}Aaron_Fahrasmane_cv-2.pdf`}>Voir mon CV</a>
              </div>
            </article>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default About
