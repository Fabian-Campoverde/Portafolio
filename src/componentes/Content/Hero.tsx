import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-start items-center text-center 
             bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white 
             pt-24 md:pt-28"
    >
      {/* Burbujas animadas en el fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400 to-green-400 opacity-30 rounded-full blur-3xl bottom-20 right-20 animate-ping"></div>
        <div className="absolute w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl top-1/3 left-1/2"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
        <img
          src="/foto.jpg"
          alt="Fabian Campoverde"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-lg mb-4 object-cover"
        />
        
        <h2
          className="text-4xl md:text-6xl font-extrabold font-poppins text-transparent bg-clip-text 
                 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 leading-tight tracking-wide"
        >
          Fabian Campoverde
        </h2>

        <p className="text-lg md:text-xl font-sans text-gray-300 leading-relaxed">
          Ingeniero de Sistemas especializado en{" "}
          <span className="text-blue-400 font-semibold">desarrollo web</span> y{" "}
          <span className="text-cyan-400 font-semibold">
            soluciones tecnológicas
          </span>
          . Comprometido con{" "}
          <span className="text-green-400 font-semibold">
            crear experiencias digitales innovadoras
          </span>
          .
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/proyectos"
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

        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/fabian-campoverde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-125"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Fabian-Campoverde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-125"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:fabian.leo2911@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition transform hover:scale-125"
            title="Enviar Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center gap-6 text-gray-400 text-sm z-10">
        {["React", "Laravel", "TailwindCSS", "Django", "Python"].map((tech) => (
          <span
            key={tech}
            className="hover:text-cyan-400 transition hover:scale-105 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
