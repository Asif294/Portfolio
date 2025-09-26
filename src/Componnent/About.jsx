import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl text-lg text-gray-700 text-center">
        I'm Asif, a Computer Science student at Habiganj Polytechnic Institute.  
        I love building web applications using Python, Django, and React.  
        My goal is to become a skilled Backend Engineer and pursue higher studies in Japan 🇯🇵.
      </p>
    </section>
  );
});

export default About;
