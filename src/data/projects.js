// Projets Eric Sartre Architecte - Regroupés par projet avec galerie

export const projects = [
  {
    id: 1,
    title: 'Extension contemporaine bois',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-2.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-3.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-4.jpeg',
    ],
    description: 'Extension en bardage bois, intégration contemporaine à une maison traditionnelle.',
    hasDocument: false,
    category: 'rehabilitation',
  },
  {
    id: 2,
    title: 'Maison contemporaine',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-5.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-6.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-7.jpeg',
    ],
    description: 'Maison individuelle contemporaine avec vue panoramique sur les montagnes.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 3,
    title: 'Maison ossature bois',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-8.jpeg',
    ],
    description: 'Maison à étage en ossature bois, bardage naturel et terrasse.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 4,
    title: 'Maison bois et piscine',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-9.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-10.jpeg',
    ],
    description: 'Maison contemporaine bois et enduit avec piscine.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 5,
    title: 'Maison avec vue vallée',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-12.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-14.jpeg',
    ],
    description: 'Maison bois avec terrasse panoramique sur la vallée.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 6,
    title: 'Maison matériaux naturels',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-11.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-13.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-15.jpeg',
    ],
    description: 'Maison en matériaux naturels : bois, pierre, enduit terre.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 7,
    title: 'Maison balcons et volets',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-16.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-17.jpeg',
    ],
    description: 'Maison bois avec balcons et volets colorés.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 8,
    title: 'Maison enduit terre',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-18.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-19.jpeg',
    ],
    description: 'Maison plain-pied, enduit terre et menuiseries bois.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 9,
    title: 'Bâtiment mixte bois',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-20.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-21.jpeg',
    ],
    description: 'Bâtiment professionnel en bardage bois et enduit.',
    hasDocument: false,
    category: 'professionnel',
  },
  {
    id: 10,
    title: 'Habitat groupé Habiterre',
    location: 'Die, Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-22.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-23.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-1.jpeg',
    ],
    description: 'Habitat groupé écologique, bois et enduit terre coloré.',
    hasDocument: true,
    category: 'habitat-groupe',
  },
]

// Helper to get main image for card display
export const getMainImage = (project) => project.images[0]

// Galerie pour la page présentation - focus matériaux et chantiers
export const presentationGallery = [
  { id: 1, title: 'Construction paille', image: '/images/assets/IMG_0329D0CB5B8D-18.jpeg' },
  { id: 2, title: 'Mur en terre crue', image: '/images/assets/IMG_0329D0CB5B8D-13.jpeg' },
  { id: 3, title: 'Charpente bois', image: '/images/assets/IMG_0329D0CB5B8D-11.jpeg' },
  { id: 4, title: 'Ossature bois intérieur', image: '/images/assets/IMG_0329D0CB5B8D-15.jpeg' },
  { id: 5, title: 'Maison contemporaine', image: '/images/assets/IMG_0329D0CB5B8D-5.jpeg' },
  { id: 6, title: 'Habitat groupé', image: '/images/assets/IMG_0329D0CB5B8D-22.jpeg' },
  { id: 7, title: 'Extension bois', image: '/images/assets/IMG_0329D0CB5B8D-21.jpeg' },
  { id: 8, title: 'Maison bois', image: '/images/assets/IMG_0329D0CB5B8D-8.jpeg' },
]
