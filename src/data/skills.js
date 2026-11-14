// Source des libellés et cartes de compétences. `icon` doit correspondre à une
// clé de iconMap dans Skills.jsx ; `mark` fournit le sigle quand aucune icône n'est utilisée.
// `database` devient un sous-groupe de Backend et ne crée donc pas d'onglet séparé.
export const skillCategories = [
  {
    id: 'backend',
    label: 'Développement backend',
    technologies: [
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Python', icon: 'python' },
      { name: 'POO', icon: 'poo' },
      { name: 'REST', icon: 'rest' },
      { name: 'HTTP', icon: 'http' },
    ],
  },
  {
    id: 'frontend',
    label: 'Développement frontend',
    technologies: [
      { name: 'React', mark: 'R' },
      { name: 'JavaScript', mark: 'JS' },
      { name: 'HTML / CSS', mark: '</>' },
    ],
  },
  {
    id: 'mobile',
    label: 'Développement mobile',
    technologies: [
      { name: 'Android', mark: 'A' },
      { name: 'Java', mark: 'J' },
    ],
  },
  {
    id: 'database',
    label: 'Bases de données',
    technologies: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MariaDB', icon: 'mariadb' },
      { name: 'PDO', icon: 'database' },
      { name: 'phpMyAdmin', icon: 'phpmyadmin' },
    ],
  },
  {
    id: 'tools',
    label: 'Environnement',
    technologies: [
      { name: 'Docker', mark: 'D' },
      { name: 'Apache', mark: 'A' },
      { name: 'Vite', mark: 'V' },
      { name: 'GitHub', mark: 'GH' },
      { name: 'WordPress', mark: 'W' },
    ],
  },
  {
    id: 'design',
    label: 'Création',
    technologies: [
      { name: 'Design UI/UX', mark: 'UI' },
      { name: 'Programmation', mark: '{ }' },
    ],
  },
]
