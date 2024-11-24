import {createContext, useEffect, useState} from "react";
import {auth} from "../config/FirebaseAuth.jsx";

export const UsuarioC = createContext()

export default function UsuarioProvider({children}) {

        const [usuario, setUsuario] = useState(null)
        const [cargando, setCargando] = useState(true)

        useEffect(() => {
            return auth.onAuthStateChanged(usuario => {
                setUsuario(usuario)
                setCargando(false)
            })
        }, [])

        if (cargando) {
            return <p>Cargando...</p>
        }

        return (
            <UsuarioC.Provider value={{usuario, setUsuario, cargando}}>
                {children}
            </UsuarioC.Provider>
        )
}