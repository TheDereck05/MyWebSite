// src/sections/SobreMi.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaBookOpen,
  FaGamepad,
  FaReact,
  FaGraduationCap,
  FaMountain,
} from "react-icons/fa";

/* ============================================================
  Datos embebidos (autocontenido — no importar nada externo)
  ============================================================ */

/* --- Cursos (ejemplo) --- */
const cursosData = [
  {
    id: "c-01",
    title: "Estructuras Discretas II",
    institution: "Universidad Católica San Pablo",
    term: "Diaz Basurco Luis Fernando",
    short: "Fundamentos de la matemática discreta para la programación",
    detailUrl: "https://www.linkedin.com/in/luis-fernando-d%C3%ADaz-basurco-48098333/",
  },
  {
    id: "c-02",
    title: "ICC",
    institution: "Universidad Católica San Pablo",
    term: "Ernesto Cuadros Vargas",
    short: "Curso base para el pensamiento computacional",
    detailUrl: "https://www.linkedin.com/in/ecuadrosv/",
  },
  {
    id: "c-03",
    title: "Ciencia de la Computación I ",
    institution: "Universidad Católica San Pablo",
    term: "Mamani Aliaga Alvaro Henry",
    short: "c++ para resolución de problemas y mejora del pensamiento computacional.",
    detailUrl: "https://github.com/ahmamani",
  },
  {
    id: "c-04",
    title: "Matemática II",
    institution: "Universidad Católica San Pablo",
    term: "Vera Nina Claudio Francisco",
    short: "Matematica aplicada para resolucion de problemas.",
    detailUrl: "https://www.google.com/search?q=matematica&oq=matematica&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEIMTM3MWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    id: "c-05",
    title: "Apreciación Artística",
    institution: "Universidad Católica San Pablo",
    term: "Garcia Velarde Paredes Patricio Gonzalo",
    short: "Pensarmineto Artistico para la vida diaria.",
    detailUrl: "https://www.google.com/search?q=arte&oq=arte&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGEEyBggDEEUYQTIGCAQQRRhBMgYIBRBFGEEyBggGEEUYQTIGCAcQLhhA0gEHNjA4ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8",
  },
  {
    id: "c-06",
    title: "Introducción a la Filosofía",
    institution: "Universidad Católica San Pablo",
    term: "Lancunza Murillo Fernando Alberto",
    short: "Pensamiento Filosofico frente a la vida diaria.",
    detailUrl: "https://www.linkedin.com/in/fernando-alberto-lacunza-murillo-604580220/",
  },

];

/* --- Amistades (ejemplo) --- */
/* Nota: puedes añadir `detailUrl` a cualquier compañero para que aparezca el botón "Ver página". */
const amigosData = [
  {
    id: "a-01",
    nombre: "Ariana Emily Valencia Patiño ",
    descripcion: "Compañera de la escuela profesional Administracion de Negocios en la UCSP.",
    detailUrl: "https://arivalencia2025.github.io/Ariana_Emily_Valencia.github.io/"
  },
  {
    id: "a-02",
    nombre: "Roald Macedo Boza",
    descripcion: "Compañero que pertence a la escuela profesional Ciencia de la Computación.",
    detailUrl: "https://roaldmacedo-boza.github.io/roaldmacedo.github.io/"
  },
    {
    id: "a-03",
    nombre: "Flavia Micaela Díaz Zevallos",
    descripcion: "Compañera de la escuela profesional Administracion de Negocios en la UCSP.",
    detailUrl: "https://flaviamicaeladiazzevallos1.github.io/"
  },
];

/* --- Intereses / tarjetas de SobreMi --- */
const interests = [
  { title: "Precisión", description: "Me gusta pulir cada detalle hasta que quede bien.", icon: FaCogs },
  { title: "Aprendizaje constante", description: "Cada proyecto me deja una lección distinta.", icon: FaBookOpen },
  { title: "Juegos & diversión", description: "Creo que la mejor forma de aprender es jugando.", icon: FaGamepad },
  { title: "Resiliencia", description: "No importa el obstáculo, busco la manera de que todo fluya.", icon: FaMountain },
  { title: "Desarrollo Web", description: "Construyo interfaces limpias y responsivas usando React y Tailwind.", icon: FaReact },
  { title: "Entusiasta del aprendizaje", description: "Me motiva la curiosidad por nuevas tecnologías.", icon: FaGraduationCap },
];

