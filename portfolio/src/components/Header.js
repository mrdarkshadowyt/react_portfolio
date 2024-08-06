import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="container">
      <h1>Mohamed Hameed N</h1>
      <nav>
        <ul>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/activities">Extracurricular Activities</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
