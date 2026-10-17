import React from 'react';
import './Contacto.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { CONTACT } from '../constants';
import Icon from './Icon';

const Contacto = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const items = [
        { icon: 'mapPin', label: t.contact.location, value: t.contact.locationText },
        { icon: 'mail', label: t.contact.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
        { icon: 'phone', label: t.contact.phone, value: CONTACT.phone, href: CONTACT.phoneHref }
    ];

    return (
        <section id="contacto" className="section section-soft">
            <div className="container">
                <div className="contacto-card reveal">
                    <div className="contacto-info">
                        <span className="eyebrow">{t.contact.eyebrow}</span>
                        <h2 className="section-title">{t.contact.title}</h2>
                        <p className="section-subtitle">{t.contact.subtitle}</p>

                        <ul className="contacto-lista">
                            {items.map((item) => (
                                <li key={item.icon} className="contacto-item">
                                    <div className="contacto-icono">
                                        <Icon name={item.icon} size={20} />
                                    </div>
                                    <div>
                                        <span className="contacto-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="contacto-valor contacto-link">{item.value}</a>
                                        ) : (
                                            <span className="contacto-valor">{item.value}</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={CONTACT.whatsapp}
                            className="btn btn-primary contacto-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.contact.whatsapp}
                            <Icon name="arrowRight" size={18} />
                        </a>
                    </div>

                    <div className="contacto-mapa">
                        <iframe
                            src="https://maps.google.com/maps?q=Concepci%C3%B3n,%20Tucum%C3%A1n,%20Argentina&z=13&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t.contact.mapTitle}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
