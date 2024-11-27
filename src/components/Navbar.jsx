import {NavLink, useLocation} from "react-router-dom"
// Importar imágenes
import inicio from '../assets/navbar/inicio.png'
import razas from '../assets/navbar/razas.png'
import nosotros from '../assets/navbar/nosotros.png'
import contacto from '../assets/navbar/contacto.png'
import login from '../assets/navbar/login.png'
import logout from '../assets/navbar/logout.png'
import claro from '../assets/navbar/claro.png'
import oscuro from '../assets/navbar/oscuro.png'
import fav from '../assets/fav.png'

import {useContext, useState} from "react"
import {UsuarioC} from "../context/UsuarioC.jsx"
import {firebaseLogout} from "../config/FirebaseAuth.jsx";

// Array de objetos con las rutas y sus respectivas imágenes
// Se selecciona un Array porque permite una mejor ampliacion de rutas y manejo de las mismas
const navItems = [
    { to: "/", img: inicio, alt: "Inicio", label: "Ir a la página de inicio" },
    { to: "/razas", img: razas, alt: "Razas", label: "Explorar razas de perros" },
    { to: "/nosotros", img: nosotros, alt: "Nosotros", label: "Conocer más sobre nosotros" },
    { to: "/contacto", img: contacto, alt: "Contacto", label: "Ir a la página de contacto" },
    //{ to: "/login", img: login, alt: "Icono para login", label: "Iniciar sesión o registrarse" },
]

/*
    Componente Navbar
    - Muestra la barra de navegación
    - Contiene un botón para cambiar el color de la página
    - Recibe la ruta para condicionarla
 */

export default function Navbar() {

    // Obtener la ruta actual para condicionarla despues
    const paginaActual = useLocation()
    const [modo, setModo] = useState('claro')
    const [fade, setFade] = useState(false)  // Estado para controlar la animación fade
    const {usuario, setUsuario} = useContext(UsuarioC)

    const cambiarModo = () => {
        // Iniciar la animación fade
        setFade(true)
        setTimeout(() => {
            // Cambiar el modo después de la animación
            const nuevoModo = modo === 'claro' ? 'oscuro' : 'claro'
            setModo(nuevoModo)
            document.body.classList.toggle('dark-mode')
            // Finalizar la animación fade
            setFade(false)
        }, 300) // Tiempo que coincide con la duración del fade en CSS
    }

    const mostarLogin = () => {
        // Mostrar el modal de Login
        const modal = document.getElementById('loginForm')
        modal.style.display = 'block'
    }

    const desloguearUsuario = async () => {
        await firebaseLogout()
            .then(() => {
                setUsuario(null)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <header className='contenedorHeader'>
            <NavLink to={'/'} aria-label='Ir a la página de inicio'>
                <h1 className='titulo'>La Web del Perro!</h1>
            </NavLink>
            <nav className='navbar'>
                <ul>
                    {
                        /*
                           Mapeo de las rutas para mostrar los enlaces
                            - Se filtra la ruta actual para no mostrarla
                            - Se mapean las rutas restantes
                         */
                        navItems
                        // Filtro de la pagina actual
                        .filter(pagina => pagina.to !== paginaActual.pathname)
                        .map((pagina, index) => (
                            <li className='enlacesnav' key={index}>
                                <NavLink to={pagina.to} aria-label={pagina.label}>
                                    <img src={pagina.img} alt={pagina.alt}/>
                                </NavLink>
                                <span className="tooltip-text">{pagina.alt}</span>
                            </li>
                        ))
                    }
                    {/* Botón para ir a favoritos */}
                    {
                        usuario && (
                            <li className='enlacesnav'>
                                <NavLink to='/favoritos' aria-label='Ir a favoritos'>
                                    <img src={fav} alt='Favoritos'/>
                                </NavLink>
                                <span className="tooltip-text">Favoritos</span>
                            </li>
                        )
                    }
                    {/* Botón para el modal del Login */}
                    <li className='enlacesnav'>
                        {
                            usuario ? (
                                <img src={logout} alt='Logout' onClick={desloguearUsuario}/>
                            ) : (
                                <img src={login} alt='Login' onClick={mostarLogin}/>
                            )
                        }
                        <span className="tooltip-text">
                            {usuario ? 'Logout' : 'Login'}
                        </span>
                    </li>
                    {/* Botón para cambiar el modo */}
                    <li className={`enlacesnav ${fade ? 'fade' : ''}`} >
                        <img
                            src={modo === 'claro' ? oscuro : claro}
                            alt={`Cambiar a modo ${modo === 'claro' ? 'claro' : 'oscuro'}`}
                            onClick={cambiarModo}
                        />
                        <span className="tooltip-text">{modo === 'claro' ? 'Oscuro' : 'Claro'}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
