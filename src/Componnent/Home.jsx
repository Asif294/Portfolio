import { useRef } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

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

      <section ref={homeRef} className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-bold">Hi, I’m Asifur Rahman👋</h1>
        <p className="mt-4 text-xl">A passionate Developer | Python & Django Enthusiast</p>
      </section>

      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
