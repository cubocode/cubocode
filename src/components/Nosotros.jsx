import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <section className="nosotros-section">
            <div className="nosotros-container">
                <div className="nosotros-header">
                    <h1 className="nosotros-titulo">¿Quiénes somos?</h1>
                </div>

                <div className="nosotros-content">
                    <div className="nosotros-texto">
                        <div className="nosotros-parrafo">
                            <p>
                                <strong>Cubo</strong> es un emprendimiento de desarrollo de software creado para transformar ideas en soluciones digitales innovadoras. Estamos especializados en el diseño y construcción de aplicaciones web y móviles, ofreciendo a nuestros clientes herramientas tecnológicas que se adaptan a sus necesidades y potencian sus objetivos de negocio.
                            </p>
                        </div>

                        <div className="nosotros-parrafo">
                            <p>
                                Nuestro equipo combina creatividad, conocimiento técnico y pasión por la tecnología para brindar soluciones eficientes, escalables y modernas. Creemos en el poder de la innovación como motor de cambio y trabajamos junto a cada cliente para acompañarlos en el camino hacia la transformación digital.
                            </p>
                        </div>

                        <div className="nosotros-parrafo">
                            <p>
                                En <strong>Cubo</strong> nos define la simplicidad, la calidad y la cercanía: desarrollamos software con una visión clara, cuidando cada detalle para que nuestros proyectos no solo funcionen, sino que también inspiren confianza y crecimiento.
                            </p>
                        </div>
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
                    <div className="valor-item">
                        <div className="valor-icono">🎯</div>
                        <h3>Simplicidad</h3>
                        <p>Desarrollamos soluciones claras y eficientes</p>
                    </div>
                    <div className="valor-item">
                        <div className="valor-icono">⭐</div>
                        <h3>Calidad</h3>
                        <p>Cuidamos cada detalle para resultados excepcionales</p>
                    </div>
                    <div className="valor-item">
                        <div className="valor-icono">🤝</div>
                        <h3>Cercanía</h3>
                        <p>Trabajamos junto a cada cliente de manera personalizada</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;        