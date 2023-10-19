import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBurger from './MenuBurger';




const Header = () => {
    return (
       <>
      <header>
        <NavLink to="/" className="link-logo"><img src="./ressources/images/icon/logo.png" alt="logo" className='logo' /></NavLink>
        <div className="mobile">
        <a href={`tel:033695177148`} className='phone'><img src="./ressources/images/icon/phone.svg" alt="tel" /></a>
<MenuBurger/>
            </div>  
            <nav className='nav-desktop'>
              <ul>
            <NavLink to="/process" className={(nav) => (nav.isActive ? "nav-active link" :"link")}><li className='title-link'>Processus
            </li><span></span></NavLink>
            <NavLink to="/achievements"className={(nav) => (nav.isActive ? "nav-active link " :"link")}><li className='title-link'>Réalisations</li><span></span></NavLink>
            <NavLink to="/services"className={(nav) => (nav.isActive ? "nav-active link " :"link")}><li className='title-link'>Prestations</li><span></span></NavLink>
            <NavLink to="/contact"className={(nav) => (nav.isActive ? "nav-active link" :"link")}><li className='title-link'>Contact</li><span></span></NavLink>
            
            </ul>
            </nav>

         
      </header>
 
      </>
    );
};

export default Header;