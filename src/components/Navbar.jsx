import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import logo from '../assets/LogoCubo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home-section');
    const { language, changeLanguage } = useLanguage();
    
    const t = translations[language];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Función para hacer scroll suave a una sección con efecto slide
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80; // Altura aproximada de la navbar
            const sectionPosition = section.offsetTop - navbarHeight;
            
            // Agregar clase visible antes de hacer scroll para activar animación
            section.classList.add('visible');
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    // Detectar scroll y sección activa
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbarHeight = 80;
            
            // Cambiar estilo de navbar según scroll
            setIsScrolled(scrollPosition > 100);

            // Detectar qué sección está visible
            const sections = ['home-section', 'servicios-section', 'nosotros-section', 'contacto-section'];
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop - navbarHeight - 100; // Offset para activar antes
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar una vez al cargar

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('home-section')} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="Cubo Code" className="logo-image" />
                   {/* <img src={cubo} alt="Cubo Code" className="cubo-image" /> */}
                </div>
                
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </div>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <button 
                        className={`nav-link ${activeSection === 'home-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection('home-section')}
                    >
                        {t.navbar.home}
                    </button>
                    <button 
                        className={`nav-link ${activeSection === 'servicios-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection('servicios-section')}
                    >
                        {t.navbar.services}
                    </button>
                    <button 
                        className={`nav-link ${activeSection === 'nosotros-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection('nosotros-section')}
                    >
                        {t.navbar.about}
                    </button>
                    <button 
                        className={`nav-link ${activeSection === 'contacto-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection('contacto-section')}
                    >
                        {t.navbar.contact}
                    </button>
                    
                    {/* Selector de idioma */}
                    <div className="language-selector">
                        <button 
                            className={`flag-button ${language === 'es' ? 'active' : ''}`}
                            onClick={() => changeLanguage('es')}
                            title="Español"
                        >
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                <rect width="24" height="4.5" fill="#AA151B"/>
                                <rect y="4.5" width="24" height="9" fill="#F1BF00"/>
                                <rect y="13.5" width="24" height="4.5" fill="#AA151B"/>
                            </svg>
                        </button>
                        <button 
                            className={`flag-button ${language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                            title="English"
                        >
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                <rect width="24" height="18" fill="#B22234"/>
                                <rect y="1.38" width="24" height="1.38" fill="white"/>
                                <rect y="4.15" width="24" height="1.38" fill="white"/>
                                <rect y="6.92" width="24" height="1.38" fill="white"/>
                                <rect y="9.69" width="24" height="1.38" fill="white"/>
                                <rect y="12.46" width="24" height="1.38" fill="white"/>
                                <rect y="15.23" width="24" height="1.38" fill="white"/>
                                <rect width="9.6" height="9.69" fill="#3C3B6E"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;