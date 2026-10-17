import React from 'react';
import './Brand.css';

// Logotipo de texto: <Cubo/> con los colores de la marca
const Brand = ({ className = '' }) => (
    <span className={`brand ${className}`} aria-label="Cubo">
        <span className="brand-bracket">&lt;</span>
        <span className="brand-name">Cubo</span>
        <span className="brand-bracket">/&gt;</span>
    </span>
);

export default Brand;
