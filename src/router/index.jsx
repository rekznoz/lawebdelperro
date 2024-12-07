import {createBrowserRouter} from "react-router-dom"
import {lazy, Suspense} from "react"

import {Principal} from "./principal.jsx"
import {Inicio} from "./inicio.jsx"
import {Personalidad} from "./personalidad.jsx"
import {ListaRazas} from "./listaRazas.jsx"
import {Raza} from "./raza.jsx"
import {Contacto} from "./contacto.jsx"
import {Favoritos} from "./favoritos.jsx"
import {Error} from "./error.jsx";
import {Perfil} from "./perfil.jsx";

export const PerfilPublico = lazy(() => import("../pages/PerfilPublico.jsx"))
export const FavoritosPublico = lazy(() => import("../pages/FavoritosPublico.jsx"))

import PrivadoFavoritos from "../layouts/PrivadoFavoritos.jsx"

// import {getRazas} from "../hooks/GetRazas.jsx";
import {GetDataRaza} from "../hooks/GetDataRaza.jsx";

import {Loading} from "../components/Loading.jsx";
import {obtenerFavoritosPublico, obtenerUsuario, obtenerUsuarioPublico} from "../config/FirebaseDB.jsx";


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
        errorElement: (
            <Suspense fallback={<Loading/>}>
                <Principal>
                    <Error/>
                </Principal>
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Inicio/>
                    </Suspense>
                ),
                //loader: getRazas,
            },
            {
                path: '/test',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Personalidad/>
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
                path: '/razas',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <ListaRazas/>
                    </Suspense>
                ),
                //loader: getRazas,
            },
            {
                path: '/razas/:id',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <Raza/>
                    </Suspense>
                ),
                loader: GetDataRaza,
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
            {
                path: '/favoritos/:id',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <FavoritosPublico/>
                    </Suspense>
                ),
                loader: obtenerFavoritosPublico,
            },
            {
                path: '/perfil',
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
                                <Perfil/>
                            </Suspense>
                        ),
                    }
                ]
            },
            {
                path: '/perfil/:id',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <PerfilPublico/>
                    </Suspense>
                ),
                loader: obtenerUsuarioPublico,
            },
        ],
    },
])
