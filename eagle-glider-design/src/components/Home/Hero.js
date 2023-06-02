import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
       <div className='hero-banner'>
        <div className="title">
        <h1>EAGLE GLIDER <br /> DESIGN</h1>
        <h2>Construisons ensemble <br />votre projet</h2>
        <NavLink to="/contact" className="contact"> <li>Contactez nous</li></NavLink>
        </div>
    </div>
    );
};

export default Hero;