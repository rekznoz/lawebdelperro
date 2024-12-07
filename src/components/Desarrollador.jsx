import {useEffect, useRef, useState} from "react"
import {Link} from "react-router-dom"

/*
 * Componente que muestra un desarrollador
 * @param {Object} atributos - Atributos del componente
 * @param {string} atributos.nombre - Nombre del desarrollador
 * @param {string} atributos.imagen - Imagen del desarrollador
 * @param {string} atributos.descripcion - Descripción del desarrollador
 * @param {string} atributos.color - Color de la carta
 * @param {string} atributos.perfil - Perfil del desarrollador
 * @returns {JSX.Element} Componente
 */
export default function Desarrollador({nombre, imagen, descripcion, color, perfil}) {

    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.9,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <div
            className={`carta ${color} ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <img src={imagen} alt="Avatar"/>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <button className="boton-perfil-desarrolladores"><Link to={`/perfil/${perfil}`}>Ver perfil</Link></button>
        </div>
    )
}