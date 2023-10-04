import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
       <div className='hero-banner'>
         {/* <video autoPlay muted loop>
        <source src="./ressources/images/picture/test.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
        
      </video> */}
      <img src="./ressources/images/picture/globe-orange-4934065.webp" alt="" />
        <div className="title">
        <h1>EAGLE GLIDER <br /> DESIGN</h1>
        <h2>Construisons ensemble <br />votre projet</h2>
        <NavLink to="/contact" className="contact"> <li>Contactez nous</li></NavLink>
        </div>
    </div>
    );
};

export default Hero;