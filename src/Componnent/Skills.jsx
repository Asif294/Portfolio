import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  const skills = ["Python", "Django", "JavaScript", "React", "Tailwind CSS", "MySQL"];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, i) => (
          <span key={i} className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-md">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
});

export default Skills;
