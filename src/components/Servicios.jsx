import React from 'react';
import './Servicios.css';

const Servicios = () => {
    const servicios = [
        {
            id: 1,
            titulo: "Desarrollo de Aplicaciones Web",
            descripcion: "Diseñamos y desarrollamos aplicaciones web modernas, escalables y seguras utilizando las últimas tecnologías del ecosistema JavaScript. Nos enfocamos en construir soluciones intuitivas y eficientes que se adaptan a las necesidades de cada cliente.",
            keywords: ["ReactJS", "Node.js", "Express", "Material-UI", "Bootstrap"],
            imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            titulo: "APIs y Back-End Escalable",
            descripcion: "Creamos APIs robustas y de alto rendimiento para conectar tus aplicaciones con bases de datos, servicios externos o sistemas internos. Garantizamos seguridad, rapidez y flexibilidad en cada implementación.",
            keywords: ["Node.js", "Express", "REST API", "JWT", "CORS", "Autenticación"],
            imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            titulo: "Gestión y Administración de Bases de Datos",
            descripcion: "Implementamos y administramos bases de datos relacionales y no relacionales, optimizando consultas y asegurando integridad, disponibilidad y seguridad de la información.",
            keywords: ["PostgreSQL", "MongoDB", "Sequelize", "Mongoose"],
            imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            titulo: "Sistemas de Facturación y Control de Stock",
            descripcion: "Desarrollamos sistemas personalizados para negocios, permitiendo la gestión de inventario, ventas y facturación de manera clara y eficiente. Integramos reportes en tiempo real para una mejor toma de decisiones.",
            keywords: ["Punto de Venta", "Caja", "Reportes", "Gestión Comercial"],
            imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            titulo: "Aplicaciones Móviles Híbridas",
            descripcion: "Creamos aplicaciones móviles multiplataforma para Android e iOS, utilizando tecnologías que permiten reutilizar código y reducir costos de desarrollo sin perder rendimiento ni calidad.",
            keywords: ["React Native", "Expo"],
            imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            titulo: "Automatización y Soluciones Personalizadas",
            descripcion: "Construimos software a medida para resolver problemas específicos de empresas y emprendimientos, desde sistemas de reservas hasta plataformas de gestión interna.",
            keywords: ["Node.js", "Express", "React", "APIs personalizadas"],
            imagen: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

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
                    <h1 className="servicios-titulo">Servicios</h1>
                    <p className="servicios-subtitulo">
                        Soluciones tecnológicas integrales para hacer crecer tu negocio
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
                    <h2 className="tecnologias-titulo">Tecnologías que Utilizamos</h2>
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