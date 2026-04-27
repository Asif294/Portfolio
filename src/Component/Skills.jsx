import { forwardRef } from "react";

const Skills = forwardRef((_, ref) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "JavaScript"],
    },
    {
      title: "Frameworks / Libraries",
      skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "React", "Tailwind"],
    },
    {
      title: "Tools",
      skills: ["Docker", "Git", "GitHub", "Postman", "Linux (Ubuntu)", "Swagger / OpenAPI"],
    },
    {
      title: "Databases & Auth",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Django ORM", "JWT"],
    },
    {
      title: "Soft Skills",
      skills: ["Time Management", "Teamwork"],
    },
    {
      title: "Problem Solving",
      skills: [],
      links: [
        { label: "130+ solved on Codeforces", url: "https://codeforces.com/profile/asifur_rahman677" },
        { label: "40+ solved on LeetCode", url: "https://leetcode.com/u/Asif294/" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-10 text-white"
    >
      {/* Left Side */}
      <div className="md:w-11/12 md:pr-12 md:pl-20 text-left">
        <h2 className="text-5xl font-bold mb-8 text-yellow-400">Skills</h2>

        {skillCategories.map((cat, i) => (
          <div key={i} className="mb-5">
            <h3 className="font-bold text-xl text-yellow-300 mb-2">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition duration-200"
                >
                  {skill}
                </span>
              ))}
              {cat.links && cat.links.map((link, j) => (
                <a
                  key={j}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className="md:w-3/6 flex justify-center mt-8 md:mt-0">
        <img
          src="/skills.png"
          alt="Skills Illustration"
          className="w-80 h-90 md:w-90 md:h-90 object-cover"
        />
      </div>
    </section>
  );
});

export default Skills;
