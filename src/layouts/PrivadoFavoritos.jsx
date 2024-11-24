import {UsuarioC} from "../context/UsuarioC.jsx";
import {useContext, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

export default function PrivadoFavoritos() {
    const {usuario} = useContext(UsuarioC)
    const navigate = useNavigate()

    useEffect(() => {
        if (!usuario) {
            navigate('/')
        }
    });

    return <Outlet />
}