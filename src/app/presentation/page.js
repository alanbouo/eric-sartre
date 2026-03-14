import { presentationGallery } from '@/data/projects'

export const metadata = {
  title: 'Présentation - Eric Sartre Architecte, Drôme, Eco Construction',
  description: 'Depuis 2001, je façonne des projets architecturaux en Drôme, alliant créativité et respect de l’environnement. Spécialisé en éco construction, ma pratique privilégie l’usage des matériaux naturels tel le bois, la paille, la terre et autres matériaux biosourcés... ',
}

export default function PresentationPage() {
  return (
    <div className="page-content pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="section-title">Présentation</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-heading text-2xl text-primary mb-6">
                Concevoir avec le lieu, construire pour demain
              </h2>
              
              <div className="prose prose-lg text-text-light space-y-6">
                <p>
                  Depuis 2001, je façonne des projets architecturaux en Drôme, alliant créativité et respect 
                  de l'environnement. Spécialisé en <strong className="text-eco-dark">éco construction</strong>, ma pratique 
                  privilégie l'usage des matériaux naturels tel le bois, la paille, la terre et autres matériaux biosourcés.
                </p>

                <h3 className="font-heading text-xl text-primary mt-8 mb-4">
                  Mon approche
                </h3>
                
                <p>
                  Chaque projet naît d'une écoute attentive, vos besoins, vos aspirations et du site lui-même. 
                  Mon rôle est de transformer ces éléments en une proposition architecturale cohérente, adaptée 
                  et convaincante, où le bâti dialogue avec son environnement.
                </p>

                <div className="border-l-4 border-eco pl-6 my-8">
                  <p className="italic">
                    Il s'agit de construire, mais également de révéler le potentiel d'un lieu et d'y inscrire 
                    une réponse à la fois esthétique et responsable.
                  </p>
                </div>

                <h3 className="font-heading text-xl text-primary mt-8 mb-4">
                  Engagement écologique
                </h3>

                <p>
                  Je privilégie les matériaux à faible énergie grise, des solutions durables, pour des projets 
                  qui s'inscrivent dans leur époque sans compromettre l'avenir. L'objectif ? Créer des espaces 
                  qui respectent leur environnement, tout en répondant aux attentes des usagers.
                </p>

                <h3 className="font-heading text-xl text-primary mt-8 mb-4">
                  Ma philosophie
                </h3>
                
                <p>
                  L'architecture est un acte engagé. Avec énergie et enthousiasme, je relève le défi de concrétiser 
                  vos intentions, en instaurant un équilibre juste entre usagers, construction et environnement. 
                  Mon ambition ? Rendre possible ce qui n'est, au départ, qu'une idée — et en faire une réalité 
                  durable, harmonieuse et inspirante.
                </p>

                <h3 className="font-heading text-xl text-primary mt-8 mb-4">
                  Domaines d'intervention
                </h3>

                <p className="mb-4">
                  Tous projets, neuf ou réhabilitation, rénovation énergétique, individuel ou collectif, professionnel...
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Construction neuve</h4>
                    <p className="text-sm">
                      Ossature bois, isolation paille, enduits terre, matériaux biosourcés
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Réhabilitation</h4>
                    <p className="text-sm">
                      Rénovation énergétique, respect du bâti ancien, extensions
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Individuel ou collectif</h4>
                    <p className="text-sm">
                      Maison individuelle, habitat groupé, petit collectif
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Professionnel</h4>
                    <p className="text-sm">
                      Bureaux, ateliers, commande publique et privée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title mb-8">Quelques réalisations</h2>
          
          {/* TODO: Remplacer par les vraies photos des projets */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {presentationGallery.map((item) => (
              <div 
                key={item.id}
                className="relative aspect-square overflow-hidden rounded group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <span className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <p className="font-heading text-primary">
            <strong>Eric Sartre</strong> — Architecte DPLG
          </p>
          <p className="text-sm text-text-light mt-2">
            Diplômé de l'École Nationale Supérieure d'Architecture
          </p>
          <p className="text-sm text-text-light">
            Inscrit à l'Ordre des Architectes — Auvergne-Rhône-Alpes
          </p>
        </div>
      </section>
    </div>
  )
}
