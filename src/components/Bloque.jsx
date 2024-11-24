import '../css/bloque.css'

export default function Bloque(atributos) {

    const {mapaElementos} = atributos

    return (
        <>
            <ul className="contenedorRazas">
                {mapaElementos.map(elemento => (
                    <li className="cartaRazas" key={elemento["general"].name}>
                        <h3>{elemento["general"].name}</h3>
                        <div className="image-container">
                            <img src={elemento.images.small.indoors} alt={elemento["general"].name}/>
                            <div className="descripcion">{elemento["general"].shortDescription}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}