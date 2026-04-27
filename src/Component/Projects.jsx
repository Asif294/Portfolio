import { forwardRef } from "react";

const Projects = forwardRef((_, ref) => {
  const projects = [
    {
      title: "SmartCare",
      subtitle: "Hospital Management System",
      overview: "A comprehensive healthcare backend managing doctors, patients, and appointment scheduling with secure role-based access.",
      points: [
        "Developed modules for doctor/patient management and appointment scheduling.",
        "Implemented real-time booking logic to prevent scheduling conflicts.",
        "Integrated role-based permissions to protect sensitive medical records.",
      ],
      tech: ["Django", "DRF", "SQLite", "Django ORM"],
      img: "/hospital-management-system.webp",
      link: "https://github.com/Asif294/SmartCare",
    },
    {
      title: "StyleHub",
      subtitle: "E-commerce Clothing Store Backend",
      overview: "A backend system for an e-commerce clothing store managing products, users, and orders for a smooth shopping experience.",
      points: [
        "Built robust backend supporting complex product schemas, cart, and wishlist logic.",
        "Implemented multi-factor filtering (category, size, color, price) using Django-filter.",
        "Developed a secure checkout workflow with order management.",
      ],
      tech: ["Django", "DRF", "PostgreSQL", "Django ORM"],
      img: "/stylehub.png",
      link: "https://github.com/Asif294/Stylehub-backend",
    },
    {
      title: "Banking System",
      subtitle: "Bank Management System",
      overview: "A Django-based banking backend handling user accounts, transactions, and fund transfers with secure authentication.",
      points: [
        "Implemented account creation, deposits, withdrawals, and fund transfers.",
        "Secured endpoints with token-based authentication.",
        "Managed transaction history with detailed audit trails.",
      ],
      tech: ["Django", "DRF", "SQLite", "JWT"],
      img: "/bank.webp",
      link: "https://github.com/Asif294/Banking_system",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-16 text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col bg-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/10 transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-44 bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-yellow-400">{p.title}</h3>
                <p className="text-gray-400 text-xs font-medium mt-0.5">{p.subtitle}</p>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{p.overview}</p>

              <ul className="space-y-1.5 mb-5">
                {p.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-xs">
                    <span className="text-yellow-400 mt-0.5">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {p.tech.map((t, k) => (
                  <span key={k} className="px-2 py-0.5 bg-gray-700 text-yellow-400 text-xs rounded-full border border-gray-600">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 border border-yellow-400 text-yellow-400 text-sm font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
