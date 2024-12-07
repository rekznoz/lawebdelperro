import {useEffect, useState} from "react"
import '../css/galeria.css'

export default function Galeria({ imagenes }) {

    const [ImagenSeleccionada, setImagenSeleccionada] = useState(null)

    const handleImagenSeleccionada = (imagen) => {
        setImagenSeleccionada(imagen)
    }

    const handleCerrarImagen = () => {
        setImagenSeleccionada(null)
    }

    useEffect(() => {
        if (ImagenSeleccionada) {
            // Bloquear el scroll del body
            document.body.style.overflow = 'hidden'
        } else {
            // Restaurar el scroll cuando el modal se cierra
            document.body.style.overflow = 'auto'
        }

        // Limpiar el estilo cuando el componente se desmonte
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [ImagenSeleccionada])

    return (
        <div className="seccion-galeria">
            <h3>Imágenes</h3>

            <div className="galeria-raza">
                {/* Mostrar miniaturas de imágenes */}
                {imagenes.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        onClick={() => handleImagenSeleccionada(image)}
                        className="muestra"
                    />
                ))}
            </div>

            {/* Mostrar la imagen grande si se ha seleccionado */}
            {ImagenSeleccionada && (
                <div className="modal-raza" onClick={handleCerrarImagen}>
                    <div className="modal-contenido-raza">
                        <img src={ImagenSeleccionada} alt="Selected" className="imagen-grande"/>
                    </div>
                </div>
            )}
        </div>
    )
}