import { Link, useLocation } from "react-router-dom";
// Importar imágenes
import inicio from '../assets/navbar/inicio.png';
import razas from '../assets/navbar/razas.png';
import nosotros from '../assets/navbar/nosotros.png';
import contacto from '../assets/navbar/contacto.png';
import login from '../assets/navbar/login.png';

const navItems = [
    { to: "/", img: inicio, alt: "Icono para inicio", label: "Ir a la página de inicio" },
    { to: "/razas", img: razas, alt: "Icono para razas", label: "Explorar razas de perros" },
    { to: "/nosotros", img: nosotros, alt: "Icono para nosotros", label: "Conocer más sobre nosotros" },
    { to: "/contacto", img: contacto, alt: "Icono para contacto", label: "Ir a la página de contacto" },
    { to: "/login", img: login, alt: "Icono para login", label: "Iniciar sesión o registrarse" },
];

export default function Navbar() {
    // Obtener la ruta actual para condicionarla despues
    const paginaActual = useLocation();

    return (
        <header className='contenedorHeader'>
            <h1 className='titulo'>La Web del Perro!</h1>
            <nav className='navbar'>
                <ul>
                    {navItems
                        // Filtro de la pagina actual
                        .filter(pagina => pagina.to !== paginaActual.pathname)
                        .map((pagina, index) => (
                            <li className='enlacesnav' key={index}>
                                <Link to={pagina.to} aria-label={pagina.label}>
                                    <img src={pagina.img} alt={pagina.alt} />
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}
