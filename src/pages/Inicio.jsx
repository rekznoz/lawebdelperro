import '../css/inicio.css'

// import {} from '../config/FirebaseDB.jsx'
import Carrusel from "../components/Carrusel.jsx";
import '../css/caracteristicas.css'

import filtro from '../assets/inicio/filtro.png'
import responsivo from '../assets/inicio/responsivo.png'
import login from '../assets/inicio/login.png'
import favoritos from '../assets/inicio/favorito.png'
import Caracteristica from "../components/BloqueCaracteristica.jsx";
import Caracteristicas from "../components/Caracteristicas.jsx";

export default function Inicio() {

    const listaCaracteristicas = [
        {
            title: 'Filtro',
            icon: filtro,
            descripcion: 'Busqueda personalizada de razas por caracteristiacas como por ejemplo: tamaño, peso, esperanza de vida, etc.',
            delay: 0
        },
        {
            title: 'Diseño',
            icon: responsivo,
            descripcion: 'Interfaz amigable y responsiva, adaptada a cualquier dispositivo.',
            delay: 0.5
        },
        {
            title: 'Login',
            icon: login,
            descripcion: 'Acceso a la plataforma mediante un sistema de autenticación seguro.',
            delay: 1
        },
        {
            title: 'Favoritos',
            icon: favoritos,
            descripcion: 'Guarda tus razas favoritas para tenerlas a la mano.',
            delay: 1.5
        }
    ];

    return (
        <>
            <div id='area1'>
                <Carrusel/>
            </div>
            <div id='area2'>
                {/* Seccion de herramientas */}
                <Caracteristicas listaCaracteristicas={listaCaracteristicas}/>
            </div>
            <div id='area3'>
                <h1>Home</h1>
            </div>
        </>
    )
}