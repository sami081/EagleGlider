import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBurger from './MenuBurger';



const Header = () => {
    return (
       <>
      <header>
        <NavLink to="/"><img src="" alt="logo" /></NavLink>
        <div className="mobile">
        <a href={`tel:033695177148`}><img src="" alt="tel" /></a>
<MenuBurger/>
            </div>    

         
      </header>
 
      </>
    );
};

export default Header;