import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/nav.css';

const MainNavLinks = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tripath<span className="dot">EE</span><span className="pink-dot">.</span></div>
      
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About Me</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>

      <div className="navbar-button">
        <button className="connect-btn">Connect With Me</button>
      </div>
    </nav>
  );
};

export default MainNavLinks;
