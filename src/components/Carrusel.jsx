import {useWindowSize} from "../hooks/UseWindowSize.jsx";
import {useEffect, useState} from "react";
import '../css/carrusel.css'

export default function Carrusel({imagenes}) {

    let totalImagenes = 3

    const size = useWindowSize();
    const [indiceActual, setIndiceActual] = useState(0)

    useEffect(() => {
        setIndiceActual(0)
    }, [size.width]);

    if (size.width < 600) {
        totalImagenes = 1
    } else if (size.width < 900) {
        totalImagenes = 2
    } else {
        totalImagenes = 3
    }

    const anteriorImagen = () => {
        setIndiceActual((indicePrevio) =>
            indicePrevio === 0 ? imagenes.length - totalImagenes : indicePrevio - 1
        )
    }

    const siguienteImagen = () => {
        setIndiceActual((indicePrevio) =>
            indicePrevio >= imagenes.length - totalImagenes ? 0 : indicePrevio + 1
        )
    }

    return (
        <div className="carrusel">
            <button className="boton_carrusel anterior" onClick={anteriorImagen}>
                &#10094;
            </button>
            <div className="contenedor_imagenes_carrusel"
                 style={{
                     transform: `translateX(-${indiceActual * (100 / totalImagenes)}%)`,
                 }}
            >
                {imagenes.map((imagen, index) => (
                    <div className="imagen_carrusel" key={index}>
                        <img className="animacion-brillo" src={imagen} alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </div>
            <button className="boton_carrusel siguiente" onClick={siguienteImagen}>
                &#10095;
            </button>
        </div>
    )
}