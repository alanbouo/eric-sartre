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
                Architecte dans la Drôme depuis 2001
              </h2>
              
              <div className="prose prose-lg text-text-light space-y-6">
                <p>
                  <strong className="text-text">9 années d'exercice au sein de la société SCOP HABITERRE</strong>, 
                  atelier d'architecture écologique, aujourd'hui indépendant.
                </p>
                
                <p>
                  Une expérience dans le domaine de la <strong className="text-eco-dark">construction écologique</strong> en 
                  maison individuelle neuve, la réhabilitation de bâti ancien, de l'habitat groupé et petit collectif, des 
                  projets de bâtiments professionnels et bureaux, de la commande publique comme privée.
                </p>

                <div className="border-l-4 border-eco pl-6 my-8">
                  <p className="italic">
                    C'est à partir de l'examen de votre programme, de vos intentions, du « site », 
                    que l'architecte tricote un projet en lui donnant forme et orientation. Le chemin s'avère 
                    complexe mais au final la proposition doit se révéler au maitre d'ouvrage.
                  </p>
                </div>

                <p>
                  Il s'agit bien de faire coïncider le projet avec l'identité d'un lieu avec toutes les nuances 
                  de qualités qu'il possède et ainsi faire contribuer le projet à son appréciation, la réponse de 
                  l'architecte doit être adaptée et surtout convaincante.
                </p>

                <p>
                  Le projet doit être à la "hauteur" de son environnement et par conséquent être respectueux de ce dernier, 
                  c'est pourquoi qu'au-delà de la réglementation thermique en vigueur, l'utilisation des matériaux à faible énergie grise sera privilégiée.
                </p>
                
                <p>
                  Cette proposition lui permettra de s'inscrire dans son époque, sur le fond comme sur la forme avec une cohérence et des perspectives constructives.
                </p>
                
                <p>
                  L'architecte doit avec son énergie et son enthousiasme être capable de relever ce défi, concrétiser l'élan initial, 
                  rendre possible ce qui n'est au départ qu'une intention et réussir à instaurer un rapport juste, entre les usagers, la construction et notre environnement.
                </p>

                <h3 className="font-heading text-xl text-primary mt-8 mb-4">
                  Compétences et spécialités
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Construction neuve</h4>
                    <p className="text-sm">
                      Ossature bois, isolation paille, enduits terre, toiture végétalisée
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Réhabilitation</h4>
                    <p className="text-sm">
                      Rénovation énergétique, respect du bâti ancien, extensions contemporaines
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Habitat participatif</h4>
                    <p className="text-sm">
                      Conception collaborative, espaces partagés, éco-hameaux
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded">
                    <h4 className="font-medium text-primary mb-2">Bâtiments professionnels</h4>
                    <p className="text-sm">
                      Bureaux, ateliers, locaux commerciaux, équipements publics
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
