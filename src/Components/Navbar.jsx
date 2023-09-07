import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import Favs from "../Routes/Favs";
import Contact from "../Routes/Contact";
import dental from "../images/logo-dental-care-transformed.png";
import themeContext from "../context/Context";
import Footer from "./Footer";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme,handleTheme}=useContext(themeContext)
  return (
    <BrowserRouter>
    <div style={{height:'100vh'}}>
      <div style={{ display: "flex" }}>
        <Link to="/home">
          <img style={{ width: 150 }} src={dental} alt="dental care logo" />
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">Home</Link>
          <Link to="/favs">Favoritos</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        <button onClick={handleTheme} >Change theme</button>
      </div>
      
     
      <Footer/>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
