import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="mb-4 text-gray-600">Feel free to reach out!</p>
      <form className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="5"></textarea>
        <button className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
          Send
        </button>
      </form>
    </section>
  );
});

export default Contact;
