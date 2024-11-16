import {createBrowserRouter} from "react-router-dom";
import Error from "../pages/Error.jsx";
import Principal from "../layouts/Principal.jsx";
import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import ListaRazas from "../pages/ListaRazas.jsx";
import Raza from "../pages/Raza.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Inicio />,
            },
            {
                path: '/about',
                element: <Nosotros />,
            },
            {
                path: '/razas',
                element: <ListaRazas />,
                //loader: cargarBlog,
            },
            {
                path: '/razas/:id',
                element: <Raza />,
                //loader: cargarPost,
            }
        ],
    },
    ]
)