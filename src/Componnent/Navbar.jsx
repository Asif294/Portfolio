export default function Navbar({ handleHome, handleAbout, handleProjects, handleSkills, handleContact }) {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50">
      <ul className="flex justify-center space-x-6 cursor-pointer">
        <li onClick={handleHome} className="hover:text-yellow-400">Home</li>
        <li onClick={handleAbout} className="hover:text-yellow-400">About Me</li>
        <li onClick={handleProjects} className="hover:text-yellow-400">Projects</li>
        <li onClick={handleSkills} className="hover:text-yellow-400">Skills</li>
        <li onClick={handleContact} className="hover:text-yellow-400">Contact</li>
      </ul>
    </nav>
  );
}
