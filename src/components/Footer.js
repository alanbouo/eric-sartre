import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Eric Sartre - Architecte DPLG
            </p>
            <p className="text-xs opacity-70 mt-1">
              Spécialiste en éco-construction - Drôme, France
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/mentions-legales" className="hover:text-eco-light transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-eco-light transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Eco badge */}
        <div className="mt-6 pt-6 border-t border-primary-light/30 text-center">
          <p className="text-xs opacity-60 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-eco-light" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Site développé avec Next.js et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
