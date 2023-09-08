import React, { useContext } from "react";
import logo from "../images/logo-condev.png";
import { ContextGlobal } from "./utils/global.context";



const Footer = () => {
  const { providerValues} = useContext(ContextGlobal)
const {theme} = providerValues.state
  return (
    
    // <footer>
      <div className={theme} style={{ display: "flex", height: 150,width:'100vw', alignItems: "center",justifyContent:'center' }}>
        <h2>Powered by</h2>
        <img style={{ width: 200, height: 150 }} src={logo} alt="ConDev" />
      </div>
    // </footer>
    
    
  );
};

export default Footer;
