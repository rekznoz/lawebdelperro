import '../css/ListaRazas.css'
import {Link, useLoaderData} from "react-router-dom"
import {useState} from "react"

const filtroDefault = {
    nombre: '',
    grupo: '',
    popularidad: 0,
    altura: 0,
    peso: 0,
    vida: 0
}

export default function ListaRazas() {

    const {razas} = useLoaderData()
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState(filtroDefault)
    const objetosPorPagina = 6
    const pageNumbers = []

    // Filtro de Nombre
    const razasFiltradas = razas.filter(raza => {
        if (filtro.nombre === '') {
            return true
        }
        return raza.general.name.toLowerCase().includes(filtro.nombre.toLowerCase())
    }).filter(raza => {
        if (filtro.grupo === '') {
            return true
        }
        return raza.general.group === filtro.grupo
    }).filter(raza => {
        if (filtro.popularidad === 0) {
            return true
        }
        return raza.general.popularity === filtro.popularidad
    }).filter(raza => {
        if (filtro.altura === 0) {
            return true
        }
        return raza.general.height === filtro.altura
    }).filter(raza => {
        if (filtro.peso === 0) {
            return true
        }
        return raza.general.weight === filtro.peso
    }).filter(raza => {
        if (filtro.vida === 0) {
            return true
        }
        return raza.general.lifespan === filtro.vida
    })

    const indiceUltimoObjeto = pagina * objetosPorPagina
    const indicePrimerObjeto = indiceUltimoObjeto - objetosPorPagina
    const razasActuales = razasFiltradas.slice(indicePrimerObjeto, indiceUltimoObjeto)

    const paginacion = (numeroPagina) => {
        setPagina(numeroPagina)
    }

    const totalPaginas = Math.ceil(razasFiltradas.length / objetosPorPagina)

    // Crear grupos de perros
    let grupos = razas.map(raza => raza.general.group)
    grupos = [...new Set(grupos)]

    for (let i = Math.max(1, pagina - 2); i <= Math.min(totalPaginas, pagina + 2); i++) {
        pageNumbers.push(i)
    }

    if (!razasFiltradas) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    // Función para manejar el input de página
    const handlePageInput = (event) => {
        let page = parseInt(event.target.value)
        if (page >= 1 && page <= totalPaginas) {
            paginacion(page)
        }
    }

    const mostrarFiltro = () => {
        const filtro = document.getElementById('contenedorOcultoFiltro')
        filtro.classList.add('open')
    }

    const cerrarFiltro = () => {
        const filtro = document.getElementById('contenedorOcultoFiltro')
        filtro.classList.remove('open')
    }

    const handleFiltro = (event) => {
        if (event.target.id === 'filtroNombre') {
            setFiltro({
                ...filtro,
                nombre: event.target.value
            })
        }
        if (event.target.id === 'filtroGrupo') {
            setFiltro({
                ...filtro,
                grupo: event.target.value
            })
        }
        if (event.target.id === 'filtroPopularidad') {
            setFiltro({
                ...filtro,
                popularidad: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroAltura') {
            setFiltro({
                ...filtro,
                altura: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroPeso') {
            setFiltro({
                ...filtro,
                peso: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroVida') {
            setFiltro({
                ...filtro,
                vida: parseInt(event.target.value)
            })
        }
        setPagina(1)
    }

    const limpiarFiltro = () => {
        setFiltro(filtroDefault)
        setPagina(1)
    }

    return (
        <>
            <button className="botonesFiltros botonAbrirFiltro" onClick={mostrarFiltro}>Abrir Filtros</button>
            <button className="botonesFiltros limpiarFiltro" onClick={limpiarFiltro}>Limpiar Filtros</button>

            <div id="contenedorOcultoFiltro" className="contenedorFiltro">
                <div className="cuadroFiltro">
                    <span className="botonCerrarFiltro" onClick={cerrarFiltro}>&times;</span>
                    <h2>Filtros de Búsqueda</h2>
                    <div className="filtros">
                        <p>nombre:</p>
                        <input
                            id="filtroNombre"
                            className='entradaFiltro'
                            type="text"
                            value={filtro.nombre}
                            onChange={handleFiltro}
                            placeholder="Buscar..."
                        />
                        <p>grupo:</p>
                        <select
                            id="filtroGrupo"
                            className='entradaFiltro'
                            value={filtro.grupo}
                            onChange={handleFiltro}>
                            <option value="">Todos</option>
                            {grupos.map((grupo, index) => (
                                <option key={index} value={grupo}>{grupo}</option>
                            ))}
                        </select>
                        <p>Rango de Popularidad = {filtro.popularidad}</p>
                        <input type="range" id='filtroPopularidad' className='entradaFiltro' min="0" max="5"
                               value={filtro.popularidad} onChange={handleFiltro}/>
                        <p>Rango de Altura = {filtro.altura}</p>
                        <input type="range" id='filtroAltura' className='entradaFiltro' min="0" max="15"
                               value={filtro.altura} onChange={handleFiltro}/>
                        <p>Rango de Peso = {filtro.peso}</p>
                        <input type="range" id='filtroPeso' className='entradaFiltro' min="0" max="15"
                               value={filtro.peso} onChange={handleFiltro}/>
                        <p>Años de Vida = {filtro.vida}</p>
                        <input type="range" id='filtroVida' className='entradaFiltro' min="0" max="15"
                               value={filtro.vida} onChange={handleFiltro}/>
                    </div>
                </div>
            </div>

            <div id='area1'>
                <h1>Lista de Razas</h1>
            </div>
            <div id='area2'>
                <ul className="contenedorRazas">
                    {razasActuales.map(raza => (
                        <li className="cartaRazas" key={raza.general.name}>
                            <h3>{raza.general.name}</h3>
                            <div className="image-container">
                                <img src={raza.images.small.indoors} alt={raza.general.name}/>
                                <div className="description">{raza.general.shortDescription}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='area3'>
                <nav className="pagination">
                    <button
                        disabled={pagina === 1}
                        onClick={() => paginacion(pagina - 1)}
                    >
                        Previous
                    </button>
                    {pageNumbers.map(pageNumber => (
                        <button
                            key={pageNumber}
                            className={pagina === pageNumber ? "active" : ""}
                            onClick={() => paginacion(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        disabled={pagina === totalPaginas}
                        onClick={() => paginacion(pagina + 1)}
                    >
                        Next
                    </button>

                    {/* Input para ir a una página directamente */}
                    <div className="page-input">
                        <input
                            type="number"
                            value={pagina}
                            min="1"
                            max={totalPaginas}
                            onChange={handlePageInput}
                            aria-label="Go to page"
                        />
                        <span> / {totalPaginas}</span>
                    </div>

                </nav>
            </div>
        </>
    )
}

export async function getRazas() {
    try {
        const response = await fetch('https://registry.dog/api/v1')

        if (!response.ok) {
            throw new Error('Error al obtener las razas')
        }

        const data = await response.json()

        if (!data) {
            throw new Error('Error al obtener las razas')
        }

        // Ordenar alfabeticamente
        data.data.sort((a, b) => a.general.name.localeCompare(b.general.name))

        return {razas: data.data}
    } catch (error) {
        console.error(error)
        return {razas: null}
    }
}

// registry.dog/api/v1

/*

{
  "status": "success",
  "data": [
    {
      "general": {
        "name": "Chihuahua",
        "group": "Companion",
        "personalityTraits": [
          "Companionable",
          "Dignified",
          "Lively"
        ],
        "shortDescription": "The Chihuahua is a tiny, vivacious companion with a huge personality and captivating charm.",
        "longDescription": "The Chihuahua is a tiny dog with a huge personality, making it an ideal companion for those who appreciate a vivacious and captivating pet. Weighing around 5 pounds and standing at 7 inches tall, this elegant breed is renowned for its expressive, luminous eyes and characteristic 'apple' head. Chihuahuas are highly loyal and exude a big-dog attitude despite their small size, often displaying a protective instinct that belies their stature.\n They are adaptable and thrive in city environments, enjoying quality time on their owner's lap. Known for their smooth, straight coats in various colors and patterns, Chihuahuas require minimal grooming but do need training to prevent them from becoming overly dominant. While they are playful and affectionate with their families, their small size makes them unsuitable for rough play with children.\n Highly vocal and alert, Chihuahuas make excellent watchdogs, bringing both joy and companionship to any home. With a lifespan of up to 15 years, these dogs are a long-term commitment, offering endless love and amusement to those who embrace their spirited nature.",
        "popularity": 5,
        "height": 7,
        "weight": 5,
        "lifespan": 15
      },
      "physical": {
        "size": 1,
        "lifespan": 4,
        "droolingFrequency": 1,
        "coatStyle": "Straight",
        "coatTexture": "Smooth",
        "coatLength": 2,
        "doubleCoat": false
      },
      "behavior": {
        "familyAffection": 4,
        "childFriendly": 1,
        "dogSociability": 3,
        "friendlinessToStrangers": 2,
        "playfulness": 4,
        "protectiveInstincts": 4,
        "adaptability": 4,
        "barkingFrequency": 5
      },
      "care": {
        "sheddingAmount": 2,
        "groomingFrequency": 1,
        "exerciseNeeds": 4,
        "mentalStimulationNeeds": 3,
        "trainingDifficulty": 3
      },
      "images": {
        "small": {
          "indoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/indoors.jpg",
          "outdoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/outdoors.jpg",
          "studio": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/studio.jpg"
        },
        "large": {
          "indoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/indoors.png",
          "outdoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/outdoors.png",
          "studio": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/studio.png"
        }
      },
      "id": "chihuahua"
    },
}

*/