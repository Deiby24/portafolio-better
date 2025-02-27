import React from "react";
import { Box, Typography,Button , Grid2, Divider } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Typewriter from 'typewriter-effect';
import { RedSocial } from "../common/RedSocial";


const Profile =  () => {
    
    return (
        <Box className="w-full py-12">
        <Box className="containerInfo h-screen flex items-center justify-center bg-gradient-to-r">
          <Grid2 container spacing={4} className="subContainerInfo">
            <Grid2 item xs={12} md={6} className="containerImgAbout mb-8">
              <img
                alt="aboutimg"
                className="imgAboutMe rounded-full w-48 h-48 object-cover mx-auto"
                src={require("../../assets/img/deiby.jpg")}
              />
            </Grid2>
            <Grid2 item xs={12} md={6} className="containerTextNavb text-white">
              <Typography variant="h2" className="font-bold mb-4">
                Deiby Hernández Pérez
              </Typography>
              <Typography variant="h5" className="mb-8">
              <Typewriter
                options={{
                  strings: ['Software Developer', 'Web Developer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  cursor: '|',
                  cursorClassName: 'typewriter-cursor',
                }}
              />
              </Typography>
              
              <Divider sx={{ backgroundColor: "gray", my: 2 }} />
              <RedSocial/>
              <Button
                variant="outlined"
                color="inherit"
                component={ScrollLink}
                to="About"
                offset={-100}
                duration={500}
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Learn More
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
  
    );
}

export default Profile;