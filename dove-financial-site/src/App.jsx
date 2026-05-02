import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkshopLanding from "./pages/WorkshopLanding";

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

import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CashFlowRescue from "./pages/CashFlowRescue";
import ThankYouPage from "./pages/ThankYouPage";
import ToolsHub from "./pages/ToolsHub";

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
      <WorkshopLanding />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cash-flow-rescue" element={<CashFlowRescue />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/workshop" element={<WorkshopLanding />} /> 
        <Route path="/tools" element={<ToolsHub />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;