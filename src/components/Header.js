// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/lessons">Lessons</Link></li>
      <li><Link to="/practice">Practice</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </div>
);

export default Header;
