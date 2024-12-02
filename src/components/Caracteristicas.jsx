import Caracteristica from "./BloqueCaracteristica.jsx";

export default function Caracteristicas({ listaCaracteristicas }) {
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