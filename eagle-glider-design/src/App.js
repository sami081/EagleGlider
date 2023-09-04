import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import Process from "./pages/Process";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";



const App = () => {
  return (
    <BrowserRouter>
       <Header/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
