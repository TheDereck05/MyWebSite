// src/components/MusicPlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ audioSrc, className = "" }) {
  const audioRef = useRef(null);

  const [volume, setVolume] = useState(0.5); 
  const [previousVolume, setPreviousVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  // Mantener actualizado el estado del audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted || volume === 0;
  }, [volume, isMuted]);

  // Control del slider
  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);

    if (newVolume > 0) {
      setIsMuted(false);
      setPreviousVolume(newVolume);
    } else {
      setIsMuted(true);
    }
  };

  // Mute / Unmute
  const toggleMute = () => {
    if (!isMuted && volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    } else {
      setVolume(previousVolume || 0.5);
      setIsMuted(false);
    }
  };

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
      style={{
        paddingRight: "50px", // <-- AQUI SE EXPANDE LA ZONA DE HOVER
        zIndex: 9999,
      }}
    >
      {/* Botón del icono */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        className="p-3 bg-black/40 backdrop-blur-sm rounded-full shadow-lg hover:bg-black/60 transition"
        title={isMuted ? "Activar sonido" : "Silenciar"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isMuted || volume === 0 ? (
          <VolumeX size={26} className="text-white" />
        ) : (
          <Volume2 size={26} className="text-white" />
        )}
      </button>

      {/* Slider asegurado dentro del área hover */}
      <div
        style={{
          position: "absolute",
          left: "48px",              // aparece al lado del icono
          bottom: "50%",
          transform: "translateY(50%)",
          opacity: showSlider ? 1 : 0,
          transition: "opacity 180ms ease",
          pointerEvents: showSlider ? "auto" : "none",
        }}
      >
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-28 cursor-pointer accent-white"
        />
      </div>

      {/* Audio oculto */}
      <audio
        id="site-audio"
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        loop
        style={{ display: "none" }}
      />
    </div>
  );
}



