import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-24 md:pt-28 px-6 pb-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-10">
          Contáctame
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-lg">
          <p className="text-gray-300 text-center mb-6">
            Si tienes algún proyecto, propuesta o simplemente quieres saludarme, 
            ¡no dudes en escribirme!
          </p>

          {/* Formulario */}
          <form
            action="https://formsubmit.co/fabian.leo2911@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            {/* Botón */}
            <button
              type="submit"
              className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg shadow-md hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Redes sociales */}
          <div className="mt-8 flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/fabian-campoverde"
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
      </div>
    </section>
  );
}