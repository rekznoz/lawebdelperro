import {UsuarioC} from "../context/UsuarioC.jsx"
import {useContext, useEffect} from "react"
import {Outlet, useNavigate} from "react-router-dom"

/**
 * Componente que muestra la página de favoritos
 * @returns {JSX.Element}
 * @constructor
 */
export default function PrivadoFavoritos() {
    const {usuario} = useContext(UsuarioC)
    const navigate = useNavigate()

    useEffect(() => {
        if (!usuario) {
            navigate('/')
        }
    })

    return <Outlet />
}