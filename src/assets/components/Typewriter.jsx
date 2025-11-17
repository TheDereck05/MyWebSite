// src/components/Typewriter.jsx
import React, { useState, useEffect, useRef } from "react";

export default function Typewriter({
  words = [
    "Jugar", "Programar", "Crear", "Aprender", "Investigar", "Diseñar",
    "Editar", "Estudiar", "Imaginar", "Escribir", "Resolver", "Desarrollar",
    "Mejorar", "Practicar", "Dibujar", "Experimentar", "Analizar",
    "Escuchar", "Pensar", "Construir", "Personalizar"
  ],
  typingSpeed = 130,
  deletingSpeed = 100,
  pause = 1400,
  randomOrder = true,
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(() => Math.floor(Math.random() * words.length));
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const pickNextIndex = (current) => {
    if (words.length <= 1) return current;
    let next = current;
    while (next === current) next = Math.floor(Math.random() * words.length);
    return next;
  };

  useEffect(() => {
    if (!mounted.current) return;
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        const nextIndex = pickNextIndex(wordIndex);
        timeout = setTimeout(() => {
          setWordIndex(nextIndex);
          setIsDeleting(false);
        }, Math.round(pause / 2));
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  const displayText = text === "" ? "\u00A0" : text;

  return (
    <span className="inline-flex items-end" aria-hidden="false">
      <span className="typewriter-text inline-block align-bottom" style={{ minHeight: "1em" }}>
        {displayText}
      </span>

      {/* NOTE: empty span — no "|" literal inside */}
      <span className="typewriter-cursor ml-2 inline-block" aria-hidden="true" />
    </span>
  );
}





