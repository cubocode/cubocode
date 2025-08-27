import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import logo from '../assets/LogoCubo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { language, changeLanguage } = useLanguage();
    
    const t = translations[language];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Detectar scroll y ubicación
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const isHomePage = location.pathname === '/';
            
            if (isHomePage) {
                // En home, transparente hasta 100px, luego blanco
                setIsScrolled(scrollPosition > 100);
            } else {
                // En otras páginas, siempre blanco
                setIsScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar una vez al cargar

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Cubo Code" className="logo-image" />
                   {/* <img src={cubo} alt="Cubo Code" className="cubo-image" /> */}
                </div>
                
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </div>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>{t.navbar.home}</Link>
                    <Link to="/servicios" className="nav-link" onClick={closeMenu}>{t.navbar.services}</Link>
                    <Link to="/nosotros" className="nav-link" onClick={closeMenu}>{t.navbar.about}</Link>
                    <Link to="/contacto" className="nav-link" onClick={closeMenu}>{t.navbar.contact}</Link>
                    
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