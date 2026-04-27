import { forwardRef } from "react";

const Education = forwardRef((_, ref) => {
  const sections = [
    {
      label: "Education",
      title: "Habiganj Polytechnic Institute",
      subtitle: "Diploma in Computer Science and Technology",
      duration: "January 2022 – January 2026",
      points: [
        "CGPA: 3.51 / 4.00",
        "Habiganj, Bangladesh",
      ],
      badges: [],
    },
    {
      label: "Languages",
      title: "Communication",
      subtitle: "Spoken & Written Languages",
      duration: "",
      points: [
        "Bangla (Native) — Fluent in speaking, reading, listening & writing",
        "English (Intermediate) — Strong in reading & listening, moderate in speaking & writing",
      ],
      badges: [],
    },
    {
      label: "Certification",
      title: "English Spoken Course",
      subtitle: "Language & Communication",
      duration: "",
      points: [],
      badges: [],
      link: {
        label: "View Certificate",
        url: "https://drive.google.com/file/d/1bt1Jbkshsi_lGgqO-e0dVQffcDMZYBP7/view?usp=drive_link",
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-800 via-gray-900 to-black px-6 py-16 text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-yellow-400">Education</h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-yellow-400/20 md:left-8" />

        {sections.map((item, index) => (
          <div key={index} className="relative flex gap-8 mb-12 pl-16 md:pl-20">
            {/* Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-900 z-10 md:left-6" />

            {/* Card */}
            <div className="w-full bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/10 transition duration-300 p-6">
              <div className="w-8 h-1 bg-yellow-400 rounded mb-4" />

              <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400/70 mb-2 block">
                {item.label}
              </span>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-yellow-400 font-medium text-sm mt-0.5">{item.subtitle}</p>
                </div>
                {item.duration && (
                  <span className="text-gray-500 italic text-xs shrink-0 mt-1">{item.duration}</span>
                )}
              </div>

              {item.points.length > 0 && (
                <ul className="space-y-1.5 mt-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-yellow-400 mt-0.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 border border-yellow-400 text-yellow-400 text-sm rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
                  >
                    {item.link.label}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Education;
