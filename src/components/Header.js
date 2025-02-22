import React from 'react';
import './Header.css'
import logo from '../utbsalogo.jpeg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
          <nav className="navbar">
            <ul className="nav-links">
              <li> <Link to="/"><img src={logo} alt="UTBSA Logo" className="logo"></img> </Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/team">Meet the Team</Link></li>
              <li><Link to="/links">Links</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header
