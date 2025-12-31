'use client'

// Document icon SVG component
function DocumentIcon() {
  return (
    <svg 
      className="w-4 h-4 text-eco inline-block ml-2" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/>
      <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
    </svg>
  )
}

export default function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(project)
        }
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
      />
      <div className="project-card-overlay">
        <h3 className="font-heading text-sm md:text-base font-medium">
          {project.title}
          {project.hasDocument && <DocumentIcon />}
        </h3>
        {project.location && (
          <p className="text-xs opacity-80 mt-1">{project.location}</p>
        )}
      </div>
    </div>
  )
}
