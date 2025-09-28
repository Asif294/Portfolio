import { forwardRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 p-10 text-white"
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-4 text-center">
        <span className="text-yellow-400">Get In Touch</span>
      </h2>
      <p className="mb-12 text-gray-400 text-lg text-center max-w-2xl">
        Let’s connect and build something amazing together. You can reach out via Email, 
        WhatsApp, LinkedIn, or check my work on GitHub.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Email */}
        <a
          href="mailto:asifurrahman677294@gmail.com"
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-400 hover:scale-105 transition transform shadow-lg"
        >
          <FaEnvelope className="text-4xl text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400 text-center break-words">
            asifurrahman677294@gmail.com
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801885430525"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-green-400 hover:scale-105 transition transform shadow-lg"
        >
          <FaWhatsapp className="text-4xl text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-400">+880 1885-430525</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Asif294"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-400 hover:scale-105 transition transform shadow-lg"
        >
          <FaGithub className="text-4xl text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <p className="text-gray-400">github.com/Asif294</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/asifur-rahman-435b2a200/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-400 hover:scale-105 transition transform shadow-lg"
        >
          <FaLinkedin className="text-4xl text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <p className="text-gray-400">linkedin.com/in/asif294</p>
        </a>
      </div>
    </section>
  );
});

export default Contact;
