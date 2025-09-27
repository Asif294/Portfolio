import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    { title: "Languages", skills: "C | C++ | Python | JavaScript" },
    { title: "Frontend", skills: "HTML | CSS | Bootstrap | Tailwindcss | React" },
    { title: "Backend", skills: "Django | Django REST Framework | MySQL | Django ORM" },
    { title: "Auth", skills: "Token | OAuth | JWT" },
    { title: "Others", skills: "Git | Github | Vercel | Supabase | Postman" },
  ];

  const proficient = [
    "Python",
    "Django",
    "React JS",
    "Django REST Framework",
    "Backend Development"
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-10 text-white"
    >
      {/* Left Side */}
      <div className="md:w-11/12 md:pr-12 md:pl-20 text-left">
        <h2 className="text-5xl font-bold mb-6 text-yellow-400">Skills</h2>

        {skillCategories.map((cat, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold text-lg text-white">{cat.title}:</h3>
            <p className="text-gray-300">{cat.skills}</p>
          </div>
        ))}

        <h3 className="font-semibold text-lg text-white mt-6 mb-2">Proficiency:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {proficient.map((skill, i) => (
            <li key={i}> {skill}</li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="md:w-3/6 flex justify-center mt-8 md:mt-0">
        <img
          src="/skills-image.png" // তোমার image path
          alt="Skills Illustration"
          className="w-80 h-80 md:w-90 md:h-90 object-cover rounded-lg shadow-lg border-2 border-yellow-400"
        />
      </div>
    </section>
  );
});

export default Skills;
