// Pied de page partagé par les trois pages du site.
import githubIcon from '../../assets/icons/github.svg'
import './Footer.css'

const githubUrl = 'https://github.com/MilesM1392'
const linkedinUrl = 'https://www.linkedin.com/in/aaron-fahrasmane-275ba4388/'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-signature">
          <a className="footer-name" href="#accueil">Aaron Fahrasmane</a>
          <p>Développeur web · Portfolio</p>
          <a className="footer-cv-placeholder" href={`${import.meta.env.BASE_URL}Aaron_Fahrasmane_cv-2.pdf`}>Voir mon CV</a>
          <div className="footer-coordinates" aria-label="Coordonnées">
            <div className="footer-social-links">
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn, nouvelle fenêtre"><span className="footer-linkedin-mark" aria-hidden="true">in</span> LinkedIn</a>
            </div>
            <span className="footer-location">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="2.5" fill="currentColor" />
              </svg>
              Paris, Île-de-France
            </span>
          </div>
          <iframe
            className="footer-player"
            title="Lecteur Spotify"
            src="https://open.spotify.com/embed/track/2Foc5Q5nqNiosCNqttzHof?utm_source=generator&theme=0&si=e5145c47da764bc3"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <nav className="footer-navigation" aria-label="Navigation secondaire">
          <a href={githubUrl} target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /> GitHub</a>
          <a href={`${import.meta.env.BASE_URL}contact.html`}>Contact</a>
          <a href={`${import.meta.env.BASE_URL}mentions-legales.html`}>Mentions légales</a>
        </nav>
        <div className="footer-divider" />
        <div className="footer-bottom">
          {/* L'année suit automatiquement l'horloge du navigateur. */}
          <span>© {new Date().getFullYear()} Aaron Fahrasmane</span>
          <span>Portfolio personnel</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
