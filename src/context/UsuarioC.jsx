import {createContext, useEffect, useState} from "react"
import {auth} from "../config/FirebaseAuth.jsx"
import {GetUserData} from "../config/FirebaseDB.jsx"

export const UsuarioC = createContext()

export default function UsuarioProvider({children}) {

    const [usuario, setUsuario] = useState(null)
    const [datosUsuario, setDatosUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                // Usuario autenticado
                setUsuario(user)
                // Obtén datos desde Firestore
                const data = await GetUserData("usuarios", user.uid)
                setDatosUsuario(data)
            } else {
                setUsuario(null)
                setDatosUsuario(null)
            }
            setCargando(false)
        })

        return () => unsubscribe() // Limpia el suscriptor
    }, [])

    if (cargando) {
        return <p>Cargando...</p>
    }

    return (
        <UsuarioC.Provider value={{usuario, datosUsuario, setUsuario, cargando}}>
            {children}
        </UsuarioC.Provider>
    )
}
