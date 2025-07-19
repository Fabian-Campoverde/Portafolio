import {
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

export default function Acerca() {
  return (
    <section
      id="acerca"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-24 md:pt-28 px-6 pb-24"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ========================= 1. ACERCA DE MÍ ========================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
            Sobre mí
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Soy <span className="text-cyan-400 font-semibold">Ingeniero de Sistemas</span> con experiencia en{" "}
            <strong className="text-blue-400">desarrollo web</strong> y{" "}
            <strong className="text-blue-400">soluciones tecnológicas</strong>.  
            Apasionado por la <span className="text-cyan-400">innovación</span> y la{" "}
            <span className="text-cyan-400">optimización de procesos</span>, he trabajado en proyectos de{" "}
            <strong className="text-blue-400">e-commerce</strong>, sistemas de gestión y plataformas interactivas.
          </p>

          {/* Datos personales */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mt-6">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" /> Chiclayo, Perú
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" /> fabian.leo2911@gmail.com
            </p>
          </div>

          {/* Botones de contacto */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/fabian-campoverde"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg shadow-md hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/tu-github"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-200 transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:fabian.leo2911@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-200 transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* ========================= 2. EXPERIENCIA Y EDUCACIÓN ========================= */}
       <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-10">
            Experiencia & Educación
          </h3>
          <div className="relative border-l border-cyan-400 max-w-4xl mx-auto space-y-8 pl-6">
            {/* EXPERIENCIA */}
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-2 border-white"></div>
              <h4 className="text-lg font-semibold text-cyan-300">Desarrollador Web Freelance</h4>
              <p className="text-gray-400 text-sm">2023 - Actualidad</p>
              <p className="text-gray-300 text-sm mt-1">
                Desarrollo de sistemas e-commerce con Laravel y React, optimización de procesos en sistemas de gestión de predios.
              </p>
            </div>

            <div>
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-2 border-white"></div>
              <h4 className="text-lg font-semibold text-cyan-300">Proyecto Universitario - Sistema de Gestión</h4>
              <p className="text-gray-400 text-sm">2022</p>
              <p className="text-gray-300 text-sm mt-1">
                Creación de un sistema para la administración de predios, construcciones y contribuyentes usando Laravel y MySQL.
              </p>
            </div>

            {/* EDUCACIÓN */}
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-2 border-white"></div>
              <h4 className="text-lg font-semibold text-cyan-300">Ingeniería de Sistemas</h4>
              <p className="text-gray-400 text-sm">Universidad Señor de Sipán - 2019 a 2024</p>
              <p className="text-gray-300 text-sm mt-1">
                Formación en desarrollo de software, arquitectura de sistemas y seguridad informática.
              </p>
            </div>
          </div>
        </div>

        {/* ========================= 3. SKILLS CON ICONOS ========================= */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-10">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { name: "React", icon: <FaReact className="text-blue-400" /> },
              { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
              { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
              { name: "Django", icon: <SiDjango className="text-green-500" /> },
              { name: "MySQL", icon: <SiMysql className="text-yellow-400" /> },
              { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
              { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
              { name: "Python", icon: <FaPython className="text-green-400" /> },
              { name: "Bases de Datos", icon: <FaDatabase className="text-gray-400" /> },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-4 hover:scale-105 hover:border-cyan-400 transition cursor-default"
              >
                <div className="text-3xl">{skill.icon}</div>
                <span className="text-gray-300 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* BOTÓN DESCARGAR CV */}
          {/* <div className="flex justify-center gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg shadow-md hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaEye /> Ver CV
            </a>
            <a
              href="/cv.pdf"
              download="Fabian_Campoverde_CV.pdf"
              className="px-5 py-3 bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-200 transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaFileDownload /> Descargar CV
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}