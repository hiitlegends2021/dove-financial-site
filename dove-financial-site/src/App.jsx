import React from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import Framework from "./Framework";
import Audience from "./Audience";
import WhyDove from "./WhyDove";
import Workshops from "./Workshops";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Framework />
      <Audience />
      <WhyDove />
      <Workshops />
      <Testimonials />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />

      
    </>
  );
}

export default App;