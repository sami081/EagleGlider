
import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="contact details">
        <img src="./ressources/images/icon/logo-footer.png" alt="logo-gray" />
        <h3>0695177148</h3>
        <h3>
          <a href="mailto:contact@eaglegliderdesign.com">
            contact@eaglegliderdesign.com
          </a>
        </h3>
      </div>
      <div className="border"></div>
      <div className="social">
        <a href="http://www.facebook.fr"  target="_blank" rel="noopener noreferrer">
          {" "}
          <h3>
            <img
              src="./ressources/images/icon/facebook.png"
              alt="logo-facebook"
            />{" "}
            Facebook
          </h3>
        </a>
        <a href="http://www.twitter.fr"  target="_blank" rel="noopener noreferrer">
          {" "}
          <h3>
            <img
              src="./ressources/images/icon/twitter.png"
              alt="logo-twitter"
            />{" "}
            twitter
          </h3>
        </a>
        <a href="http://www.linkedin.fr"  target="_blank" rel="noopener noreferrer">
          {" "}
          <h3>
            <img
              src="./ressources/images/icon/twitter.png"
              alt="linkedIn"
            />{" "}
          linkedIn
          </h3>
        </a>
        <a href="http://www.instagram.fr"  target="_blank" rel="noopener noreferrer">
          {" "}
          <h3>
            <img
              src="./ressources/images/icon/twitter.png"
              alt="instagram"
            />{" "}
          instagram
          </h3>
        </a>
      </div>
      <div className="border"></div>
      <div className="legal-notice">
       <NavLink to="/legal-notice">Mention legales</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
