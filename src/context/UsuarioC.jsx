import {createContext, useEffect, useState} from "react"
import {auth} from "../config/FirebaseAuth.jsx"
import {obtenerFavoritos, obtenerUsuario} from "../config/FirebaseDB.jsx"

export const UsuarioC = createContext()

/**
 * Proveedor de usuario
 * @param {Object} props - Atributos del componente
 * @param {Object} props.children - Componentes hijos
 * @returns {JSX.Element} Componente
 */
export default function UsuarioProvider({children}) {

    const [usuario, setUsuario] = useState(null)
    const [datosUsuario, setDatosUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUsuario(user)
                obtenerUsuario(user.uid).then(data => {
                    setDatosUsuario(data)
                })
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
        <UsuarioC.Provider value={{usuario, setUsuario, datosUsuario, setDatosUsuario, cargando}}>
            {children}
        </UsuarioC.Provider>
    )
}
