// src/components/EnterGate.jsx
import React, { useState } from "react";

export default function EnterGate() {
  const [entered, setEntered] = useState(false);
  const [visible, setVisible] = useState(true);

  const tryPlayGlobalAudio = async () => {
    const maxRetries = 6;
    const delay = 200; // ms
    for (let i = 0; i < maxRetries; i++) {
      const audio = document.getElementById("site-audio");
      if (audio) {
        try {
          audio.volume = 0.5; // <-- fuerza inicio a 50%
          await audio.play();
        } catch (err) {
          // ignorar
        }
        return;
      }
      await new Promise((r) => setTimeout(r, delay));
    }
  };

  const handleEnter = async (e) => {
    e.stopPropagation();
    await tryPlayGlobalAudio();
    setEntered(true);
    setTimeout(() => setVisible(false), 700);
  };

  if (!visible) return null;

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.92)",
    backdropFilter: "blur(6px)",
    zIndex: 9999999,   // ⬅⬅⬅ aumentar z-index
    cursor: "pointer",
    transition: "opacity 0.7s ease",
    opacity: entered ? 0 : 1,
    pointerEvents: entered ? "none" : "auto",
  };
  const textStyle = {
    color: "#fff",
    fontSize: "28px",
    fontWeight: 700,
    textShadow: "0 0 12px rgba(255,255,255,0.8)",
    userSelect: "none",
  };

  return (
    <div role="button" aria-label="Click to enter" onClick={handleEnter} style={overlayStyle}>
      <div style={textStyle}>click to enter...</div>
    </div>
  );
}

