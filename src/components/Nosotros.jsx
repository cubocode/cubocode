import React from 'react';
import './Nosotros.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Nosotros = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="nosotros-section">
            <div className="nosotros-container">
                <div className="nosotros-header">
                    <h1 className="nosotros-titulo">{t.about.title}</h1>
                </div>

                <div className="nosotros-content">
                    <div className="nosotros-texto">
                        {t.about.paragraphs.map((paragraph, index) => (
                            <div key={index} className="nosotros-parrafo">
                                <p>
                                    {paragraph.includes('Cubo') ? (
                                        <>
                                            {paragraph.split('Cubo').map((part, i) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i < paragraph.split('Cubo').length - 1 && <strong>Cubo</strong>}
                                                </React.Fragment>
                                            ))}
                                        </>
                                    ) : (
                                        paragraph
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="nosotros-imagen">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Equipo de desarrollo trabajando" 
                        />
                        <div className="nosotros-overlay"></div>
                    </div>
                </div>

                <div className="nosotros-valores">
                    {t.about.values.map((value, index) => (
                        <div key={index} className="valor-item">
                            <div className="valor-icono">{['🎯', '⭐', '🤝'][index]}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Nosotros;        