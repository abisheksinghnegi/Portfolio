import React from "react";
import "./Project.css";
import { div } from "framer-motion/m";

function Projects() {
  return (
    <div id="project">
      <h1>PROJECTS</h1>
      <br />
<section class="phos">
<article class="pho pho--1">
  <div class="pho__info-hover">
  </div>
  <div class="pho__img"></div>
  <a href="https://calzone-food-tracker.netlify.app/" target="blank" class="pho_link">
    <div class="pho__img--hover"></div>
  </a>
  <div class="pho__info">
    <span class="pho__category"> Tap to see</span>
    <h3 class="pho__title">CALZONE</h3>
    <span class="pho__by"><a href="#" class="pho__author" title="author">Food Calorie & Macro tracker</a></span>
  </div>
</article>
<article class="pho pho--2">
  <div class="pho__info-hover">
  </div>
  <div class="pho__img"></div>
  <a href="https://movie-with-ai-1.netlify.app/" target="blank" class="pho_link">
    <div class="pho__img--hover"></div>
  </a>
  <div class="pho__info">
    <span class="pho__category"> Tap to see</span>
    <h3 class="pho__title">CINEPHILES WITH AI</h3>
    <span class="pho__by"><a href="#" class="pho__author" title="author">Movie App with inbuilt AI for recommendations</a></span>
  </div>
</article>
<article class="pho pho--3">
  <div class="pho__info-hover">
  </div>
  <div class="pho__img"></div>
  <a href="https://fitnessappproject1.netlify.app/" target="blank" class="pho_link">
    <div class="pho__img--hover"></div>
  </a>
  <div class="pho__info">
    <span class="pho__category"> Tap to see</span>
    <h3 class="pho__title">FITNESS EXERCIESES</h3>
    <span class="pho__by"><a href="#" class="pho__author" title="author">Exercise recommendations with tutorials</a></span>
  </div>
</article>
<article class="pho pho--4">
  <div class="pho__info-hover">
  </div>
  <div class="pho__img"></div>
  <a href="https://chattwithai.netlify.app/" target="blank" class="pho_link">
    <div class="pho__img--hover"></div>
  </a>
  <div class="pho__info">
    <span class="pho__category"> Tap to see</span>
    <h3 class="pho__title">CHAT WITH AI</h3>
    <span class="pho__by"><a href="#" class="pho__author" title="author">Chat with AI and ask queries in realtime</a></span>
  </div>
</article>
 
  
</section>
</div>
  );
}

export default Projects;
