import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projects = [
    { 
      title: "Bank Management System", 
      desc: "A Django project handling transactions.", 
      img: "/public/bank.webp",
      link: "https://github.com/Asif294/Banking_system"
    },
    { 
      title: "Hospital Management System", 
      desc: "Create account, Take Appointment, Receive prescription, show available doctors.", 
      img: "/public/hospital-management-system.webp",
      link: "https://github.com/Asif294/SmartCare"
    },
    { 
      title: "Cloth Store", 
      desc: "An e-commerce project with cart, wishlist, and filters.", 
      img: "/public/stylehub.png",
      link: "https://github.com/Asif294/Stylehub-backend"
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-10 text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 hover:scale-105 transition transform"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-2xl font-semibold mb-2 text-yellow-300 text-center">
              {p.title}
            </h3>
            <p className="text-gray-300 text-center mb-4">{p.desc}</p>
            
            {/* Button with link */}
            <div className="text-center">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                View Backend
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
