import "../css/paginacion.css"

export default function Paginacion(atributos) {

    const {pagina, totalPaginas, paginacion, pageNumbers, handlePageInput} = atributos

    return (
        <nav className="paginacion">

            <div>
                <button
                    disabled={pagina === 1}
                    onClick={() => paginacion(pagina - 1)}
                >
                    Previous
                </button>
                {pageNumbers.map(pageNumber => (
                    <button
                        key={pageNumber}
                        className={pagina === pageNumber ? "active" : ""}
                        onClick={() => paginacion(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    disabled={pagina === totalPaginas}
                    onClick={() => paginacion(pagina + 1)}
                >
                    Next
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