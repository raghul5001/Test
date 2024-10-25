import React from 'react';
import Navbar from './Navbar';
import GetInTouchForm from './GetInTouchForm';
import '../styles.css'
import Logo from '../Images/Inner-logo.png'

const Home = () => (
    <div>
          <Navbar />
  <div className="home">
  
    <div className="home-content">
      <div className="text-overlay">
      <div className="center-logo"><img src={Logo}></img></div>
      </div>
      <GetInTouchForm />
    </div>
  </div>
  </div>
);

export default Home;
