import React from 'react';
import './Contact2.css'

function Contact2() {
  return (
    <div id='con2'>
        <h1>GET IN TOUCH WITH SOCIALS</h1>
<ul class="soc-list">
  <li class="soc-item">
    <a href="https://www.facebook.com/" target='_blank' class="soc-link">
      <i class="fa fa-facebook soc-icon" aria-hidden="true"></i>
      <span class="soc-text"> - Facebook</span>
    </a>
  </li>
  <li class="soc-item">
    <a href="https://www.linkedin.com/in/abishek-singh-negi-a980222b0/" target='_blank' class="soc-link">
      <i class="fa fa-twitter soc-icon" aria-hidden="true"></i>
      <span class="soc-text"> - Linkedin</span>
    </a>
  </li>
  <li class="soc-item">
    <a href="https://github.com/abisheksinghnegi" target='_blank' class="soc-link">
      <i class="fa fa-google-plus soc-icon" aria-hidden="true"></i>
      <span class="soc-text"> - GitHub</span>
    </a>
  </li>
  <li class="soc-item">
    <a href="https://www.instagram.com/accounts/login/?hl=en" target='blank'  class="soc-link">
      <i class="fa fa-instagram soc-icon" aria-hidden="true"></i>
      <span class="soc-text"> - Instagram</span>
    </a>
  </li>
</ul>


    </div>
  )
}

export default Contact2