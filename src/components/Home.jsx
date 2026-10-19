import React from 'react';
import './Home.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { scrollToSection } from '../constants';
import Brand from './Brand';
import Icon from './Icon';

const Home = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const codeLines = [
        <><span className="c-key">const</span> proyecto = <span className="c-key">new</span> <span className="c-fn">Cubo</span>({'{'}</>,
        <>{'  '}cliente: <span className="c-str">'{t.home.code.client}'</span>,</>,
        <>{'  '}web: <span className="c-bool">true</span>,</>,
        <>{'  '}mobile: <span className="c-bool">true</span>,</>,
        <>{'  '}desktop: <span className="c-bool">true</span>,</>,
        <>{'  '}stack: [<span className="c-str">'React'</span>, <span className="c-str">'Node.js'</span>],</>,
        <>{'});'}</>,
        <>{' '}</>,
        <><span className="c-key">await</span> proyecto.<span className="c-fn">lanzar</span>();</>,
        <><span className="c-comment">{'// ✓ '}{t.home.code.comment}</span></>
    ];

    return (
        <section id="inicio" className="hero">
            <div className="hero-grid" aria-hidden="true"></div>
            <div className="hero-glow" aria-hidden="true"></div>

            <div className="container hero-inner">
                <div className="hero-text">
                    <Brand className="hero-brand" />
                    <span className="hero-eyebrow">{t.home.eyebrow}</span>
                    <h1 className="hero-title">{t.home.title}</h1>
                    <p className="hero-description">{t.home.description}</p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>
                            {t.home.primary}
                            <Icon name="arrowRight" size={18} />
                        </button>
                        <button className="btn btn-ghost" onClick={() => scrollToSection('servicios')}>
                            {t.home.secondary}
                        </button>
                    </div>

                    <ul className="hero-highlights">
                        {t.home.highlights.map((item) => (
                            <li key={item}>
                                <Icon name="check" size={16} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="code-window">
                        <div className="code-window-bar">
                            <span></span><span></span><span></span>
                            <em>proyecto.js</em>
                        </div>
                        <div className="code-window-body">
                            {codeLines.map((line, i) => (
                                <div key={i} className="code-line">{line}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
