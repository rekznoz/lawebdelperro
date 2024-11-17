import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Error from "../pages/Error.jsx";
import Principal from "../layouts/Principal.jsx";

// Lazy loading de componentes
const Inicio = React.lazy(() => import("../pages/Inicio.jsx"));
const Nosotros = React.lazy(() => import("../pages/Nosotros.jsx"));
const ListaRazas = React.lazy(() => import("../pages/ListaRazas.jsx"));
const Raza = React.lazy(() => import("../pages/Raza.jsx"));
const Contacto = React.lazy(() => import("../pages/Contacto.jsx"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<div>Cargando Inicio...</div>}>
                        <Inicio />
                    </Suspense>
                ),
            },
            {
                path: '/razas',
                element: (
                    <Suspense fallback={<div>Cargando Lista de Razas...</div>}>
                        <ListaRazas />
                    </Suspense>
                ),
            },
            {
                path: '/razas/:id',
                element: (
                    <Suspense fallback={<div>Cargando Detalle de Raza...</div>}>
                        <Raza />
                    </Suspense>
                ),
            },
            {
                path: '/nosotros',
                element: (
                    <Suspense fallback={<div>Cargando Nosotros...</div>}>
                        <Nosotros />
                    </Suspense>
                ),
            },
            {
                path: '/contacto',
                element: (
                    <Suspense fallback={<div>Cargando Contacto...</div>}>
                        <Contacto />
                    </Suspense>
                ),
            },
        ],
    },
]);
