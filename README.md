# Portfolio — Aaron Fahrasmane

Portfolio personnel réalisé avec React et Vite, à partir de la maquette Figma.

## Repères dans le code

- `src/App.jsx` assemble les sections de la page d’accueil.
- `src/components/` contient les composants React et leur feuille CSS locale.
- `src/pages/` contient les pages Contact et Mentions légales.
- `src/data/` rassemble les contenus modifiables des projets et compétences.
- `src/assets/` contient les images et icônes importées localement.
- `src/styles/` définit les variables visuelles et les règles globales.
- `vite.config.js` déclare les trois pages HTML générées au build.
- `package.json` liste les dépendances et les commandes `dev`, `build`, `preview` et `lint`.
- Les fichiers `*.html` fournissent le point de montage React et les métadonnées propres à chaque page.
- Les SVG, images et polices de `src/assets/` sont des ressources du site ; leur usage se trouve dans les composants ou styles qui les importent, et les polices locales gardent leur licence à côté du fichier.

Les commentaires dans les composants expliquent les états, les interactions,
les données à modifier et le rôle des principales zones de page. Les styles sont
regroupés par composant ; les commentaires au début des groupes CSS indiquent
quelle partie de l'interface ils contrôlent et les media queries expliquent les
adaptations pour les écrans étroits.

## Démarrage

```sh
npm install
npm run dev
```

`npm run build` génère la version de production dans `dist/` et `npm run preview` la sert localement.

## Contenus à compléter

- Remplacer les fiches de démonstration de la section projets par les réalisations réelles.
- Ajouter le fichier PDF du CV et le relier au bouton correspondant.
- Compléter les informations d’hébergement des mentions légales avant publication.
- Le formulaire de contact prépare un e-mail via l’application de messagerie de l’utilisateur ; il n’utilise pas encore de service d’envoi.
