import React, { useState } from 'react';
import './Header.css';
import logo from '../utbsalogo.jpeg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo-container">
          <img src={logo} alt="UTBSA Logo" className="logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/team">Meet the Team</Link></li>
          <li><Link to="/links">Links</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
