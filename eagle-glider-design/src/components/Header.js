import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBurger from './MenuBurger';




const Header = () => {
    return (
       <>
      <header>
        <NavLink to="/"><img src="./ressources/images/icon/logo.png" alt="logo" className='logo' /></NavLink>
        <div className="mobile">
        <a href={`tel:033695177148`}><img src="./ressources/images/icon/phone.svg" alt="tel" /></a>
<MenuBurger/>
            </div>  
            <nav className='nav-desktop'>
              <ul>
            <NavLink to="/process"><li>Processus</li></NavLink>
            <NavLink to="/achievements"><li>Réalisations</li></NavLink>
            <NavLink to="/services"><li>Prestations</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            
            </ul>
            </nav>

         
      </header>
 
      </>
    );
};

export default Header;