// Page légale indépendante. Mettre à jour les coordonnées ici si elles changent.
import Footer from '../components/Footer/Footer.jsx'
import './LegalPage.css'

const publisherDetails = [
  // Les coordonnées affichées dans le tableau Éditeur du site.
  ['Nom et prénom', 'Fahrasmane Aaron'],
  ['Statut', 'Particulier - Étudiant'],
  ['E-mail', <a href="mailto:aaron.fahrasmane@gmail.com">aaron.fahrasmane@gmail.com</a>],
]

const hostDetails = [
  // Coordonnées d'hébergement affichées dans la section dédiée.
  ['Hébergeur', 'OVH Cloud'],
  ['Adresse', '2 rue Kellermann - 59100 Roubaix - France'],
  ['Site web', <a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer">https://www.ovhcloud.com</a>],
]

function DetailRows({ rows }) {
  // Rend les paires libellé/valeur utilisées dans les deux tableaux légaux.
  return <div className="legal-rows">{rows.map(([label, value]) => <div className="legal-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
}

function LegalPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <nav className="legal-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a><a href="/#a-propos">À propos</a><a href="/#realisations">Réalisations</a><a className="legal-nav-contact" href="/#contact">Me Contacter</a>
        </nav>
      </header>
      <main className="legal-content">
        {/* Données légales regroupées par sujet ; les coordonnées sont définies en haut du fichier. */}
        <a className="legal-back" href="/#accueil">← Retour au portfolio</a>
        <div className="legal-title"><h1>Mentions légales</h1><p>Dernière mise à jour : 10/11/2026</p></div>
        <div className="legal-rule" />
        <section><h2>Éditeur du site</h2><DetailRows rows={publisherDetails} /></section>
        <section><h2>Directeur de la publication</h2><p>Aaron Fahrasmane</p></section>
        <section><h2>Hébergement</h2><DetailRows rows={hostDetails} /></section>
        <section><h2>Propriété intellectuelle</h2><p>Sauf mention contraire, les textes, visuels et éléments graphiques de ce portfolio sont la propriété d’Aaron Fahrasmane. Toute réutilisation doit faire l’objet d’une autorisation préalable. Pense à préciser les crédits et licences des ressources tierces utilisées.</p></section>
        <section><h2>Données personnelles et cookies</h2><p>Les seules données personnelles collectées sont celles des formulaires de contact. Elles sont conservées uniquement afin de répondre aux demandes. Aucun cookie n’est collecté.</p></section>
        <section><h2>Contact</h2><p>Pour toute question au sujet du site : <a href="mailto:aaron.fahrasmane@gmail.com">aaron.fahrasmane@gmail.com</a>.</p></section>
      </main>
      <Footer />
    </div>
  )
}

export default LegalPage
