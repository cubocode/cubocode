import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <section className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-header">
                    <h1 className="contacto-titulo">Contacto</h1>
                </div>

                <div className="contacto-content">
                    <div className="contacto-info">
                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">Ubicación</h3>
                            <p className="contacto-texto">
                                Nos encontramos en Concepción, Tucumán Argentina.
                            </p>
                            <p className="contacto-codigo">Código Postal 4146</p>
                        </div>

                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">Mail</h3>
                            <a href="mailto:cubo.code.dev@gmail.com" className="contacto-link">
                                cubo.code.dev@gmail.com
                            </a>
                        </div>

                        <div className="contacto-item">
                            <h3 className="contacto-subtitulo">Teléfono</h3>
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