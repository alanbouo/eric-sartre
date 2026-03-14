'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Avec Netlify Forms, le formulaire est géré automatiquement
    // Pas besoin de rediriger vers mailto
    setSubmitted(true)
  }

  return (
    <div className="page-content pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="section-title">Contact</h1>
          <p className="mt-6 text-text-light max-w-2xl">
            Vous avez un projet d'éco-construction ? N'hésitez pas à me contacter 
            pour en discuter. Je vous répondrai dans les meilleurs délais.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-xl text-primary mb-6">Coordonnées</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-medium text-primary">M. Eric SARTRE</p>
                    <p className="text-text-light">Architecte DPLG</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-text">Adresse</p>
                    <p className="text-text-light">
                      Rue de la Drôme<br />
                      26400 Mirabel & Blacons<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-text">Téléphone</p>
                    <a href="tel:+33630123603" className="text-primary hover:text-eco transition-colors">
                      06 30 12 36 03
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-text">Email</p>
                    {/* TODO: Remplacer par la vraie adresse email */}
                    <a href="mailto:contact@eric-sartre-architecte.fr" className="text-primary hover:text-eco transition-colors">
                      contact@eric-sartre-architecte.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Map OpenStreetMap */}
              <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=5.1%2C44.7%2C5.2%2C44.75&layer=mapnik&marker=44.723%2C5.145"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="Localisation Eric Sartre Architecte - Mirabel & Blacons, Drôme"
                  />
                </div>
                <a 
                  href="https://www.openstreetmap.org/?mlat=44.723&mlon=5.145#map=13/44.723/5.145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-primary/5 text-primary text-sm hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Voir sur OpenStreetMap
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-xl text-primary mb-6">Formulaire de contact</h2>
              
              {submitted ? (
                <div className="bg-eco-light/20 border border-eco rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-heading text-lg text-primary mb-2">Message envoyé !</h3>
                  <p className="text-text-light text-sm">
                    Merci pour votre message. Je vous répondrai dans les meilleurs délais.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-primary hover:text-eco underline text-sm"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form 
                  className="contact-form bg-white rounded-lg shadow-sm p-8 space-y-6"
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* Honeypot field for spam protection (Netlify) */}
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit">
                      Envoyer le message
                    </button>
                  </div>

                  <p className="text-xs text-text-light">
                    Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                  </p>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
