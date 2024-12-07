
import '../css/desarrolladores.css'
import Desarrollador from "./Desarrollador.jsx"

/*
 * Componente que muestra una lista de desarrolladores
 * @param {Object} atributos - Atributos del componente
 * @param {Array} atributos.listaDesarrolladores - Lista de desarrolladores
 * @returns {JSX.Element} Componente
 */
export default function BloqueDesarrolladores({listaDesarrolladores}) {
    return (
        <div className="desarrolladores">
            <h1>Desarrolladores</h1>
            <div className="contenedor-desarolladores">
                {
                    listaDesarrolladores.map((desarrollador, index) => (
                        <Desarrollador
                            key={index}
                            nombre={desarrollador.nombre}
                            imagen={desarrollador.imagen}
                            descripcion={desarrollador.descripcion}
                            color={desarrollador.color}
                            perfil={desarrollador.perfil}
                        />
                    ))
                }
            </div>
        </div>
    )
}