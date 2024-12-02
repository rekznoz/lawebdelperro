import '../css/inicio.css'

// import {} from '../config/FirebaseDB.jsx'

import '../css/carrusel.css'
import {imagenes_carrusel} from "../config/Imagenes_carrusel.jsx";
import {useState} from "react";

export default function Inicio() {

    const images = imagenes_carrusel;

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div id='area1'>
                <div className="carousel">
                    <button className="carousel-button prev" onClick={goToPrevious}>
                        &#10094;
                    </button>
                    <div className="carousel-image">
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>
                    </div>
                    <button className="carousel-button next" onClick={goToNext}>
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