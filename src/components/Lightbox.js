'use client'

import { useEffect, useCallback } from 'react'

export default function Lightbox({ isOpen, onClose, image, title, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        onPrev?.()
        break
      case 'ArrowRight':
        onNext?.()
        break
    }
  }, [isOpen, onClose, onPrev, onNext])

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

  if (!isOpen) return null

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

      {/* Navigation arrows */}
      {onPrev && (
        <button
          className="slider-arrow prev"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Projet précédent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {onNext && (
        <button
          className="slider-arrow next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
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
        <img
          src={image}
          alt={title}
        />
        {title && (
          <div className="text-center mt-4 text-white">
            <h3 className="font-heading text-xl md:text-2xl">{title}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
