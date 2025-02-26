import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../Data/projectsData";

const Projects =() => {
  return (
    <section className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl text-white font-bold tracking-widest mb-10">PROJECTS</h2>
      <div className={`grid ${projectsData.length === 1 ? 'grid-cols-1 place-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8 w-10/12` }>
        {projectsData.map((item) => (
          <motion.div
            key={item.id}
            className="relative group bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={require(`../../assets/img/${item.image}`)}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-xl"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              <div className="mt-4">
                {item.enabled ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition shadow-md"
                  >
                    {item.button}
                  </a>
                ) : (
                  <span className="inline-block px-6 py-2 bg-gray-700 text-gray-400 rounded-full cursor-not-allowed">
                    Próximamente
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
