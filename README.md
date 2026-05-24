# Forge Studio — Landing Page Agence Créative (v2)

Landing page complète et entièrement développée pour une agence digitale créative. HTML/CSS/JS pur, aucune dépendance externe.

## Sections (ordre de page)

| # | Section | Description |
|---|---------|-------------|
| 1 | **Preloader** | Animation de chargement avec barre de progression |
| 2 | **Navigation** | Fixe, blur au scroll, hamburger → X animé, lien actif au scroll |
| 3 | **Hero** | Typewriter (5 mots), parallax orbes au mouvement souris, badges flottants |
| 4 | **Marquee** | Ticker horizontal infini des services, pause au hover |
| 5 | **Stats Bar** | 4 compteurs animés au scroll |
| 6 | **About** | Présentation + visual flottant avec 4 cartes (dashboard mini) |
| 7 | **Services** | 4 cartes avec tags, hover gradient, liens CTA |
| 8 | **Tech Stack** | 15 pills de technologies maîtrisées |
| 9 | **Portfolio** | 6 projets, filtre par catégorie animé (Tous / Web / Dev / Branding) |
| 10 | **Process** | 4 étapes numérotées avec ligne de connexion gradient |
| 11 | **Team** | 3 membres avec avatars gradient, rôles, tags et liens sociaux |
| 12 | **Testimonials** | 3 avis clients avec note, auteur et badge |
| 13 | **CTA Banner** | Bandeau gradient avec double CTA |
| 14 | **Contact** | Formulaire complet + infos + badge disponibilité |
| 15 | **Footer** | Multi-colonnes, réseaux sociaux, mentions légales |

## Fonctionnalités JS

- **Preloader** — animation d'entrée sur `window.load`
- **Barre de progression** — largeur synchronisée avec `scrollY`
- **Curseur personnalisé** — dot + anneau avec lag fluide (requestAnimationFrame)
- **Parallax hero** — les orbes bougent en fonction de la position souris
- **Typewriter** — 5 mots en boucle, vitesse naturelle avec pause
- **Scroll reveal** — IntersectionObserver sur tous les `.reveal`
- **Compteurs animés** — déclenché quand la stat section entre dans le viewport
- **Filtre portfolio** — afficher/masquer par catégorie avec transitions CSS
- **Nav active link** — surligne le lien correspondant à la section visible
- **Mobile nav** — hamburger toggle, animation X, overflow:hidden body
- **Smooth scroll** — tous les ancres `#`
- **Back to top** — apparaît après 500px, disparaît en haut
- **Formulaire** — chargement → succès → reset (simulé)

## Stack

- HTML5 sémantique (balises nav, section, article, footer, form)
- CSS3 — variables custom, grid, flexbox, `clamp()`, keyframes, transitions
- JavaScript ES6+ vanilla — aucune librairie externe
- Google Fonts — Inter (300 à 900)

## Lancement

Ouvrir `index.html` directement dans un navigateur. Aucune installation nécessaire.

## Structure

```
agency-landing/
├── index.html   — 15 sections, ~420 lignes
├── style.css    — design system complet, ~700 lignes
├── script.js    — interactions, ~170 lignes
└── README.md
```
