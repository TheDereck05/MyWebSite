// src/sections/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram,FaKickstarterK } from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/xrbrgnag";

const socialLinks = [
  { label: "GitHub", url: "https://github.com/TheDereck05", icon: FaGithub },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/edmundo-fransua-nu%C3%B1ez-choque-4b6689383/", icon: FaLinkedin },
  { label: "Kick", url: "https://kick.com/niacun", icon: FaKickstarterK },
  { label: "Instagram", url: "https://www.instagram.com/nunezgeremy/", icon: FaInstagram },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  function validate() {
    if (!formData.name.trim()) return { ok: false, msg: "Ingresa tu nombre." };
    if (!formData.email.trim()) return { ok: false, msg: "Ingresa tu correo." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return { ok: false, msg: "Correo inválido." };
    if (!formData.message.trim()) return { ok: false, msg: "Escribe un mensaje." };
    return { ok: true };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setStatus({ loading: false, ok: false, msg: v.msg });
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("No se pudo enviar");

      setStatus({ loading: false, ok: true, msg: "Mensaje enviado. ¡Gracias!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: "Error al enviar. Intenta más tarde." });
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden font-sans text-white"
      style={{ backgroundColor: "#0f0f0e" }}
    >
      {/* Fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-7xl mb-6 font-bold"
            style={{ textShadow: "0 0 10px #ffffff, 0 0 20px #e0e0e0, 0 0 40px #ffffff" }}
          >
            Contacto
          </h2>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-8 rounded-full shadow-[0_0_15px_#fff]" />
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ textShadow: "0 0 6px rgba(255,255,255,0.5)" }}
          >
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-[#141414]/60 backdrop-blur-md border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl p-8 transition-all duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {["name", "email", "message"].map((field, i) => (
                <div key={i}>
                  <label
                    htmlFor={field}
                    className="block text-gray-200 mb-2 font-medium"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                  >
                    {field === "name" ? "Nombre" : field === "email" ? "Email" : "Mensaje"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-[#0f0f0e] border border-white/20 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field === "email" ? "example@gmail.com" : "Tu nombre"}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-[#0f0f0e] border border-white/20 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 bg-white/10 border border-white/40 rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2"
                disabled={status.loading}
              >
                <FiSend className="w-5 h-5" />
                {status.loading ? "Enviando..." : "Enviar Mensaje"}
              </motion.button>

              {status.ok === true && <p className="text-sm text-emerald-400 mt-2">{status.msg}</p>}
              {status.ok === false && <p className="text-sm text-rose-400 mt-2">{status.msg}</p>}
            </form>
          </motion.div>

          {/* Información y redes */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-[#141414]/60 backdrop-blur-md border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border border-white/40 rounded-xl flex items-center justify-center">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ textShadow: "0 0 8px #ffffff" }}>
                    Email
                  </h3>
                  <p className="text-gray-300">edmundo.nunez.fra@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-white/40 rounded-xl flex items-center justify-center">
                  <FiMapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ textShadow: "0 0 8px #ffffff" }}>
                    Ubicación
                  </h3>
                  <p className="text-gray-300">Disponible para trabajo remoto</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-[#141414]/60 backdrop-blur-md border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl p-8 transition-all duration-500">
              <h3
                className="text-2xl text-white mb-6 font-semibold"
                style={{ textShadow: "0 0 10px #ffffff" }}
              >
                Sígueme en:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ label, url, icon: Icon }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 bg-[#0f0f0e] border border-white/20 rounded-xl hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all"
                  >
                    <Icon className="w-6 h-6 text-white" />
                    <span className="text-gray-300">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Estado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#0f0f0e]/80 border border-white/30 rounded-2xl p-6 text-center shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-500"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400">Disponible para proyectos</span>
              </div>
              <p className="text-gray-400 text-sm">
                Actualmente aceptando nuevos proyectos freelance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}








