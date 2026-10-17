import React from 'react';
import './Nosotros.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Icon from './Icon';

const ICONOS_VALORES = ['target', 'award', 'users'];

const Nosotros = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="nosotros" className="section">
            <div className="container">
                <div className="nosotros-top">
                    <div className="nosotros-intro reveal">
                        <span className="eyebrow">{t.about.eyebrow}</span>
                        <h2 className="section-title">{t.about.title}</h2>
                        {t.about.paragraphs.map((paragraph, index) => (
                            <p key={index} className="nosotros-parrafo">{paragraph}</p>
                        ))}
                    </div>

                    <div className="nosotros-valores">
                        {t.about.values.map((value, index) => (
                            <div key={index} className="valor-item reveal">
                                <div className="valor-icono">
                                    <Icon name={ICONOS_VALORES[index]} size={20} />
                                </div>
                                <div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="proceso reveal">
                    <h3 className="proceso-titulo">{t.about.processTitle}</h3>
                    <ol className="proceso-lista">
                        {t.about.process.map((step, index) => (
                            <li key={index} className="proceso-paso">
                                <span className="proceso-numero">{String(index + 1).padStart(2, '0')}</span>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;
