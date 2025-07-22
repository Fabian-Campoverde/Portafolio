import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Sistema de Gestión de Predios",
      descripcion:
        "Plataforma para la administración de contribuyentes, construcciones y predios. Optimización de procesos municipales.",
      tecnologias: ["Django", "SQLite", "TailwindCSS"],
      demo: "#",
      imagen: "https://opengraph.githubassets.com/1/Fabian-Campoverde/Predios",
      codigo: "https://github.com/Fabian-Campoverde/Predios",
    },
    {
      titulo: "TechnoStore Nexus: E-commerce Dropshipping",
      descripcion:
        "Tienda en línea con catálogo dinámico, pasarelas de pago y sistema de dropshipping.",
      tecnologias: ["Laravel", "TailwindCSS", "MySQL", "JavaScript", "Blade", "CSS"],
      demo: "#",
      imagen: "https://opengraph.githubassets.com/1/Fabian-Campoverde/TechnoStore",
      codigo: "https://github.com/Fabian-Campoverde/TechnoStore",
    },
    {
      titulo: "Sistema de Gestión de Productos Fiados",
      descripcion:
        "Aplicación para gestionar productos fiados, con registro de clientes y seguimiento de pagos.",
      tecnologias: ["Laravel", "TailwindCSS", "MySQL", "JavaScript", "Blade"],
      demo: "#",
      imagen: "https://opengraph.githubassets.com/1/Fabian-Campoverde/SistemaFiados",
      codigo: "https://github.com/Fabian-Campoverde/SistemaFiados",
    },
    {
      titulo: "Aplicación de Clasificación de Vegetales",
      descripcion:
        "Aplicación móvil para clasificar vegetales utilizando IA, con interfaz intuitiva y base de datos de especies.",
      tecnologias: ["Django", "TailwindCSS", "SQLite", "JavaScript", "Python", "TensorFlow", "OpenCV"],
      demo: "#",
      imagen: "https://opengraph.githubassets.com/1/Fabian-Campoverde/Clasification-Vegetables-Mobile",
      codigo: "https://github.com/Fabian-Campoverde/Clasification-Vegetables-Mobile",
    },
    {
      titulo: "Sistema de Gestión de Almacén y Ventas",
      descripcion:
        "Sistema para gestionar inventario, ventas y clientes, con reportes y estadísticas.",
      tecnologias: ["Laravel", "TailwindCSS", "MySQL", "JavaScript", "Blade"],
      demo: "#",
      imagen: "https://opengraph.githubassets.com/1/Fabian-Campoverde/AlmacenLaravel",
      codigo: "https://github.com/Fabian-Campoverde/AlmacenLaravel",
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
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:scale-105 flex flex-col"
        >
          {/* Imagen del proyecto */}
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <h3 className="absolute bottom-3 left-3 text-lg font-bold text-cyan-300">
              {proyecto.titulo}
            </h3>
          </div>

          {/* Contenido */}
          <div className="p-4 flex flex-col justify-between flex-grow">
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

            {/* Botones */}
            <div className="flex gap-3 mt-auto">
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
        </div>
      ))}
    </div>
  </div>
</section>
  );
}