// src/pages/Home.jsx   (o donde tengas Home.jsx)
import React from "react";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import SobreMi from "../sections/SobreMi";
import Typewriter from "../components/Typewriter";
import EnterGate from "../components/EnterGate";   
import fondo from "../recursos/fondo.mp4";
import homeImg from "../recursos/Home.jpg";
import musica from "../recursos/songHome.mp3";  
    

export default function Home() {
  return (
    <div id="home">
      {/* ───────────── Pantalla inicial "Click to enter" ───────────── */}
      <EnterGate audioFile={musica} />

      {/* ───────────── Hero / Intro con video de fondo ───────────── */} 
      <section
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
        id="home-hero"
      >
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={fondo} type="video/mp4" />
        </video>

        {/* Contenido encima del video */}
        <div className="relative z-10 text-white text-left max-w-3xl px-6 sm:px-12 py-24 translate-x-20 translate-y-20">
          
          {/* Imagen circular */}
          <div className="relative mb-6">
            <img
              src={homeImg}
              alt="Foto de Edmundo"
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover 
                        border-4 border-white shadow-lg 
                        absolute left-1/2 -translate-x-1/2 glow-random
                        transform transition-transform duration-300 hover:-translate-y-1"
              style={{ top: "-200px", '--random-delay': Math.random() * 3 }}
            />
          </div>

          {/* Texto */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 mt-20">
            Holas, soy Edmundo 
          </h1>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            Y me encargo de <Typewriter />
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-xl">
            “Que me subestimen, eso siempre hace la victoria más divertida. No lucho por reconocimiento, 
            lo hago por una promesa… y no pienso detenerme hasta cumplirla.”
          </p>
        </div>
      </section>

      {/* ───────────── Sección “Sobre mí” ───────────── */}
      <SobreMi />

      {/* ───────────── Sección de Proyectos ───────────── */}
      <section id="projects" className="py-16 text-white" style={{ backgroundColor: '#0f0f0e' }}>
        <div className="container mx-auto px-4">
          <ProjectsSection />
        </div>
      </section>

      {/* ───────────── Sección de Contacto ───────────── */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}








