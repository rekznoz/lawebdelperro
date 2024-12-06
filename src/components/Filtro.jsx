import '../css/filtro.css'
import {useState} from "react";

function renderFiltroTexto(valor, texto, unidad = '') {
    return valor === 0 ? `${texto} = Indefinido` : `${texto} = ${valor}${unidad}`
}

export default function Filtro(atributos) {

    const {grupos, filtro, setFiltro, filtroDefault} = atributos
    const [isOpen, setIsOpen] = useState(false);
    
    const limpiarFiltro = () => {
        setFiltro(filtroDefault)
    }

    const handleFiltro = (event) => {
        if (event.target.id === 'filtroNombre') {
            setFiltro({
                ...filtro,
                nombre: event.target.value
            })
        }
        if (event.target.id === 'filtroGrupo') {
            setFiltro({
                ...filtro,
                grupo: event.target.value
            })
        }
        if (event.target.id === 'filtroPopularidad') {
            setFiltro({
                ...filtro,
                popularidad: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroAltura') {
            setFiltro({
                ...filtro,
                altura: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroPeso') {
            setFiltro({
                ...filtro,
                peso: parseInt(event.target.value)
            })
        }
        if (event.target.id === 'filtroVida') {
            setFiltro({
                ...filtro,
                vida: parseInt(event.target.value)
            })
        }
    }

    return (
        <>
            {/* Contenedor de Filtros */}
            <div className={`contenedorFiltro ${isOpen ? "open" : ""}`}>
                {/* Botón flotante */}
                <div className="botones-filtros">
                    <button
                        className="abrirFiltro"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "<" : ">"}
                        <span className="texto-lado-boton">Abrir Panel</span>
                    </button>
                    { /* Texto al lado del boton */}

                    {/* Botón para limpiar filtros si se estan usando */}

                    {
                        filtro.nombre !== '' || filtro.grupo !== '' || filtro.popularidad !== 0 || filtro.altura !== 0 || filtro.peso !== 0 || filtro.vida !== 0
                            ? <button
                                className="limpiarFiltro"
                                onClick={limpiarFiltro}
                            >
                                X
                                <span className="texto-lado-boton">Limpiar Filtros</span>
                            </button> : null
                    }

                </div>
                <div className="cuadroFiltro">
                    <h2>Filtros de Búsqueda</h2>
                    <div className="filtros">
                        <p>Nombre:</p>
                        <input
                            id="filtroNombre"
                            className='entradaFiltro'
                            type="text"
                            value={filtro.nombre}
                            onChange={handleFiltro}
                            placeholder="Buscar..."
                        />
                        <p>Grupo:</p>
                        <select
                            id="filtroGrupo"
                            className='entradaFiltro'
                            value={filtro.grupo}
                            onChange={handleFiltro}>
                            <option value="">Todos</option>
                            {grupos.map((grupo, index) => (
                                <option key={index} value={grupo}>{grupo}</option>
                            ))}
                        </select>
                        <p>{renderFiltroTexto(filtro.popularidad, 'Rango de Popularidad')}</p>
                        <input
                            type="range"
                            id='filtroPopularidad'
                            className='entradaFiltro'
                            min="0"
                            max="5"
                            value={filtro.popularidad}
                            onChange={handleFiltro}
                        />
                        <p>{renderFiltroTexto(filtro.altura, 'Rango de Altura', '"')}</p>
                        <input
                            type="range"
                            id='filtroAltura'
                            className='entradaFiltro'
                            min="0"
                            max="30"
                            value={filtro.altura}
                            onChange={handleFiltro}
                        />
                        <p>{renderFiltroTexto(filtro.peso, 'Rango de Peso', ' lbs')}</p>
                        <input
                            type="range"
                            id='filtroPeso'
                            className='entradaFiltro'
                            min="0"
                            max="175"
                            value={filtro.peso}
                            onChange={handleFiltro}
                        />
                        <p>{renderFiltroTexto(filtro.vida, 'Rango de Vida', ' años')}</p>
                        <input
                            type="range"
                            id='filtroVida'
                            className='entradaFiltro'
                            min="0"
                            max="17"
                            value={filtro.vida}
                            onChange={handleFiltro}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}