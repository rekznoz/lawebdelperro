import {useEffect, useState} from "react"
import Filtro from "../components/Filtro.jsx"
import Paginacion from "../components/Paginacion.jsx"
import Bloque from "../components/Bloque.jsx"
import {useRazaContext} from "../context/RazasC.jsx"
import {Loading} from "../components/Loading.jsx"

import '../css/listaRazas.css'

const filtroDefault = {
    nombre: '',
    grupo: '',
    popularidad: 0,
    altura: 0,
    peso: 0,
    vida: 0
}

export function filtroRazas(razas, filtro) {
    if (!razas) {
        return []
    }
    return razas.filter(raza => {
        if (filtro["nombre"] === '') {
            return true
        }
        return raza["general"]["name"].toLowerCase().includes(filtro["nombre"].toLowerCase())
    }).filter(raza => {
        if (filtro["grupo"] === '') {
            return true
        }
        return raza["general"]["group"] === filtro["grupo"]
    }).filter(raza => {
        if (filtro["popularidad"] === 0) {
            return true
        }
        return raza["general"]["popularity"] === filtro["popularidad"]
    }).filter(raza => {
        if (filtro["altura"] === 0) {
            return true
        }
        return raza["general"]["height"] === filtro["altura"]
    }).filter(raza => {
        if (filtro["peso"] === 0) {
            return true
        }
        return raza["general"]["weight"] === filtro["peso"]
    }).filter(raza => {
        if (filtro["vida"] === 0) {
            return true
        }
        return raza["general"]["lifespan"] === filtro["vida"]
    })
}

export default function ListaRazas() {

    //const {razas} = useLoaderData()
    const {razas, loading, error} = useRazaContext()
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState(filtroDefault)

    const objetosPorPagina = 6
    const pageNumbers = []

    // Filtro de Nombre
    const razasFiltradas = filtroRazas(razas, filtro)

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

    useEffect(() => {
        setPagina(1)
    }, [filtro])

    if (loading) {
        return <Loading/>
    }

    if (error) {
        throw new Response('Error al obtener las razas', {status: 404})
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
            <Filtro grupos={grupos} filtro={filtro} setFiltro={setFiltro} filtroDefault={filtroDefault}/>

            <div id='area1'>
                <h1>Lista de Razas</h1>
            </div>
            <div id='area2'>
                <Bloque mapaElementos={razasActuales}/>
            </div>
            <div id='area3'>
                <Paginacion pagina={pagina} totalPaginas={totalPaginas} paginacion={paginacion}
                            pageNumbers={pageNumbers} handlePageInput={handlePageInput}/>
            </div>
        </>
    )
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