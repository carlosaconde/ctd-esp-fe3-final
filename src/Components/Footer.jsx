import React from "react";
import logo from "../images/logo-condev.png";
const Footer = () => {
  return (
    
    <footer>
      <div style={{ display: "flex", height: 150, alignItems: "center" }}>
        <h2>Powered by</h2>
        <img style={{ width: 200, height: 150 }} src={logo} alt="ConDev" />
      </div>
    </footer>
    
    
  );
};

export default Footer;
