import { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/NavBar';

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden">
      <Navbar onAboutClick={scrollToAbout} />
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
