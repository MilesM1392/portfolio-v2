// Page Contact autonome. Le formulaire prépare un mailto (aucun serveur ne
// reçoit ou ne stocke les messages).
import { useState } from 'react'
import Footer from '../components/Footer/Footer.jsx'
import './ContactPage.css'

const email = 'aaron.fahrasmane@gmail.com'
const linkedin = 'https://www.linkedin.com/in/aaron-fahrasmane-275ba4388/'

function ContactPage() {
  // Le formulaire est contrôlé par React pour composer le mailto à l'envoi.
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const update = (event) => setForm((value) => ({ ...value, [event.target.name]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    // Encode les champs pour construire une URL mailto valide dans le logiciel de messagerie.
    const subject = encodeURIComponent(form.subject || `Message de ${form.name}`)
    const body = encodeURIComponent(`Nom : ${form.name}\nE-mail : ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact-page">
      <header className="contact-page-header">
        <nav className="contact-page-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a><a href="/#a-propos">À propos</a><a href="/#realisations">Réalisations</a><a className="is-current" href="#contact">Me Contacter</a>
        </nav>
      </header>
      <main id="contact" className="contact-page-main">
        {/* Coordonnées à gauche et formulaire à droite ; les liens ouvrent les services externes. */}
        <section className="contact-page-intro">
          <h1>Me contacter</h1>
          <p className="contact-lead">Une offre, un projet ou simplement envie de discuter ?</p>
          <p className="contact-email-copy">Ou plus simplement à l’adresse :<br /><a href={`mailto:${email}`}>{email}</a></p>
          <div className="contact-linkedin-copy"><h2>Échangeons aussi sur LinkedIn</h2><a href={linkedin} target="_blank" rel="noreferrer">Voir mon profil LinkedIn ↗</a></div>
        </section>
        <form className="contact-page-form" onSubmit={submit}>
          <div className="contact-page-row">
            <label>Nom<input name="name" value={form.name} onChange={update} autoComplete="name" required placeholder="Votre nom" /></label>
            <label>E-mail<input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required placeholder="adressemail@exemple.fr" /></label>
          </div>
          <label>Sujet<input name="subject" value={form.subject} onChange={update} placeholder="Le sujet de votre message" /></label>
          <label>Message<textarea name="message" value={form.message} onChange={update} required placeholder="Dis-moi tout…" /></label>
          <button type="submit">Envoyer</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
