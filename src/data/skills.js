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
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    id: 'mobile',
    label: 'Développement mobile',
    technologies: [
      { name: 'Android', icon: 'android' },
      { name: 'Java', icon: 'java' },
      { name: 'Retrofit', icon: 'retrofit' },
    ],
  },
  {
    id: 'database',
    label: 'Bases de données',
    technologies: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MariaDB', icon: 'mariadb' },
      { name: 'PDO', icon: 'database' },
      { name: 'PMA', icon: 'phpmyadmin' },
    ],
  },
  {
    id: 'tools',
    label: 'Environnement',
    technologies: [
      { name: 'Apache', icon: 'apache' },
      { name: 'Vite', icon: 'vite' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Bash', icon: 'bash' },
      { name: 'Linux', icon: 'linux' },
      
    ],
  },
  {
    id: 'design',
    label: 'Création',
    technologies: [
      { name: 'UI/UX', icon: 'figma' },
      { name: 'Affinity', icon: 'affinity' },
      { name: 'Illustrator', icon: 'illustrator' },
      { name: 'Photoshop', icon: 'photoshop' },
      { name: 'InDesign', icon: 'indesign' },
      { name: 'Lightroom', icon: 'lightroom' },
      { name: 'Resolve', icon: 'davinci' },
      { name: 'CapCut', icon: 'capcut' },
      { name: 'WordPress', icon: 'wordpress' },
    ],
  },
]
