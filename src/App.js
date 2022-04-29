import { Route, Routes } from "react-router-dom";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";
import Home from "./Home";
import "./index.css";
import Aboutme from "./Aboutme";
import Products from "./Products";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs";
import Quiz from "./Quiz";
import Videos from "./Videos";
import Testimonials from "./Testimonials";
import Articles from "./Articles";
import Contactus from "./Contactus";


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/footer" element ={<Footer/>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
