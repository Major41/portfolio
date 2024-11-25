import './app.scss';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { HashLoader } from 'react-spinners';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <HashLoader color="#3498db" size={100} />
    </div>
  ) : (
    <>
      <section id="Home">
        <div>
          {showScrollToTop && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          )}
        </div>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
