import '../css/bloque.css'
import {useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import fav from '../assets/fav.png'
import rfav from '../assets/rfav.png'
import {UsuarioC} from "../context/UsuarioC.jsx"
import {obtenerFavoritos, sincronizarFavoritos} from "../config/FirebaseDB.jsx"

export default function Bloque(atributos) {

    const {usuario} = useContext(UsuarioC)
    const [favoritos, setFavoritos] = useState([])
    const {mapaElementos} = atributos

    useEffect(() => {
        if (usuario) {
            obtenerFavoritos(usuario.uid).then(favs => setFavoritos(favs))
        }
    }, [usuario])

    const agregarRemoverFavoritos = (elemento) => {
        const idElemento = elemento["general"]["name"]
        const nuevosFavoritos = favoritos.includes(idElemento)
            ? favoritos.filter(fav => fav !== idElemento) // Elimina de favoritos
            : [...favoritos, idElemento] // Agrega a favoritos

        setFavoritos(nuevosFavoritos)

        if (usuario) {
            sincronizarFavoritos(usuario.uid, nuevosFavoritos) // Sincroniza con Firestore
        }
    }

    return (
        <>
            <ul className="contenedorRazas">
                {mapaElementos.map(elemento => (
                    <li className="cartaRazas" key={elemento["general"]["name"]}>
                        <div className="header-container">
                            {
                                usuario
                                    ? <img
                                        src={favoritos.includes(elemento["general"]["name"])
                                            ? fav // Icono de favorito activo
                                            : rfav // Icono de favorito inactivo
                                        }
                                        alt="Favorito"
                                        className="favorite-icon"
                                        onClick={() => agregarRemoverFavoritos(elemento)}
                                    />
                                    : null
                            }
                            <h3>{elemento["general"]["name"]}</h3>
                        </div>
                        <div className="image-container">
                            <Link to={`/razas/${elemento["id"]}`}>
                                <img className="imagenPerroRazas" src={elemento["images"]["small"]["outdoors"]}
                                     alt={elemento["general"]["name"]}/>
                                <div className="descripcion">{elemento["general"]["shortDescription"]}</div>
                            </Link>
                        </div>
                    </li>
                    ))}
            </ul>
        </>
    )
}