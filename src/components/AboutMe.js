import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, Typography, Container,Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";



export function AboutMe() {
    const AnimationAbout = useRef(null);

    useEffect(() => {
        const typed = new Typed(AnimationAbout.current, {
            strings: [`I am Deiby Brayans Hernández Pérez, a passionate software developer with outstanding skills to learn quickly and solve problems effectively. I am motivated by innovation and continuous growth, with the goal of optimizing processes and creating solutions that generate impact both personally and professionally.
I have experience working with technologies such as JavaScript, C#, .NET, MySQL, Docker and GitHub, which I have applied in application development, database management and creation of scalable solutions. During my career, I have implemented improvements that have optimized internal processes and increased the efficiency of systems in production.
Currently, I am achieving one of my personal goals: to master the English language, to broaden my horizons and perform better in global environments. My future goal is to continue creating tools and applications that facilitate daily work and contribute to the success of the projects in which I participate.`],
            typeSpeed: 0,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Box className="w-full  py-12">
        
            <Container maxWidth="lg">
                <Box id="About" className="text-center mb-8">
                    <Typography variant="h2" className="font-bold text-3xl">
                        ABOUT ME
                    </Typography>
                </Box>
                <Box className="flex justify-center">
                    <Box className="max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                        <Typography variant="body1" className="text-gray-700 leading-relaxed">
                            <span ref={AnimationAbout} />
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}