import React from 'react';
import './CSS/contact.css';
import Footer from './Footer';
import axios from 'axios';
import { useState } from 'react';
import { bUrl } from '../constant';

const Contact = () => {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !message) {
    alert("All fields are required");
    return;
  }

  const data = { name, email, message };

  try {
    const result = await axios({
      url: `${bUrl}/api/portfolio`, // your backend endpoint
      method: "post",
      data: data, // form data to save in DB
    });

    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
    console.log(result.data); // optional: see backend response
  } catch (error) {
    alert(error.response?.data?.error || "Failed to send message");
    console.error(error);
  }
};
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  
  );
};

export default Contact;
