import React from "react";
import companiesData from "../../Data/companiesData";
import { motion } from "framer-motion";

const getImage = (imageName) => {
  try {
    return require(`../../assets/img/${imageName}`);
  } catch (error) {
    console.error(`No se pudo cargar la imagen: ${imageName}`);
    return ""; // Imagen por defecto o un placeholder si es necesario
  }
};

const Companies = ({ items }) => {
  return (
    <section className="w-full min-h-screen bg-transparent flex flex-col items-center py-20">
      <motion.h2 
        className="text-4xl text-white font-bold tracking-widest mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        COLLABORATIONS
      </motion.h2>
      
      <div className={`grid ${companiesData.length === 1 ? 'grid-cols-1 place-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8 w-10/12`}> 
        {companiesData.map((item) => (
          <motion.div
            key={item.id}
            className="relative group bg-neutral-900 rounded-xl overflow-hidden shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={getImage(item.image)}
              alt={item.name}
              className="w-full h-40 object-contain mb-4"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-xl font-semibold text-white text-center">{item.name}</h3>
            <p className="text-gray-400 text-sm mt-2 text-center">{item.description}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 text-sm bg-gray-700 text-white rounded-full">#{item.etiq}</span>
              <span className="px-3 py-1 text-sm bg-gray-700 text-white rounded-full">#{item.etiq2}</span>
              <span className="px-3 py-1 text-sm bg-gray-700 text-white rounded-full">#{item.etiq3}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Companies;