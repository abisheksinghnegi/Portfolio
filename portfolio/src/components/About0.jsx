import React from "react";
import "./About0.css";
import avatar from '../images/avatar.jpeg'
import { div } from "framer-motion/m";


function About0() {
  return (
    <div>
      <h2 id="ah">ABOUT ME</h2>       
    <div id="ab">
        <div>
          <img id="me" src={avatar} alt="g" /> 
        </div>
        <div id="name">
            <div>
                <p>As a dedicated Computer Science undergraduate, I am deeply passionate about designing and developing scalable, efficient, and user-friendly web applications. My expertise lies in front-end development, API integration, and optimizing web performance to ensure seamless user experiences. I specialize in technologies such as React.js, Tailwind CSS, and Material-UI, which enable me to create visually appealing and highly functional interfaces.
                </p>
            </div>
            <div id="det">               
            <div>
                <h3 className="asssk">NAME :</h3>
                <h3  className="asssk">DOB :</h3>
                <h3  className="asssk">ADDRESS :</h3>
                <h3  className="asssk">PHONE :</h3>
                <h3  className="asssk">EMAIL :</h3>
                <h3  className="asssk">DEGREE :</h3>
                <h3  className="asssk">UNIVERSITY :</h3>
                <h3  className="asssk">LANGUAGE KNOW :</h3>
                <h3  className="asssk">TECHNICAL LANGUAGE :</h3>
                
            </div>    
            <div>
                 <h3 className="tell">ABISHEK SINGH NEGI</h3>
                <h3 className="tell">30-07-2003</h3>
                <h3 className="tell">NEW DELHI</h3>
                <h3 className="tell">9212991774</h3>
                <h3 className="tell">abhishekofficial1910@gmail.com</h3>
                <h3 className="tell">BTech CSE</h3>
                <h3 className="tell">MDU</h3>
                <h3 className="tell">ENGLISH, HINDI</h3>
                <h3 className="tell">REACT.js, Python, Javascript</h3>
               
            </div>    
            </div>

        </div>
    </div>
    </div>
  );
}

export default About0;
