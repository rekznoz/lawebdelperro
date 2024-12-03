
import '../css/filtro.css'

export default function Filtro( atributos ) {

    const { grupos, filtro, setFiltro, filtroDefault } = atributos

    const mostrarFiltro = () => {
        const filtro = document.getElementById('contenedorOcultoFiltro')
        filtro.classList.add('open')
    }

    const cerrarFiltro = () => {
        const filtro = document.getElementById('contenedorOcultoFiltro')
        filtro.classList.remove('open')
    }

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
            <button className="botonesFiltros botonAbrirFiltro" onClick={mostrarFiltro}>Abrir Filtros</button>
            {
                filtro.nombre !== '' || filtro.grupo !== '' || filtro.popularidad !== 0 || filtro.altura !== 0 || filtro.peso !== 0 || filtro.vida !== 0
                    ? <button className="botonesFiltros limpiarFiltro" onClick={limpiarFiltro}>Limpiar Filtros</button>
                    : null
            }

            <div id="contenedorOcultoFiltro" className="contenedorFiltro">
                <div className="cuadroFiltro">
                    <span className="botonCerrarFiltro" onClick={cerrarFiltro}>&times;</span>
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
                        {
                            filtro.popularidad === 0
                                ? <p>Rango de Popularidad = Indefinido</p>
                                : <p>Rango de Popularidad = {filtro.popularidad}</p>
                        }
                        <input
                            type="range"
                            id='filtroPopularidad'
                            className='entradaFiltro'
                            min="0"
                            max="5"
                            value={filtro.popularidad}
                            onChange={handleFiltro}
                        />
                        {
                            filtro.altura === 0
                                ? <p>Rango de Altura = Indefinido</p>
                                : <p>Rango de Altura = {filtro.altura}&quot;</p>
                        }
                        <input
                            type="range"
                            id='filtroAltura'
                            className='entradaFiltro'
                            min="0"
                            max="30"
                            value={filtro.altura}
                            onChange={handleFiltro}
                        />
                        {
                            filtro.peso === 0
                                ? <p>Rango de Peso = Indefinido</p>
                                : <p>Rango de Peso = {filtro.peso} lbs</p>
                        }
                        <input
                            type="range"
                            id='filtroPeso'
                            className='entradaFiltro'
                            min="0"
                            max="175"
                            value={filtro.peso}
                            onChange={handleFiltro}
                        />
                        {
                            filtro.vida === 0
                                ? <p>Esperanza de vida = Indefinido</p>
                                : <p>Esperanza de vida = {filtro.vida} años</p>
                        }
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