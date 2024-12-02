import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './css/import.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/index.jsx";
import UsuarioProvider from "./context/UsuarioC.jsx";
import {RazasProvider} from "./context/RazasC.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UsuarioProvider>
            <RazasProvider>
                <RouterProvider router={router}/>
            </RazasProvider>
        </UsuarioProvider>
    </StrictMode>,
)
