import { forwardRef } from "react";

const Experience = forwardRef((_, ref) => {
  const experiences = [
    {
      position: "Backend Developer (Remote)",
      company: "PsyLab Software Limited",
      duration: "November 2025 – Present",
      points: [
        "Architecting and maintaining scalable backend services for diverse client projects using Django and PostgreSQL.",
        "Optimized API performance, reducing response latency by implementing efficient database queries and Django ORM optimization.",
        "Streamlined the frontend-backend integration process by maintaining comprehensive Swagger/OpenAPI documentation.",
        "Implemented JWT-based authentication and role-based access control (RBAC) to ensure secure data handling across applications.",
      ],
    },
    {
      position: "Python Developer – Industrial Attachment",
      company: "BdTask Limited",
      duration: "August 2025 – October 2025",
      points: [
        "Contributed to a large-scale e-commerce engine, specifically developing modules for order management and inventory tracking.",
        "Adhered to industry-standard Git-flow and participated in peer code reviews to ensure PEP 8 compliance and code quality.",
        "Assisted in refining database schemas, improving data retrieval speeds for high-traffic product catalogs.",
        "Collaborated in an Agile environment, contributing to daily stand-ups and sprint planning.",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-gray-900 to-gray-800 px-6 py-16 text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-yellow-400">Experience</h2>

      <div className="relative w-full max-w-5xl">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-400/30 hidden md:block" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`relative flex w-full mb-12 md:mb-16 ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
              {/* Dot on timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-900 z-10 hidden md:block" />

              {/* Card */}
              <div className={`w-full md:w-5/12 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/10 transition duration-300 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                {/* Top accent bar */}
                <div className="w-10 h-1 bg-yellow-400 rounded mb-4" />

                <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                <p className="text-yellow-400 font-semibold text-sm mt-1">{exp.company}</p>
                <p className="text-gray-500 text-xs italic mt-1 mb-4">{exp.duration}</p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-yellow-400 mt-0.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Experience;
