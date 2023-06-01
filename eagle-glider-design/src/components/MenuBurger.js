import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [navVisible, setNavVisible] = useState(true);
 const [navClass, setNavClass] = useState('');
let className
  const toggleMenu = () => {
   setNavClass("close")
    setIsMenuOpen(!isMenuOpen);
  
  };
  const test = ()=> {
   setNavClass("")
    setNavVisible(false)
  
   
  };
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setNavVisible(true);
       setIsMenuOpen(false)
    },500);
    return ()=> clearTimeout(timer);
  },[navVisible])
 className = isMenuOpen ? 'menu' : `${navClass}`;
 
  return (
    <>
     
        <div className="burger-menu"  onClick={toggleMenu} >
          <span className="trait"></span>
          <span className="trait"></span>
          <span className="trait"></span>
          </div>
        {navVisible && (

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
        )}
    </>
  );
};

export default MenuBurger;
