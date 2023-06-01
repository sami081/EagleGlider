import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const test = ()=> {
    setIsMenuOpen (false)
  }
  const className = isMenuOpen ? 'menu' : "close";
  return (
    <>
     
        <img src="" alt="menu-burger"  onClick={toggleMenu} />
      <nav className={`my-element ${className}`}> 
      <ul>
        <NavLink to="/">
            <li onClick={test}>Accueil</li>
        </NavLink>
        <NavLink to="process">
            <li onClick={test}>Processus</li>
        </NavLink>
        <NavLink to="/achievements">
            <li onClick={test}>Réalisations</li>
        </NavLink>
        <NavLink to="/services">
            <li onClick={test}>Prestations</li>
        </NavLink>
        <NavLink to="/contact">
            <li onClick={test}>Contact</li>
        </NavLink>
      </ul>
      </nav>
    </>
  );
};

export default MenuBurger;
