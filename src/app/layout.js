import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Eric Sartre - Architecte Éco-construction Drôme',
  description: 'Eric Sartre, architecte DPLG spécialisé en éco-construction dans la Drôme. Construction bois, paille, réhabilitation, matériaux naturels. Maisons individuelles, habitat groupé, bâtiments professionnels.',
  keywords: 'architecte, Drôme, éco-construction, écologique, bois, paille, réhabilitation, matériaux naturels, maison passive, habitat groupé',
  authors: [{ name: 'Eric Sartre' }],
  openGraph: {
    title: 'Eric Sartre - Architecte Éco-construction Drôme',
    description: 'Architecte DPLG spécialisé en éco-construction dans la Drôme. Construction bois, paille, réhabilitation, matériaux naturels.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Eric Sartre Architecte',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#4A676A" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
