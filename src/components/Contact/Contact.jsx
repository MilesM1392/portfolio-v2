// Ancienne section de contact intégrée à l’accueil, conservée comme composant
// réutilisable. La page dédiée actuelle est pages/ContactPage.jsx.
import { useState } from 'react'
import Reveal from '../Reveal.jsx'
import mailIcon from '../../assets/icons/mail.svg'
import githubIcon from '../../assets/icons/github.svg'
import './Contact.css'

const emailAddress = 'aaron.fahrasmane@gmail.com'
const githubUrl = 'https://github.com/MilesM1392'
const linkedinUrl = 'https://www.linkedin.com/in/aaron-fahrasmane-275ba4388/'

function Contact() {
  // Les valeurs des champs restent synchronisées avec l'état du composant.
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  // Met à jour uniquement le champ dont l'attribut `name` correspond à la saisie.
  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Prépare un brouillon d'e-mail dans l'application de messagerie de l'utilisateur.
    const subject = encodeURIComponent(form.subject || `Message de ${form.name}`)
    const body = encodeURIComponent(`Nom : ${form.name}\nE-mail : ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner section-shell">
        <Reveal as="header" className="contact-heading">
          <span className="eyebrow">Un projet ? Une question ?</span>
          <h2 id="contact-title" className="section-title">Échangeons</h2>
          <p>Pour une opportunité de stage, une collaboration ou simplement pour discuter.</p>
        </Reveal>
        <div className="contact-layout">
          <Reveal as="div" className="contact-links">
            <a href={`mailto:${emailAddress}`}>
              <span className="contact-icon"><img src={mailIcon} alt="" /></span>
              <span><strong>E-mail</strong><small>{emailAddress}</small></span>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><img src={githubIcon} alt="" /></span>
              <span><strong>GitHub</strong><small>github.com/MilesM1392</small></span>
            </a>
            <a className="contact-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon">in</span>
              <span><strong>LinkedIn</strong><small>Voir mon profil professionnel</small></span>
            </a>
          </Reveal>

          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <p className="form-note">L’envoi ouvre votre application de messagerie avec le message prérempli.</p>
            <div className="form-row">
              <label>Nom
                <input name="name" value={form.name} onChange={updateField} autoComplete="name" required placeholder="Votre nom" />
              </label>
              <label>E-mail
                <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required placeholder="vous@exemple.fr" />
              </label>
            </div>
            <label>Sujet
              <input name="subject" value={form.subject} onChange={updateField} placeholder="Le sujet de votre message" />
            </label>
            <label>Message
              <textarea name="message" value={form.message} onChange={updateField} rows="5" required placeholder="Votre message…" />
            </label>
            <button className="button button-primary" type="submit">Préparer l’e-mail <span aria-hidden="true">↗</span></button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
