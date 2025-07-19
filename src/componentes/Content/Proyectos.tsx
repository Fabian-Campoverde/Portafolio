import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Sistema de Gestión de Predios",
      descripcion:
        "Plataforma para la administración de contribuyentes, construcciones y predios. Optimización de procesos municipales.",
      tecnologias: ["Laravel", "MySQL", "TailwindCSS"],
      demo: "#", // Puedes poner el enlace real a una demo o video
      codigo: "https://github.com/tu-usuario/sistema-gestion",
    },
    {
      titulo: "E-commerce Dropshipping",
      descripcion:
        "Tienda en línea con catálogo dinámico, pasarelas de pago y sistema de dropshipping.",
      tecnologias: ["React", "Laravel", "TailwindCSS"],
      demo: "#",
      codigo: "https://github.com/tu-usuario/ecommerce-dropshipping",
    },
    {
      titulo: "Portafolio Personal",
      descripcion:
        "Portafolio profesional con diseño responsive y animaciones modernas para mostrar proyectos y experiencia.",
      tecnologias: ["React", "TailwindCSS"],
      demo: "#",
      codigo: "https://github.com/tu-usuario/portafolio",
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-24 md:pt-28 px-6 pb-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-10">
          Mis Proyectos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{proyecto.descripcion}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {proyecto.demo !== "#" && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg text-white text-sm hover:shadow-cyan-500/50 transition transform hover:scale-105"
                  >
                    <FaExternalLinkAlt /> Ver Demo
                  </a>
                )}
                <a
                  href={proyecto.codigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white text-gray-900 rounded-lg text-sm hover:bg-gray-200 transition transform hover:scale-105"
                >
                  <FaGithub /> Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}