import {useContext} from "react";
import {UsuarioC} from "../context/UsuarioC.jsx";

export default function Favoritos() {

    const {usuario, datosUsuario, cargando} = useContext(UsuarioC);

    if (cargando) return <p>Cargando datos...</p>;

    if (!usuario) return <p>No has iniciado sesión.</p>;

    return (
        <>
            <div id='area1'>
                <h1>Bienvenido, {usuario.uid || "Usuario"}!</h1>
            </div>
            <div id='area2'>
                {datosUsuario ? (
                    <div>
                        <p>Email: {datosUsuario.nombre}</p>
                        <p>Rol: {datosUsuario.nombre}</p>
                    </div>
                ) : (
                    <p>No se encontraron datos adicionales del usuario.</p>
                )}
            </div>
            <div id='area3'>
                <h1>Favoritos</h1>
            </div>
        </>
    )

}