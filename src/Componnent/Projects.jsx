import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projects = [
    { title: "Bank Management System", desc: "A Django project handling transactions." },
    { title: "Library Management System", desc: "Manage books, users, and reviews." },
    { title: "Cloth Store", desc: "An e-commerce project with cart, wishlist, and filters." },
  ];

  return (
    <section ref={ref} className="min-h-screen bg-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10 mt-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
