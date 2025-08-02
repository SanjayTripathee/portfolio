import React from 'react';
import './CSS/project.css';
import Footer from './Footer';

const projectData = [
  { title: 'Food Api', link: 'https://github.com/SanjayTripathee/react-foodapp' },
  { title: 'Log In Management', link: 'https://github.com/SanjayTripathee/frontendOfLogInManagement' },
  { title: 'Online Ecommerce', link: 'https://github.com/SanjayTripathee/onlineEcommerce' },
  { title: 'Payment Intigration', link: 'https://github.com/SanjayTripathee/paymentIntigration_Frontend' },
  { title: 'Shopping Cart', link: 'https://github.com/SanjayTripathee/Shopping_Cart' },
  { title: 'Google Calander', link: 'https://github.com/SanjayTripathee/Google_Calander' },
  { title: 'Game', link: 'https://github.com/SanjayTripathee/projectjs' },
  { title: 'Web Design', link: 'https://github.com/SanjayTripathee/Web-design-mini-project' },
];

const Projects = () => (
  <>
    <section className="projects-section">
      <h2 className="projects-title">My Latest Work</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src="/sanjayTripathee.jpg"
              alt={proj.title}
              className="project-image"
            />
            <div className="project-title">{proj.title}</div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View 
            </a>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </>
);

export default Projects;
