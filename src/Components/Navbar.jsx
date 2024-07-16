import React from 'react';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Review <span className='extra-text'>IT.</span></a>
        {/* <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
