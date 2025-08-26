import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from './Footer';
import Contacto from "./Contacto";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Array de imágenes HD/4K para el carrusel
    const images = [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000); // Cambia cada 4 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    const scrollToServicios = () => {
        const serviciosSection = document.getElementById('servicios-section');
        if (serviciosSection) {
            serviciosSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                {/* Carrusel de fondo */}
                <div className="hero-carousel">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                backgroundImage: `url(${image})`
                            }}
                        />
                    ))}
                </div>
                
                {/* Overlay oscuro */}
                <div className="hero-overlay"></div>
                
                {/* Contenido centrado */}
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="title-main">&lt;CUBO/&gt;</span>
                        </h1>
                        <p className="hero-subtitle">Desarrollo de Aplicaciones Web</p>
                        <p className="hero-description">
                            Construyendo soluciones personalizadas para tu negocio
                        </p>
                        <button className="hero-button" onClick={scrollToServicios}>
                            CONOCENOS ▼
                        </button>
                    </div>
                </div>
                
                {/* Indicadores del carrusel */}
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>

            <div id="servicios-section">
                <Servicios />
            </div>
            <Nosotros />
            <Contacto />
        </div>
    )
}

export default Home;