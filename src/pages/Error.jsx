import {Link, useRouteError} from "react-router-dom"

import dog_error from '../assets/error/error_dog.gif'

export default function Error() {
    const error = useRouteError()
    return (
        <>
            <div id='area1'>
                <div className="carta-texto-raza">
                    <h1>¡Ups! Algo salió mal</h1>
                    <img className="imagen_error_perro" src={dog_error} alt="Perro triste"/>
                </div>
            </div>
            <div id="area2">
                <div className="pagina-error">
                    <p className="mensaje-error">
                        {error.message || "Ha ocurrido un error inesperado."}
                    </p>

                    {/* Mostrar el código de error si está disponible */}
                    {/*
                        error.code && (
                        <div className="codigo-error">
                            <strong>Código </strong> <p>{error.code}</p>
                        </div>
                    )
                    */
                    }

                    {/* Mostrar el estado HTTP si está disponible */}
                    {error.status && (
                        <div className="estado-error">
                            <strong>Estado HTTP </strong> {error.status}
                        </div>
                    )}

                    {/* Detalles del error (stack) */}
                    {/*
                        error.stack && (
                        <div className="error-stack">
                            <strong>Detalles del error </strong>
                            <pre>{error.stack}</pre>
                        </div>
                    )
                    */
                    }
                </div>
            </div>
            <div id="area3">
                <Link to="/" className="enlace-error">
                    Volver al inicio
                </Link>
            </div>
        </>
    )
}