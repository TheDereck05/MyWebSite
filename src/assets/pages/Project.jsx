import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'

export default function Project() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div>
        <h2 className="text-xl font-bold">Proyecto no encontrado</h2>
        <button className="mt-4 px-3 py-1 bg-gray-200" onClick={() => navigate('/projects')}>Volver</button>
      </div>
    )
  }

  return (
    <div>
      <img src={project.image} alt={project.title} className="w-full max-h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{project.title}</h1>
      <p className="mt-2 text-gray-700">{project.description}</p>

      <div className="mt-4">
        <strong>Tecnologías:</strong>
        <ul className="flex gap-2 mt-2">
          {project.tech.map(t => <li key={t} className="px-2 py-1 border rounded">{t}</li>)}
        </ul>
      </div>
    </div>
  )
}
