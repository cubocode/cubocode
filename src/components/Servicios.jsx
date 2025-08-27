import React from 'react';
import './Servicios.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Servicios = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const servicios = t.services.items.map((item, index) => ({
        id: index + 1,
        titulo: item.title,
        descripcion: item.description,
        keywords: item.keywords,
        imagen: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ][index]
    }));

    const tecnologias = [
        { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { nombre: "Node.js", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { nombre: "Express", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { nombre: "PostgreSQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { nombre: "MongoDB", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { nombre: "Bootstrap", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { nombre: "GitHub", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { nombre: "HTML5", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ];

    return (
        <section className="servicios-section">
            <div className="servicios-container">
                <div className="servicios-header">
                    <h1 className="servicios-titulo">{t.services.title}</h1>
                    <p className="servicios-subtitulo">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="servicios-grid">
                    {servicios.map((servicio) => (
                        <div key={servicio.id} className="servicio-card">
                            <div className="servicio-imagen">
                                <img src={servicio.imagen} alt={servicio.titulo} />
                                <div className="servicio-overlay"></div>
                            </div>
                            <div className="servicio-contenido">
                                <h3 className="servicio-titulo">🔹 {servicio.titulo}</h3>
                                <p className="servicio-descripcion">{servicio.descripcion}</p>
                                <div className="servicio-keywords">
                                    {servicio.keywords.map((keyword, index) => (
                                        <span key={index} className="keyword-tag">{keyword}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tecnologias-section">
                    <h2 className="tecnologias-titulo">{t.services.technologies}</h2>
                    <div className="tecnologias-grid">
                        {tecnologias.map((tecnologia, index) => (
                            <div key={index} className="tecnologia-item">
                                <img 
                                    src={tecnologia.icono} 
                                    alt={tecnologia.nombre}
                                    className="tecnologia-icono"
                                />
                                <span className="tecnologia-nombre">{tecnologia.nombre}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;