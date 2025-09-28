import { forwardRef } from "react";

const Education = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-yellow-400 mb-10 text-center">
          Education & Skills
        </h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-4">EDUCATION</h3>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 mb-4">
            <h4 className="text-xl font-semibold mb-1">Habiganj Polytechnic Institute, Habiganj</h4>
            <p className="text-gray-300 mb-1">Diploma in Computer Science and Technology</p>
            <p className="text-gray-400 mb-1">8th Semester (Ongoing) | CGPA: 3.51/4.00</p>
            <p className="text-gray-400">January 2022 – Present</p>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-4">LANGUAGES</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Bangla (Native): Fluent in speaking, reading, listening & writing</li>
            <li>English (Intermediate): Strong in reading & listening, moderate in speaking & writing</li>
          </ul>
        </div>

        {/* Courses & Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-yellow-300 mb-4">COURSES & CERTIFICATIONS</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              English Spoken Course –{" "}
              <a
                href="https://drive.google.com/file/d/1bt1Jbkshsi_lGgqO-e0dVQffcDMZYBP7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                certificate link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Education;
