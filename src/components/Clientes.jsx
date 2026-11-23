import React from 'react';
import './Clientes.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import aydMinimarket from '../assets/aydminimarket.png';
import ct from '../assets/ct.png';
import flick from '../assets/flick.png';
import marher from '../assets/marher.png';
import delta from '../assets/delta.png';
import omega from '../assets/omega-logo.png';
import atiendo from '../assets/atiendo.svg';
import centro from '../assets/centro.svg';

// Logo de cada cliente, por nombre (el orden lo define translations.clients.items)
const LOGOS = {
    'Atiendo': atiendo,
    'Centro': centro,
    'Flick': flick,
    'Mar-Her Distribuidora': marher,
    'Fundación Delta': delta,
    'Omega Equipamientos': omega,
    'Dra. Cecilia Tarulli': ct,
    'A&D Minimarket': aydMinimarket
};

const Clientes = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="clientes" className="section section-soft">
            <div className="container">
                <div className="section-header reveal">
                    <span className="eyebrow">{t.clients.eyebrow}</span>
                    <h2 className="section-title">{t.clients.title}</h2>
                    <p className="section-subtitle">{t.clients.subtitle}</p>
                </div>

                <div className="clientes-grid">
                    {t.clients.items.map((cliente) => (
                        <article key={cliente.name} className="cliente-card reveal">
                            <div className="cliente-logo">
                                <img src={LOGOS[cliente.name]} alt={cliente.name} loading="lazy" />
                            </div>
                            <div className="cliente-info">
                                <span className="cliente-sector">{cliente.sector}</span>
                                <h3 className="cliente-nombre">{cliente.name}</h3>
                                <p className="cliente-descripcion">{cliente.description}</p>
                                <div className="cliente-tags">
                                    {cliente.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clientes;
