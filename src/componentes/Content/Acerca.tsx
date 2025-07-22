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
  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiPhp,
} from "react-icons/si";
import { MdWork, MdGroups, MdSchool } from "react-icons/md";
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
            Acerca de mí
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Soy{" "}
            <span className="text-cyan-400 font-semibold">
              Ingeniero de Sistemas{" "}
            </span>
            especializado en{" "}
            <strong className="text-blue-400">desarrollo web</strong> y{" "}
            <strong className="text-blue-400">
              soluciones tecnológicas escalables
            </strong>
            . Apasionado por la{" "}
            <span className="text-cyan-400">innovación</span> y la{" "}
            <span className="text-cyan-400">optimización de procesos</span>, me
            enfoco en crear plataformas{" "}
            <strong className="text-blue-400">
              rápidas, seguras y orientadas a la experiencia del usuario
            </strong>
            . He participado en proyectos de{" "}
            <strong className="text-blue-400">e-commerce</strong>, sistemas de{" "}
            <span className="text-cyan-400">gestión administrativa</span> y
            aplicaciones interactivas, aplicando metodologías ágiles y
            <span className="text-cyan-400">
              {" "}
              buenas prácticas de desarrollo
            </span>
            .
          </p>

          
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mt-6">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" /> Chiclayo, Perú
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" /> fabian.leo2911@gmail.com
            </p>
          </div>

          
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
              href="ttps://github.com/Fabian-Campoverde"
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

        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Texto lateral */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-cyan-400 uppercase tracking-loose">
              Mi Trayectoria
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Experiencia y Educación
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Un resumen de mi formación académica y experiencia profesional en
              desarrollo web y tecnología.
            </p>
          </div>

          {/* Timeline */}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Líneas centrales */}
                <div
                  className="absolute h-full"
                  style={{
                    right: "50%",
                    border: "2px solid #2750d4ff",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="absolute h-full"
                  style={{
                    left: "50%",
                    border: "2px solid #2750d4ff",
                    borderRadius: "1%",
                  }}
                ></div>

                
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-cyan-400">2019 - 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Universidad Nacional Pedro Ruiz Gallo
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-300">
                      Egresado de la Carrera de{" "}
                      <span className="text-cyan-300">
                        Ingeniería de Sistemas
                      </span>
                      . <br></br>
                      Formación orientada al desarrollo de{" "}
                      <span className="text-cyan-300">software</span>,
                      <span className="text-cyan-300"> redes</span> y soluciones
                      tecnológicas escalables.
                    </p>
                  </div>
                </div>

                
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-2 text-base text-cyan-400">
                      Octubre 2023 – Febrero 2024
                    </p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">
                      F5 Solutions – Practicante en TI
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      Lambayeque, Perú
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm md:text-base leading-snug text-gray-300">
                      <li>
                        Desarrollo de un{" "}
                        <span className="text-cyan-300">
                          sistema de ventas en Laravel
                        </span>
                        , integrando productos, clientes y medios de pago.
                      </li>
                      <li>
                        Complementación de un{" "}
                        <span className="text-cyan-300">
                          sistema de gestión de predios en Django
                        </span>
                        , automatizando el registro de contribuyentes y
                        propiedades.
                      </li>
                      <li>
                        Creación de{" "}
                        <span className="text-cyan-300">
                          interfaces responsivas
                        </span>{" "}
                        con
                        <span className="text-cyan-300"> TailwindCSS</span>,
                        Bootstrap y AdminLTE, mejorando la usabilidad.
                      </li>
                      <li>
                        Automatización de envío de correos en Django con{" "}
                        <span className="text-cyan-300">plantillas HTML</span>,
                        notificando a más de 200 usuarios de forma inmediata.
                      </li>
                    </ul>
                  </div>
                </div>

              
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-2 text-base text-cyan-400">
                      Agosto 2024 – Septiembre 2024
                    </p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">
                      Proyecto Académico – TechnoStore Nexus
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      Lambayeque, Perú – Desarrollador Full Stack
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm md:text-base leading-snug text-gray-300">
                      <li>
                        Desarrollo de una{" "}
                        <span className="text-cyan-300">
                          plataforma de e-commerce en Laravel
                        </span>
                        con más de 500 productos tecnológicos.
                      </li>
                      <li>
                        Implementación de un{" "}
                        <span className="text-cyan-300">
                          sistema de gestión de inventario
                        </span>
                        con actualización automática, reduciendo errores en el
                        stock.
                      </li>
                      <li>
                        Creación de un{" "}
                        <span className="text-cyan-300">
                          sistema de categorización dinámica
                        </span>
                        con más de 20 categorías para mejorar la búsqueda de
                        productos.
                      </li>
                      <li>
                        Optimización de la interfaz con{" "}
                        <span className="text-cyan-300">TailwindCSS</span>,
                        Bootstrap y Blade, logrando un diseño responsive y
                        atractivo.
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-cyan-400">
                      2024 - Actualmente
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                      Desarrollador Full Stack Freelance
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-300">
                      Desarrollo de sitios web y aplicaciones con{" "}
                      <span className="text-cyan-300">
                        React, Laravel, Django
                      </span>{" "}
                      y <span className="text-cyan-300">TailwindCSS</span>.
                      Creación de soluciones tecnológicas personalizadas para
                      clientes.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="mx-auto -mt-24 md:-mt-24 "
                src="https://donstudio.com/wp-content/uploads/2025/02/12185933_programmer_figuring_code_developer_programming_icon.png"
                alt="Process illustration"
              />
            </div>
          </div>
        </div>

        {/* ========================= 3. SKILLS ========================= */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-10">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { name: "React", icon: <FaReact className="text-blue-400" /> },
              { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
              { name: "Django", icon: <SiDjango className="text-green-500" /> },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss className="text-cyan-400" />,
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-300" />,
              },
              { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
              { name: "Python", icon: <FaPython className="text-green-400" /> },
              { name: "MySQL", icon: <SiMysql className="text-yellow-400" /> },
              {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-blue-500" />,
              },
              {
                name: "Bases de Datos",
                icon: <FaDatabase className="text-gray-400" />,
              },
              {
                name: "Git & GitHub",
                icon: <FaGitAlt className="text-orange-500" />,
              },
              {
                name: "Microsoft Office",
                icon: <MdWork className="text-blue-400" />,
              },
              {
                name: "Trabajo en Equipo",
                icon: <MdGroups className="text-cyan-400" />,
              },
              {
                name: "Aprendizaje Rápido",
                icon: <MdSchool className="text-green-400" />,
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-4 hover:scale-105 hover:border-cyan-400 transition cursor-default"
              >
                <div className="text-3xl">{skill.icon}</div>
                <span className="text-gray-300 text-sm text-center">
                  {skill.name}
                </span>
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
