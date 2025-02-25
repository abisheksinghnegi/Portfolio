import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 
import About2 from "./components/About2";
import Contact2 from "./components/Contact2";



function App() {
  return (
    <div >

      <Navbar />
      <Hero />
      <About2 />
      <About />
      <Projects />
      <Contact2 />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
