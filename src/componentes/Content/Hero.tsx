import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "Soy Ingeniero de Sistemas especializado en Desarrollo Web y Soluciones Tecnológicas.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden 
                 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white 
                 pt-24 md:pt-28"
    >
      {/* Burbujas animadas en el fondo */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400 to-green-400 opacity-30 rounded-full blur-3xl bottom-20 right-20 animate-ping"></div>
        <div className="absolute w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl top-1/3 left-1/2 animate-bounce"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
          Fabian Campoverde
        </h2>

        <p className="text-lg md:text-xl font-mono text-cyan-300 min-h-[60px]">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Botones principales */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg shadow-lg 
                       hover:shadow-cyan-500/50 transition transform hover:scale-105 hover:brightness-110"
          >
            Ver Proyectos
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow-md 
                       hover:bg-gray-200 transition transform hover:scale-105"
          >
            Descargar CV
          </a>
        </div>

        {/* Botones sociales */}
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/tu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-125"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tu-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-125"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:tucorreo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition transform hover:scale-125"
            title="Enviar Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Tecnologías (parte inferior) */}
      <div className="absolute bottom-5 w-full flex justify-center gap-6 text-gray-400 text-sm z-10">
        <span className="hover:text-cyan-400 transition">React</span>
        <span className="hover:text-cyan-400 transition">Laravel</span>
        <span className="hover:text-cyan-400 transition">TailwindCSS</span>
        <span className="hover:text-cyan-400 transition">Django</span>
      </div>
    </section>
  );
}