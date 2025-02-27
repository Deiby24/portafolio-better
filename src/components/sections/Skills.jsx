import React from "react";
import { motion } from "framer-motion"; 
import skillsData from "../../Data/skillsData";

const images = require.context('../../assets/img/', true);

const Skills = () => {
    return (
        <div className="relative w-full py-24 bg-transparent">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                SKILLS & EXPERTISE
            </h2>

            <div className="relative flex flex-wrap justify-center items-center gap-6 px-4 md:px-12">
                {skillsData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="relative w-64 h-116  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300"
                        style={{
                            transform: `rotate(${index % 2 === 0 ? "-4deg" : "4deg"}) translateY(${index * 5}px)`,
                        }}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <div className="w-full h-48 overflow-hidden">
                            <motion.img
                                className="w-full h-full object-cover transition-transform duration-300"
                                src={images(item.image)}
                                alt={item.name}
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>

                        <div className="p-6 flex flex-col justify-between h-32">
                            <h5 className="text-xl font-semibold text-white mb-2">
                                {item.name}
                            </h5>
                            <p className="text-sm text-neutral-300">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}


export default Skills;