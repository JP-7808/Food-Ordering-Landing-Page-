import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Jaya Food</h1>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="services" 
          smooth={true} 
          duration={500} 
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link 
          to="aboutUs" 
          smooth={true} 
          duration={500} 
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </div>
    </nav>
  );
};

export default Navbar;
