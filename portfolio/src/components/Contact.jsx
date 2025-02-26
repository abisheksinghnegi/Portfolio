import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <br />
      <form>
        <h4 style={{fontWeight:100}}>My email: abhishekofficial1910@gmail.com</h4>
        <br />
        <br />
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
