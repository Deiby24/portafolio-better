import React from "react";
import '../src/assets/main.css';
import '../src/assets/tailwind.css';
import  ReactDOM  from "react-dom/client";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile"; 
import { AboutMe } from "./components/AboutMe";
import { Proyects } from "./components/Proyects";
import { Empresas } from "./components/Collaborations";
import { Expertise } from "./components/expertise";


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar></Navbar>
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Proyects></Proyects>
        <Empresas></Empresas>
        <Expertise></Expertise>
        <Footer></Footer>
    </>
)