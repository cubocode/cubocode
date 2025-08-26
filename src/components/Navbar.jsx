import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/LogoCubo.png';
import cubo from '../assets/Cubo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/servicios" className="nav-link" onClick={closeMenu}>Servicios</Link>
                    <Link to="/nosotros" className="nav-link" onClick={closeMenu}>Nosotros</Link>
                    <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;