import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Contact from "./components/Contact"; 
import About2 from "./components/About2";
import Contact2 from "./components/Contact2";
import About0 from "./components/About0";



function App() {
  return (
    <div >

      <Navbar />
      <Hero />
      <About2 /> 
      <About0 /> 
      <Projects />
      <Contact2 />
      <Contact />

    </div>
  );
}

export default App;
