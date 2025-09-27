import { useRef } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
// React Icons
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        handleHome={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleAbout={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleProjects={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleSkills={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="h-screen flex flex-col justify-center items-center 
                   bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left md:pl-16"> 
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-yellow-400">Asifur Rahman</span> 👋
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-300">
              Django | DRF | React | Tailwind
            </h3>
            <p className="mt-4 text-lg max-w-md text-gray-400">
              A passionate Backend Developer, Python & Django enthusiast who loves to
              solve problems and build scalable web applications.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
              <a href="https://codeforces.com/profile/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <SiCodeforces />
              </a>
              <a href="https://leetcode.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <SiLeetcode />
              </a>
              <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <FaLinkedin />
              </a>
              <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <FaGithub />
              </a>
              <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <FaWhatsapp />
              </a>
              <a href="mailto:your_email@gmail.com" className="hover:text-yellow-400">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <img
              src="/profile.jpeg"
              alt="Asifur Rahman"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
