// Premier écran du portfolio : vidéo de fond, identité et liens rapides.
import { useEffect, useRef } from 'react'
import Reveal from '../Reveal.jsx'
import backgroundFallback from '../../assets/images/synthwave-background.webp'
import githubIcon from '../../assets/icons/github.svg'
import mailIcon from '../../assets/icons/mail.svg'
import TypeWriter from '../TypeWriter/TypeWriter.jsx';
import ScrambleText from '../ScrambleText/ScrambleText.jsx';
import SparkleCursor from '../SparkleCursor/SparkleCursor.jsx'
import './Hero.css'

// Coordonnées utilisées dans les raccourcis affichés en bas à droite du hero.
const linkedinUrl = 'https://www.linkedin.com/in/aaron-fahrasmane-275ba4388/'
const githubUrl = 'https://github.com/MilesM1392'
const email = 'aaron.fahrasmane@gmail.com'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.95
  }, [])

  return (
    <>
      <SparkleCursor
        as="section"
        id="accueil"
        className="hero"
        style={{ '--hero-fallback': `url(${backgroundFallback})` }}
        aria-labelledby="hero-title"
        primary="#fff5fe"
        secondary="#ffcdf8"
      >
        <video
          ref={videoRef}
          className="hero-video"
          src={`${import.meta.env.BASE_URL}background.mp4`}
          poster={backgroundFallback}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />

        <div className="hero-vignette" aria-hidden="true" />
        <Reveal className="hero-copy">
          <h1 id="hero-title"><ScrambleText text={'Aaron Fahrasmane'}/></h1>
          <p className="hero-status"><span>Je suis</span> <strong><TypeWriter texts={["Développeur web Full-Stack","à la rechreche d'un stage","Développeur mobile", "UI Designer", "Photographe", "Créatif", "Eternel insatisfait",'Celui dont vous avez besoin']} speed={80} /></strong></p>
          <p className="hero-subtitle">Développeur web · recherche un stage à partir d'Avril</p>
        </Reveal>

        <a className="hero-scroll" href="#a-propos"><span aria-hidden="true" />Défiler</a>
      </SparkleCursor>

      <div className="hero-socials" aria-label="Liens professionnels">
        <a href={`mailto:${email}`} aria-label="Envoyer un e-mail">
          <img src={mailIcon} alt="" />
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub, nouvelle fenêtre">
          <img src={githubIcon} alt="" />
        </a>
        <a className="linkedin-mark" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn, nouvelle fenêtre">in</a>
      </div>
    </>
  )
}

export default Hero
