'use client'

import { useEffect, useCallback, useState } from 'react'

export default function Lightbox({ isOpen, onClose, images, currentImageIndex, onImageChange, title, onPrevProject, onNextProject }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Sync with external index when provided
  useEffect(() => {
    if (currentImageIndex !== undefined) {
      setCurrentIndex(currentImageIndex)
    }
  }, [currentImageIndex])

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        // Navigate within gallery first, then to prev project
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1
          setCurrentIndex(newIndex)
          onImageChange?.(newIndex)
        } else {
          onPrevProject?.()
        }
        break
      case 'ArrowRight':
        // Navigate within gallery first, then to next project
        if (images && currentIndex < images.length - 1) {
          const newIndex = currentIndex + 1
          setCurrentIndex(newIndex)
          onImageChange?.(newIndex)
        } else {
          onNextProject?.()
        }
        break
    }
  }, [isOpen, onClose, onPrevProject, onNextProject, currentIndex, images, onImageChange])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const goToPrevImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      onImageChange?.(newIndex)
    }
  }

  const goToNextImage = () => {
    if (images && currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      onImageChange?.(newIndex)
    }
  }

  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[currentIndex]
  const hasMultipleImages = images.length > 1

  return (
    <div 
      className={`lightbox ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fermer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Project navigation arrows (outer) */}
      {onPrevProject && (
        <button
          className="slider-arrow prev"
          style={{ left: '20px' }}
          onClick={(e) => {
            e.stopPropagation()
            onPrevProject()
          }}
          aria-label="Projet précédent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {onNextProject && (
        <button
          className="slider-arrow next"
          style={{ right: '20px' }}
          onClick={(e) => {
            e.stopPropagation()
            onNextProject()
          }}
          aria-label="Projet suivant"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image content */}
      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery image navigation (inner) */}
        {hasMultipleImages && (
          <>
            <button
              className="slider-arrow prev"
              style={{ left: '60px', transform: 'scale(0.8)' }}
              onClick={(e) => {
                e.stopPropagation()
                goToPrevImage()
              }}
              disabled={currentIndex === 0}
              aria-label="Image précédente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="slider-arrow next"
              style={{ right: '60px', transform: 'scale(0.8)' }}
              onClick={(e) => {
                e.stopPropagation()
                goToNextImage()
              }}
              disabled={currentIndex === images.length - 1}
              aria-label="Image suivante"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <img
          src={currentImage}
          alt={`${title} - Image ${currentIndex + 1}`}
        />
        
        {title && (
          <div className="text-center mt-4 text-white">
            <h3 className="font-heading text-xl md:text-2xl">{title}</h3>
            {hasMultipleImages && (
              <p className="text-sm opacity-80 mt-2">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        )}

        {/* Image thumbnails */}
        {hasMultipleImages && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                  onImageChange?.(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
