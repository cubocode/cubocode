import React from 'react';
import './Servicios.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Icon from './Icon';

const ICONOS = ['code', 'server', 'database', 'cart', 'smartphone', 'zap'];

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const tecnologias = [
    { nombre: 'JavaScript', icono: `${DEVICON}/javascript/javascript-original.svg` },
    { nombre: 'React', icono: `${DEVICON}/react/react-original.svg` },
    { nombre: 'React Native', icono: `${DEVICON}/react/react-original.svg` },
    { nombre: 'Node.js', icono: `${DEVICON}/nodejs/nodejs-original.svg` },
    { nombre: 'Express', icono: `${DEVICON}/express/express-original.svg` },
    { nombre: 'PostgreSQL', icono: `${DEVICON}/postgresql/postgresql-original.svg` },
    { nombre: 'MongoDB', icono: `${DEVICON}/mongodb/mongodb-original.svg` },
    { nombre: 'Bootstrap', icono: `${DEVICON}/bootstrap/bootstrap-original.svg` },
    { nombre: 'Git', icono: `${DEVICON}/git/git-original.svg` },
    { nombre: 'GitHub', icono: `${DEVICON}/github/github-original.svg` },
    { nombre: 'HTML5', icono: `${DEVICON}/html5/html5-original.svg` }
];

const Servicios = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="servicios" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="eyebrow">{t.services.eyebrow}</span>
                    <h2 className="section-title">{t.services.title}</h2>
                    <p className="section-subtitle">{t.services.subtitle}</p>
                </div>

                <div className="servicios-grid">
                    {t.services.items.map((servicio, index) => (
                        <article key={index} className="servicio-card reveal">
                            <div className="servicio-icono">
                                <Icon name={ICONOS[index]} size={22} />
                            </div>
                            <h3 className="servicio-titulo">{servicio.title}</h3>
                            <p className="servicio-descripcion">{servicio.description}</p>
                            <div className="servicio-tags">
                                {servicio.keywords.map((keyword) => (
                                    <span key={keyword} className="tag">{keyword}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="tecnologias reveal">
                    <h3 className="tecnologias-titulo">{t.services.technologies}</h3>
                    <div className="tecnologias-lista">
                        {tecnologias.map((tecnologia) => (
                            <div key={tecnologia.nombre} className="tecnologia-item" title={tecnologia.nombre}>
                                <img src={tecnologia.icono} alt="" loading="lazy" />
                                <span>{tecnologia.nombre}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
