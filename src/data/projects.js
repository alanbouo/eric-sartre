// Projets Eric Sartre Architecte - Regroupés par projet avec galerie

export const projects = [
  {
    id: 1,
    title: 'Extension bois - Crest, 2022',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-2.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-3.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-4.jpeg',
    ],
    description: 'Réhabilitation et extension d\'une maison villageoise. Bardage bois gris, terrasses et dialogue entre l\'ancien et le contemporain.',
    hasDocument: false,
    category: 'rehabilitation',
  },
  {
    id: 2,
    title: 'Maison vue Belledonne - Saillans',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-5.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-6.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-7.jpeg',
    ],
    description: 'Maison individuelle contemporaine aux volumes blancs. Ouverture panoramique sur les montagnes, terrasses en dalles.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 3,
    title: 'Maison bois familiale - Die',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-8.jpeg',
    ],
    description: 'Construction à deux niveaux en ossature bois. Bardage naturel, balcon et terrasse intégrés au jardin.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 4,
    title: 'Étude de logements - Projet',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-9.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-10.jpeg',
    ],
    description: 'Projet d\'ensemble de maisons en ossature bois. Étude en cours pour un habitat écologique.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 5,
    title: 'Maison bois avec piscine - Crest',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-12.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-14.jpeg',
    ],
    description: 'Terrasses en bois et piscine intégrée dans le paysage. Grandes ouvertures sur la vallée.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 6,
    title: 'Chantier - Matériaux locaux',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-11.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-13.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-15.jpeg',
    ],
    description: 'Techniques traditionnelles : charpente bois et métal, mur en terre crue, ossature apparente.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 7,
    title: 'Maison aux volets colorés - Châtillon',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-16.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-17.jpeg',
    ],
    description: 'Bardage bois naturel ponctué de volets et garde-corps colorés. Façade vivante et personnalisée.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 8,
    title: 'Maison terre et paille - Saillans',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-18.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-19.jpeg',
    ],
    description: 'Construction en bottes de paille enduites de terre crue. Menuiseries bois, plain-pied bioclimatique.',
    hasDocument: false,
    category: 'maison-individuelle',
  },
  {
    id: 9,
    title: 'Bureaux et activités - Aouste',
    location: 'Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-20.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-21.jpeg',
    ],
    description: 'Bâtiment mixte en bardage bois clair. Volets coulissants et extension d\'activité artisanale.',
    hasDocument: false,
    category: 'professionnel',
  },
  {
    id: 10,
    title: 'Habiterre - 16 logements, Die',
    location: 'Die, Drôme',
    images: [
      '/images/assets/IMG_0329D0CB5B8D-22.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-23.jpeg',
      '/images/assets/IMG_0329D0CB5B8D-1.jpeg',
    ],
    description: 'Habitat groupé bioclimatique. Ossature bois, enduit terre coloré et terrasses communes sur la ville.',
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
