import React from "react";
import logoSvg from "../assets/img/pizza-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <img width="38" src={logoSvg} alt="Pizza logo" />
        </div>
        <div className="footer__info">
          <a href="https://t.me/netzx" target="_blank" rel="noopener noreferrer">
            by @NetZx
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
