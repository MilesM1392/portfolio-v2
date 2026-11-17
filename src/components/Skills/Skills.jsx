// Les onglets pilotent le panneau affiché sur desktop. Sur petit écran, les
// panneaux sont tous empilés pour reprendre le rendu vertical du design.
import { useState } from 'react'
import { skillCategories } from '../../data/skills.js'
import Reveal from '../Reveal.jsx'
import './Skills.css'

import phpIcon from '../../assets/icons/php.svg'
import laravelIcon from '../../assets/icons/laravel.svg'
import pythonUpper from '../../assets/icons/python-upper.svg'
import pythonLower from '../../assets/icons/python-lower.svg'
import pooIcon from '../../assets/icons/poo.svg'
import restIcon from '../../assets/icons/braces.svg'
import httpIcon from '../../assets/icons/globe.svg'
import mysqlIcon from '../../assets/icons/mysql.svg'
import mariaIcon from '../../assets/icons/mariadb.svg'
import databaseIcon from '../../assets/icons/database.svg'
import phpMyAdminIcon from '../../assets/icons/phpmyadmin.svg'
import apacheIcon from '../../assets/icons/skills/Apache.svg'
import affinityIcon from '../../assets/icons/skills/Affinity.svg'
import illustratorIcon from '../../assets/icons/skills/Ai.svg'
import androidIcon from '../../assets/icons/skills/Android.svg'
import bashIcon from '../../assets/icons/skills/Bash.svg'
import capcutIcon from '../../assets/icons/skills/Capcut.svg'
import davinciIcon from '../../assets/icons/skills/Davinci.svg'
import figmaIcon from '../../assets/icons/skills/Figma.svg'
import gitIcon from '../../assets/icons/skills/Git.svg'
import githubSkillIcon from '../../assets/icons/skills/Github.svg'
import htmlIcon from '../../assets/icons/skills/Symbole — HTML.svg'
import cssIcon from '../../assets/icons/skills/Symbole — CSS.svg'
import indesignIcon from '../../assets/icons/skills/Indesign.svg'
import javaIcon from '../../assets/icons/skills/Java.svg'
import javascriptIcon from '../../assets/icons/skills/JavaScript.svg'
import lightroomIcon from '../../assets/icons/skills/Lightroom.svg'
import linuxIcon from '../../assets/icons/skills/Linux.svg'
import photoshopIcon from '../../assets/icons/skills/Ps.svg'
import reactIcon from '../../assets/icons/skills/React.svg'
import retrofitIcon from '../../assets/icons/skills/Retrofit.svg'
import viteIcon from '../../assets/icons/skills/Vite.svg'
import vscodeIcon from '../../assets/icons/skills/Vscode.svg'
import wordpressIcon from '../../assets/icons/skills/Wordpress.svg'

const iconMap = {
  // Les identifiants des données pointent ici vers les fichiers d'icônes.
  php: phpIcon,
  laravel: laravelIcon,
  poo: pooIcon,
  rest: restIcon,
  http: httpIcon,
  mysql: mysqlIcon,
  mariadb: mariaIcon,
  database: databaseIcon,
  phpmyadmin: phpMyAdminIcon,
  apache: apacheIcon,
  affinity: affinityIcon,
  illustrator: illustratorIcon,
  android: androidIcon,
  bash: bashIcon,
  capcut: capcutIcon,
  davinci: davinciIcon,
  figma: figmaIcon,
  git: gitIcon,
  github: githubSkillIcon,
  html: htmlIcon,
  css: cssIcon,
  indesign: indesignIcon,
  java: javaIcon,
  javascript: javascriptIcon,
  lightroom: lightroomIcon,
  linux: linuxIcon,
  photoshop: photoshopIcon,
  react: reactIcon,
  retrofit: retrofitIcon,
  vite: viteIcon,
  vscode: vscodeIcon,
  wordpress: wordpressIcon,
}

function TechnologyCard({ technology }) {
  const icon = iconMap[technology.icon]

  return (
    <article className="technology-card">
      <span className="technology-mark" aria-hidden="true">
        {/* Python est composé de deux SVG ; les autres entrées utilisent un SVG ou un sigle. */}
        {technology.icon === 'python' ? (
          <span className="python-mark"><img src={pythonUpper} alt="" /><img src={pythonLower} alt="" /></span>
        ) : icon ? (
          <img src={icon} alt="" />
        ) : (
          <span>{technology.mark}</span>
        )}
      </span>
      <span>{technology.name}</span>
    </article>
  )
}

function Skills() {
  const [activeId, setActiveId] = useState('backend')
  // La catégorie database est fusionnée visuellement avec le panneau Backend.
  const visibleCategories = skillCategories.filter(({ id }) => id !== 'database')

  return (
    <section id="competences" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-grid-art" aria-hidden="true" />
      <div className="skills-inner">
        <h2 id="skills-title" className="section-title">Mes compétences</h2>
        <div className="skills-layout">
          <div className="skill-tabs" role="tablist" aria-label="Catégories de compétences" aria-orientation="vertical">
            {visibleCategories.map(({ id, label }) => (
              <button
                key={id}
                id={`tab-${id}`}
                type="button"
                role="tab"
                aria-selected={activeId === id}
                aria-controls="skill-panel"
                tabIndex={activeId === id ? 0 : -1}
                className={activeId === id ? 'is-active' : ''}
                onClick={() => setActiveId(id)}
                onKeyDown={(event) => {
                  // Flèches haut/bas parcourent les onglets et déplacent le focus.
                  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return
                  event.preventDefault()
                  const current = visibleCategories.findIndex((category) => category.id === activeId)
                  const step = event.key === 'ArrowDown' ? 1 : -1
                  const next = visibleCategories[(current + step + visibleCategories.length) % visibleCategories.length]
                  setActiveId(next.id)
                  document.getElementById(`tab-${next.id}`)?.focus()
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <Reveal as="div" className="skill-panel-wrap">
            {/* Un panneau par catégorie ; seul l'actif est visible sur ordinateur. */}
            {visibleCategories.map((category) => (
              <div id={category.id === activeId ? 'skill-panel' : undefined} className={`skill-panel skill-panel--${category.id}${category.id === activeId ? ' is-active' : ''}`} role="tabpanel" aria-labelledby={`tab-${category.id}`} key={category.id}>
                <div className="skill-panel-heading"><h3>{category.id === 'backend' ? 'Programmation' : category.label}</h3></div>
                <div className="technology-grid">
                  {category.technologies.map((technology) => <TechnologyCard key={technology.name} technology={technology} />)}
                </div>
                {category.id === 'backend' && (
                  <div className="skill-secondary-group">
                    <h3>Bases de données</h3>
                    <div className="technology-grid">
                      {skillCategories.find(({ id }) => id === 'database').technologies.map((technology) => <TechnologyCard key={technology.name} technology={technology} />)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Skills
