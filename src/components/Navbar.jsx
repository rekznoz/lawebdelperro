import {Link, NavLink, useLocation} from "react-router-dom"
// Importar imágenes
import inicio from '../assets/navbar/inicio.png'
import razas from '../assets/navbar/razas.png'
import nosotros from '../assets/navbar/nosotros.png'
import contacto from '../assets/navbar/contacto.png'
import login from '../assets/navbar/login.png'
import claro from '../assets/navbar/claro.png'
import oscuro from '../assets/navbar/oscuro.png'
import {useState} from "react"

const navItems = [
    { to: "/", img: inicio, alt: "Icono para inicio", label: "Ir a la página de inicio" },
    { to: "/razas", img: razas, alt: "Icono para razas", label: "Explorar razas de perros" },
    { to: "/nosotros", img: nosotros, alt: "Icono para nosotros", label: "Conocer más sobre nosotros" },
    { to: "/contacto", img: contacto, alt: "Icono para contacto", label: "Ir a la página de contacto" },
    { to: "/login", img: login, alt: "Icono para login", label: "Iniciar sesión o registrarse" },
]

export default function Navbar() {
    // Obtener la ruta actual para condicionarla despues
    const paginaActual = useLocation()
    const [modo, setModo] = useState('claro')
    const [fade, setFade] = useState(false);  // Estado para controlar la animación fade

    const cambiarModo = () => {
        // Iniciar la animación fade
        setFade(true);
        setTimeout(() => {
            // Cambiar el modo después de la animación
            const nuevoModo = modo === 'claro' ? 'oscuro' : 'claro';
            setModo(nuevoModo);
            document.body.classList.toggle('dark-mode');
            // Finalizar la animación fade
            setFade(false);
        }, 300); // Tiempo que coincide con la duración del fade en CSS
    };

    return (
        <header className='contenedorHeader'>
            <NavLink to={'/'} aria-label='Ir a la página de inicio'>
                <h1 className='titulo'>La Web del Perro!</h1>
            </NavLink>
            <nav className='navbar'>
                <ul>
                    {navItems
                        // Filtro de la pagina actual
                        .filter(pagina => pagina.to !== paginaActual.pathname)
                        .map((pagina, index) => (
                            <li className='enlacesnav' key={index}>
                                <NavLink to={pagina.to} aria-label={pagina.label}>
                                    <img src={pagina.img} alt={pagina.alt} />
                                </NavLink>
                            </li>
                        ))}
                    <li className={`enlacenav ${fade ? 'fade' : ''}`}>
                        <img
                            src={modo === 'claro' ? oscuro : claro}
                            alt='Icono para cambiar modo'
                            onClick={cambiarModo}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
