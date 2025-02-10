import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Offers from './components/Offers';
import ShopGallery from './components/ShopGallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Services />
            <Offers />
            <ShopGallery />
            <Testimonials />
            <CTA />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;