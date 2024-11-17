import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Error from "../pages/Error.jsx";

// Carga del componente Principal
const Principal = lazy(() => import("../layouts/Principal.jsx"));

// Carga de los componentes
const Inicio = lazy(() => import("../pages/Inicio.jsx"));
const Nosotros = lazy(() => import("../pages/Nosotros.jsx"));
const ListaRazas = lazy(() => import("../pages/ListaRazas.jsx"));
const Raza = lazy(() => import("../pages/Raza.jsx"));
const Contacto = lazy(() => import("../pages/Contacto.jsx"));

// Componente de carga mientras se cargan los demás componentes
const Loading = () => (
    <div id="cargador">
        <div id="spinner"></div>
    </div>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <Principal />
            </Suspense>
        ),
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading />}>
                        <Inicio />
                    </Suspense>
                ),
            },
            {
                path: '/razas',
                element: (
                    <Suspense fallback={<Loading />}>
                        <ListaRazas />
                    </Suspense>
                ),
            },
            {
                path: '/razas/:id',
                element: (
                    <Suspense fallback={<Loading />}>
                        <Raza />
                    </Suspense>
                ),
            },
            {
                path: '/nosotros',
                element: (
                    <Suspense fallback={<Loading />}>
                        <Nosotros />
                    </Suspense>
                ),
            },
            {
                path: '/contacto',
                element: (
                    <Suspense fallback={<Loading />}>
                        <Contacto />
                    </Suspense>
                ),
            },
        ],
    },
]);
