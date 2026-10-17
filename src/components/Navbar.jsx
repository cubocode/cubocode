import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { scrollToSection } from '../constants';
import logo from '../assets/LogoCubo.png';
import Brand from './Brand';

const SECTIONS = ['inicio', 'servicios', 'clientes', 'nosotros', 'contacto'];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const { language, changeLanguage } = useLanguage();
    const t = translations[language];

    const labels = {
        inicio: t.navbar.home,
        servicios: t.navbar.services,
        clientes: t.navbar.clients,
        nosotros: t.navbar.about,
        contacto: t.navbar.contact
    };

    const goTo = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    // Detectar scroll y sección activa
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 24);

            const offset = y + window.innerHeight * 0.35;
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = document.getElementById(SECTIONS[i]);
                if (section && section.offsetTop <= offset) {
                    setActiveSection(SECTIONS[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const solid = isScrolled || isMenuOpen;

    return (
        <nav className={`navbar ${solid ? 'navbar-solid' : ''}`}>
            <div className="container navbar-inner">
                <button className="navbar-logo" onClick={() => goTo('inicio')} aria-label="Cubo">
                    <img src={logo} alt="" className="navbar-logo-img" />
                    <Brand className="navbar-brand" />
                </button>

                <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    {SECTIONS.map((id) => (
                        <button
                            key={id}
                            className={`nav-link ${activeSection === id ? 'active' : ''}`}
                            onClick={() => goTo(id)}
                        >
                            {labels[id]}
                        </button>
                    ))}

                    <div className="language-toggle" role="group" aria-label="Idioma / Language">
                        {['es', 'en'].map((lang) => (
                            <button
                                key={lang}
                                className={language === lang ? 'active' : ''}
                                onClick={() => changeLanguage(lang)}
                                aria-pressed={language === lang}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <button className="btn btn-primary navbar-cta" onClick={() => goTo('contacto')}>
                        {t.navbar.cta}
                    </button>
                </div>

                <button
                    className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menú"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
