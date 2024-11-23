
import '../css/Filtro.css'

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
            <button className="botonesFiltros limpiarFiltro" onClick={limpiarFiltro}>Limpiar Filtros</button>

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
                        <p>Rango de Popularidad = {filtro.popularidad}</p>
                        <input
                            type="range"
                            id='filtroPopularidad'
                            className='entradaFiltro'
                            min="0"
                            max="5"
                            value={filtro.popularidad}
                            onChange={handleFiltro}
                        />
                        <p>Rango de Altura = {filtro.altura}</p>
                        <input
                            type="range"
                            id='filtroAltura'
                            className='entradaFiltro'
                            min="0"
                            max="15"
                            value={filtro.altura}
                            onChange={handleFiltro}
                        />
                        <p>Rango de Peso = {filtro.peso}</p>
                        <input
                            type="range"
                            id='filtroPeso'
                            className='entradaFiltro'
                            min="0"
                            max="15"
                            value={filtro.peso}
                            onChange={handleFiltro}
                        />
                        <p>Años de Vida = {filtro.vida}</p>
                        <input
                            type="range"
                            id='filtroVida'
                            className='entradaFiltro'
                            min="0"
                            max="15"
                            value={filtro.vida}
                            onChange={handleFiltro}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}