import { useRef } from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
// import Experience from "./Experience";


// React Icons
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";


const Home = () => {
  const homeRef = useRef(null);
  
  const skillsRef = useRef(null);
  // const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);

  const contactRef = useRef(null);
  const footerRef = useRef(null);
  

  return (
    <div>
      <Navbar
        handleHome={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleSkills={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}
        // handleExperience={() => experienceRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleProjects={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
        handleEducation={() => educationRef.current?.scrollIntoView({ behavior: "smooth" })}
        
        handleContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
        
      />

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="h-screen flex flex-col justify-center items-center 
       bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white
       pt-24 md:pt-30"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left md:pl-16">
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-yellow-400">Asifur Rahman</span> 👋
            </h1>
            <h3 className="text-2xl md:text-2xl font-semibold mt-4 text-gray-300">
              Django | DRF | React | Tailwind
            </h3>
            <p className="mt-4 font-samibold text-lg max-w-md text-gray-300">
              A passionate Backend Developer, Python & Django enthusiast who loves to
              solve problems and build scalable web applications.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-2.5 md:justify-start space-x-6 mt-8 text-3xl text-gray-300">
              <a
                href="https://codeforces.com/profile/asifur_rahman677"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <SiCodeforces />
              </a>
              <a
                href="https://leetcode.com/u/Asif294/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.linkedin.com/in/asifur-rahman-435b2a200/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Asif294"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/8801885430525"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:asifurrahman677294@gmail.com"
                className="hover:text-yellow-400"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center md:justify-start mt-8">
              <a
                href="/resume.pdf" // এখানে তোমার CV এর path দাও (e.g. public/resume.pdf)
                download="Asif_Resume.pdf" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-md 
                           shadow-md hover:bg-yellow-500 transition duration-300"
              >
                📄 Resume
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
      
      
      <Skills ref={skillsRef} />
      {/* <Experience ref={experienceRef} /> */}
      <Projects ref={projectsRef} />
      <Education ref={educationRef}/>
      <Contact ref={contactRef} />
      <Footer ref={footerRef}/>
    </div>
  );
};

export default Home;
