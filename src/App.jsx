import { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ExteriorGallery from './components/ExteriorGallery';
import SeatGallery from './components/SeatGallery';
import TVGallery from './components/TVGallery';
import RoofGallery from './components/RoofGallery';
import SidepadsGallery from './components/SidepadsGallery';
import DashboardGallery from './components/DashboardGallery';

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={
          <div className="relative overflow-x-hidden">
            <Navbar onAboutClick={scrollToAbout} />
            <div className="h-screen overflow-y-auto snap-y snap-mandatory">
              <div className="snap-start">
                <Hero />
              </div>
              <div className="snap-start">
                <About />
              </div>
              <div className="snap-start">
                <Gallery />
              </div>
              <div className="snap-start">
                <Contact />
              </div>
              <div className="snap-start">
                <Footer />
              </div>
            </div>
          </div>
        } />

        {/* Exterior gallery page route */}
        <Route path="/exterior" element={<ExteriorGallery />} />
        <Route path="/seat" element={<SeatGallery />} />
        <Route path="/tv" element={<TVGallery />} />
        <Route path="/roof" element={<RoofGallery />} />
        <Route path="/sidepads" element={<SidepadsGallery />} />
        <Route path="/dashboard" element={<DashboardGallery />} />
      </Routes>
    </div>
  );
}

export default App;
