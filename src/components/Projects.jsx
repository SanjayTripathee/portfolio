import React from 'react';
import './CSS/project.css';
import Footer from './Footer';

const projectData = [
  { title: 'University Hero Section' },
  { title: 'Music Player Dashboard' },
  { title: 'Movie Dashboard' },
  { title: 'NFT Marketplace' },
  { title: 'Dental Clinic UI' },
  { title: 'Oblo Agency Theme' },
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
        </div>
      ))}
    </div>
  </section>
  <Footer/>
</>
);

export default Projects;
