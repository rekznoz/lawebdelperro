import '../css/bloque.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import fav from '../assets/fav.png'
import rfav from '../assets/rfav.png'

export default function Bloque(atributos) {

    const [favoritos, setFavoritos] = useState([])
    const {mapaElementos} = atributos

    const agregarRemoverFavoritos = (elemento) => {
        // Verificar si el elemento ya está en favoritos
        if (favoritos.includes(elemento["general"]["name"])) {
            // Remover el elemento de favoritos
            setFavoritos(favoritos.filter(fav => fav !== elemento["general"]["name"]))
        } else {
            // Agregar el elemento a favoritos
            setFavoritos([...favoritos, elemento["general"]["name"]])
        }
    }

    return (
        <>
            <ul className="contenedorRazas">
                {mapaElementos.map(elemento => (
                    <li className="cartaRazas" key={elemento["general"]["name"]}>
                        <div className="header-container">
                            <img
                                src={favoritos.includes(elemento["general"]["name"])
                                    ? fav // Icono de favorito activo
                                    : rfav // Icono de favorito inactivo
                                }
                                alt="Favorito"
                                className="favorite-icon"
                                onClick={() => agregarRemoverFavoritos(elemento)}
                            />
                            <h3>{elemento["general"]["name"]}</h3>
                        </div>
                        <div className="image-container">
                            <Link to={`/raza/${elemento["general"]["name"]}`}>
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