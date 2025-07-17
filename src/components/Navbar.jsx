import { useState } from "react";
import { Menu, X } from "lucide-react"; // o Heroicons si prefieres

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio"); // ← aquí guardamos el link activo

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["About", "Services", "Contact"];

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

    // Espera un poco para que el menú cierre visualmente
    setTimeout(() => {
        const sectionId = link.toLowerCase().replace(/\s/g, "-");
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 300); // 300 ms suele bastar. Ajusta según tu animación.
};



  return (
    <nav className="bg-red-700 bg-opacity-80 backdrop-blur-sm p-2 sm:py-12 sm:px-32 z-50 fixed top-0 left-0 w-full h-20 shadow flex items-center justify-end">
      {/* Desktop */}
      <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => handleClick(link)}
            className={`cursor-pointer hover:text-red-300 ${activeLink === link ? "text-red-300 underline underline-offset-4" : ""
              }`}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center w-full">
        <h3 className="text-white font-bold">MENU</h3>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-white text-base w-full">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => handleClick(link)}
              className={`cursor-pointer hover:text-red-300 ${activeLink === link ? "text-red-200 underline underline-offset-4" : ""
                }`}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
