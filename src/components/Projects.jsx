import React from 'react';
import './CSS/project.css';
import Footer from './Footer';

const projectData = [
  {
    title: 'Food Api',
    link: 'https://github.com/SanjayTripathee/react-foodapp',
    image: '/foodapp.jpg',
  },
  {
    title: 'Online Ecommerce',
    link: 'https://github.com/SanjayTripathee/onlineEcommerce',
    image: '/ecommerce.jpg',
  },
  {
    title: 'Payment Intigration',
    link: 'https://github.com/SanjayTripathee/paymentIntigration_Frontend',
    image: '/myProject.png',
  },
  {
    title: 'Shopping Cart',
    link: 'https://github.com/SanjayTripathee/Shopping_Cart',
    image: '/shoppingCart.png',
  },
  {
    title: 'Google Calander',
    link: 'https://github.com/SanjayTripathee/Google_Calander',
    image: '/GoogleCalander.png',
  },
  {
    title: 'Game',
    link: 'https://github.com/SanjayTripathee/projectjs',
    image: '/game.png',
  },
  {
    title: 'Web Design',
    link: 'https://github.com/SanjayTripathee/Web-design-mini-project',
    image: '/reactWebsite.png',
  },
  {
    title: 'CRUD',
    link: 'https://github.com/SanjayTripathee/User_Product_Review',
    image: '/crud.png',
  }
];

const Projects = () => (
  <>
    <section className="projects-section">
      <h2 className="projects-title">My Latest Work</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={proj.image}
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
