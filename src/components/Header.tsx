import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-6">
          <img
            src="/courtney_avatar.png"
            alt="Orion Sterling"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-400/30 transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:ring-cyan-400/50"
          />
          <a
            href="#"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 animate-pulse"
          >
            OrionSterling
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-y-1"
              >
                {link.name}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-white text-3xl focus:outline-none transform transition-transform duration-500 ${
            isOpen ? "rotate-90 scale-110" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800/90 backdrop-blur-sm text-white overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {links.map((link, idx) => (
            <li
              key={link.name}
              className={`transform transition-transform duration-500 delay-[${idx * 50}ms] ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <a
                href={link.href}
                className="block py-2 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
