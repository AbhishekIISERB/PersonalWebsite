import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./index.css";

function App() {
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: true });

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={introRef}
        className="h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm Abhishek
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-400"
        >
          A passionate Web Developer
        </motion.p>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-900 p-10 flex items-center justify-center"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a frontend developer who loves building beautiful and functional websites. I work mostly with React, Tailwind CSS, and Framer Motion to create seamless user experiences.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black p-10 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400">A sleek personal website to showcase my work, built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">API Dashboard</h3>
            <p className="text-gray-400">Interactive dashboard pulling data from public APIs, using animations and charts.</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-900 p-10 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-center max-w-xl mb-6">
          Have a project in mind or want to connect? Feel free to reach out.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition"
        >
          Say Hello
        </a>
      </motion.section>
    </div>
  );
}

export default App;