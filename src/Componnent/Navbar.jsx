import { useState, useEffect } from "react";

export default function Navbar({ handleHome, handleSkills,handleEducation, handleProjects, handleContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-gray-900 text-white shadow-md transition-all duration-300 
                  ${scrolled ? "py-2" : "py-4"}`}
    >
      <ul className="flex flex-wrap justify-center md:justify-center space-x-6 cursor-pointer">
        <li onClick={handleHome} className="font-semibold text-gray-200 hover:text-yellow-400 transition">
          Home
        </li>
        <li onClick={handleSkills} className="font-semibold text-gray-200 hover:text-yellow-400 transition">
          Skills
        </li>
        <li onClick={handleProjects} className="font-semibold text-gray-200 hover:text-yellow-400 transition">
          Projects
        </li>
        <li onClick={handleEducation} className="font-semibold text-gray-200 hover:text-yellow-400 transition">
          Education
        </li>
        <li onClick={handleContact} className="font-semibold text-gray-200 hover:text-yellow-400 transition">
          Contact
        </li>
        <li>
          <a 
            href="/resume.pdf" 
            download="Asif_Resume.pdf" 
            className="font-semibold px-4 py-1 border border-yellow-400 rounded-md text-yellow-400 
                       hover:bg-yellow-400 hover:text-black transition duration-200"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
