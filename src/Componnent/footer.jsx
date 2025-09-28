import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-300 pt-12 pb-6 mt-">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Brand */}
        <h3 className="text-3xl font-extrabold text-yellow-400 mb-2">
          Asif's Portfolio
        </h3>
        <p className="text-gray-400 mb-6 text-center">
          “Turning ideas into reality with code 🚀”
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="mailto:asifurrahman677294@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/8801885430525"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-400 hover:text-black transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/Asif294"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/asifur-rahman-435b2a200/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 my-4"></div>

        {/* Bottom Line */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Asif. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