/* ============================================================
  Hooks & variants (comunes)
  ============================================================ */

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { root: null, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const cursosContainerVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

/* ============================================================
  Componentes secundarios (autocontenidos)
  ============================================================ */

/* Tarjeta de curso — reutiliza cardVariants */
function CourseCardInline({ course }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      className="bg-[#1a1a1a]/70 border border-white/30 rounded-2xl p-5 flex flex-col h-full"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-white">{course.title}</h3>
        <div className="text-sm text-gray-400">
          {course.institution} • <span className="text-gray-300">{course.term}</span>
        </div>
      </div>

      <p className="text-sm text-gray-300 flex-1 leading-relaxed">{course.short}</p>

      <div className="mt-4">
        <button
          onClick={() => course.detailUrl && window.open(course.detailUrl, "_blank", "noopener,noreferrer")}
          className="inline-block px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
        >
          Más info
        </button>
      </div>
    </motion.article>
  );
}

/* Sección: Cursos (usa stagger igual que intereses) */
function CursosSectionInline() {
  return (
    <motion.section
      id="cursos-section-inline"
      className="py-12 px-4"
      style={{ backgroundColor: "#0f0f0e" }}
      variants={cursosContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Cursos universitarios</h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursosData.map((c) => (
            <motion.div key={c.id} variants={cardVariants}>
              <CourseCardInline course={c} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* Sección: Compañeros (antes Amistades) — ahora con botón Ver página si existe detailUrl */
function CompanerosSectionInline() {
  return (
    <motion.section
      id="companeros-section-inline"
      className="py-12 px-4"
      style={{ backgroundColor: "#0f0f0e" }}
      variants={cursosContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Compañeros</h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amigosData.map((a) => (
            <motion.article key={a.id} variants={cardVariants} className="bg-[#1a1a1a]/70 border border-white/30 rounded-2xl p-5 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{a.nombre}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{a.descripcion}</p>

              {/* botón Ver página solo si existe detailUrl */}
              {a.detailUrl && (
                <div className="mt-4">
                  <button
                    onClick={() => a.detailUrl && window.open(a.detailUrl, "_blank", "noopener,noreferrer")}
                    className="inline-block px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
                  >
                    Ver página
                  </button>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
  Componente principal: SobreMi (Apartado Sobre mí / Universidad y Amistades)
  ============================================================ */

export default function SobreMi() {
  const containerRef = useRef(null);
  const visible = useOnScreen(containerRef, "-10%");
  const [showSections, setShowSections] = useState(false);
  const sectionsRef = useRef(null);

  useEffect(() => {
    if (showSections && sectionsRef.current) {
      setTimeout(() => {
        sectionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220);
    }
  }, [showSections]);

  return (
    <>
      {/* ===================== APARTADO: SOBRE MÍ ===================== */}
      <section id="about" className="py-20" style={{ backgroundColor: "#0f0f0e" }} ref={containerRef}>
        <div className="container mx-auto px-4 text-center">
          {/* TÍTULO */}
          <motion.div className="mb-10" variants={containerVariants} initial="hidden" animate={visible ? "visible" : "hidden"}>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block">
              Sobre mí
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
          </motion.div>

          {/* DESCRIPCIÓN */}
          <motion.div className="max-w-3xl mx-auto mb-6" variants={containerVariants} initial="hidden" animate={visible ? "visible" : "hidden"}>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              Soy un tipo random al que le encanta programar. ¿Tienes una idea?
              Déjame apoyarte con mis conocimientos. Poco a poco construyo mi camino,
              y aunque intento ser streamer, eso lo dejamos para otro momento.
            </p>
          </motion.div>

          {/* TARJETAS DE INTERESES (staggered) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2"
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } } }}
          >
            {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="cursor-pointer"
                role="button"
              >
                <div className="bg-[#1a1a1a]/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 h-full transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f0e] flex items-center justify-center mb-4 border border-white/50 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2 font-semibold drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm flex-1">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
          </motion.div>

          {/* BOTÓN para mostrar/ocultar: Universidad y Compañeros */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowSections((prev) => !prev)}
              className="group inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#1a1a1a]/60 border border-white/30 hover:border-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0f0f0e] flex items-center justify-center border border-white/40 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                <FaBookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">{showSections ? "Ocultar secciones" : "Universidad y compañeros"}</div>
                <div className="text-gray-300 text-sm">{showSections ? "Haz click para ocultarlas." : "Haz click para ver mis cursos y compañeros."}</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== APARTADO: UNIVERSIDAD Y AMISTADES/COMPAÑEROS ===================== */}
      <AnimatePresence mode="wait">
        {showSections && (
          <motion.div
            ref={sectionsRef}
            key="sections"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.35, ease: "easeInOut" } }}
            layout
          >
            {/* Bloque CURSOS */}
            <CursosSectionInline />

            {/* Bloque COMPAÑEROS (antes Amistades) */}
            <CompanerosSectionInline />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}







