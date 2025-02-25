import React from "react";
import "./About.css";
import avatar from '../images/avatar.jpeg'

function About() {
  return (
    <section className="about">
      <h2 id="h2">ABOUT ME</h2>
      <br />
      <br />
      <div id="aboutme">
      <img id="me" src={avatar} alt="g" />
      <p id="para">As a dedicated Computer Science undergraduate, I am deeply passionate about designing and developing scalable, efficient, and user-friendly web applications. My expertise lies in front-end development, API integration, and optimizing web performance to ensure seamless user experiences. I specialize in technologies such as React.js, Tailwind CSS, and Material-UI, which enable me to create visually appealing and highly functional interfaces.

I have worked on a variety of projects that showcase my ability to solve real-world problems through technology. One of my key projects includes an AI-powered chatbot built using the Gemini API, which enhances user interactions through intelligent responses. I also developed a dynamic and responsive fitness exercises application that provides personalized workout recommendations. Additionally, I created a movie search platform that integrates with the TMDb API to fetch real-time movie data, allowing users to explore films effortlessly.

Beyond web development, I have a strong foundation in Python, JavaScript, and data structures, which enables me to build efficient algorithms and optimize application performance. I am always eager to learn new technologies and stay updated with the latest industry trends. My approach to development is both creative and analytical, ensuring that every project I work on is both aesthetically engaging and technically robust.

I am highly motivated to collaborate with like-minded individuals and contribute to projects that push the boundaries of innovation. Whether it's working in a dynamic team environment or taking the lead on a challenging problem, I am always ready to tackle new opportunities with enthusiasm and a problem-solving mindset.</p>
      </div>
      
    </section>
  );
}

export default About;
