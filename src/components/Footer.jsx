import React from 'react';
import './CSS/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <h2>Tripath<span>EE.</span></h2>
          <p>
            I am a Full Stack developer from Nepal with 1+ years of experience in a company called Tinker Technology.
          </p>
        </div>

        <div className="footer-right">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Sanjay Tripathee. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Term of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
