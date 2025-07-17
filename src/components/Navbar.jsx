import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");

  const links = ["About", "Services", "Contact"];

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    setTimeout(() => {
      const sectionId = link.toLowerCase().replace(/\s/g, "-");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Navbar container */}
      <nav className="bg-red-700 bg-opacity-80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow">
        <div className="flex items-center justify-between px-6 sm:px-32 h-20">
          <h1 className="text-white font-bold text-xl">LOGO</h1>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => handleClick(link)}
                className={`cursor-pointer hover:text-red-300 ${
                  activeLink === link ? "text-red-300 underline underline-offset-4" : ""
                }`}
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden bg-red-800 bg-opacity-95 backdrop-blur fixed top-20 left-0 w-full z-40 px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-2 text-white text-lg font-medium">
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => handleClick(link)}
                className={`cursor-pointer hover:text-red-300 ${
                  activeLink === link ? "text-red-200 underline underline-offset-4" : ""
                }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
