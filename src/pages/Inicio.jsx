import '../css/inicio.css'

// import {} from '../config/FirebaseDB.jsx'

import '../css/carrusel.css'
import {imagenes_carrusel} from "../config/Imagenes_carrusel.jsx";
import {useState} from "react";

export default function Inicio() {

    const images = imagenes_carrusel;

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 3 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= images.length - 3 ? 0 : prevIndex + 1
        );
    };

    const visibleImages = images.slice(currentIndex, currentIndex + 3);

    return (
        <>
            <div id='area1'>
                <div className="carrusel">
                    <button className="boton_carrusel prev" onClick={goToPrevious}>
                        &#10094;
                    </button>
                    <div className="contenedor_imagenes_carrusel">
                        {visibleImages.map((image, index) => (
                            <div className="imagen_carrusel" key={index}>
                                <img src={image} alt={`Slide ${currentIndex + index + 1}`}/>
                            </div>
                        ))}
                    </div>
                    <button className="boton_carrusel next" onClick={goToNext}>
                        &#10095;
                    </button>
                </div>
            </div>
            <div id='area2'>
                <h1>oicini</h1>
                {/* Seccion de herramientas */}
            </div>
            <div id='area3'>
                <h1>Home</h1>
            </div>
        </>
    )
}