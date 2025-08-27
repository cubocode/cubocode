import React from 'react';
import './Contacto.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Contacto = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-header">
                    <h1 className="contacto-titulo">{t.contact.title}</h1>
                </div>

                <div className="contacto-content">
                    <div className="contacto-info">
                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">{t.contact.location}</h3>
                            <p className="contacto-texto">
                                {t.contact.locationText}
                            </p>
                            <p className="contacto-codigo">{t.contact.postalCode}</p>
                        </div>

                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">{t.contact.email}</h3>
                            <a href="mailto:cubo.code.dev@gmail.com" className="contacto-link">
                                cubo.code.dev@gmail.com
                            </a>
                        </div>

                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">{t.contact.phone}</h3>
                            <a href="tel:+543863510790" className="contacto-link">
                                +54 3863 510790
                            </a>
                        </div>
                    </div>

                    <div className="contacto-mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d-65.6!3d-27.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423d9b3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sConcepci%C3%B3n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Cubo en Concepción, Tucumán"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;    