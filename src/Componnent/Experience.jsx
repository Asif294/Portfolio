import { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "XYZ Tech",
      duration: "Jan 2023 - Present",
      description: "Developed responsive web applications using React and Tailwind CSS. Collaborated with designers to implement modern UI designs.",
    },
    {
      position: "Intern",
      company: "ABC Solutions",
      duration: "Jun 2022 - Dec 2022",
      description: "Assisted in building internal tools using Django and React. Gained experience in REST API integration and database management.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-gray-900 to-gray-800 p-10 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 border-b-2 border-yellow-400">Experience</h2>
      
      <div className="space-y-8 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">{exp.position}</h3>
            <p className="text-yellow-400 font-medium">{exp.company}</p>
            <p className="text-gray-400 italic">{exp.duration}</p>
            <p className="mt-2 text-gray-200">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;
