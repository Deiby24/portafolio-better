import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Container } from "@mui/material";
import "tailwindcss/tailwind.css";

const AboutMe = () => {
  const AnimationAbout = useRef(null);
  const WindowRef = useRef(null);
  const [, setIsTypedFinished] = useState(false);

  useEffect(() => {
    const typed = new Typed(AnimationAbout.current, {
      strings: [
        `I am Deiby Brayans Hernández Pérez, a passionate software developer with outstanding skills to learn quickly and solve problems effectively. I am motivated by innovation and continuous growth, with the goal of optimizing processes and creating solutions that generate impact both personally and professionally.
        I have experience working with technologies such as JavaScript, C#, .NET, MySQL, Docker, and GitHub, which I have applied in application development, database management, and creation of scalable solutions. During my career, I have implemented improvements that have optimized internal processes and increased the efficiency of systems in production.
        Currently, I am achieving one of my personal goals: to master the English language, to broaden my horizons and perform better in global environments. My future goal is to continue creating tools and applications that facilitate daily work and contribute to the success of the projects in which I participate.`
      ],
      typeSpeed:10,
      showCursor: false,
      onComplete: () => {
        setIsTypedFinished(true);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const xRotation = ((clientY / innerHeight) - 0.5) * 8; 
      const yRotation = ((clientX / innerWidth) - 0.5) * 8;

      if (WindowRef.current) {
        WindowRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="About" className="w-full py-20 bg-transparent flex justify-center items-center min-h-screen">
      <Container maxWidth="lg">
        <div className="flex justify-center">
          <div
            ref={WindowRef}
            className="relative max-w-4xl w-full bg-black text-white font-mono p-10 rounded-xl shadow-2xl border border-white transition-transform duration-300 ease-out"
          >

            <div className="absolute top-2 left-4 flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="mt-6 border-t border-white pt-4">
              <span ref={AnimationAbout} className="text-lg leading-relaxed"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;