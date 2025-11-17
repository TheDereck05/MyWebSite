import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0f0f0e] text-white py-20 px-6 flex flex-col items-center"
    >
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0e] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl text-center w-full">
        {/* Título */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block">
          Mis proyectos
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mt-2 mb-6 rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />

        {/* 👉 Texto descriptivo que mencionas */}
        <p className="text-gray-400 text-lg mb-12">
          Aquí muestro mis trabajos y proyectos personales desarrollados con diferentes tecnologías.
        </p>

        {/* Contenedor de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}



