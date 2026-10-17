export const CONTACT = {
    email: 'cubo.code.dev@gmail.com',
    phone: '+54 3863 510790',
    phoneHref: 'tel:+543863510790',
    whatsapp: 'https://wa.me/543863510790?text=Hola!%20Quiero%20contratar%20un%20servicio%20de%20desarrollo%20personalizado%20para%20mi%20negocio.',
    instagram: 'https://www.instagram.com/cubo.code/',
    linkedin: 'https://linkedin.com/in/adiazcjc/'
};

// Scroll suave a una sección; el desplazamiento por la navbar lo maneja scroll-margin-top en CSS
export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
