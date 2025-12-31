export const metadata = {
  title: 'Mentions Légales - Eric Sartre Architecte',
  description: 'Mentions légales du site Eric Sartre Architecte, éco-construction dans la Drôme.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="page-content pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="section-title">Mentions Légales</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="prose prose-lg text-text-light space-y-8">
              
              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Éditeur du site</h2>
                <p>
                  <strong>Eric Sartre</strong><br />
                  Architecte DPLG<br />
                  Rue de la Drôme<br />
                  26400 Mirabel & Blacons<br />
                  France
                </p>
                <p>
                  Téléphone : 06 30 12 36 03<br />
                  {/* TODO: Remplacer par la vraie adresse email */}
                  Email : contact@eric-sartre-architecte.fr
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Activité professionnelle</h2>
                <p>
                  Architecte inscrit à l'Ordre des Architectes de la région Auvergne-Rhône-Alpes.<br />
                  {/* TODO: Ajouter le numéro d'inscription si souhaité */}
                  Titre d'architecte obtenu conformément à la loi n°77-2 du 3 janvier 1977 
                  sur l'architecture.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Hébergement</h2>
                <p>
                  Ce site est hébergé par :<br />
                  <strong>Vercel Inc.</strong><br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Propriété intellectuelle</h2>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale 
                  sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                  reproduction sont réservés, y compris pour les documents téléchargeables 
                  et les représentations iconographiques et photographiques.
                </p>
                <p>
                  Les photographies des projets présentés sur ce site sont la propriété 
                  d'Eric Sartre ou utilisées avec l'autorisation de leurs auteurs.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Données personnelles</h2>
                <p>
                  Les informations recueillies via le formulaire de contact sont destinées 
                  exclusivement à Eric Sartre pour répondre à vos demandes. Elles ne sont 
                  ni transmises à des tiers, ni utilisées à des fins commerciales.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification et de suppression des 
                  données vous concernant. Pour exercer ce droit, contactez-moi par email 
                  ou par courrier postal.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Cookies</h2>
                <p>
                  Ce site n'utilise pas de cookies de suivi ni d'outils d'analyse tiers. 
                  Seuls des cookies techniques strictement nécessaires au fonctionnement 
                  du site peuvent être utilisés.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Crédits</h2>
                <p>
                  Site conçu et développé avec Next.js et Tailwind CSS.<br />
                  {/* TODO: Ajouter les crédits photos si des images tierces sont utilisées */}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
