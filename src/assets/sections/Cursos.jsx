// src/sections/Cursos.jsx
import React from "react";
import cursos from "../data/cursos";
import CourseCard from "../components/CourseCard";

export default function CursosSection() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-white">Cursos universitarios</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </>
  );
}
