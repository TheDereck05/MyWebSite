import React, { useRef } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsSection() {
  const ref = useRef(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 relative bg-[#0f0f0e] text-white"
    >
      <div className="container mx-auto text-center">
        {/* ====== TÍTULO ====== */}
        <motion.div
          className="mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block">
            Proyectos Personales
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
        </motion.div>

        {/* ====== TEXTO DESCRIPTIVO SIN RECUADRO ====== */}
        <motion.p
          className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Aquí muestro mis trabajos y proyectos personales desarrollados con
          diferentes tecnologías. Cada uno refleja una parte de mi proceso de
          aprendizaje y la pasión que tengo por crear cosas nuevas.
        </motion.p>

        {/* ====== GRID DE PROYECTOS ====== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
          }}
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={cardVariants} className="h-full">
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        {/* ====== FRASE INSPIRACIONAL ====== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-[#1a1a1a]/70 backdrop-blur-sm border border-white/30 rounded-3xl p-12 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic mb-4 leading-relaxed max-w-2xl mx-auto">
              “No te rindas aunque caigas o estés perdiendo,
              <br className="hidden sm:block" />
              nunca te rindas, supera tus límites y te abrirás camino.”
            </p>
            {/* Línea inferior con brillo blanco estilo neón */}
            <div className="w-16 h-1 bg-white mx-auto mt-6 rounded-full drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}






