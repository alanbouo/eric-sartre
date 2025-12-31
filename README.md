# Eric Sartre - Architecte Éco-construction

Site web portfolio pour Eric Sartre, architecte spécialisé en éco-construction dans la Drôme (France).

## 🏗️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Déploiement**: Optimisé pour [Vercel](https://vercel.com/)

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.js              # Page d'accueil
│   ├── layout.js            # Layout principal
│   ├── globals.css          # Styles globaux
│   ├── projets/
│   │   └── page.js          # Page projets
│   ├── presentation/
│   │   └── page.js          # Page présentation
│   ├── publications/
│   │   └── page.js          # Page publications
│   ├── contact/
│   │   └── page.js          # Page contact
│   └── mentions-legales/
│       └── page.js          # Mentions légales
├── components/
│   ├── Header.js            # Navigation fixe
│   ├── Footer.js            # Pied de page
│   ├── HeroSlider.js        # Slider hero page d'accueil
│   ├── Lightbox.js          # Lightbox pour galerie
│   └── ProjectCard.js       # Carte projet
└── data/
    └── projects.js          # Données des projets
```

## 🚀 Installation et développement

### Prérequis

- Node.js 18.17 ou supérieur
- npm, yarn ou pnpm

### Installation

```bash
# Cloner le repository
git clone <url-du-repo>
cd eric-sartre

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement local

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
```

Le site statique sera généré dans le dossier `out/`.

## 🌐 Déploiement sur Vercel

### Méthode 1: Depuis GitHub (recommandé)

1. Pousser le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Cliquer sur "New Project"
4. Importer le repository GitHub
5. Vercel détecte automatiquement Next.js
6. Cliquer sur "Deploy"
7. Configurer le domaine personnalisé dans les settings

### Méthode 2: CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 📷 Remplacer les images placeholder

Les images actuelles sont des placeholders. Pour les remplacer par les vraies photos :

1. Placer les images dans `public/images/`
2. Mettre à jour les URLs dans :
   - `src/components/HeroSlider.js` (images du slider hero)
   - `src/data/projects.js` (images des projets)

Format recommandé :
- Hero : 1920x1080px minimum
- Projets : 800x600px minimum
- Formats : JPG, WebP (pour de meilleures performances)

## 📝 Formulaire de contact

Le formulaire utilise actuellement un lien `mailto:`. Options pour un vrai formulaire :

### Option 1: Netlify Forms (gratuit)
Décommenter les attributs dans `src/app/contact/page.js` :
```jsx
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
```

### Option 2: Formspree
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Remplacer l'action du formulaire par l'URL Formspree

### Option 3: API Route Next.js
Créer une API route pour envoyer des emails (nécessite un service email).

## 🎨 Personnalisation

### Couleurs

Modifier `tailwind.config.js` pour changer la palette :

```js
colors: {
  primary: {
    DEFAULT: '#4A676A',  // Bleu-gris principal
    // ...
  },
  eco: {
    DEFAULT: '#6B8E23',  // Vert accent
    // ...
  },
}
```

### Typographie

Les polices sont définies dans `src/app/globals.css`. Pour les changer, modifier l'import Google Fonts et les définitions dans `tailwind.config.js`.

## 📄 License

Tous droits réservés © 2025 Eric Sartre

---

**Développé pour Eric Sartre, Architecte DPLG - Drôme, France**
