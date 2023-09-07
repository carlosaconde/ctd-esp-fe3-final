import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import themeContext, { theme as appTheme } from "./context/Context";
import { Layout } from "./Components/Layout";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

function App() {
  const [theme, setTheme] = useState(appTheme.light);

  const handleTheme = () => {
    theme === appTheme.light
      ? setTheme(appTheme.dark)
      : setTheme(appTheme.light);
  };

  return (
    <themeContext.Provider value={{ theme, handleTheme }}>
      <Layout>
        <Navbar />
        
      </Layout>
      
    </themeContext.Provider>
  );
}

export default App;
