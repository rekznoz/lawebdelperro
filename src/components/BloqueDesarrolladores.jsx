
import '../css/desarrolladores.css'
import Desarrollador from "./Desarrollador.jsx";

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
                        />
                    ))
                }
            </div>
        </div>
    )
}