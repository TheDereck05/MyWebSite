import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col justify-between border rounded-2xl overflow-hidden shadow-sm bg-[#1a1a1a] text-white hover:shadow-lg transition-all duration-300 h-full min-h-[380px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-lg font-semibold">{project.title}</h3>

        {/* Descripción corta */}
        <p className="text-sm text-gray-400 mt-1 flex-grow">{project.short}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white text-black rounded-md text-xs font-semibold 
                         drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] 
                         transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón Ver Detalle */}
        <div className="mt-4">
          <a
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 bg-white text-black rounded-md text-xs font-semibold 
                       drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] 
                       transition-all duration-200 no-underline"
          >
            Ver detalle
          </a>
        </div>
      </div>
    </div>
  )
}




