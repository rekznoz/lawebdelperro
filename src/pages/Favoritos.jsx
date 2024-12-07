import {useContext, useEffect, useState} from "react"
import {useRazaContext} from "../context/RazasC.jsx"
import Bloque from "../components/Bloque.jsx"
import {Loading} from "../components/Loading.jsx"
import Filtro from "../components/Filtro.jsx"
import Paginacion from "../components/Paginacion.jsx"
import {filtroRazas} from "./ListaRazas.jsx"
import {UsuarioC} from "../context/UsuarioC.jsx"
import {obtenerFavoritos} from "../config/FirebaseDB.jsx"
import '../css/favoritos.css'

const filtroDefault = {
    nombre: '',
    grupo: '',
    popularidad: 0,
    altura: 0,
    peso: 0,
    vida: 0
}

/**
 * Componente de Favoritos
 * @returns {JSX.Element}
 * @constructor
 */
export default function Favoritos() {

    //const {razas} = useLoaderData()
    const {razas, loading, error} = useRazaContext()
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState(filtroDefault)

    const objetosPorPagina = 6
    const pageNumbers = []

    // RAZAS FAVORITAS
    const [favoritos, setFavoritos] = useState([])
    const {usuario} = useContext(UsuarioC)

    useEffect(() => {
        if (usuario) {
            obtenerFavoritos(usuario.uid).then(favs => setFavoritos(favs))
        }
    }, [usuario])

    useEffect(() => {
        setPagina(1)
    }, [filtro])


    if (loading) {
        return <Loading/>
    }

    if (error) {
        throw new Response('Error al obtener las razas', {status: 404})
    }

    const razasFavoritas = razas.filter(raza => favoritos.includes(raza["general"]["name"]))

    if (razasFavoritas.length === 0) {
        return (
            <div id='area1'>
                <h1>No hay favoritos</h1>
            </div>
        )
    }

    // Filtro de Nombre
    const razasFiltradas = filtroRazas(razasFavoritas, filtro)

    const indiceUltimoObjeto = pagina * objetosPorPagina
    const indicePrimerObjeto = indiceUltimoObjeto - objetosPorPagina
    const razasActuales = razasFiltradas.slice(indicePrimerObjeto, indiceUltimoObjeto)

    const paginacion = (numeroPagina) => {
        setPagina(numeroPagina)
    }

    const totalPaginas = Math.ceil(razasFiltradas.length / objetosPorPagina)

    // Crear grupos de perros
    let grupos = []
    if (razas) {
        grupos = razas.map(raza => raza["general"]["group"])
        grupos = [...new Set(grupos)]
    }

    for (let i = Math.max(1, pagina - 2); i <= Math.min(totalPaginas, pagina + 2); i++) {
        pageNumbers.push(i)
    }

    if (!razasFiltradas) {
        throw new Response('Error al obtener la lista de Razas', {status: 404})
    }

    // Función para manejar el input de página
    const handlePageInput = (event) => {
        let page = parseInt(event.target.value)
        if (page >= 1 && page <= totalPaginas) {
            paginacion(page)
        }
    }

    return (
        <>
            {
                totalPaginas > 1 && (
                    <Filtro grupos={grupos} filtro={filtro} setFiltro={setFiltro} filtroDefault={filtroDefault}/>
                )
            }
            <div id='area1'>
                <h1>Lista de Favoritos</h1>
            </div>
            <div id='area2'>
                <Bloque mapaElementos={razasActuales}/>
            </div>
            <div id='area3'>
                {
                    totalPaginas > 1 && (
                        <Paginacion pagina={pagina} totalPaginas={totalPaginas} paginacion={paginacion}
                                    pageNumbers={pageNumbers} handlePageInput={handlePageInput}/>
                    )
                }
            </div>
        </>
    )

}