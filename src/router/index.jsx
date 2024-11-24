import {createBrowserRouter} from "react-router-dom"
import {Component, Suspense} from "react"
import Error from "../pages/Error.jsx"
import {getRazas} from "../pages/ListaRazas.jsx"

import {Principal} from "./principal.jsx"
import {Inicio} from "./inicio.jsx"
import {Nosotros} from "./nosotros.jsx"
import {ListaRazas} from "./listaRazas.jsx"
import {Raza} from "./raza.jsx"
import {Contacto} from "./contacto.jsx"
import {Favoritos} from "./favoritos.jsx";
import PrivadoFavoritos from "../layouts/PrivadoFavoritos.jsx";

// Componente de carga mientras se cargan los demás componentes
class Loading extends Component {
    render() {
        return (
            <div id="cargador">
                <div id="spinner"></div>
            </div>
        )
    }
}

/*
    Configuración de las rutas de la aplicación
    - Se carga el componente Principal
    - Se definen las rutas de la aplicación
    - Se cargan los componentes de las rutas
    - Se define un componente de carga mientras se cargan los demás componentes
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading/>}>
                <Principal/>
            </Suspense>
        ),
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Inicio/>
                    </Suspense>
                ),
            },
            {
                path: '/razas',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <ListaRazas/>
                    </Suspense>
                ),
                loader: getRazas,
            },
            {
                path: '/razas/:id',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Raza/>
                    </Suspense>
                ),
            },
            {
                path: '/nosotros',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Nosotros/>
                    </Suspense>
                ),
            },
            {
                path: '/contacto',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Contacto/>
                    </Suspense>
                ),
            },
            {
                path: '/favoritos',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <PrivadoFavoritos/>
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<Loading/>}>
                                <Favoritos/>
                            </Suspense>
                        ),
                    }
                ]
            },
        ],
    },
])
