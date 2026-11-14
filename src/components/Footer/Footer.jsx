// Pied de page partagé par les trois pages du site.
import githubIcon from '../../assets/icons/github.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-signature">
          <a className="footer-name" href="#accueil">Aaron Fahrasmane</a>
          <p>Développeur web · Portfolio</p>
          <span className="footer-cv-placeholder">CV à ajouter</span>
        </div>
        <nav className="footer-navigation" aria-label="Navigation secondaire">
          <a href="https://github.com/MilesM1392" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /> GitHub</a>
          <a href="/contact.html">Contact</a>
          <a href="/mentions-legales.html">Mentions légales</a>
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
