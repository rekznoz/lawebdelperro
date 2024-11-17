import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Error from "../pages/Error.jsx";

// Carga perezosa del componente Principal
const Principal = React.lazy(() => import("../layouts/Principal.jsx"));

// Carga perezosa de los componentes
const Inicio = React.lazy(() => import("../pages/Inicio.jsx"));
const Nosotros = React.lazy(() => import("../pages/Nosotros.jsx"));
const ListaRazas = React.lazy(() => import("../pages/ListaRazas.jsx"));
const Raza = React.lazy(() => import("../pages/Raza.jsx"));
const Contacto = React.lazy(() => import("../pages/Contacto.jsx"));

// Componente de carga mientras se cargan los demás componentes
const Loading = () => (
    <div className="loading">
        <p>Cargando...</p>
        <div className="spinner"></div>
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
