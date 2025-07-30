import React from 'react';
import './CSS/services.css';

const services = [
  { id: '01', title: 'Web design' },
  { id: '02', title: 'Social media' },
  { id: '03', title: 'App design' },
  { id: '04', title: 'Content writing' },
];

const Services = () => (
  <div className="services-container">
    <h2 className="services-title">My <span>Services</span></h2>
    <div className="services-grid">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h3>{service.id}</h3>
          <h4>{service.title}</h4>
          <p>Web development is the process of building, programming...</p>
          <a href="#">Read More →</a>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
