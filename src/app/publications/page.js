export const metadata = {
  title: 'Publications - Eric Sartre Architecte',
  description: 'Publications, études et documents sur l\'éco-construction et l\'habitat groupé. Retours d\'expérience sur des projets en Drôme.',
}

export default function PublicationsPage() {
  return (
    <div className="page-content pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="section-title">Publications</h1>
          <p className="mt-6 text-text-light max-w-2xl">
            Documents, études et retours d'expérience sur des projets d'éco-construction 
            et d'habitat participatif.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Publication 1 */}
            <article className="bg-white rounded-lg shadow-sm p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-eco-light/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-eco" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/>
                    <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="font-heading text-xl text-primary mb-2">
                    Habitat Groupé Habiterre - Die
                  </h2>
                  <p className="text-sm text-text-light mb-4">
                    Étude 2015 • Die, Drôme
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-text-light space-y-4">
                <p>
                  Retour d'expérience sur le projet d'habitat groupé <strong>Habiterre</strong> à Die, 
                  dans la Drôme. Ce projet exemplaire d'habitat participatif a été conçu et réalisé 
                  entre 2008 et 2013.
                </p>
                <p>
                  L'étude présente les différentes phases du projet, de la constitution du groupe 
                  d'habitants jusqu'à la livraison des logements. Elle analyse les choix constructifs, 
                  les solutions techniques retenues et les enseignements tirés de cette expérience 
                  de conception collaborative.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>8 logements en accession groupée</li>
                  <li>Construction en ossature bois et isolation paille</li>
                  <li>Espaces partagés : salle commune, jardin, atelier</li>
                  <li>Conception bioclimatique et faible empreinte carbone</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-text-light">
                  <strong>Crédits photos :</strong> Eric Sartre, habitants Habiterre
                </p>
                {/* TODO: Ajouter le lien de téléchargement du PDF quand disponible */}
                <button 
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-eco transition-colors"
                  disabled
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger l'étude (PDF) — Bientôt disponible
                </button>
              </div>
            </article>


          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-light">
            Pour toute demande de documentation complémentaire, 
            n'hésitez pas à <a href="/contact" className="text-primary hover:text-eco underline">me contacter</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
