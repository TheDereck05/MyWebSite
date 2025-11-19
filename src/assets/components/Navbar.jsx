// src/components/Navbar.jsx
import React from "react";
import MusicPlayer from "./MusicPlayer";
import musica from "../recursos/songHome.mp3";

const links = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar({ overlayVisible }) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-white/90 transition duration-300 transform hover:-translate-y-1"
          >
            TheDereck05
          </a>

          <div className="hidden sm:flex gap-8 text-base items-center">
            {links.map((link) => {
              if (link.name === "Contacto") {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-black font-medium px-4 py-2 rounded-lg bg-white shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-shadow duration-300 flex items-center justify-center transform hover:-translate-y-1"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-medium hover:text-white/90 transition duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transform hover:-translate-y-1"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MusicPlayer abajo a la izquierda  */}
      <div
        className={`fixed bottom-4 left-4 z-[99999] ${
          overlayVisible ? "pointer-events-none" : ""
        }`}
      >
        <MusicPlayer audioSrc={musica} showPlayButton={false} />
      </div>
    </>
  );
}














