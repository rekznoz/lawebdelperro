import Caracteristica from "./Caracteristica.jsx"
import '../css/caracteristicas.css'

/**
 * Componente que muestra un bloque de características
 * @param {Object} atributos - Atributos del componente
 * @param {Array} atributos.listaCaracteristicas - Lista de características
 * @returns {JSX.Element} Componente
 */
export default function BloqueCaracteristicas({ listaCaracteristicas }) {
    return (
        <section className="seccion-caracteristicas">
            <h1>CARACTERISTICAS</h1>
            <div className="contenedor-caracteristicas">
                {listaCaracteristicas.map((feature, index) => (
                    <Caracteristica
                        key={index}
                        titulo={feature.title}
                        icon={feature.icon}
                        descripcion={feature.descripcion}
                        delay={feature.delay}
                    />
                ))
                }
            </div>
        </section>
    )
}