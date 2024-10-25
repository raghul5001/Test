import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; 
import Logo from '../Images/Inner-logo.png'

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><img src={Logo}></img></div>
    <ul className="nav-links">
      <li>Home</li>
      <li>Destinations</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Community</li>
      <li><button className="book-button">Book an Event</button></li>
    </ul>
  </nav>
);

export default Navbar;
