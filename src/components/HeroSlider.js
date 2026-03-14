'use client'

import { useState, useEffect, useCallback } from 'react'

// Images du slider - Projets Eric Sartre Architecte
const heroImages = [
  {
    src: '/images/assets/IMG_0329D0CB5B8D-6.jpeg',
    alt: 'Maison contemporaine avec vue sur les montagnes - Architecture écologique',
  },
  {
    src: '/images/assets/IMG_0329D0CB5B8D-7.jpeg',
    alt: 'Maison moderne intégrée dans le paysage drômois',
  },
  {
    src: '/images/assets/IMG_0329D0CB5B8D-14.jpeg',
    alt: 'Maison bois avec terrasse et vue sur la vallée',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="hero-slider">
      {/* Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="slider-arrow prev"
        onClick={prevSlide}
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="slider-arrow next"
        onClick={nextSlide}
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero text overlay */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-white text-right z-10">
        <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
          Eric Sartre
        </h1>
        <p className="font-heading text-lg md:text-xl lg:text-2xl mt-2 opacity-90 drop-shadow-md">
          Architecte
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-1 opacity-80 drop-shadow-md">
          Drôme • Éco-construction
        </p>
      </div>
    </div>
  )
}
