import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ handleHome, handleSkills, handleEducation, handleProjects, handleContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", action: handleHome },
    { label: "Skills", action: handleSkills },
    { label: "Projects", action: handleProjects },
    { label: "Education", action: handleEducation },
    { label: "Contact", action: handleContact },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* Logo */}
        <div 
          onClick={handleHome} 
          className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          Asifur Rahman
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={item.action}
              className="relative cursor-pointer text-gray-200 hover:text-yellow-400 transition duration-200 group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          <li>
            <a 
              href="/Asif.pdf" 
              download="Asif_Resume.pdf" 
              className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold 
                        hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div 
          className="md:hidden text-2xl cursor-pointer text-gray-200 z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 h-screen w-screen bg-gray-900/95 backdrop-blur-md flex flex-col 
                     justify-center items-center space-y-8 text-2xl font-semibold z-40 overflow-y-auto"
        >
          {menuItems.map((item, idx) => (
            <span
              key={idx}
              onClick={() => {
                item.action();
                setMenuOpen(false);
              }}
              className="text-gray-200 hover:text-yellow-400 transition duration-300"
            >
              {item.label}
            </span>
          ))}

          <a 
            href="/public/Asif.pdf" 
            download="Asif_Resume.pdf" 
            className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold 
                      hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
