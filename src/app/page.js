import HeroSlider from '@/components/HeroSlider'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-content">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mx-auto">
              Concevoir avec le lieu, construire pour demain
            </h2>
            <p className="mt-8 text-lg text-text-light leading-relaxed">
              Depuis 2001, je façonne des projets architecturaux en Drôme, alliant créativité 
              et respect de l'environnement. Spécialisé en éco construction, ma pratique privilégie 
              l'usage des matériaux naturels tel le bois, la paille, la terre et autres matériaux biosourcés.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projets"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-heading font-medium rounded hover:bg-primary-dark transition-colors"
              >
                Découvrir les projets
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-heading font-medium rounded hover:bg-primary hover:text-white transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Domaines d'intervention</h2>
          <p className="mt-4 text-center text-text-light max-w-2xl mx-auto">
            Tous projets, neuf ou réhabilitation, rénovation énergétique, individuel ou collectif, professionnel...
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-eco-light/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-primary mb-2">Neuf</h3>
              <p className="text-sm text-text-light">
                Construction neuve en matériaux écologiques, conception bioclimatique
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-eco-light/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-primary mb-2">Réhabilitation</h3>
              <p className="text-sm text-text-light">
                Rénovation du bâti ancien, extension, rénovation énergétique
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-eco-light/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-primary mb-2">Individuel ou collectif</h3>
              <p className="text-sm text-text-light">
                Maison individuelle, habitat groupé, petit collectif
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-eco-light/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-primary mb-2">Professionnel</h3>
              <p className="text-sm text-text-light">
                Bureaux, ateliers, commande publique et privée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
            Un projet d'éco-construction ?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            L'architecture est un acte engagé. Avec énergie et enthousiasme, je relève le défi 
            de concrétiser vos intentions, en instaurant un équilibre juste entre usagers, 
            construction et environnement.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-heading font-medium rounded hover:bg-eco-light transition-colors"
          >
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  )
}
