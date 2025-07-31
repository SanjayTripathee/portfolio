import React from 'react';
import './CSS/contact.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
        <section className="contact-container">
      <div className="contact-left">
        <h2><span className="highlight">Let's</span> talk</h2>
        <p>
          I'm currently available to take on new projects, so feel free to send me a message
          about anything that you want me to work on. You can contact anytime.
        </p>
        <div className="contact-info">
          <p><span className="icon">✉</span> st1706851@gmail.com</p>
          <p><span className="icon">📞</span> +977-9768994267</p>
          <p><span className="icon">📍</span> Kathmandu, Nepal</p>
        </div>
      </div>

      <div className="contact-right">
        <h1>Get in <span className="highlight">touch</span></h1>
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Enter your message" required />
          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  
  );
};

export default Contact;
