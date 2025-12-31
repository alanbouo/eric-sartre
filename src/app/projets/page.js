'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Lightbox from '@/components/Lightbox'
import { projects } from '@/data/projects'

export default function ProjetsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (project) => {
    const index = projects.findIndex(p => p.id === project.id)
    setCurrentProject(project)
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentProject(null)
  }

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(newIndex)
    setCurrentProject(projects[newIndex])
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(newIndex)
    setCurrentProject(projects[newIndex])
  }

  return (
    <div className="page-content pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="section-title">Projets</h1>
          <p className="mt-6 text-text-light max-w-2xl">
            Découvrez une sélection de réalisations en éco-construction : maisons individuelles, 
            habitat groupé, réhabilitations et bâtiments professionnels dans la Drôme et ses environs.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 text-sm text-text-light">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-eco" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/>
                <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
              </svg>
              <span>Documentation disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        image={currentProject?.image}
        title={currentProject ? `${currentProject.title} - ${currentProject.location}` : ''}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </div>
  )
}
