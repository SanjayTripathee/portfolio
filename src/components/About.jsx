import React from 'react';
import './CSS/about.css';
import Footer from './Footer';

const About = () => (
  <>
    <section className="about-section">
    <h2 className="about-heading">
      About <span className="highlighted-text">me</span>
    </h2>

    <div className="about-container">
      {/* Profile Image */}
      <div className="about-image-container">
        <img
          src="../Public/sanjayTripathee.jpg" // Make sure the path is correct
          alt="Profile"
          className="about-profile-image"
        />
      </div>

      {/* Content */}
      <div className="about-content">
        <p>
          I am an experienced Full Stack Developer having expertise in the field.
          Throughout my career, I have had the privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
        <p>
          My passion for Full Stack development is not only reflected in my extensive experience but also in
          the enthusiasm and dedication I bring to each project.
        </p>

        {/* Skills */}
        <div className="skill-bars">
          <div className="skill">
            <span>HTML & CSS</span>
            <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
          </div>
          <div className="skill">
            <span>React JS</span>
            <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
          </div>
          <div className="skill">
            <span>Node JS</span>
            <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
          </div>

          <div className="skill">
            <span>PYTHON</span>
            <div className="bar"><div className="fill" style={{ width: '50%' }}></div></div>
          </div>

          <div className="skill">
            <span>MONGO_DB AND PL/SQL</span>
            <div className="bar"><div className="fill" style={{ width: '70%' }}></div></div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="about-stats">
      <div className="stat"><span className="number">1+</span><br />Years of Experience</div>
      <div className="stat"><span className="number">26+</span><br />Projects Completed</div>
      <div className="stat"><span className="number">3+</span><br />Happy Clients</div>
    </div>
  </section>
  <Footer/>
  </>

);

export default About;
