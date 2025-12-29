import React, { useEffect, useRef } from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Configurar Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // No necesitamos seguir observando una vez que se anima
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todas las secciones excepto home
    const sections = ['servicios-section', 'nosotros-section', 'contacto-section'];
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <main>
          <section id="home-section">
            <Home />
          </section>
          <section id="servicios-section" className="slide-section">
            <Servicios />
          </section>
          <section id="nosotros-section" className="slide-section">
            <Nosotros />
          </section>
          <section id="contacto-section" className="slide-section">
            <Contacto />
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
