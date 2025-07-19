import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  // Definimos las rutas y su relación con los links
  const links = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de mí", path: "/acerca" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center items-center gap-6 md:gap-8 font-semibold text-sm md:text-base lg:text-lg tracking-wide">
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className={`transition-colors duration-300 font-sans ${
                  location.pathname === link.path
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};