import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Layout } from "./Components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import {ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      
      <Layout>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Layout>
      {/* <Footer /> */}
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
