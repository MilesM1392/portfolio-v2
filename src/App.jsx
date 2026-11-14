// Assemblage de la page d’accueil. Contact et Mentions légales sont des pages
// séparées, chacune avec son propre point d’entrée HTML.
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      {/* En-tête fixé puis sections de la page d'accueil dans l'ordre de lecture. */}
      <Navbar />
      <main className="site-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      {/* Le pied de page est commun aux pages du site. */}
      <Footer />
    </>
  )
}

export default App
