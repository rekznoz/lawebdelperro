import '../css/inicio.css'

import Carrusel from "../components/Carrusel.jsx"

import BloqueCaracteristicas from "../components/BloqueCaracteristicas.jsx"
import BloqueDesarrolladores from "../components/BloqueDesarrolladores.jsx"
import {useRazaContext} from "../context/RazasC.jsx"
import {Loading} from "../components/Loading.jsx"

import filtro from '../assets/inicio/filtro.png'
import responsivo from '../assets/inicio/responsivo.png'
import login from '../assets/inicio/login.png'
import favoritos from '../assets/inicio/favorito.png'

import cristian from '../assets/desarrolladores/cristian.png'
import gustavo from '../assets/desarrolladores/gustavo.png'
import rafael from '../assets/desarrolladores/rafael.png'
import serafin from '../assets/desarrolladores/serafin.png'
import sergio from '../assets/desarrolladores/sergio.png'
import ana from '../assets/desarrolladores/ana.png'

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
        delay: 0.3
    },
    {
        title: 'Login',
        icon: login,
        descripcion: 'Acceso a la plataforma mediante un sistema de autenticación seguro.',
        delay: 0.6
    },
    {
        title: 'Favoritos',
        icon: favoritos,
        descripcion: 'Guarda tus razas favoritas para tenerlas a la mano.',
        delay: 1
    }
]

const listaDesarrolladores = [
    {
        nombre: 'Rafael',
        imagen: rafael,
        descripcion: 'Hizo el frontend de la aplicacion y el diseño de la misma',
        color: "azul",
        perfil: 'A2vE7Aihw3TMTtw7JYxqQXSHzjK2'
    },
    {
        nombre: 'Gustavo',
        imagen: gustavo,
        descripcion: 'Jugó todo el dia Age of Empires y EA Sports FC, pero aportó en cuestion de diseño',
        color: "rojo",
        perfil: '6dpXodtGvwZSMJ3ADyC8jHEFv8y1'
    },
    {
        nombre: 'Cristian',
        imagen: cristian,
        descripcion: 'Es el mas trabajador del equipo y el que mas aporta en cuestion de esfuerzo',
        color: "verde",
        perfil: 'fugaNckZyRPiVoJYSbZfUd9CMav1'
    },
    {
        nombre: 'Sergio',
        imagen: sergio,
        descripcion: 'No paró de molestar con sus ruidos y quejas continuas',
        color: "naranja",
        perfil: 'FSPR77VGiWYQxbV2AfH99CzjfC32'
    },
    {
        nombre: 'Serafin',
        imagen: serafin,
        descripcion: 'Molesto al equipo con sus chistes malos y su falta de sueño',
        color: "amarillo",
        perfil: 'oa8GV71hIrfLJZI9PfCtvhdUbaq2'
    },
    {
        nombre: 'Ana',
        imagen: ana,
        descripcion: 'Es la que mas aporta en cuestion de organizacion y logistica',
        color: "morado",
        perfil: 'AAAAA'
    }
]

/**
 * Componente de la página de inicio
 * @returns {JSX.Element} Componente
 */
export default function Inicio() {

    //const {razas} = useLoaderData()
    const {razas, loading, error} = useRazaContext()

    if (loading) {
        return <Loading/>
    }

    if (error) {
        throw new Response('Error al obtener las razas', {status: 404})
    }

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
                <BloqueCaracteristicas listaCaracteristicas={listaCaracteristicas}/>
            </div>
            <div id='area3'>
                {/* Seccion de Desarrolladores */}
                <BloqueDesarrolladores listaDesarrolladores={listaDesarrolladores}/>
            </div>
        </>
    )
}