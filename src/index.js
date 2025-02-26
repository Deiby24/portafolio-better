import React from "react";
import ReactDOM from "react-dom/client";
import './assets/main.css';
import './assets/tailwind.css';
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Profile from "./components/sections/Profile";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Companies from "./components/sections/Companies";
import Skills from "./components/sections/Skills";
import AnimationSection from "./assets/Variants/AnimationSection";

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <>
      <Navbar />
      <AnimationSection>
        <Profile />
      </AnimationSection>
      <AnimationSection>
        <AboutMe />
      </AnimationSection>
      <AnimationSection>
        <Projects />
      </AnimationSection>
      <AnimationSection>
        <Companies />
      </AnimationSection>
      <AnimationSection>
        <Skills />
      </AnimationSection>
      <Footer />
  </>
)