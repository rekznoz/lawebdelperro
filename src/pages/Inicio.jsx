import '../css/inicio.css'

// import {} from '../config/FirebaseDB.jsx'
import Carrusel from "../components/Carrusel.jsx";
import '../css/caracteristicas.css'

import filtro from '../assets/inicio/filtro.png'
import responsivo from '../assets/inicio/responsivo.png'
import login from '../assets/inicio/login.png'
import favoritos from '../assets/inicio/favorito.png'
import Caracteristicas from "../components/Caracteristicas.jsx";
import {useLoaderData} from "react-router-dom";
import {useRazaContext} from "../context/RazasC.jsx";
import {Loading} from "../components/Loading.jsx";

export default function Inicio() {

    //const {razas} = useLoaderData()
    const {razas, loading, error} = useRazaContext();

    if (loading) {
        return <Loading/>
    }

    if (error) {
        throw new Response('Error al obtener las razas', {status: 404})
    }

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

    // array de imagenes de las razas
    const imagenes = razas.map(raza => raza["images"]["small"]["outdoors"])
        .sort(() => Math.random() - 0.5)

    return (
        <>
            {
                razas && razas.length > 0 &&
                <div id='area1'>
                    {/* Seccion de carrusel */}
                    <Carrusel imagenes={imagenes}/>
                </div>
            }
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