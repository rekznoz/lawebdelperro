import "../css/paginacion.css"

/*
 * Componente que muestra la paginación
 * @param {Object} atributos - Atributos del componente
 * @param {number} atributos.pagina - Página actual
 * @param {number} atributos.totalPaginas - Total de páginas
 * @param {Function} atributos.paginacion - Función para cambiar de página
 * @param {Array} atributos.pageNumbers - Números de página
 * @param {Function} atributos.handlePageInput - Función para cambiar de página
 * @returns {JSX.Element} Componente
 */
export default function Paginacion(atributos) {

    const {pagina, totalPaginas, paginacion, pageNumbers, handlePageInput} = atributos

    return (
        <nav className="paginacion">

            <div>
                <button
                    disabled={pagina === 1}
                    onClick={() => paginacion(pagina - 1)}
                >
                    &lt;-
                </button>
                {pageNumbers.map(pageNumber => (
                    <button
                        key={pageNumber}
                        className={pagina === pageNumber ? "activo" : ""}
                        onClick={() => paginacion(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    disabled={pagina === totalPaginas}
                    onClick={() => paginacion(pagina + 1)}
                >
                    -&gt;
                </button>
            </div>

            {/* Input para ir a una página directamente */}
            <div className="page-input">
                <input
                    type="number"
                    value={pagina}
                    min="1"
                    max={totalPaginas}
                    onChange={handlePageInput}
                    aria-label="Go to page"
                />
                <span> / {totalPaginas}</span>
            </div>

        </nav>
    )
}