import React from "react";
import "./Hero.css";
import avatar from '../images/avatar.jpeg'
import bgg from '../images/bgg.jpg'

function Hero() {
  return (
    <section class="wrapper">
      <div class="masking-container">
        <h1 class="masked-text">FRONT-END</h1>

        <h1 class="masked-text">DEVELOPER</h1>
      </div>

    <div class="card" data-effect="zoom">
      <button class="card__save  js-save" type="button">
        <i class="fa  fa-bookmark"></i>
       </button>
      <figure  class="card__image">
        <img src={bgg} alt="Short description"/>
      </figure>
      <div class="card__header">
        <figure class="card__profile">
          <img src={avatar}alt="Short description"/>
        </figure>
      </div>
      <div class="card__body">
        <h3 class="card__name">Abishek Singh Negi</h3>
        <p class="card__job">Front-end React Developer</p>
        <p class="card__bio">SKILLS: React.js,HTML,CSS,Python,Tailwind,API managements</p>
      </div>
      <div class="card__footer">
        <p class="card__date">PORTFOLIO</p>
        <p class=""></p>
      </div>
    </div>
 
    
  </section>
  );
}

export default Hero;
