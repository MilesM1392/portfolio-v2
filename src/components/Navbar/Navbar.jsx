// Navigation principale. Les liens de section fonctionnent sur l’accueil ; le
// bouton Contact mène à la page dédiée.
import { useState } from 'react'
import './Navbar.css'
import ScrambleText from '../ScrambleText/ScrambleText.jsx'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#realisations', label: 'Réalisations' },
]

function Navbar() {
  // Cet état contrôle à la fois le panneau mobile et la forme du bouton menu.
  const [menuOpen, setMenuOpen] = useState(false)

  // Referme le menu après navigation, y compris quand on choisit une ancre.
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand-mark" href="#accueil" aria-label="Aaron Fahrasmane, accueil" onClick={closeMenu}>AF</a>
      <button
        className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="main-navigation" className={`main-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            <ScrambleText text={label} duration={320} hover={false} />
          </a>
        ))}
        <a className="nav-contact" href={`${import.meta.env.BASE_URL}contact.html`} onClick={closeMenu}>
          <ScrambleText text="Me contacter" duration={320} hover={false} />
        </a>
      </nav>
    </header>
  )
}

export default Navbar
